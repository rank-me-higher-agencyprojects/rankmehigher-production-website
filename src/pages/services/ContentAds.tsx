import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  Star,
  Megaphone,
  Video,
  Target,
  Users,
  TrendingUp,
  Calendar,
  ChevronDown,
  Phone,
  Zap,
  Play,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const SIGN_IN_URL = "https://websites.rankmehigher.com";

const faqItems = [
  {
    q: "Why does my website matter for ads?",
    a: "Because every ad click lands somewhere. If it lands on a slow, generic page, you pay for clicks that bounce. Every website the AI builds is fast, mobile-first, and built to convert — with lead capture that texts you the inquiry in seconds. Fix the landing page first and every ad dollar works harder.",
  },
  {
    q: "Do you run ad campaigns?",
    a: "We run and have run campaigns for businesses on the platform — Meta and Google — always landing on their platform-built sites. Ads are a supporting layer, not the core product: the website and its local SEO come first, then ads amplify what already converts.",
  },
  {
    q: "Should I start with ads or with the website?",
    a: "The website. It's free to see: the AI builds it in minutes and texts you the preview. Once your site is live and capturing leads, ads become a volume dial you can turn up — instead of a leaky bucket you pour money into.",
  },
  {
    q: "What content does the AI use on my pages?",
    a: "Your real business photos wherever you have them, filled out with natural AI imagery that matches your trade. Pages get honest copy about your actual services and area — the kind of content that converts ad clicks from real local customers.",
  },
  {
    q: "How much does this cost?",
    a: "The website build is free — you only pay from $99/mo when you go live on your domain. Ad campaigns are scoped separately for platform businesses, with ad spend going straight to the ad platform. Start with the free website and go from there.",
  },
];

const ContentAds = () => {
  return (
    <>
      <Helmet>
        <title>Content & Ads That Land On Pages Built To Convert</title>
        <meta
          name="description"
          content="Your website is the asset every ad clicks to. The AI builds pages that convert ad traffic — real photos, fast load, instant lead capture. Ads amplify it."
        />
        <meta property="og:title" content="Content & Ads That Land On Pages Built To Convert" />
        <meta property="og:description" content="Your website is the asset every ad clicks to. The AI builds pages that convert ad traffic; ads amplify what already works." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://rankmehigher.com/services/content-ads/" />
        <meta property="og:site_name" content="Rank Me Higher" />
        <meta property="og:image" content="https://rankmehigher.com/assets/logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Content & Ads | Rank Me Higher" />
        <meta name="twitter:description" content="Ads only work when the page converts. The AI builds the page; ads amplify it." />
        <link rel="canonical" href="https://rankmehigher.com/services/content-ads/" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Content & Ads",
          "provider": { "@type": "Organization", "name": "Rank Me Higher", "url": "https://rankmehigher.com" },
          "description": "AI-built landing pages that convert ad traffic, plus ad campaigns run for businesses on the platform. The website is the asset; ads amplify it.",
          "url": "https://rankmehigher.com/services/content-ads/",
          "areaServed": "United States",
          "serviceType": "Content Marketing & Advertising"
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqItems.map(item => ({
            "@type": "Question",
            "name": item.q,
            "acceptedAnswer": { "@type": "Answer", "text": item.a }
          }))
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://rankmehigher.com/" },
            { "@type": "ListItem", "position": 2, "name": "Content & Ads", "item": "https://rankmehigher.com/services/content-ads/" }
          ]
        })}</script>
      </Helmet>

      <main className="min-h-screen bg-background relative overflow-hidden">
        {/* Enhanced Ambient Light Overlays — exact copy from Index.tsx */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute top-1/4 left-1/4 w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-red-600/5 rounded-full blur-3xl animate-float-delayed" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary/5 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10">
          <Navbar />

          {/* ─── HERO — DESKTOP ─── */}
          <section className="hidden lg:flex min-h-[calc(100vh-80px)] items-center pt-28 pb-8">
            <div className="container mx-auto px-8 max-w-7xl">
              <div className="grid lg:grid-cols-2 gap-12 items-center">

                {/* LEFT — Copy */}
                <div className="space-y-5 text-left">
                  {/* Stars + tagline */}
                  <div className="flex items-center gap-2 animate-fade-in">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground font-orbitron">
                      <span className="text-foreground font-bold">40+ local business sites</span> run on the <span className="text-primary font-bold">platform</span>
                    </span>
                  </div>

                  {/* H1 + description */}
                  <div className="space-y-4">
                    <h1 className="text-4xl xl:text-5xl 2xl:text-6xl font-black leading-[1.1] font-orbitron tracking-tight">
                      <span className="text-foreground">Ads Only Work When</span>
                      <br />
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-red-500 to-primary animate-gradient-x">
                        The Page Converts
                      </span>
                      <br />
                      <span className="text-foreground text-3xl xl:text-4xl 2xl:text-5xl">We Build That Page.</span>
                    </h1>
                    <p className="text-base xl:text-lg text-muted-foreground max-w-xl leading-relaxed">
                      Your website is the asset every ad clicks to. The AI builds <strong>fast, honest pages</strong> with <strong>real business photos</strong> and <strong>instant lead capture</strong> — then ads amplify what already converts. We run campaigns for businesses on the platform.
                    </p>
                  </div>

                  {/* Glassy info card — exact structure from homepage */}
                  <div className="space-y-3">
                    <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/5 backdrop-blur-md border border-white/10">
                      <CheckCircle2 className="w-5 h-5 text-green-400" />
                      <span className="text-white font-bold text-sm font-orbitron">
                        Free website build first. Live preview texted to you in minutes.
                      </span>
                    </div>
                    <div className="text-sm text-muted-foreground pl-2">
                      <div className="flex items-start gap-2">
                        <span className="text-primary font-bold shrink-0">•</span>
                        <span><strong className="text-foreground">From $99/mo to go live.</strong> Hosting + domain + chat edits + lead capture • Ads scoped separately for platform businesses • No long-term contracts</span>
                      </div>
                    </div>
                  </div>

                  {/* Two CTA buttons — exact structure from homepage */}
                  <div className="flex flex-row gap-4">
                    <a
                      href="/#free-website"
                      className="group relative px-7 py-4 rounded-xl bg-red-500/10 backdrop-blur-md border border-red-500/30 text-white font-bold text-base shadow-lg hover:shadow-2xl hover:shadow-red-500/30 hover:bg-red-500/20 hover:border-red-500/50 hover:scale-[1.02] transition-all duration-300 font-orbitron overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-red-500/0 via-red-500/10 to-red-500/0 group-hover:from-red-500/10 group-hover:via-red-500/20 group-hover:to-red-500/10 transition-all duration-500" />
                      <div className="relative flex items-center justify-center gap-2">
                        <Megaphone className="w-5 h-5 text-red-400" />
                        <span>Get my free website</span>
                      </div>
                    </a>
                    <a
                      href={SIGN_IN_URL}
                      className="group relative px-7 py-4 rounded-xl bg-white/5 backdrop-blur-md border border-white/20 text-white font-bold text-base hover:bg-white/10 hover:border-white/30 hover:shadow-lg hover:shadow-white/10 hover:scale-[1.02] transition-all duration-300 font-orbitron overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 group-hover:from-white/5 group-hover:via-white/10 group-hover:to-white/5 transition-all duration-500" />
                      <span className="relative flex items-center justify-center gap-2">
                        Sign in
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </a>
                  </div>

                  {/* Feature pills — exact structure from homepage */}
                  <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-border/40">
                    {['Pages Built To Convert', 'Real Photos + AI Imagery', 'Instant Lead Capture', 'Ads That Amplify'].map((item) => (
                      <div key={item} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-500/5 border border-red-500/20">
                        <CheckCircle2 className="w-4 h-4 text-red-400" />
                        <span className="text-xs text-muted-foreground font-orbitron">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* RIGHT — Visual element + stat cards */}
                <div className="relative space-y-4">
                  {/* Video play mockup — same border/glow treatment as homepage screenshot */}
                  <div className="relative rounded-2xl overflow-hidden border-2 border-primary/30 shadow-2xl shadow-primary/20 group">
                    <div className="absolute -inset-2 bg-gradient-to-br from-primary/40 to-red-600/40 rounded-2xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity" />
                    <div className="absolute -inset-1 bg-gradient-to-br from-primary/30 to-red-600/30 rounded-2xl blur-lg opacity-60" />
                    <div className="relative z-10 aspect-video bg-black/80 flex items-center justify-center">
                      <div className="text-center">
                        <button className="group/play relative">
                          <div className="absolute inset-0 bg-primary rounded-full blur-xl opacity-50 group-hover/play:opacity-80 transition-opacity" />
                          <div className="relative w-20 h-20 lg:w-24 lg:h-24 rounded-full bg-gradient-to-br from-primary to-red-600 flex items-center justify-center shadow-xl group-hover/play:scale-110 transition-transform">
                            <Play className="w-8 h-8 lg:w-10 lg:h-10 text-white ml-1" fill="white" />
                          </div>
                        </button>
                        <p className="mt-4 text-white/80 text-sm lg:text-base font-medium font-orbitron">
                          Watch: From Ad Click To Captured Lead
                        </p>
                        <p className="text-white/40 text-xs mt-1">Real sites. Real local businesses.</p>
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent rounded-b-2xl">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-red-500/20 border border-red-500/30 flex items-center justify-center">
                          <Video className="w-4 h-4 text-red-400" />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-white font-orbitron">Pages + Ads Together</p>
                          <p className="text-[11px] text-white/60">The site converts, the ads amplify</p>
                        </div>
                        <span className="ml-auto px-2.5 py-1 rounded-full bg-green-500/20 border border-green-500/30 text-[10px] font-bold text-green-400">LIVE</span>
                      </div>
                    </div>
                  </div>

                  {/* Three stat cards — exact structure from homepage */}
                  <div className="grid grid-cols-3 gap-3">
                    <div className="p-4 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 text-center">
                      <div className="text-2xl font-bold text-green-400 font-orbitron">40+</div>
                      <div className="text-xs text-muted-foreground">Live Business Sites</div>
                    </div>
                    <div className="p-4 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 text-center">
                      <div className="text-2xl font-bold text-primary font-orbitron">Minutes</div>
                      <div className="text-xs text-muted-foreground">To A Built Website</div>
                    </div>
                    <div className="p-4 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 text-center">
                      <div className="text-2xl font-bold text-green-400 font-orbitron">$0</div>
                      <div className="text-xs text-muted-foreground">To See Your Site</div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* ─── HERO — MOBILE ─── */}
          <section className="lg:hidden pt-20 pb-5 px-4">
            {/* Stars */}
            <div className="flex items-center justify-center gap-2 mb-[18px]">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-sm text-muted-foreground font-orbitron">
                <span className="text-foreground font-bold">40+ sites</span> on the <span className="text-primary font-bold">platform</span>
              </span>
            </div>

            {/* Headline */}
            <p className="text-2xl sm:text-3xl font-black leading-tight font-orbitron mb-[14px] text-center">
              <span className="text-foreground">Ads Only Work When </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-red-500">The Page Converts</span>
              <br />
              <span className="text-foreground text-xl sm:text-2xl">We Build That Page.</span>
            </p>

            {/* Description */}
            <p className="text-sm text-muted-foreground leading-relaxed mb-5 text-center">
              Your website is the asset every ad clicks to. The AI builds <strong>fast, honest pages</strong> with <strong>real photos</strong> and <strong>instant lead capture</strong> — then ads amplify what already converts.
            </p>

            {/* Info card */}
            <div className="space-y-2 mb-5">
              <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10">
                <CheckCircle2 className="w-4 h-4 text-green-400" />
                <span className="text-white font-bold text-xs font-orbitron">
                  Free website build first. Live preview texted to you in minutes.
                </span>
              </div>
              <div className="text-xs text-muted-foreground pl-2">
                <div className="flex items-start gap-2">
                  <span className="text-primary font-bold shrink-0">•</span>
                  <span><strong className="text-foreground">From $99/mo to go live.</strong> Hosting + chat edits + lead capture • Ads scoped separately • No long-term contracts</span>
                </div>
              </div>
            </div>

            {/* Video mockup */}
            <div className="relative rounded-xl overflow-hidden border-2 border-primary/30 shadow-xl shadow-primary/20 mb-4 group">
              <div className="absolute -inset-1 bg-gradient-to-br from-primary/30 to-red-600/30 rounded-xl blur-md opacity-50" />
              <div className="relative z-10 aspect-video bg-black/80 flex items-center justify-center">
                <div className="text-center">
                  <button className="group/play relative">
                    <div className="absolute inset-0 bg-primary rounded-full blur-xl opacity-50 group-hover/play:opacity-80 transition-opacity" />
                    <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-primary to-red-600 flex items-center justify-center shadow-xl">
                      <Play className="w-7 h-7 text-white ml-1" fill="white" />
                    </div>
                  </button>
                  <p className="mt-3 text-white/80 text-xs font-orbitron">Watch: From Ad Click To Captured Lead</p>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 via-black/40 to-transparent rounded-b-xl">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-red-500/20 border border-red-500/30 flex items-center justify-center">
                    <Video className="w-3.5 h-3.5 text-red-400" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white font-orbitron">Pages + Ads Together</p>
                    <p className="text-[10px] text-white/60">The site converts, the ads amplify</p>
                  </div>
                  <span className="ml-auto px-2 py-0.5 rounded-full bg-green-500/20 border border-green-500/30 text-[9px] font-bold text-green-400">LIVE</span>
                </div>
              </div>
            </div>

            {/* CTA Buttons — mobile */}
            <div className="flex flex-col gap-[10px] mb-3">
              <a
                href="/#free-website"
                className="group w-full px-5 py-[14px] rounded-xl bg-red-500/10 backdrop-blur-md border-2 border-red-500/40 text-white font-bold text-sm shadow-lg shadow-red-500/20 hover:shadow-red-500/30 hover:bg-red-500/20 hover:border-red-500/50 active:scale-[0.98] transition-all duration-300 font-orbitron flex items-center justify-center gap-2 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/0 via-red-500/10 to-red-500/0" />
                <Megaphone className="w-4 h-4 text-red-400 relative z-10" />
                <span className="relative z-10">Get my free website</span>
              </a>
              <a
                href={SIGN_IN_URL}
                className="group w-full px-5 py-[14px] rounded-xl bg-white/5 backdrop-blur-md border-2 border-white/20 text-white font-bold text-sm hover:bg-white/10 hover:border-white/30 hover:shadow-lg hover:shadow-white/10 active:scale-[0.98] transition-all duration-300 font-orbitron flex items-center justify-center gap-2 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 group-hover:from-white/5 group-hover:via-white/10 group-hover:to-white/5 transition-all duration-500" />
                <span className="relative z-10 flex items-center gap-2">
                  Sign in
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
            </div>

            {/* Trust badge */}
            <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
              <CheckCircle2 className="w-3.5 h-3.5 text-green-400" />
              <span className="font-orbitron">Running 40+ real local business websites</span>
            </div>
          </section>

          {/* ─── WHAT WE DO SECTION ─── */}
          <section className="py-4 lg:py-6 relative overflow-hidden">
            <div className="container mx-auto px-4 lg:px-8 max-w-6xl relative z-10">
              <div className="text-center mb-6">
                <h2 className="font-orbitron font-black text-3xl lg:text-4xl mb-3">
                  <span className="text-foreground">The Asset First, </span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-red-500">Then The Ads</span>
                </h2>
                <p className="text-muted-foreground text-sm lg:text-base max-w-2xl mx-auto">
                  Every piece works because the page underneath it converts.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { icon: Video, title: "Real Photos, Natural Imagery", desc: "The AI uses your real business photos and fills gaps with natural AI imagery that matches your trade. No generic stock footage." },
                  { icon: Target, title: "Pages Built To Convert", desc: "Fast, mobile-compact pages with clear offers and honest copy — the kind of landing page that turns an ad click into a lead." },
                  { icon: Megaphone, title: "Campaigns For Platform Businesses", desc: "We run and have run Meta and Google campaigns for businesses on the platform, always landing on their platform-built sites." },
                  { icon: Users, title: "Instant Lead Delivery", desc: "Every lead an ad produces is texted and emailed to you in seconds, and logged in your portal. No lead dies in an inbox." },
                  { icon: TrendingUp, title: "Local SEO Underneath", desc: "The same pages that catch ad clicks also rank: correct NAP, JSON-LD schema, city and service pages, built in from day one." },
                  { icon: Calendar, title: "Edit By Chat, Anytime", desc: "New offer? Seasonal promo? Chat with the AI and your page changes in minutes — versioned and revertable." },
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 group"
                  >
                    <div className="rounded-xl overflow-hidden bg-white/5 border border-white/10 hover:border-primary/40 transition-all duration-300 shadow-lg hover:shadow-primary/20 p-5 h-full">
                      <div className="w-10 h-10 rounded-xl bg-red-500/15 border border-red-500/30 flex items-center justify-center mb-3">
                        <feature.icon className="w-5 h-5 text-red-400" />
                      </div>
                      <h3 className="font-orbitron font-bold text-sm text-foreground mb-2">{feature.title}</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ─── AGENCY BANNER — exact structure from homepage ─── */}
          <section className="py-4 lg:py-6 relative overflow-hidden">
            <div className="container mx-auto px-4 lg:px-8 max-w-4xl relative z-10">
              <div className="relative p-5 lg:p-6 rounded-2xl bg-gradient-to-br from-cyan-500/5 to-cyan-500/0 border border-cyan-500/20 text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-3">
                  <Zap className="w-3 h-3 text-cyan-400" />
                  <span className="text-[10px] font-orbitron text-cyan-400 font-bold uppercase tracking-wider">One Platform, One Subscription</span>
                </div>
                <h3 className="font-orbitron font-black text-xl lg:text-2xl text-foreground mb-3">
                  The Website Is <span className="text-cyan-400">The Asset</span>
                </h3>
                <p className="text-sm text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-3">
                  Most agencies sell you ads first and ask questions later. We do it in order: the AI builds your <strong className="text-foreground">website</strong> — free, in minutes — with <strong className="text-foreground">local SEO</strong> and <strong className="text-foreground">lead capture</strong> built in. Ads come after, landing on a page that actually converts.
                </p>
                <p className="text-sm text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  Off-Tint, KleanAF, LTS Mechanical, ProTeamWorks, TruckClinic and <strong className="text-foreground">40+ other local businesses</strong> already run on the platform.
                </p>
              </div>
            </div>
          </section>

          {/* ─── PRICING SECTION — exact structure from homepage ─── */}
          <section className="py-4 lg:py-6 relative overflow-hidden">
            <div className="container mx-auto px-4 lg:px-8 max-w-5xl relative z-10">
              <div className="text-center mb-6">
                <h2 className="text-3xl lg:text-5xl font-black leading-tight font-orbitron mb-3">
                  <span className="text-foreground">Simple, </span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-red-500">Transparent Pricing</span>
                </h2>
                <p className="text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
                  The website comes first — and seeing it costs nothing.
                </p>
              </div>

              <div className="relative p-5 lg:p-6 rounded-2xl bg-gradient-to-br from-white/8 to-white/3 backdrop-blur-xl border border-white/15">
                <div className="grid lg:grid-cols-2 gap-6 items-center">
                  <div className="text-center lg:text-left space-y-5">
                    <div>
                      <div className="mb-1">
                        <span className="text-4xl lg:text-5xl font-black font-orbitron text-foreground">Free Build</span>
                      </div>
                      <p className="text-base text-muted-foreground mb-1">See your finished website before paying a cent</p>
                      <div className="flex items-baseline gap-2 justify-center lg:justify-start">
                        <span className="text-2xl lg:text-3xl font-black font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-primary to-red-500">$99–$199</span>
                        <span className="text-muted-foreground text-base">/mo to go live</span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">Ad spend for campaigns goes directly to the ad platform</p>
                      <p className="text-sm text-primary font-bold mt-3">Take the quiz — your site is built in minutes.</p>
                    </div>

                    <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-left">
                      <h4 className="font-orbitron font-bold text-xs text-foreground mb-2">What The Free Build Includes</h4>
                      <ul className="space-y-1.5">
                        {[
                          'AI research of your market and area',
                          'Complete local-SEO-correct website',
                          'Real business photos + natural AI imagery',
                          'Progress updates by SMS and email',
                          'Live preview link texted to you',
                          'No card required to see it',
                        ].map((item, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <CheckCircle2 className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="grid grid-cols-3 gap-2 text-center">
                      <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                        <span className="block text-xl font-black font-orbitron text-foreground">$99</span>
                        <span className="text-[10px] text-muted-foreground">Site + Hosting + Edits</span>
                      </div>
                      <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                        <span className="block text-xl font-black font-orbitron text-foreground">$149</span>
                        <span className="text-[10px] text-muted-foreground">+ GBP Optimization</span>
                      </div>
                      <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                        <span className="block text-xl font-black font-orbitron text-foreground">$199</span>
                        <span className="text-[10px] text-muted-foreground">+ Reviews + Biz Number</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30">
                      <h4 className="font-orbitron font-bold text-sm text-foreground mb-2">What Going Live Includes</h4>
                      <ul className="space-y-1.5">
                        {[
                          'Your custom domain, hosting & SSL handled',
                          'Edit anything by chatting with the AI',
                          'Every change versioned and revertable',
                          'Lead capture with instant SMS + email delivery',
                          'Your portal — site, leads, one login',
                          'Cancel anytime, no long-term contracts',
                        ].map((item, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <CheckCircle2 className="w-3.5 h-3.5 text-red-400 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                      <h4 className="font-orbitron font-bold text-xs text-foreground mb-1">Where Ads Fit In</h4>
                      <p className="text-xs text-muted-foreground leading-relaxed mb-2">
                        Once your site is live and converting, ads become a volume dial. We run campaigns for platform businesses on Meta and Google — landing on your platform-built pages, with every lead delivered to your phone in seconds. Campaigns are scoped per business.
                      </p>
                    </div>
                    <div className="p-3 rounded-xl bg-cyan-500/5 border border-cyan-500/20">
                      <h4 className="font-orbitron font-bold text-xs text-cyan-400 mb-1">Why This Order?</h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        An ad can double your traffic; it can't fix a page that doesn't convert. <strong className="text-foreground">The landing page is the difference</strong> between paying for clicks and paying for customers. Build the asset first — it's free to see.
                      </p>
                    </div>

                    <a
                      href="/#free-website"
                      className="group w-full px-6 py-3.5 rounded-xl bg-white/5 backdrop-blur-md border border-white/15 text-white font-bold text-sm shadow-lg hover:shadow-xl hover:shadow-red-500/20 hover:bg-white/10 hover:border-white/25 hover:scale-[1.01] transition-all duration-300 font-orbitron flex items-center justify-center gap-2 relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-red-500/0 via-red-500/5 to-red-500/0 group-hover:from-red-500/10 group-hover:via-red-500/15 group-hover:to-red-500/10 transition-all duration-500" />
                      <span className="relative z-10">Get my free website</span>
                      <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <p className="text-[11px] text-muted-foreground text-center">Free build. No credit card needed.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ─── HOW IT WORKS — exact structure from homepage ─── */}
          <section className="py-4 lg:py-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-500/[0.03] to-transparent" />
            <div className="container mx-auto px-4 lg:px-8 max-w-5xl relative z-10">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-5xl font-black leading-tight font-orbitron mb-4">
                  <span className="text-foreground">How It </span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-red-500">Works</span>
                </h2>
                <p className="text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
                  From quiz to a converting page — then ads on top. Here's the order.
                </p>
              </div>

              <div className="max-w-2xl mx-auto space-y-0">
                {[
                  {
                    step: '01',
                    title: 'The AI Builds Your Website — Free',
                    description: 'Take the quiz on the homepage. The AI researches your market, plans your site, and builds it in minutes — real photos, natural AI imagery, correct local SEO. You get the live preview by text.',
                    icon: Target,
                    color: 'red',
                  },
                  {
                    step: '02',
                    title: 'Go Live On Your Domain',
                    description: 'From $99/mo your site goes live with hosting, SSL, and your custom domain handled. Lead capture is on from minute one — every inquiry texted and emailed to you instantly.',
                    icon: Video,
                    color: 'red',
                  },
                  {
                    step: '03',
                    title: 'Tune The Page By Chatting',
                    description: 'Sharpen your offer, swap photos, add a seasonal promo — just tell the AI. Every edit is versioned and revertable, so the page that ads land on keeps getting better.',
                    icon: Megaphone,
                    color: 'red',
                  },
                  {
                    step: '04',
                    title: 'Add Ads When You Want Volume',
                    description: 'With a converting page underneath, campaigns are worth running. We run Meta and Google campaigns for platform businesses — every dollar lands on a page built to turn clicks into leads.',
                    icon: TrendingUp,
                    color: 'red',
                  },
                ].map((item, i) => (
                  <div key={i} className="relative flex gap-6 lg:gap-8">
                    <div className="flex flex-col items-center">
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 ${
                        item.color === 'cyan' ? 'bg-cyan-500/15 border border-cyan-500/30' :
                        'bg-red-500/15 border border-red-500/30'
                      }`}>
                        <item.icon className={`w-6 h-6 ${
                          item.color === 'cyan' ? 'text-cyan-400' : 'text-red-400'
                        }`} />
                      </div>
                      {i < 3 && (
                        <div className="w-px h-full min-h-[40px] bg-gradient-to-b from-white/20 to-transparent my-2" />
                      )}
                    </div>
                    <div className="pb-10">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs font-orbitron text-muted-foreground font-bold">STEP {item.step}</span>
                      </div>
                      <h3 className="font-orbitron font-bold text-lg lg:text-xl text-foreground mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center mt-8">
                <a
                  href="/#free-website"
                  className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 text-white font-bold text-sm hover:bg-primary/10 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 font-orbitron"
                >
                  <Calendar className="w-4 h-4 text-primary" />
                  Ready? Get my free website
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </section>

          {/* ─── FAQ — exact structure from homepage ─── */}
          <section className="py-4 lg:py-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/[0.02] to-transparent" />
            <div className="container mx-auto px-4 lg:px-8 max-w-3xl relative z-10">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-5xl font-black leading-tight font-orbitron mb-4">
                  <span className="text-foreground">Frequently Asked </span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-red-500">Questions</span>
                </h2>
              </div>

              <div className="space-y-3">
                {faqItems.map((faq, i) => (
                  <details key={i} className="group rounded-xl bg-white/5 border border-white/10 overflow-hidden">
                    <summary className="flex items-center justify-between p-4 lg:p-5 cursor-pointer list-none select-none hover:bg-white/5 transition-colors">
                      <span className="font-orbitron font-bold text-sm lg:text-base text-foreground pr-4">{faq.q}</span>
                      <ChevronDown className="w-5 h-5 text-muted-foreground shrink-0 transition-transform group-open:rotate-180" />
                    </summary>
                    <div className="px-4 lg:px-5 pb-4 lg:pb-5">
                      <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                    </div>
                  </details>
                ))}
              </div>

              <div className="text-center mt-8">
                <p className="text-muted-foreground text-sm mb-3">Still have questions?</p>
                <a
                  href="sms:+17735724686"
                  className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 text-white font-bold text-sm hover:bg-primary/10 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 font-orbitron"
                >
                  <Phone className="w-4 h-4 text-primary" />
                  Text Us: (773) 572-4686
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </section>

          {/* ─── FINAL CTA — exact structure from homepage ─── */}
          <section className="py-4 lg:py-6 relative overflow-hidden">
            <div className="container mx-auto px-4 lg:px-8 max-w-4xl relative z-10">
              <div className="relative p-8 lg:p-12 rounded-3xl bg-gradient-to-br from-red-500/15 via-red-600/10 to-red-500/15 border border-red-500/30 text-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/0 via-red-500/5 to-red-500/0" />
                <div className="relative z-10">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black font-orbitron mb-3 text-foreground">
                    Start With The Page. It's Free.
                  </h2>
                  <p className="text-base lg:text-lg text-muted-foreground max-w-xl mx-auto mb-6">
                    Before you spend another dollar on ads, see the website the AI builds for your business — in minutes, with the live preview texted to your phone.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                    <a
                      href="/#free-website"
                      className="group relative px-8 py-4 rounded-xl bg-red-500/20 backdrop-blur-md border-2 border-red-500/40 text-white font-bold text-base shadow-lg hover:shadow-2xl hover:shadow-red-500/30 hover:bg-red-500/30 hover:border-red-500/60 hover:scale-[1.02] transition-all duration-300 font-orbitron overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-red-500/0 via-red-500/10 to-red-500/0 group-hover:from-red-500/10 group-hover:via-red-500/20 group-hover:to-red-500/10 transition-all duration-500" />
                      <span className="relative flex items-center justify-center gap-2">
                        <Megaphone className="w-5 h-5 text-red-400" />
                        Get my free website
                      </span>
                    </a>
                    <Link
                      to="/services/websites/"
                      className="group px-8 py-4 rounded-xl bg-white/5 backdrop-blur-md border-2 border-white/20 text-white font-bold text-base hover:bg-white/10 hover:border-white/30 hover:shadow-lg hover:shadow-white/10 hover:scale-[1.02] transition-all duration-300 font-orbitron flex items-center justify-center gap-2"
                    >
                      See How The AI Builds
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>

                  <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
                    {['Free build, no card', 'Preview texted in minutes', 'From $99/mo to go live', 'Cancel anytime'].map((item) => (
                      <div key={item} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <CheckCircle2 className="w-3.5 h-3.5 text-green-400" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <Footer />
        </div>
      </main>
    </>
  );
};

export default ContentAds;
