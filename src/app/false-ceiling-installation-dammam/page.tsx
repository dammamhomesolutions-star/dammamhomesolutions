import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { fcFaqs } from "@/lib/false-ceiling";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FcBreadcrumb from "@/components/false-ceiling/FcBreadcrumb";
import FcHero from "@/components/false-ceiling/FcHero";
import FcAnswers from "@/components/false-ceiling/FcAnswers";
import FcSelector from "@/components/false-ceiling/FcSelector";
import FcSystems from "@/components/false-ceiling/FcSystems";
import FcSection from "@/components/false-ceiling/FcSection";
import FcRooms from "@/components/false-ceiling/FcRooms";
import FcHeight from "@/components/false-ceiling/FcHeight";
import FcLighting from "@/components/false-ceiling/FcLighting";
import FcServices from "@/components/false-ceiling/FcServices";
import FcMoisture from "@/components/false-ceiling/FcMoisture";
import FcDesign from "@/components/false-ceiling/FcDesign";
import FcCoordination from "@/components/false-ceiling/FcCoordination";
import FcRepairTool from "@/components/false-ceiling/FcRepairTool";
import FcProcess from "@/components/false-ceiling/FcProcess";
import FcSpaces from "@/components/false-ceiling/FcSpaces";
import FcProblems from "@/components/false-ceiling/FcProblems";
import FcCost from "@/components/false-ceiling/FcCost";
import FcPlanner from "@/components/false-ceiling/FcPlanner";
import FcRequestForm from "@/components/false-ceiling/FcRequestForm";
import FcFaq from "@/components/false-ceiling/FcFaq";
import FcRelatedServices from "@/components/false-ceiling/FcRelatedServices";
import FcFinalCta from "@/components/false-ceiling/FcFinalCta";
import FcMobileStickyCta from "@/components/false-ceiling/FcMobileStickyCta";

const path = "/false-ceiling-installation-dammam/";
const pageUrl = `${siteConfig.url}${path}`;
const title = "False Ceiling Installation in Dammam";
const description =
  "False ceiling installation in Dammam: gypsum, cove, multi-level and suspended ceilings planned around lighting, AC and access. For villas, apartments and offices.";

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

export default function FalseCeilingPage() {
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
        name: "False Ceiling Installation",
        serviceType: "Gypsum and suspended false ceiling installation",
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
          { "@type": "ListItem", position: 3, name: "False Ceiling Installation", item: pageUrl },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: fcFaqs.map((faq) => ({
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
        ctaLabel="WhatsApp About Ceilings"
        whatsappMessage="Hello Dammam Home Solutions, I have a question about a false ceiling."
      />
      <FcBreadcrumb />
      <main id="main" className="pb-20 lg:pb-0">
        <FcHero />
        <FcAnswers />
        <FcSelector />
        <FcSystems />
        <FcSection />
        <FcRooms />
        <FcHeight />
        <FcLighting />
        <FcServices />
        <FcMoisture />
        <FcDesign />
        <FcCoordination />
        <FcRepairTool />
        <FcProcess />
        <FcSpaces />
        <FcProblems />
        <FcCost />
        <FcPlanner />
        <FcRequestForm />
        <FcFaq />
        <FcRelatedServices />
        <FcFinalCta />
      </main>
      <Footer />
      <FcMobileStickyCta />
    </>
  );
}
