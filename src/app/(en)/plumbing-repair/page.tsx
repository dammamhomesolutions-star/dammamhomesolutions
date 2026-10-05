import type { Metadata } from "next";
import { languageAlternates } from "@/lib/i18n";
import { siteConfig } from "@/lib/site-config";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileStickyCta from "@/components/MobileStickyCta";
import PlumbingBreadcrumb from "@/components/plumbing-repair/PlumbingBreadcrumb";
import PlumbingHero from "@/components/plumbing-repair/PlumbingHero";
import WaterAreaSelector from "@/components/plumbing-repair/WaterAreaSelector";
import FollowTheWaterSection from "@/components/plumbing-repair/FollowTheWaterSection";
import ProblemList from "@/components/plumbing-repair/ProblemList";
import SmallLeakBiggerProblem from "@/components/plumbing-repair/SmallLeakBiggerProblem";
import SymptomTimeline from "@/components/plumbing-repair/SymptomTimeline";
import WhatToSendSection from "@/components/plumbing-repair/WhatToSendSection";
import BathroomPlumbingSection from "@/components/plumbing-repair/BathroomPlumbingSection";
import KitchenPlumbingSection from "@/components/plumbing-repair/KitchenPlumbingSection";
import DrainageSection from "@/components/plumbing-repair/DrainageSection";
import DammamPlumbingContext from "@/components/plumbing-repair/DammamPlumbingContext";
import RepairVsPropertyMaintenance from "@/components/plumbing-repair/RepairVsPropertyMaintenance";
import PlumbingJourney from "@/components/plumbing-repair/PlumbingJourney";
import PropertyOwnersSection from "@/components/plumbing-repair/PropertyOwnersSection";
import PlumbingRelatedServices from "@/components/plumbing-repair/PlumbingRelatedServices";
import PlumbingRequestPanel from "@/components/plumbing-repair/PlumbingRequestPanel";
import PlumbingFaq from "@/components/plumbing-repair/PlumbingFaq";

const pageUrl = `${siteConfig.url}/plumbing-repair/`;
const title = "Plumbing Repair in Dammam";
const description =
  "Dammam Home Solutions provides plumbing repair and water-leak services in Dammam, including bathroom, kitchen, drainage and general plumbing problems.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/plumbing-repair/", languages: languageAlternates("/plumbing-repair/"),
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

export default function PlumbingRepairPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: "Plumbing & Water Leak Repair",
        serviceType: "Plumbing repair and water leak repair",
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
        ctaLabel="WhatsApp for Plumbing"
        whatsappMessage="Hello Dammam Home Solutions, I'd like help with a plumbing or water leak problem."
      />
      <PlumbingBreadcrumb />
      <main id="main">
        <PlumbingHero />
        <WaterAreaSelector />
        <FollowTheWaterSection />
        <ProblemList />
        <SmallLeakBiggerProblem />
        <SymptomTimeline />
        <WhatToSendSection />
        <BathroomPlumbingSection />
        <KitchenPlumbingSection />
        <DrainageSection />
        <DammamPlumbingContext />
        <RepairVsPropertyMaintenance />
        <PlumbingJourney />
        <PropertyOwnersSection />
        <PlumbingRelatedServices />
        <PlumbingRequestPanel />
        <PlumbingFaq />
      </main>
      <Footer />
      <MobileStickyCta
        label="WhatsApp Plumbing"
        whatsappMessage="Hello Dammam Home Solutions, I'd like help with a plumbing or water leak problem."
      />
    </>
  );
}
