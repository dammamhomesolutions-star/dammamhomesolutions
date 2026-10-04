import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { dcFaqs } from "@/lib/deep-cleaning";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DcBreadcrumb from "@/components/deep-cleaning/DcBreadcrumb";
import DcHero from "@/components/deep-cleaning/DcHero";
import DcAnswers from "@/components/deep-cleaning/DcAnswers";
import DcDecisionTool from "@/components/deep-cleaning/DcDecisionTool";
import DcMoveInOut from "@/components/deep-cleaning/DcMoveInOut";
import DcDeepVsRegular from "@/components/deep-cleaning/DcDeepVsRegular";
import DcCustomers from "@/components/deep-cleaning/DcCustomers";
import DcRoomMap from "@/components/deep-cleaning/DcRoomMap";
import DcRoomDetails from "@/components/deep-cleaning/DcRoomDetails";
import DcEmptyProperty from "@/components/deep-cleaning/DcEmptyProperty";
import DcProcesses from "@/components/deep-cleaning/DcProcesses";
import DcChecklist from "@/components/deep-cleaning/DcChecklist";
import DcScope from "@/components/deep-cleaning/DcScope";
import DcPropertyTypes from "@/components/deep-cleaning/DcPropertyTypes";
import DcCost from "@/components/deep-cleaning/DcCost";
import DcPrepare from "@/components/deep-cleaning/DcPrepare";
import DcLocal from "@/components/deep-cleaning/DcLocal";
import DcRequestForm from "@/components/deep-cleaning/DcRequestForm";
import DcFaq from "@/components/deep-cleaning/DcFaq";
import DcRelatedServices from "@/components/deep-cleaning/DcRelatedServices";
import DcFinalCta from "@/components/deep-cleaning/DcFinalCta";
import DcMobileStickyCta from "@/components/deep-cleaning/DcMobileStickyCta";

const path = "/deep-cleaning-move-in-move-out-cleaning-dammam/";
const pageUrl = `${siteConfig.url}${path}`;
const title = "Deep Cleaning & Move-In / Move-Out Cleaning in Dammam";
const shortTitle = "Deep & Move-In/Out Cleaning in Dammam";
const description =
  "Deep cleaning and move-in / move-out cleaning in Dammam for apartments, villas and rentals. Kitchens, bathrooms, floors and cabinets, with a clearly defined scope.";

export const metadata: Metadata = {
  title: shortTitle,
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

export default function DeepCleaningPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: "Deep Cleaning / Move-In Move-Out Cleaning",
        serviceType: "Deep cleaning and move-in / move-out cleaning",
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
          { "@type": "Audience", audienceType: "Tenants and homeowners" },
          { "@type": "Audience", audienceType: "Landlords and property managers" },
        ],
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
          { "@type": "ListItem", position: 2, name: "Services", item: `${siteConfig.url}/services/` },
          { "@type": "ListItem", position: 3, name: "Deep Cleaning & Move-In / Move-Out Cleaning", item: pageUrl },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: dcFaqs.map((faq) => ({
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
        ctaLabel="WhatsApp for a Cleaning Quote"
        whatsappMessage="Hello Dammam Home Solutions, I'd like to ask about deep cleaning or move-in / move-out cleaning."
      />
      <DcBreadcrumb />
      <main id="main" className="pb-20 lg:pb-0">
        <DcHero />
        <DcAnswers />
        <DcDecisionTool />
        <DcMoveInOut />
        <DcDeepVsRegular />
        <DcCustomers />
        <DcRoomMap />
        <DcRoomDetails />
        <DcEmptyProperty />
        <DcProcesses />
        <DcChecklist />
        <DcScope />
        <DcPropertyTypes />
        <DcCost />
        <DcPrepare />
        <DcLocal />
        <DcRequestForm />
        <DcFaq />
        <DcRelatedServices />
        <DcFinalCta />
      </main>
      <Footer />
      <DcMobileStickyCta />
    </>
  );
}
