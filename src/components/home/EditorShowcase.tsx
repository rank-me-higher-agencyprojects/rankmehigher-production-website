import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import BrowserFrame from "./BrowserFrame";
import { EASE, Reveal, SectionHeading } from "./motion";

const MESSAGE = "Make the phone number in the header bigger and bolder";
const LOOP_MS = 8000;

/**
 * Scripted vignette timeline (loops every 8s while in view):
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

const FEATURES = [
  { title: "Click anything to edit", line: "Point at your site, say the change. The AI makes it." },
  { title: "Every edit versioned", line: "A full history of your site — revert anything, anytime." },
  { title: "Texts you when live", line: "Each change redeploys and lands on your phone as a link." },
];

const EditorShowcase = () => {
  const frameRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const inView = useInView(frameRef, { amount: 0.35 });
  const { elapsed, cycle } = useVignetteClock(inView && !reduced);

  const play = inView && !reduced;
  const bubbleVisible = play && elapsed > 300 && elapsed < 7300;
  const typing = Math.max(0, Math.min(1, (elapsed - 600) / 2200));
  const typed = MESSAGE.slice(0, Math.round(typing * MESSAGE.length));
  const caretOn = bubbleVisible && elapsed < 3050;
  const sendPulse = play && elapsed > 3050 && elapsed < 3450;
  const ringOn = play && elapsed >= 3400 && elapsed < 5100;
  const chipVisible = reduced || (play && elapsed > 4700 && elapsed < 7300);

  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      {/* Ambient — the one red note this section gets, at whisper volume */}
      <img
        src="/assets/ai/editor-ambient.webp"
        alt=""
        aria-hidden
        loading="lazy"
        decoding="async"
        className="pointer-events-none absolute -right-32 -top-16 w-[760px] max-w-none select-none opacity-[0.16] [mask-image:radial-gradient(70%_70%_at_60%_40%,black,transparent)]"
      />

      <div className="relative mx-auto max-w-content px-6">
        <Reveal>
          <SectionHeading
            eyebrow="The chat editor"
            title={
              <>
                Change anything.
                <br />
                <span className="text-white/50">By saying it.</span>
              </>
            }
            sub="Click your site, type what you want, watch it happen. Every edit versioned — revert anytime."
          />
        </Reveal>

        <Reveal className="mt-12 md:mt-16" delay={0.1}>
          <BrowserFrame url="websites.rankmehigher.com">
            <div ref={frameRef} className="relative">
              <img
                src="/assets/editor/editor-chat.webp"
                alt="The Rank Me Higher chat editor — a change typed in plain English on the left, the live website updating on the right"
                width={2400}
                height={1500}
                loading="lazy"
                decoding="async"
                className="block w-full"
              />

              {/* (a) The chat bubble that types itself */}
              <motion.div
                aria-hidden
                initial={false}
                animate={{ opacity: bubbleVisible ? 1 : 0, y: bubbleVisible ? 0 : 10 }}
                transition={{ duration: 0.4, ease: EASE }}
                className="absolute bottom-[15%] left-[3.5%] hidden w-[30%] rounded-xl border border-white/10 bg-[hsl(0_0%_5%/0.92)] p-3 shadow-2xl backdrop-blur-md sm:block lg:p-4"
              >
                <p className="min-h-[2.6em] text-left text-[11px] leading-snug text-white/85 lg:text-[13px]">
                  {typed}
                  {caretOn && <span className="animate-blink ml-px inline-block h-[1em] w-[2px] translate-y-[2px] bg-white/70" />}
                </p>
                <div className="mt-2.5 flex items-center justify-between">
                  <span className="rounded-md border border-white/[0.08] bg-white/[0.04] px-2 py-0.5 text-[9px] tracking-wide text-white/40 lg:text-[10px]">
                    Opus 5
                  </span>
                  <motion.span
                    initial={false}
                    animate={{ scale: sendPulse ? 1.15 : 1 }}
                    transition={{ duration: 0.25, ease: EASE }}
                    className="flex h-6 w-6 items-center justify-center rounded-full bg-primary lg:h-7 lg:w-7"
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
                className="absolute right-[3%] top-[17%] flex items-center gap-1.5 rounded-full border border-white/[0.12] bg-[hsl(0_0%_5%/0.88)] px-3 py-1.5 backdrop-blur-md"
              >
                <svg viewBox="0 0 24 24" className="h-3 w-3 text-white/60" fill="none" stroke="currentColor" strokeWidth="3">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                <span className="whitespace-nowrap text-[10px] text-white/80 md:text-[11px]">Versioned — revert anytime</span>
              </motion.div>
            </div>
          </BrowserFrame>
        </Reveal>

        {/* Three quiet feature lines */}
        <div className="mt-12 grid gap-8 sm:grid-cols-3 md:mt-16">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={0.08 * i}>
              <div className="border-t border-white/[0.08] pt-5">
                <h3 className="text-sm font-semibold text-foreground">{f.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-white/50">{f.line}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EditorShowcase;
