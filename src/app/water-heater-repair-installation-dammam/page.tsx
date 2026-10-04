import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { whFaqs } from "@/lib/water-heater";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhBreadcrumb from "@/components/water-heater/WhBreadcrumb";
import WhHero from "@/components/water-heater/WhHero";
import WhAnswers from "@/components/water-heater/WhAnswers";
import WhDiagnostic from "@/components/water-heater/WhDiagnostic";
import WhDecision from "@/components/water-heater/WhDecision";
import WhTypes from "@/components/water-heater/WhTypes";
import WhProblems from "@/components/water-heater/WhProblems";
import WhLeak from "@/components/water-heater/WhLeak";
import WhProcess from "@/components/water-heater/WhProcess";
import WhSafety from "@/components/water-heater/WhSafety";
import WhCost from "@/components/water-heater/WhCost";
import WhHelp from "@/components/water-heater/WhHelp";
import WhScope from "@/components/water-heater/WhScope";
import WhRequestForm from "@/components/water-heater/WhRequestForm";
import WhFaq from "@/components/water-heater/WhFaq";
import WhRelatedServices from "@/components/water-heater/WhRelatedServices";
import WhFinalCta from "@/components/water-heater/WhFinalCta";
import WhMobileStickyCta from "@/components/water-heater/WhMobileStickyCta";

const path = "/water-heater-repair-installation-dammam/";
const pageUrl = `${siteConfig.url}${path}`;
const title = "Water Heater Repair & Installation in Dammam";
const shortTitle = "Water Heater Repair & Installation, Dammam";
const description =
  "Water heater repair, replacement and installation in Dammam — electric, instant, gas and solar. We diagnose first, then advise repair or replace.";

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

export default function WaterHeaterPage() {
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
        name: "Water Heater Repair & Installation",
        serviceType: "Water heater repair, replacement and installation",
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
          { "@type": "Audience", audienceType: "Businesses" },
        ],
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
          { "@type": "ListItem", position: 2, name: "Services", item: `${siteConfig.url}/services/` },
          { "@type": "ListItem", position: 3, name: "Water Heater Repair & Installation", item: pageUrl },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: whFaqs.map((faq) => ({
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
        ctaLabel="WhatsApp About Your Heater"
        whatsappMessage="Hello Dammam Home Solutions, I have a question about my water heater."
      />
      <WhBreadcrumb />
      <main id="main" className="pb-20 lg:pb-0">
        <WhHero />
        <WhAnswers />
        <WhDiagnostic />
        <WhDecision />
        <WhTypes />
        <WhProblems />
        <WhLeak />
        <WhProcess />
        <WhSafety />
        <WhCost />
        <WhHelp />
        <WhScope />
        <WhRequestForm />
        <WhFaq />
        <WhRelatedServices />
        <WhFinalCta />
      </main>
      <Footer />
      <WhMobileStickyCta />
    </>
  );
}
