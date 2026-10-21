import { Link } from "react-router-dom";
import MarketingLayout, { PageHero, Section, Bullets } from "@/components/marketing/MarketingLayout";
import { TextUsLink } from "@/components/marketing/Cta";
import { FREE_WEBSITE_HREF } from "@/lib/marketing-data";

const STEPS = [
  {
    t: "Send a request",
    d: "Sign in from your phone or computer. Your live site is in the portal. Click the part you want to change and describe it in plain words, the way you would text a person.",
  },
  {
    t: "The AI makes the change",
    d: "The edit is made on the site. Each change redeploys, and a link to the updated site lands on your phone.",
  },
  {
    t: "The edit is versioned and you can revert it",
    d: "Every edit is saved as a version. The site keeps a full history, so you can roll any edit back with one click.",
  },
];

const CHANGES = [
  "Change our hours to 7 to 5 and add Saturday mornings.",
  "Add trailer repair to the services list.",
  "Put a banner on the homepage: closed Monday for the holiday.",
  "Replace the top photo with this picture of the new truck.",
  "Add Bolingbrook to the areas we serve.",
  "Make the phone number in the header bigger and bolder.",
];

const LIVE_TODAY = [
  "Chat editor: click, say the change, versioned and revertable",
  "SMS updates: build progress, your live link and every lead by text",
  "Hosting, domain and SSL",
  "Lead capture with instant delivery",
];

const COMING_SOON = [
  "Rankings in your portal",
  'Task requests like "add a page for spring specials"',
  "Google Business Profile auto-optimization",
  "Review generation",
];

const COMPARE_ROWS = [
  {
    topic: "How a change starts",
    editor: "You send the request from the portal.",
    designer: "You email the change and wait. A small edit means emailing someone and waiting days.",
    diy: "You open the builder and make the change yourself.",
  },
  {
    topic: "Who does the work",
    editor: "The AI makes the change on the site.",
    designer: "The change waits on the designer's project. A later edit is another request, not a sentence in your portal.",
    diy: "You do the work, which means learning that builder.",
  },
  {
    topic: "The change after this one",
    editor: "Chat editing is included with the website plan.",
    designer: "You send another request and wait again.",
    diy: "You go back into the builder whenever the business changes.",
  },
];

const FAQ = [
  {
    q: "Do I need any technical skills?",
    a: "No. If you can send a text message, you can update your website. You describe the change in plain words.",
  },
  {
    q: "Is it really free?",
    a: "Yes. The AI researches your market, plans your pages and builds your complete website for free. You get a live preview link by text and see the whole thing before paying anything. You only pay when you claim it and put it live on your domain.",
  },
  {
    q: "How much does it cost?",
    a: "Plans start at $99/mo for your website. $149/mo adds Google Business Profile optimization. $199/mo adds a review generator. A dedicated business phone number and branded email are marked Soon on the $199 plan. No contracts, no setup fees.",
  },
  {
    q: "Who owns the website?",
    a: "You do. Your business, your content, your photos, your domain. If you ever leave, your domain and your content go with you.",
  },
  {
    q: "What happens after I claim it?",
    a: "We connect your domain and put your site live, with hosting and SSL handled. Your portal opens, and from there you edit by chat and get leads delivered instantly.",
  },
  {
    q: "What if I already have a website?",
    a: "The AI studies what you have and builds you a faster site, then your domain moves over when you're ready.",
  },
];

const PageCtas = () => (
  <div className="flex flex-wrap items-center gap-3">
    <a href={FREE_WEBSITE_HREF} className="btn-cta-primary">
      Get my free website
    </a>
    <TextUsLink label="Text us" />
  </div>
);

const AiWebsiteEditor = () => (
  <MarketingLayout
    path="/ai-website-editor/"
    title="AI Website Editor: Change Your Site by Chat | Rank Me Higher"
    description="Change your contractor site by chat. Click a section, say the edit in plain words, and the AI makes it. Plans start at $99/mo for the website."
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
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: FAQ.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      },
    ]}
  >
    <PageHero
      eyebrow="AI website editor"
      h1="Edit your website by chat"
      sub="For roofers, plumbers, HVAC, and truck repair shops in Chicagoland. The AI builds the site, then you change it by saying what should be different."
    >
      <PageCtas />
    </PageHero>

    <Section title="How editing by chat works">
      <p className="max-w-3xl leading-relaxed">
        You change the website by text. The chat editor is how you update a site after it is built. The build itself is the{" "}
        <Link to="/services/websites/" className="text-primary underline underline-offset-4">AI website builder</Link>{" "}
        for contractors.
      </p>
      <ol className="mt-6 grid gap-4 md:grid-cols-3">
        {STEPS.map((step, index) => (
          <li key={step.t} className="rounded-xl border border-white/[0.08] p-5">
            <span className="font-orbitron text-xs text-primary">{String(index + 1).padStart(2, "0")}</span>
            <p className="mt-2 font-medium text-foreground">{step.t}</p>
            <p className="mt-1 text-sm leading-relaxed">{step.d}</p>
          </li>
        ))}
      </ol>
    </Section>

    <Section title="What you can change">
      <p className="max-w-3xl leading-relaxed">
        A change can be a new photo, different wording, or a new section. Contractors already send requests like these.
      </p>
      <div className="mt-6 max-w-3xl">
        <Bullets items={CHANGES} />
      </div>
    </Section>

    <Section title="What's live today and what's coming">
      <p className="max-w-3xl leading-relaxed">
        Some of what the plans name is live in the portal today. Items marked Soon are on the roadmap and not yet automated in the portal.
      </p>
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <div>
          <h3 className="font-medium text-foreground">Live</h3>
          <div className="mt-3 text-sm">
            <Bullets items={LIVE_TODAY} />
          </div>
        </div>
        <div>
          <h3 className="font-medium text-foreground">Soon</h3>
          <div className="mt-3 text-sm">
            <Bullets items={COMING_SOON} />
          </div>
        </div>
      </div>
    </Section>

    <Section title="Editor vs. waiting on a web designer vs. a DIY builder">
      <p className="max-w-3xl leading-relaxed">
        A live contractor site usually changes in one of three ways: in this editor, by waiting on a web designer, or inside a DIY builder.
      </p>
      <div className="mt-6 overflow-x-auto rounded-xl border border-white/[0.08]">
        <table className="w-full min-w-[640px] text-left text-sm">
          <caption className="sr-only">
            Qualitative comparison of the chat editor, waiting on a web designer, and a DIY builder
          </caption>
          <thead className="text-foreground">
            <tr>
              <th scope="col" className="p-4 font-medium"> </th>
              <th scope="col" className="p-4 font-medium">Chat editor</th>
              <th scope="col" className="p-4 font-medium">Waiting on a web designer</th>
              <th scope="col" className="p-4 font-medium">A DIY builder</th>
            </tr>
          </thead>
          <tbody>
            {COMPARE_ROWS.map((row) => (
              <tr key={row.topic} className="border-t border-white/[0.08] align-top">
                <th scope="row" className="p-4 font-medium text-foreground">{row.topic}</th>
                <td className="p-4">{row.editor}</td>
                <td className="p-4">{row.designer}</td>
                <td className="p-4">{row.diy}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>

    <Section title="Built for trades">
      <div className="max-w-3xl space-y-4 leading-relaxed">
        <p>
          Rank Me Higher builds websites for contractors and trades in Chicagoland. The trades named on the homepage are roofers, plumbers, HVAC, and truck repair shops. Someone searching for that work is usually nearby and deciding who to call. They look for the service, the town, the hours, and a way to send the job. The AI studies the business, the trade, and the area, including what customers search for, and aims the site at that decision.
        </p>
        <p>
          The aim is a local-SEO-correct website. That means the same name, address, and phone, JSON-LD schema, honest hours, and pages for the services and the cities you serve. A service page is for work the business actually performs. A city page is for a town the business serves. The hours on those pages are the hours you gave. The phone number is the business number. A form gives the customer a way to reach you. Real business photos are used where you have them. Where a photo is missing, the gap is filled with natural AI imagery that matches the trade, not a stock photo of a model in a hard hat.
        </p>
        <p>
          Shops that repair commercial trucks can read{" "}
          <Link to="/websites-for/truck-repair/" className="text-primary underline underline-offset-4">websites for truck and diesel repair shops</Link>
          . Finished sites are on the page of{" "}
          <Link to="/examples/" className="text-primary underline underline-offset-4">sites already running on the platform</Link>.
        </p>
        <h3 className="pt-2 font-medium text-foreground">How the first version is produced</h3>
        <p>
          Editing starts after a site exists. You answer 6 questions: your business name, what you do, and where you work. There is no sales call. The quiz on the homepage is the brief. You are not asked to write the pages, and you do not send a project email to get a first draft.
        </p>
        <p>
          Research comes before anything is written. The AI studies your market and your trade, then plans the site as one piece: which pages exist, what they say, which photos they use, and how the structure is organized. It writes the content and assembles the pages in minutes, not weeks. The result is a build for that business. It is not a template with the business name dropped into someone else's layout.
        </p>
        <p>
          The order is the same for every business. Progress is emailed to you while the AI works. When the site is ready, you open the whole website. What you receive is a finished preview. You see it before you pay anything, and there is no card required for the preview. Plans start at $99/mo.{" "}
          <Link to="/pricing/" className="text-primary underline underline-offset-4">See plans</Link>{" "}
          for what each monthly plan includes. Every plan starts with that free build.
        </p>
        <h3 className="pt-2 font-medium text-foreground">Who keeps the site current</h3>
        <p>
          A site that was built years ago and never updated is one of the situations named on the websites page. The chat editor is the update path once a site is on this platform. The person who knows what changed is usually the owner or the office. The homepage describes the product as a website you control by talking to the AI, from one portal, on one subscription. The website is the front door. Rank Me Higher has been in business since 2024, with offices in downtown Chicago at 1 N State St and in Mundelein, IL.
        </p>
        <p>
          Andrius Pletniovas, also known as Andrius Digital, is the founder. He is a Chicago-area entrepreneur and also founded CDL Agency. His work connects business websites, digital marketing, and the systems teams use to follow up with leads. The AI knows what a local site needs to rank on Google, and the first build is written to that standard.
        </p>
        <h3 className="pt-2 font-medium text-foreground">If you already have a website</h3>
        <p>
          An existing site is not a blocker. The AI studies what you have and builds a new site. Your domain moves over when you are ready. There is no downtime, and there is nothing for you to migrate yourself.
        </p>
        <p>
          The homepage publishes a town page for Romeoville, IL, for businesses there. That page is for companies in that town. It is separate from Rank Me Higher's own offices. Security is handled for you on the plan. A new section on a page you already have is a chat edit. A task request such as adding a page for spring specials is labeled Soon, because that request is on the roadmap and is not automated yet.
        </p>
        <p>
          You own the website. That is your business, your content, your photos, and your domain. If you ever leave, your domain and your content go with you. There are no contracts and no setup fees. Plans are monthly. Text us if you want to talk through which plan fits.
        </p>
      </div>
    </Section>

    <Section title="Frequently asked questions">
      <dl className="max-w-3xl space-y-6">
        {FAQ.map((item) => (
          <div key={item.q}>
            <dt className="font-medium text-foreground">{item.q}</dt>
            <dd className="mt-1 leading-relaxed">{item.a}</dd>
          </div>
        ))}
      </dl>
    </Section>

    <section className="border-t border-white/[0.06] py-14 md:py-20">
      <div className="mx-auto max-w-content px-6">
        <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Get a site you can edit by chat
        </h2>
        <div className="mt-8">
          <PageCtas />
        </div>
      </div>
    </section>
  </MarketingLayout>
);

export default AiWebsiteEditor;
