import { Helmet } from "react-helmet-async";
import { ArrowRight, CheckCircle, XCircle, Play, Search, TrendingUp, MapPin, BarChart3, Target, Repeat } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const SIGN_IN_URL = "https://websites.rankmehigher.com";

const painPoints = [
  "You paid an SEO retainer for months and can't point to a result",
  "Your website has the wrong hours, old phone number, or no schema at all",
  "Competitors with worse work show up first on Google",
  "Nobody can tell you what the agency actually did last month",
];

const features = [
  {
    icon: MapPin,
    title: "Correct NAP Everywhere",
    description: "Name, address, phone — consistent on every page, exactly how Google wants it.",
  },
  {
    icon: Search,
    title: "JSON-LD Schema Built In",
    description: "Structured data on every page so Google understands your business, services, and area.",
  },
  {
    icon: Target,
    title: "City & Service Pages",
    description: "Dedicated pages for what you do and where you do it — the pages local searches actually land on.",
  },
  {
    icon: TrendingUp,
    title: "Honest Hours & Real Info",
    description: "Real hours, real services, real photos. Google rewards sites that match reality.",
  },
  {
    icon: BarChart3,
    title: "Fast, Mobile-Compact Pages",
    description: "Pages built lean so they load fast on a phone — where nearly all local searches happen.",
  },
  {
    icon: Repeat,
    title: "Rankings In Your Portal (Coming)",
    description: "The platform's direction: watch your Google rankings inside the same portal your site lives in.",
  },
];

const timeline = [
  {
    month: "Minutes",
    title: "Your Site Ships SEO-Correct",
    description: "The AI builds your website with clean NAP, JSON-LD schema, honest hours, and city/service pages from the first build. No retrofitting.",
  },
  {
    month: "Week 1",
    title: "Google Finds The Real You",
    description: "A fast, correct, consistent site gives Google exactly what it needs to index and trust your business.",
  },
  {
    month: "Ongoing",
    title: "Your Site Stays Correct",
    description: "Change your hours or services by chatting with the AI — the site and its schema stay in sync with reality.",
  },
  {
    month: "Next",
    title: "The Platform Does More",
    description: "Where it's headed: rankings in your portal, automatic Google Business Profile optimization, and automated review generation.",
  },
];

const faqItems = [
  {
    question: "Do I pay extra for SEO?",
    answer: "No. SEO isn't a retainer here — it's how every website on the platform is built. Correct NAP, JSON-LD schema, honest hours, city and service pages, and fast mobile pages are part of the build, covered by your plan from $99/mo.",
  },
  {
    question: "How is this different from hiring an SEO agency?",
    answer: "An agency sells you monthly work on top of a site that was often built wrong. The platform builds the site right in the first place — the technical local SEO most agencies bill months for is done in the first build, automatically.",
  },
  {
    question: "What exactly does 'local-SEO-correct' mean?",
    answer: "Consistent name, address, and phone on every page. JSON-LD structured data Google can read. Honest business hours. Dedicated pages for each service and city you serve. Fast, mobile-compact pages. That's the checklist Google actually cares about for local businesses — and every site ships with it.",
  },
  {
    question: "Will I be able to see my rankings?",
    answer: "That's where the platform is going: rankings tracked inside your portal, next to your site and your leads. Today you get a correctly built site and full visibility into every lead it captures.",
  },
  {
    question: "Does this really work for local businesses?",
    answer: "Same build process, same local SEO foundation, on every site the platform builds.",
  },
];

const SEO = () => {
  return (
    <>
      <Helmet>
        <title>Local SEO Websites — Rank Higher on Google | Rank Me Higher</title>
        <meta
          name="description"
          content="SEO isn't a retainer here — it's built into every site the AI ships: correct NAP, JSON-LD, honest hours, city and service pages, fast mobile pages."
        />
        <meta property="og:title" content="Local SEO Websites — Rank Higher on Google" />
        <meta property="og:description" content="SEO is built into every site the AI ships: correct NAP, JSON-LD schema, city and service pages, fast mobile pages." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://rankmehigher.com/services/seo/" />
        <meta property="og:site_name" content="Rank Me Higher" />
        <meta property="og:image" content="https://rankmehigher.com/assets/logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Local SEO Websites | Rank Me Higher" />
        <meta name="twitter:description" content="SEO built into every AI-built site: correct NAP, schema, city/service pages, fast mobile pages." />
        <link rel="canonical" href="https://rankmehigher.com/services/seo/" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Local SEO Websites",
          "provider": { "@type": "Organization", "name": "Rank Me Higher", "url": "https://rankmehigher.com" },
          "description": "Local SEO built into every AI-built website: correct NAP, JSON-LD structured data, honest hours, city and service pages, and fast mobile-compact pages.",
          "url": "https://rankmehigher.com/services/seo/",
          "areaServed": "United States",
          "serviceType": "Search Engine Optimization"
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqItems.map(item => ({
            "@type": "Question",
            "name": item.question,
            "acceptedAnswer": { "@type": "Answer", "text": item.answer }
          }))
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://rankmehigher.com/" },
            { "@type": "ListItem", "position": 2, "name": "SEO", "item": "https://rankmehigher.com/services/seo/" }
          ]
        })}</script>
      </Helmet>

      <main className="min-h-screen bg-background relative overflow-hidden">
        {/* Ambient Light Overlays */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute left-0 top-0 w-1/3 h-full bg-gradient-to-r from-primary/15 via-primary/5 to-transparent" />
          <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-primary/15 via-primary/5 to-transparent" />
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10">
          <Navbar />

          {/* Hero Section */}
          <section className="relative pt-24 lg:pt-32 pb-16 lg:pb-24">
            <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Column - Text */}
                <div className="space-y-6">

                  <div className="flex items-center gap-2 text-muted-foreground">
                    <XCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm">
                      Tired of paying an SEO retainer with nothing to show?
                    </span>
                  </div>

                  <h1 className="font-heading font-black text-3xl md:text-4xl lg:text-5xl leading-tight">
                    <span className="text-primary">Local SEO</span>
                    <span className="text-foreground"> Built Into </span>
                    <span className="text-primary">Every Website</span>
                  </h1>

                  <h2 className="font-heading font-bold text-xl md:text-2xl text-foreground">
                    Not A Retainer — It's How The AI Builds
                  </h2>

                  <p className="text-muted-foreground leading-relaxed">
                    Every site the AI ships is <span className="font-semibold text-foreground">local-SEO-correct from the first build</span>: clean NAP, JSON-LD schema, honest hours, city and service pages, and <span className="font-semibold text-foreground">fast mobile-compact pages</span> that rank higher on Google.
                  </p>

                  <Button asChild variant="hero" size="xl" className="group">
                    <a href="/#free-website">
                      Get my free website
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>

                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground text-sm">
                      SEO included in every build • From $99/mo • Already a member? <a href={SIGN_IN_URL} className="underline hover:text-primary">Sign in</a>
                    </p>
                  </div>
                </div>

                {/* Right Column - Video */}
                <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-red-900/20 border border-primary/20 shadow-2xl">
                  <div className="aspect-video relative">
                    <div className="absolute inset-0 flex items-center justify-center bg-black/80">
                      <div className="text-center">
                        <button className="group relative">
                          <div className="absolute inset-0 bg-primary rounded-full blur-xl opacity-50 group-hover:opacity-80 transition-opacity" />
                          <div className="relative w-20 h-20 lg:w-24 lg:h-24 rounded-full bg-gradient-to-br from-primary to-red-600 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                            <Play className="w-8 h-8 lg:w-10 lg:h-10 text-white ml-1" fill="white" />
                          </div>
                        </button>
                        <p className="mt-4 text-white/80 text-sm lg:text-base font-medium">
                          Watch: SEO Baked Into The Build
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Pain Points Section */}
          <section className="py-16 lg:py-24 bg-card/30">
            <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
              <div className="text-center mb-12">
                <h2 className="font-heading font-black text-2xl md:text-3xl lg:text-4xl text-foreground mb-4">
                  Sound <span className="text-primary">Familiar?</span>
                </h2>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {painPoints.map((point, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 rounded-xl bg-background/50 border border-border/50"
                  >
                    <XCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-foreground">{point}</p>
                  </div>
                ))}
              </div>

              <div className="text-center mt-8">
                <p className="text-muted-foreground text-lg">
                  A correctly built site fixes this — <span className="font-bold text-primary">from day one</span>.
                </p>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-16 lg:py-24">
            <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
              <div className="text-center mb-12">
                <h2 className="font-heading font-black text-2xl md:text-3xl lg:text-4xl text-foreground mb-4">
                  What's In Every <span className="text-primary">Local-SEO-Correct Build</span>
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  The checklist agencies bill months for — done automatically by the AI, in the first build.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="p-6 rounded-2xl bg-card/50 border border-border/50 hover:border-primary/30 transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-red-600 flex items-center justify-center mb-4">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-heading font-bold text-lg text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Timeline Section */}
          <section className="py-16 lg:py-24 bg-card/30">
            <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
              <div className="text-center mb-12">
                <h2 className="font-heading font-black text-2xl md:text-3xl lg:text-4xl text-foreground mb-4">
                  How Your SEO <span className="text-primary">Happens</span>
                </h2>
                <p className="text-muted-foreground">
                  Honest about what's live today and where the platform is going.
                </p>
              </div>

              <div className="space-y-6">
                {timeline.map((item, index) => (
                  <div
                    key={index}
                    className="flex gap-6 p-6 rounded-2xl bg-background/50 border border-border/50 hover:border-primary/30 transition-all"
                  >
                    <div className="flex-shrink-0 px-4 py-2 rounded-lg bg-gradient-to-br from-primary to-red-600">
                      <span className="font-heading font-bold text-white text-sm">{item.month}</span>
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-lg text-foreground mb-2">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 lg:py-24">
            <div className="container mx-auto px-4 lg:px-8 max-w-3xl text-center">
              <h2 className="font-heading font-black text-2xl md:text-3xl lg:text-4xl text-foreground mb-6">
                Start With A Site Google Can Actually Rank
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Take the free website quiz. The AI builds your local-SEO-correct site in minutes and texts you the live preview — see it before you pay anything.
              </p>
              <Button asChild variant="hero" size="xl" className="group">
                <a href="/#free-website">
                  Get my free website
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <p className="text-muted-foreground text-sm mt-4">
                Free build • SEO included • Already a member? <a href={SIGN_IN_URL} className="underline hover:text-primary">Sign in</a>
              </p>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-16 lg:py-24 bg-card/30">
            <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
              <div className="text-center mb-12">
                <h2 className="font-heading font-black text-2xl md:text-3xl lg:text-4xl text-foreground">
                  Frequently Asked <span className="text-primary">Questions</span>
                </h2>
              </div>

              <Accordion type="single" collapsible className="space-y-4">
                {faqItems.map((item, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border border-primary/50 rounded-lg px-6 bg-background/50 data-[state=open]:border-primary"
                  >
                    <AccordionTrigger className="text-left text-foreground hover:text-primary hover:no-underline py-5">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-5">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </section>

          <Footer />
        </div>
      </main>
    </>
  );
};

export default SEO;
