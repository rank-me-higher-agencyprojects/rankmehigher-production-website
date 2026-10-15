import { Link } from "react-router-dom";
import MarketingLayout, { PageHero, Section, Bullets } from "@/components/marketing/MarketingLayout";
import { CtaBlock, CtaRow } from "@/components/marketing/Cta";

const STEPS = [
  { n: "01", t: "Open your portal", d: "Sign in from your phone or computer. Your live site is right there." },
  { n: "02", t: "Click and say the change", d: "Click the part you want to change and describe it in plain words, like you'd text a person." },
  { n: "03", t: "The AI makes it", d: "The change is made on your site. Every edit is saved as a version." },
  { n: "04", t: "Revert anytime", d: "Don't like it? Roll back to any earlier version." },
];

const AiWebsiteEditor = () => (
  <MarketingLayout
    path="/ai-website-editor/"
    title="AI Website Editor: Change Your Site by Chat | Rank Me Higher"
    description="Edit your business website by chatting with AI. Click anything, say the change, and it's done, with every edit versioned and revertable. Included from $99/mo."
    crumbs={[{ name: "AI website editor", path: "/ai-website-editor/" }]}
    schema={[
      {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "Rank Me Higher AI website editor",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        offers: { "@type": "Offer", price: "99", priceCurrency: "USD" },
        url: "https://rankmehigher.com/ai-website-editor/",
      },
    ]}
  >
    <PageHero
      eyebrow="AI website editor"
      h1="Control your website by talking to AI"
      sub="No more emailing your web guy and waiting a week. Open your portal, click anything on your site, say the change and the AI makes it. Every edit is versioned and revertable."
    >
      <CtaRow />
    </PageHero>

    <Section title="How editing by chat works">
      <ol className="grid gap-4 md:grid-cols-4">
        {STEPS.map((s) => (
          <li key={s.n} className="rounded-xl border border-white/[0.08] p-5">
            <span className="font-orbitron text-xs text-primary">{s.n}</span>
            <p className="mt-2 font-medium text-foreground">{s.t}</p>
            <p className="mt-1 text-sm leading-relaxed">{s.d}</p>
          </li>
        ))}
      </ol>
    </Section>

    <Section title="Things contractors actually ask it to do">
      <Bullets
        items={[
          "\"Change our hours to 7 to 5 and add Saturday mornings.\"",
          "\"Add trailer repair to the services list.\"",
          "\"Put a banner on the homepage: closed Monday for the holiday.\"",
          "\"Replace the top photo with this picture of the new truck.\"",
          "\"Add Bolingbrook to the areas we serve.\"",
        ]}
      />
    </Section>

    <Section title="The old way vs editing by chat">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border border-white/[0.08] p-6">
          <h3 className="font-medium text-foreground">The old way</h3>
          <div className="mt-3 text-sm">
            <Bullets items={["Email your web person and wait", "Pay per change or wait for the monthly batch", "Learn a page builder you'll forget by next month", "Hope nothing breaks"]} />
          </div>
        </div>
        <div className="rounded-xl border border-primary/40 p-6">
          <h3 className="font-medium text-foreground">With Rank Me Higher</h3>
          <div className="mt-3 text-sm">
            <Bullets items={["Say the change in plain words", "Included in every plan from $99/mo", "Nothing to learn", "Every edit is versioned, so you can revert anything"]} />
          </div>
        </div>
      </div>
    </Section>

    <Section title="What's live today and what's next">
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h3 className="font-medium text-foreground">Live</h3>
          <div className="mt-3 text-sm">
            <Bullets items={["Chat editor: click, say the change, versioned and revertable", "SMS updates: build progress, your live link and every lead by text", "Hosting, domain and SSL", "Lead capture with instant delivery"]} />
          </div>
        </div>
        <div>
          <h3 className="font-medium text-foreground">Soon</h3>
          <div className="mt-3 text-sm">
            <Bullets items={["Rankings in your portal", "Task requests like \"add a page for spring specials\"", "Google Business Profile auto-optimization", "Review generation"]} />
          </div>
        </div>
      </div>
      <p className="mt-6 text-sm">
        See <Link to="/pricing/" className="text-primary underline underline-offset-4">pricing</Link> or{" "}
        <Link to="/examples/" className="text-primary underline underline-offset-4">sites already running on the platform</Link>.
      </p>
    </Section>

    <CtaBlock title="Get a site you can edit by chat. The build is free." />
  </MarketingLayout>
);

export default AiWebsiteEditor;
