// Shared data for the /emergency-home-repairs/ page.

export type ProblemCategoryId = "water" | "electricity" | "ac" | "door" | "wall" | "other";

export interface ServiceLink {
  label: string;
  href: string;
}

export interface WhatHappenedCategory {
  id: ProblemCategoryId;
  label: string;
  subcategories: string[];
  note: string;
  routes: ServiceLink[];
}

export const whatHappenedCategories: WhatHappenedCategory[] = [
  {
    id: "water",
    label: "Water",
    subcategories: [
      "Leak",
      "Burst / major water issue",
      "Drain blockage",
      "Water appearing somewhere unexpected",
      "Not sure",
    ],
    note: "Water issues can involve plumbing, waterproofing, or another property issue depending on where it's coming from.",
    routes: [
      { label: "Plumbing", href: "/plumbing-repair/" },
      { label: "Waterproofing", href: "/waterproofing/" },
    ],
  },
  {
    id: "electricity",
    label: "Electricity",
    subcategories: [
      "Power stopped in an area",
      "Breaker keeps tripping",
      "Socket / switch problem",
      "Burning smell / visible damage",
      "Not sure",
    ],
    note: "If there's a burning smell or visible damage, treat this as a safety matter first, not just a repair.",
    routes: [{ label: "Electrical Repair", href: "/electrical-repair/" }],
  },
  {
    id: "ac",
    label: "AC",
    subcategories: [
      "Suddenly stopped cooling",
      "Unit stopped working",
      "Water leaking from AC",
      "Unusual noise",
      "Not sure",
    ],
    note: "The visible symptom doesn't always identify the cause — a closer look usually explains more than the symptom alone.",
    routes: [{ label: "AC Repair", href: "/ac-repair/" }],
  },
  {
    id: "door",
    label: "Door / Lock / Hardware",
    subcategories: [
      "Door won't close",
      "Door / lock problem",
      "Handle / hinge damage",
      "Property access issue",
    ],
    note: "Most door and hardware problems come down to alignment or worn hardware.",
    routes: [{ label: "Carpentry, Doors & Locks", href: "/carpentry-doors-locks/" }],
  },
  {
    id: "wall",
    label: "Wall / Ceiling",
    subcategories: [
      "Sudden water stain",
      "Ceiling damage",
      "Wall damage",
      "Cracking or visible deterioration",
    ],
    note: "Wall and ceiling issues can be a surface matter, a moisture issue, or occasionally something else — worth a closer look before repainting over it.",
    routes: [
      { label: "Painting & Wall Repair", href: "/painting-wall-repair/" },
      { label: "Waterproofing", href: "/waterproofing/" },
    ],
  },
  {
    id: "other",
    label: "Other",
    subcategories: [
      "Something broke",
      "Something stopped working",
      "Multiple issues",
      "Not sure",
    ],
    note: "That's fine — describe it in your own words and send a photo. We'll help point it toward the right service.",
    routes: [{ label: "General Home Repairs", href: "/general-home-repairs/" }],
  },
];

export const immediateDangerExamples = [
  "Fire or smoke",
  "A major electrical hazard",
  "Active, dangerous flooding",
  "Structural instability",
  "A gas-related emergency",
  "Someone trapped or injured",
];

export const propertyProblemExamples = [
  "AC stopped working",
  "A leaking tap",
  "A blocked drain",
  "A broken door",
  "A damaged fixture",
  "An electrical issue without immediate danger",
];

export const safetyEmergencyExamples = [
  "Fire",
  "Smoke",
  "A serious electrical hazard",
  "Structural collapse risk",
  "Someone trapped",
  "A serious injury",
];

export interface DescribeExample {
  customerSays: string;
  mayInvolve: string[];
}

export const describeExamples: DescribeExample[] = [
  {
    customerSays: "Water is coming from the ceiling.",
    mayInvolve: ["Plumbing", "Waterproofing", "Another property issue"],
  },
  {
    customerSays: "The lights suddenly stopped working.",
    mayInvolve: ["Electrical", "A breaker-related issue", "A fixture issue"],
  },
  {
    customerSays: "The AC started leaking.",
    mayInvolve: ["AC", "A drainage-related issue", "Another issue requiring inspection"],
  },
];

export interface ServiceRoutingNode {
  id: string;
  label: string;
  routes: ServiceLink[];
}

export const serviceRoutingNodes: ServiceRoutingNode[] = [
  {
    id: "water",
    label: "Water",
    routes: [
      { label: "Plumbing", href: "/plumbing-repair/" },
      { label: "Waterproofing", href: "/waterproofing/" },
    ],
  },
  {
    id: "electricity",
    label: "Electricity",
    routes: [{ label: "Electrical Repair", href: "/electrical-repair/" }],
  },
  {
    id: "ac",
    label: "AC",
    routes: [{ label: "AC Repair", href: "/ac-repair/" }],
  },
  {
    id: "wall",
    label: "Wall / Ceiling",
    routes: [
      { label: "Painting & Wall Repair", href: "/painting-wall-repair/" },
      { label: "Waterproofing", href: "/waterproofing/" },
      { label: "Plumbing", href: "/plumbing-repair/" },
    ],
  },
  {
    id: "door",
    label: "Door / Hardware",
    routes: [{ label: "Carpentry, Doors & Locks", href: "/carpentry-doors-locks/" }],
  },
  {
    id: "bathroom-kitchen",
    label: "Bathroom / Kitchen",
    routes: [{ label: "Bathroom & Kitchen Repair", href: "/bathroom-kitchen-repair/" }],
  },
  {
    id: "unknown",
    label: "Not sure",
    routes: [{ label: "General Home Repairs", href: "/general-home-repairs/" }],
  },
];

export interface ProcessStep {
  tag: string;
  title: string;
  body: string;
}

export const processSteps: ProcessStep[] = [
  { tag: "01", title: "You explain", body: "Tell us what happened." },
  { tag: "02", title: "We review", body: "We look at the information, photos and location details you provide." },
  {
    tag: "03",
    title: "We identify the appropriate service",
    body: "Where possible, we guide the request toward the relevant repair category.",
  },
  {
    tag: "04",
    title: "The job is assessed",
    body: "Actual repair requirements depend on the condition found and the scope of work.",
  },
  { tag: "05", title: "Repair", body: "Work proceeds according to the agreed scope." },
];

export const landlordSteps = [
  "Problem reported",
  "Photos / details",
  "Service identified",
  "Repair request",
  "Property updated",
];

export const nonEmergencyExamples = [
  "A dripping fixture",
  "A loose handle",
  "A damaged wall",
  "Peeling paint",
  "A minor leak",
  "A cabinet issue",
  "An AC performance change",
];

export const acEmergencySymptoms = [
  "No cooling",
  "Unit stops unexpectedly",
  "Water around the indoor unit",
  "Unusual sound",
  "Unusual smell",
  "Airflow problem",
];

export const electricalDangerSigns = [
  "A burning smell",
  "Smoke",
  "Visible sparks",
  "Exposed or damaged wiring",
  "Repeated dangerous electrical behaviour",
  "Signs of fire",
];

export const doorAccessIssues = [
  "Door won't close",
  "Handle damage",
  "Hinge issue",
  "Lock or door hardware problem",
];

export interface EhFaqEntry {
  q: string;
  a: string;
  group: "Safety first" | "What we cover" | "Getting started";
}

export const ehFaqs: EhFaqEntry[] = [
  {
    q: "What counts as an emergency home repair?",
    a: "Generally, a sudden household problem that needs attention sooner rather than later — a leak, an electrical fault, a door that won't close, an AC failure. It's different from an immediate safety emergency, which involves risk to life or property (see the safety check above).",
    group: "What we cover",
  },
  {
    q: "Do you provide 24/7 emergency service?",
    a: "We haven't confirmed round-the-clock coverage on this page. Contact us with your situation and we'll let you know what's realistically available.",
    group: "Getting started",
  },
  {
    q: "What should I do if there is immediate danger?",
    a: "Prioritise safety first. Contact the appropriate emergency service for fire, gas, structural or serious injury situations rather than waiting for a home-repair company.",
    group: "Safety first",
  },
  {
    q: "Can I send photos before requesting a repair?",
    a: "Yes. A photo of the area and a short note on what happened is often more useful than a written description alone.",
    group: "Getting started",
  },
  {
    q: "What if I don't know which repair service I need?",
    a: "That's fine — describe what happened in your own words. We'll help point it toward the right category once we see the details.",
    group: "Getting started",
  },
  {
    q: "Do you handle sudden plumbing problems?",
    a: "Yes — leaks, blockages and other plumbing issues fall under our plumbing service.",
    group: "What we cover",
  },
  {
    q: "Do you handle electrical repair requests?",
    a: "Yes, for household electrical fixtures and faults. If there's immediate danger — smoke, sparks, a burning smell — treat that as a safety matter first.",
    group: "What we cover",
  },
  {
    q: "Can you help if the AC suddenly stops?",
    a: "Yes. AC problems are common and the cause isn't always obvious from the symptom, so a closer look is usually needed.",
    group: "What we cover",
  },
  {
    q: "Do you handle door and lock problems?",
    a: "Yes, for repair of doors, locks, handles and hinges. For an active security emergency, appropriate emergency or security support comes first.",
    group: "What we cover",
  },
  {
    q: "What happens if my issue requires another specialist?",
    a: "We'll point it toward the relevant service — for example plumbing, electrical, waterproofing or general repairs — depending on what it actually involves.",
    group: "What we cover",
  },
];
