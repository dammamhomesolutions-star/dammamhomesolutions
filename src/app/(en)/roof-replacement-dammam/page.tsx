import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { rrFaqs } from "@/lib/roof-replacement";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RrBreadcrumb from "@/components/roof-replacement/RrBreadcrumb";
import RrHero from "@/components/roof-replacement/RrHero";
import RrDirectAnswer from "@/components/roof-replacement/RrDirectAnswer";
import RrSymptoms from "@/components/roof-replacement/RrSymptoms";
import RrDecision from "@/components/roof-replacement/RrDecision";
import RrLeakNotReplace from "@/components/roof-replacement/RrLeakNotReplace";
import RrDamageMap from "@/components/roof-replacement/RrDamageMap";
import RrDiagnostic from "@/components/roof-replacement/RrDiagnostic";
import RrInspection from "@/components/roof-replacement/RrInspection";
import RrClimate from "@/components/roof-replacement/RrClimate";
import RrRoofTypes from "@/components/roof-replacement/RrRoofTypes";
import RrSystems from "@/components/roof-replacement/RrSystems";
import RrWaterproofing from "@/components/roof-replacement/RrWaterproofing";
import RrInsulation from "@/components/roof-replacement/RrInsulation";
import RrDrainage from "@/components/roof-replacement/RrDrainage";
import RrProcess from "@/components/roof-replacement/RrProcess";
import RrHiddenLayers from "@/components/roof-replacement/RrHiddenLayers";
import RrCost from "@/components/roof-replacement/RrCost";
import RrPlanning from "@/components/roof-replacement/RrPlanning";
import RrPropertyTypes from "@/components/roof-replacement/RrPropertyTypes";
import RrJourney from "@/components/roof-replacement/RrJourney";
import RrLocalTrust from "@/components/roof-replacement/RrLocalTrust";
import RrRequestForm from "@/components/roof-replacement/RrRequestForm";
import RrFaq from "@/components/roof-replacement/RrFaq";
import RrRelatedServices from "@/components/roof-replacement/RrRelatedServices";
import RrFinalCta from "@/components/roof-replacement/RrFinalCta";
import RrMobileStickyCta from "@/components/roof-replacement/RrMobileStickyCta";

const path = "/roof-replacement-dammam/";
const pageUrl = `${siteConfig.url}${path}`;
const title = "Roof Replacement in Dammam";
const description =
  "Need roof replacement in Dammam? Assess leaks, waterproofing, roof deterioration and drainage before deciding between repair, restoration or replacement.";

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

export default function RoofReplacementPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: "Roof Replacement",
        serviceType: "Roof Replacement",
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
          { "@type": "Audience", audienceType: "Homeowners and landlords" },
          { "@type": "Audience", audienceType: "Businesses and property managers" },
        ],
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
          { "@type": "ListItem", position: 2, name: "Services", item: `${siteConfig.url}/services/` },
          { "@type": "ListItem", position: 3, name: "Roof Replacement", item: pageUrl },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: rrFaqs.map((faq) => ({
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
        ctaLabel="WhatsApp About Your Roof"
        whatsappMessage="Hello Dammam Home Solutions, I'd like to ask about roof replacement."
      />
      <RrBreadcrumb />
      <main id="main" className="pb-20 lg:pb-0">
        <RrHero />
        <RrDirectAnswer />
        <RrSymptoms />
        <RrDecision />
        <RrLeakNotReplace />
        <RrDamageMap />
        <RrDiagnostic />
        <RrInspection />
        <RrClimate />
        <RrRoofTypes />
        <RrSystems />
        <RrWaterproofing />
        <RrInsulation />
        <RrDrainage />
        <RrProcess />
        <RrHiddenLayers />
        <RrCost />
        <RrPlanning />
        <RrPropertyTypes />
        <RrJourney />
        <RrLocalTrust />
        <RrRequestForm />
        <RrFaq />
        <RrRelatedServices />
        <RrFinalCta />
      </main>
      <Footer />
      <RrMobileStickyCta />
    </>
  );
}
