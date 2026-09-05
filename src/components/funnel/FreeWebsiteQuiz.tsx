import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Building2, CheckCircle2, Globe, Loader2, MapPin, MessageSquare, Smartphone, Sparkles, Wrench } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

const API_BASE = "https://websites.rankmehigher.com/api/public/funnel";
const PORTAL_URL = "https://websites.rankmehigher.com";

const US_STATES = [
  "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA",
  "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK",
  "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY", "DC",
];

const INDUSTRY_CHIPS = [
  "Auto Repair",
  "Cleaning",
  "Landscaping",
  "Trucking",
  "Plumbing",
  "HVAC",
  "Roofing",
  "Detailing & Tint",
  "Salon & Beauty",
];

type Utm = {
  source?: string;
  medium?: string;
  campaign?: string;
  term?: string;
  content?: string;
};

type Phase = "quiz" | "submitting" | "verify" | "verifying" | "success" | "mirror-success";

const TOTAL_STEPS = 6;

const inputClass =
  "w-full h-11 px-4 rounded-xl bg-white/5 border border-white/15 text-foreground text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:border-red-500/50 focus:bg-white/[0.07] transition-colors";

const readUtm = (): Utm | undefined => {
  try {
    const params = new URLSearchParams(window.location.search);
    const utm: Utm = {};
    const map: [keyof Utm, string][] = [
      ["source", "utm_source"],
      ["medium", "utm_medium"],
      ["campaign", "utm_campaign"],
      ["term", "utm_term"],
      ["content", "utm_content"],
    ];
    let found = false;
    for (const [key, param] of map) {
      const value = params.get(param);
      if (value) {
        utm[key] = value;
        found = true;
      }
    }
    return found ? utm : undefined;
  } catch {
    return undefined;
  }
};

const pushDataLayer = (event: string, data: Record<string, unknown> = {}) => {
  try {
    window.dataLayer?.push({ event, ...data });
  } catch {
    // analytics must never break the funnel
  }
};

const FreeWebsiteQuiz = () => {
  const [phase, setPhase] = useState<Phase>("quiz");
  const [step, setStep] = useState(0);
  const [apiError, setApiError] = useState<string | null>(null);
  const [stepError, setStepError] = useState<string | null>(null);
  const [leadId, setLeadId] = useState<string | null>(null);
  const [code, setCode] = useState("");
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const startedRef = useRef(false);
  const mirroredRef = useRef(false);

  const [form, setForm] = useState({
    business_name: "",
    industry: "",
    street: "",
    city: "",
    region: "",
    postal: "",
    services: "",
    website: "",
    phone: "",
    email: "",
    hp: "", // honeypot — stays empty for humans
  });

  const set = (field: keyof typeof form) => (value: string) => {
    setForm((f) => ({ ...f, [field]: value }));
    setStepError(null);
    if (!startedRef.current) {
      startedRef.current = true;
      pushDataLayer("funnel_start");
    }
  };

  // Poll build status on the success screen; degrade silently on 404/errors.
  useEffect(() => {
    if (phase !== "success" || !leadId) return;
    let stopped = false;
    let tries = 0;
    const poll = async () => {
      if (stopped || tries >= 24) return;
      tries += 1;
      try {
        const res = await fetch(`${API_BASE}/status/${leadId}`);
        if (!res.ok) {
          stopped = true; // endpoint not live yet — degrade gracefully
          return;
        }
        const data = await res.json();
        if (data?.preview_url) {
          setPreviewUrl(data.preview_url);
          stopped = true;
          return;
        }
        setTimeout(poll, 5000);
      } catch {
        stopped = true;
      }
    };
    const timer = setTimeout(poll, 5000);
    return () => {
      stopped = true;
      clearTimeout(timer);
    };
  }, [phase, leadId]);

  const validateStep = (): boolean => {
    switch (step) {
      case 0:
        if (!form.business_name.trim()) {
          setStepError("What's your business called?");
          return false;
        }
        return true;
      case 1:
        if (!form.industry.trim()) {
          setStepError("Tell us what you do — pick one or type it.");
          return false;
        }
        return true;
      case 2:
        if (!form.city.trim() || !form.region) {
          setStepError("We need at least your city and state to research your market.");
          return false;
        }
        return true;
      case 5: {
        const digits = form.phone.replace(/\D/g, "");
        if (digits.length < 10) {
          setStepError("Enter a valid phone number — that's where your website link goes.");
          return false;
        }
        if (form.email && !/^\S+@\S+\.\S+$/.test(form.email.trim())) {
          setStepError("That email doesn't look right.");
          return false;
        }
        return true;
      }
      default:
        return true;
    }
  };

  const mirrorToSupabase = async () => {
    if (mirroredRef.current) return;
    mirroredRef.current = true;
    try {
      await supabase.from("website_submissions").insert({
        company_name: form.business_name || "Free Website Funnel",
        business_email: form.email || form.phone,
        form_data: {
          type: "free_website_funnel",
          industry: form.industry,
          street: form.street,
          city: form.city,
          region: form.region,
          postal: form.postal,
          services: form.services,
          phone: form.phone,
          website: form.website,
          utm: readUtm() ?? null,
          submittedAt: new Date().toISOString(),
        },
      });
    } catch (error) {
      console.error("Funnel mirror insert failed:", error);
      mirroredRef.current = false;
    }
  };

  const handleSubmit = async () => {
    setPhase("submitting");
    setApiError(null);

    // Mirror into the existing lead table no matter what the funnel API does.
    const mirror = mirrorToSupabase();

    const payload: Record<string, unknown> = {
      business_name: form.business_name.trim(),
      industry: form.industry.trim(),
      city: form.city.trim(),
      region: form.region,
      phone: form.phone.trim(),
      hp: form.hp,
    };
    if (form.street.trim()) payload.street = form.street.trim();
    if (form.postal.trim()) payload.postal = form.postal.trim();
    if (form.services.trim()) payload.services = form.services.trim();
    if (form.email.trim()) payload.email = form.email.trim();
    if (form.website.trim()) payload.website = form.website.trim();
    const utm = readUtm();
    if (utm) payload.utm = utm;

    try {
      const res = await fetch(`${API_BASE}/start`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        const data = await res.json();
        setLeadId(data.lead_id ?? null);
        pushDataLayer("funnel_submit", { lead_id: data.lead_id });
        await mirror;
        setPhase("verify");
        return;
      }

      if (res.status === 400 || res.status === 429) {
        let detail = "Something didn't look right. Give it another try.";
        try {
          const data = await res.json();
          if (data?.detail) detail = String(data.detail);
        } catch {
          // keep default message
        }
        setApiError(res.status === 429 ? "Whoa — too many tries. Wait a minute and try again." : detail);
        setPhase("quiz");
        return;
      }

      // 503 or anything unexpected — the mirror already has the lead.
      await mirror;
      setPhase("mirror-success");
    } catch {
      // Network failure — the mirror already has the lead.
      await mirror;
      setPhase("mirror-success");
    }
  };

  const handleVerify = async (submittedCode?: string) => {
    const finalCode = (submittedCode ?? code).trim();
    if (!leadId || finalCode.length !== 6) return;
    setPhase("verifying");
    setApiError(null);
    try {
      const res = await fetch(`${API_BASE}/verify`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ lead_id: leadId, code: finalCode }),
      });
      if (res.ok) {
        pushDataLayer("funnel_verified", { lead_id: leadId });
        setPhase("success");
        return;
      }
      let detail = "That code didn't work. Check your texts and try again.";
      if (res.status === 429) {
        detail = "Too many attempts. Wait a minute, then try again.";
      } else {
        try {
          const data = await res.json();
          if (data?.detail) detail = String(data.detail);
        } catch {
          // keep default message
        }
      }
      setApiError(detail);
      setCode("");
      setPhase("verify");
    } catch {
      setApiError("Couldn't reach the server. Check your connection and try again.");
      setPhase("verify");
    }
  };

  const next = () => {
    if (!validateStep()) return;
    if (step < TOTAL_STEPS - 1) {
      setStep(step + 1);
    } else {
      handleSubmit();
    }
  };

  const back = () => {
    setStepError(null);
    setApiError(null);
    if (step > 0) setStep(step - 1);
  };

  const stepMeta = [
    { icon: Building2, title: "What's your business called?", hint: "Exactly how customers know you." },
    { icon: Wrench, title: "What do you do?", hint: "Pick one or type your own." },
    { icon: MapPin, title: "Where do you work?", hint: "The AI researches your local market before it builds." },
    { icon: Sparkles, title: "What services should the site push?", hint: "Optional — the AI finds the rest during research." },
    { icon: Globe, title: "Do you have a website today?", hint: "Optional — if you do, the AI studies it and builds you a better one." },
    { icon: Smartphone, title: "Where do we text your website link?", hint: "The AI builds your site and texts you the live link." },
  ];

  const StepIcon = stepMeta[Math.min(step, TOTAL_STEPS - 1)].icon;

  /* ---------- terminal screens ---------- */

  if (phase === "success" || phase === "mirror-success") {
    return (
      <div className="glass-strong rounded-2xl p-6 lg:p-10 text-center relative overflow-hidden">
        <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-64 h-64 bg-primary/15 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 space-y-4">
          <div className="mx-auto w-16 h-16 rounded-2xl bg-green-500/15 border border-green-500/30 flex items-center justify-center">
            <MessageSquare className="w-8 h-8 text-green-400" />
          </div>
          {phase === "success" ? (
            <>
              <h3 className="font-orbitron font-black text-xl lg:text-2xl text-foreground">
                📲 Watch your texts — your website is being built right now.
              </h3>
              <p className="text-sm lg:text-base text-muted-foreground max-w-md mx-auto">
                It'll arrive as a link in a few minutes. The AI is researching {form.city || "your city"}, planning your pages, and putting {form.business_name || "your business"} online.
              </p>
              {previewUrl && (
                <a
                  href={previewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-red-500/10 border border-red-500/30 text-white font-bold text-sm font-orbitron hover:bg-red-500/20 hover:border-red-500/50 transition-all duration-300"
                >
                  <Globe className="w-4 h-4 text-red-400" />
                  Your website is live — see it now
                  <ArrowRight className="w-4 h-4" />
                </a>
              )}
            </>
          ) : (
            <>
              <h3 className="font-orbitron font-black text-xl lg:text-2xl text-foreground">
                Got it — we'll text you shortly.
              </h3>
              <p className="text-sm lg:text-base text-muted-foreground max-w-md mx-auto">
                Your info is in. We'll text {form.phone || "your number"} with your website link as soon as it's ready.
              </p>
            </>
          )}
          <div className="pt-2">
            <a
              href={PORTAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors font-orbitron"
            >
              Open the portal
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    );
  }

  if (phase === "verify" || phase === "verifying") {
    return (
      <div className="glass-strong rounded-2xl p-6 lg:p-10 relative overflow-hidden">
        <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-64 h-64 bg-primary/15 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-sm mx-auto text-center space-y-4">
          <div className="mx-auto w-14 h-14 rounded-2xl bg-red-500/15 border border-red-500/30 flex items-center justify-center">
            <Smartphone className="w-7 h-7 text-red-400" />
          </div>
          <h3 className="font-orbitron font-black text-lg lg:text-xl text-foreground">Check your texts</h3>
          <p className="text-sm text-muted-foreground">
            We sent a 6-digit code to <span className="text-foreground font-bold">{form.phone}</span>. Enter it to start your build.
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleVerify();
            }}
            className="space-y-3"
          >
            <input
              type="text"
              inputMode="numeric"
              autoComplete="one-time-code"
              maxLength={6}
              value={code}
              onChange={(e) => {
                const clean = e.target.value.replace(/\D/g, "").slice(0, 6);
                setCode(clean);
                setApiError(null);
                if (clean.length === 6 && phase === "verify") handleVerify(clean);
              }}
              placeholder="••••••"
              disabled={phase === "verifying"}
              className="w-full h-14 rounded-xl bg-white/5 border border-white/15 text-center text-2xl tracking-[0.5em] font-orbitron text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-red-500/50 transition-colors disabled:opacity-60"
            />
            {apiError && <p className="text-xs text-red-400">{apiError}</p>}
            <button
              type="submit"
              disabled={phase === "verifying" || code.length !== 6}
              className="w-full px-6 py-3.5 rounded-xl bg-red-500/10 border-2 border-red-500/30 text-white font-bold text-sm font-orbitron hover:bg-red-500/20 hover:border-red-500/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {phase === "verifying" ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Verifying…
                </>
              ) : (
                <>
                  Verify & start my build
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
          <p className="text-[11px] text-muted-foreground">
            Didn't get it? Double-check the number, or text us at{" "}
            <a href="sms:773-572-4686" className="text-red-400 hover:underline">
              (773) 572-4686
            </a>
            .
          </p>
        </div>
      </div>
    );
  }

  /* ---------- the 6-step quiz ---------- */

  return (
    <div className="glass-strong rounded-2xl p-5 lg:p-8 relative overflow-hidden">
      <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="relative z-10">
        {/* Step dots */}
        <div className="flex items-center justify-center gap-2 mb-6">
          {Array.from({ length: TOTAL_STEPS }).map((_, i) => (
            <div
              key={i}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === step ? "w-8 bg-primary glow-red" : i < step ? "w-4 bg-primary/60" : "w-4 bg-white/10"
              }`}
            />
          ))}
        </div>

        <div className="flex items-start gap-3 mb-5">
          <div className="w-10 h-10 rounded-xl bg-red-500/15 border border-red-500/30 flex items-center justify-center shrink-0">
            <StepIcon className="w-5 h-5 text-red-400" />
          </div>
          <div>
            <h3 className="font-orbitron font-bold text-base lg:text-lg text-foreground leading-snug">
              {stepMeta[step].title}
            </h3>
            <p className="text-xs text-muted-foreground mt-0.5">{stepMeta[step].hint}</p>
          </div>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            next();
          }}
          className="space-y-3"
        >
          {/* Honeypot — hidden from humans, always sent */}
          <input
            type="text"
            name="company_website_url"
            value={form.hp}
            onChange={(e) => setForm((f) => ({ ...f, hp: e.target.value }))}
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            className="absolute -left-[9999px] top-0 h-0 w-0 opacity-0"
          />

          {step === 0 && (
            <input
              type="text"
              value={form.business_name}
              onChange={(e) => set("business_name")(e.target.value)}
              placeholder="e.g. Off-Tint, KleanAF, LTS Mechanical…"
              autoFocus
              className={inputClass}
            />
          )}

          {step === 1 && (
            <>
              <div className="flex flex-wrap gap-2">
                {INDUSTRY_CHIPS.map((chip) => (
                  <button
                    key={chip}
                    type="button"
                    onClick={() => set("industry")(chip)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-orbitron border transition-all duration-200 ${
                      form.industry === chip
                        ? "bg-red-500/20 border-red-500/50 text-white"
                        : "bg-white/5 border-white/10 text-muted-foreground hover:border-red-500/30 hover:text-foreground"
                    }`}
                  >
                    {chip}
                  </button>
                ))}
              </div>
              <input
                type="text"
                value={form.industry}
                onChange={(e) => set("industry")(e.target.value)}
                placeholder="Or type it — e.g. mobile mechanic, dog grooming…"
                className={inputClass}
              />
            </>
          )}

          {step === 2 && (
            <>
              <input
                type="text"
                value={form.street}
                onChange={(e) => set("street")(e.target.value)}
                placeholder="Street address (optional)"
                autoComplete="street-address"
                className={inputClass}
              />
              <div className="grid grid-cols-[1fr_auto_auto] gap-2">
                <input
                  type="text"
                  value={form.city}
                  onChange={(e) => set("city")(e.target.value)}
                  placeholder="City *"
                  autoComplete="address-level2"
                  autoFocus
                  className={inputClass}
                />
                <select
                  value={form.region}
                  onChange={(e) => set("region")(e.target.value)}
                  autoComplete="address-level1"
                  className="h-11 px-3 rounded-xl bg-white/5 border border-white/15 text-sm focus:outline-none focus:border-red-500/50 transition-colors text-foreground [&>option]:bg-background"
                  style={{ color: form.region ? undefined : "hsl(0 0% 65% / 0.6)" }}
                >
                  <option value="" disabled>
                    State *
                  </option>
                  {US_STATES.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
                <input
                  type="text"
                  value={form.postal}
                  onChange={(e) => set("postal")(e.target.value)}
                  placeholder="ZIP"
                  autoComplete="postal-code"
                  className={`${inputClass} w-20 px-2 text-center`}
                />
              </div>
            </>
          )}

          {step === 3 && (
            <>
              <input
                type="text"
                value={form.services}
                onChange={(e) => set("services")(e.target.value)}
                placeholder="e.g. brake repair, oil changes, fleet service"
                autoFocus
                className={inputClass}
              />
              <p className="text-[11px] text-muted-foreground">Separate with commas. Or skip — the AI finds them.</p>
            </>
          )}

          {step === 4 && (
            <>
              <input
                type="url"
                value={form.website}
                onChange={(e) => set("website")(e.target.value)}
                placeholder="https://yourcurrentsite.com (optional)"
                autoFocus
                className={inputClass}
              />
              <p className="text-[11px] text-muted-foreground">No website? Perfect — that's what we're here for. Just hit continue.</p>
            </>
          )}

          {step === 5 && (
            <>
              <input
                type="tel"
                value={form.phone}
                onChange={(e) => set("phone")(e.target.value)}
                placeholder="Your mobile number *"
                autoComplete="tel"
                autoFocus
                className={inputClass}
              />
              <input
                type="email"
                value={form.email}
                onChange={(e) => set("email")(e.target.value)}
                placeholder="Email (optional)"
                autoComplete="email"
                className={inputClass}
              />
              <p className="text-[11px] text-muted-foreground leading-relaxed">
                We'll text your website link to this number. Msg rates may apply.
              </p>
            </>
          )}

          {stepError && <p className="text-xs text-red-400">{stepError}</p>}
          {apiError && <p className="text-xs text-red-400">{apiError}</p>}

          <div className="flex items-center gap-3 pt-1">
            {step > 0 && (
              <button
                type="button"
                onClick={back}
                className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-muted-foreground hover:text-foreground hover:bg-white/10 transition-all duration-300"
                aria-label="Back"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
            )}
            <button
              type="submit"
              disabled={phase === "submitting"}
              className="group flex-1 px-6 py-3.5 rounded-xl bg-red-500/10 backdrop-blur-md border-2 border-red-500/40 text-white font-bold text-sm shadow-lg shadow-red-500/20 hover:shadow-red-500/30 hover:bg-red-500/20 hover:border-red-500/50 transition-all duration-300 font-orbitron flex items-center justify-center gap-2 relative overflow-hidden disabled:opacity-60 disabled:cursor-not-allowed"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/0 via-red-500/10 to-red-500/0 group-hover:from-red-500/10 group-hover:via-red-500/20 group-hover:to-red-500/10 transition-all duration-500" />
              {phase === "submitting" ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin relative z-10" />
                  <span className="relative z-10">Sending…</span>
                </>
              ) : step === TOTAL_STEPS - 1 ? (
                <>
                  <MessageSquare className="w-4 h-4 text-red-400 relative z-10" />
                  <span className="relative z-10">Build my free website</span>
                </>
              ) : (
                <>
                  <span className="relative z-10">Continue</span>
                  <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </div>
        </form>

        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 mt-4 pt-3 border-t border-white/5">
          {["100% free build", "See it live before paying", "No credit card"].map((item) => (
            <div key={item} className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
              <CheckCircle2 className="w-3 h-3 text-green-400" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FreeWebsiteQuiz;
