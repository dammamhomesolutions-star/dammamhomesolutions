import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileStickyCta from "@/components/MobileStickyCta";
import WaterproofingBreadcrumb from "@/components/waterproofing/WaterproofingBreadcrumb";
import WaterproofingHero from "@/components/waterproofing/WaterproofingHero";
import MoistureLocationSelector from "@/components/waterproofing/MoistureLocationSelector";
import MoistureMapSection from "@/components/waterproofing/MoistureMapSection";
import PaintNotSolutionSection from "@/components/waterproofing/PaintNotSolutionSection";
import WhereWaterproofingMatters from "@/components/waterproofing/WhereWaterproofingMatters";
import RoofWaterproofingSection from "@/components/waterproofing/RoofWaterproofingSection";
import BathroomWetAreaSection from "@/components/waterproofing/BathroomWetAreaSection";
import WaterproofingOrPlumbing from "@/components/waterproofing/WaterproofingOrPlumbing";
import SignsChecklist from "@/components/waterproofing/SignsChecklist";
import BeforeYouRequestSection from "@/components/waterproofing/BeforeYouRequestSection";
import AssessmentJourney from "@/components/waterproofing/AssessmentJourney";
import SurfaceDamageSection from "@/components/waterproofing/SurfaceDamageSection";
import DammamWaterproofingContext from "@/components/waterproofing/DammamWaterproofingContext";
import PropertyOwnersMoistureSection from "@/components/waterproofing/PropertyOwnersMoistureSection";
import WaterproofingRequestPanel from "@/components/waterproofing/WaterproofingRequestPanel";
import WaterproofingFaq from "@/components/waterproofing/WaterproofingFaq";

const pageUrl = `${siteConfig.url}/waterproofing/`;
const title = "Waterproofing in Dammam";
const description =
  "Waterproofing and moisture-related repairs in Dammam, including roofs, wet areas and affected surfaces. Send photos for an assessment.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/waterproofing/",
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

export default function WaterproofingPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: "Waterproofing & Water Leak Protection",
        serviceType: "Waterproofing and moisture protection",
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
        ctaLabel="WhatsApp About Waterproofing"
        whatsappMessage="Hello Dammam Home Solutions, I'd like help with a moisture or waterproofing problem."
      />
      <WaterproofingBreadcrumb />
      <main id="main">
        <WaterproofingHero />
        <MoistureLocationSelector />
        <MoistureMapSection />
        <PaintNotSolutionSection />
        <WhereWaterproofingMatters />
        <RoofWaterproofingSection />
        <BathroomWetAreaSection />
        <WaterproofingOrPlumbing />
        <SignsChecklist />
        <BeforeYouRequestSection />
        <AssessmentJourney />
        <SurfaceDamageSection />
        <DammamWaterproofingContext />
        <PropertyOwnersMoistureSection />
        <WaterproofingRequestPanel />
        <WaterproofingFaq />
      </main>
      <Footer />
      <MobileStickyCta
        label="WhatsApp Waterproofing"
        whatsappMessage="Hello Dammam Home Solutions, I'd like help with a moisture or waterproofing problem."
      />
    </>
  );
}
