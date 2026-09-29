import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileStickyCta from "@/components/MobileStickyCta";
import ElectricalBreadcrumb from "@/components/electrical-repair/ElectricalBreadcrumb";
import ElectricalHero from "@/components/electrical-repair/ElectricalHero";
import WhatStoppedWorking from "@/components/electrical-repair/WhatStoppedWorking";
import SafetyFirstSection from "@/components/electrical-repair/SafetyFirstSection";
import FaultMapSection from "@/components/electrical-repair/FaultMapSection";
import OneFaultCanLookLikeAnother from "@/components/electrical-repair/OneFaultCanLookLikeAnother";
import ElectricalProblemsList from "@/components/electrical-repair/ElectricalProblemsList";
import RoomByRoomSection from "@/components/electrical-repair/RoomByRoomSection";
import BeforeYouContactSection from "@/components/electrical-repair/BeforeYouContactSection";
import ElectricalRepairVsMaintenance from "@/components/electrical-repair/ElectricalRepairVsMaintenance";
import PropertyContextSection from "@/components/electrical-repair/PropertyContextSection";
import DammamElectricalContext from "@/components/electrical-repair/DammamElectricalContext";
import ElectricalJourney from "@/components/electrical-repair/ElectricalJourney";
import UrgentSafetyPanel from "@/components/electrical-repair/UrgentSafetyPanel";
import ElectricalRelatedServices from "@/components/electrical-repair/ElectricalRelatedServices";
import ElectricalRequestPanel from "@/components/electrical-repair/ElectricalRequestPanel";
import ElectricalFaq from "@/components/electrical-repair/ElectricalFaq";

const pageUrl = `${siteConfig.url}/electrical-repair/`;
const title = "Electrical Repair in Dammam";
const description =
  "Electrical repair and maintenance in Dammam — lighting, switches, sockets and everyday electrical faults in homes and apartments.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/electrical-repair/",
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

export default function ElectricalRepairPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: "Electrical Repair & Maintenance",
        serviceType: "Residential electrical repair and maintenance",
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
        ctaLabel="WhatsApp for Electrical Repair"
        whatsappMessage="Hello Dammam Home Solutions, I'd like help with an electrical problem."
      />
      <ElectricalBreadcrumb />
      <main id="main">
        <ElectricalHero />
        <WhatStoppedWorking />
        <SafetyFirstSection />
        <FaultMapSection />
        <OneFaultCanLookLikeAnother />
        <ElectricalProblemsList />
        <RoomByRoomSection />
        <BeforeYouContactSection />
        <ElectricalRepairVsMaintenance />
        <PropertyContextSection />
        <DammamElectricalContext />
        <ElectricalJourney />
        <UrgentSafetyPanel />
        <ElectricalRelatedServices />
        <ElectricalRequestPanel />
        <ElectricalFaq />
      </main>
      <Footer />
      <MobileStickyCta
        label="WhatsApp Electrical Service"
        whatsappMessage="Hello Dammam Home Solutions, I'd like help with an electrical problem."
      />
    </>
  );
}
