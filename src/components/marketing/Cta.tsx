import type { MouseEvent } from "react";
import { Link } from "react-router-dom";
import {
  CALENDLY_URL,
  FREE_WEBSITE_HREF,
  SMS_HREF,
  SMS_NUMBER_DISPLAY,
  TRUSTPILOT_QUOTES,
  TRUSTPILOT_URL,
} from "@/lib/marketing-data";

type CalendlyWindow = Window & { Calendly?: { initPopupWidget: (o: { url: string }) => void } };

/** Opens the existing Calendly popup when its script is loaded; otherwise follows the link. */
export const openCalendly = (event?: MouseEvent) => {
  const w = window as CalendlyWindow;
  if (w.Calendly) {
    event?.preventDefault();
    w.Calendly.initPopupWidget({ url: CALENDLY_URL });
  }
};

export const BookCallLink = ({ className = "btn-cta-ghost", label = "Book a 15-min call" }: { className?: string; label?: string }) => (
  <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" onClick={openCalendly} className={className}>
    {label}
  </a>
);

export const TextUsLink = ({ className = "btn-cta-ghost", label }: { className?: string; label?: string }) => (
  <a href={SMS_HREF} className={className} aria-label={`Text us at ${SMS_NUMBER_DISPLAY} (SMS only)`}>
    {label ?? `Text ${SMS_NUMBER_DISPLAY}`}
  </a>
);

/** The three conversion paths, used on every marketing page. */
export const CtaRow = ({ center = false }: { center?: boolean }) => (
  <div className={`flex flex-wrap items-center gap-3 ${center ? "justify-center" : ""}`}>
    <a href={FREE_WEBSITE_HREF} className="btn-cta-primary">
      Get my free website
    </a>
    <BookCallLink />
    <TextUsLink />
    <span className="w-full text-xs text-white/40" style={{ textAlign: center ? "center" : "left" }}>
      {SMS_NUMBER_DISPLAY} is SMS only. Text any time, or book a 15-minute call.
    </span>
  </div>
);

/** Published rating plus real Trustpilot quotes once they're added to TRUSTPILOT_QUOTES. */
export const ReviewProof = () => (
  <div className="mt-8 space-y-4">
    <a
      href={TRUSTPILOT_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white/90"
    >
      <span aria-hidden className="tracking-[0.15em] text-amber-300/80">★★★★★</span>
      <span>
        <span className="font-semibold text-white/85">5.0</span> from 54 client reviews on Trustpilot
      </span>
    </a>
    {TRUSTPILOT_QUOTES.length > 0 && (
      <div className="grid gap-3 md:grid-cols-3">
        {TRUSTPILOT_QUOTES.map((q) => (
          <blockquote key={q.name} className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-4 text-sm text-white/70">
            “{q.quote}”
            <footer className="mt-2 text-xs text-white/40">{q.name}, via Trustpilot</footer>
          </blockquote>
        ))}
      </div>
    )}
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
      <div className="flex justify-center">
        <ReviewProof />
      </div>
      <p className="mt-6 text-sm text-white/45">
        Or compare <Link to="/pricing/" className="underline underline-offset-4 hover:text-white/80">plans and pricing</Link>, see{" "}
        <Link to="/examples/" className="underline underline-offset-4 hover:text-white/80">real client sites</Link>, or get a{" "}
        <Link to="/free-website-audit/" className="underline underline-offset-4 hover:text-white/80">free audit of your current site</Link>.
      </p>
    </div>
  </section>
);

/** Fixed bottom bar on phones: Text us · Book a call · Get my free website. */
export const StickyMobileBar = () => (
  <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-background/95 backdrop-blur-xl md:hidden">
    <div className="grid grid-cols-3 gap-2 px-3 py-2 pb-[max(0.5rem,env(safe-area-inset-bottom))]">
      <a href={SMS_HREF} className="flex h-11 items-center justify-center rounded-lg border border-white/15 text-xs font-medium text-white/85" aria-label={`Text us at ${SMS_NUMBER_DISPLAY} (SMS only)`}>
        Text us
      </a>
      <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" onClick={openCalendly} className="flex h-11 items-center justify-center rounded-lg border border-white/15 text-xs font-medium text-white/85">
        Book a call
      </a>
      <a href={FREE_WEBSITE_HREF} className="btn-cta-primary !h-11 !px-2 !text-xs">
        Free website
      </a>
    </div>
  </div>
);
