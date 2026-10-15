import { motion, useReducedMotion } from "framer-motion";
import EditorVignette from "./EditorVignette";
import { EASE, Eyebrow, fadeUp, staggerParent } from "./motion";
import { BookCallLink, TextUsLink } from "@/components/marketing/Cta";
import { SMS_NUMBER_DISPLAY } from "@/lib/marketing-data";

/**
 * Two-column hero: the copy owns the left, the product owns the right.
 * The scripted editor vignette auto-plays on mount — the editor IS the hero.
 * Mobile is compact by construction: no min-height, tight stack, the frame
 * near full-bleed directly under the copy. The Higgsfield backdrop is a dim
 * desktop-only layer behind the frame.
 */

/** Published fact: Rank Me Higher has been in business since 2024. */
const TrustRow = () => (
  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-white/[0.08] pt-4 text-xs text-white/50">
    <span>Since 2024</span>
  </div>
);

const HeroSection = ({
  onPrimary,
  onSecondary,
}: {
  onPrimary: () => void;
  onSecondary: () => void;
}) => {
  const reduced = useReducedMotion();

  return (
    <section className="relative overflow-hidden">
      {/* Backdrop layer — desktop only, dimmed behind the frame */}
      <div aria-hidden className="absolute inset-0 hidden md:block">
        <img
          src="/assets/ai/hero-backdrop.webp"
          alt=""
          loading="eager"
          decoding="async"
          className="h-full w-full select-none object-cover object-[70%_center] opacity-50"
        />
        {/* Dim + protect the text column */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40" />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-background to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div className="relative mx-auto max-w-content px-6 pb-10 pt-24 md:flex md:min-h-[88vh] md:items-center md:pb-24 md:pt-36">
        <div className="grid w-full items-center gap-8 md:gap-10 lg:grid-cols-2 lg:gap-12">
          {/* Copy column */}
          <motion.div
            variants={staggerParent}
            initial={reduced ? false : "hidden"}
            animate="visible"
          >
            <motion.div variants={fadeUp}>
              <Eyebrow>For contractors &amp; trades in Chicagoland</Eyebrow>
            </motion.div>

            {/* The H1 is the LCP element: render it visible from the first byte (no opacity animation). */}
            <h1 className="mt-4 font-heading text-[clamp(2.375rem,4.2vw,3.375rem)] font-extrabold leading-[1.05] tracking-[-0.03em] text-foreground md:mt-6">
              $99/mo websites for contractors.
              <br />
              Built by AI.
              <br />
              <span className="text-white/55">Edited by chat.</span>
            </h1>

            <motion.p
              variants={fadeUp}
              className="mt-4 max-w-[480px] text-[15px] leading-relaxed text-white/60 md:mt-6 md:text-base"
            >
              Roofers, plumbers, HVAC, truck repair: answer 6 questions and the AI builds your
              complete local-SEO website, then texts you the live link. After that you control your
              site and your traffic by talking to the AI. See the whole site before you pay anything.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-6 flex flex-wrap items-center gap-3 md:mt-8">
              <button onClick={onPrimary} className="btn-cta-primary">
                Get your free website
              </button>
              <BookCallLink />
              <button onClick={onSecondary} className="btn-cta-ghost hidden sm:inline-flex">
                See how it works
              </button>
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="mt-4 text-[11px] tracking-wide text-white/45 md:mt-5 md:text-xs"
            >
              Free build · Live preview by text · $99/mo when you go live ·{" "}
              <TextUsLink className="underline underline-offset-2 hover:text-white/80" label={`Text ${SMS_NUMBER_DISPLAY}`} /> (SMS only)
            </motion.p>

            <motion.div variants={fadeUp} className="mt-5 md:mt-8">
              <TrustRow />
            </motion.div>
          </motion.div>

          {/* Product column — the editor, playing on load */}
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: EASE }}
            className="-mx-4 sm:mx-0"
          >
            <div className="lg:[transform:perspective(1400px)_rotateY(-4deg)_rotateX(1deg)]">
              <EditorVignette playOnMount compact priority />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
