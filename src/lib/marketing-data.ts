/**
 * Shared facts for the marketing pages. Everything here is either already
 * published on rankmehigher.com or taken from the client's own live site.
 * Do not add metrics, quotes or guarantees that are not published somewhere.
 */

export const SMS_NUMBER_DISPLAY = "(773) 572-4686";
export const SMS_HREF = "sms:+17735724686";
export const CALENDLY_URL = "https://calendly.com/andrius-cdlagency/andrius-digital-asap-meeting";
export const TRUSTPILOT_URL = "https://www.trustpilot.com/review/rankmehigher.com";
export const FREE_WEBSITE_HREF = "/#free-website";

/**
 * Trustpilot quotes to show near CTAs. Left empty on purpose: the review text
 * could not be pulled from Trustpilot when this was built, and quotes must be
 * copied word for word from the real reviews (with first name/initial).
 * TODO(Andrius): paste 3 short real Trustpilot quotes here.
 */
export const TRUSTPILOT_QUOTES: { quote: string; name: string }[] = [];

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
  {
    slug: "roofers",
    name: "Roofing",
    plural: "roofers",
    title: "Websites for Roofers, $99/mo | Rank Me Higher",
    description:
      "Roofing contractor websites built by AI and edited by text. Storm, repair and replacement pages, service-area pages and lead forms from $99/mo in Chicagoland.",
    h1: "Websites for roofers",
    intro:
      "Roofing leads come in waves. After a hail storm everyone in the area searches at once, and the roofer whose site loads fast, shows the service area and makes it easy to request an inspection gets the call. The rest of the year, homeowners compare a few roofers carefully before they spend five figures.",
    pages: [
      "Separate pages for roof repair, full replacement, storm and hail damage, gutters and siding if you do them",
      "Service-area pages for the towns you actually work in",
      "A free inspection request form that texts you the address and photos",
      "A project gallery you can add to from the job site",
    ],
    jobs: [
      "Turn on a storm-damage banner the morning after hail",
      "Add finished jobs to the gallery",
      "Update which shingle lines or warranties you offer",
    ],
    chatExamples: [
      "\"Add a banner: free hail damage inspections in Naperville this week.\"",
      "\"Add these 4 photos to the gallery as a Lockport tear-off.\"",
    ],
    examples: [],
  },
  {
    slug: "plumbers",
    name: "Plumbing",
    plural: "plumbers",
    title: "Websites for Plumbers, $99/mo | Rank Me Higher",
    description:
      "Plumber websites built by AI and edited by text. Emergency, drain, water heater and service-area pages with lead forms, from $99/mo in Chicagoland.",
    h1: "Websites for plumbers",
    intro:
      "Most plumbing calls are urgent: a burst pipe, a backed-up drain, no hot water. The customer picks whoever looks available right now. Your site has to say what you fix, where you go and whether you answer at night, before they hit the back button.",
    pages: [
      "Emergency plumbing page with your real after-hours policy",
      "Pages for drain cleaning, water heaters, sewer lines, sump pumps and remodels",
      "Service-area pages for the suburbs you cover",
      "A short request form that texts you the problem and address",
    ],
    jobs: [
      "Change your emergency hours for the weekend",
      "Add a seasonal sump pump or frozen-pipe notice",
      "Add a new service like tankless installs",
    ],
    chatExamples: [
      "\"Add tankless water heater installation as its own page.\"",
      "\"Put a frozen pipe warning on the homepage until March.\"",
    ],
    examples: [],
  },
  {
    slug: "hvac",
    name: "HVAC",
    plural: "HVAC contractors",
    title: "HVAC Contractor Websites, $99/mo | Rank Me Higher",
    description:
      "HVAC websites built by AI and edited by text. Furnace, AC, heat pump and maintenance plan pages with lead forms, from $99/mo for Chicagoland contractors.",
    h1: "Websites for HVAC contractors",
    intro:
      "HVAC demand flips with the weather. In January it's furnaces, in July it's AC, and in between it's tune-ups and replacements. A good HVAC site leads with whatever season it is, explains your maintenance plan and makes booking a visit take less than a minute.",
    pages: [
      "Furnace repair and install, AC repair and install, heat pumps, ductwork",
      "A maintenance plan page explaining what's included",
      "Service-area pages for each town you cover",
      "A service request form that texts you the lead",
    ],
    jobs: [
      "Switch the homepage from heating to cooling when the season turns",
      "Post a tune-up special",
      "Add rebate or financing info when it changes",
    ],
    chatExamples: [
      "\"Switch the homepage to AC season and add our fall tune-up offer.\"",
      "\"Add a page for heat pump installs.\"",
    ],
    examples: [],
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
    trades: ["truck-repair", "hvac"],
  },
  {
    slug: "lockport-il",
    name: "Lockport",
    county: "Will County",
    title: "Websites for Lockport, IL Businesses, $99/mo | Rank Me Higher",
    description:
      "AI-built websites for Lockport, IL contractors and repair shops. Pro Repair in Lockport runs on Rank Me Higher. Free build, $99/mo when you go live.",
    h1: "Websites for Lockport businesses",
    intro:
      "Lockport businesses serve a mix of homeowners in newer subdivisions and commercial customers along the I-355 and Route 171 corridors. Pro Repair, a Lockport truck repair shop, runs its site on Rank Me Higher.",
    local: [
      "Name the areas you serve around Lockport, like Homer Glen, Romeoville and Joliet",
      "Show homeowners the service area clearly so they know you come to them",
      "Make your phone and request form easy to hit with one thumb",
    ],
    clients: ["Pro Repair"],
    trades: ["truck-repair", "roofers", "plumbers"],
  },
  {
    slug: "lisle-il",
    name: "Lisle",
    county: "DuPage County",
    title: "Websites for Lisle, IL Businesses, $99/mo | Rank Me Higher",
    description:
      "AI-built websites for Lisle, IL service businesses. Off-Tint in Lisle runs on Rank Me Higher. Free build, edit by text, $99/mo when you go live.",
    h1: "Websites for Lisle businesses",
    intro:
      "Lisle is a DuPage County town along I-88 where a lot of customers compare a few local shops before booking. Off-Tint, a Lisle window tint and paint protection shop, runs its site on Rank Me Higher.",
    local: [
      "Show finished work with photos, since DuPage buyers compare shops closely",
      "List the nearby towns you serve, like Naperville, Downers Grove and Woodridge",
      "Make pricing questions and quote requests easy to send by text",
    ],
    clients: ["Off-Tint"],
    trades: ["roofers", "hvac", "plumbers"],
  },
  {
    slug: "oak-brook-il",
    name: "Oak Brook",
    county: "DuPage County",
    title: "Websites for Oak Brook, IL Businesses, $99/mo | Rank Me Higher",
    description:
      "AI-built websites for Oak Brook, IL professional and service firms. QTA Tax in Oak Brook runs on Rank Me Higher. Free build, $99/mo when you go live.",
    h1: "Websites for Oak Brook businesses",
    intro:
      "Oak Brook has a lot of professional firms and office-based service businesses, and their clients research carefully before they call. QTA Tax, an Oak Brook firm of IRS Enrolled Agents, runs its site on Rank Me Higher.",
    local: [
      "Explain credentials and specialties clearly, because buyers vet you first",
      "Give each service and industry you serve its own section",
      "Put your Oak Brook address and phone where search engines and people both see them",
    ],
    clients: ["QTA Tax"],
    trades: ["hvac", "plumbers", "roofers"],
  },
  {
    slug: "mundelein-il",
    name: "Mundelein",
    county: "Lake County",
    title: "Websites for Mundelein, IL Businesses, $99/mo | Rank Me Higher",
    description:
      "AI-built websites for Mundelein and Lake County contractors from Rank Me Higher, which has an office in Mundelein. Free build, $99/mo when you go live.",
    h1: "Websites for Mundelein businesses",
    intro:
      "Rank Me Higher has an office in Mundelein, so Lake County is home turf. Contractors here cover a spread-out area, from Libertyville and Vernon Hills to Grayslake, and customers want to know you actually come to their town.",
    local: [
      "Build a service-area page for each Lake County town you really work in",
      "Show seasonal services, like snow removal or AC tune-ups, at the right time of year",
      "Make it easy to text you a photo of the problem",
    ],
    clients: [],
    trades: ["roofers", "plumbers", "hvac"],
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
      { text: "Dedicated business phone number", soon: false },
      { text: "Branded email for your business", soon: false },
    ],
  },
];
