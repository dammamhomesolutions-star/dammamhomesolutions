import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { bwFaqs } from "@/lib/boundary-wall";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BwBreadcrumb from "@/components/boundary-wall/BwBreadcrumb";
import BwHero from "@/components/boundary-wall/BwHero";
import BwQuick from "@/components/boundary-wall/BwQuick";
import BwWarning from "@/components/boundary-wall/BwWarning";
import BwSelector from "@/components/boundary-wall/BwSelector";
import BwSection from "@/components/boundary-wall/BwSection";
import BwCracks from "@/components/boundary-wall/BwCracks";
import BwRebuildTool from "@/components/boundary-wall/BwRebuildTool";
import BwMaterial from "@/components/boundary-wall/BwMaterial";
import BwSurface from "@/components/boundary-wall/BwSurface";
import BwCoping from "@/components/boundary-wall/BwCoping";
import BwContext from "@/components/boundary-wall/BwContext";
import BwMap from "@/components/boundary-wall/BwMap";
import BwProblems from "@/components/boundary-wall/BwProblems";
import BwRepaint from "@/components/boundary-wall/BwRepaint";
import BwProcess from "@/components/boundary-wall/BwProcess";
import BwCost from "@/components/boundary-wall/BwCost";
import BwRequestForm from "@/components/boundary-wall/BwRequestForm";
import BwCare from "@/components/boundary-wall/BwCare";
import BwAnswers from "@/components/boundary-wall/BwAnswers";
import BwFaq from "@/components/boundary-wall/BwFaq";
import BwRelatedServices from "@/components/boundary-wall/BwRelatedServices";
import BwFinalCta from "@/components/boundary-wall/BwFinalCta";
import BwMobileStickyCta from "@/components/boundary-wall/BwMobileStickyCta";

const path = "/outdoor-boundary-wall-repair-dammam/";
const pageUrl = `${siteConfig.url}${path}`;
const title = "Outdoor & Boundary Wall Repair in Dammam";
const description =
  "Outdoor and boundary wall repair in Dammam: cracks, damaged plaster, coping, damp-damaged finishes and partial rebuilding, assessed first and finished properly.";

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

export default function BoundaryWallPage() {
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
        name: "Outdoor & Boundary Wall Repair",
        serviceType: "Exterior and boundary wall crack, plaster and coping repair",
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
          { "@type": "ListItem", position: 3, name: "Outdoor & Boundary Wall Repair", item: pageUrl },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: bwFaqs.map((faq) => ({
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
        ctaLabel="WhatsApp About Your Wall"
        whatsappMessage="Hello Dammam Home Solutions, I have a question about an outdoor / boundary wall repair."
      />
      <BwBreadcrumb />
      <main id="main" className="pb-20 lg:pb-0">
        <BwHero />
        <BwQuick />
        <BwWarning />
        <BwSelector />
        <BwSection />
        <BwCracks />
        <BwRebuildTool />
        <BwMaterial />
        <BwSurface />
        <BwCoping />
        <BwContext />
        <BwMap />
        <BwProblems />
        <BwRepaint />
        <BwProcess />
        <BwCost />
        <BwRequestForm />
        <BwCare />
        <BwAnswers />
        <BwFaq />
        <BwRelatedServices />
        <BwFinalCta />
      </main>
      <Footer />
      <BwMobileStickyCta />
    </>
  );
}
