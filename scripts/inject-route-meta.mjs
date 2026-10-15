/**
 * Retired. Route HTML is written by scripts/prerender.mjs, which fills #root
 * and sets the canonical. Running the old meta-only injector would replace
 * those files with empty shells.
 */
console.error("scripts/inject-route-meta.mjs has been replaced by scripts/prerender.mjs");
process.exit(1);
