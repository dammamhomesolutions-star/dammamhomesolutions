import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileStickyCta from "@/components/MobileStickyCta";
import LegalBreadcrumb from "@/components/legal/LegalBreadcrumb";
import LegalSection from "@/components/legal/LegalSection";

const title = "Privacy Policy";
const description = `How ${siteConfig.name} collects, uses and protects the information you share with us.`;

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/privacy-policy/",
  },
};

const lastUpdated = "29 September 2026";

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <LegalBreadcrumb label="Privacy Policy" path="/privacy-policy/" />
      <main id="main">
        <section className="border-b border-ink-900/10 bg-sand-50 py-16 sm:py-20">
          <div className="container-edge max-w-2xl">
            <p className="section-label">Legal</p>
            <h1 className="mt-4 font-serif text-4xl tracking-tight text-ink-950 sm:text-5xl">
              Privacy Policy
            </h1>
            <p className="mt-4 text-sm text-ink-500">Last updated: {lastUpdated}</p>
          </div>
        </section>

        <div className="container-edge max-w-2xl py-14 sm:py-16">
          <LegalSection title="Introduction">
            <p>
              {siteConfig.name} (&ldquo;we&rdquo;, &ldquo;us&rdquo;) provides property repair and
              maintenance services in {siteConfig.region}. This policy explains what
              information we collect when you use this website or contact us, and
              how that information is used.
            </p>
            <p>
              This website is informational — it describes our services and gives
              you a way to reach us. It doesn&rsquo;t include user accounts, online
              payments or online booking, so most of what applies here relates to
              information you choose to share with us directly.
            </p>
          </LegalSection>

          <LegalSection title="Information we collect">
            <p>When you contact us — by WhatsApp, phone or email — you may share:</p>
            <ul className="list-disc space-y-1.5 pl-5">
              <li>Your name and contact details</li>
              <li>Your property location or address</li>
              <li>A description of the issue you&rsquo;d like help with</li>
              <li>Photos or videos you choose to send us</li>
              <li>Any other details you include in your message</li>
            </ul>
            <p>
              We don&rsquo;t collect this information automatically through the
              website itself — it&rsquo;s only what you choose to send us.
            </p>
          </LegalSection>

          <LegalSection title="How we use this information">
            <p>We use the information you share with us to:</p>
            <ul className="list-disc space-y-1.5 pl-5">
              <li>Respond to your enquiry and understand the issue you&rsquo;re facing</li>
              <li>Arrange and carry out the service you&rsquo;ve requested</li>
              <li>Keep basic records of past enquiries and jobs</li>
              <li>Follow up on a job where relevant (for example, to check the repair has held)</li>
            </ul>
            <p>We don&rsquo;t use your information for unrelated marketing without your consent.</p>
          </LegalSection>

          <LegalSection title="WhatsApp and other messaging services">
            <p>
              Messages sent to us via WhatsApp are also subject to WhatsApp&rsquo;s
              own privacy policy, since the app is operated by a third party (Meta).
              We use these conversations only to respond to your enquiry and
              coordinate any service you&rsquo;ve requested.
            </p>
          </LegalSection>

          <LegalSection title="Cookies and website analytics">
            <p>
              This website does not currently use cookies or third-party analytics
              or advertising trackers. Our hosting provider may automatically log
              basic technical information (such as IP address and browser type)
              for security and performance purposes, in line with standard web
              hosting practice. If this changes in the future, this policy will be
              updated accordingly.
            </p>
          </LegalSection>

          <LegalSection title="Sharing your information">
            <p>
              We don&rsquo;t sell your personal information. It&rsquo;s only shared
              with the people directly involved in providing the service
              you&rsquo;ve requested (for example, the technician attending your
              property), or where we&rsquo;re required to by law.
            </p>
          </LegalSection>

          <LegalSection title="Data retention and security">
            <p>
              We keep enquiry and job information for as long as reasonably needed
              to provide the service and maintain basic records, and take
              reasonable steps to protect it. No method of storage or transmission
              is completely secure, so we can&rsquo;t guarantee absolute security.
            </p>
          </LegalSection>

          <LegalSection title="Children's privacy">
            <p>
              This website and our services are intended for adults arranging
              property repair and maintenance work. We don&rsquo;t knowingly
              collect information from children.
            </p>
          </LegalSection>

          <LegalSection title="Your choices">
            <p>
              You can ask us to review, update or delete the information we hold
              about a past enquiry by contacting us using the details below.
            </p>
          </LegalSection>

          <LegalSection title="Changes to this policy">
            <p>
              We may update this policy from time to time. The &ldquo;Last
              updated&rdquo; date above reflects the most recent revision.
            </p>
          </LegalSection>

          <LegalSection title="Contact us">
            <p>
              If you have a question about this policy or how your information is
              handled, contact us via{" "}
              <Link href="/contact-us/" className="focus-ring font-semibold text-ink-950 underline decoration-rust-600 decoration-2 underline-offset-4 hover:text-rust-700">
                our contact page
              </Link>
              {siteConfig.email && (
                <>
                  {" "}or email{" "}
                  <a href={`mailto:${siteConfig.email}`} className="focus-ring font-semibold text-ink-950 underline decoration-rust-600 decoration-2 underline-offset-4 hover:text-rust-700">
                    {siteConfig.email}
                  </a>
                </>
              )}
              .
            </p>
          </LegalSection>
        </div>
      </main>
      <Footer />
      <MobileStickyCta />
    </>
  );
}
