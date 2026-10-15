import type { ReactNode } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ORIGIN = "https://rankmehigher.com";

export type Crumb = { name: string; path: string };

type Props = {
  path: string;
  title: string;
  description: string;
  crumbs: Crumb[];
  robots?: string;
  schema?: object[];
  children: ReactNode;
};

/** Shared shell for marketing pages: head tags, breadcrumbs, nav, footer. */
const MarketingLayout = ({ path, title, description, crumbs, robots, schema = [], children }: Props) => {
  const url = `${ORIGIN}${path}`;
  const all = [{ name: "Home", path: "/" }, ...crumbs];
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: all.map((c, i) => ({ "@type": "ListItem", position: i + 1, name: c.name, item: `${ORIGIN}${c.path}` })),
  };
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        {robots ? <meta name="robots" content={robots} /> : null}
        <link rel="canonical" href={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={`${ORIGIN}/assets/logo.png`} />
        <meta property="og:site_name" content="Rank Me Higher" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <script type="application/ld+json">{JSON.stringify(breadcrumb)}</script>
        {schema.map((s, i) => (
          <script key={i} type="application/ld+json">{JSON.stringify(s)}</script>
        ))}
      </Helmet>
      <main className="relative min-h-screen bg-background">
        <Navbar />
        <div className="mx-auto max-w-content px-6 pt-24 md:pt-28">
          <nav aria-label="Breadcrumb" className="text-xs text-white/40">
            {all.map((c, i) => (
              <span key={c.path}>
                {i > 0 && <span className="mx-2">/</span>}
                {i < all.length - 1 ? (
                  <Link to={c.path} className="hover:text-white/70">{c.name}</Link>
                ) : (
                  <span className="text-white/60">{c.name}</span>
                )}
              </span>
            ))}
          </nav>
        </div>
        {children}
        <Footer />
      </main>
    </>
  );
};

export default MarketingLayout;

export const Section = ({ title, children, id }: { title?: string; children: ReactNode; id?: string }) => (
  <section id={id} className="border-t border-white/[0.06] py-12 md:py-16">
    <div className="mx-auto max-w-content px-6">
      {title && <h2 className="font-heading text-2xl font-bold tracking-tight text-foreground md:text-3xl">{title}</h2>}
      <div className="mt-6 text-white/65">{children}</div>
    </div>
  </section>
);

export const Bullets = ({ items }: { items: string[] }) => (
  <ul className="space-y-2.5">
    {items.map((item) => (
      <li key={item} className="flex gap-3 leading-relaxed">
        <span aria-hidden className="mt-[0.7em] h-px w-3 shrink-0 bg-primary/70" />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

export const PageHero = ({ eyebrow, h1, sub, children }: { eyebrow: string; h1: string; sub: string; children?: ReactNode }) => (
  <header className="mx-auto max-w-content px-6 pb-12 pt-8 md:pb-16">
    <p className="font-orbitron text-[10px] uppercase tracking-[0.22em] text-primary">{eyebrow}</p>
    <h1 className="mt-4 max-w-3xl font-heading text-[clamp(2.25rem,4.5vw,3.25rem)] font-extrabold leading-[1.08] tracking-[-0.03em] text-foreground">
      {h1}
    </h1>
    <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/60 md:text-lg">{sub}</p>
    {children && <div className="mt-8">{children}</div>}
  </header>
);
