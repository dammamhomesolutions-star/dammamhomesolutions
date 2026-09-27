// Shared data for the /tile-repair-grout/ page.

export interface ServiceLink {
  label: string;
  href: string;
}

export type DamageConditionId =
  | "cracked"
  | "loose"
  | "chipped"
  | "damaged-grout"
  | "missing-grout"
  | "stained-grout"
  | "hollow"
  | "uneven"
  | "water"
  | "not-sure";

export interface DamageCondition {
  id: DamageConditionId;
  label: string;
  note: string;
}

export const damageConditions: DamageCondition[] = [
  {
    id: "cracked",
    label: "Cracked tile",
    note: "A damaged tile may need repair or replacement depending on its condition and the surrounding surface.",
  },
  {
    id: "loose",
    label: "Loose tile",
    note: "A loose tile can point to an issue with the layer underneath — worth assessing before it fully detaches.",
  },
  {
    id: "chipped",
    label: "Broken / chipped tile",
    note: "Small chips are often cosmetic, but the extent depends on where the tile sits and how it's used.",
  },
  {
    id: "damaged-grout",
    label: "Damaged grout",
    note: "Grout naturally wears with time and use — the surrounding tiles are usually still sound.",
  },
  {
    id: "missing-grout",
    label: "Missing grout",
    note: "Gaps in the grout line can be a maintenance matter, though the joint is worth a closer look first.",
  },
  {
    id: "stained-grout",
    label: "Dark / stained grout",
    note: "Discolouration doesn't always mean failure — it can be cosmetic or related to what's happened on the surface.",
  },
  {
    id: "hollow",
    label: "Hollow-sounding tile",
    note: "A hollow sound can suggest the tile isn't fully bonded underneath — usually worth assessing in person.",
  },
  {
    id: "uneven",
    label: "Uneven tile",
    note: "An uneven tile can be a single-tile issue or part of a wider surface condition.",
  },
  {
    id: "water",
    label: "Water-related damage",
    note: "Water-related surface damage can relate to plumbing, waterproofing, or the tile itself — worth understanding the source.",
  },
  {
    id: "not-sure",
    label: "Not sure",
    note: "That's fine — a photo of the area usually tells us more than trying to describe it.",
  },
];

export interface TileLayer {
  id: string;
  label: string;
  description: string;
}

export const tileLayers: TileLayer[] = [
  { id: "tile", label: "Tile", description: "The visible surface material." },
  { id: "grout", label: "Joint / Grout", description: "The material filling the gap between tiles." },
  { id: "adhesive", label: "Underlying layer", description: "The adhesive layer bonding the tile down." },
  { id: "base", label: "Base surface", description: "The floor or wall surface underneath." },
];

export interface DamageSample {
  id: string;
  label: string;
  mayNotice: string[];
  needsAssessing: string;
}

export const damageSamples: DamageSample[] = [
  {
    id: "crack",
    label: "Crack",
    mayNotice: ["A visible hairline or wider crack across the tile"],
    needsAssessing: "Whether the crack is surface-level or affects the tile's structure, and whether it's isolated or part of a wider pattern.",
  },
  {
    id: "chip",
    label: "Chipped edge",
    mayNotice: ["A small area of missing material at a corner or edge"],
    needsAssessing: "The depth of the chip and whether it's purely cosmetic or affects the tile's edge seal.",
  },
  {
    id: "loose",
    label: "Loose tile",
    mayNotice: ["Slight movement or a hollow feel when the tile is pressed"],
    needsAssessing: "The condition of the layer underneath and how many surrounding tiles may be affected.",
  },
  {
    id: "grout",
    label: "Grout deterioration",
    mayNotice: ["Crumbling, gaps, or a visibly worn grout line"],
    needsAssessing: "Whether it's general wear or related to moisture or movement in the surface.",
  },
];

export interface RestorationState {
  tag: string;
  label: string;
  description: string;
}

export const restorationStates: RestorationState[] = [
  { tag: "01", label: "Worn", description: "Everyday wear on the surface and grout lines." },
  { tag: "02", label: "Damaged", description: "A crack, chip or deteriorated joint becomes visible." },
  { tag: "03", label: "Assessment", description: "The tile, grout and surrounding surface are reviewed." },
  { tag: "04", label: "Repair", description: "Work proceeds on the affected tile, joint or area." },
  { tag: "05", label: "Finished", description: "A cleaned, restored surface — replacement shown only where relevant." },
];

export const tileExamples = ["A crack", "A chip", "Breakage", "A loose tile", "A damaged tile"];
export const groutExamples = ["Deterioration", "Missing sections", "Discolouration", "Damaged joints"];

export interface SurfaceContext {
  id: string;
  label: string;
  concerns: string[];
}

export const surfaceContexts: SurfaceContext[] = [
  { id: "wall", label: "Wall", concerns: ["Cracked tile", "Chipped tile", "Grout issue"] },
  { id: "floor", label: "Floor", concerns: ["Cracked tile", "Uneven tile", "Damaged grout"] },
  { id: "wet-area", label: "Shower / Wet Area", concerns: ["Tile condition", "Grout condition", "Moisture-related context"] },
  { id: "kitchen", label: "Kitchen", concerns: ["Chipped tile", "Grout wear near counters and sink", "Everyday surface wear"] },
];

export interface ConnectionMapEntry {
  combo: string;
  routes: ServiceLink[];
}

export const connectionMapEntries: ConnectionMapEntry[] = [
  {
    combo: "Tile damage + water",
    routes: [
      { label: "Plumbing", href: "/plumbing-repair/" },
      { label: "Waterproofing", href: "/waterproofing/" },
    ],
  },
  {
    combo: "Tile damage + wall",
    routes: [{ label: "Painting & Wall Repair", href: "/painting-wall-repair/" }],
  },
  {
    combo: "Tile damage + bathroom",
    routes: [{ label: "Bathroom & Kitchen Repair", href: "/bathroom-kitchen-repair/" }],
  },
  {
    combo: "Tile damage + general household issue",
    routes: [{ label: "General Home Repairs", href: "/general-home-repairs/" }],
  },
];

export interface CommonPlace {
  id: string;
  label: string;
  concerns: string[];
}

export const commonPlaces: CommonPlace[] = [
  { id: "bathroom", label: "Bathroom", concerns: ["Grout wear near water", "Chipped floor tile", "Loose wall tile"] },
  { id: "kitchen", label: "Kitchen", concerns: ["Chipped tile near counters", "Grout staining", "Everyday wear"] },
  { id: "entryway", label: "Entryway", concerns: ["Cracked tile from foot traffic", "Uneven tile", "Edge wear"] },
  { id: "utility", label: "Utility Area", concerns: ["Moisture-related wear", "Damaged grout", "Loose tile"] },
  { id: "living", label: "Living Areas", concerns: ["Surface wear", "Isolated cracks", "Grout discolouration"] },
  { id: "other", label: "Other Tiled Areas", concerns: ["Varies by surface and use"] },
];

export const landlordExamples = [
  "A broken tile",
  "Damaged grout",
  "A chipped surface",
  "A loose tile",
  "Visible deterioration",
];

export interface TrFaqEntry {
  q: string;
  a: string;
}

export const trFaqs: TrFaqEntry[] = [
  {
    q: "Do you repair cracked tiles?",
    a: "Yes. The approach depends on the crack, the tile's condition, and the surrounding surface — sometimes a repair is enough, sometimes the tile needs replacing.",
  },
  {
    q: "Can you repair damaged grout?",
    a: "Yes, for deteriorated, missing or damaged grout lines. The right approach depends on how much of the joint is affected.",
  },
  {
    q: "Can loose tiles be repaired?",
    a: "Often, yes. A loose tile usually needs the layer underneath assessed first to understand why it's come loose.",
  },
  {
    q: "Do you replace individual damaged tiles?",
    a: "Yes, where that's the appropriate fix. We can't guarantee a perfect match to existing tiles, especially older or discontinued ranges.",
  },
  {
    q: "Can I send photos before requesting a repair?",
    a: "Yes — a full-area photo, a close-up of the damage, and a shot of the surrounding surface all help before we discuss the repair.",
  },
  {
    q: "Can tile damage be related to a water problem?",
    a: "Sometimes. Water-related surface damage can relate to plumbing or waterproofing rather than the tile itself, which is why the source matters.",
  },
  {
    q: "Do you repair bathroom and kitchen tiles?",
    a: "Yes, tile and grout repair is common in bathrooms and kitchens given how much water use those rooms see.",
  },
  {
    q: "Can you help with tile damage in rental properties?",
    a: "Yes — landlords and property managers can send photos and details for tile or grout issues in a rental property.",
  },
  {
    q: "Do you repair walls or surfaces around damaged tiles?",
    a: "Where relevant, yes. If the surrounding surface needs attention too, that's assessed alongside the tile itself.",
  },
  {
    q: "What information should I provide with a tile repair request?",
    a: "Where the tile or grout is located, what you've noticed, how long it's been like that, and a few clear photos if you can.",
  },
];
