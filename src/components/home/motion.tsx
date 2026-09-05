import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Motion vocabulary for the marketing homepage.
 *
 * Durations: 200ms micro / 300ms standard / 500-600ms reveals.
 * One easing everywhere: expo-out — fast start, soft landing.
 * Every consumer must degrade to static under prefers-reduced-motion.
 */
export const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

/** Child of a `staggerParent` — fades up 18px. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: EASE },
  },
};

/** Orchestrates a one-time entrance (hero). */
export const staggerParent: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.09, delayChildren: 0.08 },
  },
};

/**
 * Scroll-triggered reveal. Fires once, 60px before the element
 * enters the viewport. Renders a plain div under reduced motion.
 */
export const Reveal = ({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) => {
  const reduced = useReducedMotion();
  if (reduced) {
    return <div className={className}>{children}</div>;
  }
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
};

/** Small-caps section eyebrow. The 24px red dash is the section's one accent. */
export const Eyebrow = ({ children, center = false }: { children: ReactNode; center?: boolean }) => (
  <div className={`flex items-center gap-3 ${center ? "justify-center" : ""}`}>
    <span aria-hidden className="h-px w-6 bg-primary/80" />
    <span className="font-orbitron text-[11px] font-medium uppercase tracking-[0.25em] text-white/50">
      {children}
    </span>
    {center && <span aria-hidden className="h-px w-6 bg-primary/80" />}
  </div>
);

/** Section title pair — big quiet heading + one sub-line. */
export const SectionHeading = ({
  eyebrow,
  title,
  sub,
  center = false,
}: {
  eyebrow?: ReactNode;
  title: ReactNode;
  sub?: ReactNode;
  center?: boolean;
}) => (
  <div className={center ? "text-center" : ""}>
    {eyebrow && <Eyebrow center={center}>{eyebrow}</Eyebrow>}
    <h2 className="mt-5 font-heading text-[clamp(1.875rem,3.4vw,2.75rem)] font-bold leading-[1.12] tracking-[-0.02em] text-foreground">
      {title}
    </h2>
    {sub && (
      <p className={`mt-4 max-w-xl text-base leading-relaxed text-white/60 md:text-lg ${center ? "mx-auto" : ""}`}>
        {sub}
      </p>
    )}
  </div>
);
