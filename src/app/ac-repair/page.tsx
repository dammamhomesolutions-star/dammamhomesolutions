import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileStickyCta from "@/components/MobileStickyCta";
import AcBreadcrumb from "@/components/ac-repair/AcBreadcrumb";
import AcHero from "@/components/ac-repair/AcHero";
import AcSymptomSelector from "@/components/ac-repair/AcSymptomSelector";
import DontReplaceYet from "@/components/ac-repair/DontReplaceYet";
import AcInvestigationFlow from "@/components/ac-repair/AcInvestigationFlow";
import AcProblemWall from "@/components/ac-repair/AcProblemWall";
import RepairVsMaintenance from "@/components/ac-repair/RepairVsMaintenance";
import AcContactFlow from "@/components/ac-repair/AcContactFlow";
import AcPropertyContext from "@/components/ac-repair/AcPropertyContext";
import WhenToCall from "@/components/ac-repair/WhenToCall";
import DammamAcContext from "@/components/ac-repair/DammamAcContext";
import AcMaintenanceSection from "@/components/ac-repair/AcMaintenanceSection";
import AcRequestPanel from "@/components/ac-repair/AcRequestPanel";
import AcFaq from "@/components/ac-repair/AcFaq";

const pageUrl = `${siteConfig.url}/ac-repair/`;
const title = "AC Repair & Maintenance in Dammam";
const description =
  "Need AC repair in Dammam? Dammam Home Solutions handles AC cooling problems, water leaks, weak airflow, unusual noise and routine maintenance.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/ac-repair/",
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

export default function AcRepairPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: "AC Repair & Maintenance",
        serviceType: "AC repair and maintenance",
        description,
        url: pageUrl,
        provider: { "@id": `${siteConfig.url}/#business` },
        areaServed: {
          "@type": "City",
          name: "Dammam",
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: siteConfig.url,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: title,
            item: pageUrl,
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header ctaLabel="WhatsApp for AC Repair" whatsappMessage="Hello Dammam Home Solutions, I'd like help with an AC problem." />
      <AcBreadcrumb />
      <main id="main">
        <AcHero />
        <AcSymptomSelector />
        <DontReplaceYet />
        <AcInvestigationFlow />
        <AcProblemWall />
        <RepairVsMaintenance />
        <AcContactFlow />
        <AcPropertyContext />
        <WhenToCall />
        <DammamAcContext />
        <AcMaintenanceSection />
        <AcRequestPanel />
        <AcFaq />
      </main>
      <Footer />
      <MobileStickyCta label="WhatsApp AC Service" whatsappMessage="Hello Dammam Home Solutions, I'd like help with an AC problem." />
    </>
  );
}
