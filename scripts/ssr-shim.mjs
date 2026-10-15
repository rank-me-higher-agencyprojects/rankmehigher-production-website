/**
 * Installed before the SSR module graph loads.
 * Supabase's client reads `localStorage` at import time. Leave `window`
 * undefined so browser-only libraries stay on their server path.
 */
const memoryStorage = () => {
  const map = new Map();
  return {
    getItem: (key) => (map.has(String(key)) ? map.get(String(key)) : null),
    setItem: (key, value) => {
      map.set(String(key), String(value));
    },
    removeItem: (key) => {
      map.delete(String(key));
    },
    clear: () => map.clear(),
    key: (index) => Array.from(map.keys())[index] ?? null,
    get length() {
      return map.size;
    },
  };
};

Object.defineProperty(globalThis, "localStorage", {
  value: memoryStorage(),
  configurable: true,
});
Object.defineProperty(globalThis, "sessionStorage", {
  value: memoryStorage(),
  configurable: true,
});

// Vite's dev SSR transform emits jsxDEV. React's production jsx-dev-runtime
// sets that export to undefined, so prerender must not run as production.
