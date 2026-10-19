import { Link } from "react-router-dom";
import MarketingLayout, { PageHero, Section } from "@/components/marketing/MarketingLayout";
import { CtaBlock, CtaRow } from "@/components/marketing/Cta";
import { SMS_NUMBER_DISPLAY } from "@/lib/marketing-data";

const GROUPS: { title: string; items: { q: string; a: string }[] }[] = [
  {
    title: "The free website",
    items: [
      { q: "Is it really free?", a: "Yes. The AI researches your market, plans your pages and builds your complete website for free. You get a live preview link by text and see the whole thing before paying anything. You only pay when you claim it and put it live on your domain." },
      { q: "How is it built so fast?", a: "The AI knows what a local site needs to rank on Google: the right structure, real service pages and correct local SEO. It researches your market, plans your site, writes the content and builds it in minutes, not weeks." },
      { q: "What if I already have a website?", a: "The AI studies what you have and builds you a faster site, then your domain moves over when you're ready." },
    ],
  },
  {
    title: "Editing by chat",
    items: [
      { q: "Can I change things myself?", a: "Yes, by chatting. Open your portal, click anything on your site and say the change. The AI makes it. Every edit is versioned, so you can revert anything, anytime." },
      { q: "Do I need any technical skills?", a: "No. If you can send a text message, you can update your website. You describe the change in plain words." },
      { q: "What can't the AI editor do yet?", a: "Rankings in your portal, task requests like \"add a page for spring specials\", Google Business Profile auto-optimization and review generation are labeled Soon on our site. They're on the roadmap and not yet automated." },
    ],
  },
  {
    title: "Pricing and ownership",
    items: [
      { q: "How much does it cost?", a: "Plans start at $99/mo for your website. $149/mo adds Google Business Profile optimization. $199/mo adds a review generator. A dedicated business phone number and branded email are marked Soon on the $199 plan. No contracts, no setup fees." },
      { q: "Who owns the website?", a: "You do. Your business, your content, your photos, your domain. If you ever leave, your domain and your content go with you." },
      { q: "What happens after I claim it?", a: "We connect your domain and put your site live, with hosting and SSL handled. Your portal opens, and from there you edit by chat and get leads delivered instantly." },
    ],
  },
  {
    title: "Talking to us",
    items: [
      { q: "Can I call you?", a: `Our number, ${SMS_NUMBER_DISPLAY}, is SMS only, so text us any time.` },
      { q: "Where are you located?", a: "Rank Me Higher has offices in downtown Chicago (1 N State St) and in Mundelein, IL." },
    ],
  },
];

const Faq = () => (
  <MarketingLayout
    path="/faq/"
    title="FAQ: Free AI Websites, Chat & Pricing | Rank Me Higher"
    description="Answers about Rank Me Higher: how the free AI-built website works, editing your site by chat, $99/mo pricing, ownership, and which features are live versus coming soon."
    crumbs={[{ name: "FAQ", path: "/faq/" }]}
    schema={[
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: GROUPS.flatMap((g) => g.items).map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      },
    ]}
  >
    <PageHero eyebrow="FAQ" h1="Frequently asked questions" sub="Straight answers about the free build, editing by chat, pricing and what's live today.">
      <CtaRow />
    </PageHero>
    {GROUPS.map((g) => (
      <Section key={g.title} title={g.title}>
        <dl className="space-y-6">
          {g.items.map((f) => (
            <div key={f.q}>
              <dt className="font-medium text-foreground">{f.q}</dt>
              <dd className="mt-1 leading-relaxed">{f.a}</dd>
            </div>
          ))}
        </dl>
      </Section>
    ))}
    <Section>
      <p className="text-sm">
        See <Link to="/pricing/" className="text-primary underline underline-offset-4">pricing</Link> or{" "}
        <Link to="/examples/" className="text-primary underline underline-offset-4">client examples</Link>, or{" "}
        <Link to="/contact/" className="text-primary underline underline-offset-4">send us a message</Link>.
      </p>
    </Section>
    <CtaBlock />
  </MarketingLayout>
);

export default Faq;
