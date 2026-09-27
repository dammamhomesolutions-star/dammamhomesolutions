import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileStickyCta from "@/components/MobileStickyCta";
import TrSvgDefs from "@/components/tile-repair/TrSvgDefs";
import TrBreadcrumb from "@/components/tile-repair/TrBreadcrumb";
import TrHero from "@/components/tile-repair/TrHero";
import TrScrollJourney from "@/components/tile-repair/TrScrollJourney";
import TrDamageSelector from "@/components/tile-repair/TrDamageSelector";
import TrExplodedTile from "@/components/tile-repair/TrExplodedTile";
import TrDamageAnatomy from "@/components/tile-repair/TrDamageAnatomy";
import TrRestorationStates from "@/components/tile-repair/TrRestorationStates";
import TrTileVsGrout from "@/components/tile-repair/TrTileVsGrout";
import TrDontCoverDamage from "@/components/tile-repair/TrDontCoverDamage";
import TrSurfaceSwitcher from "@/components/tile-repair/TrSurfaceSwitcher";
import TrRepairOrReplace from "@/components/tile-repair/TrRepairOrReplace";
import TrBeforeAfterSlider from "@/components/tile-repair/TrBeforeAfterSlider";
import TrConnectionMap from "@/components/tile-repair/TrConnectionMap";
import TrPhotoRequest from "@/components/tile-repair/TrPhotoRequest";
import TrMaterialDetail from "@/components/tile-repair/TrMaterialDetail";
import TrCommonPlaces from "@/components/tile-repair/TrCommonPlaces";
import TrDammamContext from "@/components/tile-repair/TrDammamContext";
import TrLandlordSection from "@/components/tile-repair/TrLandlordSection";
import TrFinalCta from "@/components/tile-repair/TrFinalCta";
import TrFaq from "@/components/tile-repair/TrFaq";

const pageUrl = `${siteConfig.url}/tile-repair-grout/`;
const title = "Tile Repair & Grout Repair in Dammam";
const description =
  "Tile repair and grout restoration for existing homes, bathrooms, kitchens and tiled surfaces in Dammam. Send photos of the damaged area for assessment.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/tile-repair-grout/",
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

export default function TileRepairGroutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: "Tile Repair & Grout Restoration",
        serviceType: "Tile and grout repair",
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
      <TrSvgDefs />
      <Header
        ctaLabel="WhatsApp About Tile Repair"
        whatsappMessage="Hello Dammam Home Solutions, I'd like to ask about a tile or grout repair."
      />
      <TrBreadcrumb />
      <main id="main">
        <TrHero />
        <TrScrollJourney />
        <TrDamageSelector />
        <TrExplodedTile />
        <TrDamageAnatomy />
        <TrRestorationStates />
        <TrTileVsGrout />
        <TrDontCoverDamage />
        <TrSurfaceSwitcher />
        <TrRepairOrReplace />
        <TrBeforeAfterSlider />
        <TrConnectionMap />
        <TrPhotoRequest />
        <TrMaterialDetail />
        <TrCommonPlaces />
        <TrDammamContext />
        <TrLandlordSection />
        <TrFinalCta />
        <TrFaq />
      </main>
      <Footer />
      <MobileStickyCta
        label="Send Tile Photos"
        whatsappMessage="Hello Dammam Home Solutions, I'd like to send a few photos of a tile/grout issue. "
      />
    </>
  );
}
