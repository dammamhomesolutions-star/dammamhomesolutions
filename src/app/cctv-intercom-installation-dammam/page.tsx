import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { cvFaqs } from "@/lib/cctv-intercom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CvBreadcrumb from "@/components/cctv-intercom/CvBreadcrumb";
import CvHero from "@/components/cctv-intercom/CvHero";
import CvAnswers from "@/components/cctv-intercom/CvAnswers";
import CvPlanner from "@/components/cctv-intercom/CvPlanner";
import CvCompare from "@/components/cctv-intercom/CvCompare";
import CvMap from "@/components/cctv-intercom/CvMap";
import CvPlacement from "@/components/cctv-intercom/CvPlacement";
import CvCount from "@/components/cctv-intercom/CvCount";
import CvTech from "@/components/cctv-intercom/CvTech";
import CvCameras from "@/components/cctv-intercom/CvCameras";
import CvIntercom from "@/components/cctv-intercom/CvIntercom";
import CvProcess from "@/components/cctv-intercom/CvProcess";
import CvPrivacy from "@/components/cctv-intercom/CvPrivacy";
import CvMaintenance from "@/components/cctv-intercom/CvMaintenance";
import CvCost from "@/components/cctv-intercom/CvCost";
import CvProperties from "@/components/cctv-intercom/CvProperties";
import CvChecklists from "@/components/cctv-intercom/CvChecklists";
import CvRequestForm from "@/components/cctv-intercom/CvRequestForm";
import CvFaq from "@/components/cctv-intercom/CvFaq";
import CvRelatedServices from "@/components/cctv-intercom/CvRelatedServices";
import CvFinalCta from "@/components/cctv-intercom/CvFinalCta";
import CvMobileStickyCta from "@/components/cctv-intercom/CvMobileStickyCta";

const path = "/cctv-intercom-installation-dammam/";
const pageUrl = `${siteConfig.url}${path}`;
const title = "CCTV & Intercom Installation in Dammam";
const description =
  "CCTV and intercom installation in Dammam for villas, apartments, offices and shops. Camera coverage, recording and door entry planned, then installed.";

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

export default function CctvIntercomPage() {
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
        name: "CCTV & Intercom Installation",
        serviceType: "CCTV camera and intercom installation",
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
          { "@type": "ListItem", position: 3, name: "CCTV & Intercom Installation", item: pageUrl },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: cvFaqs.map((faq) => ({
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
        ctaLabel="WhatsApp About CCTV"
        whatsappMessage="Hello Dammam Home Solutions, I have a question about CCTV / intercom installation."
      />
      <CvBreadcrumb />
      <main id="main" className="pb-20 lg:pb-0">
        <CvHero />
        <CvAnswers />
        <CvPlanner />
        <CvCompare />
        <CvMap />
        <CvPlacement />
        <CvCount />
        <CvTech />
        <CvCameras />
        <CvIntercom />
        <CvProcess />
        <CvPrivacy />
        <CvMaintenance />
        <CvCost />
        <CvProperties />
        <CvChecklists />
        <CvRequestForm />
        <CvFaq />
        <CvRelatedServices />
        <CvFinalCta />
      </main>
      <Footer />
      <CvMobileStickyCta />
    </>
  );
}
