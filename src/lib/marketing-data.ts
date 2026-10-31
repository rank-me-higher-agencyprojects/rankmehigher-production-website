/**
 * Shared facts for the marketing pages. Everything here is either already
 * published on rankmehigher.com or taken from the client's own live site.
 * Do not add metrics, quotes or guarantees that are not published somewhere.
 */

export const SMS_NUMBER_DISPLAY = "(773) 572-4686";
export const SMS_HREF = "sms:+17735724686";
export const FREE_WEBSITE_HREF = "/#free-website";

export type PortfolioItem = {
  name: string;
  trade: string;
  city: string;
  img: string;
  url?: string;
};

/** The client sites already listed on the homepage marquee. */
export const PORTFOLIO: PortfolioItem[] = [
  { name: "Truck Clinic", trade: "Truck Repair", city: "Romeoville, IL", img: "/truckclinic.webp", url: "https://truckclinic.com/" },
  { name: "QTA Tax", trade: "Tax & Accounting", city: "Oak Brook, IL", img: "/images/portfolio-qtatax.webp", url: "https://qtatax.com/" },
];

export type CaseStudy = {
  id: string;
  name: string;
  trade: string;
  city: string;
  url: string;
  img: string;
  /** What the business does, from its live site. */
  business: string;
  /** What its site puts in front of a visitor, as published on the live site. */
  onTheSite: string[];
  source: string;
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "truck-clinic",
    name: "Truck Clinic",
    trade: "Commercial truck repair",
    city: "Romeoville, IL",
    url: "https://truckclinic.com/",
    img: "/truckclinic.webp",
    business:
      "A commercial truck repair shop just off I-55 in Romeoville handling diesel engines, brakes, DPF cleaning, DOT inspections, trailer repair and fleet maintenance.",
    onTheSite: [
      "A dedicated page for each service: fleet repair, engine, transmission & differential, DOT inspections, trailer repair, DPF cleaning, brakes & suspension, electrical and diagnostics",
      "Click-to-call phone number and a \"Get a written quote\" form above the fold",
      "Their Google rating shown up front (5.0 from 201 Google reviews, as listed on the site)",
      "Trust points drivers care about: a written quote before work starts and a 65+ person team",
    ],
    source: "truckclinic.com",
  },
  {
    id: "qta-tax",
    name: "QTA Tax",
    trade: "Tax preparation & planning",
    city: "Oak Brook, IL",
    url: "https://qtatax.com/",
    img: "/images/portfolio-qtatax.webp",
    business:
      "QTA Consultants, Ltd., an Oak Brook firm of IRS Enrolled Agents providing tax preparation, tax planning, bookkeeping, payroll and IRS representation for individuals and businesses across Chicagoland.",
    onTheSite: [
      "Services laid out plainly: individual and business returns, planning, bookkeeping & payroll, IRS audit representation, 1031 exchange consulting",
      "Industry sections for real estate, law firms, dental and healthcare practices and cannabis businesses (Section 280E)",
      "Phone number and Oak Brook location in the title and description so local searches match",
    ],
    source: "qtatax.com",
  },
];

export type TradeFaq = { q: string; a: string };

export type Trade = {
  slug: string;
  name: string;
  plural: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  pages: string[];
  jobs: string[];
  chatExamples: string[];
  examples: string[];
  /** Visible questions. When set, the trade page emits one FAQPage schema. */
  faqs?: TradeFaq[];
  /** Service JSON-LD description. Falls back to `description`. */
  serviceDescription?: string;
};

export const TRADES: Trade[] = [
  {
    slug: "truck-repair",
    name: "Truck repair",
    plural: "truck repair shops",
    title: "Truck Repair Shop Websites, $99/mo | Rank Me Higher",
    description:
      "Websites for diesel and commercial truck repair shops in Chicagoland. Built by AI, edited by text, $99/mo when live. See Truck Clinic in Romeoville.",
    h1: "Truck repair shop websites",
    intro:
      "Drivers and fleet managers with a truck down are on a phone, often from the shoulder of I-55 or I-80. They need the number, the hours, and the services the shop actually handles. That is what we build for shops in Chicagoland.",
    pages: [
      "One page per service you actually perform: engine, brakes, DOT inspections, trailer repair, electrical, and diagnostics",
      "A fleet maintenance page for companies that send trucks on a schedule",
      "A location page with the yard, the highway exit, truck parking, and hours",
      "A quote or callback form that texts the lead to you",
    ],
    jobs: [
      "Post a holiday schedule or an after-hours note",
      "Add a service you have started offering, such as trailer repair",
      "Swap in new shop photos from your phone",
    ],
    chatExamples: [
      "\"We now do DOT inspections on Saturdays. Add that to the DOT page.\"",
      "\"Add a banner: closed Thanksgiving, open Friday at 7am.\"",
      "\"Replace the yard photo with this one from the lot.\"",
    ],
    examples: ["Truck Clinic"],
    serviceDescription:
      "AI-built websites for truck repair and diesel shops in Chicagoland. Service pages for the work the shop performs, a fleet page, a location page with hours and truck access, and a form that sends the lead to the shop. The preview is free. $99 a month when the site goes live on your domain.",
    faqs: [
      {
        q: "How much does a truck repair shop website cost?",
        a: "The preview is free. The live site is $99 a month, in the pricing section on this page. [Other plans](/pricing/) are listed separately.",
      },
      {
        q: "What is included in the website?",
        a: "The pages listed above, plus hosting and the chat editor when you go live. Anything else is on the [pricing page](/pricing/).",
      },
      {
        q: "How fast is a truck repair website built?",
        a: "Minutes, not weeks. The preview link arrives by text. Putting the site on your domain comes after you claim it.",
      },
      {
        q: "Can the site include a fleet maintenance page?",
        a: "Yes, when companies send you trucks on a schedule. Leave it off if you do not run fleet accounts.",
      },
      {
        q: "Can I have a page for DOT inspections?",
        a: "Yes, if the shop performs them. Describe the inspection and the hours. Do not promise that a truck will pass.",
      },
      {
        q: "How do I change hours, a holiday closure, or a service?",
        a: "Open the portal, click the part that changed, and say it in a sentence. You can revert the edit if the wording is wrong.",
      },
      {
        q: "How is this different from hiring a web designer?",
        a: "Later changes are chat edits instead of another project invoice. The live site is $99 a month, and your domain and content stay yours if you leave.",
      },
      {
        q: "Is local SEO a separate monthly retainer?",
        a: "No. It is part of the website. The local SEO section on this page says what that includes.",
      },
      {
        q: "How do leads reach me, and can I cancel?",
        a: `The form sends the request to the shop number you use for leads. That number is separate from our line, ${SMS_NUMBER_DISPLAY}, which is SMS only. The plan is monthly, you can cancel anytime, and your domain and content go with you.`,
      },
    ],
  },
];

export type Suburb = {
  slug: string;
  name: string;
  county: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  local: string[];
  clients: string[];
  trades: string[];
  /** Extra town-specific sections, rendered after the checklist. Links use [text](/path/). */
  sections?: { title: string; paragraphs: string[] }[];
  /** Visible questions. When set, the page emits one FAQPage schema. */
  faqs?: TradeFaq[];
};

export const SUBURBS: Suburb[] = [
  {
    slug: "romeoville-il",
    name: "Romeoville",
    county: "Will County",
    title: "Websites for Romeoville, IL Businesses | Rank Me Higher",
    description:
      "AI-built websites for Romeoville contractors and truck repair shops. Truck Clinic runs on Rank Me Higher. Free build, $99/mo to go live.",
    h1: "Websites for Romeoville businesses",
    intro:
      "Romeoville sits on I-55 with a heavy concentration of logistics, warehousing and truck service businesses. Truck Clinic, a Romeoville truck repair shop, already runs its site on Rank Me Higher, so we know what searches like \"truck repair near I-55\" need to see.",
    local: [
      "Mention the I-55 exits and roads drivers actually use to reach you",
      "Spell out truck parking, bay count and hours, which fleet customers check first",
      "Cover the neighboring towns you also serve, like Bolingbrook, Lockport and Plainfield",
    ],
    clients: ["Truck Clinic"],
    trades: ["truck-repair"],
    sections: [
      {
        title: "Who is searching for a Romeoville business",
        paragraphs: [
          "Most searches for a Romeoville business come from two groups. The first is people on the road: drivers, dispatchers and fleet managers moving freight through the I-55 corridor who need a shop, a supplier or a service close to the exit they are already on. They search on a phone, often with a truck stopped, and they decide in seconds based on the phone number, the hours and whether the shop handles their problem.",
          "The second group is the people who live and work in Romeoville and the towns around it. They search for a roofer after a storm, a plumber for a leak, or an HVAC company before the first cold week. They compare two or three results, read the reviews, and call the business whose site answers their question fastest.",
          "Both groups use Google Maps and the local results at the top of the page before they ever scroll to a list of websites. A Romeoville site has one job in that moment: confirm what the Google listing already promised and make the next step obvious. A site that loads slowly, hides the phone number or never says which services the business performs sends that visitor back to the next listing.",
        ],
      },
      {
        title: "What Truck Clinic's Romeoville site does",
        paragraphs: [
          "[Truck Clinic](/examples/#truck-clinic) is a commercial truck repair shop just off I-55 in Romeoville, and its site runs on Rank Me Higher. It gives each service its own page instead of one long list: fleet repair, engine, transmission and differential, DOT inspections, trailer repair, DPF cleaning, brakes and suspension, electrical and diagnostics. A driver searching for one of those jobs lands on the page about that job.",
          "Above the fold, the site puts a click-to-call number and a \"Get a written quote\" form, so a visitor can act without scrolling. The Google rating is shown up front, and the trust points that matter to drivers are spelled out: a written quote before work starts and the size of the team. The same structure works for any Romeoville business that sells a handful of specific services to people in a hurry. The [truck repair websites](/websites-for/truck-repair/) page walks through it for shops.",
        ],
      },
      {
        title: "Match your site to your Google Business Profile",
        paragraphs: [
          "Google compares the details on your website with the details on your Google Business Profile. When the business name, address, phone number, hours and services agree, Google has more reason to trust both. When they disagree, for example a different phone number on the site, old hours, or a service on the listing that the site never mentions, the listing has a harder time showing up for Romeoville searches. Our guide to [common Google Business Profile mistakes](/blog/google-business-profile-mistakes/) lists the usual ones.",
          "We build the site from the same facts you give us for the listing, then keep them in step. When your hours change or you add a service, you text the change once and the site updates. For the listing side of the work, the [Google Maps ranking guide](/blog/google-maps-ranking-2025/) covers categories, reviews, photos and posts, and our [local SEO services](/services/seo/) page explains what we handle for you.",
        ],
      },
      {
        title: "Serving Bolingbrook, Lockport, Plainfield and nearby towns",
        paragraphs: [
          "Many Romeoville businesses also take work from Bolingbrook, Lockport, Plainfield and Joliet. Google needs to see that on the site, but copying the same page five times with the town name swapped does not help and can hurt. A better approach is one clear service-area section that names the towns you actually serve, plus a dedicated page only for a town where you have something real to say: a second location, a project you finished there, or a service you only offer in that area.",
          "When you answer the six questions, you tell the AI which towns you serve. It writes the service-area copy from that list and keeps it consistent with the area you set on your Google listing.",
        ],
      },
      {
        title: "What it costs and what you control",
        paragraphs: [
          "The AI builds the complete site for free, and you get a live preview link by text before you pay anything. You pay $99 a month only when you claim it and put it live on your domain, with hosting and SSL handled. The [pricing page](/pricing/) shows every plan.",
          "Once the site is live, we connect your domain and your portal opens. Leads from the site are delivered to you instantly, and the portal keeps your site, your edits and your leads in one place, so you are not logging in to three different tools to see whether the site is working.",
          "After launch you run the site by chatting with the AI: tell it what to change, like your hours, a new service or a promo, and it makes the edit. Every edit is versioned, so you can revert anything. The [AI website editor](/ai-website-editor/) page shows how that works. You own the site, and if you ever leave, your domain and your content go with you.",
        ],
      },
    ],
    faqs: [
      {
        q: "How much does a website for a Romeoville business cost?",
        a: "The build and the preview are free. The site is $99 a month once you claim it and put it live on your domain. The plan is monthly and you can cancel anytime.",
      },
      {
        q: "Do you only build sites for truck repair shops in Romeoville?",
        a: "No. Truck Clinic is the Romeoville client you can see today, but the same builder makes sites for contractors and trades such as roofers, plumbers, HVAC companies and other local service businesses.",
      },
      {
        q: "How long does it take to get my Romeoville site?",
        a: "You answer 6 questions, and the AI researches your market, writes the pages and builds the site in minutes, not weeks. The preview link arrives by text.",
      },
      {
        q: "Do I need a separate page for every service?",
        a: "For the services people search for by name, yes. Someone searching for brake repair or a furnace install should land on a page about that job, with what you do, the area you cover and a way to reach you. Small add-ons can share a page. The AI builds one page per main service you list.",
      },
      {
        q: "How do leads from the site reach me?",
        a: "The quote or callback form sends each request to the number you use for leads, and you also see every lead in your portal. That number is separate from our line, which is SMS only.",
      },
      {
        q: "I already have a website. Can you replace it?",
        a: "Yes. The AI studies what you have and builds a faster site, then your domain moves over when you're ready.",
      },
      {
        q: "Will a new website get me into the Google Maps results for Romeoville?",
        a: "Nobody can promise a Maps position. A fast site that matches your Google Business Profile and has a real page for each service gives the listing the support it needs. The [Google Maps ranking guide](/blog/google-maps-ranking-2025/) covers the listing side.",
      },
    ],
  },
];

export const PLANS = [
  {
    price: "$99",
    name: "Website",
    tagline: "Your website",
    features: [
      { text: "Your AI-built website, live on your domain", soon: false },
      { text: "Hosting, SSL & security handled", soon: false },
      { text: "Edit anything by chat, versioned & revertable", soon: false },
      { text: "Lead capture with instant delivery", soon: false },
      { text: "Your portal, everything in one place", soon: false },
    ],
  },
  {
    price: "$149",
    name: "Website + GBP",
    tagline: "+ automatic Google Business Profile optimization",
    features: [
      { text: "Everything in $99", soon: false },
      { text: "Automatic Google Business Profile optimization", soon: true },
      { text: "Your GBP kept accurate, active & ranking", soon: true },
    ],
  },
  {
    price: "$199",
    name: "Website + GBP + Reviews",
    tagline: "+ review generator, dedicated phone + branded email",
    features: [
      { text: "Everything in $149", soon: false },
      { text: "Review generator that grows your reputation", soon: true },
      { text: "Dedicated business phone number", soon: true },
      { text: "Branded email for your business", soon: true },
    ],
  },
];
