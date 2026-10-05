import type { Metadata } from "next";
import Link from "next/link";
import { buildWhatsAppLink, siteConfig } from "@/lib/site-config";
import { languageAlternates } from "@/lib/i18n";
import ArHeader from "@/components/ar/ArHeader";
import ArFooter from "@/components/ar/ArFooter";
import ArSticky from "@/components/ar/ArSticky";
import ArBreadcrumb from "@/components/ar/ArBreadcrumb";

const url = `${siteConfig.url}/ar/about-us/`;
const title = "من نحن — حلول الدمام المنزلية";
const description = "حلول الدمام المنزلية شركة صيانة وإصلاح منازل في الدمام تخدم الخبر والظهران والقطيف: تكييف وسباكة وكهرباء وتشطيبات وصيانة عقارات، على مدار الساعة.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/ar/about-us/", languages: languageAlternates("/about-us/") },
  openGraph: { type: "website", locale: "ar_SA", url, title, description, images: [`${siteConfig.url}/opengraph-image`] },
};

const values = [
  { t: "نبحث عن السبب", d: "نصلح مصدر المشكلة لا أثرها فقط: التسرب خلف بقعة الرطوبة، والتصريف خلف تنقيط المكيف." },
  { t: "نتفق قبل أن نبدأ", d: "نشرح ما نراه وما نقترحه والتكلفة، ولا نضيف أعمالاً دون موافقتك." },
  { t: "تواصل واضح", d: "واتساب والهاتف على مدار الساعة، والصور توفّر الوقت على الطرفين." },
  { t: "فريق واحد للمنزل كله", d: "تكييف وسباكة وكهرباء ونجارة وتشطيبات، بدل التنسيق مع عدة جهات." },
];
const who = ["فلل", "شقق", "منازل عائلية", "عقارات مؤجرة", "عمائر سكنية", "مكاتب ومحلات"];

export default function ArAboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "AboutPage", "@id": `${url}#webpage`, url, name: title, description, inLanguage: "ar-SA", isPartOf: { "@id": `${siteConfig.url}/ar/#website` }, about: { "@id": `${siteConfig.url}/#business` } },
      { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "الرئيسية", item: `${siteConfig.url}/ar/` }, { "@type": "ListItem", position: 2, name: "من نحن", item: url }] },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ArHeader />
      <main id="main" className="pb-20 lg:pb-0">
        <section className="border-b border-ink-900/10 bg-sand-100/60">
          <div className="container-edge pb-14 pt-6 sm:pb-20">
            <ArBreadcrumb items={[{ label: "من نحن" }]} />
            <h1 className="mt-8 max-w-3xl font-serif text-[2rem] leading-[1.4] text-ink-950 sm:text-5xl">من نحن</h1>
            <p className="mt-5 max-w-2xl text-base leading-loose text-ink-700">
              حلول الدمام المنزلية شركة صيانة وإصلاح منازل مقرّها الدمام، نعمل أيضاً في الخبر
              والظهران والقطيف. نتولى أعطال المنزل اليومية والأعمال الأكبر — من مكيف لا يبرّد
              وتسرب مخفي إلى الدهان والعزل وصيانة العقارات المؤجرة — ونحن متاحون على مدار الساعة.
            </p>
          </div>
        </section>
        <section className="py-16 sm:py-20">
          <div className="container-edge">
            <h2 className="font-serif text-2xl leading-snug text-ink-950 sm:text-3xl">كيف نعمل</h2>
            <ul className="mt-8 grid gap-px overflow-hidden rounded-2xl bg-ink-900/10 sm:grid-cols-2">
              {values.map((v) => (
                <li key={v.t} className="bg-sand-50 p-6">
                  <h3 className="text-lg font-semibold text-ink-950">{v.t}</h3>
                  <p className="mt-2 text-[15px] leading-loose text-ink-600">{v.d}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
        <section className="bg-ink-950 py-16 text-sand-50 sm:py-20">
          <div className="container-edge grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="font-serif text-2xl leading-snug sm:text-3xl">من نخدم</h2>
              <p className="mt-4 text-[15px] leading-loose text-ink-300">أصحاب المنازل والمستأجرين والملاك ومديري العقارات في الدمام والخبر والظهران والقطيف.</p>
              <Link href="/ar/areas-we-serve/" className="focus-ring mt-6 inline-block rounded-sm text-sm font-semibold underline decoration-rust-500 underline-offset-4">المناطق التي نخدمها</Link>
            </div>
            <ul className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-sand-50/10 sm:grid-cols-3">
              {who.map((w) => <li key={w} className="bg-ink-900 px-5 py-6 text-sm text-ink-300">{w}</li>)}
            </ul>
          </div>
        </section>
        <section className="py-16 sm:py-20">
          <div className="container-edge max-w-3xl text-center">
            <h2 className="font-serif text-2xl text-ink-950 sm:text-3xl">نسعد بخدمتك</h2>
            <p className="mx-auto mt-4 max-w-xl text-[15px] leading-loose text-ink-600">اطّلع على <Link href="/ar/services/" className="focus-ring rounded-sm font-semibold text-ink-950 underline decoration-rust-600 underline-offset-4">خدماتنا</Link> أو أرسل لنا المشكلة مباشرة.</p>
            <a href={buildWhatsAppLink("السلام عليكم، أرغب في التواصل معكم.")} target="_blank" rel="nofollow noopener noreferrer" className="focus-ring mt-8 inline-flex items-center justify-center rounded-full bg-rust-700 px-7 py-4 text-sm font-semibold text-sand-50">تواصل عبر واتساب</a>
          </div>
        </section>
      </main>
      <ArFooter />
      <ArSticky message="السلام عليكم، أرغب في التواصل معكم." />
    </>
  );
}
