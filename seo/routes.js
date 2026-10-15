/**
 * Public marketing routes for rankmehigher.com.
 *
 * Canonical form is a trailing slash (`/` for the homepage). These 17 URLs are
 * the only entries in the sitemap — each one must return 200. `/llms.txt` is
 * intentionally omitted (it is a text file, not an HTML page, and listing it
 * next to redirecting URLs was a crawl-quality problem).
 *
 * `lastmod` is committed here so the production build does not need git.
 * Blog dates are the published dates from src/data/blogPosts.ts. Static pages
 * use the last source-commit date recorded when the route was added.
 */
export const SITE_ORIGIN = "https://rankmehigher.com";

export const routes = [
  {
    path: "/",
    source: "src/pages/Index.tsx",
    lastmod: "2026-09-22",
    changefreq: "weekly",
    priority: "1.0",
  },
  {
    path: "/services/websites/",
    source: "src/pages/services/Websites.tsx",
    lastmod: "2026-10-15",
    changefreq: "monthly",
    priority: "0.9",
  },
  {
    path: "/services/seo/",
    source: "src/pages/services/SEO.tsx",
    lastmod: "2026-10-15",
    changefreq: "monthly",
    priority: "0.9",
  },
  {
    path: "/services/outbound/",
    source: "src/pages/services/Outbound.tsx",
    lastmod: "2026-10-15",
    changefreq: "monthly",
    priority: "0.8",
  },
  {
    path: "/services/content-ads/",
    source: "src/pages/services/ContentAds.tsx",
    lastmod: "2026-10-15",
    changefreq: "monthly",
    priority: "0.8",
  },
  {
    path: "/services/google-ads/",
    source: "src/pages/services/GoogleAds.tsx",
    lastmod: "2026-10-15",
    changefreq: "monthly",
    priority: "0.8",
  },
  {
    path: "/localmapbooster/",
    source: "src/pages/LocalMapBooster.tsx",
    lastmod: "2026-10-15",
    changefreq: "monthly",
    priority: "0.9",
  },
  {
    path: "/contact/",
    source: "src/pages/Contact.tsx",
    lastmod: "2026-10-15",
    changefreq: "monthly",
    priority: "0.8",
  },
  {
    path: "/careers/",
    source: "src/pages/Careers.tsx",
    lastmod: "2026-10-15",
    changefreq: "weekly",
    priority: "0.7",
  },
  {
    path: "/blog/",
    source: "src/pages/Blog.tsx",
    lastmod: "2026-10-15",
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

/**
 * Client-rendered app routes. They are not prerendered and must not receive
 * the homepage document. Unknown paths (including unknown blog slugs) are
 * absent from this list so they fall through to 404.html.
 */
export const spaRoutes = [
  "/auth",
  "/privacy",
  "/terms",
  "/website-submissions",
  "/website-submission-confirmation",
  "/funnel-submissions",
  "/funnel-submission-confirmation",
  "/call-center-kpi",
  "/submissions-dashboard",
  "/agency-dashboard",
  "/avaadminpanel",
  "/team",
  "/cdl-agency-portal",
  "/cdl-recruiters",
  "/cdl-carriers",
  "/subscriptions",
  "/website-prompting",
  "/website-builder",
  "/website-command-center",
  "/client-portal",
  "/client-dashboard",
  "/reseller-portal",
  "/ava-voice-calls",
  "/ava-training",
  "/task-flow",
  "/applicant-tracker",
  "/content-portal",
  "/manager-portal",
  "/editor-portal",
  "/gbpmanagement",
  "/pto-calendar",
  "/team-tasks",
  "/team-access",
  "/team-portal",
  "/task-pipeline",
  "/team-tracker",
  "/client-sites-tracker",
];

export const spaPrefixes = ["/agency/client", "/avaseo", "/avabyrankmehigher"];

export function buildRedirectRules() {
  const rules = [];
  for (const route of routes) {
    if (route.path === "/") continue;
    const slashless = route.path.replace(/\/$/, "");
    rules.push({ from: slashless, to: route.path, status: 301 });
  }
  for (const route of spaRoutes) {
    rules.push({ from: route, to: "/spa.html", status: 200 });
    rules.push({ from: `${route}/`, to: "/spa.html", status: 200 });
  }
  for (const prefix of spaPrefixes) {
    rules.push({ from: prefix, to: "/spa.html", status: 200 });
    rules.push({ from: `${prefix}/`, to: "/spa.html", status: 200 });
    rules.push({ from: `${prefix}/*`, to: "/spa.html", status: 200 });
  }
  return rules;
}

export function renderRedirectsFile() {
  const lines = [
    "# Generated from seo/routes.js. Slashless marketing URLs 301 to the",
    "# trailing-slash page. App routes rewrite to the empty SPA shell.",
    "# Anything else falls through to 404.html.",
  ];
  for (const rule of buildRedirectRules()) {
    lines.push(`${rule.from} ${rule.to} ${rule.status}`);
  }
  return `${lines.join("\n")}\n`;
}

export function parseRedirects(text) {
  const rules = [];
  for (const line of text.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const parts = trimmed.split(/\s+/);
    if (parts.length < 3) continue;
    const status = Number(parts[parts.length - 1]);
    const to = parts[parts.length - 2];
    const from = parts.slice(0, -2).join(" ");
    if (!from || !to || !Number.isFinite(status)) continue;
    rules.push({ from, to, status });
  }
  return rules;
}

export function matchRedirect(rules, pathname) {
  for (const rule of rules) {
    if (rule.from.endsWith("/*")) {
      const prefix = rule.from.slice(0, -2);
      if (pathname === prefix || pathname.startsWith(`${prefix}/`)) return rule;
      continue;
    }
    if (pathname === rule.from) return rule;
  }
  return null;
}
