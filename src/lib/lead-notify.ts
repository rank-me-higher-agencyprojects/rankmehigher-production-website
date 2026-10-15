export type LeadNotifyType = "website_audit" | "contact_form" | "free_website_funnel";

export type LeadNotifyInput = {
  type: LeadNotifyType;
  name?: string;
  business?: string;
  phone?: string;
  email?: string;
  website?: string;
  city?: string;
  message?: string;
  /** Honeypot. Humans leave this empty. */
  hp?: string;
};

/**
 * Ask the Express server to alert Telegram. The bot token never leaves the server.
 * Failures are ignored so a missed alert cannot block the form the visitor already submitted.
 */
export function notifyLead(lead: LeadNotifyInput): void {
  const payload = {
    type: lead.type,
    name: lead.name?.trim() || "",
    business: lead.business?.trim() || "",
    phone: lead.phone?.trim() || "",
    email: lead.email?.trim() || "",
    website: lead.website?.trim() || "",
    city: lead.city?.trim() || "",
    message: lead.message?.trim() || "",
    hp: lead.hp || "",
  };

  void fetch("/api/lead-notify", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
    keepalive: true,
  }).catch(() => {
    // The lead is already stored. Delivery problems stay on the server.
  });
}
