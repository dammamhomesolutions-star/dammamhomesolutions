import type { Metadata } from "next";
import { Poppins, Fraunces } from "next/font/google";
import Link from "next/link";
import { buildWhatsAppLink } from "@/lib/site-config";
import "./globals.css";

// 404 for URLs that match no route (the site has two root layouts, so this
// page renders on its own). Bilingual, with links back into both languages.
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600"], variable: "--font-poppins", display: "swap" });
const fraunces = Fraunces({ subsets: ["latin"], weight: ["500"], variable: "--font-fraunces", display: "swap" });

export const metadata: Metadata = {
  title: "Page not found | Dammam Home Solutions",
  robots: { index: false },
};

export default function GlobalNotFound() {
  return (
    <html lang="en" className={`${poppins.variable} ${fraunces.variable}`}>
      <body className="font-sans antialiased">
        <main id="main" className="flex min-h-screen items-center bg-sand-50 py-24">
          <div className="container-edge max-w-xl text-center">
            <p className="section-label mx-auto">404</p>
            <h1 className="mt-4 font-serif text-4xl tracking-tight text-ink-950 sm:text-5xl">This page doesn&rsquo;t exist.</h1>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-600">The link may be wrong or the page may have moved.</p>
            <p lang="ar" dir="rtl" className="mt-2 text-[15px] text-ink-600">الصفحة غير موجودة.</p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link href="/" className="focus-ring inline-flex items-center rounded-full bg-ink-950 px-6 py-3 text-sm font-semibold text-sand-50">Home</Link>
              <Link href="/services/" className="focus-ring inline-flex items-center rounded-full border border-ink-900/20 px-6 py-3 text-sm font-semibold text-ink-950">All services</Link>
              <Link href="/ar/" lang="ar" className="focus-ring inline-flex items-center rounded-full border border-ink-900/20 px-6 py-3 text-sm font-semibold text-ink-950">الرئيسية</Link>
              <a href={buildWhatsAppLink("Hello Dammam Home Solutions, I couldn't find a page on your website.")} target="_blank" rel="nofollow noopener noreferrer" className="focus-ring inline-flex items-center rounded-full bg-rust-700 px-6 py-3 text-sm font-semibold text-sand-50">WhatsApp</a>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
