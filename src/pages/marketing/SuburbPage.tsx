import { Link } from "react-router-dom";
import MarketingLayout, { PageHero, Section, Bullets } from "@/components/marketing/MarketingLayout";
import { CtaBlock, CtaRow } from "@/components/marketing/Cta";
import { CASE_STUDIES, PORTFOLIO, SUBURBS, TRADES } from "@/lib/marketing-data";

const SuburbPage = ({ slug }: { slug: string }) => {
  const town = SUBURBS.find((s) => s.slug === slug)!;
  const path = `/locations/${town.slug}/`;
  const clients = PORTFOLIO.filter((p) => town.clients.includes(p.name));
  const trades = TRADES.filter((t) => town.trades.includes(t.slug));
  return (
    <MarketingLayout
      path={path}
      title={town.title}
      description={town.description}
      crumbs={[{ name: `Websites in ${town.name}`, path }]}
      schema={[
        {
          "@context": "https://schema.org",
          "@type": "Service",
          name: `Websites for ${town.name}, IL businesses`,
          serviceType: "Website design",
          provider: { "@id": "https://rankmehigher.com/#organization" },
          areaServed: { "@type": "City", name: `${town.name}, IL` },
          offers: { "@type": "Offer", price: "99", priceCurrency: "USD" },
        },
      ]}
    >
      <PageHero eyebrow={`${town.name}, IL · ${town.county}`} h1={town.h1} sub={town.intro}>
        <CtaRow />
      </PageHero>

      <Section title={`What a ${town.name} business site needs`}>
        <Bullets items={town.local} />
      </Section>

      {clients.length > 0 && (
        <Section title={`${town.name} businesses on Rank Me Higher`}>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {clients.map((p) => {
              const study = CASE_STUDIES.find((c) => c.name === p.name);
              return (
                <figure key={p.name} className="overflow-hidden rounded-xl border border-white/[0.08]">
                  <img src={p.img} alt={`${p.name} website`} loading="lazy" decoding="async" width={640} height={400} className="aspect-[16/10] w-full object-cover object-top" />
                  <figcaption className="p-3 text-sm">
                    <span className="text-foreground">{p.name}</span> · {p.trade}
                    {study && (
                      <Link to={`/examples/#${study.id}`} className="ml-2 text-primary underline underline-offset-4">Case study</Link>
                    )}
                  </figcaption>
                </figure>
              );
            })}
          </div>
        </Section>
      )}

      <Section title={`Popular trades in ${town.name}`}>
        <ul className="grid gap-3 md:grid-cols-3">
          {trades.map((t) => (
            <li key={t.slug}>
              <Link to={`/websites-for/${t.slug}/`} className="block rounded-lg border border-white/[0.08] p-4 text-sm hover:border-primary/40">
                <span className="text-foreground">{t.name} websites</span>
                <span className="mt-1 block text-white/45">{t.pages[0]}</span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="How it works">
        <p className="leading-relaxed">
          Answer 6 questions about your business. The AI researches {town.name} and your competitors, writes your pages and builds the site, then
          texts you the live link. You see the whole thing free. $99/mo when you put it live, and after that you change anything by chatting with the
          AI. <Link to="/pricing/" className="text-primary underline underline-offset-4">See pricing</Link> or{" "}
          <a href="/#free-website" className="text-primary underline underline-offset-4">get your free website</a>.
        </p>
        {SUBURBS.filter((s) => s.slug !== town.slug).length > 0 && (
          <p className="mt-4 text-sm">
            Nearby:{" "}
            {SUBURBS.filter((s) => s.slug !== town.slug).map((s, i) => (
              <span key={s.slug}>
                {i > 0 && " · "}
                <Link to={`/locations/${s.slug}/`} className="text-primary underline underline-offset-4">{s.name}</Link>
              </span>
            ))}
          </p>
        )}
      </Section>

      <CtaBlock title={`Get your free ${town.name} website`} />
    </MarketingLayout>
  );
};

export default SuburbPage;
