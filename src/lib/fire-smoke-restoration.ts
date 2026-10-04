// Content for the Fire & Smoke Damage Restoration page.
// Only services confirmed by the business are marked "confirmed"; anything
// else is shown as "Available where applicable" until the business confirms it.

export type FsIconName =
  | "fire"
  | "smoke"
  | "soot"
  | "house"
  | "shield"
  | "search"
  | "droplet"
  | "air"
  | "sofa"
  | "brush"
  | "odor"
  | "wall"
  | "floor"
  | "cabinet"
  | "tools"
  | "clipboard"
  | "phone"
  | "pin"
  | "check"
  | "arrow"
  | "alert"
  | "roller"
  | "building";

/* ------------------------------------------------------------------ */
/* Damage map — what a fire leaves behind                              */
/* ------------------------------------------------------------------ */

export type FsDamageKey = "fire" | "smoke" | "soot" | "water" | "odor";

export interface FsDamageLayer {
  key: FsDamageKey;
  label: string;
  icon: FsIconName;
  reaches: string;
  explanation: string;
  response: string;
  link?: { href: string; label: string };
}

export const fsDamageLayers: FsDamageLayer[] = [
  {
    key: "fire",
    label: "Flames & heat",
    icon: "fire",
    reaches: "Structure, finishes, fixtures",
    explanation:
      "Direct flame and heat can char gypsum board, warp cabinets, crack tiles and damage wiring, ceilings and door frames — usually concentrated around where the fire started.",
    response:
      "Assess what is burned or heat-damaged, remove what cannot be kept, and plan the rebuild.",
    link: { href: "/ceiling-gypsum-board-repair/", label: "Ceiling & gypsum repair" },
  },
  {
    key: "smoke",
    label: "Smoke",
    icon: "smoke",
    reaches: "Other rooms, ceilings, AC pathways",
    explanation:
      "Smoke rises and moves along ceilings, through doorways, up stairwells and into AC returns. Rooms that never saw a flame can still be affected.",
    response:
      "Trace how far smoke travelled before deciding what needs cleaning, treatment or refinishing.",
    link: { href: "/ac-repair/", label: "AC checks" },
  },
  {
    key: "soot",
    label: "Soot",
    icon: "soot",
    reaches: "Walls, ceilings, furniture, fixtures",
    explanation:
      "Soot is the fine residue smoke leaves behind. It settles on walls, ceilings, light fittings and belongings, and it smears easily when wiped the wrong way.",
    response:
      "Identify affected surfaces and choose a method suited to each material, rather than ordinary wiping.",
  },
  {
    key: "water",
    label: "Firefighting water",
    icon: "droplet",
    reaches: "Floors, lower walls, cabinets, ceilings below",
    explanation:
      "Water used to put the fire out soaks floors, wicks up gypsum walls, gets under cabinets and can drip into ceilings below.",
    response:
      "Extract standing water, check moisture in materials, and dry before any rebuilding begins.",
    link: { href: "/water-leak-repair/", label: "Water damage & leaks" },
  },
  {
    key: "odor",
    label: "Smoke odor",
    icon: "odor",
    reaches: "Fabrics, upholstery, wood, AC system",
    explanation:
      "Odor stays in porous materials — sofas, curtains, mattresses, wood and gypsum — and can return on hot days or when the AC runs.",
    response:
      "Find the materials holding the smell and treat or remove the source instead of masking it.",
  },
];

/* ------------------------------------------------------------------ */
/* Damage types compared                                               */
/* ------------------------------------------------------------------ */

export interface FsDamageType {
  title: string;
  icon: FsIconName;
  whatItIs: string;
  whereYouSeeIt: string;
  whyItMatters: string;
}

export const fsDamageTypes: FsDamageType[] = [
  {
    title: "Fire damage",
    icon: "fire",
    whatItIs:
      "Materials burned or changed by heat — gypsum board, framing, flooring, doors, cabinets, ceilings and electrical components.",
    whereYouSeeIt: "Mostly near where the fire started.",
    whyItMatters:
      "Heat-damaged materials can look intact on the surface while being weakened underneath.",
  },
  {
    title: "Smoke damage",
    icon: "smoke",
    whatItIs:
      "Discoloration and residue carried by smoke into rooms, ceilings, contents and ventilation pathways.",
    whereYouSeeIt: "Often well beyond the burned room.",
    whyItMatters:
      "The affected area is usually larger than it first appears, so cleaning only the burned room misses part of the problem.",
  },
  {
    title: "Soot damage",
    icon: "soot",
    whatItIs:
      "Fine residue that settles on surfaces and belongings. Its behaviour depends on what burned.",
    whereYouSeeIt: "Ceilings, upper walls, light fittings, furniture tops.",
    whyItMatters:
      "Some soot smears and spreads when wiped, so it needs material-specific cleaning rather than household wiping.",
  },
  {
    title: "Firefighting water damage",
    icon: "droplet",
    whatItIs:
      "Water left behind after the fire was put out, soaking into floors, walls, cabinets and ceilings.",
    whereYouSeeIt: "Floors, lower walls, under cabinets, rooms below.",
    whyItMatters:
      "Wet materials need extraction and drying before repairs, or new finishes can fail and moisture problems can follow.",
  },
];

/* ------------------------------------------------------------------ */
/* Services                                                            */
/* ------------------------------------------------------------------ */

export interface FsService {
  title: string;
  icon: FsIconName;
  problem: string;
  whatWeDo: string;
  expect: string;
  availability: "confirmed" | "where-applicable";
  link?: { href: string; label: string };
}

export const fsServices: FsService[] = [
  {
    title: "Damage assessment",
    icon: "search",
    problem: "You can see the burned area, but not how far smoke, soot and water have spread.",
    whatWeDo: "Walk through affected and neighbouring areas and note what is burned, stained, wet or holding odor.",
    expect: "A clear picture of what was affected and a suggested order of work.",
    availability: "confirmed",
  },
  {
    title: "Property stabilization & securing",
    icon: "shield",
    problem: "Openings, damaged doors or unsafe areas leave the property exposed.",
    whatWeDo: "Close off or secure affected areas where possible so damage doesn't spread further.",
    expect: "Discussed during the assessment, depending on the situation.",
    availability: "where-applicable",
  },
  {
    title: "Smoke & soot cleaning",
    icon: "brush",
    problem: "Grey or black residue on walls, ceilings and fixtures that smears when touched.",
    whatWeDo: "Surface-appropriate cleaning of smoke residue where cleaning is a realistic option.",
    expect: "Confirmed case by case after seeing the residue and the surfaces.",
    availability: "where-applicable",
  },
  {
    title: "Smoke odor treatment",
    icon: "odor",
    problem: "The smell stays after visible cleaning, or returns when the AC runs.",
    whatWeDo: "Find the materials holding the odor, then treat, clean or remove the source.",
    expect: "Odor addressed at its source rather than covered with fragrance or paint.",
    availability: "confirmed",
  },
  {
    title: "Water extraction & drying",
    icon: "droplet",
    problem: "Standing water and soaked materials left after firefighting.",
    whatWeDo: "Remove standing water and dry affected floors, walls and cabinets before repairs.",
    expect: "Materials checked for moisture before anything is closed up or repainted.",
    availability: "confirmed",
    link: { href: "/water-leak-repair/", label: "Related: water damage" },
  },
  {
    title: "Contents & furniture cleaning",
    icon: "sofa",
    problem: "Furniture, curtains and belongings carry soot and smell.",
    whatWeDo: "Separate items worth cleaning from those that may need replacing, and clean where suitable.",
    expect: "Item-by-item decisions. Not everything can be saved.",
    availability: "where-applicable",
  },
  {
    title: "AC / airborne smoke assessment",
    icon: "air",
    problem: "Smoke smell comes back through the vents.",
    whatWeDo: "Check whether smoke has reached AC units, filters and return paths, and route AC work to the right team.",
    expect: "AC cleaning or repair handled through our AC service where needed.",
    availability: "where-applicable",
    link: { href: "/ac-repair/", label: "AC repair" },
  },
  {
    title: "Damaged material removal",
    icon: "tools",
    problem: "Charred gypsum, swollen boards or ruined finishes can't simply be cleaned.",
    whatWeDo: "Remove materials that can't be kept, in a controlled way, ready for rebuilding.",
    expect: "Only what's necessary is removed, after discussing it with you.",
    availability: "confirmed",
  },
  {
    title: "Gypsum, ceiling & flooring restoration",
    icon: "wall",
    problem: "Burned or water-damaged ceilings, walls and floors.",
    whatWeDo: "Rebuild gypsum board and ceilings, and repair or replace damaged flooring sections.",
    expect: "Repairs matched to the surrounding finish as closely as practical.",
    availability: "confirmed",
    link: { href: "/ceiling-gypsum-board-repair/", label: "Ceiling & gypsum repair" },
  },
  {
    title: "Cabinet & interior restoration",
    icon: "cabinet",
    problem: "Kitchen cabinets, doors and fittings warped by heat or water.",
    whatWeDo: "Repair or replace affected cabinets, doors and interior fittings.",
    expect: "Repair where it makes sense, replacement where it doesn't.",
    availability: "confirmed",
    link: { href: "/kitchen-cabinet-repair/", label: "Kitchen cabinet repair" },
  },
  {
    title: "Painting & finishing",
    icon: "roller",
    problem: "Stained or repaired walls and ceilings need a consistent finish.",
    whatWeDo: "Prepare and repaint once surfaces are clean, dry and odor has been dealt with.",
    expect: "Painting comes last — never used to hide smoke staining or smell.",
    availability: "confirmed",
    link: { href: "/painting-wall-repair/", label: "Painting & wall repair" },
  },
  {
    title: "Repair coordination",
    icon: "clipboard",
    problem: "A fire touches many trades — electrical, AC, gypsum, cabinets, paint.",
    whatWeDo: "Sequence the work so each stage is ready for the next, with one point of contact.",
    expect: "You know what happens next and who is handling it.",
    availability: "confirmed",
  },
];

/* ------------------------------------------------------------------ */
/* Process                                                             */
/* ------------------------------------------------------------------ */

export interface FsProcessStep {
  title: string;
  body: string;
  icon: FsIconName;
}

export const fsProcess: FsProcessStep[] = [
  {
    title: "Initial conversation",
    body: "We learn what happened, where the fire started, whether the property is accessible, and what damage you can already see. Photos help.",
    icon: "phone",
  },
  {
    title: "Damage assessment",
    body: "We look at the affected areas — fire, smoke, soot and water — including rooms next to where the fire was.",
    icon: "search",
  },
  {
    title: "Stabilization",
    body: "Where needed, affected areas are secured or closed off to help prevent further damage.",
    icon: "shield",
  },
  {
    title: "Cleaning & mitigation",
    body: "Standing water is removed and materials dried; residue and affected contents are dealt with using methods suited to each material.",
    icon: "droplet",
  },
  {
    title: "Odor treatment",
    body: "We find what is holding the smell and treat or remove it, rather than masking it.",
    icon: "odor",
  },
  {
    title: "Repairs & restoration",
    body: "Damaged gypsum, ceilings, floors, cabinets and finishes are repaired or replaced where appropriate.",
    icon: "tools",
  },
  {
    title: "Final review",
    body: "We walk through the completed work with you and agree anything left to follow up.",
    icon: "check",
  },
];

/* ------------------------------------------------------------------ */
/* What not to do                                                      */
/* ------------------------------------------------------------------ */

export interface FsMistake {
  title: string;
  problem: string;
  why: string;
  instead: string;
}

export const fsMistakes: FsMistake[] = [
  {
    title: "Don't re-enter an unsafe building",
    problem: "Going back in to check on belongings before it's been declared safe.",
    why: "Ceilings, floors and walls weakened by heat can fail, and smoke-filled air can still be harmful.",
    instead: "Wait until Civil Defense or the relevant authority says the building can be entered.",
  },
  {
    title: "Don't switch the power back on",
    problem: "Resetting breakers or plugging appliances in to see what still works.",
    why: "Heat and water can damage wiring, sockets and the distribution board in ways that aren't visible.",
    instead: "Leave affected circuits off until a qualified electrician has checked them.",
  },
  {
    title: "Don't scrub soot from painted walls",
    problem: "Wiping black marks with a wet cloth or sponge.",
    why: "Some soot smears and pushes deeper into paint and gypsum, making a cleanable surface harder to restore.",
    instead: "Leave visible soot alone until the surfaces have been assessed.",
  },
  {
    title: "Don't use household cleaners on unknown residue",
    problem: "Spraying bleach, degreaser or all-purpose cleaner on stained surfaces.",
    why: "Residue from burned plastics, fabrics and cooking oils behaves differently, and the wrong product can set stains.",
    instead: "Photograph the residue and ask before cleaning anything.",
  },
  {
    title: "Don't throw belongings away too quickly",
    problem: "Clearing out everything that smells of smoke.",
    why: "Some items can be cleaned, and you may need records of what was affected for your own documentation.",
    instead: "Photograph items first and set them aside until they've been assessed.",
  },
  {
    title: "Don't paint over smoke stains",
    problem: "Repainting stained walls and ceilings to make the room look normal again.",
    why: "Stains can bleed through new paint and odor stays trapped underneath.",
    instead: "Clean, dry and deal with the odor first. Painting comes last.",
  },
];

/* ------------------------------------------------------------------ */
/* Property assessment floor plan                                      */
/* ------------------------------------------------------------------ */

export type FsZoneKey =
  | "kitchen"
  | "living"
  | "bedroom"
  | "ceiling"
  | "walls"
  | "hvac"
  | "furniture"
  | "floor"
  | "electrical";

export interface FsZone {
  key: FsZoneKey;
  label: string;
  issue: string;
  why: string;
  response: string;
  link?: { href: string; label: string };
}

export const fsZones: FsZone[] = [
  {
    key: "kitchen",
    label: "Kitchen",
    issue: "Heat damage to cabinets, counters and the wall behind the cooker; greasy smoke residue.",
    why: "Kitchen fires often involve cooking oil, which leaves residue that clings to surfaces and smells strongly.",
    response: "Assess cabinets and walls, remove what's burned, clean or replace the rest, then rebuild.",
    link: { href: "/kitchen-cabinet-repair/", label: "Kitchen cabinet repair" },
  },
  {
    key: "living",
    label: "Living room",
    issue: "Smoke staining on walls and ceiling, odor in sofas, rugs and curtains.",
    why: "Large open rooms collect smoke even when the fire was in another room.",
    response: "Check how far smoke reached, treat odor at its source, and assess soft furnishings.",
  },
  {
    key: "bedroom",
    label: "Bedroom",
    issue: "Smoke smell in mattresses, wardrobes and clothing; light staining near the ceiling.",
    why: "Bedrooms upstairs or along a corridor are often reached by smoke through open doors.",
    response: "Assess fabrics and wardrobes, and treat odor in porous materials.",
  },
  {
    key: "ceiling",
    label: "Ceiling",
    issue: "Discoloration, sagging gypsum, or water staining from firefighting.",
    why: "Smoke rises, so ceilings are often the first and most affected surface — and water can collect above them.",
    response: "Check for moisture and damage, then repair or replace affected gypsum.",
    link: { href: "/ceiling-gypsum-board-repair/", label: "Ceiling & gypsum repair" },
  },
  {
    key: "walls",
    label: "Walls",
    issue: "Soot staining, heat-cracked paint, or water wicking up from the floor.",
    why: "Gypsum and paint absorb both residue and moisture.",
    response: "Assess each wall; clean, dry or replace sections before refinishing.",
    link: { href: "/painting-wall-repair/", label: "Painting & wall repair" },
  },
  {
    key: "hvac",
    label: "AC & vents",
    issue: "Smoke drawn into AC returns and filters.",
    why: "Running the AC can carry smell back into rooms that were otherwise unaffected.",
    response: "Check AC units and filters, and route cleaning or repair to the AC team.",
    link: { href: "/ac-repair/", label: "AC repair" },
  },
  {
    key: "furniture",
    label: "Furniture & contents",
    issue: "Soot on surfaces, odor in upholstery, heat damage near the fire.",
    why: "Salvageability depends on the material, the exposure and how long items stayed wet or smoky.",
    response: "Sort items into keep, assess further, or replace — after photographing them.",
  },
  {
    key: "floor",
    label: "Floor",
    issue: "Standing water, lifting tiles or swollen wooden flooring.",
    why: "Water from firefighting settles at floor level and can get underneath finishes.",
    response: "Extract water, dry, then repair or replace affected flooring.",
    link: { href: "/flooring-repair/", label: "Flooring repair" },
  },
  {
    key: "electrical",
    label: "Electrical",
    issue: "Heat- or water-damaged sockets, wiring and the distribution board.",
    why: "Electrical damage isn't always visible and is a safety risk.",
    response: "Keep affected circuits off until a qualified electrician has checked them.",
    link: { href: "/electrical-repair/", label: "Electrical repair" },
  },
];

/* ------------------------------------------------------------------ */
/* Restoration journey — conceptual stages, ready for real photos      */
/* ------------------------------------------------------------------ */

export interface FsJourneyStage {
  label: string;
  caption: string;
  // Add real, permissioned project photos here later. Until then the page
  // renders a conceptual illustration, never presented as company work.
  image?: { src: string; alt: string; width: number; height: number };
}

export const fsJourney: FsJourneyStage[] = [
  {
    label: "Affected",
    caption: "Soot on the ceiling and upper wall, a heat-damaged section of gypsum, damp at floor level.",
  },
  {
    label: "Cleaned",
    caption: "Residue dealt with, standing water removed, materials dried and checked.",
  },
  {
    label: "Repaired",
    caption: "Damaged gypsum replaced, joints finished and surfaces prepared.",
  },
  {
    label: "Restored",
    caption: "Painted and finished once surfaces are clean, dry and odor-free.",
  },
];

/* ------------------------------------------------------------------ */
/* Request form options                                                */
/* ------------------------------------------------------------------ */

export const fsPropertyTypes = [
  "Apartment",
  "Villa",
  "Townhouse",
  "Office",
  "Shop / restaurant",
  "Warehouse / workshop",
  "Other",
];

export const fsWhatHappened = [
  "Kitchen fire",
  "Electrical fire",
  "Smoke damage only",
  "Firefighting water damage",
  "Smoke smell won't go",
  "Not sure",
];

export const fsDamageExtent = [
  "One room",
  "Several rooms",
  "Whole floor",
  "Whole property",
  "Not sure yet",
];

/* ------------------------------------------------------------------ */
/* FAQ                                                                 */
/* ------------------------------------------------------------------ */

export interface FsFaq {
  q: string;
  a: string;
}

export const fsFaqs: FsFaq[] = [
  {
    q: "What should I do immediately after a house fire in Dammam?",
    a: "Make sure everyone is out and safe, and follow the instructions of Civil Defense. Don't go back inside until you're told it's safe. Keep electricity off in affected areas, photograph the damage from a safe position, and avoid cleaning soot yourself. Then contact a restoration professional to assess the property.",
  },
  {
    q: "Is it safe to enter a fire-damaged property?",
    a: "Only once Civil Defense or the relevant authority confirms it is. Heat can weaken ceilings and floors, wiring may be damaged, and the air can still contain smoke residue. Even then, limit time inside and avoid heavily affected rooms.",
  },
  {
    q: "Can smoke damage areas that were not burned?",
    a: "Yes. Smoke moves along ceilings, through doorways, up stairwells and into AC returns, so rooms that never saw a flame can have staining, residue and odor.",
  },
  {
    q: "How is soot removed from walls and ceilings?",
    a: "It depends on the type of residue and the surface. Some soot smears when wiped, so the surface is assessed first and cleaned with a suitable method. Where cleaning isn't enough, the affected gypsum or finish may need replacing and repainting.",
  },
  {
    q: "Can smoke odor be completely removed?",
    a: "Often it can be greatly reduced or eliminated, but it depends on how deeply smoke got into porous materials. The odor has to be traced to the materials holding it and treated or removed there. Air fresheners and fresh paint only cover it up.",
  },
  {
    q: "Can furniture damaged by smoke be restored?",
    a: "Some can. Hard surfaces with light residue are often cleanable; upholstery, mattresses and items close to the fire are harder. Each item has to be assessed — salvage isn't guaranteed.",
  },
  {
    q: "What happens to water left after firefighting?",
    a: "Standing water is extracted and wet materials are dried and checked for moisture before repairs. Gypsum, wooden cabinets and some flooring absorb water and may need replacing if they stayed wet too long.",
  },
  {
    q: "Do I need to replace drywall after smoke damage?",
    a: "Not always. Lightly stained gypsum may be cleanable and repaintable. Gypsum that is burned, heat-damaged, soaked or holding odor deep in the board is usually replaced.",
  },
  {
    q: "Can you restore only one room after a fire?",
    a: "Yes, if the damage really is limited to one room. We'll still check the rooms around it, because smoke and water often travel further than the visible damage.",
  },
  {
    q: "How long does fire damage restoration take?",
    a: "It depends on the size of the affected area, how wet things are, what needs replacing and how many trades are involved. A small kitchen fire is very different from a whole-floor fire. A realistic timeline can be given after the assessment.",
  },
  {
    q: "Can businesses get fire and smoke damage restoration?",
    a: "Yes. Offices, shops, restaurants, clinics, workshops and warehouses can be assessed in the same way, with extra attention to securing affected areas and keeping unaffected areas usable where possible.",
  },
  {
    q: "What information should I provide when requesting an assessment?",
    a: "Where the fire started, which rooms were affected, whether firefighting water was used, whether the property is accessible, the type of property and area in Dammam, and photos taken from a safe position.",
  },
  {
    q: "Should I clean soot myself?",
    a: "It's best not to. Wiping can smear soot deeper into paint and gypsum, and household cleaners can react badly with some residues. Leave it until it's been assessed.",
  },
  {
    q: "Can smoke damage affect AC systems?",
    a: "Yes. Smoke can be drawn into AC units, filters and return paths, and the smell may come back whenever the AC runs. The system should be checked before it's used normally again.",
  },
  {
    q: "Can water damage from firefighting cause mold problems?",
    a: "It can, if wet materials aren't dried properly — especially inside walls, under flooring and behind cabinets. That's why drying and moisture checks come before repairs.",
  },
  {
    q: "What happens during a fire damage assessment?",
    a: "We walk through the affected and neighbouring areas, note what is burned, stained, wet or holding odor, look at contents, and agree an order of work with you: stabilize, clean and dry, treat odor, repair, then finish.",
  },
  {
    q: "How do I know whether an item can be salvaged?",
    a: "It depends on the material, how close it was to the fire, how much smoke and water it was exposed to, and for how long. Photograph items and keep them aside until they've been assessed.",
  },
  {
    q: "What parts of a property usually need rebuilding after a fire?",
    a: "Commonly gypsum walls and ceilings, kitchen cabinets, doors and frames, flooring sections, electrical fittings and finishes near the fire. What's needed depends on the property and the damage.",
  },
];
