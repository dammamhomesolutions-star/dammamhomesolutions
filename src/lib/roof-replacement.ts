// Content for the Roof Replacement page. Roofing systems listed here were
// confirmed by the business: bituminous membranes, liquid-applied
// waterproofing, roof insulation, and protective / heat-reflective coatings.

export type RrIconName =
  | "roof"
  | "house"
  | "search"
  | "droplet"
  | "shield"
  | "heat"
  | "sun"
  | "drain"
  | "waterproof"
  | "insulation"
  | "tools"
  | "hammer"
  | "checklist"
  | "alert"
  | "calendar"
  | "phone"
  | "pin"
  | "arrow"
  | "check"
  | "building"
  | "layers";

/* ------------------------------------------------------------------ */
/* Typical roof assembly (hero cross-section)                          */
/* ------------------------------------------------------------------ */

export type RrLayerKey = "surface" | "waterproofing" | "insulation" | "structure" | "ceiling";

export interface RrLayer {
  key: RrLayerKey;
  label: string;
  does: string;
  wrong: string;
  replace: string;
}

export const rrLayers: RrLayer[] = [
  {
    key: "surface",
    label: "Top surface",
    does: "Takes the sun, dust, foot traffic and rain first, and protects the layers beneath.",
    wrong: "Cracking, crazing, loose tiles or screed, worn coatings and areas where water sits.",
    replace: "When deterioration is widespread rather than in a few spots, or the layers below have failed too.",
  },
  {
    key: "waterproofing",
    label: "Waterproofing layer",
    does: "Stops water reaching the structure. On many flat roofs this is a membrane or a liquid-applied system.",
    wrong: "Damaged or deteriorated waterproofing can allow water to enter the roof assembly — often far from where the stain appears inside.",
    replace: "When failure is extensive, it has been patched repeatedly, or it has reached the end of its service life.",
  },
  {
    key: "insulation",
    label: "Insulation",
    does: "Slows heat moving from the hot roof into the rooms below.",
    wrong: "Wet or compressed insulation loses much of its value and can hold moisture against the structure.",
    replace: "When it's wet, damaged or missing, or when the roof above is being replaced anyway.",
  },
  {
    key: "structure",
    label: "Structural roof base",
    does: "The concrete slab or deck that carries the roof. Everything above depends on it.",
    wrong: "Long-term water entry can stain, spall or weaken the surface of the base.",
    replace: "Structural concerns need separate professional assessment. Roof replacement covers the layers above the base and the repairs needed to prepare it.",
  },
  {
    key: "ceiling",
    label: "Interior ceiling",
    does: "Where most roof problems are first noticed — as a stain, a drip or peeling paint.",
    wrong: "Staining, sagging gypsum and damp patches, which may appear some distance from where water entered the roof.",
    replace: "The ceiling is repaired once the roof above has been dealt with — not before.",
  },
];

/* ------------------------------------------------------------------ */
/* Symptoms                                                            */
/* ------------------------------------------------------------------ */

export interface RrSymptom {
  see: string;
  mean: string;
  todo: string;
}

export const rrSymptoms: RrSymptom[] = [
  {
    see: "Repeated leaks",
    mean: "Surface patching may no longer be reaching the underlying problem.",
    todo: "Have the roof inspected to find the source and how far the damage extends.",
  },
  {
    see: "Water stains on ceilings",
    mean: "Water may be entering through the roof — or from plumbing, AC drains or the floor above.",
    todo: "Note when the stain appears (after rain, when the AC runs) and have the source traced.",
  },
  {
    see: "Cracked or deteriorated roof surface",
    mean: "Heat and thermal movement may be breaking down the surface or coating.",
    todo: "Check whether the waterproofing below is still sound before deciding on scope.",
  },
  {
    see: "Persistent damp areas",
    mean: "Moisture may be trapped within the roof layers rather than coming from one opening.",
    todo: "Have the affected area assessed for wet materials.",
  },
  {
    see: "Failed waterproofing",
    mean: "Blistering, splitting or peeling membranes or coatings.",
    todo: "Establish whether the failure is local or across the whole roof.",
  },
  {
    see: "Damaged details at walls and edges",
    mean: "Roof-to-wall junctions, parapets and upstands are common water-entry points.",
    todo: "Inspect the details — these are often repairable without replacing the roof.",
  },
  {
    see: "Water ponding after rain",
    mean: "Low spots or blocked drains are keeping water on the roof.",
    todo: "Check drainage and levels; ponding speeds up deterioration.",
  },
  {
    see: "A long repair history",
    mean: "Several patches over the years can mean the roof is near the end of its practical life.",
    todo: "Compare the cost of continued repairs with a defined replacement scope.",
  },
  {
    see: "Visible deterioration across the roof",
    mean: "General wear rather than a single defect.",
    todo: "An inspection can confirm whether restoration or replacement is more realistic.",
  },
  {
    see: "An old roof system",
    mean: "Materials may be reaching the end of their service life.",
    todo: "Age alone isn't a reason to replace — condition is. Get it assessed.",
  },
];

/* ------------------------------------------------------------------ */
/* Leak sources that don't need a new roof                             */
/* ------------------------------------------------------------------ */

export const rrLeakSources = [
  { label: "A localized waterproofing failure", x: 210, y: 118 },
  { label: "A failed detail at a wall or upstand", x: 70, y: 96 },
  { label: "A blocked or poorly located drain", x: 360, y: 138 },
  { label: "A damaged patch of surface", x: 250, y: 84 },
  { label: "Penetrations around pipes and AC equipment", x: 172, y: 72 },
  { label: "A failed seal or joint", x: 420, y: 110 },
  { label: "Something that isn't the roof at all", x: 300, y: 196 },
];

/* ------------------------------------------------------------------ */
/* Roof damage map (signature interactive)                             */
/* ------------------------------------------------------------------ */

export type RrHotspotKey =
  | "surface"
  | "drain"
  | "waterproofing"
  | "junction"
  | "penetration"
  | "hvac"
  | "edge"
  | "ceiling";

export interface RrHotspot {
  key: RrHotspotKey;
  label: string;
  concern: string;
  why: string;
  next: string;
  x: number;
  y: number;
}

export const rrHotspots: RrHotspot[] = [
  {
    key: "surface",
    label: "Roof surface",
    concern: "Cracking, crazing, worn coating or loose finish.",
    why: "The surface protects the waterproofing from heat, UV and foot traffic.",
    next: "Check whether wear is local or roof-wide before choosing repair, coating or replacement.",
    x: 300,
    y: 170,
  },
  {
    key: "drain",
    label: "Roof drain",
    concern: "Blocked, undersized or set higher than the surrounding roof.",
    why: "Water that can't leave the roof sits on it and works into weak points.",
    next: "Clear and check the drain and the falls toward it before any new system goes down.",
    x: 470,
    y: 222,
  },
  {
    key: "waterproofing",
    label: "Waterproofing",
    concern: "Blistering, splitting, lifting or brittle membrane or coating.",
    why: "It's the layer actually keeping water out of the building.",
    next: "Assess how much of the system has failed — this often decides repair versus replacement.",
    x: 220,
    y: 210,
  },
  {
    key: "junction",
    label: "Wall junction",
    concern: "Cracked or detached upstand where the roof meets a wall or parapet.",
    why: "Junctions move with temperature and are a common entry point.",
    next: "Inspect and re-detail the junction; frequently repairable on its own.",
    x: 112,
    y: 132,
  },
  {
    key: "penetration",
    label: "Pipe penetration",
    concern: "Gaps or failed sealing around pipes, vents and fixings.",
    why: "Every hole through the roof is a potential leak if it isn't properly detailed.",
    next: "Re-seal or re-detail penetrations as part of any repair or replacement.",
    x: 380,
    y: 128,
  },
  {
    key: "hvac",
    label: "AC equipment",
    concern: "Unit bases, supports and condensate lines on the roof.",
    why: "Equipment adds penetrations, foot traffic and condensate water.",
    next: "Plan access, temporary moves and detailing around units before work starts.",
    x: 520,
    y: 140,
  },
  {
    key: "edge",
    label: "Roof edge",
    concern: "Cracked coping, open joints or water running down the facade.",
    why: "Edges take wind, heat and run-off, and failures can show up on walls below.",
    next: "Inspect edge details along with the main roof area.",
    x: 560,
    y: 250,
  },
  {
    key: "ceiling",
    label: "Ceiling below",
    concern: "Stains, drips or damaged gypsum indoors.",
    why: "It shows that water is getting in — but not always where.",
    next: "Trace the source on the roof before repairing the ceiling.",
    x: 300,
    y: 318,
  },
];

/* ------------------------------------------------------------------ */
/* Diagnostic tool                                                     */
/* ------------------------------------------------------------------ */

export interface RrDiagnosis {
  key: string;
  label: string;
  causes: string[];
  check: string[];
  next: string;
}

export const rrDiagnoses: RrDiagnosis[] = [
  {
    key: "stain",
    label: "Water stains on a ceiling",
    causes: ["Water entering through the roof", "A plumbing or AC drain leak above the ceiling", "Condensation"],
    check: ["When the stain appears or grows", "The roof area directly above and uphill of it", "Pipes and AC lines nearby"],
    next: "Needs inspection to confirm the source before anything is repaired.",
  },
  {
    key: "leak",
    label: "A roof leak",
    causes: ["A local waterproofing failure", "A failed detail or penetration", "A blocked drain"],
    check: ["The area around the leak and uphill of it", "Details, drains and penetrations", "The general condition of the roof"],
    next: "Often repairable if the rest of the roof is sound. An inspection decides.",
  },
  {
    key: "repeated",
    label: "Repeated leaks",
    causes: ["Repairs treating symptoms, not the source", "Wider waterproofing deterioration", "Drainage problems"],
    check: ["Repair history and where patches are", "Whether the waterproofing has failed broadly", "Falls and drains"],
    next: "May indicate the roof is approaching replacement. Worth a full assessment.",
  },
  {
    key: "cracked",
    label: "A cracked roof surface",
    causes: ["Heat and thermal movement", "An aged or worn surface", "Movement in the base below"],
    check: ["Crack pattern and depth", "Whether the waterproofing beneath is intact", "Any staining below"],
    next: "Surface cracks may be repairable or coatable; deeper problems need a closer look.",
  },
  {
    key: "ponding",
    label: "Water ponding on the roof",
    causes: ["Blocked drains", "Low spots or poor falls", "Settled or damaged screed"],
    check: ["Drain condition and height", "Where water collects and for how long", "Damage around ponded areas"],
    next: "Drainage often needs fixing whether the roof is repaired or replaced.",
  },
  {
    key: "failed",
    label: "Failed waterproofing",
    causes: ["Age and UV exposure", "Poor original installation or detailing", "Damage from foot traffic or equipment"],
    check: ["How much of the roof is affected", "Whether water has reached insulation or the base", "Details and penetrations"],
    next: "Local failures can be repaired; widespread failure may point to replacement.",
  },
  {
    key: "old",
    label: "An old or deteriorated roof",
    causes: ["Materials at the end of their service life", "Layers of previous repairs", "General weathering"],
    check: ["Overall condition, not just age", "Wet layers beneath the surface", "Drainage and details"],
    next: "May be a candidate for restoration or replacement. An inspection compares both.",
  },
  {
    key: "unsure",
    label: "I'm not sure",
    causes: ["It could be the roof, or something else entirely"],
    check: ["Photos of what you've noticed — inside and, if safely accessible, on the roof", "When it started and whether it changes with rain or AC use"],
    next: "Send photos and a short description. We'll suggest where to start.",
  },
];

/* ------------------------------------------------------------------ */
/* Inspection steps                                                    */
/* ------------------------------------------------------------------ */

export const rrInspection: { title: string; body: string; icon: RrIconName }[] = [
  { title: "Understand the problem", body: "Review the leaks, previous repairs and what you've noticed, inside and out.", icon: "phone" },
  { title: "Inspect accessible roof areas", body: "Check the visible surface, details, drains and equipment areas.", icon: "roof" },
  { title: "Look for water-entry points", body: "Identify likely sources and which parts of the roof and ceiling are affected.", icon: "droplet" },
  { title: "Assess roof condition", body: "Consider the waterproofing, drainage, surface wear and how much of the roof is involved.", icon: "search" },
  { title: "Decide the right approach", body: "Repair, restoration or replacement — and why.", icon: "checklist" },
  { title: "Explain the scope", body: "What needs doing, what doesn't, and what could change once work starts.", icon: "layers" },
  { title: "Plan the replacement", body: "Where replacement is right: system, preparation, installation and finishing.", icon: "calendar" },
];

/* ------------------------------------------------------------------ */
/* Roof types                                                          */
/* ------------------------------------------------------------------ */

export const rrRoofTypes: { key: "flat" | "villa" | "commercial" | "equipment"; title: string; points: string[] }[] = [
  {
    key: "flat",
    title: "Flat roofs",
    points: ["Waterproofing failure", "Drainage and ponding", "Surface deterioration", "Penetrations"],
  },
  {
    key: "villa",
    title: "Villa roofs",
    points: ["Heat exposure on large open roofs", "Waterproofing and existing layers", "Roof access", "Drainage"],
  },
  {
    key: "commercial",
    title: "Commercial roofs",
    points: ["Larger surface areas", "Equipment penetrations", "Keeping the business running", "Phased work where appropriate"],
  },
  {
    key: "equipment",
    title: "Roofs with equipment",
    points: ["AC units and supports", "Pipes and vents", "Solar equipment where present", "Access during works"],
  },
];

/* ------------------------------------------------------------------ */
/* Roofing systems (confirmed by the business)                         */
/* ------------------------------------------------------------------ */

export interface RrSystem {
  title: string;
  icon: RrIconName;
  suited: string;
  advantages: string;
  considerations: string;
}

export const rrSystems: RrSystem[] = [
  {
    title: "Bituminous membrane systems",
    icon: "layers",
    suited: "Flat concrete roofs needing a full new waterproofing layer.",
    advantages: "A continuous, durable sheet layer with overlapping, sealed joints.",
    considerations: "Needs a sound, dry, prepared base and careful detailing at walls, drains and penetrations. Usually needs a protective or reflective top layer in strong sun.",
  },
  {
    title: "Liquid-applied waterproofing",
    icon: "waterproof",
    suited: "Roofs with many penetrations, complex shapes or details, and some restoration projects.",
    advantages: "Seamless coverage that follows the shape of the roof and wraps around details.",
    considerations: "Performance depends on surface preparation, correct thickness and curing conditions — important in Dammam heat.",
  },
  {
    title: "Roof insulation",
    icon: "insulation",
    suited: "Replacements where the existing insulation is wet or damaged, or where the roof gets very hot below.",
    advantages: "Reduces heat moving from the roof into the rooms below.",
    considerations: "Must stay dry to work, so it's planned together with the waterproofing.",
  },
  {
    title: "Protective & heat-reflective coatings",
    icon: "sun",
    suited: "Topping new systems, and restoring roofs whose waterproofing is still sound.",
    advantages: "Shields the layers below from UV and can lower roof surface temperature.",
    considerations: "A coating isn't a substitute for failed waterproofing, and it needs periodic renewal.",
  },
];

export const rrSelectionFactors = [
  "Existing roof structure",
  "Property type",
  "Roof design and details",
  "Heat exposure",
  "Waterproofing requirements",
  "Drainage",
  "Budget",
  "Maintenance expectations",
  "Compatibility with existing layers",
];

/* ------------------------------------------------------------------ */
/* Replacement process                                                 */
/* ------------------------------------------------------------------ */

export const rrProcess = [
  { title: "Inspection", body: "Condition, sources and scope confirmed on the roof." },
  { title: "Scope confirmation", body: "What will be removed, installed and finished — agreed in writing." },
  { title: "Site preparation", body: "Access, material staging and equipment arrangements." },
  { title: "Protecting surrounding areas", body: "Walls, equipment, drains and areas below protected." },
  { title: "Removal where required", body: "Failed or damaged layers taken off — only as far as needed." },
  { title: "Surface preparation", body: "Cleaning, drying and levelling the base for the new system." },
  { title: "Substrate repair", body: "Damaged areas of the base repaired where found." },
  { title: "System installation", body: "Waterproofing, insulation and protective layers as specified." },
  { title: "Drainage & details", body: "Drains, upstands, edges and penetrations detailed." },
  { title: "Finishing", body: "Protective or reflective top layer and final surface." },
  { title: "Cleanup", body: "Debris and old material removed from site." },
  { title: "Final inspection", body: "Walk-through of the finished roof with you." },
];

/* ------------------------------------------------------------------ */
/* Hidden layers revealed                                              */
/* ------------------------------------------------------------------ */

export const rrHiddenFindings = [
  { label: "Wet materials", body: "Screed or insulation holding water from years of slow leaks." },
  { label: "Deteriorated substrate", body: "Weak or crumbling areas in the base that need repair first." },
  { label: "Previous repair layers", body: "Patches and coatings laid over each other, sometimes incompatible." },
  { label: "Poor detailing", body: "Junctions and penetrations that were never properly sealed." },
  { label: "Failed waterproofing", body: "An older membrane that has split or lost adhesion." },
  { label: "Drainage problems", body: "Falls that run away from the drains, or drains set too high." },
];

/* ------------------------------------------------------------------ */
/* Cost factors                                                        */
/* ------------------------------------------------------------------ */

export interface RrCostFactor {
  key: string;
  label: string;
  simple: string;
  involved: string;
  weight: number;
}

export const rrCostFactors: RrCostFactor[] = [
  { key: "size", label: "Roof size", simple: "Small roof area", involved: "Large roof area", weight: 3 },
  { key: "removal", label: "Removal", simple: "Little or no removal", involved: "Several old layers to strip", weight: 3 },
  { key: "condition", label: "Base condition", simple: "Sound, dry base", involved: "Wet or damaged substrate to repair", weight: 3 },
  { key: "system", label: "System", simple: "Single waterproofing layer", involved: "Waterproofing + insulation + protection", weight: 2 },
  { key: "drainage", label: "Drainage", simple: "Drains working", involved: "Drainage modifications needed", weight: 2 },
  { key: "access", label: "Access & height", simple: "Easy access", involved: "Difficult access or height", weight: 2 },
  { key: "details", label: "Details & equipment", simple: "Few penetrations", involved: "Many units, pipes and upstands", weight: 2 },
  { key: "waste", label: "Waste removal", simple: "Little debris", involved: "Large volume of old material", weight: 1 },
];

/* ------------------------------------------------------------------ */
/* Replacement journey (conceptual, ready for real photos)             */
/* ------------------------------------------------------------------ */

export interface RrJourneyStage {
  label: string;
  caption: string;
  image?: { src: string; alt: string; width: number; height: number };
}

export const rrJourney: RrJourneyStage[] = [
  { label: "Existing roof", caption: "Worn surface, patched areas, ponding near the drain." },
  { label: "Removal", caption: "Failed layers removed down to a sound base." },
  { label: "Preparation", caption: "Base repaired, cleaned, dried and primed; falls corrected." },
  { label: "New system", caption: "Insulation and waterproofing installed and detailed at edges and drains." },
  { label: "Finished roof", caption: "Protective, heat-reflective finish. Water runs to the drain." },
];

/* ------------------------------------------------------------------ */
/* Checklist and questions                                             */
/* ------------------------------------------------------------------ */

export const rrChecklist = [
  "Clear accessible roof areas if asked to",
  "Secure loose items on the roof and terrace",
  "Discuss access to AC units and other equipment",
  "Protect fragile indoor items if vibration is expected",
  "Confirm how the team will reach the roof",
  "Ask about working hours",
  "Ask how debris will be handled",
  "Ask how water entry will be controlled during the works",
];

export const rrQuestions = [
  { q: "Does my roof actually need replacement?", why: "A clear answer should explain why repair or restoration isn't enough." },
  { q: "What is causing the current leak or damage?", why: "Replacing a roof doesn't help if the cause is a drain, a pipe or the AC." },
  { q: "What parts of the existing roof will be removed?", why: "This affects cost, time and what you're actually paying for." },
  { q: "What waterproofing system will be used?", why: "And why it suits your roof, rather than being the default." },
  { q: "How will drainage be handled?", why: "A new roof with the same drainage problems may fail the same way." },
  { q: "What happens if hidden damage is discovered?", why: "Agree up front how changes to scope are communicated and priced." },
  { q: "What exactly is included in the scope?", why: "Details, edges, penetrations, finishing and cleanup should all be clear." },
];

/* ------------------------------------------------------------------ */
/* Request form options                                                */
/* ------------------------------------------------------------------ */

export const rrPropertyTypes = ["Villa", "House", "Apartment building", "Shop / office", "Warehouse / workshop", "Other"];
export const rrProblems = ["Roof leak", "Repeated leaks", "Ceiling stains", "Ponding water", "Cracked surface", "Old / worn roof", "Not sure"];
export const rrDurations = ["Just noticed", "A few weeks", "A few months", "More than a year"];
export const rrRepairedBefore = ["No", "Once", "Several times", "Not sure"];

/* ------------------------------------------------------------------ */
/* FAQ                                                                 */
/* ------------------------------------------------------------------ */

export const rrFaqs: { q: string; a: string }[] = [
  {
    q: "How do I know if my roof needs replacement?",
    a: "Replacement is usually considered when damage is widespread, repeated repairs aren't stopping the leaks, the waterproofing has failed across much of the roof, or the system has deteriorated beyond practical repair. Only an inspection can confirm it.",
  },
  {
    q: "Does a roof leak always mean replacement?",
    a: "No. Many leaks come from a single failed detail, a blocked drain, a penetration or a local waterproofing failure, and can be repaired. Replacement makes sense when the problem is roof-wide.",
  },
  {
    q: "How much does roof replacement cost in Dammam?",
    a: "It depends on roof size, how much has to be removed, the condition of the base, the system chosen, drainage changes, access and waste removal. We don't publish fixed prices because two roofs of the same size can need very different work — an inspection and defined scope give you a real figure.",
  },
  {
    q: "How long does roof replacement take?",
    a: "It depends on the roof's size, the system, how much removal and repair is needed, access, material availability and weather. A realistic timeline is given once the scope is defined.",
  },
  {
    q: "Can you replace only part of a roof?",
    a: "Sometimes. If damage is confined to one area and the rest of the system is sound, a partial replacement can work — as long as the new section is properly joined to the existing waterproofing.",
  },
  {
    q: "What causes repeated roof leaks?",
    a: "Usually repairs that treat the symptom rather than the source, waterproofing that has failed more widely than it looks, drainage problems, or poorly detailed junctions and penetrations.",
  },
  {
    q: "Is waterproofing included in roof replacement?",
    a: "Yes. On a flat roof, the waterproofing is the core of the replacement. The system used — bituminous membrane or liquid-applied — is chosen to suit the roof.",
  },
  {
    q: "Should I replace roof insulation at the same time?",
    a: "If the existing insulation is wet, damaged or missing, replacement is the natural time to deal with it, since the roof is already open. Whether to upgrade it depends on the existing assembly and the scope.",
  },
  {
    q: "What happens if hidden damage is found?",
    a: "It's shown to you and explained, and any change to scope is agreed before extra work goes ahead. Wet layers and damaged substrate are common findings once old materials come off.",
  },
  {
    q: "Can roof drainage problems cause leaks?",
    a: "Yes. Water that sits on a roof finds its way into weak points and speeds up wear. Drains and falls should be checked as part of any repair or replacement.",
  },
  {
    q: "Can a damaged flat roof be repaired instead of replaced?",
    a: "Often, yes — when damage is localized and the waterproofing is generally sound. Restoration with a liquid-applied system or protective coating can also extend a roof's life in some cases.",
  },
  {
    q: "How do I prepare my property for roof replacement?",
    a: "Clear accessible roof areas if asked, secure loose items, plan access to AC equipment, protect fragile items indoors, and agree access, working hours, debris handling and how water entry will be controlled during the works.",
  },
  {
    q: "What happens to the old roofing materials?",
    a: "Removed material is cleared from the roof and taken off site as part of the project. How this is handled should be included in the agreed scope.",
  },
  {
    q: "Can roof replacement be done during hot weather?",
    a: "Yes, but heat affects how some materials are applied and cure, so working hours and methods are planned around it. This is part of choosing and installing a system for Dammam conditions.",
  },
  {
    q: "How often should a roof be inspected?",
    a: "A check once a year, and after heavy rain or a dust storm, helps catch blocked drains and failing details early. Also check after any work on rooftop equipment.",
  },
  {
    q: "What should I ask before approving a roof replacement quote?",
    a: "Whether replacement is really needed, what's causing the problem, what will be removed, which system will be used, how drainage is handled, how hidden damage is dealt with, and exactly what the scope includes.",
  },
  {
    q: "Can you inspect a roof before recommending replacement?",
    a: "Yes. Every recommendation starts with an inspection, and repair or restoration is recommended where it makes more sense than replacement.",
  },
  {
    q: "Do you provide residential and commercial roof replacement?",
    a: "Yes. We work on villas and houses as well as shops, offices, warehouses and other commercial buildings in Dammam.",
  },
];
