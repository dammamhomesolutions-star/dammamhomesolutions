import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileStickyCta from "@/components/MobileStickyCta";
import CrSvgDefs from "@/components/ceiling-repair/CrSvgDefs";
import CrBreadcrumb from "@/components/ceiling-repair/CrBreadcrumb";
import CrHero from "@/components/ceiling-repair/CrHero";
import CrScrollJourney from "@/components/ceiling-repair/CrScrollJourney";
import CrDamageSelector from "@/components/ceiling-repair/CrDamageSelector";
import CrExplodedCeiling from "@/components/ceiling-repair/CrExplodedCeiling";
import CrMorphGallery from "@/components/ceiling-repair/CrMorphGallery";
import CrWaterCrossover from "@/components/ceiling-repair/CrWaterCrossover";
import CrCrackPatterns from "@/components/ceiling-repair/CrCrackPatterns";
import CrWaterDamage from "@/components/ceiling-repair/CrWaterDamage";
import CrRestorationScroll from "@/components/ceiling-repair/CrRestorationScroll";
import CrBeforeAfterSlider from "@/components/ceiling-repair/CrBeforeAfterSlider";
import CrRoomSelector from "@/components/ceiling-repair/CrRoomSelector";
import CrLightingSection from "@/components/ceiling-repair/CrLightingSection";
import CrDecisionTree from "@/components/ceiling-repair/CrDecisionTree";
import CrPhoneGuide from "@/components/ceiling-repair/CrPhoneGuide";
import CrPropertyOwnerSection from "@/components/ceiling-repair/CrPropertyOwnerSection";
import CrDammamContext from "@/components/ceiling-repair/CrDammamContext";
import CrScopeBoundaries from "@/components/ceiling-repair/CrScopeBoundaries";
import CrRelatedServices from "@/components/ceiling-repair/CrRelatedServices";
import CrFinalCta from "@/components/ceiling-repair/CrFinalCta";
import CrFaq from "@/components/ceiling-repair/CrFaq";

const pageUrl = `${siteConfig.url}/ceiling-gypsum-board-repair/`;
const title = "Ceiling & Gypsum Repair in Dammam";
const description =
  "Ceiling and gypsum board repair in Dammam for cracks, holes and damaged sections in homes, villas and apartments. Send photos for assessment.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/ceiling-gypsum-board-repair/",
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

export default function CeilingGypsumBoardRepairPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: "Ceiling & Gypsum Board Repair",
        serviceType: "Ceiling and gypsum board repair",
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
      <CrSvgDefs />
      <Header
        ctaLabel="WhatsApp About Ceiling Repair"
        whatsappMessage="Hello Dammam Home Solutions, I'd like to ask about a ceiling or gypsum board repair."
      />
      <CrBreadcrumb />
      <main id="main">
        <CrHero />
        <CrScrollJourney />
        <CrDamageSelector />
        <CrExplodedCeiling />
        <CrMorphGallery />
        <CrWaterCrossover />
        <CrCrackPatterns />
        <CrWaterDamage />
        <CrRestorationScroll />
        <CrBeforeAfterSlider />
        <CrRoomSelector />
        <CrLightingSection />
        <CrDecisionTree />
        <CrPhoneGuide />
        <CrPropertyOwnerSection />
        <CrDammamContext />
        <CrScopeBoundaries />
        <CrRelatedServices />
        <CrFinalCta />
        <CrFaq />
      </main>
      <Footer />
      <MobileStickyCta
        label="Send Ceiling Photos"
        whatsappMessage="Hello Dammam Home Solutions, I'd like to send a few photos of my ceiling. "
      />
    </>
  );
}
