import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { apFaqs } from "@/lib/appliance-repair";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ApBreadcrumb from "@/components/appliance-repair/ApBreadcrumb";
import ApHero from "@/components/appliance-repair/ApHero";
import ApAnswers from "@/components/appliance-repair/ApAnswers";
import ApDiagnostic from "@/components/appliance-repair/ApDiagnostic";
import ApHealth from "@/components/appliance-repair/ApHealth";
import ApWasher from "@/components/appliance-repair/ApWasher";
import ApFridge from "@/components/appliance-repair/ApFridge";
import ApOven from "@/components/appliance-repair/ApOven";
import ApModel from "@/components/appliance-repair/ApModel";
import ApProcess from "@/components/appliance-repair/ApProcess";
import ApReplaceTool from "@/components/appliance-repair/ApReplaceTool";
import ApCost from "@/components/appliance-repair/ApCost";
import ApSafety from "@/components/appliance-repair/ApSafety";
import ApProperties from "@/components/appliance-repair/ApProperties";
import ApRequestForm from "@/components/appliance-repair/ApRequestForm";
import ApFaq from "@/components/appliance-repair/ApFaq";
import ApRelatedServices from "@/components/appliance-repair/ApRelatedServices";
import ApFinalCta from "@/components/appliance-repair/ApFinalCta";
import ApMobileStickyCta from "@/components/appliance-repair/ApMobileStickyCta";

const path = "/appliance-repair-dammam/";
const pageUrl = `${siteConfig.url}${path}`;
const title = "Appliance Repair in Dammam: Washer, Fridge & Oven";
const description =
  "Washing machine, refrigerator and oven repair in Dammam, plus dishwashers, dryers and cookers. We diagnose the fault first and tell you if repair makes sense.";

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

export default function ApplianceRepairPage() {
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
        name: "Appliance Repair",
        serviceType: "Washing machine, refrigerator and oven repair",
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
          { "@type": "ListItem", position: 3, name: "Appliance Repair", item: pageUrl },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: apFaqs.map((faq) => ({
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
        ctaLabel="WhatsApp About Your Appliance"
        whatsappMessage="Hello Dammam Home Solutions, I have a question about an appliance repair."
      />
      <ApBreadcrumb />
      <main id="main" className="pb-20 lg:pb-0">
        <ApHero />
        <ApAnswers />
        <ApDiagnostic />
        <ApHealth />
        <ApWasher />
        <ApFridge />
        <ApOven />
        <ApModel />
        <ApProcess />
        <ApReplaceTool />
        <ApCost />
        <ApSafety />
        <ApProperties />
        <ApRequestForm />
        <ApFaq />
        <ApRelatedServices />
        <ApFinalCta />
      </main>
      <Footer />
      <ApMobileStickyCta />
    </>
  );
}
