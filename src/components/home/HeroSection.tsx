import { motion, useReducedMotion } from "framer-motion";
import { Eyebrow, fadeUp, staggerParent } from "./motion";

/**
 * Single responsive hero. The Higgsfield backdrop is right-weighted with an
 * empty left third — the headline owns that space. If the image fails, the
 * page is still a clean near-black hero.
 */
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
      {/* Backdrop layer */}
      <div aria-hidden className="absolute inset-0">
        <img
          src="/assets/ai/hero-backdrop.webp"
          alt=""
          loading="eager"
          decoding="async"
          className="h-full w-full select-none object-cover object-[70%_center] opacity-70"
        />
        {/* Dim + protect the text column */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/25" />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-background to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div className="relative mx-auto flex min-h-[88vh] max-w-content flex-col justify-center px-6 pb-24 pt-32 md:pt-36">
        <motion.div
          variants={staggerParent}
          initial={reduced ? false : "hidden"}
          animate="visible"
          className="max-w-[660px]"
        >
          <motion.div variants={fadeUp}>
            <Eyebrow>The AI platform for local business</Eyebrow>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="mt-7 font-heading text-[clamp(2.625rem,6.2vw,4.5rem)] font-extrabold leading-[1.05] tracking-[-0.03em] text-foreground"
          >
            Your website.
            <br />
            Built by AI.
            <br />
            <span className="text-white/55">Edited by chat.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-7 max-w-[460px] text-base leading-relaxed text-white/60 md:text-lg"
          >
            Answer 6 questions. The AI researches your market, builds your site, and texts you the
            live link — free.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center gap-3">
            <button onClick={onPrimary} className="btn-cta-primary">
              Get your free website
            </button>
            <button onClick={onSecondary} className="btn-cta-ghost">
              See how it works
            </button>
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="mt-14 flex items-center gap-3 font-orbitron text-[10px] uppercase tracking-[0.22em] text-white/40 md:text-[11px]"
          >
            <span aria-hidden className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/60 motion-reduce:hidden" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
            </span>
            40+ local businesses run on it
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
