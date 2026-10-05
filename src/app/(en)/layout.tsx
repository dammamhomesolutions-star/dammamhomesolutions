import type { Metadata } from "next";
import Analytics from "@/components/Analytics";
import { Poppins, Fraunces } from "next/font/google";
import { siteConfig } from "@/lib/site-config";
import { businessNode } from "@/lib/schema";
import "../globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `Home Maintenance & Repair Services in Dammam | ${siteConfig.name}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `Home Maintenance & Repair Services in Dammam | ${siteConfig.name}`,
    description: siteConfig.description,
    images: [`${siteConfig.url}/opengraph-image`],
  },
  twitter: {
    card: "summary_large_image",
    title: `Home Maintenance & Repair Services in Dammam | ${siteConfig.name}`,
    description: siteConfig.description,
    images: [`${siteConfig.url}/opengraph-image`],
  },
  verification: {
    google: "OsieyejuRTEuXUWrhWKvUd0eC_UP1orXkwACJ3_j86g",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      businessNode(),
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.name,
        publisher: { "@id": `${siteConfig.url}/#business` },
        inLanguage: "en-SA",
      },
    ],
  };

  return (
    <html lang="en" className={`${poppins.variable} ${fraunces.variable}`}>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Analytics />
        {children}
      </body>
    </html>
  );
}
