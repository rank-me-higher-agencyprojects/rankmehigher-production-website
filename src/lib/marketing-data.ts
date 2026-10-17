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
};

export const SUBURBS: Suburb[] = [
  {
    slug: "romeoville-il",
    name: "Romeoville",
    county: "Will County",
    title: "Websites for Romeoville, IL Businesses, $99/mo | Rank Me Higher",
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
