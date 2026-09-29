import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { gdFaqs } from "@/lib/gate-garage-repair";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileStickyCta from "@/components/MobileStickyCta";
import GdSvgDefs from "@/components/gate-garage-repair/GdSvgDefs";
import GdBreadcrumb from "@/components/gate-garage-repair/GdBreadcrumb";
import GdHero from "@/components/gate-garage-repair/GdHero";
import GdWatchMovement from "@/components/gate-garage-repair/GdWatchMovement";
import GdMechanismExplorer from "@/components/gate-garage-repair/GdMechanismExplorer";
import GdAlignmentVisualizer from "@/components/gate-garage-repair/GdAlignmentVisualizer";
import GdSwingGate from "@/components/gate-garage-repair/GdSwingGate";
import GdMovementPoints from "@/components/gate-garage-repair/GdMovementPoints";
import GdExplodedDoor from "@/components/gate-garage-repair/GdExplodedDoor";
import GdConditionSimulator from "@/components/gate-garage-repair/GdConditionSimulator";
import GdBeforeAfterFunctional from "@/components/gate-garage-repair/GdBeforeAfterFunctional";
import GdSectionalAnimation from "@/components/gate-garage-repair/GdSectionalAnimation";
import GdSymptomWall from "@/components/gate-garage-repair/GdSymptomWall";
import GdPhotoRequest from "@/components/gate-garage-repair/GdPhotoRequest";
import GdRepairPathway from "@/components/gate-garage-repair/GdRepairPathway";
import GdPropertyScene from "@/components/gate-garage-repair/GdPropertyScene";
import GdPropertyBlueprint from "@/components/gate-garage-repair/GdPropertyBlueprint";
import GdDammamContext from "@/components/gate-garage-repair/GdDammamContext";
import GdScopeBoundaries from "@/components/gate-garage-repair/GdScopeBoundaries";
import GdRelatedServices from "@/components/gate-garage-repair/GdRelatedServices";
import GdFinalCta from "@/components/gate-garage-repair/GdFinalCta";
import GdFaq from "@/components/gate-garage-repair/GdFaq";

const pageUrl = `${siteConfig.url}/gate-garage-door-repair/`;
const title = "Gate & Garage Door Repair in Dammam";
const description =
  "Gate and garage door repair in Dammam for sticking, misaligned, noisy or damaged doors and gates. Send photos for an assessment.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/gate-garage-door-repair/",
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

export default function GateGarageDoorRepairPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: "Gate & Garage Door Repair",
        serviceType: "Gate and garage door repair",
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
        mainEntity: gdFaqs.map((faq) => ({
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
      <GdSvgDefs />
      <Header
        ctaLabel="WhatsApp About a Repair"
        whatsappMessage="Hello Dammam Home Solutions, I'd like to ask about a gate or garage door repair."
      />
      <GdBreadcrumb />
      <main id="main">
        <GdHero />
        <GdWatchMovement />
        <GdMechanismExplorer />
        <GdAlignmentVisualizer />
        <GdSwingGate />
        <GdMovementPoints />
        <GdExplodedDoor />
        <GdConditionSimulator />
        <GdBeforeAfterFunctional />
        <GdSectionalAnimation />
        <GdSymptomWall />
        <GdPhotoRequest />
        <GdRepairPathway />
        <GdPropertyScene />
        <GdPropertyBlueprint />
        <GdDammamContext />
        <GdScopeBoundaries />
        <GdRelatedServices />
        <GdFinalCta />
        <GdFaq />
      </main>
      <Footer />
      <MobileStickyCta
        label="Request Repair Assessment"
        whatsappMessage="Hello Dammam Home Solutions, I'd like to request a gate or garage door repair assessment. "
      />
    </>
  );
}
