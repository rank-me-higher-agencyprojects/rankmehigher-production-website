import { renderToString } from "react-dom/server";
import type { HelmetServerState } from "react-helmet-async";
import App from "./App";

export type HelmetContext = { helmet?: HelmetServerState };

export function render(url: string) {
  const helmetContext: HelmetContext = {};
  const html = renderToString(
    <App routerLocation={url} helmetContext={helmetContext} />
  );
  if (!helmetContext.helmet) {
    throw new Error(`Helmet did not render for ${url}`);
  }
  return { html, helmet: helmetContext.helmet };
}
