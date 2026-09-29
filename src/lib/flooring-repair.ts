// Shared data for the /flooring-repair/ page.

export type FlProblemId =
  | "cracked"
  | "chipped"
  | "uneven"
  | "loose"
  | "worn"
  | "stained"
  | "edge"
  | "not-sure";

export interface FlProblem {
  id: FlProblemId;
  label: string;
  note: string;
}

export const flProblems: FlProblem[] = [
  {
    id: "cracked",
    label: "Cracked",
    note: "A crack can be surface-level or run deeper — the extent is usually clearer once the area is seen.",
  },
  {
    id: "chipped",
    label: "Chipped",
    note: "A chipped edge or corner is common on well-used flooring and is usually a contained repair.",
  },
  {
    id: "uneven",
    label: "Uneven",
    note: "A section that looks or feels uneven can involve the surface, the layer beneath it, or both.",
  },
  {
    id: "loose",
    label: "Loose",
    note: "A section that shifts slightly underfoot is worth assessing before it affects a larger area.",
  },
  {
    id: "worn",
    label: "Worn",
    note: "Worn flooring often shows up first in high-traffic areas and entryways.",
  },
  {
    id: "stained",
    label: "Stained",
    note: "Discoloration can be a surface matter, or it can point to something worth a closer look.",
  },
  {
    id: "edge",
    label: "Damaged edge",
    note: "Damage along a perimeter or threshold is common where flooring meets a wall or doorway.",
  },
  {
    id: "not-sure",
    label: "Not sure",
    note: "That's fine — send us a photo and we'll help point it in the right direction.",
  },
];

export interface FlLayer {
  id: string;
  label: string;
  description: string;
}

export const flLayers: FlLayer[] = [
  { id: "finish", label: "Finished surface", description: "The visible, walked-on surface." },
  { id: "material", label: "Flooring material", description: "The tile, stone or surface material itself." },
  { id: "underlying", label: "Underlying layer", description: "The layer the flooring material sits on." },
  { id: "base", label: "Base", description: "The structural base beneath the flooring system." },
];

export type FlDamageId = "crack" | "chip" | "wear" | "stain" | "edge" | "uneven";

export interface FlDamageType {
  id: FlDamageId;
  label: string;
}

export const flDamageTypes: FlDamageType[] = [
  { id: "crack", label: "Crack" },
  { id: "chip", label: "Chip" },
  { id: "wear", label: "Wear" },
  { id: "stain", label: "Stain" },
  { id: "edge", label: "Edge" },
  { id: "uneven", label: "Uneven" },
];

export type FlMaterialId = "tile" | "stone" | "ceramic" | "other";

export interface FlMaterial {
  id: FlMaterialId;
  label: string;
}

export const flMaterials: FlMaterial[] = [
  { id: "tile", label: "Tile" },
  { id: "stone", label: "Stone" },
  { id: "ceramic", label: "Ceramic" },
  { id: "other", label: "Other" },
];

export interface FlRoomContext {
  id: string;
  label: string;
}

export const flRoomContexts: FlRoomContext[] = [
  { id: "living", label: "Living Area" },
  { id: "bedroom", label: "Bedroom" },
  { id: "kitchen", label: "Kitchen" },
  { id: "bathroom", label: "Bathroom" },
  { id: "entry", label: "Entry" },
  { id: "other", label: "Other" },
];

export interface FlCrossoverExample {
  id: string;
  label: string;
  possibilities: string[];
}

export const flCrossoverExamples: FlCrossoverExample[] = [
  { id: "stain", label: "Surface stain", possibilities: ["Water", "Plumbing", "Moisture", "Surface condition"] },
  { id: "wall", label: "Damaged floor near a wall", possibilities: ["Surface", "Water", "Adjacent wall condition"] },
  { id: "bathroom", label: "Bathroom floor issue", possibilities: ["Tile", "Grout", "Plumbing", "Waterproofing"] },
];

export interface FlConnectionEntry {
  label: string;
  href: string;
}

export const flCrossoverLinks: FlConnectionEntry[] = [
  { label: "Plumbing", href: "/plumbing-repair/" },
  { label: "Waterproofing", href: "/waterproofing/" },
  { label: "Tile & Grout Repair", href: "/tile-repair-grout/" },
  { label: "Bathroom & Kitchen Repair", href: "/bathroom-kitchen-repair/" },
];

export interface FlPhotoShot {
  tag: string;
  title: string;
  body: string;
  highlight: string;
}

export const flPhotoShots: FlPhotoShot[] = [
  { tag: "01", title: "Wide view", body: "A wider view of the affected floor area.", highlight: "wide" },
  { tag: "02", title: "Close-up of damage", body: "A nearer shot of the crack, chip or stain.", highlight: "close" },
  { tag: "03", title: "Floor/wall junction", body: "If relevant, where the floor meets the wall.", highlight: "junction" },
  { tag: "04", title: "Optional side angle", body: "Helpful if the damage is easier to see at an angle.", highlight: "angle" },
];

export const flLandlordFlow = [
  "Problem noticed",
  "Photo",
  "Area identified",
  "Condition assessed",
  "Repair scope",
  "Surface restored",
];

export const flScopeIncluded = [
  "Damaged flooring assessment",
  "Individual damaged areas",
  "Tile and surface repair where offered",
  "Minor flooring restoration",
  "Visible surface damage",
  "Practical property flooring repairs",
];

export const flScopeNotIncluded = [
  "New flooring installation",
  "Complete flooring replacement",
  "Major renovation",
  "Structural floor work",
];

export interface FlFaqEntry {
  q: string;
  a: string;
}

export const flFaqs: FlFaqEntry[] = [
  {
    q: "What types of flooring problems do you repair?",
    a: "We assess and repair practical issues such as cracked, chipped, uneven, loose, worn, stained or edge-damaged flooring in existing properties.",
  },
  {
    q: "Do you repair cracked or damaged tiles?",
    a: "Yes. Cracked or damaged tiles are one of the most common issues we assess.",
  },
  {
    q: "Can you repair a small damaged area without replacing the entire floor?",
    a: "In many cases, yes — a localized area can often be repaired without addressing the whole floor. This depends on the extent and condition of the damage.",
  },
  {
    q: "Can you help with uneven or loose-looking flooring?",
    a: "Yes. An uneven or loose section is worth having assessed to understand what's involved before it affects a larger area.",
  },
  {
    q: "Can I send photos before requesting a repair?",
    a: "Yes — a wide photo of the area plus a closer shot of the damage helps us prepare before a visit.",
  },
  {
    q: "What if the floor damage may be related to water?",
    a: "A stain or damage near a wet area may involve plumbing, waterproofing or moisture — we'll help point it toward the right service alongside the flooring assessment.",
  },
  {
    q: "Do you repair bathroom and kitchen flooring?",
    a: "Yes — these areas see frequent flooring issues, often alongside tile, grout or moisture-related concerns.",
  },
  {
    q: "Can landlords request flooring repairs for rental properties?",
    a: "Yes. We work with tenants, landlords and property managers on reported flooring issues in occupied and vacant units.",
  },
  {
    q: "Do you replace complete floors?",
    a: "No — this service focuses on practical repair of existing flooring. Full replacement, new installation or major renovation is a different scope.",
  },
  {
    q: "What information should I provide with a flooring repair request?",
    a: "Where the damage is, what you've noticed, how long it's been there, and a few clear photos if you can.",
  },
];

export const flInternalLinks: FlConnectionEntry[] = [
  { label: "Tile & Grout Repair", href: "/tile-repair-grout/" },
  { label: "Plumbing", href: "/plumbing-repair/" },
  { label: "Waterproofing", href: "/waterproofing/" },
  { label: "Bathroom & Kitchen Repair", href: "/bathroom-kitchen-repair/" },
  { label: "Painting & Wall Repair", href: "/painting-wall-repair/" },
  { label: "General Home Repairs", href: "/general-home-repairs/" },
  { label: "Property Maintenance", href: "/property-maintenance/" },
];
