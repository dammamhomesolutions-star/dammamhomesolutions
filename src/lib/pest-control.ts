// Content for the Pest Control page. The business confirmed treatment of
// cockroaches, ants, bed bugs, termites, mosquitoes, flies and rodents, and
// recurring service plans for businesses. No product names, dosages or
// safety guarantees are given anywhere on the page.

export type PcIconName =
  | "cockroach"
  | "ant"
  | "termite"
  | "bedbug"
  | "mosquito"
  | "fly"
  | "rodent"
  | "house"
  | "search"
  | "shield"
  | "droplet"
  | "food"
  | "trash"
  | "crack"
  | "spray"
  | "checklist"
  | "phone"
  | "pin"
  | "alert"
  | "check"
  | "arrow"
  | "building"
  | "leaf"
  | "calendar";

/* ------------------------------------------------------------------ */
/* Pest identifier                                                     */
/* ------------------------------------------------------------------ */

export type PcPestKey = "cockroach" | "ant" | "termite" | "bedbug" | "mosquito" | "fly" | "rodent" | "unsure";

export interface PcPest {
  key: PcPestKey;
  label: string;
  icon: PcIconName;
  signs: string[];
  where: string;
  difficult: string;
  inspect: string;
  approach: string;
  prevention: string;
}

export const pcPests: PcPest[] = [
  {
    key: "cockroach",
    label: "Cockroaches",
    icon: "cockroach",
    signs: ["Live cockroaches, often at night", "Small dark droppings", "Egg cases", "A musty odor in heavier activity"],
    where: "Kitchens, bathrooms, under sinks, behind appliances, drains and plumbing gaps.",
    difficult: "They hide in tight gaps and move between rooms and units through pipe and cable openings. The ones you see are rarely all of them.",
    inspect: "Harborage near food and moisture, plumbing penetrations, drains, appliance voids and gaps between units.",
    approach: "Targeted treatment of hiding and activity areas, chosen after inspection, with follow-up where activity continues.",
    prevention: "Fix leaks, seal gaps around pipes, keep food sealed and waste covered.",
  },
  {
    key: "ant",
    label: "Ants",
    icon: "ant",
    signs: ["Trails of ants along edges", "Ants around food or sweet spills", "Small piles of debris near cracks", "Ants coming from sockets or skirting"],
    where: "Kitchens, around windows and doors, bathrooms, gardens and paving edges.",
    difficult: "The trail you see is only the foraging route. The colony and entry point may be inside a wall, under paving or outdoors.",
    inspect: "Trail direction, entry gaps, moisture, outdoor nesting sites and vegetation touching the building.",
    approach: "Treatment aimed at the colony and entry route rather than only the visible ants.",
    prevention: "Wipe up food residue, seal entry gaps, cut back plants touching walls.",
  },
  {
    key: "termite",
    label: "Termites",
    icon: "termite",
    signs: ["Damaged or hollow-sounding wood", "Mud tubes on walls or foundations", "Discarded wings near windows", "Swarming insects", "Wood that crumbles easily"],
    where: "Door frames, skirting, cabinets, wooden flooring, and wood in contact with soil or damp walls.",
    difficult: "Termite damage can occur without live termites being visible. Activity is often inside wood or behind finishes.",
    inspect: "Wooden elements, moisture sources, soil contact points, mud tubes and areas of earlier damage.",
    approach: "Inspection to confirm activity, then treatment suited to the property and the extent of activity.",
    prevention: "Keep wood dry and off the soil, fix leaks, and have suspicious damage checked early.",
  },
  {
    key: "bedbug",
    label: "Bed bugs",
    icon: "bedbug",
    signs: ["Live bed bugs in seams and joints", "Small dark spotting on mattresses or sheets", "Shed skins", "Tiny pale eggs", "Repeated bites alongside other evidence"],
    where: "Mattress seams, bed frames, headboards, upholstered furniture, and cracks near sleeping areas.",
    difficult: "They hide in very small spaces and can spread to nearby rooms and furniture. Bites alone are not enough to confirm them.",
    inspect: "Mattresses, frames, sofas, nearby cracks and neighbouring rooms.",
    approach: "Treatment of confirmed areas based on the inspection, usually with a follow-up visit.",
    prevention: "Check second-hand furniture and luggage after travel; act early on any evidence.",
  },
  {
    key: "mosquito",
    label: "Mosquitoes",
    icon: "mosquito",
    signs: ["Mosquitoes indoors in the evening", "Bites after time outdoors", "Larvae in standing water"],
    where: "Gardens, terraces, standing water, AC drip trays, plant saucers and poorly drained areas.",
    difficult: "Treating adult mosquitoes without dealing with breeding water lets new ones keep emerging.",
    inspect: "Standing water, containers, drainage and shaded resting areas outdoors.",
    approach: "Removing breeding sites, treatment where appropriate, and ongoing prevention.",
    prevention: "Empty containers weekly, fix drainage, cover water storage.",
  },
  {
    key: "fly",
    label: "Flies",
    icon: "fly",
    signs: ["Flies around bins or food areas", "Small flies near drains", "Flies gathering at windows"],
    where: "Kitchens, bin areas, drains, food preparation areas and entrances.",
    difficult: "Flies breed in waste, drains and organic residue. Without removing breeding material, treatment only removes adults.",
    inspect: "Waste storage, drains, food areas, entry points and organic build-up.",
    approach: "Find and remove breeding sources, then treatment and entry control where appropriate.",
    prevention: "Lidded bins, regular waste removal, clean drains, screens on openings.",
  },
  {
    key: "rodent",
    label: "Rodents",
    icon: "rodent",
    signs: ["Droppings", "Gnaw marks on food packaging, wood or cables", "Scratching sounds at night", "Nesting material", "Greasy marks along walls"],
    where: "Storage areas, kitchens, roof spaces, garages, behind appliances and around waste areas.",
    difficult: "They can enter through surprisingly small gaps and move along hidden routes. Food and shelter keep them returning.",
    inspect: "Entry points, food sources, harborage, runways and signs of nesting.",
    approach: "Inspection, control measures placed by our technicians, monitoring, and closing entry points.",
    prevention: "Store food in sealed containers, keep storage tidy, close gaps around pipes and doors.",
  },
  {
    key: "unsure",
    label: "Not sure",
    icon: "search",
    signs: ["Insects you can't identify", "Droppings or damage without seeing the pest", "Bites without an obvious cause"],
    where: "Anywhere — note where and when you notice it.",
    difficult: "Different pests need different approaches, so identifying the pest comes first.",
    inspect: "Whatever evidence you have: photos, droppings, damage and where it was found.",
    approach: "An inspection to identify the pest before any treatment is recommended.",
    prevention: "Photograph what you see and avoid spraying until it's identified.",
  },
];

/* ------------------------------------------------------------------ */
/* Property map                                                        */
/* ------------------------------------------------------------------ */

export type PcZoneKey =
  | "kitchen"
  | "bathroom"
  | "bedroom"
  | "living"
  | "roof"
  | "garden"
  | "garage"
  | "storage"
  | "drainage"
  | "commercial";

export interface PcZone {
  key: PcZoneKey;
  label: string;
  pests: PcPestKey[];
  causes: string[];
}

export const pcZones: PcZone[] = [
  { key: "kitchen", label: "Kitchen", pests: ["cockroach", "ant", "fly"], causes: ["Food residue", "Moisture under the sink", "Open waste", "Gaps around pipes and appliances"] },
  { key: "bathroom", label: "Bathroom", pests: ["cockroach", "ant", "fly"], causes: ["Damp and leaks", "Drains", "Gaps around plumbing"] },
  { key: "bedroom", label: "Bedroom", pests: ["bedbug", "ant", "rodent"], causes: ["Mattress seams and bed frames", "Upholstered furniture", "Food eaten in the room"] },
  { key: "living", label: "Living room", pests: ["ant", "bedbug", "cockroach"], causes: ["Upholstered seating", "Crumbs and food", "Gaps at skirting and windows"] },
  { key: "roof", label: "Roof & exterior", pests: ["rodent", "ant", "mosquito"], causes: ["Openings at roof level", "Standing water on the roof", "Gaps around pipes and cables"] },
  { key: "garden", label: "Garden", pests: ["mosquito", "ant", "termite"], causes: ["Standing water", "Plants against walls", "Wood touching soil"] },
  { key: "garage", label: "Garage", pests: ["rodent", "cockroach", "termite"], causes: ["Stored cardboard and clutter", "Gaps under doors", "Wooden items"] },
  { key: "storage", label: "Storage", pests: ["rodent", "cockroach"], causes: ["Undisturbed clutter", "Stored food", "Little light or traffic"] },
  { key: "drainage", label: "Drains", pests: ["cockroach", "fly", "mosquito"], causes: ["Organic build-up", "Standing water", "Damaged drain covers"] },
  { key: "commercial", label: "Shop / office / restaurant", pests: ["cockroach", "fly", "rodent", "ant"], causes: ["Food preparation and waste", "Deliveries and storage", "Frequent door openings"] },
];

/* ------------------------------------------------------------------ */
/* Recurring cycle                                                     */
/* ------------------------------------------------------------------ */

export const pcCycle = ["Food & water", "Shelter", "Entry", "Infestation", "Treatment", "Prevention"];

export const pcReturnFactors = [
  "Food sources",
  "Moisture and leaks",
  "Standing water",
  "Cracks and gaps",
  "Open waste",
  "Poorly sealed doors and windows",
  "Plumbing penetrations",
  "Drainage problems",
  "Vegetation against the building",
  "Activity in neighbouring units",
  "Structural entry points",
];

/* ------------------------------------------------------------------ */
/* Per-pest detail sections                                            */
/* ------------------------------------------------------------------ */

export interface PcPestSection {
  key: Exclude<PcPestKey, "unsure">;
  heading: string;
  intro: string;
  points: { title: string; items: string[] }[];
  note: string;
}

export const pcPestSections: PcPestSection[] = [
  {
    key: "cockroach",
    heading: "Cockroach control in Dammam",
    intro: "Cockroaches are usually noticed in the kitchen or bathroom, at night, near water and food. One sighting can mean a much larger population hidden in gaps nearby.",
    points: [
      { title: "Signs", items: ["Live cockroaches", "Droppings", "Egg cases", "Unusual odor", "Activity around kitchens", "Activity near plumbing and moisture"] },
      { title: "Why they're hard to control", items: ["They hide in very small spaces", "They move through building gaps between rooms and units", "Food and moisture keep them going", "Visible insects may not represent the whole infestation"] },
    ],
    note: "Treatment is based on the inspection and the conditions found — where they're hiding, how many, and what's feeding them.",
  },
  {
    key: "ant",
    heading: "Ant control",
    intro: "A few ants on the counter rarely show where the colony is, or where they're getting in. Treating only what you see often moves the trail somewhere else.",
    points: [
      { title: "Contributing factors", items: ["Food", "Moisture", "Entry gaps", "Outdoor vegetation", "Cracks", "Pipe and cable openings"] },
      { title: "Visible activity vs. source", items: ["The trail shows the route, not the nest", "The colony may be in a wall, under paving or outside", "The source decides how treatment is done"] },
    ],
    note: "Control works best when the entry route and colony are found, not just the trail.",
  },
  {
    key: "termite",
    heading: "Termite inspection & control",
    intro: "Termite damage can occur without live termites being visible. No single sign confirms them — several together make an inspection worthwhile.",
    points: [
      { title: "Signs worth inspecting", items: ["Damaged wood", "Hollow-sounding wood", "Mud tubes where relevant", "Discarded wings", "Swarm activity", "Wood deterioration"] },
      { title: "What we look at", items: ["Door frames, skirting and cabinets", "Wood near soil or damp walls", "Moisture sources", "Earlier damage or repairs"] },
    ],
    note: "If you suspect termites, avoid disturbing the suspected area unnecessarily and arrange a professional inspection.",
  },
  {
    key: "bedbug",
    heading: "Bed bug treatment",
    intro: "Bites alone are not enough to confirm a bed bug infestation — many things cause bites. Physical evidence is what confirms it.",
    points: [
      { title: "Common signs", items: ["Live bed bugs", "Small dark spotting", "Shed skins", "Eggs", "Repeated bites alongside other evidence"] },
      { title: "Where they're checked", items: ["Mattress seams", "Bed frame and headboard", "Upholstered furniture", "Cracks and crevices nearby", "Neighbouring rooms"] },
    ],
    note: "Treatment is based on what the inspection confirms, and a follow-up is usually part of it.",
  },
  {
    key: "mosquito",
    heading: "Mosquito control",
    intro: "Mosquito management is more than treating the adults you can see. As long as there's standing water, new ones keep emerging.",
    points: [
      { title: "Breeding conditions", items: ["Standing water", "Containers and plant saucers", "Poor drainage", "Water collecting outdoors or on the roof"] },
      { title: "Control approach", items: ["Remove breeding opportunities", "Treatment where appropriate", "Ongoing prevention"] },
    ],
    note: "Most of the long-term difference comes from removing water where they breed.",
  },
  {
    key: "fly",
    heading: "Fly control",
    intro: "Flies follow food waste and organic material. In homes it's usually bins and drains; in restaurants, shops and commercial kitchens it can be several sources at once.",
    points: [
      { title: "Sources", items: ["Food waste", "Organic material", "Open bins", "Drains", "Food preparation areas", "Entry points"] },
      { title: "Common settings", items: ["Homes", "Restaurants and cafés", "Shops", "Commercial kitchens", "Food businesses"] },
    ],
    note: "Removing breeding material and controlling entry does more than treating adult flies alone.",
  },
  {
    key: "rodent",
    heading: "Rodent control",
    intro: "Rodents leave evidence long before they're seen. Don't touch droppings, nests or rodents yourself — keep children and pets away and let the area be assessed.",
    points: [
      { title: "Signs", items: ["Droppings", "Gnaw marks", "Scratching sounds", "Nesting material", "Damaged food packaging", "Grease marks along routes"] },
      { title: "Our focus", items: ["Inspection", "Entry points", "Food sources", "Harborage", "Monitoring", "Control measures"] },
    ],
    note: "Control measures are placed and checked by our technicians, alongside closing the gaps they use to get in.",
  },
];

/* ------------------------------------------------------------------ */
/* Comparison table                                                    */
/* ------------------------------------------------------------------ */

export const pcComparison: { pest: string; signs: string; areas: string; why: string; approach: string }[] = [
  { pest: "Cockroaches", signs: "Live insects, droppings, egg cases", areas: "Kitchens, bathrooms, drains", why: "Hidden numbers are usually larger", approach: "Targeted treatment + sealing + hygiene" },
  { pest: "Ants", signs: "Trails, ants near food", areas: "Kitchens, windows, gardens", why: "Colony is rarely where ants are seen", approach: "Treat the colony and entry route" },
  { pest: "Termites", signs: "Hollow wood, mud tubes, wings", areas: "Frames, skirting, cabinets", why: "Damage can be hidden inside wood", approach: "Confirm activity, then treat" },
  { pest: "Bed bugs", signs: "Spotting, skins, eggs, live bugs", areas: "Beds, sofas, nearby cracks", why: "Bites alone don't confirm them", approach: "Treat confirmed areas + follow-up" },
  { pest: "Mosquitoes", signs: "Adults indoors, larvae in water", areas: "Gardens, terraces, standing water", why: "Breeding sites must be found", approach: "Remove water + treat where appropriate" },
  { pest: "Flies", signs: "Flies at bins, drains, food areas", areas: "Kitchens, bins, entrances", why: "Breeding material must be removed", approach: "Source removal + entry control" },
  { pest: "Rodents", signs: "Droppings, gnawing, noises", areas: "Storage, kitchens, roof spaces", why: "Entry points and routes are hidden", approach: "Inspection, control, monitoring, sealing" },
];

/* ------------------------------------------------------------------ */
/* Process, inspection, mistakes                                       */
/* ------------------------------------------------------------------ */

export const pcProcess: { title: string; body: string; icon: PcIconName }[] = [
  { title: "Tell us what you've noticed", body: "What you've seen, where, and how often. Photos help.", icon: "phone" },
  { title: "Property assessment", body: "A walk-through of affected and neighbouring areas.", icon: "house" },
  { title: "Identify the pest and activity areas", body: "Confirm the pest and where it's living, feeding and entering.", icon: "search" },
  { title: "Decide the treatment approach", body: "Chosen for the pest, the property and who lives or works there.", icon: "checklist" },
  { title: "Apply the treatment", body: "Carried out by our technicians, with clear instructions for you.", icon: "spray" },
  { title: "Prevention & monitoring guidance", body: "What to change, what to watch for, and when to follow up.", icon: "shield" },
];

export const pcInspectFor = [
  "Pest evidence",
  "Entry points",
  "Food sources",
  "Moisture",
  "Harborage",
  "Breeding conditions",
  "Structural gaps",
  "Previous treatment",
  "Areas with repeated activity",
];

export const pcMistakes: { title: string; why: string; instead: string }[] = [
  {
    title: "Don't spray every product you have",
    why: "It can scatter pests deeper into walls and other rooms, and adds unnecessary exposure for people and pets.",
    instead: "Stop, photograph what you're seeing, and get it identified.",
  },
  {
    title: "Never mix pesticides or cleaning chemicals",
    why: "Mixing products can create harmful fumes or reactions.",
    instead: "Don't combine products. If you've already used something, tell the technician what it was.",
  },
  {
    title: "Don't ignore repeated sightings",
    why: "Regular sightings usually mean an established population nearby.",
    instead: "Note where and when you see them and request an inspection.",
  },
  {
    title: "Don't rely only on killing visible insects",
    why: "The ones you see are often a small part of the activity.",
    instead: "Deal with the source — harborage, food, water and entry points.",
  },
  {
    title: "Don't leave food and waste accessible",
    why: "Food and waste keep pests coming back, even after treatment.",
    instead: "Seal food, cover bins and remove waste regularly.",
  },
  {
    title: "Don't seal up an active infestation",
    why: "Closing a wall or void with pests inside can push them into other rooms and hide the problem.",
    instead: "Get professional advice before sealing gaps where pests are active.",
  },
];

/* ------------------------------------------------------------------ */
/* Decision tool                                                       */
/* ------------------------------------------------------------------ */

export const pcQuizWhat = ["Cockroaches", "Ants", "Flying insects", "Bed bugs", "Termites / wood damage", "Rodents", "Not sure"];
export const pcQuizWhere = ["Kitchen", "Bedroom", "Bathroom", "Outdoor", "Commercial area", "Multiple areas"];
export const pcQuizHow = ["Once", "Occasionally", "Daily / repeatedly", "Large infestation"];

/* ------------------------------------------------------------------ */
/* Request form                                                        */
/* ------------------------------------------------------------------ */

export const pcPropertyTypes = ["Apartment", "Villa", "House", "Office", "Restaurant / café", "Shop", "Warehouse", "Other"];
export const pcDurations = ["Just noticed", "A few days", "A few weeks", "Months or longer"];

/* ------------------------------------------------------------------ */
/* FAQ                                                                 */
/* ------------------------------------------------------------------ */

export const pcFaqs: { q: string; a: string }[] = [
  {
    q: "What does pest control include?",
    a: "An inspection to identify the pest and where it's active, a treatment chosen for that pest and property, and guidance on reducing the conditions that let pests return. Follow-up visits are arranged where needed.",
  },
  {
    q: "How do I know if I have a pest infestation?",
    a: "Repeated sightings, droppings, nesting evidence, damaged materials, unusual odors, or activity in more than one area can indicate an infestation. An inspection can identify the pest and where it's coming from.",
  },
  {
    q: "How often should a property receive pest control?",
    a: "It depends on the property and its history. Many homes only need treatment when a problem appears; food businesses and properties with recurring activity often benefit from scheduled visits. We can recommend a frequency after an inspection.",
  },
  {
    q: "Can pest control eliminate cockroaches?",
    a: "Professional treatment can bring cockroach activity under control, especially when combined with fixing leaks, sealing gaps and good hygiene. If neighbouring units are also affected, activity can return, so follow-up and prevention matter.",
  },
  {
    q: "How can I tell if I have termites?",
    a: "Look for hollow-sounding or damaged wood, mud tubes, discarded wings or swarming insects. Any one of these isn't proof on its own. Avoid disturbing the area and arrange an inspection.",
  },
  {
    q: "Are bites enough to confirm bed bugs?",
    a: "No. Many things cause bites. Bed bugs are confirmed by physical evidence such as live bugs, dark spotting, shed skins or eggs around the bed or furniture.",
  },
  {
    q: "Why do ants keep coming back?",
    a: "Because the colony or entry point hasn't been dealt with, or food and moisture are still available. Killing the visible trail doesn't reach the source.",
  },
  {
    q: "What attracts cockroaches to a home?",
    a: "Food residue, moisture, warmth and hiding places — especially under sinks, behind appliances and around plumbing gaps.",
  },
  {
    q: "How can I reduce mosquitoes around my property?",
    a: "Remove standing water: empty containers and plant saucers, fix poor drainage, and cover stored water. Treatment can help where breeding areas can't be removed.",
  },
  {
    q: "How do professionals control rodents?",
    a: "By inspecting for entry points, food and nesting areas, placing and checking control measures, and closing the gaps rodents use. Don't handle rodents, droppings or nests yourself.",
  },
  {
    q: "Is pest control safe around children and pets?",
    a: "Safety depends on the product, how and where it's applied, ventilation and re-entry timing. We explain the precautions for your treatment — follow the technician's instructions and the product label, and keep children and pets away from treated areas for as long as advised.",
  },
  {
    q: "How long should I stay away after treatment?",
    a: "It depends on the treatment used and the area treated. The technician will tell you when it's okay to return and what to do on re-entry, such as ventilating rooms.",
  },
  {
    q: "Should I clean before pest control?",
    a: "A general tidy helps access, but don't deep-clean or spray treated areas afterwards unless told to. Ask what preparation your treatment needs when you book.",
  },
  {
    q: "Should I remove food before treatment?",
    a: "Usually yes — store food, dishes and utensils away from areas being treated. You'll be told exactly what to remove or cover for your treatment.",
  },
  {
    q: "Can pests return after treatment?",
    a: "Yes, if the conditions that attracted them remain, or if pests come in from neighbouring properties. That's why prevention advice and follow-up are part of the service.",
  },
  {
    q: "What happens during a pest inspection?",
    a: "We look for pest evidence, entry points, food and moisture sources, harborage and breeding areas, and any previous treatment, then explain what we found and the recommended approach.",
  },
  {
    q: "Do businesses need recurring pest control?",
    a: "Many do, particularly restaurants, food shops, warehouses and buildings with frequent deliveries or waste. We offer recurring service plans for businesses, with the visit frequency set after an inspection.",
  },
  {
    q: "Can you treat only one room?",
    a: "Sometimes. If activity really is confined to one area, treatment can focus there — but pests often use connected spaces, so nearby areas are checked too.",
  },
  {
    q: "What should I do if I don't know what pest I have?",
    a: "Take a photo if you can do so safely, note where and when you see it, and contact us. You don't need to identify it yourself.",
  },
  {
    q: "How can I prevent pests from returning?",
    a: "Keep food sealed, cover bins, fix leaks and standing water, seal gaps around pipes, doors and windows, cut back plants touching walls, and report new activity early.",
  },
];
