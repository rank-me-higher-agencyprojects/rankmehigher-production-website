import { Helmet } from "react-helmet-async";
import { ArrowRight, Star, CheckCircle, XCircle, Play, Phone, Users, Calendar, DollarSign, RefreshCw, Headphones } from "lucide-react";
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
  "Leads sit in an inbox you check twice a day",
  "By the time you call back, they've hired someone else",
  "Your website form goes... somewhere? You're not sure",
  "Customers text your personal cell at all hours",
];

const features = [
  {
    icon: Phone,
    title: "Instant SMS Delivery",
    description: "A lead fills your form — your phone buzzes seconds later with their name, number, and request.",
  },
  {
    icon: RefreshCw,
    title: "Email Delivery Too",
    description: "Every lead lands in your email at the same time, with full details. Nothing gets lost.",
  },
  {
    icon: Users,
    title: "Webhooks To Your Tools",
    description: "Already run a CRM or job software? Leads can be pushed straight into it via webhook.",
  },
  {
    icon: Calendar,
    title: "Every Lead In Your Portal",
    description: "One place to see every inquiry your site has ever captured — nothing lives only in a text thread.",
  },
  {
    icon: DollarSign,
    title: "Dedicated Business Number",
    description: "On the $199/mo plan you get a business phone number, so customers stop texting your personal cell.",
  },
  {
    icon: Headphones,
    title: "Branded Business Email",
    description: "The $199/mo plan also adds email at your own domain — you@yourbusiness.com, not gmail.",
  },
];

const howItWorks = [
  {
    step: "01",
    title: "Your Site Captures The Lead",
    description: "Every website the AI builds includes lead capture — forms, call buttons, and quote requests built to convert.",
  },
  {
    step: "02",
    title: "You're Notified In Seconds",
    description: "The lead's details hit your phone by SMS and your inbox by email the moment they submit.",
  },
  {
    step: "03",
    title: "You Respond While They're Hot",
    description: "Local jobs go to whoever answers first. You call back in minutes, not hours — and win the job.",
  },
  {
    step: "04",
    title: "Everything Lives In Your Portal",
    description: "Every lead is logged in your portal so you can follow up, track, and never lose a customer's info.",
  },
];

const results = [
  { metric: "Seconds", label: "From Submit To Your Phone" },
  { metric: "3", label: "Delivery Channels: SMS, Email, Webhook" },
  { metric: "$99", label: "Per month when you go live" },
];

const faqItems = [
  {
    question: "How fast do I actually get the lead?",
    answer: "Seconds. The moment someone submits a form on your site, their name, phone, and request are texted to you and emailed to you. Speed matters — local customers usually hire whoever responds first.",
  },
  {
    question: "Is lead capture included in every plan?",
    answer: "Yes. Every website on the platform captures leads and delivers them instantly by SMS and email — that's part of the $99/mo plan. The $199/mo plan adds a dedicated business phone number and branded email at your domain.",
  },
  {
    question: "What does the dedicated business number do?",
    answer: "It gives your business its own phone line, separate from your personal cell. Customers call and text a real business number, and you keep your personal number private. It comes with the $199/mo plan, alongside the review generator and branded email.",
  },
  {
    question: "Can leads go into my CRM or job software?",
    answer: "Yes. Leads can be delivered by webhook to the tools you already use, in addition to SMS and email. Tell the AI where you want them and it's set up.",
  },
  {
    question: "What happens to old leads?",
    answer: "Every lead your site has ever captured lives in your portal — searchable, with full details. Nothing disappears into a text thread or a spam folder.",
  },
];

const Outbound = () => {
  return (
    <>
      <Helmet>
        <title>Instant Lead Capture & Delivery | Rank Me Higher</title>
        <meta
          name="description"
          content="Every site captures leads and texts them to you in seconds — SMS, email, and webhooks included. The $199/mo plan adds a dedicated business number."
        />
        <meta property="og:title" content="Instant Lead Capture & Delivery | Rank Me Higher" />
        <meta property="og:description" content="Every site captures leads and texts them to you in seconds — SMS, email, and webhooks included." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://rankmehigher.com/services/outbound/" />
        <meta property="og:site_name" content="Rank Me Higher" />
        <meta property="og:image" content="https://rankmehigher.com/assets/logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Instant Lead Delivery | Rank Me Higher" />
        <meta name="twitter:description" content="Leads texted to you in seconds. SMS, email, webhooks — plus a dedicated business number on the $199 plan." />
        <link rel="canonical" href="https://rankmehigher.com/services/outbound/" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Lead Capture & Instant Delivery",
          "provider": { "@type": "Organization", "name": "Rank Me Higher", "url": "https://rankmehigher.com" },
          "description": "Every AI-built website captures leads and delivers them instantly by SMS, email, and webhooks. The $199/mo plan adds a dedicated business phone number and branded email.",
          "url": "https://rankmehigher.com/services/outbound/",
          "areaServed": "United States",
          "serviceType": "Lead Management"
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
            { "@type": "ListItem", "position": 2, "name": "Lead Delivery", "item": "https://rankmehigher.com/services/outbound/" }
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
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                    <span className="text-muted-foreground text-sm">
                      Built Into Every Site On The Platform
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-muted-foreground">
                    <XCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm">
                      How many leads died in your inbox this month?
                    </span>
                  </div>

                  <h1 className="font-heading font-black text-3xl md:text-4xl lg:text-5xl leading-tight">
                    <span className="text-primary">Every Lead</span>
                    <span className="text-foreground"> Your Site Captures,</span>
                    <br />
                    <span className="text-primary">Texted To You</span>
                    <span className="text-foreground"> In </span>
                    <span className="text-primary">Seconds</span>
                  </h1>

                  <h2 className="font-heading font-bold text-xl md:text-2xl text-foreground">
                    SMS • Email • Webhooks • All In Your Portal
                  </h2>

                  <p className="text-muted-foreground leading-relaxed">
                    Local jobs go to whoever answers first. Every website the AI builds <span className="font-semibold text-foreground">captures leads and delivers them instantly</span> — texted to your phone, emailed to your inbox, and logged in your portal. The $199/mo plan adds a <span className="font-semibold text-foreground">dedicated business phone number</span>.
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
                      Lead capture in every plan • From $99/mo • Already a member? <a href={SIGN_IN_URL} className="underline hover:text-primary">Sign in</a>
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
                          Watch A Lead Hit A Phone
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Results Stats */}
          <section className="py-12 bg-card/50 border-y border-border/50">
            <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
              <div className="grid grid-cols-3 gap-8">
                {results.map((result, index) => (
                  <div key={index} className="text-center">
                    <p className="font-heading font-black text-3xl md:text-4xl text-primary">
                      {result.metric}
                    </p>
                    <p className="text-muted-foreground text-sm mt-1">
                      {result.label}
                    </p>
                  </div>
                ))}
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
                  Instant delivery fixes this — <span className="font-bold text-primary">every single lead</span>.
                </p>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-16 lg:py-24">
            <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
              <div className="text-center mb-12">
                <h2 className="font-heading font-black text-2xl md:text-3xl lg:text-4xl text-foreground mb-4">
                  How Your Leads Are <span className="text-primary">Handled</span>
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  From the moment someone hits submit to the moment you call them back. The visit before that submit depends on <a href="/blog/ai-seo-future/" className="underline hover:text-primary">how search assembles those results</a>.
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

          {/* How It Works Section */}
          <section className="py-16 lg:py-24 bg-card/30">
            <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
              <div className="text-center mb-12">
                <h2 className="font-heading font-black text-2xl md:text-3xl lg:text-4xl text-foreground mb-4">
                  How It <span className="text-primary">Works</span>
                </h2>
                <p className="text-muted-foreground">
                  From form submit to booked job.
                </p>
              </div>

              <div className="space-y-6">
                {howItWorks.map((item, index) => (
                  <div
                    key={index}
                    className="flex gap-6 p-6 rounded-2xl bg-background/50 border border-border/50 hover:border-primary/30 transition-all"
                  >
                    <div className="flex-shrink-0 w-14 h-14 rounded-full bg-gradient-to-br from-primary to-red-600 flex items-center justify-center">
                      <span className="font-heading font-black text-white text-lg">{item.step}</span>
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
                Stop Losing Leads To Slow Follow-Up
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Get a free AI-built website with instant lead delivery included. See the live preview by text before you pay anything.
              </p>
              <Button asChild variant="hero" size="xl" className="group">
                <a href="/#free-website">
                  Get my free website
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <p className="text-muted-foreground text-sm mt-4">
                Free build • Leads by SMS + email • $199/mo adds a dedicated business number
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

export default Outbound;
