import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { wtFaqs } from "@/lib/water-tank-cleaning";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileStickyCta from "@/components/MobileStickyCta";
import WtSvgDefs from "@/components/water-tank-cleaning/WtSvgDefs";
import WtBreadcrumb from "@/components/water-tank-cleaning/WtBreadcrumb";
import WtHero from "@/components/water-tank-cleaning/WtHero";
import WtBuildupSimulator from "@/components/water-tank-cleaning/WtBuildupSimulator";
import WtTankTypeSelector from "@/components/water-tank-cleaning/WtTankTypeSelector";
import WtSignsWall from "@/components/water-tank-cleaning/WtSignsWall";
import WtCleaningJourney from "@/components/water-tank-cleaning/WtCleaningJourney";
import WtPhotoRequest from "@/components/water-tank-cleaning/WtPhotoRequest";
import WtDammamContext from "@/components/water-tank-cleaning/WtDammamContext";
import WtScopeSafety from "@/components/water-tank-cleaning/WtScopeSafety";
import WtRelatedServices from "@/components/water-tank-cleaning/WtRelatedServices";
import WtFinalCta from "@/components/water-tank-cleaning/WtFinalCta";
import WtFaq from "@/components/water-tank-cleaning/WtFaq";

const pageUrl = `${siteConfig.url}/water-tank-cleaning/`;
const title = "Water Tank Cleaning in Dammam";
const description =
  "Water tank cleaning in Dammam for rooftop, underground and steel tanks — sediment removal, disinfection and general tank condition assessment. Send a photo for an assessment.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/water-tank-cleaning/",
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

export default function WaterTankCleaningPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: "Water Tank Cleaning",
        serviceType: "Water tank cleaning",
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
          { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
          { "@type": "ListItem", position: 2, name: title, item: pageUrl },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: wtFaqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: { "@type": "Answer", text: faq.a },
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
      <WtSvgDefs />
      <Header
        ctaLabel="WhatsApp About Tank Cleaning"
        whatsappMessage="Hello Dammam Home Solutions, I'd like to ask about water tank cleaning."
      />
      <WtBreadcrumb />
      <main id="main">
        <WtHero />
        <WtBuildupSimulator />
        <WtTankTypeSelector />
        <WtSignsWall />
        <WtCleaningJourney />
        <WtPhotoRequest />
        <WtDammamContext />
        <WtScopeSafety />
        <WtRelatedServices />
        <WtFinalCta />
        <WtFaq />
      </main>
      <Footer />
      <MobileStickyCta
        label="Request Tank Cleaning"
        whatsappMessage="Hello Dammam Home Solutions, I'd like to request a water tank cleaning. "
      />
    </>
  );
}
