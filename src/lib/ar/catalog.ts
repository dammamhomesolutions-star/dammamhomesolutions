import { hasArabic } from "@/lib/i18n";

// Arabic service catalog. `en` is the English page; services with an Arabic
// page link to /ar + path, the rest link to the English page (marked as such).

interface ArService { label: string; en: string; blurb: string }
interface ArGroup { key: string; title: string; intro: string; services: ArService[] }

const groups: ArGroup[] = [
  {
    key: "cooling",
    title: "التكييف والهواء",
    intro: "مكيفات سبليت ومركزية وشباك — صيانة وتركيب وتنظيف.",
    services: [
      { label: "صيانة وإصلاح المكيفات", en: "/ac-repair/", blurb: "لا يبرّد، يسرّب ماء، صوت مزعج أو يفصل." },
      { label: "تركيب المكيفات", en: "/ac-installation-dammam/", blurb: "تركيب واستبدال بالمكان الصحيح." },
      { label: "تنظيف دكت المكيفات", en: "/ac-duct-cleaning-dammam/", blurb: "غبار، روائح، وضعف في الهواء." },
    ],
  },
  {
    key: "water",
    title: "السباكة والمياه",
    intro: "تسربات، مجاري، سخانات، مضخات وخزانات.",
    services: [
      { label: "سباكة وإصلاح", en: "/plumbing-repair/", blurb: "حنفيات، مراحيض، مواسير ودشات." },
      { label: "كشف وإصلاح تسربات المياه", en: "/water-leak-repair/", blurb: "تسربات مخفية، رطوبة، فاتورة مرتفعة." },
      { label: "صيانة وتركيب السخانات", en: "/water-heater-repair-installation-dammam/", blurb: "لا يوجد ماء حار، تسريب أو فصل." },
      { label: "تسليك المجاري والصرف", en: "/drain-unblocking-sewer-line-cleaning-dammam/", blurb: "انسداد، بطء تصريف وروائح." },
      { label: "صيانة مضخات المياه", en: "/water-pump-repair-dammam/", blurb: "ضغط ضعيف أو مضخة لا تتوقف." },
      { label: "تنظيف خزانات المياه", en: "/water-tank-cleaning/", blurb: "خزانات علوية وأرضية." },
    ],
  },
  {
    key: "electrical",
    title: "الكهرباء والأمان",
    intro: "أعطال، إنارة، تركيبات، أجهزة وأنظمة دخول.",
    services: [
      { label: "كهربائي وإصلاح أعطال", en: "/electrical-repair/", blurb: "قاطع يفصل، أفياش لا تعمل، أعطال." },
      { label: "تركيب الإنارة والتجهيزات", en: "/lighting-fixture-installation-dammam/", blurb: "ثريات، سبوت لايت ومراوح." },
      { label: "صيانة الأجهزة المنزلية", en: "/appliance-repair-dammam/", blurb: "غسالات، ثلاجات وأفران." },
      { label: "تركيب كاميرات وإنتركم", en: "/cctv-intercom-installation-dammam/", blurb: "كاميرات مراقبة وأجراس أبواب." },
    ],
  },
  {
    key: "interior",
    title: "الإصلاحات والتشطيبات الداخلية",
    intro: "جدران، أرضيات، أسقف، أبواب، مطابخ والتفاصيل النهائية.",
    services: [
      { label: "دهانات وإصلاح الجدران", en: "/painting-wall-repair/", blurb: "دهان داخلي وخارجي، تشققات وتقشر." },
      { label: "نجارة وأبواب وأقفال", en: "/carpentry-doors-locks/", blurb: "أبواب، إطارات وأقفال." },
      { label: "إصلاح الحمامات والمطابخ", en: "/bathroom-kitchen-repair/", blurb: "تركيبات، عزل حواف وبلاط." },
      { label: "إصلاح خزائن المطبخ", en: "/kitchen-cabinet-repair/", blurb: "مفصلات، أبواب وأدراج." },
      { label: "إصلاح البلاط والترويب", en: "/tile-repair-grout/", blurb: "بلاط مكسور وترويب تالف." },
      { label: "إصلاح الأرضيات", en: "/flooring-repair/", blurb: "أرضيات مجوفة أو متشققة." },
      { label: "جلي الرخام والجرانيت", en: "/marble-granite-polishing-dammam/", blurb: "رخام باهت أو مبقع." },
      { label: "إصلاح الأسقف والجبس بورد", en: "/ceiling-gypsum-board-repair/", blurb: "تشققات وبقع وهبوط." },
      { label: "تركيب الأسقف المستعارة", en: "/false-ceiling-installation-dammam/", blurb: "جبس بورد وإضاءة مخفية." },
      { label: "تركيب ورق الجدران", en: "/wallpaper-installation-dammam/", blurb: "جدار مميز أو غرفة كاملة." },
      { label: "إصلاح النوافذ والأبواب والزجاج", en: "/window-door-glass-repair/", blurb: "أبواب سحب وإطارات وزجاج." },
      { label: "تركيب الستائر والبلايند", en: "/curtain-blind-installation-dammam/", blurb: "مجاري وستائر بتركيب مستوٍ." },
      { label: "تركيب الأثاث", en: "/furniture-assembly-dammam/", blurb: "دواليب وأثاث مكاتب." },
    ],
  },
  {
    key: "exterior",
    title: "الواجهات والأسطح والمناطق الخارجية",
    intro: "الأجزاء التي تتحمل الشمس والغبار والمطر أولاً.",
    services: [
      { label: "العزل المائي", en: "/waterproofing/", blurb: "أسطح وحمامات ومناطق رطبة." },
      { label: "إصلاح الأسطح", en: "/roof-repair/", blurb: "تسربات وتشققات السطح." },
      { label: "استبدال عزل السطح", en: "/roof-replacement-dammam/", blurb: "عندما لا يكفي الإصلاح." },
      { label: "إصلاح الأسوار والجدران الخارجية", en: "/outdoor-boundary-wall-repair-dammam/", blurb: "تشققات ولياسة وتشطيب." },
      { label: "إصلاح البوابات وأبواب الكراج", en: "/gate-garage-door-repair/", blurb: "بوابات سحب وموتورات." },
      { label: "إصلاح مظلات السيارات والبرجولات", en: "/shade-pergola-repair-car-parking-shades-dammam/", blurb: "مظلات المواقف والجلسات." },
      { label: "صيانة المسابح", en: "/swimming-pool-repair-maintenance-dammam/", blurb: "مضخات وفلاتر وتسربات." },
    ],
  },
  {
    key: "restore",
    title: "الرطوبة والأضرار والتنظيف والحشرات",
    intro: "إعادة الأمور لوضعها بعد الرطوبة أو الحريق أو الاستخدام.",
    services: [
      { label: "علاج الرطوبة والعفن", en: "/mold-damp-treatment-dammam/", blurb: "جدران رطبة وعفن ومصدر الرطوبة." },
      { label: "معالجة أضرار الحريق والدخان", en: "/fire-smoke-damage-restoration-dammam/", blurb: "سخام ورائحة وترميم." },
      { label: "تنظيف شامل وقبل/بعد السكن", en: "/deep-cleaning-move-in-move-out-cleaning-dammam/", blurb: "تنظيف عميق للمنزل." },
      { label: "تنظيف الكنب والسجاد", en: "/sofa-carpet-cleaning-dammam/", blurb: "كنب وسجاد وموكيت." },
      { label: "مكافحة الحشرات", en: "/pest-control-dammam/", blurb: "صراصير ونمل وبق." },
    ],
  },
  {
    key: "general",
    title: "خدمات المنزل الشاملة",
    intro: "قوائم الأعمال الصغيرة، والمشاريع الأكبر، والعقارات التي تحتاج عناية مستمرة.",
    services: [
      { label: "خدمات الهاندي مان", en: "/handyman-services-dammam/", blurb: "عدة أعمال صغيرة في زيارة واحدة." },
      { label: "إصلاحات منزلية عامة", en: "/general-home-repairs/", blurb: "عندما لا تعرف التخصص المطلوب." },
      { label: "ترميم وتجديد المنازل", en: "/home-renovation-dammam/", blurb: "من غرفة واحدة إلى المنزل كامل." },
      { label: "صيانة العقارات", en: "/property-maintenance/", blurb: "عناية مستمرة للمنازل والعقارات المؤجرة." },
      { label: "إصلاحات الطوارئ", en: "/emergency-home-repairs/", blurb: "تسربات وأعطال عاجلة — على مدار الساعة." },
    ],
  },
];

export const arServiceGroups = groups.map((g) => ({
  ...g,
  services: g.services.map((s) => ({ ...s, href: hasArabic(s.en) ? `/ar${s.en}` : s.en, arabic: hasArabic(s.en) })),
}));
export const arAllServices = arServiceGroups.flatMap((g) => g.services);
