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
  { name: "Off-Tint", trade: "PPF & Tinting", city: "Lisle, IL", img: "/off-tint-screenshot.webp", url: "https://off-tint.com/" },
  { name: "QTA Tax", trade: "Tax & Accounting", city: "Oak Brook, IL", img: "/images/portfolio-qtatax.webp", url: "https://qtatax.com/" },
  { name: "Pro Repair", trade: "Truck Repair", city: "Lockport, IL", img: "/images/portfolio-pro-repair.webp" },
  { name: "LTS Mechanical", trade: "Truck Repair", city: "Romeoville, IL", img: "/images/portfolio-lts-mechanical.webp" },
  { name: "XXII Century", trade: "Trucking", city: "Chicago, IL", img: "/goxxii.webp" },
  { name: "Midwest Express", trade: "Trucking", city: "Chicago, IL", img: "/images/portfolio-midwest-express.webp" },
  { name: "Property Refresh", trade: "Maid Service", city: "Chicago, IL", img: "/images/portfolio-property-refresh-maids.webp" },
  { name: "Chicago Valley", trade: "Video Production", city: "Chicago, IL", img: "/images/portfolio-chicago-valley.webp" },
  { name: "Klean AF", trade: "Cleaning", city: "San Diego, CA", img: "/kleanaf.webp" },
  { name: "Paddock Parking", trade: "Storage Yard", city: "Phoenix, AZ", img: "/images/portfolio-paddock-parking.webp" },
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
    id: "off-tint",
    name: "Off-Tint",
    trade: "Window tint & paint protection film",
    city: "Lisle, IL",
    url: "https://off-tint.com/",
    img: "/off-tint-screenshot.webp",
    business:
      "An automotive film and protection shop in Lisle offering window tinting, paint protection film (PPF), ceramic coating and interior detailing.",
    onTheSite: [
      "Services covered: window tinting, paint protection film (PPF), ceramic coating and interior detailing",
      "Built on the same platform and local-SEO structure as every Rank Me Higher site",
    ],
    source: "Rank Me Higher client records",
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
};

export const TRADES: Trade[] = [
  {
    slug: "truck-repair",
    name: "Truck repair",
    plural: "truck repair shops",
    title: "Truck Repair Shop Websites, $99/mo | Rank Me Higher",
    description:
      "Websites for diesel and commercial truck repair shops in Chicagoland. Built by AI, edited by text, from $99/mo. See Truck Clinic, Pro Repair and LTS Mechanical.",
    h1: "Websites for truck repair shops",
    intro:
      "Drivers and fleet managers with a truck down are searching on a phone, often from the shoulder of I-55 or I-80. They need your number, your hours, the services you handle and proof you're real, in about five seconds. That is what a truck repair site has to do, and it's what we build.",
    pages: [
      "One page per service: engine, brakes, DPF/DEF, DOT inspections, trailer repair, electrical, diagnostics",
      "A fleet maintenance page for companies with 5+ trucks",
      "A location page with your yard, exit, truck parking and hours",
      "A quote or callback form that texts the lead to you",
    ],
    jobs: [
      "Post a holiday schedule or after-hours number",
      "Add a new service like reefer repair or mobile road service",
      "Swap in new shop photos from your phone",
    ],
    chatExamples: [
      "\"We now do DOT inspections on Saturdays, add that to the DOT page.\"",
      "\"Add a banner: closed Thanksgiving, open Friday 7am.\"",
    ],
    examples: ["Truck Clinic", "Pro Repair", "LTS Mechanical"],
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
      "AI-built websites for Romeoville contractors and truck repair shops. Truck Clinic and LTS Mechanical run on Rank Me Higher. Free build, $99/mo to go live.",
    h1: "Websites for Romeoville businesses",
    intro:
      "Romeoville sits on I-55 with a heavy concentration of logistics, warehousing and truck service businesses. Two Romeoville truck repair shops already run their sites on Rank Me Higher, so we know what searches like \"truck repair near I-55\" need to see.",
    local: [
      "Mention the I-55 exits and roads drivers actually use to reach you",
      "Spell out truck parking, bay count and hours, which fleet customers check first",
      "Cover the neighboring towns you also serve, like Bolingbrook, Lockport and Plainfield",
    ],
    clients: ["Truck Clinic", "LTS Mechanical"],
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
