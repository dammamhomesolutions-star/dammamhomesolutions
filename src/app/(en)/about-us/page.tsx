import type { Metadata } from "next";
import { languageAlternates } from "@/lib/i18n";
import { siteConfig } from "@/lib/site-config";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileStickyCta from "@/components/MobileStickyCta";
import LegalBreadcrumb from "@/components/legal/LegalBreadcrumb";
import AboutHero from "@/components/about-us/AboutHero";
import AboutWhatWeDo from "@/components/about-us/AboutWhatWeDo";
import AboutValues from "@/components/about-us/AboutValues";
import AboutServiceArea from "@/components/about-us/AboutServiceArea";
import AboutFinalCta from "@/components/about-us/AboutFinalCta";

const pageUrl = `${siteConfig.url}/about-us/`;
const title = "About Us";
const description = `${siteConfig.name} provides property repair and maintenance services for homes and rental properties in ${siteConfig.region}.`;

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/about-us/", languages: languageAlternates("/about-us/"),
  },
  openGraph: {
    type: "website",
    url: pageUrl,
    siteName: siteConfig.name,
    title: `${title} | ${siteConfig.name}`,
    description,
    images: [`${siteConfig.url}/opengraph-image`],
  },
};

export default function AboutUsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
          { "@type": "ListItem", position: 2, name: title, item: pageUrl },
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
      <Header />
      <LegalBreadcrumb label="About Us" />
      <main id="main">
        <AboutHero />
        <AboutWhatWeDo />
        <AboutValues />
        <AboutServiceArea />
        <AboutFinalCta />
      </main>
      <Footer />
      <MobileStickyCta />
    </>
  );
}
