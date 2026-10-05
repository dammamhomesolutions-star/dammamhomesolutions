import type { Metadata } from "next";
import { languageAlternates } from "@/lib/i18n";
import { siteConfig } from "@/lib/site-config";
import { wlFaqs } from "@/lib/water-leak-repair";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileStickyCta from "@/components/MobileStickyCta";
import WlSvgDefs from "@/components/water-leak-repair/WlSvgDefs";
import WlBreadcrumb from "@/components/water-leak-repair/WlBreadcrumb";
import WlHero from "@/components/water-leak-repair/WlHero";
import WlMeterTest from "@/components/water-leak-repair/WlMeterTest";
import WlTraceBack from "@/components/water-leak-repair/WlTraceBack";
import WlZoneSelector from "@/components/water-leak-repair/WlZoneSelector";
import WlHiddenVsVisible from "@/components/water-leak-repair/WlHiddenVsVisible";
import WlSymptomWall from "@/components/water-leak-repair/WlSymptomWall";
import WlRepairJourney from "@/components/water-leak-repair/WlRepairJourney";
import WlPhotoRequest from "@/components/water-leak-repair/WlPhotoRequest";
import WlDammamContext from "@/components/water-leak-repair/WlDammamContext";
import WlScopeSafety from "@/components/water-leak-repair/WlScopeSafety";
import WlRelatedServices from "@/components/water-leak-repair/WlRelatedServices";
import WlFinalCta from "@/components/water-leak-repair/WlFinalCta";
import WlFaq from "@/components/water-leak-repair/WlFaq";

const pageUrl = `${siteConfig.url}/water-leak-repair/`;
const title = "Water Leak Detection in Dammam";
const description =
  "Water leak detection and repair in Dammam for damp patches, ceiling stains and hidden leaks behind walls or under floors. Send photos for an assessment.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/water-leak-repair/", languages: languageAlternates("/water-leak-repair/"),
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

export default function WaterLeakRepairPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: "Water Leak Detection & Repair",
        serviceType: "Water leak detection and repair",
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
        mainEntity: wlFaqs.map((faq) => ({
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
      <WlSvgDefs />
      <Header
        ctaLabel="WhatsApp About a Leak"
        whatsappMessage="Hello Dammam Home Solutions, I'd like to ask about a possible water leak."
      />
      <WlBreadcrumb />
      <main id="main">
        <WlHero />
        <WlMeterTest />
        <WlTraceBack />
        <WlZoneSelector />
        <WlHiddenVsVisible />
        <WlSymptomWall />
        <WlRepairJourney />
        <WlPhotoRequest />
        <WlDammamContext />
        <WlScopeSafety />
        <WlRelatedServices />
        <WlFinalCta />
        <WlFaq />
      </main>
      <Footer />
      <MobileStickyCta
        label="Request Leak Assessment"
        whatsappMessage="Hello Dammam Home Solutions, I'd like to request a water leak assessment. "
      />
    </>
  );
}
