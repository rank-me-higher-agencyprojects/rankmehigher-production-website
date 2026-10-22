import { Link } from "react-router-dom";
import MarketingLayout, { PageHero, Section, Bullets } from "@/components/marketing/MarketingLayout";
import { CtaBlock, CtaRow } from "@/components/marketing/Cta";
import { CASE_STUDIES, PORTFOLIO } from "@/lib/marketing-data";

const SHOWN = new Set(["Truck Clinic", "QTA Tax"]);

const Examples = () => {
  const portfolio = PORTFOLIO.filter((p) => SHOWN.has(p.name));
  const studies = CASE_STUDIES.filter((c) => SHOWN.has(c.name));
  return (
  <MarketingLayout
    path="/examples/"
    title="Website Examples: Real Client Sites | Rank Me Higher"
    description="Real websites running on Rank Me Higher: Truck Clinic in Romeoville and QTA Tax in Oak Brook."
    crumbs={[{ name: "Examples", path: "/examples/" }]}
    schema={[
      {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: "Rank Me Higher client website examples",
        url: "https://rankmehigher.com/examples/",
        hasPart: portfolio.map((p) => ({ "@type": "CreativeWork", name: `${p.name} website`, about: `${p.trade}, ${p.city}` })),
      },
    ]}
  >
    <PageHero
      eyebrow="Examples"
      h1="Real websites for real local businesses"
      sub="Truck Clinic in Romeoville and QTA Tax in Oak Brook run on Rank Me Higher today."
    >
      <CtaRow />
    </PageHero>

    <Section title="Client sites">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {portfolio.map((p) => (
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

    {studies.map((c) => (
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
      <p className="mb-4 max-w-3xl leading-relaxed">
        A shared template and a site written for one local business are different builds.{" "}
        <Link to="/blog/custom-coded-websites-local-businesses-2026/" className="text-primary underline underline-offset-4">Why that difference shows up in 2026</Link>{" "}
        is the comparison for owners weighing the two.
      </p>
      <p className="text-sm leading-relaxed">
        <Link to="/websites-for/truck-repair/" className="text-primary underline underline-offset-4">Truck repair</Link>
        {" · "}
        <Link to="/locations/romeoville-il/" className="text-primary underline underline-offset-4">Romeoville</Link>
      </p>
    </Section>

    <CtaBlock title="Want a site like these? See yours free first." />
  </MarketingLayout>
  );
};

export default Examples;
