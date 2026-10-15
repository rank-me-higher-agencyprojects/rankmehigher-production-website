/**
 * Local check for POST /api/lead-notify.
 *
 * 1. With RMH_TELEGRAM_BOT_TOKEN / RMH_TELEGRAM_CHAT_ID unset, a valid lead
 *    returns 204 and nothing is sent.
 * 2. With those set and RMH_TELEGRAM_API_BASE pointed at a mock server, the
 *    same lead returns 204 and the mock receives a plain-text sendMessage.
 *
 * The script never prints the token or the request URL.
 */
import { spawn } from "node:child_process";
import http from "node:http";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const TOKEN = "123456:test-token-not-real";
const CHAT_ID = "424242";
const LEAD = {
  type: "website_audit",
  name: "Ada <Lovelace>",
  business: "Analytical Engines",
  phone: "(773) 555-1212",
  email: "ada@example.com",
  website: "https://example.com",
  city: "Lockport",
  message: "Trade: HVAC\nplease look at the homepage",
  hp: "",
};

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

function startMock() {
  const hits = [];
  const server = http.createServer((req, res) => {
    const chunks = [];
    req.on("data", (chunk) => chunks.push(chunk));
    req.on("end", () => {
      const url = req.url || "";
      hits.push({
        pathOk: url === `/bot${TOKEN}/sendMessage`,
        body: Buffer.concat(chunks).toString("utf8"),
      });
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ ok: true }));
    });
  });
  return new Promise((resolve) => {
    server.listen(0, "127.0.0.1", () => {
      const address = server.address();
      resolve({ server, hits, port: address.port });
    });
  });
}

function startApp(port, env) {
  const child = spawn(process.execPath, ["server.js"], {
    cwd: ROOT,
    env: {
      ...process.env,
      // The OpenAI client is constructed at import and refuses to boot without a key.
      // Lead notify does not call it. This dummy is only for the local process.
      AI_INTEGRATIONS_OPENAI_API_KEY: "test",
      OPENAI_API_KEY: "test",
      ...env,
      PORT: String(port),
    },
    stdio: ["ignore", "pipe", "pipe"],
  });
  let out = "";
  let err = "";
  child.stdout.on("data", (chunk) => {
    out += chunk;
  });
  child.stderr.on("data", (chunk) => {
    err += chunk;
  });
  let settled = false;
  const ready = new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      if (settled) return;
      settled = true;
      reject(new Error("server did not start"));
    }, 15000);
    const check = () => {
      if (settled || !out.includes("Server running")) return;
      settled = true;
      clearTimeout(timer);
      resolve();
    };
    child.stdout.on("data", check);
    child.on("exit", (code) => {
      if (settled) return;
      settled = true;
      clearTimeout(timer);
      const safeErr = err.replaceAll(TOKEN, "[token]").slice(0, 500);
      reject(new Error(`server exited ${code} before it was ready: ${safeErr}`));
    });
  });
  return { child, ready, logs: () => ({ out, err }) };
}

async function post(port, body, headers = {}) {
  const response = await fetch(`http://127.0.0.1:${port}/api/lead-notify`, {
    method: "POST",
    headers: { "Content-Type": "application/json", ...headers },
    body: typeof body === "string" ? body : JSON.stringify(body),
  });
  const text = await response.text();
  return { status: response.status, text };
}

async function stop(child) {
  if (!child || child.exitCode !== null) return;
  child.kill("SIGTERM");
  await new Promise((resolve) => {
    const timer = setTimeout(() => {
      child.kill("SIGKILL");
      resolve();
    }, 2000);
    child.on("exit", () => {
      clearTimeout(timer);
      resolve();
    });
  });
}

const apps = [];
let mock;

try {
  const unsetPort = 43171;
  const unset = startApp(unsetPort, {
    RMH_TELEGRAM_BOT_TOKEN: "",
    RMH_TELEGRAM_CHAT_ID: "",
    RMH_TELEGRAM_API_BASE: "",
  });
  apps.push(unset.child);
  await unset.ready;
  const unsetRes = await post(unsetPort, LEAD);
  assert(unsetRes.status === 204, `unset env expected 204, got ${unsetRes.status}`);
  assert(unsetRes.text === "", "unset env response should be empty");
  const bad = await post(unsetPort, { type: "website_audit" });
  assert(bad.status === 400, `invalid lead expected 400, got ${bad.status}`);
  await stop(unset.child);

  mock = await startMock();
  const livePort = 43172;
  const live = startApp(livePort, {
    RMH_TELEGRAM_BOT_TOKEN: TOKEN,
    RMH_TELEGRAM_CHAT_ID: CHAT_ID,
    RMH_TELEGRAM_API_BASE: `http://127.0.0.1:${mock.port}`,
  });
  apps.push(live.child);
  await live.ready;

  const honey = await post(livePort, { ...LEAD, hp: "https://spam.example" });
  assert(honey.status === 204, `honeypot expected 204, got ${honey.status}`);
  assert(mock.hits.length === 0, "honeypot must not call Telegram");

  const sent = await post(livePort, LEAD);
  assert(sent.status === 204, `mock delivery expected 204, got ${sent.status}`);
  assert(mock.hits.length === 1, `expected 1 telegram call, got ${mock.hits.length}`);
  const hit = mock.hits[0];
  assert(hit.pathOk, "telegram path was not /bot<token>/sendMessage");
  const payload = JSON.parse(hit.body);
  assert(payload.chat_id === CHAT_ID, "chat id was not forwarded");
  assert(!payload.parse_mode, "message must be plain text");
  for (const part of ["New lead: website_audit", "Ada ‹Lovelace›", "Analytical Engines", "(773) 555-1212", "ada@example.com", "https://example.com", "Lockport", "Trade: HVAC please look at the homepage"]) {
    assert(payload.text.includes(part), `telegram text missing expected lead detail (${part.slice(0, 24)})`);
  }
  assert(!payload.text.includes("\nplease"), "message newlines must be flattened");
  assert(!hit.body.includes(TOKEN), "token leaked into the telegram body");

  const logs = live.logs();
  assert(!logs.out.includes(TOKEN) && !logs.err.includes(TOKEN), "server logs included the bot token");
  assert(!logs.out.includes("/bot") && !logs.err.includes("/bot"), "server logs included a telegram URL");

  let limited = 0;
  for (let i = 0; i < 10; i += 1) {
    const res = await post(livePort, LEAD);
    if (res.status === 429) limited += 1;
  }
  assert(limited > 0, "per-IP rate limit did not return 429");

  const bulky = JSON.stringify({ ...LEAD, message: "x".repeat(9000) });
  assert(Buffer.byteLength(bulky) > 8192, "fixture was not large enough");
  const huge = await post(livePort, bulky);
  assert(huge.status === 413, `oversized body expected 413, got ${huge.status}`);

  console.log("lead-notify tests passed");
} finally {
  for (const child of apps) await stop(child);
  if (mock) await new Promise((resolve) => mock.server.close(resolve));
}
