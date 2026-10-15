import React from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App.tsx";
import { preloadPublicRoute } from "./prerender/preload";
import "./index.css";

// Error boundary component
class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean; error: Error | null }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("App Error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: "20px", fontFamily: "sans-serif", color: "white", background: "#0a0a0a", minHeight: "100vh" }}>
          <h1>Something went wrong</h1>
          <p>{this.state.error?.message}</p>
          <pre style={{ background: "#1a1a1a", padding: "10px", overflow: "auto", color: "#fff" }}>
            {this.state.error?.stack}
          </pre>
        </div>
      );
    }

    return this.props.children;
  }
}

async function boot() {
  const rootElement = document.getElementById("root");
  if (!rootElement) {
    throw new Error("Root element not found");
  }

  const prerendered =
    rootElement.childElementCount > 0 || (rootElement.textContent || "").trim().length > 0;
  if (prerendered) {
    await preloadPublicRoute(window.location.pathname);
  }

  const app = (
    <React.StrictMode>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </React.StrictMode>
  );

  if (prerendered) {
    hydrateRoot(rootElement, app);
  } else {
    createRoot(rootElement).render(app);
  }
}

function showBootError(error: unknown) {
  console.error("Failed to render app:", error);
  const wrapper = document.createElement("div");
  wrapper.setAttribute("style", "padding: 20px; font-family: sans-serif; color: white; background: #0a0a0a; min-height: 100vh;");

  const heading = document.createElement("h1");
  heading.textContent = "Failed to start application";

  const message = document.createElement("p");
  message.textContent = error instanceof Error ? error.message : "Unknown error";

  const stack = document.createElement("pre");
  stack.setAttribute("style", "background: #1a1a1a; padding: 10px; overflow: auto; color: #fff;");
  stack.textContent = error instanceof Error ? (error.stack ?? "") : String(error);

  wrapper.appendChild(heading);
  wrapper.appendChild(message);
  wrapper.appendChild(stack);

  document.body.replaceChildren(wrapper);
}

boot().catch(showBootError);
