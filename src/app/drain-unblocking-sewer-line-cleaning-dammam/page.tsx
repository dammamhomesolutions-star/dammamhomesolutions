import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { drFaqs } from "@/lib/drain-unblocking";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DrBreadcrumb from "@/components/drain-unblocking/DrBreadcrumb";
import DrHero from "@/components/drain-unblocking/DrHero";
import DrAnswers from "@/components/drain-unblocking/DrAnswers";
import DrDiagnostic from "@/components/drain-unblocking/DrDiagnostic";
import DrLocalVsSewer from "@/components/drain-unblocking/DrLocalVsSewer";
import DrSystem from "@/components/drain-unblocking/DrSystem";
import DrCauses from "@/components/drain-unblocking/DrCauses";
import DrServices from "@/components/drain-unblocking/DrServices";
import DrMethods from "@/components/drain-unblocking/DrMethods";
import DrSituations from "@/components/drain-unblocking/DrSituations";
import DrWarnings from "@/components/drain-unblocking/DrWarnings";
import DrCost from "@/components/drain-unblocking/DrCost";
import DrPrep from "@/components/drain-unblocking/DrPrep";
import DrProperties from "@/components/drain-unblocking/DrProperties";
import DrRequestForm from "@/components/drain-unblocking/DrRequestForm";
import DrFaq from "@/components/drain-unblocking/DrFaq";
import DrRelatedServices from "@/components/drain-unblocking/DrRelatedServices";
import DrFinalCta from "@/components/drain-unblocking/DrFinalCta";
import DrMobileStickyCta from "@/components/drain-unblocking/DrMobileStickyCta";

const path = "/drain-unblocking-sewer-line-cleaning-dammam/";
const pageUrl = `${siteConfig.url}${path}`;
const title = "Drain Unblocking & Sewer Line Cleaning in Dammam";
const shortTitle = "Drain Unblocking & Sewer Cleaning in Dammam";
const description =
  "Drain unblocking and sewer line cleaning in Dammam — snake, water jetting and camera inspection to find out if it's one drain or the main line.";

export const metadata: Metadata = {
  title: shortTitle,
  description,
  alternates: {
    canonical: path,
  },
  openGraph: {
    type: "website",
    url: pageUrl,
    siteName: siteConfig.name,
    title: `${title} | ${siteConfig.name}`,
    description,
    images: [`${siteConfig.url}/opengraph-image`],
  },
  twitter: {
    card: "summary",
    title: `${title} | ${siteConfig.name}`,
    description,
    images: [`${siteConfig.url}/opengraph-image`],
  },
};

export default function DrainUnblockingPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: `${title} | ${siteConfig.name}`,
        description,
        isPartOf: { "@id": `${siteConfig.url}/#website` },
        about: { "@id": `${pageUrl}#service` },
      },
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: "Drain Unblocking & Sewer Line Cleaning",
        serviceType: "Drain unblocking and sewer line cleaning",
        description,
        url: pageUrl,
        provider: { "@id": `${siteConfig.url}/#business` },
        areaServed: {
          "@type": "City",
          name: "Dammam",
          containedInPlace: {
            "@type": "AdministrativeArea",
            name: "Eastern Province, Saudi Arabia",
          },
        },
        audience: [
          { "@type": "Audience", audienceType: "Homeowners, tenants and landlords" },
          { "@type": "Audience", audienceType: "Businesses and restaurants" },
        ],
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
          { "@type": "ListItem", position: 2, name: "Services", item: `${siteConfig.url}/services/` },
          { "@type": "ListItem", position: 3, name: "Drain Unblocking & Sewer Line Cleaning", item: pageUrl },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: drFaqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: { "@type": "Answer", text: faq.a },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header
        ctaLabel="WhatsApp About a Drain"
        whatsappMessage="Hello Dammam Home Solutions, I have a blocked drain."
      />
      <DrBreadcrumb />
      <main id="main" className="pb-20 lg:pb-0">
        <DrHero />
        <DrAnswers />
        <DrDiagnostic />
        <DrLocalVsSewer />
        <DrSystem />
        <DrCauses />
        <DrServices />
        <DrMethods />
        <DrSituations />
        <DrWarnings />
        <DrCost />
        <DrPrep />
        <DrProperties />
        <DrRequestForm />
        <DrFaq />
        <DrRelatedServices />
        <DrFinalCta />
      </main>
      <Footer />
      <DrMobileStickyCta />
    </>
  );
}
