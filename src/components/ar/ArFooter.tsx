import Link from "next/link";
import { buildTelLink, buildWhatsAppLink, siteConfig } from "@/lib/site-config";
import { arabicAreas } from "@/lib/ar/areas";

const services = [
  { label: "صيانة المكيفات", href: "/ar/ac-repair/" },
  { label: "سباكة", href: "/ar/plumbing-repair/" },
  { label: "كشف تسربات المياه", href: "/ar/water-leak-repair/" },
  { label: "كهربائي", href: "/ar/electrical-repair/" },
  { label: "دهانات", href: "/ar/painting-wall-repair/" },
  { label: "العزل المائي", href: "/ar/waterproofing/" },
];
const care = [
  { label: "صيانة العقارات", href: "/ar/property-maintenance/" },
  { label: "إصلاحات الطوارئ", href: "/ar/emergency-home-repairs/" },
  { label: "هاندي مان", href: "/ar/handyman-services-dammam/" },
];
const company = [
  { label: "جميع الخدمات", href: "/ar/services/" },
  { label: "المناطق التي نخدمها", href: "/ar/areas-we-serve/" },
  { label: "من نحن", href: "/ar/about-us/" },
  { label: "تواصل معنا", href: "/ar/contact-us/" },
];
const cls = "focus-ring rounded-sm text-sm text-ink-700 hover:text-rust-700";

function Col({ title, items }: { title: string; items: { label: string; href: string }[] }) {
  return (
    <div>
      <p className="text-sm font-semibold text-ink-500">{title}</p>
      <ul className="mt-4 space-y-2.5">
        {items.map((l) => <li key={l.href}><Link href={l.href} className={cls}>{l.label}</Link></li>)}
      </ul>
    </div>
  );
}

export default function ArFooter() {
  return (
    <footer className="border-t border-ink-900/10 bg-sand-100/60 pb-28 pt-16 sm:pb-16">
      <div className="container-edge grid gap-10 sm:grid-cols-2 lg:grid-cols-12">
        <div className="sm:col-span-2 lg:col-span-4">
          <p className="font-serif text-lg font-semibold text-ink-950">حلول الدمام المنزلية</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-ink-600">صيانة وإصلاح المنازل للعملاء في الدمام والخبر والظهران والقطيف.</p>
          <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-ink-900/15 px-3 py-1 text-xs font-semibold text-ink-800">
            <span aria-hidden="true" className="h-2 w-2 rounded-full bg-moss-600" /> متاحون على مدار الساعة
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            <a href={buildTelLink()} className="focus-ring inline-flex items-center rounded-full border border-ink-900/20 px-4 py-2 text-sm font-semibold text-ink-950">
              اتصل <span dir="ltr" className="ms-1">{siteConfig.phoneDisplay}</span>
            </a>
            <a href={buildWhatsAppLink("السلام عليكم، أرغب في عرض سعر لعمل صيانة.")} target="_blank" rel="nofollow noopener noreferrer" className="focus-ring inline-flex items-center rounded-full bg-ink-950 px-4 py-2 text-sm font-semibold text-sand-50">واتساب</a>
          </div>
        </div>
        <div className="lg:col-span-3"><Col title="الخدمات" items={[...services, { label: "عرض جميع الخدمات ←", href: "/ar/services/" }]} /></div>
        <div className="lg:col-span-2"><Col title="العناية بالمنزل" items={care} /></div>
        <div className="grid grid-cols-2 gap-10 sm:col-span-2 lg:col-span-3 lg:grid-cols-1">
          <Col title="المناطق" items={arabicAreas.map((a) => ({ label: a.name, href: `/ar/areas-we-serve/#${a.slug}` }))} />
          <Col title="الشركة" items={company} />
        </div>
      </div>
      <div className="container-edge mt-12 flex flex-col gap-4 border-t border-ink-900/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-ink-500">© {new Date().getFullYear()} حلول الدمام المنزلية · الدمام، المملكة العربية السعودية</p>
        <ul className="flex flex-wrap gap-x-5 gap-y-2 text-xs">
          <li><Link href="/privacy-policy/" hrefLang="en" className="focus-ring rounded-sm text-ink-500 hover:text-rust-700">سياسة الخصوصية (بالإنجليزية)</Link></li>
          <li><Link href="/terms-conditions/" hrefLang="en" className="focus-ring rounded-sm text-ink-500 hover:text-rust-700">الشروط والأحكام (بالإنجليزية)</Link></li>
          <li><Link href="/" hrefLang="en" lang="en" className="focus-ring rounded-sm text-ink-500 hover:text-rust-700">English</Link></li>
        </ul>
      </div>
    </footer>
  );
}
