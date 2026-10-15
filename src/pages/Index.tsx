import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FreeWebsiteQuiz from "@/components/funnel/FreeWebsiteQuiz";
import HeroSection from "@/components/home/HeroSection";
import EditorShowcase from "@/components/home/EditorShowcase";
import { Eyebrow, Reveal, SectionHeading } from "@/components/home/motion";
import { Link } from "react-router-dom";
import { CtaRow } from "@/components/marketing/Cta";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const scrollToQuiz = () => {
  document.getElementById("free-website")?.scrollIntoView({ behavior: "smooth", block: "center" });
};

const scrollToSection = (id: string) => () => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
};

const FAQ_ITEMS = [
  {
    q: "Is it really free?",
    a: "Yes. The AI researches your market, plans your pages, and builds your complete website — free. You get a live preview link by text and see the whole thing before paying anything. You only pay when you claim it and put it live on your domain.",
  },
  {
    q: "Who owns the website?",
    a: "You do. Your business, your content, your photos, your domain. If you ever leave, your domain and your content go with you — no hostage situations.",
  },
  {
    q: "What if I already have a website?",
    a: "Even better. The AI studies what you have and rebuilds you a faster, better-ranking site — then your domain moves over when you're ready. No downtime, nothing to migrate yourself.",
  },
  {
    q: "How is it built so fast?",
    a: "The AI knows exactly what a local site needs to rank on Google: the right structure, real service pages, correct local SEO. It researches your market, plans your site, writes the content, and builds it — in minutes, not weeks.",
  },
  {
    q: "What happens after I claim it?",
    a: "We connect your domain and put your site live — hosting, SSL, everything handled. Your portal opens, and from there you edit by chat, get leads delivered instantly, and watch your site grow. Plans start at $99/mo.",
  },
  {
    q: "Can I change things myself?",
    a: "Yes — by chatting. Open your portal, click anything on your site, and say the change. The AI makes it. Every edit is versioned, so you can revert anything, anytime.",
  },
];

const PORTFOLIO_ITEMS = [
  { name: "Klean AF", desc: "Cleaning · San Diego", img: "/kleanaf.webp" },
  { name: "Truck Clinic", desc: "Truck Repair · Romeoville, IL", img: "/truckclinic.webp" },
  { name: "Off-Tint", desc: "PPF & Tinting · Lisle, IL", img: "/off-tint-screenshot.webp" },
  { name: "XXII Century", desc: "Trucking · Chicago, IL", img: "/goxxii.webp" },
  { name: "Pro Repair", desc: "Truck Repair · Lockport, IL", img: "/images/portfolio-pro-repair.webp" },
  { name: "Property Refresh", desc: "Maid Service · Chicago, IL", img: "/images/portfolio-property-refresh-maids.webp" },
  { name: "Chicago Valley", desc: "Video Production · Chicago, IL", img: "/images/portfolio-chicago-valley.webp" },
  { name: "LTS Mechanical", desc: "Truck Repair · Romeoville, IL", img: "/images/portfolio-lts-mechanical.webp" },
  { name: "Paddock Parking", desc: "Storage Yard · Phoenix, AZ", img: "/images/portfolio-paddock-parking.webp" },
  { name: "QTA Tax", desc: "Tax & Accounting · Oak Brook, IL", img: "/images/portfolio-qtatax.webp" },
  { name: "Midwest Express", desc: "Trucking · Chicago, IL", img: "/images/portfolio-midwest-express.webp" },
];

const HOW_IT_WORKS = [
  { n: "01", title: "Answer 6 questions", line: "Your business name, what you do, and where you work — 60 seconds, no sales call." },
  { n: "02", title: "AI researches + plans", line: "It studies your market and competitors, then plans a local-SEO-correct site." },
  { n: "03", title: "Built + texted to you", line: "Minutes later your phone buzzes with the live link. Every page, ready to judge." },
  { n: "04", title: "Claim it, go live", line: "We connect your domain — hosting, SSL, everything handled, from $99/mo." },
];

const PLATFORM_LIVE = [
  { title: "Chat editor", line: "Click your site, say the change, watch it happen. Versioned and revertable." },
  { title: "SMS updates", line: "Build progress, your live link, and every lead — delivered to your texts." },
  { title: "Hosting, domain & SSL", line: "Your site served fast and secure on your own domain, fully handled." },
  { title: "Lead capture", line: "Forms wired in from day one, with every lead routed to you instantly." },
];

const PLATFORM_SOON = [
  { title: "Rankings", line: "Watch where you stand on Google, right in your portal." },
  { title: "Task requests", line: "“Add a page for spring specials.” The AI does it." },
  { title: "GBP auto-optimization", line: "Your Google Business Profile kept accurate and active, hands-free." },
  { title: "Review generation", line: "Automated review requests that grow your reputation." },
];

const Index = () => {
  // Inner pages deep-link to /#free-website with plain <a> tags; the anchor
  // renders client-side after the browser's own fragment scroll has already
  // given up, so retry it once the section exists.
  useEffect(() => {
    if (window.location.hash !== "#free-website") return;
    const t = setTimeout(() => {
      document.getElementById("free-website")?.scrollIntoView({ block: "center" });
    }, 150);
    return () => clearTimeout(t);
  }, []);

  // Same retry for the nav's section anchors (how-it-works / pricing / faq).
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (!["how-it-works", "pricing", "faq"].includes(hash)) return;
    const t = setTimeout(() => {
      document.getElementById(hash)?.scrollIntoView({ block: "start" });
    }, 150);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <Helmet>
        <title>$99/mo Websites for Contractors in Chicagoland, Built by AI | Rank Me Higher</title>
        <meta
          name="description"
          content="Websites for Chicagoland roofers, plumbers, HVAC and truck repair shops. Built by AI in minutes, edited by chat, $99/mo when you go live. Free build, see it before you pay."
        />
        <meta property="og:title" content="$99/mo Websites for Contractors in Chicagoland, Built by AI | Rank Me Higher" />
        <meta property="og:description" content="Get a free website that dominates Google — built by AI in minutes. The AI researches your market, builds your site, and texts you the live link." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://rankmehigher.com/" />
        <meta property="og:image" content="https://rankmehigher.com/assets/logo.png" />
        <meta property="og:site_name" content="Rank Me Higher" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="$99/mo Websites for Contractors in Chicagoland, Built by AI | Rank Me Higher" />
        <meta name="twitter:description" content="Get a free website that dominates Google — built by AI in minutes. Answer 6 questions, get the live link by text." />
        <meta name="twitter:image" content="https://rankmehigher.com/assets/logo.png" />
        <link rel="canonical" href="https://rankmehigher.com/" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "@id": "https://rankmehigher.com/#organization",
          "founder": {"@type": "Person", "@id": "https://andriusdigital.com/#person", "name": "Andrius Pletniovas", "alternateName": "Andrius Digital", "url": "https://andriusdigital.com/"},
          "name": "Rank Me Higher",
          "url": "https://rankmehigher.com",
          "logo": "https://rankmehigher.com/assets/logo.png",
          "description": "The AI-autonomous growth platform for local businesses. The AI researches your market, builds a local-SEO-correct website in minutes, texts you the live link, and you edit anything by chatting with it. One portal, one subscription.",
          "address": { "@type": "PostalAddress", "streetAddress": "1 N State St Ste 1515", "addressLocality": "Chicago", "addressRegion": "IL", "postalCode": "60602", "addressCountry": "US" },
          "telephone": "+17735724686",
          "sameAs": ["https://www.facebook.com/rankmehigherseo", "https://instagram.com/rankmehigherseo", "https://www.tiktok.com/@rankmehigher", "https://agencies.semrush.com/rank-me-higher/"],
          "foundingDate": "2024",
          "numberOfEmployees": { "@type": "QuantitativeValue", "value": "10-50" },
          "serviceArea": { "@type": "Place", "name": "United States" }
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Rank Me Higher",
          "url": "https://rankmehigher.com",
          "description": "AI website builder for local businesses. Get a free AI-built website that ranks on Google — live in minutes, edited by chat, run from one portal.",
          "publisher": { "@type": "Organization", "name": "Rank Me Higher" }
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Rank Me Higher",
          "image": "https://rankmehigher.com/assets/logo.png",
          "telephone": "+17735724686",
          "address": { "@type": "PostalAddress", "streetAddress": "1 N State St Ste 1515", "addressLocality": "Chicago", "addressRegion": "IL", "postalCode": "60602", "addressCountry": "US" },
          "url": "https://rankmehigher.com",
          "priceRange": "$$",
          "openingHours": "Mo-Fr 09:00-17:00",
          "sameAs": ["https://www.facebook.com/rankmehigherseo", "https://instagram.com/rankmehigherseo", "https://www.tiktok.com/@rankmehigher", "https://agencies.semrush.com/rank-me-higher/"]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": FAQ_ITEMS.map((item) => ({
            "@type": "Question",
            "name": item.q,
            "acceptedAnswer": { "@type": "Answer", "text": item.a },
          })),
        })}</script>
      </Helmet>

      <main className="relative min-h-screen overflow-hidden bg-background">
        {/* One subtle ambient — the three floating orbs are retired. */}
        <div
          aria-hidden
          className="pointer-events-none fixed inset-x-0 top-0 z-0 h-[50vh] bg-[radial-gradient(60%_60%_at_50%_0%,hsl(4_84%_55%/0.04),transparent_70%)]"
        />

        <div className="relative z-10">
          <Navbar onOpenLeadMagnet={scrollToQuiz} />

          {/* 1-2 · HERO */}
          <HeroSection onPrimary={scrollToQuiz} onSecondary={scrollToSection("how-it-works")} />

          {/* 3 · EDITOR SHOWCASE — the centerpiece */}
          <EditorShowcase />

          {/* 4 · THE QUIZ */}
          <section id="free-website" className="scroll-mt-24 py-12 md:py-32">
            <div className="mx-auto max-w-2xl px-6">
              <Reveal>
                <SectionHeading
                  center
                  eyebrow="Free — takes 60 seconds"
                  title="Claim your free website"
                  sub="6 questions. That's everything the AI needs to research your market and build your site. Your live link arrives by text."
                />
              </Reveal>
              <Reveal className="mt-8 md:mt-10" delay={0.1}>
                <FreeWebsiteQuiz />
              </Reveal>
            </div>
          </section>

          {/* 5 · HOW IT WORKS */}
          <section id="how-it-works" className="scroll-mt-24 border-t border-white/[0.06] py-12 md:py-32">
            <div className="mx-auto max-w-content px-6">
              <Reveal>
                <SectionHeading
                  eyebrow="How it works"
                  title="From 6 questions to a live website."
                />
              </Reveal>
              <div className="mt-8 grid gap-4 sm:grid-cols-2 md:mt-16 md:gap-x-8 md:gap-y-10 lg:grid-cols-4">
                {HOW_IT_WORKS.map((step, i) => (
                  <Reveal key={step.n} delay={0.07 * i}>
                    <div className="border-t border-white/[0.08] pt-5">
                      <span className="font-orbitron text-xs tracking-[0.2em] text-white/30">{step.n}</span>
                      <h3 className="mt-3 text-base font-semibold text-foreground">{step.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-white/50">{step.line}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          {/* 6 · PROOF — client sites ticker */}
          <section className="overflow-hidden border-t border-white/[0.06] py-12 md:py-32">
            <div className="mx-auto max-w-content px-6">
              <Reveal>
                <SectionHeading
                  center
                  eyebrow="Proof"
                  title="These businesses already run on Rank Me Higher"
                  sub="Researched, built, and run on the platform."
                />
              </Reveal>
            </div>

            <Reveal className="mt-8 md:mt-16">
              <div className="relative">
                <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
                <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />
                <div className="overflow-hidden">
                  <div className="flex gap-5 animate-scroll-left-slower hover:[animation-play-state:paused]">
                    {[...PORTFOLIO_ITEMS, ...PORTFOLIO_ITEMS].map((item, i) => (
                      <div key={i} className="w-[230px] flex-shrink-0 md:w-[270px]">
                        <div className="overflow-hidden rounded-lg border border-white/[0.08] bg-white/[0.02] transition-colors duration-300 hover:border-white/[0.16]">
                          <div className="relative aspect-[16/9] overflow-hidden bg-black">
                            <img
                              src={item.img.replace('.webp', '-600w.webp')}
                              srcSet={`${item.img.replace('.webp', '-400w.webp')} 400w, ${item.img.replace('.webp', '-600w.webp')} 600w`}
                              sizes="(max-width: 640px) 230px, 270px"
                              alt={`${item.name} - ${item.desc} - Custom website by Rank Me Higher`}
                              loading="lazy"
                              width={600}
                              height={338}
                              className="block h-full w-full object-cover object-top"
                            />
                          </div>
                          <div className="px-3.5 py-3">
                            <h4 className="text-xs font-semibold text-foreground">{item.name}</h4>
                            <p className="mt-0.5 text-[10px] text-white/40">{item.desc}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </section>

          {/* 7 · PLATFORM */}
          <section className="relative overflow-hidden border-t border-white/[0.06] py-12 md:py-32">
            {/* Quiet grid texture band */}
            <div
              aria-hidden
              className="absolute inset-0 bg-cover bg-center opacity-30 [mask-image:linear-gradient(to_bottom,transparent,black_18%,black_82%,transparent)]"
              style={{ backgroundImage: "url(/assets/ai/section-texture.webp)" }}
            />
            <div className="relative mx-auto max-w-content px-6">
              <Reveal>
                <SectionHeading
                  eyebrow="The platform"
                  title="One portal runs it all."
                  sub="Your website is the front door. Behind it, one subscription keeps the whole thing running — and keeps getting new capabilities."
                />
              </Reveal>

              <div className="mt-8 grid gap-4 sm:grid-cols-2 md:mt-16 lg:grid-cols-4">
                {PLATFORM_LIVE.map((cap, i) => (
                  <Reveal key={cap.title} delay={0.06 * i}>
                    <div className="h-full rounded-xl border border-white/[0.08] bg-white/[0.02] p-6">
                      <h3 className="text-sm font-semibold text-foreground">{cap.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-white/50">{cap.line}</p>
                    </div>
                  </Reveal>
                ))}
                {PLATFORM_SOON.map((cap, i) => (
                  <Reveal key={cap.title} delay={0.06 * i}>
                    <div className="h-full rounded-xl border border-dashed border-white/[0.08] p-6">
                      <div className="flex items-center justify-between gap-2">
                        <h3 className="text-sm font-semibold text-white/70">{cap.title}</h3>
                        <span className="rounded-full border border-white/[0.14] px-2 py-0.5 font-orbitron text-[8px] uppercase tracking-[0.18em] text-white/40">
                          Soon
                        </span>
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-white/40">{cap.line}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          {/* 8 · PRICING */}
          <section id="pricing" className="scroll-mt-24 border-t border-white/[0.06] py-12 md:py-32">
            <div className="mx-auto max-w-content px-6">
              <Reveal>
                <SectionHeading
                  center
                  eyebrow="Pricing"
                  title="Simple, transparent pricing"
                  sub="The build is free. Pay only when you claim your site and go live on your domain. No contracts, no setup fees."
                />
              </Reveal>

              <div className="mx-auto mt-8 grid max-w-4xl items-stretch gap-4 md:mt-16 md:grid-cols-3">
                {/* $99 — emphasized with a border accent, not a shout */}
                <Reveal className="h-full">
                  <div className="relative flex h-full flex-col rounded-xl border border-primary/40 bg-white/[0.02] p-7">
                    <span className="absolute -top-2.5 left-7 rounded-full bg-background px-2 font-orbitron text-[9px] uppercase tracking-[0.2em] text-primary">
                      Start here
                    </span>
                    <div>
                      <span className="font-heading text-4xl font-bold tracking-tight text-foreground">$99</span>
                      <span className="ml-1 text-sm text-white/40">/mo</span>
                      <p className="mt-2 text-sm font-medium text-white/70">Your website</p>
                    </div>
                    <ul className="mt-6 flex-1 space-y-2.5">
                      {[
                        'Your AI-built website, live on your domain',
                        'Hosting, SSL & security handled',
                        'Edit anything by chat — versioned & revertable',
                        'Lead capture with instant delivery',
                        'Your portal — everything in one place',
                      ].map((item) => (
                        <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-white/55">
                          <span aria-hidden className="mt-[0.65em] h-px w-3 shrink-0 bg-white/30" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <button onClick={scrollToQuiz} className="btn-cta-primary mt-7 w-full">
                      Get your free website
                    </button>
                  </div>
                </Reveal>

                {/* $149 */}
                <Reveal className="h-full" delay={0.07}>
                  <div className="flex h-full flex-col rounded-xl border border-white/[0.08] bg-white/[0.02] p-7">
                    <div>
                      <span className="font-heading text-4xl font-bold tracking-tight text-foreground">$149</span>
                      <span className="ml-1 text-sm text-white/40">/mo</span>
                      <p className="mt-2 text-sm font-medium text-white/70">+ automatic Google Business Profile optimization</p>
                    </div>
                    <ul className="mt-6 flex-1 space-y-2.5">
                      {[
                        'Everything in $99',
                        'Automatic Google Business Profile optimization',
                        'Your GBP kept accurate, active & ranking',
                      ].map((item) => (
                        <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-white/55">
                          <span aria-hidden className="mt-[0.65em] h-px w-3 shrink-0 bg-white/30" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <button onClick={scrollToQuiz} className="btn-cta-ghost mt-7 w-full">
                      Start with the free build
                    </button>
                  </div>
                </Reveal>

                {/* $199 */}
                <Reveal className="h-full" delay={0.14}>
                  <div className="flex h-full flex-col rounded-xl border border-white/[0.08] bg-white/[0.02] p-7">
                    <div>
                      <span className="font-heading text-4xl font-bold tracking-tight text-foreground">$199</span>
                      <span className="ml-1 text-sm text-white/40">/mo</span>
                      <p className="mt-2 text-sm font-medium text-white/70">+ review generator, dedicated phone + branded email</p>
                    </div>
                    <ul className="mt-6 flex-1 space-y-2.5">
                      {[
                        'Everything in $149',
                        'Review generator that grows your reputation',
                        'Dedicated business phone number',
                        'Branded email for your business',
                      ].map((item) => (
                        <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-white/55">
                          <span aria-hidden className="mt-[0.65em] h-px w-3 shrink-0 bg-white/30" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <button onClick={scrollToQuiz} className="btn-cta-ghost mt-7 w-full">
                      Start with the free build
                    </button>
                  </div>
                </Reveal>
              </div>

              <Reveal delay={0.2}>
                <p className="mt-8 text-center text-sm text-white/50 md:mt-10">
                  Every plan starts the same way — <span className="text-white/80">with your free website.</span>{" "}
                  <Link to="/pricing/" className="text-primary underline underline-offset-4">Full pricing details</Link>
                </p>
              </Reveal>
            </div>
          </section>

          {/* 9 · FAQ */}
          <section id="faq" className="scroll-mt-24 border-t border-white/[0.06] py-12 md:py-32">
            <div className="mx-auto max-w-3xl px-6">
              <Reveal>
                <SectionHeading center eyebrow="FAQ" title="Frequently asked questions" />
              </Reveal>

              <Reveal className="mt-8 md:mt-16" delay={0.1}>
                <Accordion type="single" collapsible className="w-full">
                  {FAQ_ITEMS.map((faq, i) => (
                    <AccordionItem key={i} value={`faq-${i}`} className="border-white/[0.08]">
                      <AccordionTrigger className="py-5 text-left text-sm font-medium text-foreground hover:no-underline md:text-base [&>svg]:text-white/40">
                        {faq.q}
                      </AccordionTrigger>
                      <AccordionContent className="pb-5 text-sm leading-relaxed text-white/55">
                        {faq.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </Reveal>
            </div>
          </section>

          {/* 10 · FINAL CTA */}
          <section className="relative overflow-hidden border-t border-white/[0.06] py-12 md:py-36">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 bottom-0 h-[320px] bg-[radial-gradient(50%_80%_at_50%_100%,hsl(4_84%_55%/0.07),transparent_70%)]"
            />
            <div className="relative mx-auto max-w-content px-6 text-center">
              <Reveal>
                <Eyebrow center>Free build · Live link by text · No credit card</Eyebrow>
                <h2 className="mx-auto mt-6 max-w-2xl font-heading text-[clamp(2rem,4.2vw,3.25rem)] font-bold leading-[1.08] tracking-[-0.025em] text-foreground">
                  Your website is 6 questions away.
                </h2>
                <div className="mt-8 md:mt-10">
                  <CtaRow center />
                </div>
              </Reveal>
            </div>
          </section>

          <section aria-labelledby="explore-title" className="border-t border-white/[0.06] py-12 md:py-16">
            <div className="mx-auto max-w-content px-6">
              <h2 id="explore-title" className="font-heading text-2xl font-bold tracking-tight text-foreground">Built for your trade and your town</h2>
              <div className="mt-6 grid gap-6 text-sm md:grid-cols-3">
                <div>
                  <p className="text-white/45">By trade</p>
                  <ul className="mt-2 space-y-1.5">
                    <li><Link to="/websites-for/truck-repair/" className="text-white/75 hover:text-primary">Truck repair shop websites</Link></li>
                  </ul>
                </div>
                <div>
                  <p className="text-white/45">By town</p>
                  <ul className="mt-2 space-y-1.5">
                    <li><Link to="/locations/romeoville-il/" className="text-white/75 hover:text-primary">Romeoville</Link></li>
                  </ul>
                </div>
                <div>
                  <p className="text-white/45">Learn more</p>
                  <ul className="mt-2 space-y-1.5">
                    <li><Link to="/examples/" className="text-white/75 hover:text-primary">Client examples &amp; case studies</Link></li>
                    <li><Link to="/ai-website-editor/" className="text-white/75 hover:text-primary">The AI website editor</Link></li>
                    <li><Link to="/pricing/" className="text-white/75 hover:text-primary">Pricing</Link></li>
                    <li><Link to="/faq/" className="text-white/75 hover:text-primary">FAQ</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section aria-labelledby="founder-title" className="border-t border-white/10 py-12">
            <div className="mx-auto max-w-content px-6">
              <p className="text-sm font-semibold text-primary">Behind Rank Me Higher</p>
              <h2 id="founder-title" className="mt-3 text-2xl font-bold">Founded by Andrius Pletniovas (Andrius Digital)</h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/70">Andrius is a Chicago-area entrepreneur and the founder of Rank Me Higher and CDL Agency. His work connects business websites, digital marketing and the systems teams use to follow up with leads.</p>
              <div className="mt-5 flex flex-wrap gap-6 text-sm">
                <a href="https://andriusdigital.com/" className="text-primary underline underline-offset-4">Meet Andrius</a>
                <a href="https://andriusdigital.com/work/" className="text-primary underline underline-offset-4">Companies &amp; work</a>
              </div>
            </div>
          </section>
          <Footer />
        </div>
      </main>
    </>
  );
};

export default Index;
