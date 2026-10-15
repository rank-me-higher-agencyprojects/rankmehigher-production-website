import { Link } from "react-router-dom";
import { FREE_WEBSITE_HREF, SMS_HREF, SMS_NUMBER_DISPLAY } from "@/lib/marketing-data";

export const TextUsLink = ({ className = "btn-cta-ghost", label }: { className?: string; label?: string }) => (
  <a href={SMS_HREF} className={className} aria-label={`Text us at ${SMS_NUMBER_DISPLAY} (SMS only)`}>
    {label ?? `Text ${SMS_NUMBER_DISPLAY}`}
  </a>
);

/** Text and the free-website path. There is no booking. */
export const CtaRow = ({ center = false }: { center?: boolean }) => (
  <div className={`flex flex-wrap items-center gap-3 ${center ? "justify-center" : ""}`}>
    <a href={FREE_WEBSITE_HREF} className="btn-cta-primary">
      Get my free website
    </a>
    <TextUsLink />
    <span className="w-full text-xs text-white/40" style={{ textAlign: center ? "center" : "left" }}>
      {SMS_NUMBER_DISPLAY} is SMS only. Text any time.
    </span>
  </div>
);

/** Closing CTA block for the bottom of each marketing page. */
export const CtaBlock = ({ title = "See your free website before you pay anything" }: { title?: string }) => (
  <section className="border-t border-white/[0.06] py-14 md:py-20">
    <div className="mx-auto max-w-content px-6 text-center">
      <h2 className="mx-auto max-w-2xl font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl">{title}</h2>
      <p className="mx-auto mt-4 max-w-xl text-white/60">
        Answer 6 questions and the AI builds your site. The live link arrives by text. $99/mo only when you put it live.
      </p>
      <div className="mt-8">
        <CtaRow center />
      </div>
      <p className="mt-6 text-sm text-white/45">
        Or compare <Link to="/pricing/" className="underline underline-offset-4 hover:text-white/80">plans and pricing</Link>, see{" "}
        <Link to="/examples/" className="underline underline-offset-4 hover:text-white/80">real client sites</Link>, or{" "}
        <Link to="/contact/" className="underline underline-offset-4 hover:text-white/80">contact us</Link>.
      </p>
    </div>
  </section>
);

/** Fixed bottom bar on phones: Text us and Get my free website. */
export const StickyMobileBar = () => (
  <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-background/95 backdrop-blur-xl md:hidden">
    <div className="grid grid-cols-2 gap-2 px-3 py-2 pb-[max(0.5rem,env(safe-area-inset-bottom))]">
      <a href={SMS_HREF} className="flex h-11 items-center justify-center rounded-lg border border-white/15 text-xs font-medium text-white/85" aria-label={`Text us at ${SMS_NUMBER_DISPLAY} (SMS only)`}>
        Text us
      </a>
      <a href={FREE_WEBSITE_HREF} className="btn-cta-primary !h-11 !px-2 !text-xs">
        Get my free website
      </a>
    </div>
  </div>
);
