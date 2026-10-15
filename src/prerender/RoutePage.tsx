import type { ComponentType, LazyExoticComponent } from "react";
import { getPreloaded } from "./preload";

/**
 * Renders a code-split public page.
 * When the module was preloaded (prerender, or the first client load of a
 * prerendered URL) it renders synchronously so hydration matches.
 * Client-side navigations fall through to React.lazy.
 */
export function RoutePage({
  id,
  lazy: LazyPage,
}: {
  id: string;
  lazy: LazyExoticComponent<ComponentType>;
}) {
  const Preloaded = getPreloaded(id);
  if (Preloaded) return <Preloaded />;
  return <LazyPage />;
}
