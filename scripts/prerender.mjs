/**
 * Build-time prerender for public marketing routes.
 *
 * Renders each indexable route to static HTML with react-dom/server, then
 * writes dist/<route>/index.html (homepage → dist/index.html). The client
 * hydrates that markup. Also writes sitemap.xml from the same route list.
 *
 * No browser binary and nothing extra in the served JS bundle.
 */
import { createServer } from 'vite';
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';
import { inlineCriticalCss } from './inline-critical-css.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const DIST = path.join(ROOT, 'dist');

function installDomPolyfills() {
  const memoryStorage = () => {
    const map = new Map();
    return {
      getItem: (key) => (map.has(key) ? map.get(key) : null),
      setItem: (key, value) => map.set(String(key), String(value)),
      removeItem: (key) => map.delete(key),
      clear: () => map.clear(),
      key: (index) => [...map.keys()][index] ?? null,
      get length() {
        return map.size;
      },
    };
  };

  const storageBroken = () => {
    try {
      globalThis.localStorage.getItem('__prerender_probe');
      return false;
    } catch {
      return true;
    }
  };
  if (typeof globalThis.localStorage === 'undefined' || storageBroken()) {
    globalThis.localStorage = memoryStorage();
  }
  if (typeof globalThis.sessionStorage === 'undefined') {
    globalThis.sessionStorage = memoryStorage();
  }

  if (typeof globalThis.matchMedia !== 'function') {
    globalThis.matchMedia = () => ({
      matches: false,
      media: '',
      onchange: null,
      addEventListener() {},
      removeEventListener() {},
      addListener() {},
      removeListener() {},
      dispatchEvent() {
        return false;
      },
    });
  }

  if (typeof globalThis.IntersectionObserver === 'undefined') {
    globalThis.IntersectionObserver = class {
      observe() {}
      unobserve() {}
      disconnect() {}
      takeRecords() {
        return [];
      }
    };
  }

  if (typeof globalThis.requestAnimationFrame !== 'function') {
    globalThis.requestAnimationFrame = (cb) => setTimeout(() => cb(Date.now()), 16);
    globalThis.cancelAnimationFrame = (id) => clearTimeout(id);
  }
  if (typeof globalThis.scrollTo !== 'function') globalThis.scrollTo = () => {};
  if (typeof globalThis.navigator === 'undefined') {
    globalThis.navigator = { userAgent: 'prerender', language: 'en-US' };
  }
}

function fixFontPreloads(html) {
  const assetsDir = path.join(DIST, 'assets');
  const assetFiles = fs.readdirSync(assetsDir);
  return html.replace(
    /href="\/assets\/((?:inter|montserrat)-latin-\d+-normal)\.woff2"/g,
    (match, baseName) => {
      const hashed = assetFiles.find((file) => file.startsWith(baseName) && file.endsWith('.woff2'));
      return hashed ? `href="/assets/${hashed}"` : match;
    },
  );
}

function gitLastmod(sourceFile) {
  try {
    const out = execSync(`git log -1 --format=%cs -- ${JSON.stringify(sourceFile)}`, {
      cwd: ROOT,
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'ignore'],
    }).trim();
    return /^\d{4}-\d{2}-\d{2}$/.test(out) ? out : null;
  } catch {
    return null;
  }
}

function xmlEscape(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function extractJsonLd(html) {
  return html.match(/<script type="application\/ld\+json">[\s\S]*?<\/script>/g) || [];
}

function stripJsonLd(html) {
  return html.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>\s*/g, '');
}

function applyHead(template, helmet, { canonicalPath, keepShellJsonLd }) {
  let html = template;
  const title = helmet?.title?.toString?.() || '';
  const meta = helmet?.meta?.toString?.() || '';
  const link = helmet?.link?.toString?.() || '';
  const script = helmet?.script?.toString?.() || '';

  if (!title.includes('<title')) {
    throw new Error(`Missing <title> for ${canonicalPath}`);
  }

  html = html.replace(/<title>[^<]*<\/title>/, title.trim());
  html = html.replace(/<meta name="description" content="[^"]*"\s*\/?>/, '');
  html = html.replace(/<meta property="og:(?:title|description|type|url|site_name)" content="[^"]*"\s*\/?>/g, '');
  html = html.replace(/<meta name="twitter:(?:title|description)" content="[^"]*"\s*\/?>/g, '');
  if (meta.includes('og:image')) {
    html = html.replace(/<meta property="og:image" content="[^"]*"\s*\/?>/g, '');
  }
  if (meta.includes('twitter:image')) {
    html = html.replace(/<meta name="twitter:image" content="[^"]*"\s*\/?>/g, '');
  }
  html = html.replace(/<link rel="canonical" href="[^"]*"\s*\/?>/g, '');

  const shellJsonLd = extractJsonLd(html);
  html = stripJsonLd(html);

  const professionalService = keepShellJsonLd
    ? shellJsonLd.filter((block) => block.includes('"ProfessionalService"'))
    : [];

  const headExtra = [meta.trim(), link.trim(), script.trim(), ...professionalService]
    .filter(Boolean)
    .join('\n');
  html = html.replace('</head>', `${headExtra}\n</head>`);
  return html;
}

function countTags(html, tag) {
  const matches = html.match(new RegExp(`<${tag}[\\s>]`, 'gi'));
  return matches ? matches.length : 0;
}

function attrValue(tag, name) {
  const match = tag.match(new RegExp(`\\b${name}="([^"]*)"`));
  return match ? match[1] : null;
}

function tagsWith(html, tagName, predicate) {
  return [...html.matchAll(new RegExp(`<${tagName}\\b[^>]*>`, 'gi'))]
    .map((match) => match[0])
    .filter(predicate);
}

function assertPage(html, route, origin) {
  const titleCount = countTags(html, 'title');
  const h1Count = countTags(html, 'h1');
  const canonicals = tagsWith(html, 'link', (tag) => attrValue(tag, 'rel') === 'canonical')
    .map((tag) => attrValue(tag, 'href'));
  const ogUrls = tagsWith(html, 'meta', (tag) => attrValue(tag, 'property') === 'og:url')
    .map((tag) => attrValue(tag, 'content'));
  const expected = `${origin}${route.canonicalPath}`;

  const problems = [];
  if (titleCount !== 1) problems.push(`title count ${titleCount}`);
  if (/<title>[^<]*Page Not Found/i.test(html)) problems.push('rendered NotFound');
  if (h1Count !== 1) problems.push(`h1 count ${h1Count}`);
  if (canonicals.length !== 1 || canonicals[0] !== expected) problems.push(`canonical ${canonicals.join(',') || 'missing'}`);
  if (ogUrls.length !== 1 || ogUrls[0] !== expected) problems.push(`og:url ${ogUrls.join(',') || 'missing'}`);
  if (!html.includes('<div id="root">') || /<div id="root">\s*<\/div>/.test(html)) problems.push('empty #root');
  if (route.path.startsWith('/blog/') && !html.includes('"BreadcrumbList"')) problems.push('missing BreadcrumbList');
  if (route.path.startsWith('/blog/') && !html.includes('"Article"')) problems.push('missing Article');

  if (problems.length) {
    throw new Error(`${route.canonicalPath}: ${problems.join('; ')}`);
  }
}

function writeSitemap(routes) {
  const body = routes
    .map((route) => {
      const lines = [
        '  <url>',
        `    <loc>${xmlEscape(route.loc)}</loc>`,
        `    <lastmod>${xmlEscape(route.lastmod)}</lastmod>`,
        `    <changefreq>${xmlEscape(route.changefreq)}</changefreq>`,
        `    <priority>${xmlEscape(route.priority)}</priority>`,
        '  </url>',
      ];
      return lines.join('\n');
    })
    .join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`;
  fs.writeFileSync(path.join(ROOT, 'public', 'sitemap.xml'), xml);
  fs.writeFileSync(path.join(DIST, 'sitemap.xml'), xml);
}

async function main() {
  installDomPolyfills();

  if (!fs.existsSync(path.join(DIST, 'index.html'))) {
    throw new Error('dist/index.html missing — run vite build first');
  }

  const vite = await createServer({
    configFile: path.join(ROOT, 'vite.config.ts'),
    server: { middlewareMode: true },
    appType: 'custom',
    logLevel: 'error',
  });

  try {
    const { render } = await vite.ssrLoadModule('/src/entry-server.tsx');
    const { indexableRoutes, SITE_ORIGIN } = await vite.ssrLoadModule('/src/seo/routes.ts');
    const routes = indexableRoutes();

    let template = fs.readFileSync(path.join(DIST, 'index.html'), 'utf8');
    template = fixFontPreloads(template);
    fs.writeFileSync(path.join(DIST, '_shell.html'), template);

    const sitemapEntries = [];
    const written = [];

    for (const route of routes) {
      const lastmod = route.lastmod || gitLastmod(route.sourceFile);
      if (!lastmod) {
        throw new Error(`No lastmod for ${route.canonicalPath} (${route.sourceFile || 'no source file'})`);
      }
      sitemapEntries.push({
        loc: `${SITE_ORIGIN}${route.canonicalPath}`,
        lastmod,
        changefreq: route.changefreq,
        priority: route.priority,
      });

      const rendered = await render(route.path);
      let html = applyHead(template, rendered.helmet, {
        canonicalPath: route.canonicalPath,
        keepShellJsonLd: route.path === '/',
      });
      if (!html.includes('<div id="root"></div>')) {
        throw new Error('Built index.html has no empty <div id="root"></div> to fill');
      }
      html = html.replace('<div id="root"></div>', `<div id="root">${rendered.html}</div>`);

      const outPath = route.path === '/'
        ? path.join(DIST, 'index.html')
        : path.join(DIST, route.canonicalPath, 'index.html');
      fs.mkdirSync(path.dirname(outPath), { recursive: true });
      fs.writeFileSync(outPath, html);
      written.push({ file: outPath, route });
      console.log(`prerendered ${route.canonicalPath}`);
    }

    writeSitemap(sitemapEntries);

    for (const { file } of written) await inlineCriticalCss(file);
    await inlineCriticalCss(path.join(DIST, '_shell.html'));
    const notFound = path.join(DIST, '404.html');
    if (fs.existsSync(notFound)) await inlineCriticalCss(notFound);

    for (const { file, route } of written) {
      assertPage(fs.readFileSync(file, 'utf8'), route, SITE_ORIGIN);
    }

    console.log(`prerendered ${written.length} routes; sitemap has ${sitemapEntries.length} urls`);
  } finally {
    await vite.close();
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
