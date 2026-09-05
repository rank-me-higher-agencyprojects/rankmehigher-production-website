import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import BrowserFrame from "./BrowserFrame";
import { EASE } from "./motion";

const MESSAGE = "Make the phone number in the header bigger and bolder";
const LOOP_MS = 8000;

/**
 * Scripted vignette timeline (loops every 8s while playing):
 *   300ms   chat bubble fades in, starts typing itself
 *   600-2800ms   characters appear
 *   3050ms  send button pulses once
 *   3400ms  red ring pings over the phone number in the live preview
 *   4700ms  "Versioned" chip fades in
 *   7300ms  everything fades out, loop restarts
 * Reduced motion: static screenshot, chip permanently visible.
 */
const useVignetteClock = (active: boolean) => {
  const [elapsed, setElapsed] = useState(0);
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    if (!active) return;
    const start = performance.now();
    const id = window.setInterval(() => {
      const total = performance.now() - start;
      setElapsed(total % LOOP_MS);
      setCycle(Math.floor(total / LOOP_MS));
    }, 60);
    return () => window.clearInterval(id);
  }, [active]);

  return { elapsed, cycle };
};

/**
 * The browser-frame + scripted chat vignette, extracted so the hero and any
 * deep-dive section can reuse it at different sizes. All overlay geometry is
 * percentages measured against public/assets/editor/editor-chat.webp
 * (2400×1500), so it scales with the frame.
 */
const EditorVignette = ({
  playOnMount = false,
  compact = false,
  priority = false,
  className = "",
}: {
  /** Start the loop on mount (above-the-fold hero) instead of when scrolled into view. */
  playOnMount?: boolean;
  /** Smaller overlay type for narrow frames (hero column / mobile). */
  compact?: boolean;
  /** Eager-load the screenshot (above the fold). */
  priority?: boolean;
  className?: string;
}) => {
  const frameRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const inView = useInView(frameRef, { amount: 0.35 });
  const play = !reduced && (playOnMount || inView);
  const { elapsed, cycle } = useVignetteClock(play);

  const bubbleVisible = play && elapsed > 300 && elapsed < 7300;
  const typing = Math.max(0, Math.min(1, (elapsed - 600) / 2200));
  const typed = MESSAGE.slice(0, Math.round(typing * MESSAGE.length));
  const caretOn = bubbleVisible && elapsed < 3050;
  const sendPulse = play && elapsed > 3050 && elapsed < 3450;
  const ringOn = play && elapsed >= 3400 && elapsed < 5100;
  const chipVisible = reduced || (play && elapsed > 4700 && elapsed < 7300);

  return (
    <BrowserFrame url="websites.rankmehigher.com" className={className}>
      <div ref={frameRef} className="relative">
        <img
          src="/assets/editor/editor-chat.webp"
          alt="The Rank Me Higher chat editor — a change typed in plain English on the left, the live website updating on the right"
          width={2400}
          height={1500}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          className="block w-full"
        />

        {/* (a) The chat bubble that types itself */}
        <motion.div
          aria-hidden
          initial={false}
          animate={{ opacity: bubbleVisible ? 1 : 0, y: bubbleVisible ? 0 : 10 }}
          transition={{ duration: 0.4, ease: EASE }}
          className={`absolute bottom-[15%] left-[3.5%] hidden w-[30%] rounded-xl border border-white/10 bg-[hsl(0_0%_5%/0.92)] shadow-2xl backdrop-blur-md sm:block ${
            compact ? "p-2.5 lg:p-3" : "p-3 lg:p-4"
          }`}
        >
          <p
            className={`min-h-[2.6em] text-left leading-snug text-white/85 ${
              compact ? "text-[10px] lg:text-[11px]" : "text-[11px] lg:text-[13px]"
            }`}
          >
            {typed}
            {caretOn && (
              <span className="animate-blink ml-px inline-block h-[1em] w-[2px] translate-y-[2px] bg-white/70" />
            )}
          </p>
          <div className="mt-2.5 flex items-center justify-between">
            <span
              className={`rounded-md border border-white/[0.08] bg-white/[0.04] px-2 py-0.5 tracking-wide text-white/40 ${
                compact ? "text-[8px] lg:text-[9px]" : "text-[9px] lg:text-[10px]"
              }`}
            >
              Opus 5
            </span>
            <motion.span
              initial={false}
              animate={{ scale: sendPulse ? 1.15 : 1 }}
              transition={{ duration: 0.25, ease: EASE }}
              className={`flex items-center justify-center rounded-full bg-primary ${
                compact ? "h-5 w-5 lg:h-6 lg:w-6" : "h-6 w-6 lg:h-7 lg:w-7"
              }`}
            >
              <svg viewBox="0 0 24 24" className="h-3 w-3 text-white" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M22 2 11 13" />
                <path d="M22 2 15 22l-4-9-9-4 20-7z" />
              </svg>
            </motion.span>
          </div>
        </motion.div>

        {/* (b) Red highlight ring over the phone number in the preview */}
        {ringOn && (
          <span
            key={cycle}
            aria-hidden
            className="animate-vignette-ring absolute rounded-full border-2 border-primary shadow-[0_0_28px_hsl(4_84%_55%/0.5)]"
            style={{ left: "85.7%", top: "9.4%", width: "10%", height: "4.8%" }}
          />
        )}

        {/* (c) Versioned chip */}
        <motion.div
          initial={false}
          animate={{ opacity: chipVisible ? 1 : 0, y: chipVisible ? 0 : 8 }}
          transition={{ duration: 0.4, ease: EASE }}
          className={`absolute right-[3%] top-[17%] flex items-center gap-1.5 rounded-full border border-white/[0.12] bg-[hsl(0_0%_5%/0.88)] backdrop-blur-md ${
            compact ? "px-2.5 py-1" : "px-3 py-1.5"
          }`}
        >
          <svg viewBox="0 0 24 24" className="h-3 w-3 text-white/60" fill="none" stroke="currentColor" strokeWidth="3">
            <path d="M20 6 9 17l-5-5" />
          </svg>
          <span
            className={`whitespace-nowrap text-white/80 ${
              compact ? "text-[9px] lg:text-[10px]" : "text-[10px] md:text-[11px]"
            }`}
          >
            Versioned — revert anytime
          </span>
        </motion.div>
      </div>
    </BrowserFrame>
  );
};

export default EditorVignette;
