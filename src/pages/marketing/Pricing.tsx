import { Link } from "react-router-dom";
import MarketingLayout, { PageHero, Section } from "@/components/marketing/MarketingLayout";
import { CtaBlock, CtaRow } from "@/components/marketing/Cta";
import { PLANS } from "@/lib/marketing-data";

const PRICING_FAQ = [
  { q: "Do I pay anything to see my website?", a: "No. The AI builds your full website for free and texts you the live preview link. You only pay when you claim it and put it live on your domain." },
  { q: "Is there a contract or setup fee?", a: "No contracts and no setup fees. Plans are monthly, starting at $99/mo." },
  { q: "Who owns the site and the domain?", a: "You do. Your business, your content, your photos, your domain. If you ever leave, your domain and your content go with you." },
  { q: "What does \"Soon\" mean on a plan?", a: "Those features are on the roadmap and not yet automated in the portal. We label them so you know exactly what's live today before you choose a plan." },
  { q: "Can I change plans later?", a: "Every plan starts the same way, with your free website. Text us if you want to talk through which plan fits." },
];

const Pricing = () => (
  <MarketingLayout
    path="/pricing/"
    title="Pricing: $99/mo AI-Built Websites | Rank Me Higher"
    description="Rank Me Higher pricing: $99/mo for your AI-built website, edited by chat. $149 and $199 plans add Google Business Profile and reviews. Free build, no contracts."
    crumbs={[{ name: "Pricing", path: "/pricing/" }]}
    schema={[
      {
        "@context": "https://schema.org",
        "@type": "Product",
        name: "Rank Me Higher website plans",
        brand: { "@type": "Brand", name: "Rank Me Higher" },
        description: "AI-built local business website, hosted on your domain and edited by chat.",
        offers: PLANS.map((p) => ({
          "@type": "Offer",
          name: p.name,
          price: p.price.replace("$", ""),
          priceCurrency: "USD",
          url: "https://rankmehigher.com/pricing/",
          priceSpecification: { "@type": "UnitPriceSpecification", price: p.price.replace("$", ""), priceCurrency: "USD", unitCode: "MON" },
        })),
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: PRICING_FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      },
    ]}
  >
    <PageHero
      eyebrow="Pricing"
      h1="$99/mo websites for contractors, built by AI"
      sub="The build is free. You see the whole site before you pay anything. Pay only when you claim it and go live on your domain. No contracts, no setup fees."
    >
      <CtaRow />
    </PageHero>

    <Section title="Plans">
      <div className="grid gap-4 md:grid-cols-3">
        {PLANS.map((plan, i) => (
          <div key={plan.price} className={`flex flex-col rounded-xl border p-7 ${i === 0 ? "border-primary/40" : "border-white/[0.08]"} bg-white/[0.02]`}>
            <h3 className="text-sm font-medium text-white/70">{plan.name}</h3>
            <p className="mt-2">
              <span className="font-heading text-4xl font-bold text-foreground">{plan.price}</span>
              <span className="ml-1 text-sm text-white/40">/mo</span>
            </p>
            <p className="mt-2 text-sm text-white/55">{plan.tagline}</p>
            <ul className="mt-6 flex-1 space-y-2.5 text-sm">
              {plan.features.map((f) => (
                <li key={f.text} className="flex items-start justify-between gap-3 text-white/60">
                  <span>{f.text}</span>
                  {f.soon && (
                    <span className="shrink-0 rounded-full border border-white/[0.14] px-2 py-0.5 font-orbitron text-[8px] uppercase tracking-[0.18em] text-white/45">Soon</span>
                  )}
                </li>
              ))}
            </ul>
            <a href="/#free-website" className={`${i === 0 ? "btn-cta-primary" : "btn-cta-ghost"} mt-7 w-full`}>
              Start with the free build
            </a>
          </div>
        ))}
      </div>
      <p className="mt-6 text-sm text-white/45">
        Items marked <strong className="text-white/70">Soon</strong> are on the roadmap and not yet automated in the portal. Everything else is live today. On the $199 plan, the dedicated business phone number and branded email are Soon.
      </p>
    </Section>

    <Section title="What every plan includes">
      <ul className="grid gap-3 md:grid-cols-2">
        {[
          "A complete website researched, written and built by AI for your trade and town",
          "Edit anything by chatting with the AI. Every change is versioned and can be reverted",
          "Hosting, SSL and security handled on your own domain",
          "Leads from your forms delivered to you instantly",
          "You own your content and domain",
          "No contracts and no setup fees",
        ].map((t) => (
          <li key={t} className="rounded-lg border border-white/[0.06] p-4 text-sm">{t}</li>
        ))}
      </ul>
      <p className="mt-6 text-sm">
        Curious how editing by chat works? See the <Link to="/ai-website-editor/" className="text-primary underline underline-offset-4">AI website editor</Link>.
        {" "}See <Link to="/services/websites/" className="text-primary underline underline-offset-4">how the AI builds your website</Link> for the path from the quiz to a live site.
      </p>
    </Section>

    <Section title="Pricing questions">
      <dl className="space-y-6">
        {PRICING_FAQ.map((f) => (
          <div key={f.q}>
            <dt className="font-medium text-foreground">{f.q}</dt>
            <dd className="mt-1 leading-relaxed">{f.a}</dd>
          </div>
        ))}
      </dl>
      <p className="mt-6 text-sm">More answers on the <Link to="/faq/" className="text-primary underline underline-offset-4">FAQ page</Link>.</p>
    </Section>

    <CtaBlock />
  </MarketingLayout>
);

export default Pricing;
