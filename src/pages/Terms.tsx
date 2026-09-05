import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <>
      <Helmet>
        <title>Terms & Conditions | Rank Me Higher</title>
        <meta name="description" content="Rank Me Higher terms and conditions. Review our service agreement, payment terms, and usage policies." />
        <link rel="canonical" href="https://rankmehigher.com/terms" />
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Back button */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <h1 className="text-4xl lg:text-5xl font-black font-orbitron mb-8">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-red-600">
              Terms & Conditions
            </span>
          </h1>

          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-muted-foreground text-lg mb-8">
              Last updated: September 4, 2026
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Agreement to Terms</h2>
              <p className="text-muted-foreground">
                By accessing or using the services provided by Rank Me Higher ("Company," "we," "us," or "our"), you agree to be bound by these Terms & Conditions. If you disagree with any part of these terms, you may not access our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Services</h2>
              <p className="text-muted-foreground">
                Rank Me Higher operates an AI-powered platform that builds, hosts, and maintains websites for local businesses. Services include free preview website builds (with progress updates by SMS and email, subject to your consent), subscription plans that put your website live with hosting, SSL, custom domain connection, chat-based editing, lead capture and delivery, and a client portal; higher-tier plans additionally include Google Business Profile optimization and review generation with a dedicated business phone number and branded email. We may also provide related services such as SEO, content, and digital advertising for platform businesses.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">3. Subscriptions and Payment Terms</h2>
              <p className="text-muted-foreground">
                Preview website builds are provided free of charge and do not require a payment method. Publishing your website on your own domain requires an active monthly subscription — currently $99/mo (website, hosting, chat edits, portal), $149/mo (adds Google Business Profile optimization), or $199/mo (adds review generation with a dedicated business phone number and branded email). Subscriptions bill monthly in advance, may be canceled at any time effective at the end of the current billing period, and are non-refundable for partial periods unless otherwise specified in writing. Custom work or advertising services may be governed by separate agreements. Late or failed payments may result in suspension of hosting and services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Intellectual Property</h2>
              <p className="text-muted-foreground">
                The platform, its AI systems, and the underlying website code and infrastructure remain the intellectual property of Rank Me Higher. Content you provide — your business name, photos, and materials — remains yours, and you grant us a license to use it to build and operate your website. Your domain name is and remains yours. Websites are hosted on the platform for the duration of an active subscription; deliverables from separate custom-work agreements transfer as specified in those agreements.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Client Responsibilities</h2>
              <p className="text-muted-foreground">
                Clients are responsible for providing accurate information, timely feedback, and necessary access to accounts and platforms required for service delivery. Delays caused by client non-responsiveness may affect project timelines.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Limitation of Liability</h2>
              <p className="text-muted-foreground">
                Rank Me Higher shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services. Our total liability shall not exceed the amount paid for the specific service in question.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Termination</h2>
              <p className="text-muted-foreground">
                Either party may terminate services with 30 days written notice. Upon termination, the client is responsible for payment of all services rendered up to the termination date.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">8. Contact Information</h2>
              <p className="text-muted-foreground">
                For questions about these Terms & Conditions, please contact us at:<br />
                Email: info@rankmehigher.io
              </p>
            </section>
          </div>
        </div>
      </main>

       <Footer />
    </div>
    </>
  );
};
export default Terms;



