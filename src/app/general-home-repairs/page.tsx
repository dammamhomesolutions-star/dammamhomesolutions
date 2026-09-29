import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileStickyCta from "@/components/MobileStickyCta";
import RepairBreadcrumb from "@/components/general-repairs/RepairBreadcrumb";
import RepairHero from "@/components/general-repairs/RepairHero";
import ProblemRouter from "@/components/general-repairs/ProblemRouter";
import NoRightWordsSection from "@/components/general-repairs/NoRightWordsSection";
import DefineServiceSection from "@/components/general-repairs/DefineServiceSection";
import HouseRepairMap from "@/components/general-repairs/HouseRepairMap";
import DailyAnnoyancesSection from "@/components/general-repairs/DailyAnnoyancesSection";
import ScopeBoundaryTable from "@/components/general-repairs/ScopeBoundaryTable";
import OneMessageSection from "@/components/general-repairs/OneMessageSection";
import RepairIntakeFlow from "@/components/general-repairs/RepairIntakeFlow";
import RoomPatternsSection from "@/components/general-repairs/RoomPatternsSection";
import MultiTradeCrossover from "@/components/general-repairs/MultiTradeCrossover";
import RepairOrReplaceFlow from "@/components/general-repairs/RepairOrReplaceFlow";
import LandlordSection from "@/components/general-repairs/LandlordSection";
import DammamRepairContext from "@/components/general-repairs/DammamRepairContext";
import ServiceBoundariesSection from "@/components/general-repairs/ServiceBoundariesSection";
import GeneralRepairsRelatedServices from "@/components/general-repairs/GeneralRepairsRelatedServices";
import FinalRequestPanel from "@/components/general-repairs/FinalRequestPanel";
import GeneralRepairsFaq from "@/components/general-repairs/GeneralRepairsFaq";

const pageUrl = `${siteConfig.url}/general-home-repairs/`;
const title = "General Home Repairs in Dammam";
const description =
  "Not sure which service you need? Dammam Home Solutions handles practical home repairs across Dammam, from minor issues to multi-repair requests.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/general-home-repairs/",
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

export default function GeneralHomeRepairsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: "General Home Repairs",
        serviceType: "General household repair and maintenance",
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
        ctaLabel="WhatsApp for Home Repair"
        whatsappMessage="Hello Dammam Home Solutions, I have something that needs fixing but I'm not sure what to call it."
      />
      <RepairBreadcrumb />
      <main id="main">
        <RepairHero />
        <ProblemRouter />
        <NoRightWordsSection />
        <DefineServiceSection />
        <HouseRepairMap />
        <DailyAnnoyancesSection />
        <ScopeBoundaryTable />
        <OneMessageSection />
        <RepairIntakeFlow />
        <RoomPatternsSection />
        <MultiTradeCrossover />
        <RepairOrReplaceFlow />
        <LandlordSection />
        <DammamRepairContext />
        <ServiceBoundariesSection />
        <GeneralRepairsRelatedServices />
        <FinalRequestPanel />
        <GeneralRepairsFaq />
      </main>
      <Footer />
      <MobileStickyCta
        label="Send Repair Request"
        whatsappMessage="Hello Dammam Home Solutions, I have something that needs fixing but I'm not sure what to call it."
      />
    </>
  );
}
