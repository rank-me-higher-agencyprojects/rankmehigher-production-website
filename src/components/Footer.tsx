import { Facebook, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";
import { StickyMobileBar } from "@/components/marketing/Cta";

// TikTok icon (not available in lucide-react)
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
);

const SERVICES = [
  { label: "Custom Websites", href: "/services/websites/" },
  { label: "Local Map Booster", href: "/localmapbooster/" },
  { label: "Content & Ads", href: "/services/content-ads/" },
  { label: "SEO Services", href: "/services/seo/" },
  { label: "Outbound Sales Agents", href: "/services/outbound/" },
  { label: "AI Website Editor", href: "/ai-website-editor/" },
  { label: "Free Website Audit", href: "/free-website-audit/" },
];

const TRADES_AREAS = [
  { label: "Truck Repair Websites", href: "/websites-for/truck-repair/" },
  { label: "Romeoville", href: "/locations/romeoville-il/" },
];

const COMPANY = [
  { label: "Pricing", href: "/pricing/" },
  { label: "Examples", href: "/examples/" },
  { label: "FAQ", href: "/faq/" },
  { label: "Blog", href: "/blog/" },
  { label: "Careers", href: "/careers/" },
  { label: "Contact", href: "/contact/" },
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
];

const columnTitle = "font-orbitron text-[10px] font-medium uppercase tracking-[0.22em] text-white/40";
const columnLink = "block py-1 text-sm text-white/55 transition-colors duration-200 hover:text-foreground";

const Footer = () => (
  <footer id="contact" className="border-t border-white/[0.06] bg-background pb-16 md:pb-0">
    <div className="mx-auto max-w-content px-6 pb-10 pt-16 md:pt-20">
      {/* Brand row */}
      <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <div className="flex items-center gap-3">
            <img src={logo} alt="Rank Me Higher logo" width={28} height={28} className="h-7 w-7 object-contain" />
            <span className="font-orbitron text-xs font-semibold uppercase tracking-[0.22em] text-foreground">
              Rank Me Higher
            </span>
          </div>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/50">
            The AI platform for local business. Your website researched, built, and run by AI — edited by chat, from one portal.
          </p>
          <div className="mt-6 flex items-center gap-2">
            <a
              href="https://www.facebook.com/rankmehigherseo"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.08] text-white/50 transition-colors duration-200 hover:border-white/20 hover:text-foreground"
              aria-label="Facebook"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              href="https://instagram.com/rankmehigherseo"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.08] text-white/50 transition-colors duration-200 hover:border-white/20 hover:text-foreground"
              aria-label="Instagram"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="https://www.tiktok.com/@rankmehigher"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.08] text-white/50 transition-colors duration-200 hover:border-white/20 hover:text-foreground"
              aria-label="TikTok"
            >
              <TikTokIcon className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h3 className={columnTitle}>Services</h3>
          <div className="mt-4 space-y-1">
            {SERVICES.map((item) => (
              <Link key={item.href} to={item.href} className={columnLink}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className={columnTitle}>Company</h3>
          <div className="mt-4 space-y-1">
            {COMPANY.map((item) => (
              <Link key={item.href} to={item.href} className={columnLink}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className={columnTitle}>Contact</h3>
          <div className="mt-4 space-y-3 text-sm text-white/55">
            <p className="leading-relaxed">1 N State St Ste 1515, Chicago, IL 60602</p>
            <a href="sms:773-572-4686" className="block transition-colors duration-200 hover:text-foreground">
              (773) 572-4686 <span className="text-xs text-white/35">· SMS only</span>
            </a>
            <a
              href="mailto:business@rankmehigher.com"
              className="block transition-colors duration-200 hover:text-foreground"
            >
              business@rankmehigher.com
            </a>
            <a
              href="https://websites.rankmehigher.com"
              className="block pt-1 text-white/70 transition-colors duration-200 hover:text-foreground"
            >
              Sign in to your portal →
            </a>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <h3 className={columnTitle}>Websites by trade &amp; town</h3>
        <div className="mt-4 flex flex-wrap gap-x-5 gap-y-1">
          {TRADES_AREAS.map((item) => (
            <Link key={item.href} to={item.href} className={columnLink}>
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-14 border-t border-white/[0.06] pt-6">
        <p className="text-xs text-white/35">Copyright © 2026 Rank Me Higher | All Rights Reserved</p>
      </div>
    </div>
    <StickyMobileBar />
  </footer>
);

export default Footer;
