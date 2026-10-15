import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { HelmetProvider, type HelmetServerState } from "react-helmet-async";
import { AppProviders, AppRoutes } from "./App";
import { preloadPublicRoute } from "./prerender/preload";

export interface RenderedPage {
  html: string;
  helmet?: HelmetServerState;
}

export async function render(url: string): Promise<RenderedPage> {
  await preloadPublicRoute(url);
  const helmetContext = {} as { helmet?: HelmetServerState };
  const html = renderToString(
    <StrictMode>
      <HelmetProvider context={helmetContext}>
        <AppProviders>
          <StaticRouter location={url}>
            <AppRoutes />
          </StaticRouter>
        </AppProviders>
      </HelmetProvider>
    </StrictMode>,
  );
  return { html, helmet: helmetContext.helmet };
}
