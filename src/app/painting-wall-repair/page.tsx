import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileStickyCta from "@/components/MobileStickyCta";
import PaintingBreadcrumb from "@/components/painting-repair/PaintingBreadcrumb";
import PaintingHero from "@/components/painting-repair/PaintingHero";
import WallSurfaceExplorer from "@/components/painting-repair/WallSurfaceExplorer";
import GoodPaintStartsSection from "@/components/painting-repair/GoodPaintStartsSection";
import CracksSection from "@/components/painting-repair/CracksSection";
import PeelingPaintSection from "@/components/painting-repair/PeelingPaintSection";
import BeforeAfterSection from "@/components/painting-repair/BeforeAfterSection";
import WorkTypeSelector from "@/components/painting-repair/WorkTypeSelector";
import RoomByRoomVisual from "@/components/painting-repair/RoomByRoomVisual";
import InteriorPaintingSection from "@/components/painting-repair/InteriorPaintingSection";
import CeilingSection from "@/components/painting-repair/CeilingSection";
import PaintOrWaterDecision from "@/components/painting-repair/PaintOrWaterDecision";
import PropertyOwnersPaintingSection from "@/components/painting-repair/PropertyOwnersPaintingSection";
import SendUsTheWallPanel from "@/components/painting-repair/SendUsTheWallPanel";
import PaintingJourney from "@/components/painting-repair/PaintingJourney";
import DammamPaintingContext from "@/components/painting-repair/DammamPaintingContext";
import PaintingFaq from "@/components/painting-repair/PaintingFaq";

const pageUrl = `${siteConfig.url}/painting-wall-repair/`;
const title = "Painting & Wall Repair in Dammam";
const description =
  "Dammam Home Solutions provides painting, wall repair and surface preparation in Dammam for homes, apartments and rental properties.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/painting-wall-repair/",
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

export default function PaintingWallRepairPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: "Painting & Wall Repair",
        serviceType: "Painting, wall repair and surface preparation",
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
        ctaLabel="WhatsApp for Wall & Painting Work"
        whatsappMessage="Hello Dammam Home Solutions, I'd like help with painting or wall repair."
      />
      <PaintingBreadcrumb />
      <main id="main">
        <PaintingHero />
        <WallSurfaceExplorer />
        <GoodPaintStartsSection />
        <CracksSection />
        <PeelingPaintSection />
        <BeforeAfterSection />
        <WorkTypeSelector />
        <RoomByRoomVisual />
        <InteriorPaintingSection />
        <CeilingSection />
        <PaintOrWaterDecision />
        <PropertyOwnersPaintingSection />
        <SendUsTheWallPanel />
        <PaintingJourney />
        <DammamPaintingContext />
        <PaintingFaq />
      </main>
      <Footer />
      <MobileStickyCta
        label="WhatsApp Painting & Repair"
        whatsappMessage="Hello Dammam Home Solutions, I'd like help with painting or wall repair."
      />
    </>
  );
}
