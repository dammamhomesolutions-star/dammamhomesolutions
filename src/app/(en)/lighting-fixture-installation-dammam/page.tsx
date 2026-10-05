import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { ltFaqs } from "@/lib/lighting-installation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LtBreadcrumb from "@/components/lighting-installation/LtBreadcrumb";
import LtHero from "@/components/lighting-installation/LtHero";
import LtAnswers from "@/components/lighting-installation/LtAnswers";
import LtSelector from "@/components/lighting-installation/LtSelector";
import LtFixtures from "@/components/lighting-installation/LtFixtures";
import LtRooms from "@/components/lighting-installation/LtRooms";
import LtDiagram from "@/components/lighting-installation/LtDiagram";
import LtQuality from "@/components/lighting-installation/LtQuality";
import LtChange from "@/components/lighting-installation/LtChange";
import LtCeiling from "@/components/lighting-installation/LtCeiling";
import LtControls from "@/components/lighting-installation/LtControls";
import LtProcess from "@/components/lighting-installation/LtProcess";
import LtCost from "@/components/lighting-installation/LtCost";
import LtDiagnostic from "@/components/lighting-installation/LtDiagnostic";
import LtProperties from "@/components/lighting-installation/LtProperties";
import LtPlanning from "@/components/lighting-installation/LtPlanning";
import LtRequestForm from "@/components/lighting-installation/LtRequestForm";
import LtFaq from "@/components/lighting-installation/LtFaq";
import LtRelatedServices from "@/components/lighting-installation/LtRelatedServices";
import LtFinalCta from "@/components/lighting-installation/LtFinalCta";
import LtMobileStickyCta from "@/components/lighting-installation/LtMobileStickyCta";

const path = "/lighting-fixture-installation-dammam/";
const pageUrl = `${siteConfig.url}${path}`;
const title = "Lighting & Fixture Installation in Dammam";
const description =
  "Lighting and fixture installation in Dammam for homes and businesses: ceiling lights, chandeliers, downlights, wall and outdoor lights, replacements and new points.";

export const metadata: Metadata = {
  title,
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

export default function LightingInstallationPage() {
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
        name: "Lighting & Fixture Installation",
        serviceType: "Light fixture installation and replacement",
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
          { "@type": "Audience", audienceType: "Commercial properties" },
        ],
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
          { "@type": "ListItem", position: 2, name: "Services", item: `${siteConfig.url}/services/` },
          { "@type": "ListItem", position: 3, name: "Lighting & Fixture Installation", item: pageUrl },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: ltFaqs.map((faq) => ({
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
        ctaLabel="WhatsApp About Lighting"
        whatsappMessage="Hello Dammam Home Solutions, I have a question about a lighting installation."
      />
      <LtBreadcrumb />
      <main id="main" className="pb-20 lg:pb-0">
        <LtHero />
        <LtAnswers />
        <LtSelector />
        <LtFixtures />
        <LtRooms />
        <LtDiagram />
        <LtQuality />
        <LtChange />
        <LtCeiling />
        <LtControls />
        <LtProcess />
        <LtCost />
        <LtDiagnostic />
        <LtProperties />
        <LtPlanning />
        <LtRequestForm />
        <LtFaq />
        <LtRelatedServices />
        <LtFinalCta />
      </main>
      <Footer />
      <LtMobileStickyCta />
    </>
  );
}
