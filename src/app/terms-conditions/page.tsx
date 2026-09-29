import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileStickyCta from "@/components/MobileStickyCta";
import LegalBreadcrumb from "@/components/legal/LegalBreadcrumb";
import LegalSection from "@/components/legal/LegalSection";

const title = "Terms & Conditions";
const description = `The terms that apply to using the ${siteConfig.name} website and requesting our services.`;

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/terms-conditions/",
  },
};

const lastUpdated = "29 September 2026";

export default function TermsConditionsPage() {
  return (
    <>
      <Header />
      <LegalBreadcrumb label="Terms & Conditions" />
      <main id="main">
        <section className="border-b border-ink-900/10 bg-sand-50 py-16 sm:py-20">
          <div className="container-edge max-w-2xl">
            <p className="section-label">Legal</p>
            <h1 className="mt-4 font-serif text-4xl tracking-tight text-ink-950 sm:text-5xl">
              Terms &amp; Conditions
            </h1>
            <p className="mt-4 text-sm text-ink-500">Last updated: {lastUpdated}</p>
          </div>
        </section>

        <div className="container-edge max-w-2xl py-14 sm:py-16">
          <LegalSection title="Acceptance of these terms">
            <p>
              By using this website or contacting {siteConfig.name} to request a
              service, you agree to these terms. If you don&rsquo;t agree with
              them, please don&rsquo;t use the website or request a service
              through it.
            </p>
          </LegalSection>

          <LegalSection title="About this website">
            <p>
              This website describes property repair and maintenance services
              offered in {siteConfig.region} and gives you a way to reach us,
              mainly via WhatsApp. It doesn&rsquo;t process online payments, and
              it isn&rsquo;t a booking platform with guaranteed availability at a
              specific time — every request is reviewed and confirmed directly
              with you.
            </p>
          </LegalSection>

          <LegalSection title="Nature of our services">
            <p>
              We provide property repair and maintenance services covering areas
              such as plumbing, electrical, AC, waterproofing, painting,
              carpentry and general repairs, as described on this website. The
              exact scope of work for your job is agreed directly with you before
              or during an assessment, not fixed in advance by the website
              content, which is descriptive and illustrative rather than a
              binding specification.
            </p>
          </LegalSection>

          <LegalSection title="Requests, quotes and pricing">
            <p>
              This website doesn&rsquo;t publish fixed prices. Any quote or cost
              estimate is provided directly to you, usually after understanding
              the issue and, where needed, an in-person assessment, and is
              confirmed with you before work begins.
            </p>
          </LegalSection>

          <LegalSection title="Your responsibilities">
            <p>When requesting a service, we ask that you:</p>
            <ul className="list-disc space-y-1.5 pl-5">
              <li>Provide accurate information about the issue and your property</li>
              <li>Provide reasonable access to the affected area for assessment or work</li>
              <li>Let us know about any known access, safety or property-specific considerations in advance</li>
            </ul>
          </LegalSection>

          <LegalSection title="Service availability">
            <p>
              Service availability depends on factors such as location, the
              nature of the issue and technician availability at the time. We&rsquo;ll
              confirm timing directly with you rather than guaranteeing a
              specific time slot through the website.
            </p>
          </LegalSection>

          <LegalSection title="Content and intellectual property">
            <p>
              The text, images and design of this website belong to{" "}
              {siteConfig.name} unless stated otherwise, and shouldn&rsquo;t be
              copied or reused without permission. Illustrations and diagrams
              used to explain a problem or repair process are representative and
              not photos of a specific completed project unless stated otherwise.
            </p>
          </LegalSection>

          <LegalSection title="Third-party services">
            <p>
              Messages sent through WhatsApp or other third-party platforms are
              also subject to that platform&rsquo;s own terms and privacy policy.
            </p>
          </LegalSection>

          <LegalSection title="Limitation of liability">
            <p>
              Information on this website is provided to help you describe and
              understand a property issue, and doesn&rsquo;t replace an in-person
              assessment. To the extent permitted by law, {siteConfig.name} isn&rsquo;t
              liable for decisions made solely on the basis of general
              information on this website, as opposed to a specific assessment or
              agreement made directly with you.
            </p>
          </LegalSection>

          <LegalSection title="Governing law">
            <p>
              These terms are governed by the laws of the Kingdom of Saudi Arabia.
            </p>
          </LegalSection>

          <LegalSection title="Changes to these terms">
            <p>
              We may update these terms from time to time. The &ldquo;Last
              updated&rdquo; date above reflects the most recent revision.
            </p>
          </LegalSection>

          <LegalSection title="Contact us">
            <p>
              Questions about these terms can be sent through{" "}
              <Link href="/contact-us/" className="focus-ring font-semibold text-ink-950 underline decoration-rust-600 decoration-2 underline-offset-4 hover:text-rust-700">
                our contact page
              </Link>
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
