import { Link } from "react-router-dom";
import MarketingLayout, { Bullets, PageHero, Section } from "@/components/marketing/MarketingLayout";
import { CtaRow } from "@/components/marketing/Cta";

const FAQ = [
  {
    q: "Do I pay extra for local SEO?",
    a: "No. Local SEO is not an add-on retainer. It is how every website on the platform is built. Correct name, address, and phone, JSON-LD schema, honest hours, city and service pages, and fast mobile pages are part of the build. What each plan includes is on the pricing page.",
  },
  {
    q: "Is this a monthly SEO retainer?",
    a: "No. There is no monthly SEO retainer. A local SEO company usually sells ongoing monthly work on top of a site. Here the technical local SEO is done in the first build, and you keep the site accurate by chatting with the AI when hours, services, or towns change.",
  },
  {
    q: "How is this different from hiring a local SEO company?",
    a: "A local SEO company typically sells monthly work on top of a site that was often built wrong: the wrong hours, an old phone number, or no schema at all. The platform builds the site right in the first place. The technical local SEO most agencies bill months for is done in the first build, automatically.",
  },
  {
    q: "What does local-SEO-correct mean?",
    a: "Consistent name, address, and phone on every page. JSON-LD structured data a search engine can read. Honest business hours. Dedicated pages for each service and each city you serve. Fast, mobile-compact pages. That is the checklist every site on the platform ships with.",
  },
  {
    q: "Will I see rankings in my portal?",
    a: "Rankings in your portal are coming soon. The site labels them Soon: they are on the roadmap and are not live in the portal today. Today you get the local-SEO-correct website, chat editing with versioned changes you can revert, and the leads the site captures.",
  },
  {
    q: "Is Google Business Profile optimization included?",
    a: "Your Google Business Profile is the other half of local search, next to the website. That half is LocalMapBooster, not a separate retainer. Automatic, hands-free Google Business Profile optimization is labeled coming soon, the same way review generation is labeled coming soon. The website half is in every build.",
  },
  {
    q: "Can I change hours, services, or towns later?",
    a: "Yes. Open your portal, click the part of the site you want to change, and say it in plain words. Contractors ask for things like a new closing time, a service added to the list, or another town added to the area they serve. Every edit is versioned, so you can revert it.",
  },
  {
    q: "Who are these local SEO services for?",
    a: "Local businesses, especially the contractors and trades the rest of the site is written for: Chicagoland roofers, plumbers, HVAC companies, and truck repair shops. The same local SEO foundation is on every site the platform builds. Rank Me Higher has offices in downtown Chicago and in Mundelein.",
  },
  {
    q: "Do you offer local SEO services near me in Chicago and Mundelein?",
    a: "Yes. Every website built for a Chicago or Mundelein area business gets the local SEO on this page in the first build, and its city pages cover only the towns you actually serve.",
  },
];

const BUILT_IN = [
  "Correct name, address, and phone on every page, written the same way",
  "JSON-LD structured data for the business, the services, and the area",
  "Honest hours that match how the business actually opens",
  "A page for each service you offer and each city you serve",
  "Fast, mobile-compact pages, built lean for a phone",
  "Real services and real photos, with natural AI imagery only where a photo is missing",
];

const COMING_SOON = [
  "Rankings in your portal",
  "Google Business Profile auto-optimization, the hands-free version",
  "Review generation",
  "Task requests such as adding a seasonal page, automated inside the portal",
];

const SEO = () => (
  <MarketingLayout
    path="/services/seo/"
    title="Local SEO Company for Small Businesses | Rank Me Higher"
    description="A local SEO company built into your website for small businesses in Chicago and Mundelein: correct NAP, JSON-LD, honest hours, city and service pages."
    crumbs={[{ name: "Local SEO", path: "/services/seo/" }]}
    schema={[
      {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Local SEO services for small businesses",
        serviceType: "Local SEO",
        url: "https://rankmehigher.com/services/seo/",
        areaServed: "Chicagoland, IL",
        provider: { "@type": "Organization", name: "Rank Me Higher", url: "https://rankmehigher.com" },
        description:
          "Local SEO built into every AI-built website: correct NAP, JSON-LD structured data, honest hours, city and service pages, and fast mobile pages. Google Business Profile optimization is LocalMapBooster. This is not a monthly SEO retainer.",
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
      eyebrow="Local SEO"
      h1="A local SEO company built into your website"
      sub="Rank Me Higher is a local SEO company for small businesses in Chicago, Mundelein and the North Shore that builds the local SEO into the website itself. Local SEO here is not a monthly retainer. It is how every website is built: correct name, address, and phone, JSON-LD schema, honest hours, city and service pages, and fast mobile pages. Google Business Profile work is LocalMapBooster. Rankings in the portal are coming soon."
    >
      <CtaRow />
    </PageHero>

    <Section id="local-seo" title="Local SEO services for small businesses">
      <div className="max-w-3xl space-y-4 leading-relaxed">
        <p>
          If you run a small business, the searches that matter name a trade and a place. A roofer, a plumber, an HVAC company, or a truck repair shop in the Chicago area needs a website that states the real business: what you do, where you work, how to reach you, and when you are open. That is what these local SEO services are. They are built into the website. They are not sold as a separate monthly SEO retainer on top of it.
        </p>
        <p>
          The AI follows the same playbook on every site. It researches your market, plans the pages, writes the content, and builds the site in minutes, not weeks. You answer 6 questions, then the live preview arrives by text. You see the whole site before you pay anything. You only pay when you claim it and put it on your domain. What the plans include is on the{" "}
          <Link to="/pricing/" className="text-primary underline underline-offset-4">pricing page</Link>.
          The website itself is covered on the{" "}
          <Link to="/services/websites/" className="text-primary underline underline-offset-4">AI-built websites</Link>{" "}
          page: real business photos where you have them, natural AI imagery where you do not, lead capture, hosting, and a portal where you edit by chat.
        </p>
        <p>
          Rank Me Higher is based in the Chicago area, with an office downtown at 1 N State St and another in Mundelein. The pages on this site talk to Chicagoland contractors and trades. The local SEO foundation is the same on every site the platform builds, whether the business is in a suburb like Romeoville or in a Chicago neighborhood. The way to start is the same as the rest of the site: text us, or get the free website. The homepage describes that quiz as 60 seconds, with no sales call.
        </p>
        <p>
          People searching for SEO services, a local SEO company, or SEO services near me are usually trying to tell two things apart. One is a retainer: monthly work, often on a site that already has the wrong hours, an old phone number, or no schema. The other is a site that ships with those basics done. This page is the second one. If you want the checklist in one line, it is name, address, and phone; JSON-LD; honest hours; city and service pages; and fast pages on a phone.
        </p>
        <p>
          After the site is live, you keep it true by talking to the AI. Open the portal, click the part that changed, and say the change the way you would text a person. Every edit is versioned, so you can revert anything. That matters for local SEO because hours, services, and towns are not frozen on launch day. A Saturday you start opening, a service you add, or a town you stop driving to should show up on the site as the business, not as a ticket waiting on an agency.
        </p>
      </div>
    </Section>

    <Section title="What a local SEO company does vs. what's built into your site">
      <div className="max-w-3xl space-y-4 leading-relaxed">
        <p>
          A local SEO company usually sells monthly work. The frustration this site already names is specific: you paid an SEO retainer for months and cannot point to a result; the website has the wrong hours, an old phone number, or no schema at all; and nobody can tell you what the agency actually did last month. Competitors with a weaker operation can still be easier to find when your own site does not state the business clearly. The platform's answer is not another retainer. It builds the site right in the first place. The technical local SEO most agencies bill months for is done in the first build, automatically.
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-white/[0.08] p-5">
            <h3 className="font-medium text-foreground">What a local SEO company typically sells</h3>
            <div className="mt-3 text-sm">
              <Bullets
                items={[
                  "Monthly work on top of a website that already exists",
                  "A retainer you keep paying after the launch",
                  "Repair work when hours, the phone number, or schema were wrong from the start",
                  "Monthly work you may not be able to point to on the site itself",
                ]}
              />
            </div>
          </div>
          <div className="rounded-xl border border-primary/40 p-5">
            <h3 className="font-medium text-foreground">What's built into your site</h3>
            <div className="mt-3 text-sm">
              <Bullets
                items={[
                  "Correct NAP, JSON-LD, honest hours, and city and service pages from the first build",
                  "Fast, mobile-compact pages",
                  "No monthly SEO retainer",
                  "Edits by chat when the business changes, each one versioned and revertable",
                ]}
              />
            </div>
          </div>
        </div>
        <p>
          Read that as a scope, not a ranking promise. Rank Me Higher does not guarantee a map position, a page-one placement, or a number of leads. A map position and a page-one placement are different results. The split is{" "}
          <Link to="/blog/local-seo-vs-organic-seo/" className="text-primary underline underline-offset-4">local SEO and the ordinary organic results</Link>.
          The same build process and the same local SEO foundation go on every site. What you can inspect before you pay is the preview: the pages, the phone number, the hours, and the services, on your phone.
        </p>
        <p>
          The split also explains what is not live. Rankings inside the client portal are coming soon. Automatic Google Business Profile optimization and review generation are labeled Soon on the site. They are on the roadmap and are not yet automated. Here each piece is named separately, and the only piece in every website is the on-site foundation.
        </p>
      </div>
    </Section>

    <Section title="What local-SEO-correct means on the build">
      <div className="max-w-3xl space-y-4 leading-relaxed">
        <p>
          "Local-SEO-correct" is a checklist, not a slogan. It is the set of facts a local site has to get right so a person and a search engine are looking at the same business. Every site the AI ships is built to that checklist. Nothing on the list is a separate retainer.
        </p>
        <Bullets items={BUILT_IN} />
        <p>
          <strong className="font-medium text-foreground">Name, address, and phone.</strong> NAP is the name, address, and phone number, written the same way everywhere it appears on the site. Local search compares those details with the rest of the web. If the website shows one number and the truck, the door, or the Google listing shows another, the business looks like two businesses. The build puts one NAP on the pages from the start, including the pages a customer lands on from a phone.
        </p>
        <p>
          <strong className="font-medium text-foreground">JSON-LD schema.</strong> JSON-LD is structured data in the page, so a search engine can read the business, the services, and the area. The platform builds that structured data into the site, in the first build, rather than leaving it for a later project.
        </p>
        <p>
          <strong className="font-medium text-foreground">Honest hours.</strong> Hours on the site should match the hours a customer would find if they drove over. A default schedule, a holiday that was never updated, or a Saturday you do not actually work is a local SEO problem because it is a false statement about the business. You can change hours by chat. The kind of request already used as an example on the editor page is plain: change the hours to 7 to 5 and add Saturday mornings. The edit is saved as a version. If it was wrong, you roll it back.
        </p>
        <p>
          <strong className="font-medium text-foreground">Fast mobile pages.</strong> Pages are built lean so they load fast on a phone. That is where a local search happens: a homeowner in a driveway, a driver on I-55, someone comparing two shops before they call. They need the number, the hours, and the services without waiting on a heavy page. The build is mobile-compact for that reason. It is not a separate speed project after the design is done.
        </p>
        <p>
          <strong className="font-medium text-foreground">Real information.</strong> Real services, real hours, and real photos. The AI uses your business photos where you have them and fills gaps with natural AI imagery that matches the trade. No stock photos of models in hard hats. The point of the checklist is that the site matches the business. A page that invents a service you do not offer, or a town you do not serve, is not local SEO. It is a mismatch.
        </p>
      </div>
    </Section>

    <Section title="Local SEO near you: city and service pages">
      <div className="max-w-3xl space-y-4 leading-relaxed">
        <p>
          City and service pages are the pages local searches actually land on. A service page is one job you do. A city page is one place you serve. Together they answer the query a person types: the trade, the town, and whether you are a real option today. The AI plans those pages from the market it researches, instead of leaving every service in one long homepage.
        </p>
        <p>
          You can see the pattern on this website, as page types rather than as someone else's results. The{" "}
          <Link to="/locations/romeoville-il/" className="text-primary underline underline-offset-4">Romeoville page</Link>{" "}
          is a city page. It treats Romeoville as a place with roads and neighbors: the I-55 corridor, and towns a shop there also serves, such as Bolingbrook, Lockport, and Plainfield. It talks about the details a local customer checks, including hours. The{" "}
          <Link to="/websites-for/truck-repair/" className="text-primary underline underline-offset-4">truck repair websites</Link>{" "}
          page is a trade page. It spells out one page per service, a location page with the yard and the hours, and a form that texts the lead to you. Those two URLs are examples of how a city page and a service page are shaped. They are not a report of any customer's rankings.
        </p>
        <p>
          On your site the same idea is specific to your work. A truck shop might need a page for engines, brakes, DOT inspections, or trailer repair. An HVAC company might need a page for installs and a page for repairs. A plumber might need the towns on the route, not every town in the county. The editor examples already published are the kind of follow-up a contractor sends: add trailer repair to the services list, add Bolingbrook to the areas we serve, put a banner up when you are closed for a holiday. You say it in the portal. The AI makes the change. You can revert it.
        </p>
        <p>
          "Near you" only works when it is true. A city page for a town you do not serve does not help a customer, and it does not make the NAP or the hours more believable. The Romeoville guidance on this site is to cover neighboring towns you also serve, and to spell out the practical details those customers check. The same limit belongs on every build. Local SEO near you means the cities and the services on the site are the ones the business will actually answer the phone for.
        </p>
        <p>
          Service pages and city pages are also where the other on-site pieces show up together. The phone number on a service page should be the same phone number as the homepage. The hours on a city page should be the hours on the door. The schema should describe the same services the page lists. When those match, the site is local-SEO-correct in the ordinary sense: a person who searched near them lands on a page about that service in that area, with the phone number and a way to send a lead, and nothing on the page contradicts the business.
        </p>
      </div>
    </Section>

    <Section title="Google Business Profile optimization">
      <div className="max-w-3xl space-y-4 leading-relaxed">
        <p>
          Your Google Business Profile is half of local search. Your website is the other half. The website half is this page: NAP, JSON-LD, honest hours, city and service pages, and fast mobile pages, on every build. The profile half is{" "}
          <Link to="/blog/google-maps-ranking-2025/" className="text-primary underline underline-offset-4">what customers see on Google Maps</Link>
          : the name, the categories, the hours, the photos, and the services on the listing. Those two halves have to describe the same business. A website that says one set of hours and a profile that says another is the same class of problem as an old phone number on the site.
        </p>
        <p>
          That profile work is{" "}
          <Link to="/localmapbooster/" className="text-primary underline underline-offset-4">Google Business Profile optimization</Link>{" "}
          through LocalMapBooster. It is part of the platform, next to the website, not a monthly SEO retainer sold on its own. Which plan includes it is on the{" "}
          <Link to="/pricing/" className="text-primary underline underline-offset-4">pricing page</Link>.
          Read LocalMapBooster for how the profile side is described, and read pricing for what is included and what is still marked Soon.
        </p>
        <p>
          These items are labeled coming soon. They are on the roadmap and are not yet automated in the portal:
        </p>
        <Bullets items={COMING_SOON} />
        <p>
          Google Business Profile auto-optimization, the hands-free version, is the Soon item. Review generation is labeled Soon as well. Rankings in the portal are labeled Soon. They are not something you can already watch inside the portal.
        </p>
        <p>
          What you can use today is the website half, plus the portal controls that are already live: edit anything by chat, with every change versioned; hosting, domain, and SSL handled when you put the site on your domain; and leads from your forms delivered to you. The profile side stays with LocalMapBooster, and the automatic version of that work stays marked coming soon. Local SEO services, on this page, are the on-site checklist. They are not a promise that a map listing will move.
        </p>
      </div>
    </Section>

    <Section title="How local SEO happens on your site">
      <div className="max-w-3xl space-y-4 leading-relaxed">
        <p>
          <strong className="font-medium text-foreground">In the first build.</strong> The AI researches the market, plans the pages, and ships the site with clean NAP, JSON-LD schema, honest hours, and city and service pages. There is no retrofitting project and no retainer required before those pieces exist. You judge them on the live preview that arrives by text.
        </p>
        <p>
          <strong className="font-medium text-foreground">When you go live.</strong> The domain is connected, with hosting and SSL handled, and the portal opens. The site a customer can find is the same site you already looked at: the services, the towns, the phone number, and the hours. Nothing here promises a date when a ranking will appear, or a position it will appear in.
        </p>
        <p>
          <strong className="font-medium text-foreground">When the business changes.</strong> Hours, services, photos, and towns stay editable by chat. A change that belongs on the site belongs in the portal, not in a monthly email to an agency. Because every edit is versioned, a bad change does not have to stay up.
        </p>
        <p>
          <strong className="font-medium text-foreground">What is next, and not live.</strong> Rankings in the portal, automatic Google Business Profile optimization, and automated review generation. Those three are labeled coming soon. They are not included in the description of the site you get today. The local SEO that is included is the checklist on this page.
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
      <p className="mt-6 max-w-3xl text-sm leading-relaxed">
        More answers about the free build, chat editing, and what "Soon" means are on the{" "}
        <Link to="/faq/" className="text-primary underline underline-offset-4">FAQ</Link>.
        Plan details are on the{" "}
        <Link to="/pricing/" className="text-primary underline underline-offset-4">pricing page</Link>.
      </p>
    </Section>

    <section className="border-t border-white/[0.06] py-14 md:py-20">
      <div className="mx-auto max-w-content px-6 text-center">
        <h2 className="mx-auto max-w-2xl font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          See your free website before you pay anything
        </h2>
        <p className="mx-auto mt-4 max-w-xl leading-relaxed text-white/60">
          Answer the questions and the AI builds the site, with local SEO in the build. The live link arrives by text. Text us if you want to ask something first.
        </p>
        <div className="mt-8">
          <CtaRow center />
        </div>
      </div>
    </section>
  </MarketingLayout>
);

export default SEO;
