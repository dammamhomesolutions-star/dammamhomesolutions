import type { Metadata } from "next";
import { languageAlternates } from "@/lib/i18n";
import { siteConfig } from "@/lib/site-config";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EhBreadcrumb from "@/components/emergency-repairs/EhBreadcrumb";
import EhHero from "@/components/emergency-repairs/EhHero";
import EhWhatHappened from "@/components/emergency-repairs/EhWhatHappened";
import EhSafetyGate from "@/components/emergency-repairs/EhSafetyGate";
import EhEmergencyVsProperty from "@/components/emergency-repairs/EhEmergencyVsProperty";
import EhDescribeInsteadOfDiagnose from "@/components/emergency-repairs/EhDescribeInsteadOfDiagnose";
import EhRequestBuilder from "@/components/emergency-repairs/EhRequestBuilder";
import EhPhotoGuide from "@/components/emergency-repairs/EhPhotoGuide";
import EhServiceRouting from "@/components/emergency-repairs/EhServiceRouting";
import EhProcess from "@/components/emergency-repairs/EhProcess";
import EhWaterSection from "@/components/emergency-repairs/EhWaterSection";
import EhElectricalSafety from "@/components/emergency-repairs/EhElectricalSafety";
import EhAcEmergency from "@/components/emergency-repairs/EhAcEmergency";
import EhDoorAccess from "@/components/emergency-repairs/EhDoorAccess";
import EhNotEmergencyBridge from "@/components/emergency-repairs/EhNotEmergencyBridge";
import EhLandlordFlow from "@/components/emergency-repairs/EhLandlordFlow";
import EhDammamContext from "@/components/emergency-repairs/EhDammamContext";
import EhRelatedServices from "@/components/emergency-repairs/EhRelatedServices";
import EhFinalCta from "@/components/emergency-repairs/EhFinalCta";
import EhFaq from "@/components/emergency-repairs/EhFaq";
import EhMobileStickyCta from "@/components/emergency-repairs/EhMobileStickyCta";

const pageUrl = `${siteConfig.url}/emergency-home-repairs/`;
const title = "Emergency Home Repairs in Dammam";
const description =
  "Sudden home repair problem in Dammam? Tell us what happened and send photos so we can route your request to the right repair service.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/emergency-home-repairs/", languages: languageAlternates("/emergency-home-repairs/"),
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

export default function EmergencyHomeRepairsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: "Emergency Home Repairs",
        serviceType: "Urgent residential property repair",
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
      <Header
        ctaLabel="WhatsApp Us"
        whatsappMessage="Hello Dammam Home Solutions, something has come up at my property. Here's what happened: "
      />
      <EhBreadcrumb />
      <main id="main">
        <EhHero />
        <EhWhatHappened />
        <EhSafetyGate />
        <EhEmergencyVsProperty />
        <EhDescribeInsteadOfDiagnose />
        <EhRequestBuilder />
        <EhPhotoGuide />
        <EhServiceRouting />
        <EhProcess />
        <EhWaterSection />
        <EhElectricalSafety />
        <EhAcEmergency />
        <EhDoorAccess />
        <EhNotEmergencyBridge />
        <EhLandlordFlow />
        <EhDammamContext />
        <EhRelatedServices />
        <EhFinalCta />
        <EhFaq />
      </main>
      <Footer />
      <EhMobileStickyCta />
    </>
  );
}
