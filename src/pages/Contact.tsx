import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Send, 
  ArrowRight
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { notifyLead } from "@/lib/lead-notify";
import { FREE_WEBSITE_HREF } from "@/lib/marketing-data";

const PAGE_TITLE = "Contact Rank Me Higher | Chicago & Mundelein";
const PAGE_DESCRIPTION = "Text (773) 572-4686 or send a message. Rank Me Higher helps contractors from Chicago and Mundelein with websites, local SEO, and Google Business Profile.";

const FAQ = [
  {
    q: "Do I need a sales call before the site is built?",
    a: "No. There is no sales call. The homepage quiz is the brief for the build. You do not have to write the pages yourself.",
  },
  {
    q: "What if I already have a website?",
    a: "The AI studies what you have and builds a faster site, then your domain moves over when you are ready. There is no downtime, and there is nothing for you to migrate yourself.",
  },
  {
    q: "Can I call the number on this page?",
    a: "No. The number on this page is SMS only. Send a text, or use the form.",
  },
  {
    q: "Can I meet you at an office?",
    a: "Yes. Downtown Chicago and Mundelein, IL.",
  },
  {
    q: "Who owns the website after it goes live?",
    a: "You do. Your business, your content, your photos, and your domain. If you ever leave, your domain and your content go with you.",
  },
  {
    q: "Do you only take clients in Chicago?",
    a: "No. The pages are written for Chicagoland contractors and trades, and Rank Me Higher serves local businesses across the United States.",
  },
];

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    service: 'general',
    hp: ''
  });
  const { toast } = useToast();

  const services = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'website', label: 'Custom Website Development' },
    { value: 'seo', label: 'SEO & Local Rankings' },
    { value: 'google-maps', label: 'Google Maps Optimization' },
    { value: 'marketing', label: 'Digital Marketing' },
    { value: 'support', label: 'Existing Client Support' },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('website_submissions')
        .insert({
          company_name: formData.company || formData.name,
          business_email: formData.email,
          form_data: {
            type: 'contact_form',
            name: formData.name,
            phone: formData.phone,
            message: formData.message,
            service: formData.service,
            submittedAt: new Date().toISOString()
          }
        });

      if (error) throw error;

      const serviceLabel = services.find((service) => service.value === formData.service)?.label;
      notifyLead({
        type: 'contact_form',
        name: formData.name,
        business: formData.company,
        phone: formData.phone,
        email: formData.email,
        message: serviceLabel && formData.service !== 'general'
          ? `${serviceLabel} — ${formData.message}`
          : formData.message,
        hp: formData.hp,
      });

      toast({
        title: "Message Sent!",
        description: "We'll get back to you within 24 hours.",
      });

      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
        service: 'general',
        hp: ''
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again or text us.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const offices = [
    {
      name: "Chicago Downtown Office",
      address: "Chicago, IL",
      mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d762316.5313005082!2d-88.20843849055156!3d41.72485702770512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2d4ccadc9941%3A0xd064f8a30b6e0311!2sRank%20Me%20Higher%20%7C%20Local%20Map%20Booster!5e0!3m2!1sen!2sus!4v1767342975149!5m2!1sen!2sus"
    },
    {
      name: "Mundelein, IL Office",
      address: "Mundelein, IL",
      mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d762316.5313005082!2d-88.20843849055156!3d41.72485702770512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880f97124a6673d1%3A0xc46cda5f1037977e!2sRank%20Me%20Higher!5e0!3m2!1sen!2sus!4v1767342994418!5m2!1sen!2sus"
    }
  ];

  return (
    <>
      <Helmet>
        <title>{PAGE_TITLE}</title>
        <meta name="description" content={PAGE_DESCRIPTION} />
        <meta name="keywords" content="Rank Me Higher contact, web design Chicago, marketing agency Mundelein, contractor website, local SEO, Google Business Profile" />
        <meta property="og:title" content={PAGE_TITLE} />
        <meta property="og:description" content={PAGE_DESCRIPTION} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://rankmehigher.com/contact/" />
        <meta property="og:site_name" content="Rank Me Higher" />
        <meta property="og:image" content="https://rankmehigher.com/assets/logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={PAGE_TITLE} />
        <meta name="twitter:description" content={PAGE_DESCRIPTION} />
        <link rel="canonical" href="https://rankmehigher.com/contact/" />
        
        {/* Local Business Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Rank Me Higher",
            "image": "https://rankmehigher.com/assets/logo.png",
            "telephone": "(773) 572-4686",
            "email": "business@rankmehigher.com",
            "address": [
              {
                "@type": "PostalAddress",
                "addressLocality": "Chicago",
                "addressRegion": "IL",
                "addressCountry": "US"
              },
              {
                "@type": "PostalAddress",
                "addressLocality": "Mundelein",
                "addressRegion": "IL",
                "addressCountry": "US"
              }
            ],
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 41.8781,
              "longitude": -87.6298
            },
            "url": "https://rankmehigher.com",
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              "opens": "09:00",
              "closes": "18:00"
            },
            "priceRange": "$$",
            "sameAs": [
              "https://www.facebook.com/rankmehigherseo",
              "https://instagram.com/rankmehigherseo",
              "https://www.tiktok.com/@rankmehigher",
              "https://agencies.semrush.com/rank-me-higher/"
            ]
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: FAQ.map((item) => ({
              "@type": "Question",
              name: item.q,
              acceptedAnswer: { "@type": "Answer", text: item.a },
            })),
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background relative overflow-hidden">
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-3xl animate-float-delayed" />
        </div>

        <Navbar />

        <section className="relative pt-28 pb-12 overflow-hidden">
          <div className="container mx-auto px-4 lg:px-8 max-w-6xl relative z-10">
            <div className="text-center mb-10">
              <h1 className="font-orbitron font-black text-4xl md:text-5xl text-foreground mb-3 leading-tight">
                Contact{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-red-500 to-primary">
                  Rank Me Higher
                </span>
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Websites, local SEO, Google Business Profile, and Google Ads for contractors and local trades. Text us or send a message.
              </p>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                <a href={FREE_WEBSITE_HREF} className="btn-cta-primary">
                  Get my free website
                </a>
                <a href="#text-us" className="btn-cta-ghost">
                  Text us
                </a>
              </div>
            </div>

            <div className="grid lg:grid-cols-5 gap-8">
              <div className="lg:col-span-3">
                <div className="p-6 md:p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10">
                  <h2 className="font-orbitron font-bold text-lg text-foreground mb-1">Send A Message</h2>
                  <p className="text-sm text-muted-foreground mb-6">Fill out the form below and we'll get back to you within 24 hours.</p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                      type="text"
                      name="company_website_url"
                      value={formData.hp}
                      onChange={(e) => setFormData({ ...formData, hp: e.target.value })}
                      tabIndex={-1}
                      autoComplete="off"
                      aria-hidden="true"
                      className="absolute -left-[9999px] top-0 h-0 w-0 opacity-0"
                    />
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <Label htmlFor="name" className="font-orbitron text-xs">Name *</Label>
                        <Input
                          id="name"
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="John Smith"
                          required
                          className="bg-white/5 border-white/10 focus:border-primary/40 focus-visible:ring-0 focus-visible:ring-offset-0"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <Label htmlFor="email" className="font-orbitron text-xs">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="your@email.com"
                          required
                          className="bg-white/5 border-white/10 focus:border-primary/40 focus-visible:ring-0 focus-visible:ring-offset-0"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <Label htmlFor="phone" className="font-orbitron text-xs">Phone</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="(555) 123-4567"
                          className="bg-white/5 border-white/10 focus:border-primary/40 focus-visible:ring-0 focus-visible:ring-offset-0"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <Label htmlFor="service" className="font-orbitron text-xs">Service</Label>
                        <select
                          id="service"
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full h-10 px-3 rounded-md bg-white/5 border border-white/10 text-foreground text-sm focus:border-primary/40 focus:outline-none"
                        >
                          {services.map((service) => (
                            <option key={service.value} value={service.value} className="bg-background">
                              {service.label}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="message" className="font-orbitron text-xs">Project Details *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your project and goals..."
                        rows={4}
                        required
                        className="bg-white/5 border-white/10 focus:border-primary/40 focus-visible:ring-0 focus-visible:ring-offset-0 resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group w-full px-6 py-3.5 rounded-xl bg-red-500/15 backdrop-blur-md border border-red-500/30 text-white font-bold text-sm shadow-lg hover:bg-red-500/25 hover:border-red-500/50 hover:shadow-xl hover:shadow-red-500/20 hover:scale-[1.01] transition-all duration-300 font-orbitron disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-red-500/0 via-red-500/10 to-red-500/0 group-hover:from-red-500/10 group-hover:via-red-500/20 group-hover:to-red-500/10 transition-all duration-500" />
                      <div className="relative flex items-center justify-center gap-2">
                        <Send className="w-4 h-4 text-red-400" />
                        <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                        {!isSubmitting && <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
                      </div>
                    </button>
                  </form>
                </div>
              </div>

              <div className="lg:col-span-2 space-y-4">
                <a id="text-us" href="sms:773-572-4686" className="flex scroll-mt-28 items-start gap-4 p-5 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-primary/40 transition-all group">
                  <div className="w-10 h-10 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-orbitron font-bold text-foreground text-sm">Text us</p>
                    <p className="font-orbitron font-bold text-foreground text-sm">(773) 572-4686 <span className="text-xs text-primary/70 ml-1">SMS Only</span></p>
                    <p className="text-xs text-muted-foreground">Mon-Fri, 9am - 6pm CST</p>
                  </div>
                </a>

                <a href="mailto:business@rankmehigher.com" className="flex items-start gap-4 p-5 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-primary/40 transition-all group">
                  <div className="w-10 h-10 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-orbitron font-bold text-foreground text-sm">business@rankmehigher.com</p>
                    <p className="text-xs text-muted-foreground">For general inquiries</p>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-5 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10">
                  <div className="w-10 h-10 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-orbitron font-bold text-foreground text-sm">Chicago & Mundelein, IL</p>
                    <p className="text-xs text-muted-foreground">Two locations to serve you</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 relative z-10 border-t border-white/10">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <h2 className="font-orbitron font-bold text-2xl text-foreground mb-6">What happens after you reach out</h2>
            <ol className="space-y-5 text-muted-foreground">
              <li className="leading-relaxed">
                <h3 className="font-orbitron text-sm font-bold text-foreground">Send a message or text</h3>
                <p className="mt-1">
                  Use the form when you have a question. Text us when a text is easier. Say whether you are asking about a website, local SEO, a Google Business Profile, or Google Ads. A website question can start with the{" "}
                  <a href={FREE_WEBSITE_HREF} className="text-primary underline underline-offset-4">free website quiz</a>{" "}
                  instead of the form.
                </p>
              </li>
              <li className="leading-relaxed">
                <h3 className="font-orbitron text-sm font-bold text-foreground">Or start the free build</h3>
                <p className="mt-1">
                  The homepage quiz asks six questions: your business name, what you do, and where you work. The homepage describes that quiz as 60 seconds. That quiz is the brief.
                </p>
              </li>
              <li className="leading-relaxed">
                <h3 className="font-orbitron text-sm font-bold text-foreground">The AI builds the preview</h3>
                <p className="mt-1">
                  The AI studies your market and competitors, plans the pages, and builds the site in minutes. Real business photos are used where you have them. Where a photo is missing, the gap is filled with natural AI imagery that matches the trade. Progress is texted to you. The live preview link arrives by text. You see the whole site before you pay anything. There is no card required for the preview.
                </p>
              </li>
              <li className="leading-relaxed">
                <h3 className="font-orbitron text-sm font-bold text-foreground">You go live only if you claim it</h3>
                <p className="mt-1">
                  You pay when you claim the site and put it on your domain. The domain is connected, hosting and SSL are handled, and the portal opens. Lead capture on the live site delivers by text and email.
                </p>
              </li>
            </ol>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              The 24-hour line on the form applies to a message a person has to read. The quiz does not wait on that reply.
            </p>
          </div>
        </section>

        <section className="py-12 relative z-10 border-t border-white/10">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <h2 className="font-orbitron font-bold text-2xl text-foreground mb-4">What to have ready</h2>
            <p className="text-muted-foreground leading-relaxed">
              Bring these to the quiz or put them in the message so the first pass is about the business.
            </p>
            <ul className="mt-4 space-y-2 text-muted-foreground">
              <li>Business name</li>
              <li>Trade</li>
              <li>Towns you serve</li>
              <li>Current website, if you have one</li>
            </ul>
          </div>
        </section>

        <section className="py-12 relative z-10 border-t border-white/10">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <h2 className="font-orbitron font-bold text-2xl text-foreground mb-6">How those details are used</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                A page that names a service you do not offer, or a town you will not go to, disagrees with the business. Hours on the site should be the hours a customer would find if they drove over. A later hours change is a chat edit. One request already used as the example is to change the hours to 7 to 5 and add Saturday mornings.
              </p>
              <p>
                People write when a website was built years ago and never updated, when a web designer quoted thousands of dollars and months of waiting, or when a small edit means emailing someone and waiting. After the free build, the next change is a sentence in the portal. A DIY builder means you learn that builder and do the work yourself. Chat editing is included with the website plan.
              </p>
              <p>
                Existing clients sign in at websites.rankmehigher.com for those edits. The form includes Existing Client Support for a question from a current client.
              </p>
              <p>
                Some things you might ask for are labeled Soon. Rankings in the portal, a task request such as adding a page for spring specials, automatic Google Business Profile optimization, review generation, a dedicated business phone number, and branded email are on the roadmap and are not automated in the portal yet.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 relative z-10 border-t border-white/10">
          <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-6">
              <article className="rounded-2xl bg-white/5 backdrop-blur-md border border-red-500/30 overflow-hidden shadow-[0_0_20px_rgba(239,68,68,0.15),0_0_40px_rgba(239,68,68,0.05)]">
                <div className="aspect-[16/9] w-full">
                  <iframe
                    src={offices[0].mapSrc}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Chicago Downtown Office"
                    className="w-full h-full"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 text-primary shrink-0 mt-1" />
                      <div>
                        <h2 className="font-orbitron font-bold text-sm text-foreground">Chicago Downtown Office</h2>
                        <p className="text-xs text-muted-foreground">Chicago, IL</p>
                      </div>
                    </div>
                    <a
                      href="https://www.google.com/maps/search/Rank+Me+Higher+Chicago,+IL"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary font-bold text-xs font-orbitron flex items-center gap-1 hover:gap-2 transition-all"
                    >
                      Directions <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                  <div className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
                    <p>
                      The street address published for this office is 1 N State St Ste 1515, Chicago, IL 60602. The Google listing on the map uses the name Rank Me Higher | Local Map Booster. Rank Me Higher has been in business since 2024.
                    </p>
                    <p>
                      Andrius Pletniovas, also known as Andrius Digital, is the founder. He is a Chicago-area entrepreneur and also founded CDL Agency. The work connects business websites, digital marketing, and the systems a team uses to follow up with leads. Contractors who want to meet in person use this downtown office.
                    </p>
                  </div>
                </div>
              </article>

              <article className="rounded-2xl bg-white/5 backdrop-blur-md border border-red-500/30 overflow-hidden shadow-[0_0_20px_rgba(239,68,68,0.15),0_0_40px_rgba(239,68,68,0.05)]">
                <div className="aspect-[16/9] w-full">
                  <iframe
                    src={offices[1].mapSrc}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Mundelein, IL Office"
                    className="w-full h-full"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 text-primary shrink-0 mt-1" />
                      <div>
                        <h2 className="font-orbitron font-bold text-sm text-foreground">Mundelein, IL Office</h2>
                        <p className="text-xs text-muted-foreground">Mundelein, IL</p>
                      </div>
                    </div>
                    <a
                      href="https://www.google.com/maps/search/Rank+Me+Higher+Mundelein,+IL"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary font-bold text-xs font-orbitron flex items-center gap-1 hover:gap-2 transition-all"
                    >
                      Directions <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                  <div className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
                    <p>
                      The address for this office is Mundelein, IL. The Google listing on the map uses the name Rank Me Higher. This is a company office. It is not a shop we built a site for.
                    </p>
                    <p>
                      Truck Clinic's yard is in Romeoville. That is a different address. We build the website for the shop, and the yard stays the shop's. A business looking for that town, rather than this office, wants the Romeoville page. Romeoville sits on I-55, with logistics, warehousing, and truck service. The page covers neighboring towns a shop there may also serve, such as Bolingbrook, Lockport, and Plainfield. Those towns are a client's service area, not more Rank Me Higher offices.
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="py-12 relative z-10 border-t border-white/10">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <h2 className="font-orbitron font-bold text-2xl text-foreground mb-6">Who we work with</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                The trades named for this work are roofers, plumbers, HVAC companies, and truck repair shops in Chicagoland. Someone searching for that work is usually nearby and deciding who to call. They look for the service, the town, the hours, and a way to send the job.
              </p>
              <p>
                Shops that repair commercial trucks can read{" "}
                <Link to="/websites-for/truck-repair/" className="text-primary underline underline-offset-4">websites for truck and diesel repair shops</Link>.
                Truck Clinic, a commercial truck repair shop in Romeoville, is a published client site. The shop's own site describes diesel engines, brakes, DPF cleaning, DOT inspections, trailer repair, and fleet maintenance.
              </p>
              <p>
                QTA Tax is an Oak Brook firm of IRS Enrolled Agents. The firm does tax preparation, tax planning, bookkeeping, payroll, and IRS representation for individuals and businesses. A local firm that is not a contractor can still start the same way.
              </p>
              <p>
                The town page on the site is{" "}
                <Link to="/locations/romeoville-il/" className="text-primary underline underline-offset-4">Romeoville, IL</Link>.
                Other published client sites include a cleaning company in San Diego, a PPF and tinting shop in Lisle, trucking companies in Chicago, a Chicago maid service, a Chicago video production company, a storage yard in Phoenix, and a truck repair shop in Lockport. If your trade or town does not have a page here yet, the form still takes the message.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 relative z-10 border-t border-white/10">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <h2 className="font-orbitron font-bold text-2xl text-foreground mb-6">What you can ask us about</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                <strong className="text-foreground">A website.</strong> The{" "}
                <Link to="/services/websites/" className="text-primary underline underline-offset-4">AI website builder for contractors</Link>{" "}
                ships a local-SEO-correct site: the same name, address, and phone, JSON-LD schema, honest hours, and pages for the services and the cities you serve. Pages are built lean so they load on a phone, which is where a local search usually happens.
              </p>
              <p>
                <strong className="text-foreground">Edits after the site is up.</strong> The{" "}
                <Link to="/ai-website-editor/" className="text-primary underline underline-offset-4">AI website editor</Link>{" "}
                is a chat. Click a section, say the change in plain words, and the edit is saved as a version you can revert.
              </p>
              <p>
                <strong className="text-foreground">Local SEO.</strong>{" "}
                <Link to="/services/seo/" className="text-primary underline underline-offset-4">Local SEO services</Link>{" "}
                on this platform are the on-site checklist in the first build, not a monthly SEO retainer. Rank Me Higher does not guarantee a map position, a page-one placement, or a number of leads. A map position and a page-one placement are different results.
              </p>
              <p>
                <strong className="text-foreground">Google Business Profile.</strong> The listing is the other half of local search. The website is the half above.{" "}
                <Link to="/localmapbooster/" className="text-primary underline underline-offset-4">Google Business Profile optimization</Link>{" "}
                is the profile work.
              </p>
              <p>
                <strong className="text-foreground">Google Ads.</strong>{" "}
                <Link to="/services/google-ads/" className="text-primary underline underline-offset-4">Google Ads for local businesses</Link>{" "}
                are a supporting layer for businesses on the platform. The website is built first, so the click has a page to land on. We run Google campaigns for those businesses. Ad spend goes directly to Google. If you want ads, say whether a site already exists.
              </p>
              <p>
                <strong className="text-foreground">Plans.</strong> Plans start at $99/mo for the website. $149/mo adds Google Business Profile optimization. $199/mo adds a review generator. There are no contracts and no setup fees. What each plan includes is on{" "}
                <Link to="/pricing/" className="text-primary underline underline-offset-4">plans and pricing</Link>.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 relative z-10 border-t border-white/10">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <h2 className="font-orbitron font-bold text-2xl text-foreground mb-6">Frequently asked questions</h2>
            <dl className="space-y-6 text-muted-foreground">
              {FAQ.map((item) => (
                <div key={item.q}>
                  <dt className="font-medium text-foreground">{item.q}</dt>
                  <dd className="mt-1 leading-relaxed">{item.a}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a href={FREE_WEBSITE_HREF} className="btn-cta-primary">
                Get my free website
              </a>
              <a href="#text-us" className="btn-cta-ghost">
                Text us
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Contact;
