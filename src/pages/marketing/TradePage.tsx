import type { ComponentType } from "react";
import { Link } from "react-router-dom";
import MarketingLayout, { PageHero, Section, Bullets } from "@/components/marketing/MarketingLayout";
import { CtaBlock, CtaRow } from "@/components/marketing/Cta";
import { CASE_STUDIES, PORTFOLIO, SUBURBS, TRADES, type Trade, type TradeFaq } from "@/lib/marketing-data";
import TruckRepairSections from "./trade-content/TruckRepairSections";

const ORIGIN = "https://rankmehigher.com";

/** Rich bodies for trades that have outgrown the short template. */
const RICH_BODIES: Partial<Record<string, ComponentType<{ trade: Trade }>>> = {
  "truck-repair": TruckRepairSections,
};

const serviceSchema = (trade: Trade, path: string) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: trade.h1,
  serviceType: "Website design",
  url: `${ORIGIN}${path}`,
  description: trade.serviceDescription ?? trade.description,
  provider: { "@id": `${ORIGIN}/#organization` },
  areaServed: "Chicagoland, IL",
  offers: {
    "@type": "Offer",
    price: "99",
    priceCurrency: "USD",
    url: `${ORIGIN}/pricing/`,
    description: "Free preview. $99/mo when the site goes live on your domain.",
  },
});

const faqSchema = (faqs: TradeFaq[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
});

const TradeFaqList = ({ faqs }: { faqs: TradeFaq[] }) => (
  <Section title="Frequently asked questions">
    <dl className="max-w-3xl space-y-6">
      {faqs.map((item) => (
        <div key={item.q}>
          <dt className="font-medium text-foreground">{item.q}</dt>
          <dd className="mt-1 leading-relaxed">{item.a}</dd>
        </div>
      ))}
    </dl>
    <p className="mt-6 max-w-3xl text-sm leading-relaxed">
      More answers about the free build, chat editing, and what &quot;Soon&quot; means are in the{" "}
      <Link to="/faq/" className="text-primary underline underline-offset-4">full answer list</Link>.
    </p>
  </Section>
);

const ShortTradeBody = ({ trade }: { trade: Trade }) => {
  const examples = PORTFOLIO.filter((p) => trade.examples.includes(p.name));
  return (
    <>
      <Section title={`What the AI builds for ${trade.plural}`}>
        <Bullets items={trade.pages} />
      </Section>

      <Section title="Changes you'll make by chat">
        <Bullets items={trade.jobs} />
        <div className="mt-6 space-y-2 text-sm text-white/55">
          {trade.chatExamples.map((c) => (
            <p key={c} className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-3">{c}</p>
          ))}
        </div>
        <p className="mt-4 text-sm">
          How it works: <Link to="/ai-website-editor/" className="text-primary underline underline-offset-4">the AI website editor</Link>.
        </p>
      </Section>

      {examples.length > 0 ? (
        <Section title={`${trade.name} sites already on Rank Me Higher`}>
          <div className="grid gap-5 sm:grid-cols-3">
            {examples.map((p) => {
              const study = CASE_STUDIES.find((c) => c.name === p.name);
              return (
                <figure key={p.name} className="overflow-hidden rounded-xl border border-white/[0.08]">
                  <img src={p.img} alt={`${p.name} website`} loading="lazy" decoding="async" width={640} height={400} className="aspect-[16/10] w-full object-cover object-top" />
                  <figcaption className="p-3 text-sm">
                    <span className="text-foreground">{p.name}</span> · {p.city}
                    {study && (
                      <>
                        {" · "}
                        <Link to={`/examples/#${study.id}`} className="text-primary underline underline-offset-4">Case study</Link>
                      </>
                    )}
                  </figcaption>
                </figure>
              );
            })}
          </div>
        </Section>
      ) : (
        <Section title="See what we've built">
          <p className="text-sm leading-relaxed">
            We don't have a {trade.name.toLowerCase()} client site to show yet. You can see the same platform at work for truck repair shops, a
            tint shop and a tax firm on our <Link to="/examples/" className="text-primary underline underline-offset-4">examples page</Link>, or
            just have the AI build yours free and judge it yourself.
          </p>
        </Section>
      )}

      <Section title="Pricing">
        <p className="leading-relaxed">
          The build is free. $99/mo when you put it live on your domain, with hosting, SSL, lead capture and the chat editor included. No contracts. <Link to="/pricing/" className="text-primary underline underline-offset-4">Compare plans</Link>.
        </p>
      </Section>

      <Section title="Towns we work in">
        <p className="text-sm">
          {SUBURBS.map((s, i) => (
            <span key={s.slug}>
              {i > 0 && " · "}
              <Link to={`/locations/${s.slug}/`} className="text-primary underline underline-offset-4">{trade.name} websites in {s.name}</Link>
            </span>
          ))}
        </p>
        {TRADES.filter((t) => t.slug !== trade.slug).length > 0 && (
          <p className="mt-3 text-sm">
            Other trades:{" "}
            {TRADES.filter((t) => t.slug !== trade.slug).map((t, i) => (
              <span key={t.slug}>
                {i > 0 && " · "}
                <Link to={`/websites-for/${t.slug}/`} className="text-primary underline underline-offset-4">{t.name}</Link>
              </span>
            ))}
          </p>
        )}
      </Section>
    </>
  );
};

const TradePage = ({ slug }: { slug: string }) => {
  const trade = TRADES.find((t) => t.slug === slug)!;
  const path = `/websites-for/${trade.slug}/`;
  const RichBody = RICH_BODIES[trade.slug];
  const schema = [
    serviceSchema(trade, path),
    ...(trade.faqs && trade.faqs.length > 0 ? [faqSchema(trade.faqs)] : []),
  ];
  return (
    <MarketingLayout
      path={path}
      title={trade.title}
      description={trade.description}
      crumbs={[{ name: trade.h1, path }]}
      schema={schema}
    >
      <PageHero eyebrow={`${trade.name} websites · Chicagoland`} h1={trade.h1} sub={trade.intro}>
        <CtaRow />
      </PageHero>

      {RichBody ? <RichBody trade={trade} /> : <ShortTradeBody trade={trade} />}
      {trade.faqs && trade.faqs.length > 0 && <TradeFaqList faqs={trade.faqs} />}

      <CtaBlock title={`Get your free ${trade.name.toLowerCase()} website`} />
    </MarketingLayout>
  );
};

export default TradePage;
