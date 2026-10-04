import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { spFaqs } from "@/lib/swimming-pool";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SpHero from "@/components/swimming-pool/SpHero";
import SpProblems from "@/components/swimming-pool/SpProblems";
import SpExplorer from "@/components/swimming-pool/SpExplorer";
import SpHealth from "@/components/swimming-pool/SpHealth";
import SpPath from "@/components/swimming-pool/SpPath";
import SpSystem from "@/components/swimming-pool/SpSystem";
import SpWaterLoss from "@/components/swimming-pool/SpWaterLoss";
import SpEquipment from "@/components/swimming-pool/SpEquipment";
import SpWater from "@/components/swimming-pool/SpWater";
import SpSurface from "@/components/swimming-pool/SpSurface";
import SpLighting from "@/components/swimming-pool/SpLighting";
import SpCalendar from "@/components/swimming-pool/SpCalendar";
import SpPlan from "@/components/swimming-pool/SpPlan";
import SpSegment from "@/components/swimming-pool/SpSegment";
import SpJourney from "@/components/swimming-pool/SpJourney";
import SpBeforeAfter from "@/components/swimming-pool/SpBeforeAfter";
import SpReady from "@/components/swimming-pool/SpReady";
import SpCost from "@/components/swimming-pool/SpCost";
import SpRequestForm from "@/components/swimming-pool/SpRequestForm";
import SpAnswers from "@/components/swimming-pool/SpAnswers";
import SpFaq from "@/components/swimming-pool/SpFaq";
import SpRelatedServices from "@/components/swimming-pool/SpRelatedServices";
import SpFinalCta from "@/components/swimming-pool/SpFinalCta";
import SpMobileStickyCta from "@/components/swimming-pool/SpMobileStickyCta";

const path = "/swimming-pool-repair-maintenance-dammam/";
const pageUrl = `${siteConfig.url}${path}`;
const title = "Swimming Pool Repair & Maintenance in Dammam";
const description =
  "Swimming pool repair and maintenance in Dammam: pumps, filters, leaks, tiles, lights, resurfacing, cleaning and water care for villa and commercial pools.";

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

export default function SwimmingPoolPage() {
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
        name: "Swimming Pool Repair & Maintenance",
        serviceType: "Swimming pool repair, leak detection and maintenance",
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
          { "@type": "ListItem", position: 3, name: "Swimming Pool Repair & Maintenance", item: pageUrl },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: spFaqs.map((faq) => ({
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
        ctaLabel="WhatsApp About Your Pool"
        whatsappMessage="Hello Dammam Home Solutions, I have a question about pool repair or maintenance."
      />
      <main id="main" className="pb-20 lg:pb-0">
        <SpHero />
        <SpProblems />
        <SpExplorer />
        <SpHealth />
        <SpPath />
        <SpSystem />
        <SpWaterLoss />
        <SpEquipment />
        <SpWater />
        <SpSurface />
        <SpLighting />
        <SpCalendar />
        <SpPlan />
        <SpSegment />
        <SpJourney />
        <SpBeforeAfter />
        <SpReady />
        <SpCost />
        <SpRequestForm />
        <SpAnswers />
        <SpFaq />
        <SpRelatedServices />
        <SpFinalCta />
      </main>
      <Footer />
      <SpMobileStickyCta />
    </>
  );
}
