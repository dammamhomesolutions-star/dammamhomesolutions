import type { Metadata } from "next";
import { languageAlternates } from "@/lib/i18n";
import { siteConfig } from "@/lib/site-config";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileStickyCta from "@/components/MobileStickyCta";
import PmBreadcrumb from "@/components/property-maintenance/PmBreadcrumb";
import PmHero from "@/components/property-maintenance/PmHero";
import PmHealthMap from "@/components/property-maintenance/PmHealthMap";
import PmRepairVsMaintenance from "@/components/property-maintenance/PmRepairVsMaintenance";
import PmRhythmTimeline from "@/components/property-maintenance/PmRhythmTimeline";
import PmSystemsDiagram from "@/components/property-maintenance/PmSystemsDiagram";
import PmConditionCheck from "@/components/property-maintenance/PmConditionCheck";
import PmWhatWeMaintain from "@/components/property-maintenance/PmWhatWeMaintain";
import PmSmallSigns from "@/components/property-maintenance/PmSmallSigns";
import PmPreventiveReactive from "@/components/property-maintenance/PmPreventiveReactive";
import PmPropertyTypes from "@/components/property-maintenance/PmPropertyTypes";
import PmLandlordFlow from "@/components/property-maintenance/PmLandlordFlow";
import PmRequestBuilder from "@/components/property-maintenance/PmRequestBuilder";
import PmPhotoCta from "@/components/property-maintenance/PmPhotoCta";
import PmMaintenanceRecord from "@/components/property-maintenance/PmMaintenanceRecord";
import PmDammamContext from "@/components/property-maintenance/PmDammamContext";
import PmWhenToCall from "@/components/property-maintenance/PmWhenToCall";
import PmScopeBoundaries from "@/components/property-maintenance/PmScopeBoundaries";
import PmRelatedServices from "@/components/property-maintenance/PmRelatedServices";
import PmFinalCta from "@/components/property-maintenance/PmFinalCta";
import PmFaq from "@/components/property-maintenance/PmFaq";

const pageUrl = `${siteConfig.url}/property-maintenance/`;
const title = "Property Maintenance in Dammam";
const description =
  "Property maintenance for villas, apartments and homes in Dammam — AC, plumbing, electrical, surfaces, fixtures and everyday repairs.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/property-maintenance/", languages: languageAlternates("/property-maintenance/"),
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

export default function PropertyMaintenancePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: "Property Maintenance",
        serviceType: "Residential property maintenance",
        description,
        url: pageUrl,
        provider: { "@id": `${siteConfig.url}/#business` },
        areaServed: {
          "@type": "City",
          name: "Dammam",
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: siteConfig.url,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: title,
            item: pageUrl,
          },
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
      <Header
        ctaLabel="WhatsApp About Maintenance"
        whatsappMessage="Hello Dammam Home Solutions, I'd like to ask about property maintenance."
      />
      <PmBreadcrumb />
      <main id="main">
        <PmHero />
        <PmHealthMap />
        <PmRepairVsMaintenance />
        <PmRhythmTimeline />
        <PmSystemsDiagram />
        <PmConditionCheck />
        <PmWhatWeMaintain />
        <PmSmallSigns />
        <PmPreventiveReactive />
        <PmPropertyTypes />
        <PmLandlordFlow />
        <PmRequestBuilder />
        <PmPhotoCta />
        <PmMaintenanceRecord />
        <PmDammamContext />
        <PmWhenToCall />
        <PmScopeBoundaries />
        <PmRelatedServices />
        <PmFinalCta />
        <PmFaq />
      </main>
      <Footer />
      <MobileStickyCta
        label="Request Property Maintenance"
        whatsappMessage="Hello Dammam Home Solutions, I'd like to request property maintenance. Here's what I've noticed: "
      />
    </>
  );
}
