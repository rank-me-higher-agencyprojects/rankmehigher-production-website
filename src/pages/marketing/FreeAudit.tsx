import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import MarketingLayout, { PageHero, Section, Bullets } from "@/components/marketing/MarketingLayout";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { notifyLead } from "@/lib/lead-notify";

const EMPTY = { name: "", business: "", website: "", phone: "", email: "", trade: "", city: "", message: "", hp: "" };

const input = "h-11 w-full rounded-lg border border-white/10 bg-white/[0.03] px-3 text-sm text-foreground placeholder:text-white/30 focus:border-primary/50 focus:outline-none";

const FreeAudit = () => {
  const [form, setForm] = useState(EMPTY);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const { toast } = useToast();

  const set = (k: keyof typeof EMPTY) => (e: { target: { value: string } }) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    setSending(true);
    try {
      const { error } = await supabase.from("website_submissions").insert({
        company_name: form.business || form.name,
        business_email: form.email,
        form_data: {
          type: "website_audit",
          name: form.name,
          phone: form.phone,
          website: form.website,
          trade: form.trade,
          city: form.city,
          message: form.message,
          source: "/free-website-audit/",
          submittedAt: new Date().toISOString(),
        },
      });
      if (error) throw error;
      const note = [form.trade.trim() && `Trade: ${form.trade.trim()}`, form.message.trim()].filter(Boolean).join(" — ");
      notifyLead({
        type: "website_audit",
        name: form.name,
        business: form.business,
        phone: form.phone,
        email: form.email,
        website: form.website,
        city: form.city,
        message: note,
        hp: form.hp,
      });
      setSent(true);
      setForm(EMPTY);
    } catch {
      toast({ title: "Something went wrong", description: "Please try again, or text us instead.", variant: "destructive" });
    } finally {
      setSending(false);
    }
  };

  return (
    <MarketingLayout
      path="/free-website-audit/"
      title="Free Website Audit for Contractors | Rank Me Higher"
      description="Get a free audit of your current website: mobile, speed, local SEO and how easy it is to call or text you. For Chicagoland contractors and local businesses."
      crumbs={[{ name: "Free website audit", path: "/free-website-audit/" }]}
      robots="noindex, nofollow"
    >
      <PageHero
        eyebrow="Free audit · No obligation"
        h1="Free website audit for your business"
        sub="Already have a website? Send it over and we'll review it and send you what's holding it back. No cost and no obligation."
      />

      <section className="mx-auto max-w-content px-6 pb-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <h2 className="font-heading text-2xl font-bold text-foreground">What we look at</h2>
            <div className="mt-4 text-white/65">
              <Bullets
                items={[
                  "How it looks and works on a phone, where most local customers find you",
                  "Page speed and whether visitors bounce before it loads",
                  "Local SEO basics: titles, service pages, service areas, schema",
                  "How easy it is to call, text or request a quote",
                  "Whether your Google Business Profile and website tell the same story",
                ]}
              />
            </div>
            <p className="mt-6 text-sm text-white/55">
              Prefer to skip the audit? <Link to="/#free-website" className="text-primary underline underline-offset-4">Have the AI build you a new site free</Link> and compare.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="sms:773-572-4686" className="btn-cta-ghost" aria-label="Text us at (773) 572-4686 (SMS only)">
                Text us instead
              </a>
            </div>
          </div>

          <div className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-6">
            {sent ? (
              <div role="status">
                <h2 className="font-heading text-xl font-bold text-foreground">Got it, thanks.</h2>
                <p className="mt-2 text-white/60">We'll review your site and get back to you. If it's urgent, text us.</p>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-4">
                <h2 className="font-heading text-xl font-bold text-foreground">Request your free audit</h2>
                <input
                  type="text"
                  name="company_website_url"
                  value={form.hp}
                  onChange={set("hp")}
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  className="absolute -left-[9999px] top-0 h-0 w-0 opacity-0"
                />
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="text-xs text-white/50">Your name<input required className={input} value={form.name} onChange={set("name")} autoComplete="name" /></label>
                  <label className="text-xs text-white/50">Business name<input required className={input} value={form.business} onChange={set("business")} autoComplete="organization" /></label>
                </div>
                <label className="block text-xs text-white/50">Current website<input required className={input} value={form.website} onChange={set("website")} placeholder="yourbusiness.com" inputMode="url" /></label>
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="text-xs text-white/50">Mobile phone<input required type="tel" className={input} value={form.phone} onChange={set("phone")} autoComplete="tel" /></label>
                  <label className="text-xs text-white/50">Email<input required type="email" className={input} value={form.email} onChange={set("email")} autoComplete="email" /></label>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="text-xs text-white/50">Trade<input className={input} value={form.trade} onChange={set("trade")} placeholder="Roofing, HVAC, truck repair…" /></label>
                  <label className="text-xs text-white/50">City<input className={input} value={form.city} onChange={set("city")} placeholder="Lockport" /></label>
                </div>
                <label className="block text-xs text-white/50">Anything else? (optional)<textarea className={`${input} h-24 py-2`} value={form.message} onChange={set("message")} /></label>
                <button type="submit" disabled={sending} className="btn-cta-primary w-full">
                  {sending ? "Sending…" : "Get my free audit"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <Section title="Who this is for">
        <p className="max-w-3xl leading-relaxed">
          Contractors and local service businesses in Chicagoland that already have a site but aren't sure it's pulling its weight: roofers,
          plumbers, HVAC, truck repair shops and similar trades. See <Link to="/services/websites/" className="text-primary underline underline-offset-4">sites we build</Link> and{" "}
          <Link to="/#pricing" className="text-primary underline underline-offset-4">pricing</Link>.
        </p>
      </Section>
    </MarketingLayout>
  );
};

export default FreeAudit;
