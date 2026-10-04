import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { wpFaqs } from "@/lib/water-pump";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WpBreadcrumb from "@/components/water-pump/WpBreadcrumb";
import WpHero from "@/components/water-pump/WpHero";
import WpAnswers from "@/components/water-pump/WpAnswers";
import WpDiagnostic from "@/components/water-pump/WpDiagnostic";
import WpPumpVsSystem from "@/components/water-pump/WpPumpVsSystem";
import WpSystem from "@/components/water-pump/WpSystem";
import WpProblems from "@/components/water-pump/WpProblems";
import WpPressure from "@/components/water-pump/WpPressure";
import WpLeakNoise from "@/components/water-pump/WpLeakNoise";
import WpTypes from "@/components/water-pump/WpTypes";
import WpControl from "@/components/water-pump/WpControl";
import WpProcess from "@/components/water-pump/WpProcess";
import WpProperties from "@/components/water-pump/WpProperties";
import WpCost from "@/components/water-pump/WpCost";
import WpSafety from "@/components/water-pump/WpSafety";
import WpPrep from "@/components/water-pump/WpPrep";
import WpRequestForm from "@/components/water-pump/WpRequestForm";
import WpFaq from "@/components/water-pump/WpFaq";
import WpRelatedServices from "@/components/water-pump/WpRelatedServices";
import WpFinalCta from "@/components/water-pump/WpFinalCta";
import WpMobileStickyCta from "@/components/water-pump/WpMobileStickyCta";

const path = "/water-pump-repair-dammam/";
const pageUrl = `${siteConfig.url}${path}`;
const title = "Water Pump Repair in Dammam";
const description =
  "Water pump repair in Dammam for booster, transfer and submersible pumps. We check whether low pressure is the pump or the system before repairing or replacing.";

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

export default function WaterPumpRepairPage() {
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
        name: "Water Pump Repair",
        serviceType: "Water pump repair, replacement and installation",
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
          { "@type": "ListItem", position: 3, name: "Water Pump Repair", item: pageUrl },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: wpFaqs.map((faq) => ({
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
        ctaLabel="WhatsApp About Your Pump"
        whatsappMessage="Hello Dammam Home Solutions, I have a question about my water pump."
      />
      <WpBreadcrumb />
      <main id="main" className="pb-20 lg:pb-0">
        <WpHero />
        <WpAnswers />
        <WpDiagnostic />
        <WpPumpVsSystem />
        <WpSystem />
        <WpProblems />
        <WpPressure />
        <WpLeakNoise />
        <WpTypes />
        <WpControl />
        <WpProcess />
        <WpProperties />
        <WpCost />
        <WpSafety />
        <WpPrep />
        <WpRequestForm />
        <WpFaq />
        <WpRelatedServices />
        <WpFinalCta />
      </main>
      <Footer />
      <WpMobileStickyCta />
    </>
  );
}
