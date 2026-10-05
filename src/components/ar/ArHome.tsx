import Link from "next/link";
import { buildTelLink, buildWhatsAppLink, siteConfig } from "@/lib/site-config";
import { arServiceGroups } from "@/lib/ar/catalog";
import { arabicAreas } from "@/lib/ar/areas";
import { arHomeFaqs, arHousePins, arProblems } from "@/lib/ar/home";
import HpHouse from "@/components/home/HpHouse";

const wa = (m: string) => buildWhatsAppLink(m);
const btnMain = "focus-ring inline-flex items-center justify-center rounded-full bg-rust-700 px-7 py-4 text-sm font-semibold text-sand-50 hover:bg-rust-600";
const btnLine = "focus-ring inline-flex items-center justify-center rounded-full border border-ink-900/20 bg-sand-50 px-7 py-4 text-sm font-semibold text-ink-950 hover:border-ink-900/50";

export function ArHero() {
  const trust = ["خدمة محلية في الدمام", "متاحون على مدار الساعة", "أرسل الصور عبر واتساب", "نتفق على العمل قبل البدء"];
  return (
    <section className="border-b border-ink-900/10 bg-sand-50">
      <div className="container-edge grid gap-12 pb-14 pt-10 sm:pt-14 lg:grid-cols-12 lg:items-center lg:pb-20">
        <div className="animate-fadeUp lg:col-span-6">
          <p className="inline-flex items-center gap-2 rounded-full border border-ink-900/15 bg-sand-100 px-3 py-1 text-xs font-semibold text-ink-800">
            <span aria-hidden="true" className="h-2 w-2 rounded-full bg-moss-600" /> على مدار الساعة · الدمام والخبر والظهران والقطيف
          </p>
          <h1 className="mt-6 font-serif text-[2.1rem] leading-[1.35] text-ink-950 sm:text-5xl sm:leading-[1.3]">صيانة وإصلاح المنازل في الدمام</h1>
          <p className="mt-5 max-w-xl text-base leading-loose text-ink-700 sm:text-lg">
            فريق محلي واحد لكل احتياجات منزلك: تكييف، سباكة، كهرباء، دهانات، نجارة،
            عزل وأعمال الهاندي مان — للفلل والشقق والملاك ومديري العقارات.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={wa("السلام عليكم، أرغب في عرض سعر. المشكلة هي: ")} target="_blank" rel="nofollow noopener noreferrer" className={btnMain}>اطلب عرض سعر عبر واتساب</a>
            <a href={buildTelLink()} className={btnLine}>اتصل الآن</a>
          </div>
          <ul className="mt-8 grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-ink-700">
            {trust.map((t) => (
              <li key={t} className="flex items-center gap-2">
                <svg viewBox="0 0 20 20" className="h-4 w-4 flex-none text-moss-600" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true"><path d="M4 10.5l4 4 8-9" /></svg>
                {t}
              </li>
            ))}
          </ul>
        </div>
        <div className="animate-fadeIn lg:col-span-6">
          <p className="mb-3 text-xs font-semibold text-ink-500">فريق واحد لكل أجزاء المنزل — اضغط على الرقم</p>
          <HpHouse pins={arHousePins} />
        </div>
      </div>
    </section>
  );
}

export function ArServices() {
  return (
    <section id="services" aria-labelledby="ar-services" className="scroll-mt-20 py-20 sm:py-24">
      <div className="container-edge">
        <p className="text-sm font-semibold text-rust-700">خدماتنا</p>
        <h2 id="ar-services" className="mt-3 font-serif text-3xl leading-snug text-ink-950 sm:text-4xl">كل ما يحتاجه منزلك في مكان واحد</h2>
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {arServiceGroups.map((g, gi) => (
            <article key={g.key} className={`rounded-2xl border p-6 ${gi === 0 ? "border-ink-950 bg-ink-950 text-sand-50" : "border-ink-900/10 bg-sand-50"}`}>
              <h3 className="font-serif text-xl">{g.title}</h3>
              <p className={`mt-1.5 text-sm leading-relaxed ${gi === 0 ? "text-ink-300" : "text-ink-600"}`}>{g.intro}</p>
              <ul className={`mt-4 divide-y ${gi === 0 ? "divide-sand-50/10" : "divide-ink-900/10"}`}>
                {g.services.map((s) => (
                  <li key={s.en}>
                    <Link href={s.href} hrefLang={s.arabic ? undefined : "en"} className={`focus-ring flex items-center justify-between gap-3 rounded-sm py-2 text-[15px] ${gi === 0 ? "hover:text-rust-500" : "hover:text-rust-700"}`}>
                      <span className={s.arabic ? "font-semibold" : ""}>{s.label}</span>
                      <span aria-hidden="true">←</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <p className="mt-6 text-xs text-ink-500">الخدمات بخط عادي صفحاتها متوفرة حالياً بالإنجليزية.</p>
      </div>
    </section>
  );
}

export function ArProblems() {
  return (
    <section aria-labelledby="ar-problems" className="border-y border-ink-900/10 bg-sand-100/60 py-20 sm:py-24">
      <div className="container-edge grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <h2 id="ar-problems" className="font-serif text-3xl leading-snug text-ink-950 sm:text-4xl">لست متأكداً من الخدمة المطلوبة؟</h2>
          <p className="mt-4 text-[15px] leading-loose text-ink-700">اختر الوصف الأقرب لمشكلتك، أو صفها لنا عبر واتساب بكلماتك — لا تحتاج إلى معرفة اسم التخصص.</p>
          <a href={wa("السلام عليكم، لست متأكداً من الخدمة التي أحتاجها. المشكلة هي: ")} target="_blank" rel="nofollow noopener noreferrer" className={`${btnLine} mt-6`}>صف المشكلة عبر واتساب</a>
        </div>
        <ul className="grid gap-2 sm:grid-cols-2 lg:col-span-8">
          {arProblems.map((p) => (
            <li key={p.problem}>
              <Link href={p.href} hrefLang={p.href.startsWith("/ar/") ? undefined : "en"} className="focus-ring flex h-full items-center justify-between gap-4 rounded-xl border border-ink-900/10 bg-sand-50 p-4 hover:border-rust-600">
                <span>
                  <span className="block text-[15px] font-semibold text-ink-950">{p.problem}</span>
                  <span className="mt-0.5 block text-xs text-rust-700">{p.service}</span>
                </span>
                <span aria-hidden="true" className="text-rust-700">←</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function ArWhyProcess() {
  const why = [
    { t: "تركيز على المنازل السكنية", d: "نعمل على الفلل والشقق والمنازل العائلية في الدمام والمنطقة الشرقية: أحمال التكييف، والخزانات العلوية، والحمامات، والجدران الخارجية." },
    { t: "فريق واحد لعدة إصلاحات", d: "تكييف وسباكة وكهرباء ونجارة وتشطيبات تحت شركة واحدة، فلا تحتاج إلى التنسيق مع عدة مقاولين." },
    { t: "التواصل عبر واتساب أولاً", d: "اشرح المشكلة وأرسل الصور قبل أي زيارة. يوفّر ذلك وقتك ويجعلنا نأتي مستعدين." },
    { t: "خطوات واضحة", d: "نفهم المشكلة، ونتفق معك على نطاق العمل، ثم ننفّذ — دون إضافات مفاجئة بلا استئذان." },
    { t: "تشخيص عملي", d: "نبحث عن السبب لا العَرَض فقط: التسرب خلف بقعة الرطوبة، والتصريف خلف تنقيط المكيف." },
    { t: "دعم الملاك", d: "صيانة العقارات وإصلاحات ما بين المستأجرين للملاك ومديري العقارات." },
  ];
  const steps = ["أخبرنا بالمشكلة عبر واتساب أو الهاتف", "أرسل صوراً أو مقطع فيديو", "نحدد العطل والعمل المطلوب", "نتفق معك على النطاق قبل البدء", "يُنفّذ الفني العمل المتفق عليه"];
  return (
    <section aria-labelledby="ar-why" className="py-20 sm:py-24">
      <div className="container-edge">
        <h2 id="ar-why" className="font-serif text-3xl leading-snug text-ink-950 sm:text-4xl">لماذا يختارنا أصحاب المنازل في الدمام</h2>
        <ul className="mt-10 grid gap-px overflow-hidden rounded-2xl bg-ink-900/10 sm:grid-cols-2 lg:grid-cols-3">
          {why.map((w, i) => (
            <li key={w.t} className="bg-sand-50 p-6">
              <span className="font-mono text-xs text-rust-700">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-2 text-lg font-semibold text-ink-950">{w.t}</h3>
              <p className="mt-2 text-sm leading-loose text-ink-600">{w.d}</p>
            </li>
          ))}
        </ul>
        <h2 className="mt-20 font-serif text-3xl leading-snug text-ink-950 sm:text-4xl">من الرسالة إلى إنجاز الإصلاح</h2>
        <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((s, i) => (
            <li key={s}>
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ink-950 font-mono text-sm text-sand-50">{i + 1}</span>
              <p className="mt-3 text-[15px] font-semibold leading-relaxed text-ink-950">{s}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function ArEmergency() {
  const urgent = ["توقف المكيف", "تسربات المياه", "طوارئ السباكة", "أعطال الكهرباء", "باب لا يُقفل", "مشاكل منزلية عاجلة أخرى"];
  return (
    <section aria-labelledby="ar-emergency" className="bg-rust-700 py-16 text-sand-50 sm:py-20">
      <div className="container-edge grid gap-10 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-6">
          <p className="inline-flex items-center gap-2 rounded-full bg-sand-50/15 px-3 py-1 text-xs font-semibold">على مدار الساعة</p>
          <h2 id="ar-emergency" className="mt-5 font-serif text-3xl leading-snug sm:text-4xl">تحتاج إصلاحاً عاجلاً في المنزل؟</h2>
          <p className="mt-4 max-w-lg text-[15px] leading-loose text-rust-100">راسلنا أو اتصل في أي وقت، ليلاً أو نهاراً. وإذا كان هناك خطر على الأشخاص — حريق أو غاز أو خطر كهربائي جسيم — فاتصل بالطوارئ أولاً.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={wa("السلام عليكم، لدي مشكلة عاجلة في المنزل: ")} target="_blank" rel="nofollow noopener noreferrer" className="focus-ring inline-flex items-center justify-center rounded-full bg-sand-50 px-7 py-4 text-sm font-semibold text-rust-700">راسلنا الآن عبر واتساب</a>
            <a href={buildTelLink()} className="focus-ring inline-flex items-center justify-center rounded-full border border-sand-50/50 px-7 py-4 text-sm font-semibold hover:bg-sand-50/10">اتصل الآن</a>
          </div>
        </div>
        <ul className="grid grid-cols-2 gap-2 lg:col-span-6">
          {urgent.map((u) => <li key={u} className="rounded-xl bg-sand-50/10 px-4 py-3.5 text-sm font-semibold">{u}</li>)}
        </ul>
      </div>
    </section>
  );
}

export function ArPropertyAreas() {
  return (
    <section aria-labelledby="ar-areas" className="border-b border-ink-900/10 py-20 sm:py-24">
      <div className="container-edge grid gap-16 lg:grid-cols-2">
        <div>
          <h2 className="font-serif text-3xl leading-snug text-ink-950 sm:text-4xl">صيانة مستمرة، لا إصلاحات متفرقة فقط</h2>
          <p className="mt-4 text-[15px] leading-loose text-ink-700">
            إصلاح المشاكل الصغيرة مبكراً أقل تكلفة. الصيانة الدورية تحافظ على عمل التكييف
            والسباكة والكهرباء والتشطيبات، وتمنح الملاك فريقاً واحداً يتواصلون معه.
            نتفق على النطاق والسعر لكل عقار — لا نعرض باقات ثابتة.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a href={wa("السلام عليكم، أرغب في مناقشة صيانة عقاري.")} target="_blank" rel="nofollow noopener noreferrer" className="focus-ring inline-flex items-center justify-center rounded-full bg-ink-950 px-6 py-3.5 text-sm font-semibold text-sand-50">ناقش صيانة عقارك</a>
            <Link href="/ar/property-maintenance/" className={btnLine}>كيف تعمل الصيانة</Link>
          </div>
        </div>
        <div>
          <h2 id="ar-areas" className="font-serif text-3xl leading-snug text-ink-950 sm:text-4xl">نخدم الدمام وما حولها</h2>
          <ul className="mt-6 grid grid-cols-2 gap-3">
            {arabicAreas.map((a, i) => (
              <li key={a.slug}>
                <Link href={`/ar/areas-we-serve/#${a.slug}`} className={`focus-ring block rounded-2xl p-5 ${i === 0 ? "bg-ink-950 text-sand-50" : "border border-ink-900/10 bg-sand-50 hover:border-ink-900/40"}`}>
                  <span className="block font-serif text-2xl">{a.name}</span>
                  <span className={`mt-1 block text-xs ${i === 0 ? "text-ink-300" : "text-ink-500"}`}>{i === 0 ? "مقرّنا الرئيسي" : "نخدمها من الدمام"}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function ArFaqCta() {
  return (
    <>
      <section id="faq" aria-labelledby="ar-faq" className="scroll-mt-20 py-20 sm:py-24">
        <div className="container-edge grid gap-12 lg:grid-cols-12">
          <h2 id="ar-faq" className="font-serif text-3xl leading-snug text-ink-950 sm:text-4xl lg:col-span-4">أسئلة شائعة</h2>
          <div className="divide-y divide-ink-900/10 border-y border-ink-900/10 lg:col-span-8">
            {arHomeFaqs.map((f, i) => (
              <details key={f.q} className="group py-1" open={i === 0}>
                <summary className="focus-ring flex cursor-pointer list-none items-center justify-between gap-4 rounded-sm py-4 text-[17px] font-semibold text-ink-950 [&::-webkit-details-marker]:hidden">
                  <h3>{f.q}</h3>
                  <span aria-hidden="true" className="flex h-7 w-7 flex-none items-center justify-center rounded-full border border-ink-900/20 text-lg transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="pb-5 pe-10 text-[15px] leading-loose text-ink-700">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-ink-950 py-20 text-sand-50 sm:py-24">
        <div className="container-edge grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <h2 className="font-serif text-3xl leading-snug sm:text-5xl sm:leading-tight">هل هناك شيء يحتاج إصلاحاً في منزلك؟</h2>
            <p className="mt-5 max-w-xl text-[15px] leading-loose text-ink-300">أرسل صورة ووصفاً قصيراً عبر واتساب أو اتصل بنا. متاحون على مدار الساعة في الدمام والخبر والظهران والقطيف.</p>
          </div>
          <div className="flex flex-col gap-3 lg:col-span-5">
            <a href={wa("السلام عليكم، أرغب في عرض سعر. المشكلة هي: ")} target="_blank" rel="nofollow noopener noreferrer" className={btnMain}>اطلب عرض سعر عبر واتساب</a>
            <a href={buildTelLink()} className="focus-ring inline-flex items-center justify-center rounded-full border border-sand-50/30 px-7 py-4 text-sm font-semibold hover:bg-sand-50/10">
              اتصل <span dir="ltr" className="ms-1">{siteConfig.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
