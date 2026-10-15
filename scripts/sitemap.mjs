/**
 * Write public/sitemap.xml from seo/routes.js.
 * lastmod is the date committed on each route. A route without one uses the
 * UTC build date. This script does not call git.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { EXPECTED_ROUTE_COUNT, canonicalUrl, routes, unlistedRoutes } from "../seo/routes.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const OUT = path.join(ROOT, "public", "sitemap.xml");

function buildDate() {
  return new Date().toISOString().slice(0, 10);
}

if (routes.length !== EXPECTED_ROUTE_COUNT) {
  throw new Error(`Expected ${EXPECTED_ROUTE_COUNT} sitemap routes, found ${routes.length}`);
}
if (new Set(routes.map((r) => r.path)).size !== routes.length) {
  throw new Error("Duplicate route paths in seo/routes.js");
}
for (const hidden of unlistedRoutes) {
  if (routes.some((route) => route.path === hidden.path)) {
    throw new Error(`${hidden.path} is unlisted and must not be in the sitemap`);
  }
}

const fallback = buildDate();

const body = routes
  .map((route) => {
    if (route.path !== "/" && !route.path.endsWith("/")) {
      throw new Error(`Route is missing a trailing slash: ${route.path}`);
    }
    const loc = canonicalUrl(route.path);
    if (!loc.endsWith("/")) {
      throw new Error(`Sitemap loc is missing a trailing slash: ${loc}`);
    }
    const lastmod = route.lastmod || fallback;
    if (!route.lastmod) {
      console.warn(`No lastmod on ${route.path}; using build date ${fallback}`);
    }
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
if (xml.includes("/free-website-audit")) {
  throw new Error("Sitemap must not list /free-website-audit/");
}
if ((xml.match(/<loc>/g) || []).length !== EXPECTED_ROUTE_COUNT) {
  throw new Error(`Sitemap must list exactly ${EXPECTED_ROUTE_COUNT} URLs`);
}

fs.writeFileSync(OUT, xml);
console.log(`Wrote ${routes.length} URLs to public/sitemap.xml`);
