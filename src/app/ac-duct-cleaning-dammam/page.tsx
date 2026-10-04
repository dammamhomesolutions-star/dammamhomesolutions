import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { dkFaqs } from "@/lib/ac-duct-cleaning";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DkBreadcrumb from "@/components/ac-duct-cleaning/DkBreadcrumb";
import DkHero from "@/components/ac-duct-cleaning/DkHero";
import DkAnswers from "@/components/ac-duct-cleaning/DkAnswers";
import DkDiagnostic from "@/components/ac-duct-cleaning/DkDiagnostic";
import DkSystem from "@/components/ac-duct-cleaning/DkSystem";
import DkCompare from "@/components/ac-duct-cleaning/DkCompare";
import DkSigns from "@/components/ac-duct-cleaning/DkSigns";
import DkProcess from "@/components/ac-duct-cleaning/DkProcess";
import DkProperties from "@/components/ac-duct-cleaning/DkProperties";
import DkCost from "@/components/ac-duct-cleaning/DkCost";
import DkPrepMistakes from "@/components/ac-duct-cleaning/DkPrepMistakes";
import DkScope from "@/components/ac-duct-cleaning/DkScope";
import DkLocal from "@/components/ac-duct-cleaning/DkLocal";
import DkRequestForm from "@/components/ac-duct-cleaning/DkRequestForm";
import DkFaq from "@/components/ac-duct-cleaning/DkFaq";
import DkRelatedServices from "@/components/ac-duct-cleaning/DkRelatedServices";
import DkFinalCta from "@/components/ac-duct-cleaning/DkFinalCta";
import DkMobileStickyCta from "@/components/ac-duct-cleaning/DkMobileStickyCta";

const path = "/ac-duct-cleaning-dammam/";
const pageUrl = `${siteConfig.url}${path}`;
const title = "AC Duct Cleaning in Dammam";
const description =
  "AC duct inspection and cleaning in Dammam for villas, apartments and commercial properties. Honest advice on whether your ducts need cleaning — request a quote.";

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

export default function AcDuctCleaningPage() {
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
        name: "AC Duct Cleaning",
        serviceType: "HVAC duct cleaning",
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
          { "@type": "Audience", audienceType: "Commercial property operators" },
        ],
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
          { "@type": "ListItem", position: 2, name: "Services", item: `${siteConfig.url}/services/` },
          { "@type": "ListItem", position: 3, name: "AC Duct Cleaning", item: pageUrl },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: dkFaqs.map((faq) => ({
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
        ctaLabel="WhatsApp About Your Ducts"
        whatsappMessage="Hello Dammam Home Solutions, I have a question about AC duct cleaning."
      />
      <DkBreadcrumb />
      <main id="main" className="pb-20 lg:pb-0">
        <DkHero />
        <DkAnswers />
        <DkDiagnostic />
        <DkSystem />
        <DkCompare />
        <DkSigns />
        <DkProcess />
        <DkProperties />
        <DkCost />
        <DkPrepMistakes />
        <DkScope />
        <DkLocal />
        <DkRequestForm />
        <DkFaq />
        <DkRelatedServices />
        <DkFinalCta />
      </main>
      <Footer />
      <DkMobileStickyCta />
    </>
  );
}
