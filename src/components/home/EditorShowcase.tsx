import BrowserFrame from "./BrowserFrame";
import { Reveal, SectionHeading } from "./motion";

const FEATURES = [
  { title: "Click anything to edit", line: "Point at your site, say the change. The AI makes it." },
  { title: "Every edit versioned", line: "A full history of your site — revert anything, anytime." },
  { title: "Texts you when live", line: "Each change redeploys and lands on your phone as a link." },
];

/**
 * Deep-dive on the editor. The hero already plays the scripted chat vignette,
 * so this section tells the other half of the story — the version history —
 * with a static frame and one quiet chip (no competing animation loop).
 */
const EditorShowcase = () => {
  return (
    <section className="relative overflow-hidden py-12 md:py-32">
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
                Every edit, versioned.
                <br />
                <span className="text-white/50">Revert anything, anytime.</span>
              </>
            }
            sub="Say the change in chat and watch it happen live. Your site keeps a full history — roll any edit back with one click."
          />
        </Reveal>

        <Reveal className="mt-8 md:mt-16" delay={0.1}>
          <BrowserFrame url="websites.rankmehigher.com">
            <div className="relative">
              <img
                src="/assets/editor/editor-history.webp"
                alt="The Rank Me Higher editor — chat panel with History and Automations tabs beside the live website preview"
                width={2400}
                height={1500}
                loading="lazy"
                decoding="async"
                className="block w-full"
              />

              {/* Quiet revert chip under the History tab — static, no scripted loop */}
              <div
                aria-hidden
                className="absolute left-[13%] top-[10%] hidden items-center gap-1.5 rounded-full border border-white/[0.12] bg-[hsl(0_0%_5%/0.88)] px-3 py-1.5 backdrop-blur-md sm:flex"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-3 w-3 text-white/60"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M3 7v6h6" />
                  <path d="M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6.7 3L3 13" />
                </svg>
                <span className="whitespace-nowrap text-[10px] text-white/80 md:text-[11px]">
                  Reverted in one click
                </span>
              </div>
            </div>
          </BrowserFrame>
        </Reveal>

        {/* Three quiet feature lines */}
        <div className="mt-8 grid gap-4 sm:grid-cols-3 md:mt-16 md:gap-8">
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
