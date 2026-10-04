import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { wlFaqs } from "@/lib/wallpaper-installation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WlBreadcrumb from "@/components/wallpaper-installation/WlBreadcrumb";
import WlHero from "@/components/wallpaper-installation/WlHero";
import WlAnswers from "@/components/wallpaper-installation/WlAnswers";
import WlSelector from "@/components/wallpaper-installation/WlSelector";
import WlGrid from "@/components/wallpaper-installation/WlGrid";
import WlDiagram from "@/components/wallpaper-installation/WlDiagram";
import WlWallCheck from "@/components/wallpaper-installation/WlWallCheck";
import WlPrep from "@/components/wallpaper-installation/WlPrep";
import WlPattern from "@/components/wallpaper-installation/WlPattern";
import WlFinish from "@/components/wallpaper-installation/WlFinish";
import WlRooms from "@/components/wallpaper-installation/WlRooms";
import WlScale from "@/components/wallpaper-installation/WlScale";
import WlPlanner from "@/components/wallpaper-installation/WlPlanner";
import WlMoisture from "@/components/wallpaper-installation/WlMoisture";
import WlProcess from "@/components/wallpaper-installation/WlProcess";
import WlCommercial from "@/components/wallpaper-installation/WlCommercial";
import WlProblems from "@/components/wallpaper-installation/WlProblems";
import WlCost from "@/components/wallpaper-installation/WlCost";
import WlRequestForm from "@/components/wallpaper-installation/WlRequestForm";
import WlFaq from "@/components/wallpaper-installation/WlFaq";
import WlRelatedServices from "@/components/wallpaper-installation/WlRelatedServices";
import WlFinalCta from "@/components/wallpaper-installation/WlFinalCta";
import WlMobileStickyCta from "@/components/wallpaper-installation/WlMobileStickyCta";

const path = "/wallpaper-installation-dammam/";
const pageUrl = `${siteConfig.url}${path}`;
const title = "Wallpaper Installation in Dammam";
const description =
  "Wallpaper installation in Dammam with proper wall preparation, pattern matching and neat seams. Feature walls, murals, removal and supply.";

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

export default function WallpaperInstallationPage() {
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
        name: "Wallpaper Installation",
        serviceType: "Wallpaper installation and removal",
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
          { "@type": "ListItem", position: 3, name: "Wallpaper Installation", item: pageUrl },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: wlFaqs.map((faq) => ({
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
        ctaLabel="WhatsApp About Wallpaper"
        whatsappMessage="Hello Dammam Home Solutions, I have a question about wallpaper installation."
      />
      <WlBreadcrumb />
      <main id="main" className="pb-20 lg:pb-0">
        <WlHero />
        <WlAnswers />
        <WlSelector />
        <WlGrid />
        <WlDiagram />
        <WlWallCheck />
        <WlPrep />
        <WlPattern />
        <WlFinish />
        <WlRooms />
        <WlScale />
        <WlPlanner />
        <WlMoisture />
        <WlProcess />
        <WlCommercial />
        <WlProblems />
        <WlCost />
        <WlRequestForm />
        <WlFaq />
        <WlRelatedServices />
        <WlFinalCta />
      </main>
      <Footer />
      <WlMobileStickyCta />
    </>
  );
}
