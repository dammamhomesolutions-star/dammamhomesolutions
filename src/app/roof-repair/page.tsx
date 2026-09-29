import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { rfFaqs } from "@/lib/roof-repair";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileStickyCta from "@/components/MobileStickyCta";
import RfSvgDefs from "@/components/roof-repair/RfSvgDefs";
import RfBreadcrumb from "@/components/roof-repair/RfBreadcrumb";
import RfHero from "@/components/roof-repair/RfHero";
import RfFollowWater from "@/components/roof-repair/RfFollowWater";
import RfExplodedRoof from "@/components/roof-repair/RfExplodedRoof";
import RfRoofMap from "@/components/roof-repair/RfRoofMap";
import RfRainToRoom from "@/components/roof-repair/RfRainToRoom";
import RfInspectionMode from "@/components/roof-repair/RfInspectionMode";
import RfDamageSimulator from "@/components/roof-repair/RfDamageSimulator";
import RfDrainageAnimation from "@/components/roof-repair/RfDrainageAnimation";
import RfSurfaceVsSource from "@/components/roof-repair/RfSurfaceVsSource";
import RfEdgeParapet from "@/components/roof-repair/RfEdgeParapet";
import RfZoneNavigation from "@/components/roof-repair/RfZoneNavigation";
import RfRestorationMorph from "@/components/roof-repair/RfRestorationMorph";
import RfRoofTypeVisualizer from "@/components/roof-repair/RfRoofTypeVisualizer";
import RfWhatChanged from "@/components/roof-repair/RfWhatChanged";
import RfPhotoRequest from "@/components/roof-repair/RfPhotoRequest";
import RfRepairJourney from "@/components/roof-repair/RfRepairJourney";
import RfDammamContext from "@/components/roof-repair/RfDammamContext";
import RfScopeSafety from "@/components/roof-repair/RfScopeSafety";
import RfRelatedServices from "@/components/roof-repair/RfRelatedServices";
import RfFinalCta from "@/components/roof-repair/RfFinalCta";
import RfFaq from "@/components/roof-repair/RfFaq";

const pageUrl = `${siteConfig.url}/roof-repair/`;
const title = "Roof & Rooftop Repair in Dammam";
const description =
  "Roof and rooftop repair in Dammam for surface changes, water accumulation, drainage concerns, cracks and edge or parapet issues. Send photos for an assessment.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/roof-repair/",
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

export default function RoofRepairPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: "Roof & Rooftop Repair",
        serviceType: "Roof and rooftop repair",
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
        mainEntity: rfFaqs.map((faq) => ({
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
      <RfSvgDefs />
      <Header
        ctaLabel="WhatsApp About a Roof Issue"
        whatsappMessage="Hello Dammam Home Solutions, I'd like to ask about a roof or rooftop issue."
      />
      <RfBreadcrumb />
      <main id="main">
        <RfHero />
        <RfFollowWater />
        <RfExplodedRoof />
        <RfRoofMap />
        <RfRainToRoom />
        <RfInspectionMode />
        <RfDamageSimulator />
        <RfDrainageAnimation />
        <RfSurfaceVsSource />
        <RfEdgeParapet />
        <RfZoneNavigation />
        <RfRestorationMorph />
        <RfRoofTypeVisualizer />
        <RfWhatChanged />
        <RfPhotoRequest />
        <RfRepairJourney />
        <RfDammamContext />
        <RfScopeSafety />
        <RfRelatedServices />
        <RfFinalCta />
        <RfFaq />
      </main>
      <Footer />
      <MobileStickyCta
        label="Request Roof Assessment"
        whatsappMessage="Hello Dammam Home Solutions, I'd like to request a roof assessment. "
      />
    </>
  );
}
