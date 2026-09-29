import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { flFaqs } from "@/lib/flooring-repair";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileStickyCta from "@/components/MobileStickyCta";
import FlSvgDefs from "@/components/flooring-repair/FlSvgDefs";
import FlBreadcrumb from "@/components/flooring-repair/FlBreadcrumb";
import FlHero from "@/components/flooring-repair/FlHero";
import FlScrollDescent from "@/components/flooring-repair/FlScrollDescent";
import FlProblemSelector from "@/components/flooring-repair/FlProblemSelector";
import FloorCrossSection from "@/components/flooring-repair/FloorCrossSection";
import DamageSimulator from "@/components/flooring-repair/DamageSimulator";
import FlFeelLookAssess from "@/components/flooring-repair/FlFeelLookAssess";
import PressureMap from "@/components/flooring-repair/PressureMap";
import MaterialSwitcher from "@/components/flooring-repair/MaterialSwitcher";
import RoomTransition from "@/components/flooring-repair/RoomTransition";
import FlCrossoverRouting from "@/components/flooring-repair/FlCrossoverRouting";
import TileVsSurface from "@/components/flooring-repair/TileVsSurface";
import RestorationMorph from "@/components/flooring-repair/RestorationMorph";
import FloorAlignment from "@/components/flooring-repair/FloorAlignment";
import FlSmallDamageScene from "@/components/flooring-repair/FlSmallDamageScene";
import PhotoRequest from "@/components/flooring-repair/PhotoRequest";
import FloorPlanSelector from "@/components/flooring-repair/FloorPlanSelector";
import FlLandlordSection from "@/components/flooring-repair/FlLandlordSection";
import FlDammamContext from "@/components/flooring-repair/FlDammamContext";
import FlScopeBoundaries from "@/components/flooring-repair/FlScopeBoundaries";
import FlRelatedServices from "@/components/flooring-repair/FlRelatedServices";
import FlFinalCta from "@/components/flooring-repair/FlFinalCta";
import FlFaq from "@/components/flooring-repair/FlFaq";

const pageUrl = `${siteConfig.url}/flooring-repair/`;
const title = "Flooring Repair in Dammam";
const description =
  "Flooring repair for damaged, cracked, uneven and worn surfaces in Dammam homes, villas and apartments. Send photos of the affected floor for assessment.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/flooring-repair/",
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

export default function FlooringRepairPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: "Flooring Repair & Surface Restoration",
        serviceType: "Flooring repair and surface restoration",
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
      {
        "@type": "FAQPage",
        mainEntity: flFaqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.a,
          },
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
      <FlSvgDefs />
      <Header
        ctaLabel="WhatsApp About a Repair"
        whatsappMessage="Hello Dammam Home Solutions, I'd like to ask about a flooring repair."
      />
      <FlBreadcrumb />
      <main id="main">
        <FlHero />
        <FlScrollDescent />
        <FlProblemSelector />
        <FloorCrossSection />
        <DamageSimulator />
        <FlFeelLookAssess />
        <PressureMap />
        <MaterialSwitcher />
        <RoomTransition />
        <FlCrossoverRouting />
        <TileVsSurface />
        <RestorationMorph />
        <FloorAlignment />
        <FlSmallDamageScene />
        <PhotoRequest />
        <FloorPlanSelector />
        <FlLandlordSection />
        <FlDammamContext />
        <FlScopeBoundaries />
        <FlRelatedServices />
        <FlFinalCta />
        <FlFaq />
      </main>
      <Footer />
      <MobileStickyCta
        label="Show Us the Floor"
        whatsappMessage="Hello Dammam Home Solutions, I'd like to send a few photos of my floor. "
      />
    </>
  );
}
