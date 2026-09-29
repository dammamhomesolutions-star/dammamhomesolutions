import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { wdFaqs } from "@/lib/window-door-repair";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileStickyCta from "@/components/MobileStickyCta";
import WdSvgDefs from "@/components/window-door-repair/WdSvgDefs";
import WdBreadcrumb from "@/components/window-door-repair/WdBreadcrumb";
import WdHero from "@/components/window-door-repair/WdHero";
import WdOpenCloseScroll from "@/components/window-door-repair/WdOpenCloseScroll";
import WdProblemSelector from "@/components/window-door-repair/WdProblemSelector";
import WdAlignmentVisualizer from "@/components/window-door-repair/WdAlignmentVisualizer";
import WdExplodedAssembly from "@/components/window-door-repair/WdExplodedAssembly";
import WdGlassCrack from "@/components/window-door-repair/WdGlassCrack";
import WdGlassReflection from "@/components/window-door-repair/WdGlassReflection";
import WdSealCrossSection from "@/components/window-door-repair/WdSealCrossSection";
import WdDoorWindowSwitcher from "@/components/window-door-repair/WdDoorWindowSwitcher";
import WdSlidingTrack from "@/components/window-door-repair/WdSlidingTrack";
import WdBeforeAfterFunctional from "@/components/window-door-repair/WdBeforeAfterFunctional";
import WdSmallProblemsScene from "@/components/window-door-repair/WdSmallProblemsScene";
import WdAnatomyBlueprint from "@/components/window-door-repair/WdAnatomyBlueprint";
import WdDecisionPath from "@/components/window-door-repair/WdDecisionPath";
import WdGlassFrameCrossover from "@/components/window-door-repair/WdGlassFrameCrossover";
import WdPhoneGuide from "@/components/window-door-repair/WdPhoneGuide";
import WdPropertyContext from "@/components/window-door-repair/WdPropertyContext";
import WdLandlordSection from "@/components/window-door-repair/WdLandlordSection";
import WdDammamContext from "@/components/window-door-repair/WdDammamContext";
import WdSafetyBoundaries from "@/components/window-door-repair/WdSafetyBoundaries";
import WdRelatedServices from "@/components/window-door-repair/WdRelatedServices";
import WdFinalCta from "@/components/window-door-repair/WdFinalCta";
import WdFaq from "@/components/window-door-repair/WdFaq";

const pageUrl = `${siteConfig.url}/window-door-glass-repair/`;
const title = "Window, Door & Glass Repair";
const description =
  "Door, window and glass repair in Dammam — damaged glass, hardware, sticking doors, seals and tracks for existing homes and properties.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/window-door-glass-repair/",
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

export default function WindowDoorGlassRepairPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: "Window, Door & Glass Repair",
        serviceType: "Window, door and glass repair",
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
        mainEntity: wdFaqs.map((faq) => ({
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
      <WdSvgDefs />
      <Header
        ctaLabel="WhatsApp About a Repair"
        whatsappMessage="Hello Dammam Home Solutions, I'd like to ask about a door, window or glass repair."
      />
      <WdBreadcrumb />
      <main id="main">
        <WdHero />
        <WdOpenCloseScroll />
        <WdProblemSelector />
        <WdAlignmentVisualizer />
        <WdExplodedAssembly />
        <WdGlassCrack />
        <WdGlassReflection />
        <WdSealCrossSection />
        <WdDoorWindowSwitcher />
        <WdSlidingTrack />
        <WdBeforeAfterFunctional />
        <WdSmallProblemsScene />
        <WdAnatomyBlueprint />
        <WdDecisionPath />
        <WdGlassFrameCrossover />
        <WdPhoneGuide />
        <WdPropertyContext />
        <WdLandlordSection />
        <WdDammamContext />
        <WdSafetyBoundaries />
        <WdRelatedServices />
        <WdFinalCta />
        <WdFaq />
      </main>
      <Footer />
      <MobileStickyCta
        label="Show Us the Problem"
        whatsappMessage="Hello Dammam Home Solutions, I'd like to send a few photos of a door or window issue. "
      />
    </>
  );
}
