import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileStickyCta from "@/components/MobileStickyCta";
import CarpentryBreadcrumb from "@/components/carpentry-repair/CarpentryBreadcrumb";
import CarpentryHero from "@/components/carpentry-repair/CarpentryHero";
import WhatIsntWorkingExplorer from "@/components/carpentry-repair/WhatIsntWorkingExplorer";
import SmallProblemDailyAnnoyance from "@/components/carpentry-repair/SmallProblemDailyAnnoyance";
import DoorRepairSection from "@/components/carpentry-repair/DoorRepairSection";
import LocksSection from "@/components/carpentry-repair/LocksSection";
import HandleHingeStrip from "@/components/carpentry-repair/HandleHingeStrip";
import CabinetDrawerSection from "@/components/carpentry-repair/CabinetDrawerSection";
import CarpentrySection from "@/components/carpentry-repair/CarpentrySection";
import RepairOrReplacementDecision from "@/components/carpentry-repair/RepairOrReplacementDecision";
import BeforeYouContactSection from "@/components/carpentry-repair/BeforeYouContactSection";
import DoorAlignmentSection from "@/components/carpentry-repair/DoorAlignmentSection";
import RoomByRoomCarpentry from "@/components/carpentry-repair/RoomByRoomCarpentry";
import RentalPropertyCarpentrySection from "@/components/carpentry-repair/RentalPropertyCarpentrySection";
import RepairListChecklist from "@/components/carpentry-repair/RepairListChecklist";
import DammamCarpentryContext from "@/components/carpentry-repair/DammamCarpentryContext";
import CarpentryJourney from "@/components/carpentry-repair/CarpentryJourney";
import CarpentryRequestPanel from "@/components/carpentry-repair/CarpentryRequestPanel";
import CarpentryFaq from "@/components/carpentry-repair/CarpentryFaq";

const pageUrl = `${siteConfig.url}/carpentry-doors-locks/`;
const title = "Carpentry, Door & Lock Repair in Dammam";
const description =
  "Dammam Home Solutions handles residential door, lock, hardware and carpentry repairs in Dammam, including doors, handles, hinges, cabinets and minor woodwork.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/carpentry-doors-locks/",
  },
  openGraph: {
    type: "website",
    url: pageUrl,
    siteName: siteConfig.name,
    title: `${title} | ${siteConfig.name}`,
    description,
  },
  twitter: {
    card: "summary",
    title: `${title} | ${siteConfig.name}`,
    description,
  },
};

export default function CarpentryDoorsLocksPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: "Carpentry, Door & Lock Repair",
        serviceType: "Residential carpentry, door, lock and hardware repair",
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
        ctaLabel="WhatsApp for Door & Carpentry Repair"
        whatsappMessage="Hello Dammam Home Solutions, I'd like help with a door, lock or carpentry problem."
      />
      <CarpentryBreadcrumb />
      <main id="main">
        <CarpentryHero />
        <WhatIsntWorkingExplorer />
        <SmallProblemDailyAnnoyance />
        <DoorRepairSection />
        <LocksSection />
        <HandleHingeStrip />
        <CabinetDrawerSection />
        <CarpentrySection />
        <RepairOrReplacementDecision />
        <BeforeYouContactSection />
        <DoorAlignmentSection />
        <RoomByRoomCarpentry />
        <RentalPropertyCarpentrySection />
        <RepairListChecklist />
        <DammamCarpentryContext />
        <CarpentryJourney />
        <CarpentryRequestPanel />
        <CarpentryFaq />
      </main>
      <Footer />
      <MobileStickyCta
        label="WhatsApp Door & Carpentry"
        whatsappMessage="Hello Dammam Home Solutions, I'd like help with a door, lock or carpentry problem."
      />
    </>
  );
}
