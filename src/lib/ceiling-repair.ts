// Shared data for the /ceiling-gypsum-board-repair/ page.

export interface ServiceLink {
  label: string;
  href: string;
}

export type CeilingIssueId =
  | "crack"
  | "stain"
  | "hole"
  | "sagging"
  | "peeling"
  | "opening"
  | "fixture"
  | "not-sure";

export interface CeilingIssue {
  id: CeilingIssueId;
  label: string;
  note: string;
}

export const ceilingIssues: CeilingIssue[] = [
  {
    id: "crack",
    label: "Crack",
    note: "Cracks can be surface-level or related to the board and joints beneath — worth a closer look before it's painted over.",
  },
  {
    id: "stain",
    label: "Water stain",
    note: "A stain shows where moisture reached the surface, not necessarily where it's coming from.",
  },
  {
    id: "hole",
    label: "Hole / damage",
    note: "The size and location of the damage usually determine whether a section can be patched or needs replacing.",
  },
  {
    id: "sagging",
    label: "Sagging",
    note: "A sagging section can point to moisture, age, or a support issue — this is one to have assessed rather than left.",
  },
  {
    id: "peeling",
    label: "Peeling / surface damage",
    note: "Peeling finish is often a surface matter, though it's worth checking what's underneath first.",
  },
  {
    id: "opening",
    label: "Opening / access damage",
    note: "Damage around an access point or panel edge is common and usually straightforward to assess.",
  },
  {
    id: "fixture",
    label: "Light / fixture area",
    note: "Damage around a fixture may involve the surrounding board as well as the fixture itself.",
  },
  {
    id: "not-sure",
    label: "Not sure",
    note: "That's fine — send us a photo and we'll help point it in the right direction.",
  },
];

export interface CeilingLayer {
  id: string;
  label: string;
  description: string;
}

export const ceilingLayers: CeilingLayer[] = [
  { id: "finish", label: "Finish", description: "The painted surface you see." },
  { id: "board", label: "Gypsum board", description: "The board that carries the finish." },
  { id: "support", label: "Framing / support", description: "The structure the board is fixed to." },
  { id: "underlying", label: "Underlying area", description: "The space above the ceiling line." },
];

export interface CrackPattern {
  id: string;
  label: string;
  description: string;
}

export const crackPatterns: CrackPattern[] = [
  {
    id: "fine",
    label: "Fine surface crack",
    description: "A small, subtle line — often cosmetic, but still worth noting if it changes over time.",
  },
  {
    id: "joint",
    label: "Joint / seam-related crack",
    description: "Follows a board seam — common where two boards meet and settle slightly differently.",
  },
  {
    id: "larger",
    label: "Larger / significant crack",
    description: "More prominent or widening cracks are worth a professional assessment rather than guessing from a photo.",
  },
];

export interface RestorationStep {
  tag: string;
  label: string;
  description: string;
}

export const restorationSteps: RestorationStep[] = [
  { tag: "01", label: "Damage visible", description: "The affected section is identified." },
  { tag: "02", label: "Area highlighted", description: "The extent of the damage is reviewed." },
  { tag: "03", label: "Section isolated", description: "The damaged area is worked on separately from sound surface." },
  { tag: "04", label: "Area cleaned", description: "The repair area is prepared." },
  { tag: "05", label: "Smooth finish", description: "The surface is brought back to a consistent finish." },
  { tag: "06", label: "Blended", description: "The repaired area blends into the surrounding ceiling." },
];

export interface RoomContext {
  id: string;
  label: string;
  concerns: string[];
}

export const roomContexts: RoomContext[] = [
  { id: "living", label: "Living Room", concerns: ["Cracks", "Holes", "Surface damage", "Lighting-area damage"] },
  { id: "bedroom", label: "Bedroom", concerns: ["Cracks", "Surface damage", "Minor settling marks"] },
  { id: "bathroom", label: "Bathroom", concerns: ["Moisture marks", "Ceiling surface damage", "Ventilation-related concerns"] },
  { id: "kitchen", label: "Kitchen", concerns: ["Stains", "Surface damage", "Fixture-area issues"] },
  { id: "corridor", label: "Corridor", concerns: ["Surface wear", "Isolated cracks", "Access-panel marks"] },
];

export interface FixtureArea {
  id: string;
  label: string;
  note: string;
}

export const fixtureAreas: FixtureArea[] = [
  { id: "recessed", label: "Recessed light", note: "Surface around a recessed fixture can show wear or damage over time." },
  { id: "pendant", label: "Pendant / light fixture", note: "The board around a mounted fixture sometimes needs attention alongside the fixture itself." },
  { id: "access", label: "Access panel", note: "Panels used for access can show edge wear that's worth finishing properly." },
];

export const decisionSteps = [
  "Visible damage",
  "Condition",
  "Extent",
  "Underlying issue?",
  "Repair, component replacement, or further assessment",
];

export interface PhotoShot {
  tag: string;
  title: string;
  body: string;
}

export const photoShots: PhotoShot[] = [
  { tag: "01", title: "Whole ceiling area", body: "A wider view of the affected ceiling." },
  { tag: "02", title: "Closer view of damage", body: "A nearer shot of the crack, stain or hole." },
  { tag: "03", title: "Wall/ceiling junction", body: "If relevant, where the ceiling meets the wall." },
  { tag: "04", title: "Optional side angle", body: "Helpful if the damage is easier to see at an angle." },
];

export const propertyOwnerFlow = ["Notice", "Photograph", "Assess", "Repair", "Restore"];

export const propertyOwnerExamples = [
  "Visible damage",
  "Tenant-reported problems",
  "Surface deterioration",
  "Moisture-related marks",
  "Holes",
  "Damaged panels",
];

export const scopeIncluded = [
  "Gypsum board damage",
  "Ceiling surface repair",
  "Holes",
  "Visible cracks",
  "Damaged sections",
  "Ceiling finishing",
  "Minor ceiling restoration",
  "Repair around affected areas where appropriate",
];

export const scopeNotIncluded = [
  "Major structural ceiling problems",
  "Specialist construction work",
];

export interface CrFaqEntry {
  q: string;
  a: string;
}

export const crFaqs: CrFaqEntry[] = [
  {
    q: "Do you repair damaged gypsum board ceilings?",
    a: "Yes. Gypsum board damage, from small sections to more visible areas, is a core part of this service.",
  },
  {
    q: "Can you repair ceiling cracks?",
    a: "Yes. The approach depends on the crack — a fine surface crack is treated differently from a larger or seam-related one.",
  },
  {
    q: "Can you repair holes in a ceiling?",
    a: "Yes, in most cases a damaged section can be patched and finished without replacing the whole ceiling.",
  },
  {
    q: "Do you repair ceiling water stains?",
    a: "Yes — though the stain itself is a symptom, so the source is worth understanding before the surface is restored.",
  },
  {
    q: "Can a damaged ceiling section be repaired without replacing the whole ceiling?",
    a: "Often, yes. Most gypsum board repairs are localised to the affected area rather than the full surface.",
  },
  {
    q: "Should a water stain be painted over immediately?",
    a: "Not necessarily. Painting over a stain doesn't address what caused it, so it's worth having the area assessed first.",
  },
  {
    q: "Can I send photos before requesting a repair?",
    a: "Yes. A photo of the whole area and a closer shot of the damage both help before we discuss the repair.",
  },
  {
    q: "Do you repair ceilings in bathrooms and kitchens?",
    a: "Yes — these rooms see the most moisture-related ceiling issues, so it's a common part of this service.",
  },
  {
    q: "What if the ceiling damage may be related to plumbing or waterproofing?",
    a: "We'll point it toward the relevant service — plumbing or waterproofing — alongside the ceiling repair itself where needed.",
  },
  {
    q: "What information should I provide with a ceiling repair request?",
    a: "Where the damage is, what you've noticed, how long it's been there, and a few clear photos if you can.",
  },
];

export interface ConnectionEntry {
  label: string;
  href: string;
}

export const waterCrossoverServices: ConnectionEntry[] = [
  { label: "Plumbing", href: "/plumbing-repair/" },
  { label: "Waterproofing", href: "/waterproofing/" },
  { label: "Painting & Wall Repair", href: "/painting-wall-repair/" },
];
