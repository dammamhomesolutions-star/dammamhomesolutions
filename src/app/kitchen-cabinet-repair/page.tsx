import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { kcFaqs } from "@/lib/kitchen-cabinet-repair";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileStickyCta from "@/components/MobileStickyCta";
import KcSvgDefs from "@/components/kitchen-cabinet-repair/KcSvgDefs";
import KcBreadcrumb from "@/components/kitchen-cabinet-repair/KcBreadcrumb";
import KcHero from "@/components/kitchen-cabinet-repair/KcHero";
import KcScrollTransformation from "@/components/kitchen-cabinet-repair/KcScrollTransformation";
import KcProblemSelector from "@/components/kitchen-cabinet-repair/KcProblemSelector";
import KcExplodedCabinet from "@/components/kitchen-cabinet-repair/KcExplodedCabinet";
import KcHingeAlignment from "@/components/kitchen-cabinet-repair/KcHingeAlignment";
import KcDrawerSimulator from "@/components/kitchen-cabinet-repair/KcDrawerSimulator";
import KcDamageMorph from "@/components/kitchen-cabinet-repair/KcDamageMorph";
import KcMaterialSwitcher from "@/components/kitchen-cabinet-repair/KcMaterialSwitcher";
import KcDecisionPath from "@/components/kitchen-cabinet-repair/KcDecisionPath";
import KcBeforeAfterFunctional from "@/components/kitchen-cabinet-repair/KcBeforeAfterFunctional";
import KcEverydayAnnoyance from "@/components/kitchen-cabinet-repair/KcEverydayAnnoyance";
import KcBlueprint from "@/components/kitchen-cabinet-repair/KcBlueprint";
import KcKitchenCameraScroll from "@/components/kitchen-cabinet-repair/KcKitchenCameraScroll";
import KcCrossoverRouting from "@/components/kitchen-cabinet-repair/KcCrossoverRouting";
import KcPhoneGuide from "@/components/kitchen-cabinet-repair/KcPhoneGuide";
import KcMultiCabinetSelector from "@/components/kitchen-cabinet-repair/KcMultiCabinetSelector";
import KcRentalSection from "@/components/kitchen-cabinet-repair/KcRentalSection";
import KcDammamContext from "@/components/kitchen-cabinet-repair/KcDammamContext";
import KcScopeBoundaries from "@/components/kitchen-cabinet-repair/KcScopeBoundaries";
import KcRelatedServices from "@/components/kitchen-cabinet-repair/KcRelatedServices";
import KcFinalCta from "@/components/kitchen-cabinet-repair/KcFinalCta";
import KcFaq from "@/components/kitchen-cabinet-repair/KcFaq";

const pageUrl = `${siteConfig.url}/kitchen-cabinet-repair/`;
const title = "Kitchen Cabinet Repair in Dammam";
const description =
  "Kitchen cabinet repair in Dammam for damaged doors, hinges, handles, drawers, panels and everyday joinery problems. Send photos of the cabinet for assessment.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/kitchen-cabinet-repair/",
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

export default function KitchenCabinetRepairPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: "Kitchen Cabinet & Joinery Repair",
        serviceType: "Kitchen cabinet and joinery repair",
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
        mainEntity: kcFaqs.map((faq) => ({
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
      <KcSvgDefs />
      <Header
        ctaLabel="WhatsApp About a Repair"
        whatsappMessage="Hello Dammam Home Solutions, I'd like to ask about a kitchen cabinet repair."
      />
      <KcBreadcrumb />
      <main id="main">
        <KcHero />
        <KcScrollTransformation />
        <KcProblemSelector />
        <KcExplodedCabinet />
        <KcHingeAlignment />
        <KcDrawerSimulator />
        <KcDamageMorph />
        <KcMaterialSwitcher />
        <KcDecisionPath />
        <KcBeforeAfterFunctional />
        <KcEverydayAnnoyance />
        <KcBlueprint />
        <KcKitchenCameraScroll />
        <KcCrossoverRouting />
        <KcPhoneGuide />
        <KcMultiCabinetSelector />
        <KcRentalSection />
        <KcDammamContext />
        <KcScopeBoundaries />
        <KcRelatedServices />
        <KcFinalCta />
        <KcFaq />
      </main>
      <Footer />
      <MobileStickyCta
        label="Show Us the Cabinet"
        whatsappMessage="Hello Dammam Home Solutions, I'd like to send a few photos of my kitchen cabinet. "
      />
    </>
  );
}
