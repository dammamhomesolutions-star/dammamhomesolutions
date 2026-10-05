import type { Metadata } from "next";
import { buildTelLink, buildWhatsAppLink, siteConfig } from "@/lib/site-config";
import { languageAlternates } from "@/lib/i18n";
import ArHeader from "@/components/ar/ArHeader";
import ArFooter from "@/components/ar/ArFooter";
import ArSticky from "@/components/ar/ArSticky";
import ArBreadcrumb from "@/components/ar/ArBreadcrumb";
import ArContactForm from "@/components/ar/ArContactForm";

const url = `${siteConfig.url}/ar/contact-us/`;
const title = "تواصل معنا — اطلب خدمة صيانة";
const description = "اطلب صيانة منزلك في الدمام والخبر والظهران والقطيف عبر واتساب أو اتصل على 0574205462 — متاحون على مدار الساعة. أرسل الصور لعرض سعر أسرع.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/ar/contact-us/", languages: languageAlternates("/contact-us/") },
  openGraph: { type: "website", locale: "ar_SA", url, title, description, images: [`${siteConfig.url}/opengraph-image`] },
};

const send = ["ما المشكلة؟", "موقعك (المدينة والحي)", "صور أو فيديو إن أمكن", "الوقت المناسب لك"];

export default function ArContactPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "ContactPage", "@id": `${url}#webpage`, url, name: title, description, inLanguage: "ar-SA", isPartOf: { "@id": `${siteConfig.url}/ar/#website` }, about: { "@id": `${siteConfig.url}/#business` } },
      { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "الرئيسية", item: `${siteConfig.url}/ar/` }, { "@type": "ListItem", position: 2, name: "تواصل معنا", item: url }] },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ArHeader />
      <main id="main" className="pb-20 lg:pb-0">
        <section className="border-b border-ink-900/10 bg-sand-50">
          <div className="container-edge pb-12 pt-6 sm:pb-16">
            <ArBreadcrumb items={[{ label: "تواصل معنا" }]} />
            <h1 className="mt-8 font-serif text-[2rem] leading-[1.4] text-ink-950 sm:text-5xl">تحتاج إصلاح شيء في المنزل؟ تواصل معنا</h1>
            <p className="mt-5 max-w-2xl text-base leading-loose text-ink-700">راسلنا عبر واتساب أو اتصل في أي وقت — متاحون على مدار الساعة في الدمام والخبر والظهران والقطيف. أو املأ النموذج القصير أدناه.</p>
          </div>
        </section>
        <section className="py-14 sm:py-20">
          <div className="container-edge grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <h2 className="font-serif text-2xl leading-snug text-ink-950 sm:text-3xl">اطلب خدمة صيانة</h2>
              <p className="mt-4 text-[15px] leading-loose text-ink-700">املأ ما تستطيع — الاسم والجوال فقط مطلوبان. يفتح النموذج واتساب وتفاصيلك جاهزة للإرسال.</p>
              <div className="mt-6 flex flex-col gap-2">
                <a href={buildTelLink()} className="focus-ring inline-flex items-center justify-center rounded-full border border-ink-900/20 px-5 py-3 text-sm font-semibold text-ink-950">اتصل <span dir="ltr" className="ms-1">{siteConfig.phoneDisplay}</span></a>
                <a href={buildWhatsAppLink("السلام عليكم، أرغب في طلب خدمة صيانة.")} target="_blank" rel="nofollow noopener noreferrer" className="focus-ring inline-flex items-center justify-center rounded-full bg-ink-950 px-5 py-3 text-sm font-semibold text-sand-50">واتساب مباشرة</a>
              </div>
              <h3 className="mt-10 text-sm font-semibold text-ink-500">ماذا ترسل لنا؟</h3>
              <ul className="mt-3 space-y-2">{send.map((s) => <li key={s} className="flex gap-3 text-[15px] text-ink-800"><span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 flex-none rounded-full bg-rust-600" />{s}</li>)}</ul>
            </div>
            <div className="lg:col-span-8"><ArContactForm /></div>
          </div>
        </section>
      </main>
      <ArFooter />
      <ArSticky label="راسلنا عبر واتساب" message="السلام عليكم، أرغب في طلب خدمة صيانة." />
    </>
  );
}
