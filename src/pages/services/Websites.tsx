import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, XCircle, Play, Globe, Bot, Zap, Clock, Shield, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PLANS } from "@/lib/marketing-data";

const META_DESCRIPTION =
  "AI website builder for local businesses. See your site for free, go live from $99/mo, and edit by chat. Hosting, SSL, and your domain are included.";

const SIGN_IN_URL = "https://websites.rankmehigher.com";

const painPoints = [
  "Your website was built years ago and never updated since",
  "Web designers quoted you thousands and months of waiting",
  "Every small edit means emailing someone and waiting days",
  "Competitors with worse work outrank you on Google",
];

const features = [
  {
    icon: Bot,
    title: "AI Researches Your Market",
    description: "Before writing a line, the AI studies your business, your area, and what customers search for.",
  },
  {
    icon: Globe,
    title: "Local-SEO-Correct From Day One",
    description: "Correct name, address, phone, JSON-LD schema, honest hours, and city/service pages built in.",
  },
  {
    icon: Zap,
    title: "Built In Minutes, Not Months",
    description: "Research, plan, build — the AI ships a complete site with real business photos and natural AI imagery.",
  },
  {
    icon: MessageSquare,
    title: "Edit Anything By Chatting",
    description: "Click anything on your site, say the change. Every edit is versioned and revertable.",
  },
  {
    icon: Shield,
    title: "Hosting, SSL & Domain Handled",
    description: "One subscription covers hosting, SSL, and your custom domain. Nothing to manage.",
  },
  {
    icon: Clock,
    title: "Progress Texted To You",
    description: "The AI texts and emails you as it works — you get a live preview link on your phone.",
  },
];

const process = [
  {
    step: "01",
    title: "Take The Free Website Quiz",
    description: "Answer a few questions about your business on our homepage. That's all the AI needs to start.",
  },
  {
    step: "02",
    title: "The AI Researches & Plans",
    description: "It studies your market and maps out a local-SEO-correct site: pages, copy, photos, structure.",
  },
  {
    step: "03",
    title: "Your Site Is Built In Minutes",
    description: "You get a text with a live preview link. Real photos, natural AI imagery, lead capture — done.",
  },
  {
    step: "04",
    title: "Go Live & Edit By Chat",
    description: "Like it? Go live on your domain from $99/mo. Change anything, anytime, by chatting with the AI.",
  },
];

const faqItems = [
  {
    question: "Is the free website actually free?",
    answer: "Yes. The AI researches your market, builds a complete website, and texts you a live preview link — all free, no card required. You only pay when you want it live on your own domain: $99/mo covers hosting, SSL, your domain connection, chat editing, and your portal.",
  },
  {
    question: "How can an AI build a real website in minutes?",
    answer: "The AI follows the same playbook every time: research your market, plan the pages, build with correct local SEO, then text you the result. It's not a template — it's a build, done fast.",
  },
  {
    question: "What if I want to change something?",
    answer: "You chat with the AI. Click any part of your site, say the change — new photo, different wording, a new section — and it's done. Every change is versioned, so you can revert anything. No tickets, no waiting on a designer.",
  },
  {
    question: "Will it use my real photos?",
    answer: "Yes. The AI pulls in your real business photos wherever you have them, and fills gaps with natural AI imagery that matches your trade. No cheesy stock photos of models in hard hats.",
  },
  {
    question: "What do the plans include?",
    answer: "$99/mo: your website live on your domain, hosting, SSL, chat edits, lead capture with instant delivery, and your portal. $149/mo adds automatic Google Business Profile optimization, labeled Soon because it is on the roadmap and not yet automated in the portal. $199/mo adds a review generator, also labeled Soon, plus a dedicated business phone number and branded email, which are Soon on that plan.",
  },
  {
    question: "Do I pay anything to see my website?",
    answer: "No. The AI builds your full website for free and texts you the live preview link. You only pay when you claim it and put it live on your domain.",
  },
  {
    question: "Who owns the site and the domain?",
    answer: "You do. Your business, your content, your photos, your domain. If you ever leave, your domain and your content go with you.",
  },
  {
    question: "Is there a contract or setup fee?",
    answer: "No contracts and no setup fees. Plans are monthly, starting at $99/mo.",
  },
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
    topic: "Time to first draft",
    ai: "Minutes. You answer 6 questions, the AI builds the site, and a live preview link arrives by text.",
    designer: "The first draft waits on the designer's project. There is no site to open until that project produces one.",
    diy: "The first draft takes as long as you spend putting the pages together yourself.",
  },
  {
    topic: "Who writes the copy",
    ai: "The AI researches your market and trade, plans the pages, and writes the content.",
    designer: "The copy is part of the design project. You brief it, then wait for it to come back.",
    diy: "You write the pages yourself.",
  },
  {
    topic: "How edits happen",
    ai: "Open your portal, click anything, and say the change. Every edit is versioned, and you can revert it.",
    designer: "You email the change and wait. A later edit is another request, not a sentence in your portal.",
    diy: "You go back into the builder and make the change yourself, which means learning that builder.",
  },
  {
    topic: "Hosting and SSL",
    ai: "Included. Hosting, SSL, and your domain connection are part of the plan from $99/mo.",
    designer: "The design project and the hosting are separate. You still arrange a domain with SSL for the finished site.",
    diy: "Connecting your domain and SSL is setup you do in the builder.",
  },
];

const Websites = () => {
  return (
    <>
      <Helmet>
        <title>AI Website Builder for Local Business | Rank Me Higher</title>
        <meta name="description" content={META_DESCRIPTION} />
        <meta property="og:title" content="AI Website Builder for Local Business | Rank Me Higher" />
        <meta property="og:description" content={META_DESCRIPTION} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://rankmehigher.com/services/websites/" />
        <meta property="og:site_name" content="Rank Me Higher" />
        <meta property="og:image" content="https://rankmehigher.com/assets/logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Website Builder for Local Business | Rank Me Higher" />
        <meta name="twitter:description" content={META_DESCRIPTION} />
        <link rel="canonical" href="https://rankmehigher.com/services/websites/" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "AI Website Builder for Local Business",
          "provider": { "@type": "Organization", "name": "Rank Me Higher", "url": "https://rankmehigher.com" },
          "description": "AI-built local business websites: the AI researches your market, builds a local-SEO-correct site in minutes with real photos, and texts you the live preview. Hosting, SSL, domain, and chat editing included.",
          "url": "https://rankmehigher.com/services/websites/",
          "areaServed": "United States",
          "offers": { "@type": "Offer", "price": "99", "priceCurrency": "USD", "description": "$99/mo — website, hosting, chat edits, portal. Free preview build." },
          "serviceType": "Web Development"
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
            { "@type": "ListItem", "position": 2, "name": "Websites", "item": "https://rankmehigher.com/services/websites/" }
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
                  {/* Pain Point */}
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <XCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm">
                      Still waiting months and paying thousands for a website?
                    </span>
                  </div>

                  {/* Main Headline */}
                  <h1 className="font-heading font-black text-3xl md:text-4xl lg:text-5xl leading-tight">
                    <span className="text-foreground">Get A </span>
                    <span className="text-primary">Free Website</span>
                    <span className="text-foreground"> Built By </span>
                    <span className="text-primary">AI</span>
                    <span className="text-foreground"> In </span>
                    <span className="text-primary">Minutes</span>
                  </h1>

                  {/* Subheadline */}
                  <h2 className="font-heading font-bold text-xl md:text-2xl text-foreground">
                    It Researches Your Market, Builds The Site, And Texts You The Link
                  </h2>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">
                    The AI studies your business and your area, then builds a <span className="font-semibold text-foreground">local-SEO-correct website</span> with real photos and natural AI imagery. You <span className="font-semibold text-foreground">edit anything by chatting with it</span>. Hosting, SSL, and your domain are handled.
                  </p>

                  {/* CTA Button */}
                  <Button asChild variant="hero" size="xl" className="group">
                    <a href="/#free-website">
                      Get my free website
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>

                  {/* Trust Badge */}
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground text-sm">
                      Free build with live preview • Go live from $99/mo • Already a member? <a href={SIGN_IN_URL} className="underline hover:text-primary">Sign in</a>
                    </p>
                  </div>
                </div>

                {/* Right Column - Video Placeholder */}
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
                          Watch The AI Build A Site
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
                  The AI fixes all of this — in <span className="font-bold text-primary">minutes</span>.
                </p>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-16 lg:py-24">
            <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
              <div className="text-center mb-12">
                <h2 className="font-heading font-black text-2xl md:text-3xl lg:text-4xl text-foreground mb-4">
                  What The AI Builds Into <span className="text-primary">Every Website</span>
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Not a template — a researched, local-SEO-correct build. See <a href="/services/seo/" className="underline hover:text-primary">how we handle SEO on every build</a>. Once it is live, you can <a href="/services/google-ads/" className="underline hover:text-primary">run Google Ads to your new site</a>.
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

          {/* Process Section */}
          <section className="py-16 lg:py-24 bg-card/30">
            <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
              <div className="text-center mb-12">
                <h2 className="font-heading font-black text-2xl md:text-3xl lg:text-4xl text-foreground mb-4">
                  How It <span className="text-primary">Works</span>
                </h2>
                <p className="text-muted-foreground">
                  From quiz to live preview link on your phone — in minutes.
                </p>
              </div>

              <div className="space-y-6">
                {process.map((item, index) => (
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

          <section className="py-16 lg:py-24">
            <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
              <h2 className="font-heading font-black text-2xl md:text-3xl lg:text-4xl text-foreground mb-4">
                How our AI website builder works, step by step
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  The order is the same for every business. You answer 6 questions. The AI researches your market and your trade, plans the pages, the copy, the photos, and the structure, builds the site, and texts you a live preview link. You see the whole site before you pay anything. When you claim it, the site goes live on your domain from $99/mo, and from then on you edit by chat. Every plan starts with that free build.
                </p>
                <h3 className="font-heading font-bold text-xl text-foreground pt-2">Answer 6 questions</h3>
                <p>
                  The quiz is on the homepage. It is 6 questions about your business, and it is the brief the build starts from. You are not asked to write the pages, and you do not send a project email to get a first draft. When the answers are in, the AI has what it needs to research the market. The way you review the work is the live preview, and that link arrives by text.
                </p>
                <h3 className="font-heading font-bold text-xl text-foreground pt-2">The AI researches your market and trade</h3>
                <p>
                  Research comes before the site is written. The AI studies your business, your trade, and your area. It is aimed at the right structure, real service pages, and correct local SEO: the same name, address, and phone, JSON-LD schema, honest hours, and pages for the services and cities you serve.
                </p>
                <p>
                  If you already have a website, the AI studies what you have and builds you a new site. Your domain moves over when you are ready. The research step is why the result is a build for that business. It is not a template with the business name dropped into someone else's layout.
                </p>
                <h3 className="font-heading font-bold text-xl text-foreground pt-2">Plans pages, copy, photos, and structure</h3>
                <p>
                  After the research, the AI plans the site as one piece: which pages exist, what they say, which photos they use, and how the structure is organized. A local site needs a page for the work you actually do and a clear way for a customer to reach you. Your real business photos are used where you have them. Where a photo is missing, the gap is filled with natural AI imagery that matches the trade. The plan does not use stock photos of models in hard hats.
                </p>
                <p>
                  The structure that plan produces is the local-SEO-correct set: consistent name, address, and phone, JSON-LD a search engine can read, hours that match how you actually open, and dedicated pages for services and for the towns you serve. The AI writes that content. You are not handed an empty theme to fill in over a weekend.
                </p>
                <h3 className="font-heading font-bold text-xl text-foreground pt-2">Builds the site</h3>
                <p>
                  The build is that plan, produced. The AI writes the content and assembles the pages in minutes, not weeks. Lead capture is part of the build, so a form on the site can send a lead to you the moment someone submits it. Hosting, SSL, and the domain connection are not a separate project you wire up before you can look at the pages. What you receive is a finished preview, which is why the next step is a link on your phone.
                </p>
                <h3 className="font-heading font-bold text-xl text-foreground pt-2">Texts you a live preview link</h3>
                <p>
                  While the AI works, progress is texted and emailed to you. When the site is ready, you get a live preview link. You open it and look at the whole website. You do not pay to see it. There is no card required for the preview. The pricing page states the rule directly: the AI builds your full website for free and texts you the live preview link. You only pay when you claim it and put it live on your domain.
                </p>
                <h3 className="font-heading font-bold text-xl text-foreground pt-2">Claim it and go live on your domain from $99/mo</h3>
                <p>
                  Claiming the site is when a plan starts. The domain is connected and the site is put live, with hosting and SSL handled. Your portal opens. From the portal you edit by chat, and leads from your forms are delivered instantly. Plans are monthly and start at $99/mo. There is no contract and no setup fee. The $149 and $199 plans are the same website plus items labeled Soon, listed in the plans section below. Soon means on the roadmap and not yet automated in the portal.
                </p>
                <h3 className="font-heading font-bold text-xl text-foreground pt-2">Edit by chat</h3>
                <p>
                  After the site is live, a change is a conversation in the portal. Sign in from your phone or computer, click the part you want to change, and describe it in plain words, the way you would text a person. The AI makes the change. Every edit is saved as a version, so you can roll back to an earlier version if the wording is wrong. You do not need a technical skill. If you can send a text message, you can update the site. That tool is the{" "}
                  <Link to="/ai-website-editor/" className="underline hover:text-primary">AI website editor</Link>.
                </p>
              </div>
            </div>
          </section>

          <section className="py-16 lg:py-24 bg-card/30">
            <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
              <h2 className="font-heading font-black text-2xl md:text-3xl lg:text-4xl text-foreground mb-4">
                What's live today and what's coming
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Some of what the plans name is live in the portal today, and some of it is labeled Soon. Soon means those features are on the roadmap and not yet automated in the portal. They are labeled so you can see what is live before you choose a plan. The two lists below are the same Live and Soon lists published on the AI website editor page.
                </p>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="rounded-2xl border border-border/50 bg-background/50 p-6">
                    <h3 className="font-heading font-bold text-lg text-foreground mb-4">Live</h3>
                    <ul className="space-y-3">
                      {LIVE_TODAY.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-2xl border border-border/50 bg-background/50 p-6">
                    <h3 className="font-heading font-bold text-lg text-foreground mb-4">Soon</h3>
                    <ul className="space-y-3">
                      {COMING_SOON.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <p>
                  The chat editor is live: you click, say the change, and the edit is versioned and revertable. SMS updates are live, covering build progress, your live link, and every lead by text. Hosting, domain, and SSL are live. Lead capture with instant delivery is live. Rankings in your portal, task requests such as adding a page for spring specials, Google Business Profile auto-optimization, and review generation are Soon. Choosing a higher plan does not turn a Soon item on early. On the $199 plan, the dedicated business phone number and branded email are Soon as well.
                </p>
              </div>
            </div>
          </section>

          <section className="py-16 lg:py-24">
            <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
              <h2 className="font-heading font-black text-2xl md:text-3xl lg:text-4xl text-foreground mb-4">
                AI website builder vs. hiring a web designer vs. a DIY builder
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  A local business usually gets a website in one of three ways: this platform, hiring a web designer, or assembling the pages in a DIY builder. The comparison covers time to a first draft, who writes the copy, how a later edit happens, and hosting and SSL.
                </p>
                <div className="overflow-x-auto rounded-2xl border border-border/50">
                  <table className="w-full min-w-[640px] text-left text-sm">
                    <caption className="sr-only">
                      Qualitative comparison of this AI website builder, hiring a web designer, and a DIY builder
                    </caption>
                    <thead className="bg-card/50 text-foreground">
                      <tr>
                        <th scope="col" className="p-4 font-heading font-bold"> </th>
                        <th scope="col" className="p-4 font-heading font-bold">This platform</th>
                        <th scope="col" className="p-4 font-heading font-bold">Hiring a web designer</th>
                        <th scope="col" className="p-4 font-heading font-bold">A DIY builder</th>
                      </tr>
                    </thead>
                    <tbody>
                      {COMPARE_ROWS.map((row) => (
                        <tr key={row.topic} className="border-t border-border/50 align-top">
                          <th scope="row" className="p-4 font-heading font-bold text-foreground">{row.topic}</th>
                          <td className="p-4">{row.ai}</td>
                          <td className="p-4">{row.designer}</td>
                          <td className="p-4">{row.diy}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p>
                  On this platform the first draft is the preview the AI texts you, the copy is written during the build, a later edit is a chat message you can revert, and hosting, SSL, and the domain connection are part of the monthly plan.                   A designer project has a different rhythm: you wait on the project for a first draft, and a later change is an email you wait on. A DIY builder leaves the writing, the editing, and the domain setup with you. The older way is emailing a web person and waiting, paying per change or waiting on a batch, or learning a page builder.
                </p>
                <p>
                  What you own does not depend on which column you compare. On this platform your business, your content, your photos, and your domain are yours. If you leave, your domain and your content go with you. There is no contract and no setup fee. The plan is monthly, and it starts when you claim the site, not when you ask to see it.
                </p>
              </div>
            </div>
          </section>

          <section className="py-16 lg:py-24 bg-card/30">
            <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
              <h2 className="font-heading font-black text-2xl md:text-3xl lg:text-4xl text-foreground mb-4">
                Built for your trade and town
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Every plan includes a complete website researched, written, and built by AI for your trade and your town. The research step reads the trade. The plan step turns that into service pages and a way for a customer in that town to reach you.
                </p>
                <p>
                  Trades already have their own pages on this site when the work is specific enough to spell out. Shops that repair commercial trucks can read{" "}
                  <Link to="/websites-for/truck-repair/" className="underline hover:text-primary">truck repair shop websites</Link>
                  . That page describes the service pages a diesel shop needs, the kind of chat edit a shop sends after launch, and the same $99/mo plan, with the same free preview, the same ownership of the domain and the content, and the same rule that you see the site before you pay.
                </p>
                <p>
                  Towns are the other half of the same build. Where a town has its own page, that page is the place that talks about businesses there. The town page for{" "}
                  <Link to="/locations/romeoville-il/" className="underline hover:text-primary">Romeoville, IL</Link>
                  {" "}is one of those pages. It sits next to the trade pages so a business can see both the work and the place.
                </p>
                <p>
                  Finished sites, rather than a description of one, are on the examples page. Open{" "}
                  <Link to="/examples/" className="underline hover:text-primary">real client sites</Link>
                  {" "}when you want to see a business already running on the platform. The examples page is where those sites are shown.
                </p>
                <p>
                  The ownership rule is the same for every trade and every town. You own your content and your domain. Your photos stay yours. If you ever leave, your domain and your content go with you. Hosting and SSL stay handled while you are on a plan. Edits stay in the portal, versioned, so a change to hours, a service, or a town you serve is a sentence rather than a new project.
                </p>
              </div>
            </div>
          </section>

          <section className="py-16 lg:py-24">
            <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
              <h2 className="font-heading font-black text-2xl md:text-3xl lg:text-4xl text-foreground mb-4">
                Change anything after launch by chat
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Launch is not the last time the site can change. Hours change, a service gets added, a holiday closes the shop, a photo of a new truck replaces the one at the top of the page. After the site is on your domain, those edits happen in the{" "}
                  <Link to="/ai-website-editor/" className="underline hover:text-primary">AI website editor</Link>
                  . It is included from $99/mo. You do not email a web person and wait for the change, and you do not have to relearn a page builder the next time something on the site is out of date.
                </p>
                <p>
                  Editing by chat has four steps. Open your portal and sign in from your phone or computer. Your live site is right there. Click the part you want to change and describe it in plain words, like you would text a person. The AI makes the change on the site, and every edit is saved as a version. If you do not like it, roll back to any earlier version.
                </p>
                <p>
                  The requests published on the editor page are ordinary operating changes, not a redesign project. Change the hours to 7 to 5 and add Saturday mornings. Add trailer repair to the services list. Put a banner on the homepage that the business is closed Monday for the holiday. Replace the top photo with a picture of the new truck. Add Bolingbrook to the areas served. You type the sentence. The AI makes the edit. If the wording is wrong, you revert that version and the earlier page is back.
                </p>
                <p>
                  The editor does not yet do everything the roadmap names. Rankings in your portal, task requests such as adding a page for spring specials, Google Business Profile auto-optimization, and review generation are labeled Soon. They are on the roadmap and are not automated today. A chat edit to hours, a service, a banner, a photo, or a town you serve is the tool that is live. Nothing in the portal has to be learned as software. If you can send a text message, you can update the website, because the change is described in plain words.
                </p>
              </div>
            </div>
          </section>

          <section className="py-16 lg:py-24 bg-card/30">
            <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
              <h2 className="font-heading font-black text-2xl md:text-3xl lg:text-4xl text-foreground mb-4">
                Plans and what you own
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Three monthly plans are published, and the lines below match the pricing page, including every Soon label. The preview build is free on all three. You see the whole site before you pay anything. You pay only when you claim it and go live on your domain. There are no contracts and no setup fees. The full list, with the same Soon labels, is on the{" "}
                  <Link to="/pricing/" className="underline hover:text-primary">pricing</Link> page.
                </p>
                <div className="grid gap-4 md:grid-cols-3">
                  {PLANS.map((plan) => (
                    <div key={plan.price} className="flex flex-col rounded-2xl border border-border/50 bg-background/50 p-6">
                      <h3 className="font-heading font-bold text-lg text-foreground">{plan.name}</h3>
                      <p className="mt-2 text-foreground">
                        <span className="font-heading font-black text-3xl">{plan.price}</span>
                        <span className="text-sm">/mo</span>
                      </p>
                      <p className="mt-2 text-sm">{plan.tagline}</p>
                      <ul className="mt-4 space-y-2 text-sm">
                        {plan.features.map((feature) => (
                          <li key={feature.text} className="flex items-start justify-between gap-3">
                            <span>{feature.text}</span>
                            {feature.soon ? (
                              <span className="shrink-0 rounded-full border border-border px-2 py-0.5 text-[10px] uppercase tracking-wider text-foreground">Soon</span>
                            ) : null}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <p>
                  The $99/mo Website plan is your AI-built website, live on your domain. It includes hosting, SSL, and security handled; editing anything by chat, with each change versioned and revertable; lead capture with instant delivery; and your portal, with everything in one place. Those items are live. Nothing on the $99 plan is marked Soon.
                </p>
                <p>
                  The $149/mo Website + GBP plan includes everything in $99. It adds automatic Google Business Profile optimization, labeled Soon, and keeping your Google Business Profile accurate, active, and ranking, also labeled Soon. Both of those are on the roadmap and are not automated in the portal yet. The website, the chat editor, hosting, SSL, and lead delivery on this plan are the same live pieces as the $99 plan.
                </p>
                <p>
                  The $199/mo Website + GBP + Reviews plan includes everything in $149. It adds a review generator that grows your reputation, labeled Soon, a dedicated business phone number, labeled Soon, and branded email for your business, labeled Soon. The pricing page calls out the same point: on the $199 plan, the dedicated business phone number and branded email are Soon. Review generation is the same Soon item listed on the editor page.
                </p>
                <p>
                  What you own is not a higher tier. You own your content and your domain on every plan. Your business, your content, your photos, and your domain are yours. If you ever leave, your domain and your content go with you. After you claim the site, the domain is connected, the site goes live, and hosting and SSL are handled. The portal is where edits and instant lead delivery live from that point. There is no setup fee and no contract. Plans are monthly, starting at $99/mo, and the preview is free.
                </p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 lg:py-24">
            <div className="container mx-auto px-4 lg:px-8 max-w-3xl text-center">
              <h2 className="font-heading font-black text-2xl md:text-3xl lg:text-4xl text-foreground mb-6">
                See Your Website Before You Pay A Cent
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Take the free website quiz. The AI builds your site and texts you the live preview link. Going live on your domain starts at $99/mo — $149/mo adds Google Business Profile optimization, $199/mo adds a review generator with a dedicated business phone and branded email.
              </p>
              <Button asChild variant="hero" size="xl" className="group">
                <a href="/#free-website">
                  Get my free website
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <p className="text-muted-foreground text-sm mt-4">
                Free build • Live preview by text • Already a member? <a href={SIGN_IN_URL} className="underline hover:text-primary">Sign in</a>
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

export default Websites;
