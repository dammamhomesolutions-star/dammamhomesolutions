// Shared data for the /property-maintenance/ page. Kept separate from the
// components (mirrors how ac-symptoms.ts, plumbing-areas.ts etc. are split
// out) since several sections reference the same property areas and
// specialist links.

export type PropertyAreaId =
  | "cooling"
  | "water"
  | "electrical"
  | "bathrooms"
  | "kitchen"
  | "walls"
  | "doors"
  | "exterior";

export interface HealthMapArea {
  id: PropertyAreaId;
  tag: string;
  label: string;
  watchFor: string[];
  ctaLabel: string;
  ctaHref: string;
  /** Position of the inspection pin on the hero/health-map elevation, in percent. */
  pin: { x: number; y: number };
}

export const healthMapAreas: HealthMapArea[] = [
  {
    id: "cooling",
    tag: "N-01",
    label: "Cooling",
    watchFor: [
      "Unusual cooling performance",
      "Airflow changes",
      "Unusual sounds",
      "Water around indoor units",
      "Maintenance needs",
    ],
    ctaLabel: "Explore AC Repair",
    ctaHref: "/ac-repair/",
    pin: { x: 74, y: 30 },
  },
  {
    id: "water",
    tag: "N-02",
    label: "Water",
    watchFor: [
      "Dripping fixtures",
      "Slow drainage",
      "Moisture marks",
      "Recurring leaks",
      "Unusual water pressure",
    ],
    ctaLabel: "Explore Plumbing",
    ctaHref: "/plumbing-repair/",
    pin: { x: 22, y: 62 },
  },
  {
    id: "electrical",
    tag: "N-03",
    label: "Electrical",
    watchFor: [
      "Switches or sockets behaving differently",
      "Lights flickering or dimming",
      "A breaker tripping more than usual",
      "Warm switch plates or sockets",
      "Fixtures that need attention",
    ],
    ctaLabel: "Explore Electrical Repair",
    ctaHref: "/electrical-repair/",
    pin: { x: 62, y: 20 },
  },
  {
    id: "bathrooms",
    tag: "N-04",
    label: "Bathrooms",
    watchFor: [
      "Slow or noisy drains",
      "Worn seals around fittings",
      "Recurring dampness",
      "Fixtures that feel loose",
      "Ventilation that seems weaker than before",
    ],
    ctaLabel: "Explore Bathroom & Kitchen Repair",
    ctaHref: "/bathroom-kitchen-repair/",
    pin: { x: 36, y: 48 },
  },
  {
    id: "kitchen",
    tag: "N-05",
    label: "Kitchen",
    watchFor: [
      "Tap or fixture wear",
      "Cabinet or fitting condition",
      "Drainage under the sink",
      "Worktop condition",
      "Fittings around the sink and counters",
    ],
    ctaLabel: "Explore Bathroom & Kitchen Repair",
    ctaHref: "/bathroom-kitchen-repair/",
    pin: { x: 84, y: 58 },
  },
  {
    id: "walls",
    tag: "N-06",
    label: "Walls & Surfaces",
    watchFor: [
      "Peeling paint",
      "New stains",
      "Cracks",
      "Damaged surfaces",
      "Moisture marks",
    ],
    ctaLabel: "Explore Wall Repair",
    ctaHref: "/painting-wall-repair/",
    pin: { x: 50, y: 38 },
  },
  {
    id: "doors",
    tag: "N-07",
    label: "Doors & Hardware",
    watchFor: [
      "A door becoming harder to close",
      "Handles or locks getting stiff",
      "Hinges wearing or squeaking",
      "Cabinet hardware loosening",
      "Keys that stick or turn awkwardly",
    ],
    ctaLabel: "Explore Carpentry, Doors & Locks",
    ctaHref: "/carpentry-doors-locks/",
    pin: { x: 14, y: 34 },
  },
  {
    id: "exterior",
    tag: "N-08",
    label: "Exterior / Utility",
    watchFor: [
      "Exterior wall condition",
      "Dampness in utility areas",
      "Drainage around the property",
      "External fixtures and fittings",
      "General wear from weather and use",
    ],
    ctaLabel: "Explore General Home Repairs",
    ctaHref: "/general-home-repairs/",
    pin: { x: 92, y: 76 },
  },
];

export interface SystemNode {
  id: string;
  label: string;
  note: string;
  href: string;
  linkLabel: string;
}

export const systemNodes: SystemNode[] = [
  { id: "cooling", label: "Cooling", note: "AC units and airflow", href: "/ac-repair/", linkLabel: "AC Repair" },
  { id: "water", label: "Water", note: "Supply, drainage and pressure", href: "/plumbing-repair/", linkLabel: "Plumbing" },
  { id: "power", label: "Power", note: "Switches, sockets and circuits", href: "/electrical-repair/", linkLabel: "Electrical Repair" },
  { id: "surfaces", label: "Surfaces", note: "Paint, walls and finishes", href: "/painting-wall-repair/", linkLabel: "Painting & Wall Repair" },
  { id: "fixtures", label: "Fixtures", note: "Everyday fittings around the property", href: "/general-home-repairs/", linkLabel: "General Home Repairs" },
  { id: "doors", label: "Doors & Hardware", note: "Handles, hinges and locks", href: "/carpentry-doors-locks/", linkLabel: "Carpentry, Doors & Locks" },
  { id: "wet-areas", label: "Wet Areas", note: "Bathrooms and moisture-prone rooms", href: "/bathroom-kitchen-repair/", linkLabel: "Bathroom & Kitchen Repair" },
  { id: "kitchen", label: "Kitchen", note: "Fittings, cabinets and fixtures", href: "/bathroom-kitchen-repair/", linkLabel: "Bathroom & Kitchen Repair" },
];

export interface WhatWeMaintainCategory {
  id: string;
  label: string;
  summary: string;
  body: string;
  href: string;
  linkLabel: string;
}

export const whatWeMaintainCategories: WhatWeMaintainCategory[] = [
  {
    id: "cooling",
    label: "Cooling",
    summary: "AC-related maintenance and issues.",
    body: "Cooling performance, airflow, unusual sounds and the general condition of indoor and outdoor units. Some of this is routine attention; some of it is a repair once something has actually gone wrong.",
    href: "/ac-repair/",
    linkLabel: "AC Repair",
  },
  {
    id: "plumbing",
    label: "Plumbing",
    summary: "Fixtures, drainage and visible plumbing concerns.",
    body: "Taps, drains, visible pipework and water pressure. Dripping fixtures and slow drains are usually worth attention before they turn into a bigger leak.",
    href: "/plumbing-repair/",
    linkLabel: "Plumbing",
  },
  {
    id: "electrical",
    label: "Electrical",
    summary: "Household electrical fixtures and maintenance concerns within the actual service scope.",
    body: "Switches, sockets, light fixtures and everyday electrical fittings. Anything involving the property's main supply or wiring beyond household fixtures needs a closer look by a specialist.",
    href: "/electrical-repair/",
    linkLabel: "Electrical Repair",
  },
  {
    id: "bathrooms",
    label: "Bathrooms",
    summary: "Fixtures, surfaces, drainage and water-related concerns.",
    body: "Taps, showers, drains, seals and surfaces in bathrooms — a part of the property where small issues tend to show up early.",
    href: "/bathroom-kitchen-repair/",
    linkLabel: "Bathroom & Kitchen Repair",
  },
  {
    id: "kitchens",
    label: "Kitchens",
    summary: "Fixtures, cabinets, fittings and related repair needs.",
    body: "Sink fittings, cabinet hardware, worktop condition and everyday kitchen wear from daily use.",
    href: "/bathroom-kitchen-repair/",
    linkLabel: "Bathroom & Kitchen Repair",
  },
  {
    id: "walls",
    label: "Walls & Surfaces",
    summary: "Paint, minor wall damage and visible deterioration.",
    body: "Paint condition, small cracks, stains and surfaces that are starting to show wear. Some of this is cosmetic; some is worth investigating before repainting over it.",
    href: "/painting-wall-repair/",
    linkLabel: "Painting & Wall Repair",
  },
  {
    id: "doors",
    label: "Doors & Hardware",
    summary: "Handles, hinges, locks, doors and household hardware.",
    body: "Doors that no longer close properly, worn hinges, stiff locks and loose handles — usually a matter of alignment or hardware condition.",
    href: "/carpentry-doors-locks/",
    linkLabel: "Carpentry, Doors & Locks",
  },
  {
    id: "general",
    label: "General Property Repairs",
    summary: "Small practical issues that don't belong neatly to one specialist category.",
    body: "Everyday items that need attention but don't sit cleanly under one specialist trade — the kind of thing worth mentioning even if you're not sure how to categorise it.",
    href: "/general-home-repairs/",
    linkLabel: "General Home Repairs",
  },
];

export interface PropertyTypeInfo {
  id: string;
  label: string;
  body: string;
}

export const propertyTypes: PropertyTypeInfo[] = [
  {
    id: "villa",
    label: "Villa",
    body: "Larger property footprint, multiple rooms, outdoor and utility areas, and more household systems to keep an eye on across the whole property.",
  },
  {
    id: "apartment",
    label: "Apartment",
    body: "A more compact space, with interior fixtures and systems that matter most, plus shared-building considerations for anything outside the unit itself.",
  },
  {
    id: "rental",
    label: "Rental Property",
    body: "Practical repairs and everyday wear-and-tear issues, with the priority usually being to keep the property usable for tenants.",
  },
  {
    id: "occupied",
    label: "Occupied Home",
    body: "Maintenance carried out while people are actively living in the property, which usually means working around daily routines rather than an empty site.",
  },
];

export interface SpecialistRoute {
  issue: string;
  serviceLabel: string;
  href: string;
}

export const specialistRoutes: SpecialistRoute[] = [
  { issue: "AC problem", serviceLabel: "AC Repair", href: "/ac-repair/" },
  { issue: "Water or drainage problem", serviceLabel: "Plumbing", href: "/plumbing-repair/" },
  { issue: "Moisture ingress", serviceLabel: "Waterproofing", href: "/waterproofing/" },
  { issue: "Electrical fault", serviceLabel: "Electrical Repair", href: "/electrical-repair/" },
  { issue: "Wall or paint issue", serviceLabel: "Painting & Wall Repair", href: "/painting-wall-repair/" },
  { issue: "Door or hardware issue", serviceLabel: "Carpentry, Doors & Locks", href: "/carpentry-doors-locks/" },
  { issue: "Bathroom or kitchen issue", serviceLabel: "Bathroom & Kitchen Repair", href: "/bathroom-kitchen-repair/" },
  { issue: "Unclear household issue", serviceLabel: "General Home Repairs", href: "/general-home-repairs/" },
];

export interface ConditionQuestion {
  id: PropertyAreaId;
  category: string;
  question: string;
}

export const conditionQuestions: ConditionQuestion[] = [
  { id: "cooling", category: "Cooling", question: "Has the AC performance changed recently?" },
  { id: "water", category: "Water", question: "Any recurring leaks, dripping or moisture marks?" },
  { id: "electrical", category: "Electrical", question: "Any switches, lights, sockets or breakers behaving differently?" },
  { id: "doors", category: "Doors & Hardware", question: "Any doors, locks, handles or cabinets becoming difficult to use?" },
  { id: "walls", category: "Surfaces", question: "Any new cracks, peeling paint, stains or visible deterioration?" },
];

export const conditionAnswerOptions = ["Yes", "No", "Not sure"] as const;
export type ConditionAnswer = (typeof conditionAnswerOptions)[number];

export interface PmFaqEntry {
  q: string;
  a: string;
}

export const pmFaqs: PmFaqEntry[] = [
  {
    q: "What does property maintenance include?",
    a: "Ongoing attention to the systems, fixtures and surfaces of an existing property — cooling, plumbing, electrical fixtures, bathrooms, kitchens, walls, and doors and hardware. It covers both routine checks and the repairs that come out of them.",
  },
  {
    q: "How is property maintenance different from a repair?",
    a: "A repair responds to something that has already gone wrong. Maintenance is about reviewing the property's condition and dealing with things before they become an urgent repair — though it can't catch everything, and it doesn't replace a repair once something has actually failed.",
  },
  {
    q: "Can I request maintenance for several areas of one property?",
    a: "Yes. You can list everything you've noticed in one message — for example the AC, a bathroom tap and a wall stain — and we'll help work out what each one needs.",
  },
  {
    q: "Can I send photos before requesting maintenance?",
    a: "Yes. A photo of the area, and a short note on what you've noticed, is often more useful than a written description alone.",
  },
  {
    q: "Do you maintain villas and apartments?",
    a: "Yes. The approach depends on the property — villas typically involve more rooms and outdoor or utility areas, while apartments are usually more compact with a narrower set of interior fixtures.",
  },
  {
    q: "Can landlords request maintenance for rental properties?",
    a: "Yes. Landlords and property managers can send maintenance requests covering one property or several, including photos and a note on priority for each item.",
  },
  {
    q: "How often should a property be checked?",
    a: "There isn't a single schedule that fits every property. The right frequency depends on the property itself, its systems, how it's occupied, and what actually needs attention.",
  },
  {
    q: "What if I don't know which service I need?",
    a: "That's fine — describe what you've noticed and where, and send a photo if you have one. We'll help point it toward the right kind of visit.",
  },
  {
    q: "Do you handle major renovations or construction?",
    a: "No. This service covers maintenance and practical repairs for existing properties, not new construction, major structural work or full renovations.",
  },
  {
    q: "What happens if an issue requires a specialist service?",
    a: "We'll point it toward the relevant service — for example AC repair, plumbing, waterproofing or electrical repair — depending on what the issue actually involves.",
  },
];
