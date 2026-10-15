import { Link } from "react-router-dom";
import MarketingLayout, { PageHero, Section, Bullets } from "@/components/marketing/MarketingLayout";
import { CtaBlock, CtaRow } from "@/components/marketing/Cta";

const About = () => (
  <MarketingLayout
    path="/about/"
    title="About Rank Me Higher: Chicago AI Websites Since 2015"
    description="Rank Me Higher is a Chicago-area company founded by Andrius Pletniovas in 2015. 40+ local business websites run on the platform, built by AI and edited by chat."
    crumbs={[{ name: "About", path: "/about/" }]}
    schema={[
      {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        url: "https://rankmehigher.com/about/",
        about: { "@id": "https://rankmehigher.com/#organization" },
      },
    ]}
  >
    <PageHero
      eyebrow="About"
      h1="About Rank Me Higher"
      sub="We've built websites and local marketing for small businesses since 2015. Today the platform lets an AI build your site in minutes and lets you run it by chatting."
    >
      <CtaRow />
    </PageHero>

    <Section title="What we do">
      <p className="max-w-3xl leading-relaxed">
        Rank Me Higher is the AI platform for local business. You answer 6 questions, the AI researches your market,
        writes your pages and builds a complete local-SEO website, then texts you the live link. Once it's live, you
        control your website by talking to the AI: click anything, say the change and it's done, with every edit
        versioned and revertable.
      </p>
      <p className="mt-4 max-w-3xl leading-relaxed">
        We focus on contractors and trades in Chicagoland: truck repair shops, roofers, plumbers, HVAC and other
        service businesses that win work from local search and need a site that just works on a phone.
      </p>
    </Section>

    <Section title="By the numbers">
      <Bullets
        items={[
          "Building for local businesses since 2015",
          "40+ live local business websites run on the platform",
          "5.0 from 54 client reviews on Trustpilot",
          "Offices in downtown Chicago (1 N State St Ste 1515) and Mundelein, IL",
        ]}
      />
    </Section>

    <Section title="Who's behind it">
      <p className="max-w-3xl leading-relaxed">
        Rank Me Higher was founded by Andrius Pletniovas (Andrius Digital), a Chicago-area entrepreneur who also
        founded CDL Agency. His work connects business websites, digital marketing and the systems teams use to
        follow up with leads.
      </p>
      <p className="mt-4 text-sm">
        <a href="https://andriusdigital.com/" className="text-primary underline underline-offset-4">Meet Andrius</a>
        <span className="mx-3 text-white/30">·</span>
        <Link to="/examples/" className="text-primary underline underline-offset-4">See client sites</Link>
        <span className="mx-3 text-white/30">·</span>
        <Link to="/contact/" className="text-primary underline underline-offset-4">Contact us</Link>
      </p>
    </Section>

    <CtaBlock />
  </MarketingLayout>
);

export default About;
