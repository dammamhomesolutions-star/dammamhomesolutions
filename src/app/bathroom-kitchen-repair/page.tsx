import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileStickyCta from "@/components/MobileStickyCta";
import RoomBreadcrumb from "@/components/bathroom-kitchen-repair/RoomBreadcrumb";
import RoomHero from "@/components/bathroom-kitchen-repair/RoomHero";
import RoomExplorer from "@/components/bathroom-kitchen-repair/RoomExplorer";
import RoomTellsMoreSection from "@/components/bathroom-kitchen-repair/RoomTellsMoreSection";
import BathroomSymptomsSection from "@/components/bathroom-kitchen-repair/BathroomSymptomsSection";
import KitchenChainSection from "@/components/bathroom-kitchen-repair/KitchenChainSection";
import RepairListBuilder from "@/components/bathroom-kitchen-repair/RepairListBuilder";
import RepairBeforeRenovation from "@/components/bathroom-kitchen-repair/RepairBeforeRenovation";
import WaterOrSurfaceDecision from "@/components/bathroom-kitchen-repair/WaterOrSurfaceDecision";
import KitchenCrossoverSection from "@/components/bathroom-kitchen-repair/KitchenCrossoverSection";
import SurfaceMattersSection from "@/components/bathroom-kitchen-repair/SurfaceMattersSection";
import PhotoFirstSection from "@/components/bathroom-kitchen-repair/PhotoFirstSection";
import RoomBeforeAfterSection from "@/components/bathroom-kitchen-repair/RoomBeforeAfterSection";
import PropertyTypesSection from "@/components/bathroom-kitchen-repair/PropertyTypesSection";
import LandlordRoomSection from "@/components/bathroom-kitchen-repair/LandlordRoomSection";
import RoomJourney from "@/components/bathroom-kitchen-repair/RoomJourney";
import DammamRoomContext from "@/components/bathroom-kitchen-repair/DammamRoomContext";
import RoomRelatedServices from "@/components/bathroom-kitchen-repair/RoomRelatedServices";
import RoomRequestPanel from "@/components/bathroom-kitchen-repair/RoomRequestPanel";
import RoomFaq from "@/components/bathroom-kitchen-repair/RoomFaq";

const pageUrl = `${siteConfig.url}/bathroom-kitchen-repair/`;
const title = "Bathroom & Kitchen Repair in Dammam";
const description =
  "Bathroom and kitchen repair in Dammam — plumbing, fixtures, drainage, tiles, cabinets, doors and general repair work for these rooms.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/bathroom-kitchen-repair/",
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

export default function BathroomKitchenRepairPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: "Bathroom & Kitchen Repair",
        serviceType: "Residential bathroom and kitchen repair and maintenance",
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
        whatsappMessage="Hello Dammam Home Solutions, I'd like help with a bathroom or kitchen repair."
      />
      <RoomBreadcrumb />
      <main id="main">
        <RoomHero />
        <RoomExplorer />
        <RoomTellsMoreSection />
        <BathroomSymptomsSection />
        <KitchenChainSection />
        <RepairListBuilder />
        <RepairBeforeRenovation />
        <WaterOrSurfaceDecision />
        <KitchenCrossoverSection />
        <SurfaceMattersSection />
        <PhotoFirstSection />
        <RoomBeforeAfterSection />
        <PropertyTypesSection />
        <LandlordRoomSection />
        <RoomJourney />
        <DammamRoomContext />
        <RoomRelatedServices />
        <RoomRequestPanel />
        <RoomFaq />
      </main>
      <Footer />
      <MobileStickyCta
        label="WhatsApp Home Repair"
        whatsappMessage="Hello Dammam Home Solutions, I'd like help with a bathroom or kitchen repair."
      />
    </>
  );
}
