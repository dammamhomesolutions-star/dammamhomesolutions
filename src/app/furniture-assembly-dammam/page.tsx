import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { faFaqs } from "@/lib/furniture-assembly";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FaBreadcrumb from "@/components/furniture-assembly/FaBreadcrumb";
import FaHero from "@/components/furniture-assembly/FaHero";
import FaAnswers from "@/components/furniture-assembly/FaAnswers";
import FaSelector from "@/components/furniture-assembly/FaSelector";
import FaTypes from "@/components/furniture-assembly/FaTypes";
import FaComplexity from "@/components/furniture-assembly/FaComplexity";
import FaDiagram from "@/components/furniture-assembly/FaDiagram";
import FaFlatPack from "@/components/furniture-assembly/FaFlatPack";
import FaStability from "@/components/furniture-assembly/FaStability";
import FaRooms from "@/components/furniture-assembly/FaRooms";
import FaReassembly from "@/components/furniture-assembly/FaReassembly";
import FaBuilder from "@/components/furniture-assembly/FaBuilder";
import FaMaterials from "@/components/furniture-assembly/FaMaterials";
import FaProcess from "@/components/furniture-assembly/FaProcess";
import FaCost from "@/components/furniture-assembly/FaCost";
import FaProblems from "@/components/furniture-assembly/FaProblems";
import FaRequestForm from "@/components/furniture-assembly/FaRequestForm";
import FaFaq from "@/components/furniture-assembly/FaFaq";
import FaRelatedServices from "@/components/furniture-assembly/FaRelatedServices";
import FaFinalCta from "@/components/furniture-assembly/FaFinalCta";
import FaMobileStickyCta from "@/components/furniture-assembly/FaMobileStickyCta";

const path = "/furniture-assembly-dammam/";
const pageUrl = `${siteConfig.url}${path}`;
const title = "Furniture Assembly in Dammam";
const description =
  "Furniture assembly in Dammam for flat-pack and new furniture: wardrobes, beds, desks, cabinets and office furniture. Reassembly after moving and wall anchoring too.";

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

export default function FurnitureAssemblyPage() {
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
        name: "Furniture Assembly",
        serviceType: "Flat-pack and furniture assembly",
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
          { "@type": "ListItem", position: 3, name: "Furniture Assembly", item: pageUrl },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: faFaqs.map((faq) => ({
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
        ctaLabel="WhatsApp About Assembly"
        whatsappMessage="Hello Dammam Home Solutions, I have a question about furniture assembly."
      />
      <FaBreadcrumb />
      <main id="main" className="pb-20 lg:pb-0">
        <FaHero />
        <FaAnswers />
        <FaSelector />
        <FaTypes />
        <FaComplexity />
        <FaDiagram />
        <FaFlatPack />
        <FaStability />
        <FaRooms />
        <FaReassembly />
        <FaBuilder />
        <FaMaterials />
        <FaProcess />
        <FaCost />
        <FaProblems />
        <FaRequestForm />
        <FaFaq />
        <FaRelatedServices />
        <FaFinalCta />
      </main>
      <Footer />
      <FaMobileStickyCta />
    </>
  );
}
