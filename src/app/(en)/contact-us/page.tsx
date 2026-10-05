import type { Metadata } from "next";
import { languageAlternates } from "@/lib/i18n";
import { siteConfig } from "@/lib/site-config";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileStickyCta from "@/components/MobileStickyCta";
import LegalBreadcrumb from "@/components/legal/LegalBreadcrumb";
import ContactHero from "@/components/contact-us/ContactHero";
import ContactMethods from "@/components/contact-us/ContactMethods";
import ContactForm from "@/components/contact-us/ContactForm";
import ContactProcess from "@/components/contact-us/ContactProcess";
import ContactServiceHelp from "@/components/contact-us/ContactServiceHelp";
import ContactFaq from "@/components/contact-us/ContactFaq";

const pageUrl = `${siteConfig.url}/contact-us/`;
const title = "Contact Us — Request Home Repair Service";
const description = `Request a home repair in Dammam, Al Khobar, Dhahran or Qatif. WhatsApp or call ${siteConfig.phoneDisplay} — available 24/7. Send photos for a faster quote.`;

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/contact-us/", languages: languageAlternates("/contact-us/"),
  },
  openGraph: {
    type: "website",
    url: pageUrl,
    siteName: siteConfig.name,
    title: `${title} | ${siteConfig.name}`,
    description,
    images: [`${siteConfig.url}/opengraph-image`],
  },
};

export default function ContactUsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ContactPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: `${title} | ${siteConfig.name}`,
        description,
        isPartOf: { "@id": `${siteConfig.url}/#website` },
        about: { "@id": `${siteConfig.url}/#business` },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
          { "@type": "ListItem", position: 2, name: "Contact Us", item: pageUrl },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <LegalBreadcrumb label="Contact Us" />
      <main id="main">
        <ContactHero />
        <ContactForm />
        <ContactMethods />
        <ContactProcess />
        <ContactServiceHelp />
        <ContactFaq />
      </main>
      <Footer />
      <MobileStickyCta label="WhatsApp Us" whatsappMessage="Hello Dammam Home Solutions, I'd like to request a repair." />
    </>
  );
}
