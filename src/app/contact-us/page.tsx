import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileStickyCta from "@/components/MobileStickyCta";
import LegalBreadcrumb from "@/components/legal/LegalBreadcrumb";
import ContactHero from "@/components/contact-us/ContactHero";
import ContactMethods from "@/components/contact-us/ContactMethods";
import ContactServiceHelp from "@/components/contact-us/ContactServiceHelp";

const pageUrl = `${siteConfig.url}/contact-us/`;
const title = "Contact Us";
const description = `Get in touch with ${siteConfig.name} via WhatsApp, phone or email to request a repair or maintenance service in ${siteConfig.region}.`;

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/contact-us/",
  },
  openGraph: {
    type: "website",
    url: pageUrl,
    siteName: siteConfig.name,
    title: `${title} | ${siteConfig.name}`,
    description,
  },
};

export default function ContactUsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
          { "@type": "ListItem", position: 2, name: title, item: pageUrl },
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
        <ContactMethods />
        <ContactServiceHelp />
      </main>
      <Footer />
      <MobileStickyCta />
    </>
  );
}
