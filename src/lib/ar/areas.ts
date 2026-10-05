// Arabic service-area content. Same cities and the same factual, general
// descriptions as the English page — written for Arabic readers.

export const arabicAreas = [
  {
    slug: "dammam",
    name: "الدمام",
    summary: "مقرّنا الرئيسي. تجمع الدمام بين الفلل العائلية والعمائر السكنية والعقارات المؤجرة، ولذلك تشمل أعمال الصيانة فيها تقريباً كل شيء: من الخزانات العلوية والمكيفات السبليت إلى الحمامات والأسوار ومظلات السيارات.",
    homes: ["فلل عائلية", "عمائر وشقق سكنية", "عقارات مؤجرة", "أحياء قديمة وحديثة"],
    common: [
      { label: "صيانة المكيفات", href: "/ar/ac-repair/" },
      { label: "سباكة", href: "/ar/plumbing-repair/" },
      { label: "تنظيف الخزانات", href: "/water-tank-cleaning/" },
      { label: "العزل المائي", href: "/ar/waterproofing/" },
    ],
  },
  {
    slug: "al-khobar",
    name: "الخبر",
    summary: "بجوار الدمام، وتضم الخبر نسبة كبيرة من الشقق والفلل والمجمعات السكنية، ومنها منازل مؤجرة تحتاج غالباً إلى إصلاحات وتجديد بين مستأجر وآخر.",
    homes: ["شقق", "فلل", "مجمعات سكنية", "منازل مؤجرة"],
    common: [
      { label: "صيانة العقارات", href: "/ar/property-maintenance/" },
      { label: "هاندي مان", href: "/ar/handyman-services-dammam/" },
      { label: "كهربائي", href: "/ar/electrical-repair/" },
      { label: "دهانات", href: "/ar/painting-wall-repair/" },
    ],
  },
  {
    slug: "dhahran",
    name: "الظهران",
    summary: "تحتاج فلل الظهران ومساكن المجمعات غالباً إلى الخدمات الأساسية نفسها — تكييف وسباكة وكهرباء وتشطيبات — إضافة إلى أعمال خارجية مثل المظلات والأسوار.",
    homes: ["فلل", "مساكن المجمعات", "منازل عائلية"],
    common: [
      { label: "صيانة المكيفات", href: "/ar/ac-repair/" },
      { label: "مظلات السيارات", href: "/shade-pergola-repair-car-parking-shades-dammam/" },
      { label: "الأسوار الخارجية", href: "/outdoor-boundary-wall-repair-dammam/" },
      { label: "نجارة وأبواب", href: "/carpentry-doors-locks/" },
    ],
  },
  {
    slug: "qatif",
    name: "القطيف",
    summary: "شمال الدمام، وأغلب مساكن القطيف منازل عائلية وفلل. قد تحتاج العقارات الأقدم إلى إصلاح سباكة وتسربات، وعزل مائي، وصيانة مكيفات، وإصلاحات عامة.",
    homes: ["منازل عائلية", "فلل", "عقارات أقدم"],
    common: [
      { label: "كشف التسربات", href: "/ar/water-leak-repair/" },
      { label: "العزل المائي", href: "/ar/waterproofing/" },
      { label: "صيانة المكيفات", href: "/ar/ac-repair/" },
      { label: "إصلاحات عامة", href: "/general-home-repairs/" },
    ],
  },
];
