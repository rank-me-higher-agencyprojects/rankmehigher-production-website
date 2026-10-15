/**
 * Build-time prerender. Renders each public route to static HTML so the
 * first byte includes the real body, one H1, a unique title/description,
 * and a self-referencing trailing-slash canonical.
 *
 * Runs after `vite build` and critical-CSS inlining. Renders with a production
 * Vite SSR bundle so dev stacks never enter the HTML.
 */
import "./ssr-shim.mjs";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { build } from "vite";
import { canonicalUrl, renderRedirectsFile, routes } from "../seo/routes.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const DIST = process.env.DIST ? path.resolve(process.env.DIST) : path.join(ROOT, "dist");
const SSR_OUT = path.join(ROOT, ".dist-ssr");

function fixFontPreloads(html) {
  const assetsDir = path.join(DIST, "assets");
  if (!fs.existsSync(assetsDir)) return html;
  const assetFiles = fs.readdirSync(assetsDir);
  return html.replace(
    /href="\/assets\/((?:inter|montserrat)-latin-\d+-normal)\.woff2"/g,
    (match, baseName) => {
      const hashed = assetFiles.find((file) => file.startsWith(baseName) && file.endsWith(".woff2"));
      return hashed ? `href="/assets/${hashed}"` : match;
    }
  );
}

function loadManifest() {
  for (const rel of [".vite/manifest.json", "manifest.json"]) {
    const file = path.join(DIST, rel);
    if (fs.existsSync(file)) {
      return JSON.parse(fs.readFileSync(file, "utf8"));
    }
  }
  return null;
}

function rewriteAssetUrls(html, manifest) {
  if (!manifest) return html;
  const map = new Map();
  for (const [key, value] of Object.entries(manifest)) {
    if (!value || typeof value.file !== "string") continue;
    const published = `/${value.file}`;
    map.set(`/${key.replace(/^\//, "")}`, published);
    if (value.src) map.set(`/${String(value.src).replace(/^\//, "")}`, published);
  }
  const swap = (url) => {
    const clean = url.split("?")[0];
    return map.get(clean) || null;
  };
  return html.replace(/\b(src|href|srcset)="([^"]+)"/g, (full, attr, url) => {
    if (attr === "srcset") {
      const next = url
        .split(",")
        .map((part) => {
          const bits = part.trim().split(/\s+/);
          const mapped = swap(bits[0]);
          if (!mapped) return part;
          bits[0] = mapped;
          return bits.join(" ");
        })
        .join(", ");
      return `${attr}="${next}"`;
    }
    const mapped = swap(url);
    return mapped ? `${attr}="${mapped}"` : full;
  });
}

function attr(tag, name) {
  const match = tag.match(new RegExp(`\\b${name}="([^"]*)"`, "i"));
  return match ? match[1] : null;
}

function helmetTags(helmet) {
  const blocks = [helmet.title, helmet.meta, helmet.link, helmet.script]
    .map((part) => (part && typeof part.toString === "function" ? part.toString() : ""))
    .join("\n");
  return blocks.match(/<script\b[^>]*>[\s\S]*?<\/script>|<title\b[^>]*>[\s\S]*?<\/title>|<meta\b[^>]*\/?>|<link\b[^>]*\/?>/gi) || [];
}

function upsertTag(html, tag) {
  if (/^<title\b/i.test(tag)) {
    if (!/<title\b/i.test(html)) return html.replace("</head>", `${tag}\n</head>`);
    return html.replace(/<title\b[^>]*>[\s\S]*?<\/title>/i, tag);
  }
  const name = attr(tag, "name");
  const property = attr(tag, "property");
  const rel = attr(tag, "rel");
  let pattern = null;
  if (/^<meta\b/i.test(tag) && name) {
    pattern = new RegExp(`<meta\\b[^>]*\\bname="${name}"[^>]*>`, "i");
  } else if (/^<meta\b/i.test(tag) && property) {
    pattern = new RegExp(`<meta\\b[^>]*\\bproperty="${property}"[^>]*>`, "i");
  } else if (/^<link\b/i.test(tag) && rel) {
    pattern = new RegExp(`<link\\b[^>]*\\brel="${rel}"[^>]*>`, "i");
  }
  if (pattern && pattern.test(html)) return html.replace(pattern, tag);
  return html.replace("</head>", `${tag}\n</head>`);
}

function applyHelmet(html, helmet) {
  for (const tag of helmetTags(helmet)) {
    if (/^<script\b/i.test(tag)) {
      html = html.replace("</head>", `${tag}\n</head>`);
    } else {
      html = upsertTag(html, tag);
    }
  }
  return html;
}

function outFile(routePath) {
  if (routePath === "/") return path.join(DIST, "index.html");
  const rel = routePath.replace(/^\//, "").replace(/\/$/, "");
  return path.join(DIST, rel, "index.html");
}

function decode(text) {
  return text
    .replace(/&amp;/g, "&")
    .replace(/&nbsp;/g, " ")
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&#x27;/g, "'");
}

function innerText(html) {
  return decode(html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim());
}

function count(html, re) {
  return (html.match(re) || []).length;
}

function pageReport(routePath, html) {
  const titleTag = html.match(/<title\b[^>]*>([\s\S]*?)<\/title>/i);
  const h1 = html.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/i);
  const desc = html.match(/<meta\b[^>]*\bname="description"[^>]*>/i);
  const canon = html.match(/<link\b[^>]*\brel="canonical"[^>]*>/i);
  const og = html.match(/<meta\b[^>]*\bproperty="og:url"[^>]*>/i);
  const root = html.match(/<div id="root">([\s\S]*?)<\/div>\s*(?:<script|<\/body>)/i);
  const words = root ? innerText(root[1]).split(/\s+/).filter(Boolean) : [];
  return {
    route: routePath,
    title: titleTag ? decode(innerText(titleTag[1])) : "",
    description: desc ? decode(attr(desc[0], "content") || "") : "",
    h1: h1 ? innerText(h1[1]) : "",
    h1Count: count(html, /<h1\b/gi),
    canonical: canon ? attr(canon[0], "href") : "",
    canonicalCount: count(html, /rel="canonical"/gi),
    ogUrl: og ? attr(og[0], "content") : "",
    ogUrlCount: count(html, /property="og:url"/gi),
    titleCount: count(html, /<title\b/gi),
    descriptionCount: count(html, /name="description"/gi),
    words: words.length,
  };
}

function assertPage(report) {
  const expected = canonicalUrl(report.route);
  const problems = [];
  if (report.titleCount !== 1 || !report.title) problems.push("title");
  if (report.descriptionCount !== 1 || !report.description) problems.push("description");
  if (report.h1Count !== 1 || !report.h1) problems.push(`h1 (${report.h1Count})`);
  if (report.canonicalCount !== 1 || report.canonical !== expected) {
    problems.push(`canonical ${report.canonical} !== ${expected}`);
  }
  if (report.ogUrlCount !== 1 || report.ogUrl !== expected) {
    problems.push(`og:url ${report.ogUrl} !== ${expected}`);
  }
  if (report.words < 40) problems.push(`body too thin (${report.words} words)`);
  if (problems.length) {
    throw new Error(`${report.route}: ${problems.join("; ")}`);
  }
}

function stripCanonical(html) {
  return html.replace(/\s*<link\b[^>]*\brel="canonical"[^>]*>/gi, "");
}

function assertShell(html, label) {
  if (!html.includes('<div id="root"></div>')) {
    throw new Error(`${label} is missing an empty <div id="root"></div>`);
  }
  if (/rel="canonical"/i.test(html)) {
    throw new Error(`${label} must not include a canonical`);
  }
  if (html.includes("/workspace/") || html.includes("data-stck")) {
    throw new Error(`${label} leaks a server path`);
  }
}

async function loadRenderer() {
  process.env.NODE_ENV = "production";
  await import("./ssr-shim.mjs");
  fs.rmSync(SSR_OUT, { recursive: true, force: true });
  await build({
    root: ROOT,
    mode: "production",
    logLevel: "warn",
    build: {
      ssr: path.join(ROOT, "src/entry-server.tsx"),
      outDir: SSR_OUT,
      emptyOutDir: true,
      sourcemap: false,
    },
  });
  const entry = path.join(SSR_OUT, "entry-server.js");
  if (!fs.existsSync(entry)) {
    throw new Error(`SSR bundle missing at ${entry}`);
  }
  const bundle = fs.readFileSync(entry, "utf8");
  if (bundle.includes("jsx-dev-runtime") || bundle.includes("jsxDEV")) {
    throw new Error("SSR bundle was built with the development JSX runtime");
  }
  return import(pathToFileURL(entry).href);
}

async function run() {
  const shellPath = path.join(DIST, "index.html");
  if (!fs.existsSync(shellPath)) {
    throw new Error(`${shellPath} is missing. Run vite build first.`);
  }
  const manifest = loadManifest();
  let template = stripCanonical(fixFontPreloads(fs.readFileSync(shellPath, "utf8")));
  assertShell(template, "SPA shell");
  fs.writeFileSync(path.join(DIST, "spa.html"), template);
  fs.writeFileSync(path.join(DIST, "404.html"), template);
  fs.writeFileSync(path.join(DIST, "_redirects"), renderRedirectsFile());

  const { render } = await loadRenderer();

  const reports = [];
  for (const route of routes) {
    const { html: appHtml, helmet } = render(route.path);
    let page = applyHelmet(template, helmet);
    page = page.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);
    page = rewriteAssetUrls(page, manifest);
    if (page.includes("/workspace/") || page.includes("data-stck") || page.includes("/src/assets/")) {
      throw new Error(`${route.path} leaked a dev path or unbundled /src/assets URL`);
    }
    const report = pageReport(route.path, page);
    assertPage(report);
    const file = outFile(route.path);
    fs.mkdirSync(path.dirname(file), { recursive: true });
    fs.writeFileSync(file, page);
    reports.push(report);
    console.log(`prerendered ${route.path} (${report.words} words)`);
  }

  const titles = new Set(reports.map((report) => report.title));
  if (titles.size !== reports.length) {
    throw new Error("Titles are not unique across prerendered routes");
  }

  console.log("\n| Route | Title | H1 | Canonical | Words |");
  console.log("| --- | --- | --- | --- | ---: |");
  for (const report of reports) {
    console.log(`| ${report.route} | ${report.title.replace(/\|/g, "\\|")} | ${report.h1.replace(/\|/g, "\\|")} | ${report.canonical} | ${report.words} |`);
  }
}

run().catch((error) => {
  console.error("Prerender failed:", error);
  process.exit(1);
});
