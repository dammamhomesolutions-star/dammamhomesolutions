import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { cbFaqs } from "@/lib/curtain-blind";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CbBreadcrumb from "@/components/curtain-blind/CbBreadcrumb";
import CbHero from "@/components/curtain-blind/CbHero";
import CbAnswers from "@/components/curtain-blind/CbAnswers";
import CbSelector from "@/components/curtain-blind/CbSelector";
import CbTypes from "@/components/curtain-blind/CbTypes";
import CbMounting from "@/components/curtain-blind/CbMounting";
import CbWindows from "@/components/curtain-blind/CbWindows";
import CbMeasure from "@/components/curtain-blind/CbMeasure";
import CbRodTrack from "@/components/curtain-blind/CbRodTrack";
import CbLight from "@/components/curtain-blind/CbLight";
import CbRooms from "@/components/curtain-blind/CbRooms";
import CbObstruction from "@/components/curtain-blind/CbObstruction";
import CbSliding from "@/components/curtain-blind/CbSliding";
import CbProcess from "@/components/curtain-blind/CbProcess";
import CbBuilder from "@/components/curtain-blind/CbBuilder";
import CbCommercial from "@/components/curtain-blind/CbCommercial";
import CbProblems from "@/components/curtain-blind/CbProblems";
import CbCost from "@/components/curtain-blind/CbCost";
import CbRequestForm from "@/components/curtain-blind/CbRequestForm";
import CbFaq from "@/components/curtain-blind/CbFaq";
import CbRelatedServices from "@/components/curtain-blind/CbRelatedServices";
import CbFinalCta from "@/components/curtain-blind/CbFinalCta";
import CbMobileStickyCta from "@/components/curtain-blind/CbMobileStickyCta";

const path = "/curtain-blind-installation-dammam/";
const pageUrl = `${siteConfig.url}${path}`;
const title = "Curtain & Blind Installation in Dammam";
const description =
  "Curtain and blind installation in Dammam: rods, wall and ceiling tracks, roller, blackout and motorised blinds. Measuring, supply and fitting for homes and businesses.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: path,
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

export default function CurtainBlindPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: `${title} | ${siteConfig.name}`,
        description,
        isPartOf: { "@id": `${siteConfig.url}/#website` },
        about: { "@id": `${pageUrl}#service` },
      },
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: "Curtain & Blind Installation",
        serviceType: "Curtain, blind, rod and track installation",
        description,
        url: pageUrl,
        provider: { "@id": `${siteConfig.url}/#business` },
        areaServed: {
          "@type": "City",
          name: "Dammam",
          containedInPlace: {
            "@type": "AdministrativeArea",
            name: "Eastern Province, Saudi Arabia",
          },
        },
        audience: [
          { "@type": "Audience", audienceType: "Homeowners, tenants and landlords" },
          { "@type": "Audience", audienceType: "Commercial properties" },
        ],
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
          { "@type": "ListItem", position: 2, name: "Services", item: `${siteConfig.url}/#services` },
          { "@type": "ListItem", position: 3, name: "Curtain & Blind Installation", item: pageUrl },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: cbFaqs.map((faq) => ({
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
      <Header
        ctaLabel="WhatsApp About Curtains"
        whatsappMessage="Hello Dammam Home Solutions, I have a question about curtain or blind installation."
      />
      <CbBreadcrumb />
      <main id="main" className="pb-20 lg:pb-0">
        <CbHero />
        <CbAnswers />
        <CbSelector />
        <CbTypes />
        <CbMounting />
        <CbWindows />
        <CbMeasure />
        <CbRodTrack />
        <CbLight />
        <CbRooms />
        <CbObstruction />
        <CbSliding />
        <CbProcess />
        <CbBuilder />
        <CbCommercial />
        <CbProblems />
        <CbCost />
        <CbRequestForm />
        <CbFaq />
        <CbRelatedServices />
        <CbFinalCta />
      </main>
      <Footer />
      <CbMobileStickyCta />
    </>
  );
}
