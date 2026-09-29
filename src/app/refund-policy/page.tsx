import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { buildWhatsAppLink } from "@/lib/site-config";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileStickyCta from "@/components/MobileStickyCta";
import LegalBreadcrumb from "@/components/legal/LegalBreadcrumb";
import LegalSection from "@/components/legal/LegalSection";

const title = "Refund & Cancellation Policy";
const description = `How ${siteConfig.name} approaches cancellations and refunds for requested services.`;

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/refund-policy/",
  },
};

const lastUpdated = "29 September 2026";

export default function RefundPolicyPage() {
  return (
    <>
      <Header />
      <LegalBreadcrumb label="Refund & Cancellation Policy" />
      <main id="main">
        <section className="border-b border-ink-900/10 bg-sand-50 py-16 sm:py-20">
          <div className="container-edge max-w-2xl">
            <p className="section-label">Legal</p>
            <h1 className="mt-4 font-serif text-4xl tracking-tight text-ink-950 sm:text-5xl">
              Refund &amp; Cancellation Policy
            </h1>
            <p className="mt-4 text-sm text-ink-500">Last updated: {lastUpdated}</p>
          </div>
        </section>

        <div className="container-edge max-w-2xl py-14 sm:py-16">
          <LegalSection title="Overview">
            <p>
              This website doesn&rsquo;t process online payments — services are
              requested through WhatsApp, phone or email, and any payment is
              arranged and made directly between you and {siteConfig.name}. This
              page explains our general approach to cancellations and refunds for
              services requested through us.
            </p>
          </LegalSection>

          <LegalSection title="Cancelling before an appointment">
            <p>
              If you need to cancel or reschedule a visit, contact us as early as
              possible. Where no visit has taken place and no materials have been
              purchased for your job yet, no charge would apply.
            </p>
          </LegalSection>

          <LegalSection title="Materials and parts">
            <p>
              For some jobs, materials or parts may need to be purchased in
              advance. If a job is cancelled after materials have already been
              bought specifically for it, the cost of those materials may not be
              refundable.
            </p>
          </LegalSection>

          <LegalSection title="Work already carried out">
            <p>
              Once a repair or maintenance job has been completed and is working
              as intended, it&rsquo;s generally not eligible for a refund. If a
              specific part of the work wasn&rsquo;t completed or doesn&rsquo;t
              match what was agreed, let us know so we can look into it.
            </p>
          </LegalSection>

          <LegalSection title="If something isn't right">
            <p>
              If you&rsquo;re not satisfied with completed work, contact us as
              soon as possible with details of the issue. We&rsquo;ll assess the
              situation and, where appropriate, arrange a follow-up visit to
              address it. Outcomes are handled on a case-by-case basis, since they
              depend on the specific job and issue involved.
            </p>
          </LegalSection>

          <LegalSection title="How to raise a concern">
            <p>
              The quickest way to raise a cancellation, refund or quality concern
              is via WhatsApp.
            </p>
            <a
              href={buildWhatsAppLink(
                "Hello Dammam Home Solutions, I have a question about a cancellation or a completed job. "
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring mt-2 inline-flex items-center rounded-full bg-ink-950 px-6 py-3 text-sm font-semibold text-sand-50 transition-transform hover:scale-[1.02]"
            >
              Message Us on WhatsApp
            </a>
          </LegalSection>

          <LegalSection title="Changes to this policy">
            <p>
              We may update this policy from time to time. The &ldquo;Last
              updated&rdquo; date above reflects the most recent revision.
            </p>
          </LegalSection>
        </div>
      </main>
      <Footer />
      <MobileStickyCta />
    </>
  );
}
