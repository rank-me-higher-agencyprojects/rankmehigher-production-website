/**
 * Atomic production build. Vite, critical CSS, and prerender write a staging
 * directory. `dist` is replaced only after every step succeeds, so a failed
 * build leaves the previous output in place.
 */
import { spawnSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const DIST = path.join(ROOT, "dist");
const STAGING = path.join(ROOT, ".dist-staging");
const BACKUP = path.join(ROOT, ".dist-backup");

function run(command, args, env = {}) {
  const result = spawnSync(command, args, {
    cwd: ROOT,
    stdio: "inherit",
    env: { ...process.env, ...env },
  });
  if (result.status !== 0) {
    throw new Error(`${command} ${args.join(" ")} exited ${result.status}`);
  }
}

function swapIntoDist() {
  fs.rmSync(BACKUP, { recursive: true, force: true });
  if (fs.existsSync(DIST)) fs.renameSync(DIST, BACKUP);
  try {
    fs.renameSync(STAGING, DIST);
  } catch (error) {
    if (!fs.existsSync(DIST) && fs.existsSync(BACKUP)) fs.renameSync(BACKUP, DIST);
    throw error;
  }
  fs.rmSync(BACKUP, { recursive: true, force: true });
}

fs.rmSync(STAGING, { recursive: true, force: true });

try {
  run("node", ["scripts/sitemap.mjs"]);
  run("npx", ["vite", "build", "--outDir", ".dist-staging", "--emptyOutDir"]);
  run("node", ["scripts/inline-critical-css.mjs"], { DIST: STAGING });
  run("node", ["scripts/prerender.mjs"], { DIST: STAGING });
  for (const name of ["spa.html", "404.html", "_redirects", "index.html"]) {
    if (!fs.existsSync(path.join(STAGING, name))) {
      throw new Error(`staging build is missing ${name}`);
    }
  }
  const shell = fs.readFileSync(path.join(STAGING, "spa.html"), "utf8");
  if (/rel="canonical"/i.test(shell) || !shell.includes('<div id="root"></div>')) {
    throw new Error("spa.html is not an empty shell without a canonical");
  }
  swapIntoDist();
  console.log("Swapped staging build into dist");
} catch (error) {
  console.error(error instanceof Error ? error.message : error);
  fs.rmSync(STAGING, { recursive: true, force: true });
  process.exit(1);
}
