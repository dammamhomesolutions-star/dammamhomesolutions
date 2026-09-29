// Shared data for the /water-leak-repair/ page.

export type WlSymptomId = "wall-patch" | "ceiling-stain" | "wet-floor" | "high-bill" | "running-sound" | "not-sure";

export interface WlSymptom {
  id: WlSymptomId;
  label: string;
  description: string;
}

export const wlSymptoms: WlSymptom[] = [
  { id: "wall-patch", label: "A damp patch on a wall", description: "A wall that stays damp or discoloured in one spot." },
  { id: "ceiling-stain", label: "A ceiling stain", description: "A mark on the ceiling that wasn't there before." },
  { id: "wet-floor", label: "A wet or damp floor", description: "A floor area that feels damp without an obvious cause." },
  { id: "high-bill", label: "A higher water bill than usual", description: "Usage that's gone up without a clear reason." },
  { id: "running-sound", label: "The sound of running water", description: "Water sounds when every fixture is off." },
  { id: "not-sure", label: "Not sure", description: "Send a photo or describe it and we'll help point you in the right direction." },
];

export interface WlSourceCandidate {
  id: string;
  label: string;
  note: string;
}

const CANDIDATES: Record<WlSymptomId, WlSourceCandidate[]> = {
  "wall-patch": [
    { id: "pipe-in-wall", label: "A pipe run inside the wall", note: "Pipes routed inside a wall can leak at a joint some distance from where the patch appears." },
    { id: "fixture-behind", label: "A fixture on the other side", note: "A bathroom or kitchen fixture on the opposite side of the wall is worth checking." },
  ],
  "ceiling-stain": [
    { id: "pipe-above", label: "Plumbing in the floor above", note: "A pipe or fixture in the room above can show up as a ceiling stain below." },
    { id: "roof-related", label: "A rooftop or roof-related source", note: "If the stain is on a top-floor ceiling, it may relate to the roof rather than plumbing." },
  ],
  "wet-floor": [
    { id: "under-slab", label: "A pipe under the floor slab", note: "Pipes routed under a slab can be harder to pinpoint and may need specialist detection." },
    { id: "appliance-line", label: "An appliance supply line", note: "A washing machine or water heater connection nearby is worth checking first." },
  ],
  "high-bill": [
    { id: "hidden-run", label: "A slow leak somewhere in the supply line", note: "A leak that never shows visibly can still raise usage over time." },
    { id: "outdoor-line", label: "An exterior or garden line", note: "An underground or exterior line can leak without any indoor sign at all." },
  ],
  "running-sound": [
    { id: "active-leak", label: "An active leak somewhere in the system", note: "This is often the clearest sign that something needs attention soon." },
  ],
  "not-sure": [
    { id: "general", label: "Worth a general assessment", note: "A photo or short description helps us point you toward the most likely area." },
  ],
};

export function getCandidatesFor(id: WlSymptomId): WlSourceCandidate[] {
  return CANDIDATES[id];
}

export interface WlZone {
  id: string;
  label: string;
  description: string;
}

export const wlZones: WlZone[] = [
  { id: "under-sink", label: "Under a sink", description: "Supply lines and drain connections under kitchen or bathroom sinks are a common starting point." },
  { id: "behind-wall", label: "Behind a wall", description: "Pipe runs behind tiled or finished walls can leak without any immediate visible sign." },
  { id: "under-slab", label: "Under the floor slab", description: "Pipes beneath the floor are the hardest to inspect visually and may need specialist detection." },
  { id: "water-heater", label: "Water heater connections", description: "Fittings and valves around a water heater are worth checking periodically." },
  { id: "exterior-line", label: "Exterior or garden line", description: "Outdoor supply lines can leak underground with no visible sign indoors." },
  { id: "overhead-tank", label: "Overhead tank or rooftop line", description: "Tanks and rooftop supply lines are a less obvious but real source." },
];

export const wlRepairStages = [
  { id: "locate", label: "Locate", description: "Start from what you've noticed and narrow down the likely area." },
  { id: "isolate", label: "Isolate", description: "Confirm the specific source before opening anything up." },
  { id: "repair", label: "Repair", description: "Address the leak at its source." },
  { id: "test", label: "Test", description: "Check that the fix holds under normal use." },
  { id: "restore", label: "Restore", description: "Make good any wall, floor or ceiling surface that was affected." },
];

export interface WlFaqEntry {
  q: string;
  a: string;
}

export const wlFaqs: WlFaqEntry[] = [
  {
    q: "How do I know if I have a hidden water leak?",
    a: "Common signs include a damp patch that doesn't dry, a rising water bill without a clear reason, or the sound of running water when everything is off. None of these confirm a leak on their own, but they're worth checking.",
  },
  {
    q: "Can I test for a hidden leak myself?",
    a: "Yes — turning off every tap and appliance, then checking whether your water meter is still moving, is a simple self-check many homeowners can do before requesting a visit.",
  },
  {
    q: "Why does the stain appear in a different place than the actual leak?",
    a: "Water can travel along pipes, joists or wall cavities before it becomes visible, so the source isn't always directly behind or above the mark you see.",
  },
  {
    q: "Do you find leaks under floors or behind walls?",
    a: "We assess likely areas based on what you've noticed and, where needed, use non-invasive methods before opening up any surface.",
  },
  {
    q: "Is this different from your plumbing repair service?",
    a: "This service focuses specifically on locating and repairing leaks — including ones that aren't immediately visible — while plumbing repair covers a broader range of everyday plumbing issues.",
  },
  {
    q: "What if the leak turns out to be from the roof, not plumbing?",
    a: "That happens sometimes, especially with top-floor ceiling stains. If that looks likely, we'll point you toward roof-related assessment instead.",
  },
  {
    q: "Will you need to break tiles or walls to find the leak?",
    a: "Not always. We try non-invasive checks first and will explain before any surface needs to be opened.",
  },
  {
    q: "Can I send a photo of the water bill instead of a leak I can see?",
    a: "Yes — an unexplained increase in usage is a valid reason to request an assessment, even without a visible leak.",
  },
  {
    q: "Do you guarantee you'll find the leak on the first visit?",
    a: "We can't guarantee an exact outcome in advance — some leaks are straightforward, others take more than one step to locate. We'll be clear about next steps as we go.",
  },
  {
    q: "What should I include when I contact you about a leak?",
    a: "What you've noticed, where, how long it's been happening, and a photo if you have one — that's usually enough to start.",
  },
];

export interface WlConnectionEntry {
  label: string;
  href: string;
}

export const wlInternalLinks: WlConnectionEntry[] = [
  { label: "Plumbing", href: "/plumbing-repair/" },
  { label: "Waterproofing", href: "/waterproofing/" },
  { label: "Ceiling & Gypsum Board Repair", href: "/ceiling-gypsum-board-repair/" },
  { label: "Painting & Wall Repair", href: "/painting-wall-repair/" },
  { label: "Roof & Rooftop Repair", href: "/roof-repair/" },
  { label: "Property Maintenance", href: "/property-maintenance/" },
];
