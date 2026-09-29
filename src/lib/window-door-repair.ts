// Shared data for the /window-door-glass-repair/ page.

export type WdProblemId =
  | "sticking"
  | "handle"
  | "hinge"
  | "glass"
  | "seal"
  | "track"
  | "hardware"
  | "not-sure";

export interface WdProblem {
  id: WdProblemId;
  label: string;
  note: string;
}

export const wdProblems: WdProblem[] = [
  {
    id: "sticking",
    label: "Sticking",
    note: "A panel that stops halfway or resists closing can point to alignment, hardware or the track — worth assessing rather than forcing.",
  },
  {
    id: "handle",
    label: "Handle",
    note: "A loose or misaligned handle can affect how smoothly the whole door or window operates.",
  },
  {
    id: "hinge",
    label: "Hinge",
    note: "A hinge that has shifted can pull the whole panel out of alignment over time.",
  },
  {
    id: "glass",
    label: "Glass",
    note: "Cracked or damaged glass should be assessed for type, extent and frame condition before anything is decided.",
  },
  {
    id: "seal",
    label: "Seal",
    note: "A gap around the frame can affect performance, though the actual cause still needs a closer look.",
  },
  {
    id: "track",
    label: "Track",
    note: "A sliding panel that's difficult to move often involves the track, rollers, or debris inside the channel.",
  },
  {
    id: "hardware",
    label: "Lock / Hardware",
    note: "Locks, latches and fittings can wear or loosen independently of the frame around them.",
  },
  {
    id: "not-sure",
    label: "Not sure",
    note: "That's fine — send us a photo and we'll help point it in the right direction.",
  },
];

export interface WdLayer {
  id: string;
  label: string;
  description: string;
}

export const wdLayers: WdLayer[] = [
  { id: "glass", label: "Glass", description: "The pane itself." },
  { id: "frame", label: "Frame", description: "The structure holding the glass." },
  { id: "seal", label: "Seal", description: "The weatherstrip between frame and wall." },
  { id: "hardware", label: "Hardware", description: "Handle, lock and latch mechanisms." },
  { id: "track", label: "Track / Hinge", description: "What lets the panel move or swing." },
  { id: "wall", label: "Wall opening", description: "The opening the assembly sits within." },
];

export interface WdAnatomyPart {
  id: string;
  label: string;
  description: string;
}

export const wdAnatomyParts: WdAnatomyPart[] = [
  { id: "frame", label: "Frame", description: "The surrounding structure that holds everything in place." },
  { id: "glass", label: "Glass", description: "The pane, set into the frame with a bead or gasket." },
  { id: "handle", label: "Handle", description: "The mechanism used to open, close or lock the panel." },
  { id: "hinge", label: "Hinge", description: "Allows a door or casement window to swing on an axis." },
  { id: "seal", label: "Seal", description: "A weatherstrip that sits between frame and wall — small, but it can affect how a window or door performs." },
  { id: "track", label: "Track", description: "The channel a sliding panel moves along." },
  { id: "hardware", label: "Lock / Hardware", description: "Latches, locks and fittings that secure the panel." },
];

export interface WdDecisionStep {
  label: string;
}

export const wdDecisionSteps: WdDecisionStep[] = [
  { label: "Visible problem" },
  { label: "What component is affected?" },
  { label: "Condition" },
  { label: "Extent of damage" },
  { label: "Repair, component replacement, or further assessment" },
];

export interface WdPhotoShot {
  tag: string;
  title: string;
  body: string;
  highlight: string;
}

export const wdPhotoShots: WdPhotoShot[] = [
  { tag: "01", title: "Full door or window", body: "A wider view of the whole assembly.", highlight: "frame" },
  { tag: "02", title: "Close-up of damage", body: "A nearer shot of the crack, gap or worn area.", highlight: "glass" },
  { tag: "03", title: "Handle, hinge, frame or track", body: "Whichever hardware seems to be affected.", highlight: "hardware" },
  { tag: "04", title: "Optional surrounding area", body: "Helpful if the wall or frame edge is also involved.", highlight: "wall" },
];

export interface WdPropertyScene {
  id: string;
  label: string;
  concerns: string[];
}

export const wdPropertyScenes: WdPropertyScene[] = [
  { id: "villa", label: "Villa", concerns: ["Exterior doors", "Sliding windows", "Garden-facing glass panels"] },
  { id: "apartment", label: "Apartment", concerns: ["Balcony sliding doors", "Internal doors", "Window hardware"] },
  { id: "rental", label: "Rental", concerns: ["Tenant-reported hardware issues", "Worn seals", "Handle and lock wear"] },
  { id: "office", label: "Office / Property", concerns: ["Entry doors", "Glass partitions", "Frequent-use hardware"] },
];

export const wdLandlordFlow = ["Tenant reports issue", "Photos / description", "Assessment", "Repair", "Property ready again"];

export const wdScopeIncluded = [
  "Sticking or misaligned doors",
  "Window and door hardware",
  "Damaged glass assessment and repair",
  "Sliding window and track issues",
  "Worn or damaged seals",
  "Hinge and handle repair",
  "Lock and latch repair",
];

export const wdScopeNotIncluded = [
  "Lock-opening or forced-entry services",
  "Structural door or window replacement work outside standard repair",
];

export interface WdFaqEntry {
  q: string;
  a: string;
}

export const wdFaqs: WdFaqEntry[] = [
  {
    q: "Do you repair doors that are difficult to open or close?",
    a: "Yes. Sticking or hard-to-close doors are one of the most common issues we assess — often related to alignment, hinges or hardware.",
  },
  {
    q: "Do you repair window hardware and handles?",
    a: "Yes. Loose, stiff or misaligned handles and related hardware are a core part of this service.",
  },
  {
    q: "Can you repair damaged glass?",
    a: "We can assess damaged glass and advise on repair or replacement — this depends on the type of glass, the extent of the damage and the frame condition.",
  },
  {
    q: "Do you repair sliding window problems?",
    a: "Yes. Sliding windows that catch, stick or feel difficult to move usually involve the track, rollers or alignment.",
  },
  {
    q: "Can you replace damaged door or window components?",
    a: "In many cases, yes — a specific component such as a handle, hinge or seal can often be replaced without replacing the whole unit.",
  },
  {
    q: "What if I'm not sure whether the problem is the frame, glass or hardware?",
    a: "That's common. Send a few photos and a short description, and we'll help narrow down what's likely involved before a visit.",
  },
  {
    q: "Can I send photos before requesting a repair?",
    a: "Yes — a wider photo of the door or window plus a closer shot of the issue helps us prepare before we visit.",
  },
  {
    q: "Do you repair doors and windows in rental properties?",
    a: "Yes. We work with tenants, landlords and property managers on reported issues in occupied and vacant units alike.",
  },
  {
    q: "What should I photograph when reporting a problem?",
    a: "A full view of the door or window, a close-up of the damage or gap, and the handle, hinge or track area if relevant.",
  },
  {
    q: "Do you provide lock-opening or bypass services?",
    a: "No. We don't provide lock-bypass or forced-entry services. If you're locked out, please contact a locksmith service for that specific need — we're glad to help with the repair afterward.",
  },
];

export interface WdConnectionEntry {
  label: string;
  href: string;
}

export const wdInternalLinks: WdConnectionEntry[] = [
  { label: "Carpentry, Doors & Locks", href: "/carpentry-doors-locks/" },
  { label: "General Home Repairs", href: "/general-home-repairs/" },
  { label: "Property Maintenance", href: "/property-maintenance/" },
  { label: "Painting & Wall Repair", href: "/painting-wall-repair/" },
  { label: "Emergency Home Repairs", href: "/emergency-home-repairs/" },
  { label: "Bathroom & Kitchen Repair", href: "/bathroom-kitchen-repair/" },
];
