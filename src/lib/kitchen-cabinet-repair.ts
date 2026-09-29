// Shared data for the /kitchen-cabinet-repair/ page.

export type KcProblemId =
  | "door"
  | "hinge"
  | "handle"
  | "drawer"
  | "runner"
  | "panel"
  | "edge"
  | "not-sure";

export interface KcProblem {
  id: KcProblemId;
  label: string;
  visualNote: string;
  note: string;
}

export const kcProblems: KcProblem[] = [
  {
    id: "door",
    label: "Door",
    visualNote: "Door won't close properly.",
    note: "A door that won't sit flush can involve the hinge, the frame, or the door itself — worth a closer look.",
  },
  {
    id: "hinge",
    label: "Hinge",
    visualNote: "Door sits unevenly.",
    note: "A worn or loosened hinge can pull the whole door out of even alignment over time.",
  },
  {
    id: "handle",
    label: "Handle",
    visualNote: "Handle is loose or damaged.",
    note: "A loose handle is usually straightforward, though the fixing point can wear the surrounding panel too.",
  },
  {
    id: "drawer",
    label: "Drawer",
    visualNote: "Drawer sticks.",
    note: "A drawer that sticks partway often points to the runner, the alignment, or debris inside the channel.",
  },
  {
    id: "runner",
    label: "Runner",
    visualNote: "Drawer movement is uneven.",
    note: "Runners that have shifted or worn unevenly can make a drawer feel uneven even when the drawer itself is fine.",
  },
  {
    id: "panel",
    label: "Panel",
    visualNote: "Cabinet surface is damaged.",
    note: "Surface damage on a panel can range from cosmetic to something that affects the panel's finish long-term.",
  },
  {
    id: "edge",
    label: "Edge",
    visualNote: "Edge is damaged.",
    note: "A chipped or lifting edge is common on well-used cabinets and is usually a contained repair.",
  },
  {
    id: "not-sure",
    label: "Not sure",
    visualNote: "",
    note: "That's fine — send us a photo and we'll help point it in the right direction.",
  },
];

export interface KcLayer {
  id: string;
  label: string;
  description: string;
}

export const kcLayers: KcLayer[] = [
  { id: "door", label: "Door", description: "The visible front panel." },
  { id: "hinge", label: "Hinge", description: "Lets the door swing open and closed." },
  { id: "frame", label: "Frame", description: "The structure the door and hardware attach to." },
  { id: "shelf", label: "Shelf", description: "Internal storage surface." },
  { id: "drawer", label: "Drawer", description: "The sliding storage box." },
  { id: "runner", label: "Runner", description: "The track the drawer slides on." },
  { id: "handle", label: "Handle", description: "Used to open the door or drawer." },
  { id: "body", label: "Cabinet body", description: "The surrounding structure everything attaches to." },
];

export interface KcAnatomyPart {
  id: string;
  label: string;
  description: string;
}

export const kcAnatomyParts: KcAnatomyPart[] = [
  { id: "body", label: "Cabinet body", description: "The surrounding structure that holds everything in place." },
  { id: "door", label: "Door", description: "The front panel that opens and closes." },
  { id: "hinge", label: "Hinge", description: "The mechanism that lets the door swing." },
  { id: "handle", label: "Handle", description: "Used to open the door or drawer." },
  { id: "drawer", label: "Drawer", description: "The sliding storage box." },
  { id: "runner", label: "Runner", description: "The track a drawer moves along." },
  { id: "shelf", label: "Shelf", description: "An internal surface for storage." },
  { id: "edge", label: "Edge", description: "The exposed border of a door or panel — prone to chipping over time." },
  { id: "panel", label: "Panel", description: "A flat surface section of the cabinet." },
];

export type KcDamageId = "edge" | "surface" | "door" | "handle" | "hinge";

export interface KcDamageType {
  id: KcDamageId;
  label: string;
}

export const kcDamageTypes: KcDamageType[] = [
  { id: "edge", label: "Edge" },
  { id: "surface", label: "Surface" },
  { id: "door", label: "Door" },
  { id: "handle", label: "Handle" },
  { id: "hinge", label: "Hinge" },
];

export type KcMaterialId = "matte" | "wood" | "gloss" | "laminate";

export interface KcMaterial {
  id: KcMaterialId;
  label: string;
}

export const kcMaterials: KcMaterial[] = [
  { id: "matte", label: "Matte" },
  { id: "wood", label: "Wood" },
  { id: "gloss", label: "Gloss" },
  { id: "laminate", label: "Laminate" },
];

export const kcDecisionSteps = [
  "What is damaged?",
  "Component",
  "Condition",
  "Can the component be repaired?",
  "Can the damaged part be replaced?",
  "Does the surrounding cabinet also need attention?",
];

export interface KcPhotoShot {
  tag: string;
  title: string;
  body: string;
  highlight: string;
}

export const kcPhotoShots: KcPhotoShot[] = [
  { tag: "01", title: "Whole cabinet", body: "A wider view of the affected cabinet.", highlight: "body" },
  { tag: "02", title: "Close-up", body: "A nearer shot of the specific issue.", highlight: "door" },
  { tag: "03", title: "Hinge / hardware", body: "The hinge, handle or fitting involved.", highlight: "hinge" },
  { tag: "04", title: "Drawer", body: "If a drawer is affected, how it sits or moves.", highlight: "drawer" },
  { tag: "05", title: "Damage", body: "A clear shot of any visible damage.", highlight: "edge" },
];

export interface KcCrossover {
  id: string;
  label: string;
  routesTo: string;
  href: string;
}

export const kcCrossovers: KcCrossover[] = [
  { id: "water", label: "Cabinet + water", routesTo: "Plumbing", href: "/plumbing-repair/" },
  { id: "wall", label: "Cabinet + wall damage", routesTo: "Painting / Wall Repair", href: "/painting-wall-repair/" },
  { id: "electrical", label: "Cabinet + electrical fixture", routesTo: "Electrical Repair", href: "/electrical-repair/" },
  { id: "bathroom", label: "Cabinet + bathroom issue", routesTo: "Bathroom & Kitchen Repair", href: "/bathroom-kitchen-repair/" },
  { id: "general", label: "Cabinet + general household problem", routesTo: "General Home Repairs", href: "/general-home-repairs/" },
];

export const kcLandlordFlow = ["Issue reported", "Photo", "Component identified", "Repair", "Kitchen back in use"];

export const kcScopeIncluded = [
  "Cabinet door repair",
  "Hinge issues",
  "Handles",
  "Drawer issues",
  "Cabinet panels",
  "Minor joinery repairs",
  "Alignment-related repair",
  "Practical kitchen cabinet maintenance",
];

export const kcScopeNotIncluded = [
  "Full kitchen remodeling",
  "New kitchen construction",
  "Major custom cabinetry",
];

export interface KcFaqEntry {
  q: string;
  a: string;
}

export const kcFaqs: KcFaqEntry[] = [
  {
    q: "Do you repair kitchen cabinet doors?",
    a: "Yes. Doors that won't close properly, sit unevenly, or have visible damage are a core part of this service.",
  },
  {
    q: "Can you repair loose or damaged cabinet hinges?",
    a: "Yes. Hinge issues are one of the most common causes of a door that looks or feels misaligned.",
  },
  {
    q: "Do you repair sticking drawers?",
    a: "Yes. A drawer that sticks or stops partway is usually related to the runner, alignment, or debris in the channel.",
  },
  {
    q: "Can cabinet handles be repaired or replaced?",
    a: "In most cases, yes — loose or damaged handles are typically a straightforward fix.",
  },
  {
    q: "Do you repair damaged cabinet panels or edges?",
    a: "Yes. The approach depends on the extent of the damage and the material involved.",
  },
  {
    q: "Can I send photos before requesting a repair?",
    a: "Yes — a wider photo of the cabinet plus a closer shot of the issue helps us prepare before a visit.",
  },
  {
    q: "What if I don't know whether the hinge, drawer or cabinet is causing the problem?",
    a: "That's common. Send a few photos and describe what you're noticing, and we'll help narrow it down.",
  },
  {
    q: "Can you handle several cabinet repairs in one kitchen?",
    a: "Yes. It's common for more than one cabinet or drawer to need attention at the same time.",
  },
  {
    q: "Do you work on rental-property kitchens?",
    a: "Yes. We work with tenants, landlords and property managers on reported kitchen cabinet issues.",
  },
  {
    q: "Do you provide complete kitchen remodeling?",
    a: "No. This service covers practical cabinet and joinery repair — full kitchen remodeling, new kitchen construction, and major custom cabinetry are a different scope.",
  },
];

export interface KcConnectionEntry {
  label: string;
  href: string;
}

export const kcInternalLinks: KcConnectionEntry[] = [
  { label: "Carpentry, Doors & Locks", href: "/carpentry-doors-locks/" },
  { label: "Bathroom & Kitchen Repair", href: "/bathroom-kitchen-repair/" },
  { label: "General Home Repairs", href: "/general-home-repairs/" },
  { label: "Plumbing", href: "/plumbing-repair/" },
  { label: "Painting & Wall Repair", href: "/painting-wall-repair/" },
  { label: "Property Maintenance", href: "/property-maintenance/" },
];
