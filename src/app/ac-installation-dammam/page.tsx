import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { aiFaqs } from "@/lib/ac-installation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AiBreadcrumb from "@/components/ac-installation/AiBreadcrumb";
import AiHero from "@/components/ac-installation/AiHero";
import AiProblem from "@/components/ac-installation/AiProblem";
import AiTypeSelector from "@/components/ac-installation/AiTypeSelector";
import AiSizing from "@/components/ac-installation/AiSizing";
import AiPlacement from "@/components/ac-installation/AiPlacement";
import AiTechnical from "@/components/ac-installation/AiTechnical";
import AiProcess from "@/components/ac-installation/AiProcess";
import AiNewReplace from "@/components/ac-installation/AiNewReplace";
import AiProperties from "@/components/ac-installation/AiProperties";
import AiCost from "@/components/ac-installation/AiCost";
import AiScope from "@/components/ac-installation/AiScope";
import AiPrepQuestions from "@/components/ac-installation/AiPrepQuestions";
import AiDecisionTool from "@/components/ac-installation/AiDecisionTool";
import AiRequestForm from "@/components/ac-installation/AiRequestForm";
import AiFaq from "@/components/ac-installation/AiFaq";
import AiRelatedServices from "@/components/ac-installation/AiRelatedServices";
import AiFinalCta from "@/components/ac-installation/AiFinalCta";
import AiMobileStickyCta from "@/components/ac-installation/AiMobileStickyCta";

const path = "/ac-installation-dammam/";
const pageUrl = `${siteConfig.url}${path}`;
const title = "AC Installation in Dammam";
const description =
  "AC installation in Dammam for split, ducted, window, cassette and floor-standing units. Sizing, placement, piping, drainage, electrical connection and testing, planned properly.";

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

export default function AcInstallationPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: "AC Installation",
        serviceType: "Air Conditioner Installation",
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
          { "@type": "Audience", audienceType: "Businesses" },
        ],
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
          { "@type": "ListItem", position: 2, name: "Services", item: `${siteConfig.url}/#services` },
          { "@type": "ListItem", position: 3, name: "AC Installation", item: pageUrl },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: aiFaqs.map((faq) => ({
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
        ctaLabel="WhatsApp About AC Installation"
        whatsappMessage="Hello Dammam Home Solutions, I'd like to ask about AC installation."
      />
      <AiBreadcrumb />
      <main id="main" className="pb-20 lg:pb-0">
        <AiHero />
        <AiProblem />
        <AiTypeSelector />
        <AiSizing />
        <AiPlacement />
        <AiTechnical />
        <AiProcess />
        <AiNewReplace />
        <AiProperties />
        <AiCost />
        <AiScope />
        <AiPrepQuestions />
        <AiDecisionTool />
        <AiRequestForm />
        <AiFaq />
        <AiRelatedServices />
        <AiFinalCta />
      </main>
      <Footer />
      <AiMobileStickyCta />
    </>
  );
}
