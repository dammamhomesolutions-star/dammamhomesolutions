import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { mgFaqs } from "@/lib/marble-granite";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MgBreadcrumb from "@/components/marble-granite/MgBreadcrumb";
import MgHero from "@/components/marble-granite/MgHero";
import MgSigns from "@/components/marble-granite/MgSigns";
import MgAnswers from "@/components/marble-granite/MgAnswers";
import MgDiagnostic from "@/components/marble-granite/MgDiagnostic";
import MgCompare from "@/components/marble-granite/MgCompare";
import MgTreatments from "@/components/marble-granite/MgTreatments";
import MgSurface from "@/components/marble-granite/MgSurface";
import MgCauses from "@/components/marble-granite/MgCauses";
import MgVisualizer from "@/components/marble-granite/MgVisualizer";
import MgRooms from "@/components/marble-granite/MgRooms";
import MgLocation from "@/components/marble-granite/MgLocation";
import MgProcess from "@/components/marble-granite/MgProcess";
import MgTraffic from "@/components/marble-granite/MgTraffic";
import MgLimits from "@/components/marble-granite/MgLimits";
import MgReplaceTool from "@/components/marble-granite/MgReplaceTool";
import MgRequestForm from "@/components/marble-granite/MgRequestForm";
import MgCost from "@/components/marble-granite/MgCost";
import MgCare from "@/components/marble-granite/MgCare";
import MgFaq from "@/components/marble-granite/MgFaq";
import MgRelatedServices from "@/components/marble-granite/MgRelatedServices";
import MgFinalCta from "@/components/marble-granite/MgFinalCta";
import MgMobileStickyCta from "@/components/marble-granite/MgMobileStickyCta";

const path = "/marble-granite-polishing-dammam/";
const pageUrl = `${siteConfig.url}${path}`;
const title = "Marble & Granite Polishing in Dammam";
const description =
  "Marble and granite polishing in Dammam for dull, scratched or worn floors, countertops and stairs, with honest advice on cleaning, honing or restoration.";

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

export default function MarbleGranitePage() {
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
        name: "Marble & Granite Polishing",
        serviceType: "Marble and granite polishing, honing and restoration",
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
          { "@type": "ListItem", position: 2, name: "Services", item: `${siteConfig.url}/services/` },
          { "@type": "ListItem", position: 3, name: "Marble & Granite Polishing", item: pageUrl },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: mgFaqs.map((faq) => ({
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
        ctaLabel="WhatsApp About Stone"
        whatsappMessage="Hello Dammam Home Solutions, I have a question about marble / granite polishing."
      />
      <MgBreadcrumb />
      <main id="main" className="pb-20 lg:pb-0">
        <MgHero />
        <MgSigns />
        <MgAnswers />
        <MgDiagnostic />
        <MgCompare />
        <MgTreatments />
        <MgSurface />
        <MgCauses />
        <MgVisualizer />
        <MgRooms />
        <MgLocation />
        <MgProcess />
        <MgTraffic />
        <MgLimits />
        <MgReplaceTool />
        <MgRequestForm />
        <MgCost />
        <MgCare />
        <MgFaq />
        <MgRelatedServices />
        <MgFinalCta />
      </main>
      <Footer />
      <MgMobileStickyCta />
    </>
  );
}
