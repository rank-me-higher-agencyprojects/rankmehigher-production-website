import type { ComponentType } from "react";

type PageModule = { default: ComponentType };
type Loader = () => Promise<PageModule>;

/**
 * Public pages that are code-split. The homepage is imported statically.
 * Build-time prerender and the client both fill this cache before the first
 * render, so the hydrated tree matches the HTML (a still-pending React.lazy
 * would render the Suspense fallback instead).
 */
const loaders: Record<string, Loader> = {
  "/localmapbooster": () => import("@/pages/LocalMapBooster"),
  "/services/websites": () => import("@/pages/services/Websites"),
  "/services/seo": () => import("@/pages/services/SEO"),
  "/services/content-ads": () => import("@/pages/services/ContentAds"),
  "/services/google-ads": () => import("@/pages/services/GoogleAds"),
  "/services/outbound": () => import("@/pages/services/Outbound"),
  "/blog": () => import("@/pages/Blog"),
  "/blog/:slug": () => import("@/pages/BlogPost"),
  "/contact": () => import("@/pages/Contact"),
  "/careers": () => import("@/pages/Careers"),
};

const cache = new Map<string, ComponentType>();

export function routeIdFromPathname(pathname: string): string | null {
  const path = pathname.length > 1 && pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;
  if (path.startsWith("/blog/") && path.length > "/blog/".length) return "/blog/:slug";
  return Object.prototype.hasOwnProperty.call(loaders, path) ? path : null;
}

export async function preloadPublicRoute(pathname: string): Promise<void> {
  const id = routeIdFromPathname(pathname);
  if (!id || cache.has(id)) return;
  const mod = await loaders[id]();
  cache.set(id, mod.default);
}

export function getPreloaded(id: string): ComponentType | undefined {
  return cache.get(id);
}
