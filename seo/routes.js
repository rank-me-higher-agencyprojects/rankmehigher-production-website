/**
 * Public marketing routes for rankmehigher.com.
 *
 * Canonical form is a trailing slash (`/` for the homepage). These 17 URLs are
 * the only entries in the sitemap — each one must return 200. `/llms.txt` is
 * intentionally omitted (it is a text file, not an HTML page, and listing it
 * next to redirecting URLs was a crawl-quality problem).
 *
 * `lastmod` on blog posts is the post's published date from src/data/blogPosts.ts.
 * Every other route uses the git commit date of `source` at sitemap generation.
 */
export const SITE_ORIGIN = "https://rankmehigher.com";

export const routes = [
  {
    path: "/",
    source: "src/pages/Index.tsx",
    changefreq: "weekly",
    priority: "1.0",
  },
  {
    path: "/services/websites/",
    source: "src/pages/services/Websites.tsx",
    changefreq: "monthly",
    priority: "0.9",
  },
  {
    path: "/services/seo/",
    source: "src/pages/services/SEO.tsx",
    changefreq: "monthly",
    priority: "0.9",
  },
  {
    path: "/services/outbound/",
    source: "src/pages/services/Outbound.tsx",
    changefreq: "monthly",
    priority: "0.8",
  },
  {
    path: "/services/content-ads/",
    source: "src/pages/services/ContentAds.tsx",
    changefreq: "monthly",
    priority: "0.8",
  },
  {
    path: "/services/google-ads/",
    source: "src/pages/services/GoogleAds.tsx",
    changefreq: "monthly",
    priority: "0.8",
  },
  {
    path: "/localmapbooster/",
    source: "src/pages/LocalMapBooster.tsx",
    changefreq: "monthly",
    priority: "0.9",
  },
  {
    path: "/contact/",
    source: "src/pages/Contact.tsx",
    changefreq: "monthly",
    priority: "0.8",
  },
  {
    path: "/careers/",
    source: "src/pages/Careers.tsx",
    changefreq: "weekly",
    priority: "0.7",
  },
  {
    path: "/blog/",
    source: "src/pages/Blog.tsx",
    changefreq: "weekly",
    priority: "0.8",
  },
  {
    path: "/blog/google-maps-ranking-2025/",
    source: "src/data/blogPosts.ts",
    lastmod: "2025-12-20",
    changefreq: "monthly",
    priority: "0.7",
  },
  {
    path: "/blog/local-seo-vs-organic-seo/",
    source: "src/data/blogPosts.ts",
    lastmod: "2025-12-15",
    changefreq: "monthly",
    priority: "0.7",
  },
  {
    path: "/blog/review-generation-strategies/",
    source: "src/data/blogPosts.ts",
    lastmod: "2025-12-10",
    changefreq: "monthly",
    priority: "0.7",
  },
  {
    path: "/blog/google-business-profile-mistakes/",
    source: "src/data/blogPosts.ts",
    lastmod: "2025-12-05",
    changefreq: "monthly",
    priority: "0.7",
  },
  {
    path: "/blog/ai-seo-future/",
    source: "src/data/blogPosts.ts",
    lastmod: "2025-11-28",
    changefreq: "monthly",
    priority: "0.7",
  },
  {
    path: "/blog/service-business-website-tips/",
    source: "src/data/blogPosts.ts",
    lastmod: "2025-11-20",
    changefreq: "monthly",
    priority: "0.7",
  },
  {
    path: "/blog/custom-coded-websites-local-businesses-2026/",
    source: "src/data/blogPosts.ts",
    lastmod: "2026-02-18",
    changefreq: "monthly",
    priority: "0.7",
  },
];

export function canonicalUrl(routePath) {
  if (routePath === "/") return `${SITE_ORIGIN}/`;
  const withSlash = routePath.endsWith("/") ? routePath : `${routePath}/`;
  return `${SITE_ORIGIN}${withSlash}`;
}
