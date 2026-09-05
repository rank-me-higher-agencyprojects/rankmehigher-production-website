/**
 * Post-build script: create per-route HTML shells with correct meta tags.
 *
 * For SEO-critical public pages, this creates dist/{route}/index.html files
 * with the correct <title> and <meta name="description"> baked in, so crawlers
 * that don't execute JavaScript still see the right metadata.
 *
 * The server.js already checks for these pre-rendered files and serves them.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.resolve(__dirname, '..', 'dist');

// Route-specific metadata for SEO-critical public pages
const ROUTE_META = {
  '/services/websites': {
    title: 'AI Website Builder for Local Business | Rank Me Higher',
    description: 'The AI researches your market and builds a local-SEO-correct website in minutes, then texts you the live preview. Free build — go live from $99/mo.',
  },
  '/services/seo': {
    title: 'Local SEO Websites — Rank Higher on Google | Rank Me Higher',
    description: 'SEO isn\'t a retainer here — it\'s built into every site the AI ships: correct NAP, JSON-LD, honest hours, city and service pages, fast mobile pages.',
  },
  '/services/content-ads': {
    title: 'Content & Ads That Land on Pages Built to Convert',
    description: 'Your website is the asset every ad clicks to. The AI builds pages that convert ad traffic — real photos, fast load, instant lead capture.',
  },
  '/services/google-ads': {
    title: 'Google Ads for Local Businesses | Rank Me Higher',
    description: 'Google Ads pay off when the click lands on a fast page built to convert. We run campaigns for platform businesses. Start with a free AI-built site.',
  },
  '/services/outbound': {
    title: 'Instant Lead Capture & Delivery | Rank Me Higher',
    description: 'Every site captures leads and texts them to you in seconds — SMS, email, and webhooks included. The $199/mo plan adds a dedicated business number.',
  },
  '/careers': {
    title: 'Careers at Rank Me Higher | Remote Platform & AI Jobs',
    description: 'Join the team building the AI platform that runs 40+ local business websites. Remote roles in engineering, marketing, creative, and sales.',
  },
  '/contact': {
    title: 'Contact Rank Me Higher | AI Websites for Local Business',
    description: 'Text (773) 572-4686 or send a message. Fastest path: take the free website quiz on the homepage — the AI builds your site in minutes.',
  },
  '/localmapbooster': {
    title: 'Google Business Profile Optimization | Rank Me Higher',
    description: 'Your Google Business Profile is half of local search. The $149/mo plan pairs your AI-built website with GBP optimization — reviews coming next.',
  },
  '/blog': {
    title: 'Local SEO & AI Website Insights | Rank Me Higher Blog',
    description: 'Local SEO strategies, Google Maps ranking tips, and AI website insights — from the team behind the platform running 40+ local business sites.',
  },
};

function injectMeta(html, meta) {
  // Replace the default title
  let result = html.replace(
    /<title>[^<]*<\/title>/,
    `<title>${meta.title}</title>`
  );

  // Replace the default meta description (handle both self-closing and non-self-closing)
  result = result.replace(
    /<meta name="description" content="[^"]*"\s*\/?>/,
    `<meta name="description" content="${meta.description}">`
  );

  // Replace og:title
  result = result.replace(
    /<meta property="og:title" content="[^"]*"\s*\/?>/,
    `<meta property="og:title" content="${meta.title}">`
  );

  // Replace og:description
  result = result.replace(
    /<meta property="og:description" content="[^"]*"\s*\/?>/,
    `<meta property="og:description" content="${meta.description}">`
  );

  // Replace twitter:title
  result = result.replace(
    /<meta name="twitter:title" content="[^"]*"\s*\/?>/,
    `<meta name="twitter:title" content="${meta.title}">`
  );

  // Replace twitter:description
  result = result.replace(
    /<meta name="twitter:description" content="[^"]*"\s*\/?>/,
    `<meta name="twitter:description" content="${meta.description}">`
  );

  return result;
}

function fixFontPreloads(html) {
  // Resolve unhashed font preload paths to actual hashed filenames in dist/assets/
  const assetsDir = path.join(DIST, 'assets');
  const assetFiles = fs.readdirSync(assetsDir);
  return html.replace(
    /href="\/assets\/((?:inter|montserrat)-latin-\d+-normal)\.woff2"/g,
    (match, baseName) => {
      const hashed = assetFiles.find(f => f.startsWith(baseName) && f.endsWith('.woff2'));
      return hashed ? `href="/assets/${hashed}"` : match;
    }
  );
}

function run() {
  // First fix font preload hashes in the main index.html
  const shellPath = path.join(DIST, 'index.html');
  let shellHtml = fs.readFileSync(shellPath, 'utf-8');
  shellHtml = fixFontPreloads(shellHtml);
  fs.writeFileSync(shellPath, shellHtml);

  let count = 0;
  for (const [route, meta] of Object.entries(ROUTE_META)) {
    const routeDir = path.join(DIST, route);
    fs.mkdirSync(routeDir, { recursive: true });

    const routeHtml = injectMeta(shellHtml, meta);
    fs.writeFileSync(path.join(routeDir, 'index.html'), routeHtml);
    count++;
  }

  console.log(`✅ Injected route-specific meta tags for ${count} pages`);
}

run();
