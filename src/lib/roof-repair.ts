// Shared data for the /roof-repair/ page.

export interface RfLayer {
  id: string;
  label: string;
  description: string;
}

export const rfLayers: RfLayer[] = [
  { id: "surface", label: "Surface", description: "The visible, weather-facing top layer." },
  { id: "protective", label: "Protective layer", description: "A layer that helps protect the surface beneath it." },
  { id: "waterproofing", label: "Waterproofing system", description: "The layer intended to resist water penetration." },
  { id: "structural", label: "Structural base", description: "The structural layer the roof system sits on." },
];

export interface RfZone {
  id: string;
  label: string;
  description: string;
}

export const rfZones: RfZone[] = [
  { id: "surface", label: "Central surface", description: "Changes in the roof surface may require inspection to understand their cause." },
  { id: "drainage", label: "Drainage area", description: "Water accumulation or drainage concerns can be worth investigating." },
  { id: "edge", label: "Edge / parapet", description: "Roof edges and junctions can be areas where moisture-related issues become visible." },
  { id: "joints", label: "Joints", description: "Changes around joints or connections may need closer assessment." },
  { id: "structures", label: "Rooftop structures", description: "Fixtures and structures on the rooftop can be associated with localized wear." },
];

export type RfDamageId = "surface-change" | "crack" | "water" | "drainage" | "moisture" | "not-sure";

export interface RfDamageState {
  id: RfDamageId;
  label: string;
  note: string;
}

export const rfDamageStates: RfDamageState[] = [
  { id: "surface-change", label: "Surface change", note: "A subtle surface irregularity — worth a closer look to understand what's involved." },
  { id: "crack", label: "Crack / joint concern", note: "A fine line along the surface or a joint can be associated with a range of causes." },
  { id: "water", label: "Water accumulation", note: "Standing water in one area may be related to slope, drainage, or debris." },
  { id: "drainage", label: "Drainage concern", note: "Flow toward a drainage point that seems slower than expected is worth investigating." },
  { id: "moisture", label: "Moisture sign", note: "A visual sign on the building interior can be associated with the roof, but not always." },
  { id: "not-sure", label: "Not sure", note: "That's fine — send a few photos and we'll help point it in the right direction." },
];

export interface RfRoofType {
  id: string;
  label: string;
}

export const rfRoofTypes: RfRoofType[] = [
  { id: "flat", label: "Flat Roof" },
  { id: "villa", label: "Villa Rooftop" },
  { id: "terrace", label: "Terrace Roof" },
  { id: "utility", label: "Utility Rooftop" },
];

export type RfSymptomId = "water" | "stain" | "crack" | "collects" | "damaged" | "not-sure";

export interface RfSymptom {
  id: RfSymptomId;
  label: string;
  description: string;
}

export const rfSymptoms: RfSymptom[] = [
  { id: "water", label: "I see water", description: "Visible water on or around the rooftop." },
  { id: "stain", label: "I see a stain", description: "A mark on a ceiling or wall that wasn't there before." },
  { id: "crack", label: "I see a crack", description: "A fine line along the roof surface or a joint." },
  { id: "collects", label: "Water collects", description: "Water seems to pool rather than drain away." },
  { id: "damaged", label: "Surface looks damaged", description: "The roof surface appears different than usual." },
  { id: "not-sure", label: "Not sure", description: "Send a photo and we'll help point it in the right direction." },
];

export const rfRepairStages = [
  { id: "observe", label: "Observe", description: "The affected area is identified." },
  { id: "assess", label: "Assess", description: "The roof is looked at more closely, including relevant layers." },
  { id: "repair", label: "Repair", description: "The affected area is addressed." },
  { id: "test", label: "Test", description: "Water flow and drainage are checked." },
  { id: "restore", label: "Restore", description: "The roof is returned to everyday condition." },
];

export interface RfFaqEntry {
  q: string;
  a: string;
}

export const rfFaqs: RfFaqEntry[] = [
  {
    q: "Do you repair roof surface damage?",
    a: "Yes. Surface changes, cracks and visible wear on a rooftop are a core part of this service.",
  },
  {
    q: "Can you assess water accumulation on a rooftop?",
    a: "Yes. Standing water can be related to slope, drainage or debris, and is worth having assessed in person.",
  },
  {
    q: "Do you repair roof drainage concerns?",
    a: "Yes — drainage points and the paths water follows to reach them are part of what we look at.",
  },
  {
    q: "Does a ceiling stain always mean the roof is leaking?",
    a: "Not necessarily. Moisture can have multiple possible sources, and the roof is one of several areas worth checking.",
  },
  {
    q: "Can you help with roof edge or parapet concerns?",
    a: "Yes. Edges and junctions are common areas where moisture-related issues can become visible.",
  },
  {
    q: "Do you handle roof waterproofing-related issues?",
    a: "We can assess waterproofing-related concerns as part of a roof inspection — for dedicated waterproofing work, this may also connect with our waterproofing service.",
  },
  {
    q: "Can I send photos before requesting a roof assessment?",
    a: "Yes — a wider photo of the roof area plus a closer shot of what you've noticed helps us prepare before a visit.",
  },
  {
    q: "Is it safe for me to inspect the roof myself?",
    a: "We'd recommend against climbing onto the roof or inspecting unsafe areas yourself. A professional assessment is the safer route.",
  },
  {
    q: "Do you repair every type of roof?",
    a: "We work with a range of residential rooftop types common in Dammam properties — send photos and we'll advise on next steps.",
  },
  {
    q: "What information should I include with a roof repair request?",
    a: "What you've noticed, where it is, when it started, and a few clear photos if you can.",
  },
];

export interface RfConnectionEntry {
  label: string;
  href: string;
}

export const rfInternalLinks: RfConnectionEntry[] = [
  { label: "Waterproofing", href: "/waterproofing/" },
  { label: "Plumbing", href: "/plumbing-repair/" },
  { label: "Ceiling & Gypsum Board Repair", href: "/ceiling-gypsum-board-repair/" },
  { label: "Painting & Wall Repair", href: "/painting-wall-repair/" },
  { label: "Property Maintenance", href: "/property-maintenance/" },
  { label: "Emergency Home Repairs", href: "/emergency-home-repairs/" },
];
