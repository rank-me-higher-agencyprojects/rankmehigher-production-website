import { Helmet } from "react-helmet-async";
import { ArrowRight, CheckCircle2, ChevronDown, Globe, ListChecks, MessageCircle, MessageSquare, Search, Smartphone, Sparkles, Star, TrendingUp, Zap } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FuturisticWrapper from "@/components/ui/FuturisticWrapper";
import FreeWebsiteQuiz from "@/components/funnel/FreeWebsiteQuiz";

const PORTAL_URL = "https://websites.rankmehigher.com";

const scrollToQuiz = () => {
  document.getElementById("quiz")?.scrollIntoView({ behavior: "smooth", block: "center" });
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
    a: "The platform already runs 40+ live local business websites, so the AI knows exactly what a local site needs to rank on Google: the right structure, real service pages, correct local SEO. It researches your market, plans your site, writes the content, and builds it — in minutes, not weeks.",
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

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Free AI-Built Website for Your Local Business | Rank Me Higher</title>
        <meta
          name="description"
          content="Get a free website that dominates Google — built by AI in minutes. Answer 6 quick questions and the AI researches your market, builds your site, and texts you the live link. 40+ local businesses already run on Rank Me Higher."
        />
        <meta property="og:title" content="Free AI-Built Website for Your Local Business | Rank Me Higher" />
        <meta property="og:description" content="Get a free website that dominates Google — built by AI in minutes. The AI researches your market, builds your site, and texts you the live link." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://rankmehigher.com/" />
        <meta property="og:image" content="https://rankmehigher.com/assets/logo.png" />
        <meta property="og:site_name" content="Rank Me Higher" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Free AI-Built Website for Your Local Business | Rank Me Higher" />
        <meta name="twitter:description" content="Get a free website that dominates Google — built by AI in minutes. Answer 6 questions, get the live link by text." />
        <meta name="twitter:image" content="https://rankmehigher.com/assets/logo.png" />
        <link rel="canonical" href="https://rankmehigher.com/" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Rank Me Higher",
          "url": "https://rankmehigher.com",
          "logo": "https://rankmehigher.com/assets/logo.png",
          "description": "The AI-autonomous growth platform for local businesses. The AI researches your market, builds a local-SEO-correct website in minutes, texts you the live link, and you edit anything by chatting with it. One portal, one subscription.",
          "address": { "@type": "PostalAddress", "streetAddress": "1 N State St Ste 1515", "addressLocality": "Chicago", "addressRegion": "IL", "postalCode": "60602", "addressCountry": "US" },
          "telephone": "+17735724686",
          "sameAs": ["https://www.facebook.com/rankmehigherseo", "https://instagram.com/rankmehigherseo", "https://www.tiktok.com/@rankmehigher", "https://www.trustpilot.com/review/rankmehigher.com", "https://agencies.semrush.com/rank-me-higher/"],
          "foundingDate": "2015",
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
          "sameAs": ["https://www.facebook.com/rankmehigherseo", "https://instagram.com/rankmehigherseo", "https://www.tiktok.com/@rankmehigher", "https://www.trustpilot.com/review/rankmehigher.com", "https://agencies.semrush.com/rank-me-higher/"],
          "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5", "reviewCount": "54", "bestRating": "5", "worstRating": "1" }
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

      <main className="min-h-screen bg-background relative overflow-hidden">
        {/* Enhanced Ambient Light Overlays */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute top-1/4 left-1/4 w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-red-600/5 rounded-full blur-3xl animate-float-delayed" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary/5 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10">
          <Navbar onOpenLeadMagnet={scrollToQuiz} />

          {/* HERO SECTION */}
          {/* Desktop Layout */}
          <section className="hidden lg:flex min-h-[calc(100vh-80px)] items-center pt-28 pb-8">
            <div className="container mx-auto px-8 max-w-7xl">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* CONTENT SECTION - Desktop */}
                <div className="space-y-5 text-left">
                  <div className="flex items-center gap-2 animate-fade-in">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground font-orbitron">
                      <span className="text-foreground font-bold">40+ live websites</span> already run on this platform
                    </span>
                  </div>

                  <div className="space-y-4">
                    <h1 className="text-4xl xl:text-5xl 2xl:text-6xl font-black leading-[1.1] font-orbitron tracking-tight">
                      <span className="text-foreground">Get a FREE Website</span>
                      <br />
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-red-500 to-primary animate-gradient-x">
                        That Dominates Google
                      </span>
                      <br />
                      <span className="text-foreground text-3xl xl:text-4xl 2xl:text-5xl">Built by AI in Minutes.</span>
                    </h1>
                    <p className="text-base xl:text-lg text-muted-foreground max-w-xl leading-relaxed">
                      Answer 6 quick questions. Our AI <strong>researches your market</strong>, <strong>builds your site</strong>, and <strong>texts you the live link</strong> in minutes. Real business photos, correct local SEO, lead capture built in. See the whole thing before you pay a cent.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/5 backdrop-blur-md border border-white/10">
                      <CheckCircle2 className="w-5 h-5 text-green-400" />
                      <span className="text-white font-bold text-sm font-orbitron">
                        Free build. Live preview by text. Claim it when you love it.
                      </span>
                    </div>
                    <div className="text-sm text-muted-foreground pl-2">
                      <div className="flex items-start gap-2">
                        <span className="text-cyan-400 font-bold shrink-0">•</span>
                        <span>Going live on your domain starts at <strong className="text-foreground">$99/mo</strong> — hosting, chat edits, your domain, and your portal included.</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-row gap-4">
                    <button
                      onClick={scrollToQuiz}
                      className="group relative px-7 py-4 rounded-xl bg-red-500/10 backdrop-blur-md border border-red-500/30 text-white font-bold text-base shadow-lg hover:shadow-2xl hover:shadow-red-500/30 hover:bg-red-500/20 hover:border-red-500/50 hover:scale-[1.02] transition-all duration-300 font-orbitron overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-red-500/0 via-red-500/10 to-red-500/0 group-hover:from-red-500/10 group-hover:via-red-500/20 group-hover:to-red-500/10 transition-all duration-500" />
                      <div className="relative flex items-center justify-center gap-2">
                        <Globe className="w-5 h-5 text-red-400" />
                        <span>Get my free website</span>
                      </div>
                    </button>
                    <a
                      href={PORTAL_URL}
                      className="group relative px-7 py-4 rounded-xl bg-white/5 backdrop-blur-md border border-white/20 text-white font-bold text-base hover:bg-white/10 hover:border-white/30 hover:shadow-lg hover:shadow-white/10 hover:scale-[1.02] transition-all duration-300 font-orbitron overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 group-hover:from-white/5 group-hover:via-white/10 group-hover:to-white/5 transition-all duration-500" />
                      <span className="relative flex items-center justify-center gap-2">
                        Sign in
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </a>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-border/40">
                    {['Built in minutes', 'Real photos + AI imagery', 'Edit by chat', 'Leads texted to you'].map((item) => (
                      <div key={item} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-500/5 border border-red-500/20">
                        <CheckCircle2 className="w-4 h-4 text-red-400" />
                        <span className="text-xs text-muted-foreground font-orbitron">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* WEBSITE SHOWCASE - Desktop */}
                <div className="relative space-y-4">
                  <div className="relative rounded-2xl overflow-hidden border-2 border-primary/30 shadow-2xl shadow-primary/20 group">
                    <div className="absolute -inset-2 bg-gradient-to-br from-primary/40 to-red-600/40 rounded-2xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity" />
                    <div className="absolute -inset-1 bg-gradient-to-br from-primary/30 to-red-600/30 rounded-2xl blur-lg opacity-60" />
                    <div className="relative z-10">
                      <picture>
                        <source
                          srcSet="/off-tint-screenshot-400w.webp 400w, /off-tint-screenshot-800w.webp 800w, /off-tint-screenshot-1200w.webp 1200w, /off-tint-screenshot.webp 2994w"
                          sizes="(max-width: 768px) 100vw, 580px"
                          type="image/webp"
                        />
                        <img
                          src="/off-tint-screenshot.png"
                          alt="Off-Tint - local business website built on Rank Me Higher"
                          width={800}
                          height={600}
                          loading="eager"
                          fetchPriority="high"
                          className="w-full h-auto rounded-2xl"
                        />
                      </picture>
                      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent rounded-b-2xl">
                        <div className="flex items-center gap-3">
                          <img src="/off-tint-logo.webp" alt="Off-Tint logo" width={32} height={32} className="w-8 h-8 rounded-lg" />
                          <div>
                            <p className="text-sm font-bold text-white font-orbitron">Off-Tint</p>
                            <p className="text-[11px] text-white/60">PPF & Window Tinting · Lisle, IL</p>
                          </div>
                          <span className="ml-auto px-2.5 py-1 rounded-full bg-green-500/20 border border-green-500/30 text-[10px] font-bold text-green-400">LIVE</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    <div className="p-4 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 text-center">
                      <div className="text-2xl font-bold text-green-400 font-orbitron">$0</div>
                      <div className="text-xs text-muted-foreground">To See It Live</div>
                    </div>
                    <div className="p-4 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 text-center">
                      <div className="text-2xl font-bold text-cyan-400 font-orbitron">40+</div>
                      <div className="text-xs text-muted-foreground">Live Websites</div>
                    </div>
                    <div className="p-4 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 text-center">
                      <div className="text-2xl font-bold text-green-400 font-orbitron">Minutes</div>
                      <div className="text-xs text-muted-foreground">To Build Yours</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* MOBILE HERO */}
          <section className="lg:hidden pt-20 pb-5 px-4">
            {/* Rating & Trust Badge - Same Line */}
            <div className="flex items-center justify-center gap-2 mb-[18px]">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-sm text-muted-foreground font-orbitron">
                <span className="text-foreground font-bold">40+ live websites</span> run on this platform
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-2xl sm:text-3xl font-black leading-tight font-orbitron mb-[14px] text-center">
              <span className="text-foreground">Get a FREE Website </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-red-500">That Dominates Google</span>
              <br />
              <span className="text-foreground text-xl sm:text-2xl">Built by AI in Minutes.</span>
            </h1>

            {/* Description */}
            <p className="text-sm text-muted-foreground leading-relaxed mb-5 text-center">
              Answer 6 quick questions. Our AI <strong>researches your market</strong>, <strong>builds your site</strong>, and <strong>texts you the live link</strong> in minutes. Real photos, correct local SEO, lead capture built in. See it before you pay a cent.
            </p>

            {/* Pricing & Trust */}
            <div className="space-y-2 mb-5">
              <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10">
                <CheckCircle2 className="w-4 h-4 text-green-400" />
                <span className="text-white font-bold text-xs font-orbitron">
                  Free build. Live preview by text. Claim it when you love it.
                </span>
              </div>
              <div className="text-xs text-muted-foreground pl-2">
                <div className="flex items-start gap-2">
                  <span className="text-cyan-400 font-bold shrink-0">•</span>
                  <span>Going live on your domain starts at <strong className="text-foreground">$99/mo</strong> — hosting, chat edits, your domain, and your portal included.</span>
                </div>
              </div>
            </div>

            {/* Website Showcase */}
            <div className="relative rounded-xl overflow-hidden border-2 border-primary/30 shadow-xl shadow-primary/20 mb-5">
              <div className="absolute -inset-1 bg-gradient-to-br from-primary/30 to-red-600/30 rounded-xl blur-md opacity-50" />
                <div className="relative z-10">
                <picture>
                  <source
                    srcSet="/off-tint-screenshot-400w.webp 400w, /off-tint-screenshot-800w.webp 800w, /off-tint-screenshot.webp 2994w"
                    sizes="100vw"
                    type="image/webp"
                  />
                  <img
                    src="/off-tint-screenshot.png"
                    alt="Off-Tint - local business website built on Rank Me Higher"
                    width={800}
                    height={600}
                    loading="eager"
                    fetchPriority="high"
                    className="w-full h-auto rounded-xl"
                  />
                </picture>
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 via-black/40 to-transparent rounded-b-xl">
                  <div className="flex items-center gap-2.5">
                    <img src="/off-tint-logo.webp" alt="Off-Tint logo" width={28} height={28} className="w-7 h-7 rounded-lg" />
                    <div>
                      <p className="text-xs font-bold text-white font-orbitron">Off-Tint</p>
                      <p className="text-[10px] text-white/60">PPF & Window Tinting · Lisle, IL</p>
                    </div>
                    <span className="ml-auto px-2 py-0.5 rounded-full bg-green-500/20 border border-green-500/30 text-[9px] font-bold text-green-400">LIVE</span>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-[10px] mb-3">
              <button
                onClick={scrollToQuiz}
                className="group w-full px-5 py-[14px] rounded-xl bg-red-500/10 backdrop-blur-md border-2 border-red-500/40 text-white font-bold text-sm shadow-lg shadow-red-500/20 hover:shadow-red-500/30 hover:bg-red-500/20 hover:border-red-500/50 active:scale-[0.98] transition-all duration-300 font-orbitron flex items-center justify-center gap-2 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/0 via-red-500/10 to-red-500/0" />
                <Globe className="w-4 h-4 text-red-400 relative z-10" />
                <span className="relative z-10">Get my free website</span>
              </button>

              <a
                href={PORTAL_URL}
                className="group w-full px-5 py-[14px] rounded-xl bg-white/5 backdrop-blur-md border-2 border-white/20 text-white font-bold text-sm hover:bg-white/10 hover:border-white/30 hover:shadow-lg hover:shadow-white/10 active:scale-[0.98] transition-all duration-300 font-orbitron flex items-center justify-center gap-2 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 group-hover:from-white/5 group-hover:via-white/10 group-hover:to-white/5 transition-all duration-500" />
                <span className="relative z-10 flex items-center gap-2">
                  Sign in
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
            </div>

            {/* Trust Badge - Simple */}
            <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
              <CheckCircle2 className="w-3.5 h-3.5 text-green-400" />
              <span className="font-orbitron">Trusted by local businesses across America</span>
            </div>
          </section>

          {/* THE QUIZ */}
          <section id="quiz" className="py-8 lg:py-12 relative overflow-hidden scroll-mt-24">
            <div className="container mx-auto px-4 lg:px-8 max-w-2xl relative z-10">
              <div className="text-center mb-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/30 mb-4">
                  <Sparkles className="w-3.5 h-3.5 text-red-400" />
                  <span className="text-xs font-orbitron text-red-400 font-bold uppercase tracking-wider">Free — takes 60 seconds</span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-black leading-tight font-orbitron mb-3">
                  <span className="text-foreground">Claim Your </span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-red-500">Free Website</span>
                </h2>
                <p className="text-sm lg:text-base text-muted-foreground max-w-lg mx-auto">
                  6 questions. That's everything the AI needs to research your market and build your site. Your live link arrives by text.
                </p>
              </div>
              <FuturisticWrapper>
                <FreeWebsiteQuiz />
              </FuturisticWrapper>
            </div>
          </section>

          {/* PROOF WALL - PORTFOLIO TICKER */}
          <section className="pt-4 pb-2 lg:pt-6 lg:pb-4 relative overflow-hidden">
            <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
              <div className="text-center mb-6">
                <h2 className="font-orbitron font-black text-3xl lg:text-4xl mb-3">
                  <span className="text-foreground">These businesses already run on</span>{' '}
                  <span className="text-primary">Rank Me Higher</span>
                </h2>
                <p className="text-muted-foreground text-sm lg:text-base max-w-2xl mx-auto">
                  40+ live local business websites — researched, built, and run by the platform.
                </p>
              </div>
            </div>

            {/* Auto-scrolling portfolio ticker */}
            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
              <div className="overflow-hidden">
                <div className="flex gap-4 animate-scroll-left hover:[animation-play-state:paused]">
                  {[
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
                  ].map((item, i) => (
                    <div key={i} className="flex-shrink-0 w-[260px] md:w-[300px] group">
                      <div className="rounded-xl overflow-hidden bg-white/5 border border-white/10 hover:border-primary/40 transition-all duration-300 shadow-lg hover:shadow-primary/20">
                        <div className="relative overflow-hidden aspect-[16/9] bg-black">
                          <img
                            src={item.img.replace('.webp', '-600w.webp')}
                            srcSet={`${item.img.replace('.webp', '-400w.webp')} 400w, ${item.img.replace('.webp', '-600w.webp')} 600w`}
                            sizes="(max-width: 640px) 260px, 300px"
                            alt={`${item.name} - ${item.desc} - Custom website by Rank Me Higher`}
                            loading="lazy"
                            width={600}
                            height={338}
                            className="w-full h-full object-cover object-top block"
                          />
                        </div>
                        <div className="px-3 py-2.5 flex items-center justify-between">
                          <div>
                            <h4 className="font-orbitron font-bold text-xs text-foreground">{item.name}</h4>
                            <p className="text-[10px] text-muted-foreground">{item.desc}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </section>

          {/* HOW IT WORKS SECTION */}
          <section className="py-4 lg:py-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-500/[0.03] to-transparent" />
            <div className="container mx-auto px-4 lg:px-8 max-w-5xl relative z-10">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-5xl font-black leading-tight font-orbitron mb-4">
                  <span className="text-foreground">How It </span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-red-500">Works</span>
                </h2>
                <p className="text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
                  From 6 questions to a live website. Here's exactly what happens.
                </p>
              </div>

              <div className="max-w-2xl mx-auto space-y-0">
                {[
                  {
                    step: '01',
                    title: 'Answer 6 Quick Questions',
                    description: 'Your business name, what you do, and where you work. That\'s all the AI needs to get started — 60 seconds, no sales call.',
                    icon: ListChecks,
                    color: 'red',
                  },
                  {
                    step: '02',
                    title: 'The AI Researches & Plans',
                    description: 'It studies your market, your competitors, and what ranks in your city — then plans a local-SEO-correct website: the right pages, real business photos, natural AI imagery, and content written for your services.',
                    icon: Search,
                    color: 'red',
                  },
                  {
                    step: '03',
                    title: 'Built & Texted to You',
                    description: 'Minutes later your phone buzzes: "your website is live — here\'s the link." A complete, working site with lead capture built in. Look at every page. It\'s yours to judge, free.',
                    icon: Smartphone,
                    color: 'red',
                  },
                  {
                    step: '04',
                    title: 'Claim It & Go Live',
                    description: 'Love it? Claim it and we put it on your domain — hosting, SSL, everything handled, from $99/mo. Then edit anything by chatting with it in your portal, forever.',
                    icon: TrendingUp,
                    color: 'cyan',
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
                <button
                  onClick={scrollToQuiz}
                  className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 text-white font-bold text-sm hover:bg-primary/10 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 font-orbitron"
                >
                  <Globe className="w-4 h-4 text-primary" />
                  Start with the 6 questions
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </section>

          {/* PLATFORM SECTION */}
          <section className="py-4 lg:py-6 relative overflow-hidden">
            <div className="container mx-auto px-4 lg:px-8 max-w-6xl relative z-10">
              <div className="text-center mb-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-3">
                  <Zap className="w-3 h-3 text-cyan-400" />
                  <span className="text-[10px] font-orbitron text-cyan-400 font-bold uppercase tracking-wider">One Portal, One Subscription</span>
                </div>
                <h2 className="text-3xl lg:text-5xl font-black leading-tight font-orbitron mb-4">
                  <span className="text-foreground">Your Website </span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-red-500">Runs Itself</span>
                </h2>
                <p className="text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
                  Rank Me Higher is the AI-autonomous growth platform for local businesses. Everything lives in one portal — no agency, no tickets, no waiting.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 relative overflow-hidden">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-red-500/15 border border-red-500/30 flex items-center justify-center">
                      <MessageCircle className="w-5 h-5 text-red-400" />
                    </div>
                    <span className="px-2 py-0.5 rounded-full bg-green-500/15 border border-green-500/30 text-[10px] font-bold text-green-400 font-orbitron">LIVE</span>
                  </div>
                  <h3 className="font-orbitron font-bold text-lg text-foreground mb-2">Edit Anything by Chatting</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Click anything on your site, say the change — "make the phone number bigger", "add Saturday hours" — and it's done. Every edit is versioned and revertable. No developers, no waiting.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 relative overflow-hidden">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-red-500/15 border border-red-500/30 flex items-center justify-center">
                      <MessageSquare className="w-5 h-5 text-red-400" />
                    </div>
                    <span className="px-2 py-0.5 rounded-full bg-green-500/15 border border-green-500/30 text-[10px] font-bold text-green-400 font-orbitron">LIVE</span>
                  </div>
                  <h3 className="font-orbitron font-bold text-lg text-foreground mb-2">Updates Land in Your Texts</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    "Your website is being planned… built… here's the link." The platform keeps you posted by SMS and email — and when a lead comes in through your site, it's delivered to you instantly.
                  </p>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-500/5 to-cyan-500/0 border border-cyan-500/20">
                <div className="flex items-center gap-2 mb-4">
                  <TrendingUp className="w-4 h-4 text-cyan-400" />
                  <h3 className="font-orbitron font-bold text-sm text-cyan-400 uppercase tracking-wider">Where the platform is going</h3>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {[
                    { title: "Your rankings, one place", desc: "Watch where you stand on Google — right in your portal." },
                    { title: "Just ask for tasks", desc: "\"Add a page for spring specials.\" The AI does it." },
                    { title: "Google Business Profile", desc: "Automatic optimization of your GBP, hands-free." },
                    { title: "Review generation", desc: "Automated review requests that grow your reputation." },
                  ].map((item) => (
                    <div key={item.title} className="p-3 rounded-xl bg-white/5 border border-white/10">
                      <h4 className="font-orbitron font-bold text-xs text-foreground mb-1">{item.title}</h4>
                      <p className="text-[11px] text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* PRICING SECTION */}
          <section className="py-6 lg:py-10 relative overflow-hidden">
            <div className="container mx-auto px-4 lg:px-8 max-w-5xl relative z-10">
              <div className="text-center mb-8">
                <h2 className="text-3xl lg:text-5xl font-black leading-tight font-orbitron mb-3">
                  <span className="text-foreground">Simple, </span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-red-500">Transparent Pricing</span>
                </h2>
                <p className="text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
                  The build is free. Pay only when you claim your site and go live on your domain. No contracts, no setup fees.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-4 items-stretch">
                {/* $99 - highlighted */}
                <div className="relative flex flex-col p-6 rounded-2xl bg-red-500/5 border-2 border-red-500/40 shadow-lg shadow-red-500/10 order-first md:order-none">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-red-500/15 backdrop-blur-xl border border-red-500/40 text-red-400 text-[10px] font-orbitron font-bold uppercase tracking-wider whitespace-nowrap">
                    Start Here
                  </div>
                  <div className="mb-4 mt-2">
                    <span className="text-4xl font-black font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-primary to-red-500">$99</span>
                    <span className="text-lg font-bold font-orbitron text-muted-foreground">/mo</span>
                    <p className="font-orbitron font-bold text-sm text-foreground mt-2">Your Website</p>
                  </div>
                  <ul className="space-y-2 flex-1">
                    {[
                      'Your AI-built website, live on your domain',
                      'Hosting, SSL & security handled',
                      'Edit anything by chat — versioned & revertable',
                      'Lead capture with instant delivery',
                      'Your portal — everything in one place',
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={scrollToQuiz}
                    className="group mt-5 w-full px-5 py-3 rounded-xl bg-red-500/10 border-2 border-red-500/40 text-white font-bold text-sm font-orbitron hover:bg-red-500/20 hover:border-red-500/50 hover:shadow-lg hover:shadow-red-500/20 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    Get my free website
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

                {/* $149 */}
                <div className="flex flex-col p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors">
                  <div className="mb-4 mt-2">
                    <span className="text-4xl font-black font-orbitron text-foreground">$149</span>
                    <span className="text-lg font-bold font-orbitron text-muted-foreground">/mo</span>
                    <p className="font-orbitron font-bold text-sm text-foreground mt-2">+ Google Business Profile</p>
                  </div>
                  <ul className="space-y-2 flex-1">
                    {[
                      'Everything in $99',
                      'Automatic Google Business Profile optimization',
                      'Your GBP kept accurate, active & ranking',
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={scrollToQuiz}
                    className="mt-5 w-full px-5 py-3 rounded-xl bg-white/5 border border-white/15 text-white font-bold text-sm font-orbitron hover:bg-white/10 hover:border-white/25 transition-all duration-300"
                  >
                    Start with the free build
                  </button>
                </div>

                {/* $199 */}
                <div className="flex flex-col p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors">
                  <div className="mb-4 mt-2">
                    <span className="text-4xl font-black font-orbitron text-foreground">$199</span>
                    <span className="text-lg font-bold font-orbitron text-muted-foreground">/mo</span>
                    <p className="font-orbitron font-bold text-sm text-foreground mt-2">+ Reviews & Identity</p>
                  </div>
                  <ul className="space-y-2 flex-1">
                    {[
                      'Everything in $149',
                      'Review generator that grows your reputation',
                      'Dedicated business phone number',
                      'Branded email for your business',
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={scrollToQuiz}
                    className="mt-5 w-full px-5 py-3 rounded-xl bg-white/5 border border-white/15 text-white font-bold text-sm font-orbitron hover:bg-white/10 hover:border-white/25 transition-all duration-300"
                  >
                    Start with the free build
                  </button>
                </div>
              </div>

              <p className="text-center text-sm text-muted-foreground mt-6 font-orbitron">
                Every plan starts the same way — <span className="text-foreground font-bold">with your free website.</span>
              </p>
            </div>
          </section>

          {/* FAQ SECTION */}
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
                {FAQ_ITEMS.map((faq, i) => (
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
                <p className="text-muted-foreground text-sm mb-3">The fastest answer? See your own site.</p>
                <button
                  onClick={scrollToQuiz}
                  className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 text-white font-bold text-sm hover:bg-primary/10 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 font-orbitron"
                >
                  <Globe className="w-4 h-4 text-primary" />
                  Get my free website
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </section>

          {/* FINAL CTA SECTION */}
          <section className="py-4 lg:py-6 relative overflow-hidden">
            <div className="container mx-auto px-4 lg:px-8 max-w-4xl relative z-10">
              <div className="relative p-8 lg:p-12 rounded-3xl bg-gradient-to-br from-red-500/15 via-red-600/10 to-red-500/15 border border-red-500/30 text-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/0 via-red-500/5 to-red-500/0" />
                <div className="relative z-10">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black font-orbitron mb-3 text-foreground">
                    Your Website Is 6 Questions Away
                  </h2>
                  <p className="text-base lg:text-lg text-muted-foreground max-w-xl mx-auto mb-6">
                    The AI researches your market, builds your site, and texts you the live link — free. See it before you pay anything. Claim it when you love it.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                    <button
                      onClick={scrollToQuiz}
                      className="group relative px-8 py-4 rounded-xl bg-red-500/20 backdrop-blur-md border-2 border-red-500/40 text-white font-bold text-base shadow-lg hover:shadow-2xl hover:shadow-red-500/30 hover:bg-red-500/30 hover:border-red-500/60 hover:scale-[1.02] transition-all duration-300 font-orbitron overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-red-500/0 via-red-500/10 to-red-500/0 group-hover:from-red-500/10 group-hover:via-red-500/20 group-hover:to-red-500/10 transition-all duration-500" />
                      <span className="relative flex items-center justify-center gap-2">
                        <Globe className="w-5 h-5 text-red-400" />
                        Get my free website
                      </span>
                    </button>
                    <a
                      href={PORTAL_URL}
                      className="group px-8 py-4 rounded-xl bg-white/5 backdrop-blur-md border-2 border-white/20 text-white font-bold text-base hover:bg-white/10 hover:border-white/30 hover:shadow-lg hover:shadow-white/10 hover:scale-[1.02] transition-all duration-300 font-orbitron flex items-center justify-center gap-2"
                    >
                      Sign in
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>

                  <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
                    {['Free build', 'Live link by text', 'No credit card', 'Claim it when you love it'].map((item) => (
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

export default Index;
