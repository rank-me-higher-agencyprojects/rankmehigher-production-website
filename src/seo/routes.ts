/**
 * Single source for indexable marketing URLs.
 *
 * Sitemap generation and build-time prerender both read `indexableRoutes()`.
 * Blog posts are derived from `blogPosts`, so a new post is added to the
 * sitemap and the prerender set without a second list. A new static page
 * still needs a React route in `src/App.tsx` plus an entry in `staticPages`.
 *
 * Canonical form is the trailing-slash URL (except "/"). That matches the
 * 301 Express static sends when a prerendered `dist/<route>/index.html`
 * directory exists — the same redirect the live site already applies.
 */
import { blogPosts } from "@/data/blogPosts";

export const SITE_ORIGIN = "https://rankmehigher.com";

export interface IndexableRoute {
  /** Router location. No trailing slash, except the homepage "/". */
  path: string;
  /** Public canonical path, including the trailing slash (homepage is "/"). */
  canonicalPath: string;
  /** Repo file dated with `git log` when `lastmod` is omitted. */
  sourceFile?: string;
  /** Explicit YYYY-MM-DD. Posts use their published date. */
  lastmod?: string;
  changefreq: "weekly" | "monthly";
  priority: string;
}

const staticPages: IndexableRoute[] = [
  { path: "/", canonicalPath: "/", sourceFile: "src/pages/Index.tsx", changefreq: "weekly", priority: "1.0" },
  { path: "/services/websites", canonicalPath: "/services/websites/", sourceFile: "src/pages/services/Websites.tsx", changefreq: "monthly", priority: "0.9" },
  { path: "/services/seo", canonicalPath: "/services/seo/", sourceFile: "src/pages/services/SEO.tsx", changefreq: "monthly", priority: "0.9" },
  { path: "/services/outbound", canonicalPath: "/services/outbound/", sourceFile: "src/pages/services/Outbound.tsx", changefreq: "monthly", priority: "0.8" },
  { path: "/services/content-ads", canonicalPath: "/services/content-ads/", sourceFile: "src/pages/services/ContentAds.tsx", changefreq: "monthly", priority: "0.8" },
  { path: "/services/google-ads", canonicalPath: "/services/google-ads/", sourceFile: "src/pages/services/GoogleAds.tsx", changefreq: "monthly", priority: "0.8" },
  { path: "/localmapbooster", canonicalPath: "/localmapbooster/", sourceFile: "src/pages/LocalMapBooster.tsx", changefreq: "monthly", priority: "0.9" },
  { path: "/contact", canonicalPath: "/contact/", sourceFile: "src/pages/Contact.tsx", changefreq: "monthly", priority: "0.8" },
  { path: "/careers", canonicalPath: "/careers/", sourceFile: "src/pages/Careers.tsx", changefreq: "weekly", priority: "0.7" },
  { path: "/blog", canonicalPath: "/blog/", sourceFile: "src/data/blogPosts.ts", changefreq: "weekly", priority: "0.8" },
];

export function publishedDate(display: string): string {
  const parsed = new Date(display);
  if (Number.isNaN(parsed.getTime())) {
    throw new Error(`Unparseable blog date: ${display}`);
  }
  return parsed.toISOString().slice(0, 10);
}

export function indexableRoutes(): IndexableRoute[] {
  const postDates = blogPosts.map((post) => publishedDate(post.date));
  const latestPost = postDates.reduce((latest, date) => (date > latest ? date : latest));

  const pages = staticPages.map((page) =>
    page.path === "/blog" ? { ...page, lastmod: latestPost } : page,
  );

  const posts: IndexableRoute[] = blogPosts.map((post) => ({
    path: `/blog/${post.slug}`,
    canonicalPath: `/blog/${post.slug}/`,
    lastmod: publishedDate(post.date),
    changefreq: "monthly",
    priority: "0.7",
  }));

  return [...pages, ...posts];
}

export function canonicalUrl(canonicalPath: string): string {
  return `${SITE_ORIGIN}${canonicalPath}`;
}
