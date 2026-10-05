import type { Metadata } from "next";
import { IBM_Plex_Sans_Arabic, Noto_Kufi_Arabic } from "next/font/google";
import { siteConfig } from "@/lib/site-config";
import { arabicBusinessName, businessNode } from "@/lib/schema";
import Analytics from "@/components/Analytics";
import "../../globals.css";

// Arabic root layout (/ar/…). Fonts reuse the English CSS variable names so
// the existing Tailwind font-sans / font-serif utilities switch to Arabic.
const plex = IBM_Plex_Sans_Arabic({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const kufi = Noto_Kufi_Arabic({
  subsets: ["arabic", "latin"],
  weight: ["500", "600", "700"],
  variable: "--font-fraunces",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `صيانة وإصلاح المنازل في الدمام | ${arabicBusinessName}`,
    template: `%s | ${arabicBusinessName}`,
  },
  description: "صيانة وإصلاح المنازل في الدمام والخبر والظهران والقطيف: تكييف، سباكة، كهرباء، عزل، دهانات وأعمال صيانة عامة، على مدار الساعة.",
  openGraph: { type: "website", locale: "ar_SA", siteName: arabicBusinessName, images: [`${siteConfig.url}/opengraph-image`] },
  verification: { google: "OsieyejuRTEuXUWrhWKvUd0eC_UP1orXkwACJ3_j86g" },
};

export default function ArabicRootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      businessNode(),
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/ar/#website`,
        url: `${siteConfig.url}/ar/`,
        name: arabicBusinessName,
        publisher: { "@id": `${siteConfig.url}/#business` },
        inLanguage: "ar-SA",
      },
    ],
  };

  return (
    <html lang="ar" dir="rtl" className={`${plex.variable} ${kufi.variable}`}>
      <body className="font-sans antialiased">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Analytics />
        {children}
      </body>
    </html>
  );
}
