import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { pcFaqs } from "@/lib/pest-control";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PcBreadcrumb from "@/components/pest-control/PcBreadcrumb";
import PcHero from "@/components/pest-control/PcHero";
import PcDirectAnswer from "@/components/pest-control/PcDirectAnswer";
import PcIdentifier from "@/components/pest-control/PcIdentifier";
import PcPropertyMap from "@/components/pest-control/PcPropertyMap";
import PcRecurring from "@/components/pest-control/PcRecurring";
import PcControlPrevention from "@/components/pest-control/PcControlPrevention";
import PcPestSections from "@/components/pest-control/PcPestSections";
import PcComparison from "@/components/pest-control/PcComparison";
import PcInspection from "@/components/pest-control/PcInspection";
import PcSafety from "@/components/pest-control/PcSafety";
import PcMistakes from "@/components/pest-control/PcMistakes";
import PcDecisionTool from "@/components/pest-control/PcDecisionTool";
import PcPropertyTypes from "@/components/pest-control/PcPropertyTypes";
import PcLocal from "@/components/pest-control/PcLocal";
import PcRequestForm from "@/components/pest-control/PcRequestForm";
import PcFaq from "@/components/pest-control/PcFaq";
import PcRelatedServices from "@/components/pest-control/PcRelatedServices";
import PcFinalCta from "@/components/pest-control/PcFinalCta";
import PcMobileStickyCta from "@/components/pest-control/PcMobileStickyCta";

const path = "/pest-control-dammam/";
const pageUrl = `${siteConfig.url}${path}`;
const title = "Pest Control in Dammam";
const description =
  "Pest control in Dammam for homes and businesses. Identify pest activity, treat infestations and reduce the conditions that let cockroaches, ants and other pests return.";

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

export default function PestControlPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: "Pest Control",
        serviceType: "Pest Control",
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
          { "@type": "Audience", audienceType: "Homeowners and tenants" },
          { "@type": "Audience", audienceType: "Businesses and property managers" },
        ],
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
          { "@type": "ListItem", position: 2, name: "Services", item: `${siteConfig.url}/#services` },
          { "@type": "ListItem", position: 3, name: "Pest Control", item: pageUrl },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: pcFaqs.map((faq) => ({
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
        ctaLabel="WhatsApp About Pests"
        whatsappMessage="Hello Dammam Home Solutions, I'd like to ask about pest control."
      />
      <PcBreadcrumb />
      <main id="main" className="pb-20 lg:pb-0">
        <PcHero />
        <PcDirectAnswer />
        <PcIdentifier />
        <PcPropertyMap />
        <PcRecurring />
        <PcControlPrevention />
        <PcPestSections />
        <PcComparison />
        <PcInspection />
        <PcSafety />
        <PcMistakes />
        <PcDecisionTool />
        <PcPropertyTypes />
        <PcLocal />
        <PcRequestForm />
        <PcFaq />
        <PcRelatedServices />
        <PcFinalCta />
      </main>
      <Footer />
      <PcMobileStickyCta />
    </>
  );
}
