import { Link } from "react-router-dom";
import MarketingLayout, { PageHero, Section, Bullets } from "@/components/marketing/MarketingLayout";
import { CtaBlock, CtaRow, ReviewProof } from "@/components/marketing/Cta";
import { CASE_STUDIES, PORTFOLIO } from "@/lib/marketing-data";

const Examples = () => (
  <MarketingLayout
    path="/examples/"
    title="Website Examples: Real Client Sites in Chicagoland | Rank Me Higher"
    description="Real websites running on Rank Me Higher: Truck Clinic in Romeoville, Off-Tint in Lisle, QTA Tax in Oak Brook, Pro Repair in Lockport and more. See what we build."
    crumbs={[{ name: "Examples", path: "/examples/" }]}
    schema={[
      {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: "Rank Me Higher client website examples",
        url: "https://rankmehigher.com/examples/",
        hasPart: PORTFOLIO.map((p) => ({ "@type": "CreativeWork", name: `${p.name} website`, about: `${p.trade}, ${p.city}` })),
      },
    ]}
  >
    <PageHero
      eyebrow="Examples"
      h1="Real websites for real local businesses"
      sub="These are client sites that run on Rank Me Higher today, mostly trades and service businesses around Chicago. 40+ live websites and counting."
    >
      <CtaRow />
    </PageHero>

    <Section title="Client sites">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {PORTFOLIO.map((p) => (
          <figure key={p.name} className="overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.02]">
            <img src={p.img} alt={`${p.name} website, ${p.trade} in ${p.city}`} loading="lazy" decoding="async" width={640} height={400} className="aspect-[16/10] w-full object-cover object-top" />
            <figcaption className="p-4">
              <p className="font-medium text-foreground">{p.name}</p>
              <p className="text-sm text-white/50">{p.trade} · {p.city}</p>
              {p.url && (
                <a href={p.url} target="_blank" rel="noopener" className="mt-2 inline-block text-sm text-primary underline underline-offset-4">
                  Visit live site
                </a>
              )}
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>

    {CASE_STUDIES.map((c) => (
      <Section key={c.id} id={c.id} title={`Case study: ${c.name}`}>
        <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <p className="text-sm text-white/45">{c.trade} · {c.city}</p>
            <p className="mt-3 leading-relaxed">{c.business}</p>
            <h3 className="mt-6 font-medium text-foreground">What the site does</h3>
            <div className="mt-3">
              <Bullets items={c.onTheSite} />
            </div>
            <p className="mt-6 text-xs text-white/35">Source: {c.source}.</p>
            <a href={c.url} target="_blank" rel="noopener" className="mt-3 inline-block text-sm text-primary underline underline-offset-4">
              See {c.name} live
            </a>
          </div>
          <img src={c.img} alt={`${c.name} website`} loading="lazy" decoding="async" width={640} height={400} className="w-full rounded-xl border border-white/[0.08] object-cover object-top" />
        </div>
      </Section>
    ))}

    <Section title="Websites by trade and town">
      <p className="text-sm leading-relaxed">
        <Link to="/websites-for/truck-repair/" className="text-primary underline underline-offset-4">Truck repair</Link> ·{" "}
        <Link to="/websites-for/roofers/" className="text-primary underline underline-offset-4">Roofers</Link> ·{" "}
        <Link to="/websites-for/plumbers/" className="text-primary underline underline-offset-4">Plumbers</Link> ·{" "}
        <Link to="/websites-for/hvac/" className="text-primary underline underline-offset-4">HVAC</Link> ·{" "}
        <Link to="/locations/romeoville-il/" className="text-primary underline underline-offset-4">Romeoville</Link> ·{" "}
        <Link to="/locations/lockport-il/" className="text-primary underline underline-offset-4">Lockport</Link> ·{" "}
        <Link to="/locations/lisle-il/" className="text-primary underline underline-offset-4">Lisle</Link> ·{" "}
        <Link to="/locations/oak-brook-il/" className="text-primary underline underline-offset-4">Oak Brook</Link> ·{" "}
        <Link to="/locations/mundelein-il/" className="text-primary underline underline-offset-4">Mundelein</Link>
      </p>
      <ReviewProof />
    </Section>

    <CtaBlock title="Want a site like these? See yours free first." />
  </MarketingLayout>
);

export default Examples;
