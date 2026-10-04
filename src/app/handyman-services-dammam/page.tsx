import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { hmFaqs } from "@/lib/handyman";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { HmJobProvider } from "@/components/handyman/HmJobList";
import HmHero from "@/components/handyman/HmHero";
import HmExplorer from "@/components/handyman/HmExplorer";
import HmRooms from "@/components/handyman/HmRooms";
import HmDescribe from "@/components/handyman/HmDescribe";
import HmSetup from "@/components/handyman/HmSetup";
import HmWhy from "@/components/handyman/HmWhy";
import HmProperty from "@/components/handyman/HmProperty";
import HmMatrix from "@/components/handyman/HmMatrix";
import HmSurface from "@/components/handyman/HmSurface";
import HmChat from "@/components/handyman/HmChat";
import HmWorkflow from "@/components/handyman/HmWorkflow";
import HmBoundary from "@/components/handyman/HmBoundary";
import HmRequest from "@/components/handyman/HmRequest";
import HmAnswers from "@/components/handyman/HmAnswers";
import HmFaq from "@/components/handyman/HmFaq";
import HmFinalCta from "@/components/handyman/HmFinalCta";
import HmSticky from "@/components/handyman/HmSticky";

const path = "/handyman-services-dammam/";
const pageUrl = `${siteConfig.url}${path}`;
const title = "Handyman Services in Dammam";
const description =
  "Handyman services in Dammam: build one job list for curtains, shelves, mirrors, TV mounts, furniture assembly, door and cabinet fixes and small repairs.";

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

export default function HandymanPage() {
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
        name: "Handyman Services",
        serviceType: "Handyman installation, assembly, adjustment and minor repairs",
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
          { "@type": "ListItem", position: 3, name: "Handyman Services", item: pageUrl },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: hmFaqs.map((faq) => ({
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
        ctaLabel="WhatsApp Your Job List"
        whatsappMessage="Hello Dammam Home Solutions, I have a few handyman jobs to sort out."
      />
      <HmJobProvider>
        <main id="main" className="pb-20 lg:pb-0">
          <HmHero />
          <HmExplorer />
          <HmRooms />
          <HmDescribe />
          <HmSetup />
          <HmWhy />
          <HmProperty />
          <HmMatrix />
          <HmSurface />
          <HmChat />
          <HmWorkflow />
          <HmBoundary />
          <HmRequest />
          <HmAnswers />
          <HmFaq />
          <HmFinalCta />
        </main>
        <Footer />
        <HmSticky />
      </HmJobProvider>
    </>
  );
}
