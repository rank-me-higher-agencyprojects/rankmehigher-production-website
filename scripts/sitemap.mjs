/**
 * Write public/sitemap.xml from seo/routes.js.
 * Blog lastmod is the post date. Every other URL uses the git commit date
 * of that page's source file. Only final 200 canonical URLs are listed.
 */
import { execSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { canonicalUrl, routes } from "../seo/routes.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const OUT = path.join(ROOT, "public", "sitemap.xml");

function gitLastmod(source) {
  const date = execSync(`git log -1 --format=%cs -- ${source}`, {
    cwd: ROOT,
    encoding: "utf8",
  }).trim();
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) {
    throw new Error(`No git lastmod for ${source} (got ${JSON.stringify(date)})`);
  }
  return date;
}

if (routes.length !== 17) {
  throw new Error(`Expected 17 sitemap routes, found ${routes.length}`);
}

const body = routes
  .map((route) => {
    if (route.path !== "/" && !route.path.endsWith("/")) {
      throw new Error(`Route is missing a trailing slash: ${route.path}`);
    }
    const loc = canonicalUrl(route.path);
    if (!loc.endsWith("/")) {
      throw new Error(`Sitemap loc is missing a trailing slash: ${loc}`);
    }
    const lastmod = route.lastmod || gitLastmod(route.source);
    if (!/^\d{4}-\d{2}-\d{2}$/.test(lastmod)) {
      throw new Error(`Bad lastmod for ${route.path}: ${lastmod}`);
    }
    return `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`;
  })
  .join("\n");

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${body}
</urlset>
`;

if (xml.includes("/llms.txt")) {
  throw new Error("Sitemap must not list /llms.txt");
}

fs.writeFileSync(OUT, xml);
console.log(`Wrote ${routes.length} URLs to public/sitemap.xml`);
