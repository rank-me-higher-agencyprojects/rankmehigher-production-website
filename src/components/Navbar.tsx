import { useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router-dom";

const PORTAL_URL = "https://websites.rankmehigher.com";

const NAV_LINKS: { label: string; id?: string; href?: string }[] = [
  { label: "How it works", id: "how-it-works" },
  { label: "Examples", href: "/examples/" },
  { label: "Pricing", href: "/pricing/" },
  { label: "FAQ", href: "/faq/" },
];

const Navbar = ({ onOpenLeadMagnet }: { onOpenLeadMagnet?: () => void }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const reduced = useReducedMotion();

  const scrollToQuiz = () => {
    document.getElementById("free-website")?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const goToSection = (id: string) => {
    setIsMenuOpen(false);
    if (location.pathname !== "/") {
      // Index retries the fragment scroll once its sections exist.
      navigate(`/#${id}`);
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleFreeWebsiteClick = () => {
    setIsMenuOpen(false);
    if (onOpenLeadMagnet) {
      onOpenLeadMagnet();
      return;
    }
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(scrollToQuiz, 150);
    } else {
      scrollToQuiz();
    }
  };

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.06] bg-background/80 backdrop-blur-xl">
      <div className="mx-auto max-w-content px-6">
        <div className="flex h-16 items-center justify-between gap-6">
          {/* Wordmark */}
          <Link to="/" className="flex shrink-0 items-center gap-3" aria-label="Rank Me Higher — home">
            <img
              src="/assets/logo.png"
              alt=""
              width={28}
              height={28}
              className="h-7 w-7 object-contain"
            />
            <span className="font-orbitron text-[11px] font-semibold uppercase tracking-[0.22em] text-foreground md:text-xs">
              Rank Me Higher
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) =>
              link.href ? (
                <Link key={link.label} to={link.href} className="text-sm text-white/60 transition-colors duration-200 hover:text-foreground">
                  {link.label}
                </Link>
              ) : (
                <button
                  key={link.label}
                  onClick={() => goToSection(link.id!)}
                  className="text-sm text-white/60 transition-colors duration-200 hover:text-foreground"
                >
                  {link.label}
                </button>
              )
            )}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden items-center gap-2 md:flex">
            <a
              href={PORTAL_URL}
              className="rounded-lg px-4 py-2 text-sm text-white/60 transition-colors duration-200 hover:text-foreground"
            >
              Sign in
            </a>
            <button onClick={handleFreeWebsiteClick} className="btn-cta-primary !h-9 !px-4 !text-[13px]">
              Get your free website
            </button>
          </div>

          {/* Mobile: CTA + menu button */}
          <div className="flex items-center gap-2 md:hidden">
            <button onClick={handleFreeWebsiteClick} className="btn-cta-primary !h-8 !px-3 !text-xs">
              Free website
            </button>
            <button
              className="flex h-9 w-9 items-center justify-center rounded-lg text-white/70 transition-colors hover:text-foreground"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile sheet */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={reduced ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduced ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="border-t border-white/[0.06] bg-background/95 backdrop-blur-xl md:hidden"
          >
            <div className="mx-auto flex max-w-content flex-col px-6 py-4">
              {NAV_LINKS.map((link) =>
                link.href ? (
                  <Link key={link.label} to={link.href} onClick={() => setIsMenuOpen(false)} className="py-3 text-left text-sm text-white/70 transition-colors hover:text-foreground">
                    {link.label}
                  </Link>
                ) : (
                  <button
                    key={link.label}
                    onClick={() => goToSection(link.id!)}
                    className="py-3 text-left text-sm text-white/70 transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </button>
                )
              )}
              <a
                href={PORTAL_URL}
                onClick={() => setIsMenuOpen(false)}
                className="py-3 text-sm text-white/70 transition-colors hover:text-foreground"
              >
                Sign in
              </a>
              <button onClick={handleFreeWebsiteClick} className="btn-cta-primary mt-3 w-full">
                Get your free website
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
