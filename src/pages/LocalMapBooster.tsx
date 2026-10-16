import { Helmet } from "react-helmet-async";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import MapPackSection from "@/components/MapPackSection";
import WhyTop3Section from "@/components/WhyTop3Section";
import OurPromiseSection from "@/components/OurPromiseSection";
import ButWaitSection from "@/components/ButWaitSection";
import RevenueCeilingSection from "@/components/RevenueCeilingSection";
import WhyOurSystemSection from "@/components/WhyOurSystemSection";
import FAQSection from "@/components/FAQSection";
import GoogleMapsSection from "@/components/GoogleMapsSection";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";

const LocalMapBooster = () => {
  return (
    <>
      <Helmet>
        <title>Google Business Profile Optimization | Rank Me Higher</title>
        <meta
          name="description"
          content="Your Google Business Profile is half of local search. The $149/mo plan pairs your AI-built website with GBP optimization — reviews automation next."
        />
        <meta property="og:title" content="Google Business Profile Optimization | Rank Me Higher" />
        <meta property="og:description" content="Your Google Business Profile is half of local search. The $149/mo plan pairs your AI-built website with GBP optimization." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://rankmehigher.com/localmapbooster/" />
        <meta property="og:site_name" content="Rank Me Higher" />
        <meta property="og:image" content="https://rankmehigher.com/assets/logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Local Map Booster | Rank Me Higher" />
        <meta name="twitter:description" content="Google Business Profile optimization paired with your AI-built website — the $149/mo plan." />
        <link rel="canonical" href="https://rankmehigher.com/localmapbooster/" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Local Map Booster — Google Business Profile Optimization",
          "provider": { "@type": "Organization", "name": "Rank Me Higher", "url": "https://rankmehigher.com" },
          "description": "Google Business Profile optimization paired with an AI-built, local-SEO-correct website. Part of the $149/mo plan; the $199/mo plan adds automated review generation with a dedicated business phone.",
          "url": "https://rankmehigher.com/localmapbooster/",
          "areaServed": "United States",
          "offers": { "@type": "Offer", "price": "149", "priceCurrency": "USD", "description": "$149/mo — website plus Google Business Profile optimization" },
          "serviceType": "Google Maps Optimization"
        })}</script>
      </Helmet>

      <main className="min-h-screen bg-background relative overflow-hidden">
        {/* Ambient Red Light Overlays */}
        <div className="fixed inset-0 pointer-events-none z-0">
          {/* Left edge glow */}
          <div className="absolute left-0 top-0 w-1/3 h-full bg-gradient-to-r from-primary/15 via-primary/5 to-transparent" />
          {/* Right edge glow */}
          <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-primary/15 via-primary/5 to-transparent" />
          {/* Top corner accents */}
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
          {/* Bottom ambient glow */}
          <div className="absolute bottom-0 left-1/4 w-1/2 h-64 bg-primary/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10">
          <Navbar />
          <HeroSection />
          <StatsSection />
          <MapPackSection />
          <WhyTop3Section />
          <OurPromiseSection />
          <ButWaitSection />
          <RevenueCeilingSection />
          <WhyOurSystemSection />
          <FAQSection />
          <GoogleMapsSection />
          <NewsletterSection />

          {/* Platform tier — how Map Booster fits the subscription */}
          <section className="py-16 lg:py-24">
            <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
              <div className="relative p-6 lg:p-10 rounded-2xl bg-card/30 border border-primary/30 text-center">
                <h2 className="font-heading font-black text-2xl md:text-3xl text-foreground mb-4">
                  Part Of One Platform, <span className="text-primary">One Subscription</span>
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-4">
                  Your Google Business Profile is half of local search — your website is the other half. The on-site half is our <a href="/services/seo/" className="font-semibold text-foreground underline hover:text-primary">local SEO services</a>, built into every website. The <span className="font-semibold text-foreground">$149/mo plan</span> pairs your AI-built, local-SEO-correct website with Google Business Profile optimization, so both halves pull in the same direction.
                </p>
                <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-6">
                  What's live today: GBP optimization done for you on the $149 plan. Where the platform is going: <span className="font-semibold text-foreground">automatic</span> profile optimization, and automated review generation — the $199/mo plan adds the review generator with a dedicated business phone and branded email.
                </p>
                <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-8">
                  {['$99/mo — AI website + hosting + chat edits', '$149/mo — + Google Business Profile optimization', '$199/mo — + review generator + business phone'].map((item) => (
                    <div key={item} className="flex items-center gap-1.5 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <a
                  href="/#free-website"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold uppercase tracking-wider hover:bg-primary/90 shadow-lg hover:shadow-xl hover:scale-105 transition-all"
                >
                  Get my free website
                  <ArrowRight className="w-5 h-5" />
                </a>
                <p className="text-muted-foreground text-sm mt-4">
                  Free build first • Upgrade to GBP optimization when it's live • <a href="https://websites.rankmehigher.com" className="underline hover:text-primary">Sign in</a>
                </p>
              </div>
            </div>
          </section>

          <Footer />
        </div>
      </main>
    </>
  );
};

export default LocalMapBooster;
