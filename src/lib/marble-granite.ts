// Content for the Marble & Granite Polishing page. Confirmed by the business:
// cleaning, honing / diamond grinding, polishing, restoration, stain treatment,
// chip and crack repair, sealing (a separate, optional service), floors,
// countertops, vanities, stairs and wall cladding, commercial projects, and a
// workmanship warranty (terms in each quote). No project photos yet, so there
// is no before/after gallery. No prices, durations, "permanent shine",
// guaranteed stain removal, ratings or certifications.

export type MgIconName =
  | "slab"
  | "sparkle"
  | "scratch"
  | "drop"
  | "etch"
  | "residue"
  | "clean"
  | "hone"
  | "polish"
  | "restore"
  | "seal"
  | "crack"
  | "floor"
  | "counter"
  | "stairs"
  | "wall"
  | "foot"
  | "home"
  | "building"
  | "camera"
  | "search"
  | "check"
  | "alert"
  | "arrow"
  | "phone"
  | "quote"
  | "replace";

/* ------------------------------------------------------------------ */
/* Quick answers                                                       */
/* ------------------------------------------------------------------ */

export const mgAnswers: { q: string; a: string }[] = [
  { q: "What is marble polishing?", a: "Refining the surface of marble with progressively finer abrasives and polishing compounds so it becomes smoother and more reflective. It usually follows cleaning, and honing where the surface is scratched or worn — it isn't the same as cleaning." },
  { q: "Can scratched marble be polished?", a: "Usually, yes. Light scratches are often removed by honing and polishing. Deeper scratches need more grinding, and some may only be reduced rather than fully removed." },
  { q: "Can granite be polished?", a: "Yes. Granite is harder than marble, so it wears more slowly and needs different abrasives and more effort to refine. The treatment depends on the granite and its condition." },
  { q: "What is the difference between honing and polishing?", a: "Honing levels the surface and removes scratches and wear, leaving a smooth, matt or satin finish. Polishing refines that honed surface further to bring up reflectivity." },
  { q: "How do I know if my stone needs polishing?", a: "If it looks dull or hazy, reflections have faded, traffic paths look different, light scratches show, or it feels rough — and normal cleaning doesn't help — it's worth an assessment." },
  { q: "Does polishing remove stains?", a: "Not always. Polishing works on the surface; stains that have soaked into the stone often need separate stain treatment, and results depend on the stain, its depth and the stone." },
];

export const mgSigns = [
  "The surface looks dull",
  "Reflections have disappeared",
  "Traffic paths look different from the rest",
  "Scratches are visible",
  "It feels rough underfoot",
  "Stains remain after normal cleaning",
  "Edges look worn",
  "The finish looks uneven",
  "An old polish has worn away",
  "The stone looks cloudy or hazy",
];

/* ------------------------------------------------------------------ */
/* Diagnostic                                                          */
/* ------------------------------------------------------------------ */

export type MgTreat = "clean" | "polish" | "hone" | "restore" | "stain" | "repair";

export const mgSymptoms: { label: string; treat: MgTreat }[] = [
  { label: "Dull surface", treat: "polish" },
  { label: "Light scratches", treat: "hone" },
  { label: "Deep scratches", treat: "restore" },
  { label: "Etching", treat: "hone" },
  { label: "Stains", treat: "stain" },
  { label: "Uneven shine", treat: "polish" },
  { label: "Rough surface", treat: "hone" },
  { label: "Heavy traffic wear", treat: "restore" },
  { label: "Water marks", treat: "clean" },
  { label: "Old coating / residue", treat: "clean" },
  { label: "Cracked or damaged stone", treat: "repair" },
  { label: "Not sure", treat: "polish" },
];

export const mgTreatResult: Record<MgTreat, { title: string; body: string }> = {
  clean: { title: "Cleaning + polishing assessment", body: "Residue, water marks and old coatings often come off with the right deep clean, which may be enough — or a polish may follow." },
  polish: { title: "Polishing assessment", body: "Dullness and uneven shine are usually surface-level and respond well to polishing, sometimes with light honing first." },
  hone: { title: "Honing + polishing assessment", body: "Scratches, etching and roughness usually need honing to level the surface before polishing can bring the finish back." },
  restore: { title: "Restoration assessment", body: "Deep scratches and heavy wear need grinding and progressive honing before polishing — a fuller restoration." },
  stain: { title: "Stain treatment assessment", body: "Stains need identifying first; some respond to targeted stain treatment, others only lighten. Polishing alone won't lift deep stains." },
  repair: { title: "Repair assessment first", body: "Cracks, chips and broken stone need repairing — polishing improves the surface but doesn't fix physical damage." },
};

export const mgTreatOrder: MgTreat[] = ["repair", "restore", "stain", "hone", "clean", "polish"];

/* ------------------------------------------------------------------ */
/* Marble vs granite                                                   */
/* ------------------------------------------------------------------ */

export const mgCompare: { aspect: string; marble: string; granite: string }[] = [
  { aspect: "What it is", marble: "Metamorphic stone, mainly calcite", granite: "Igneous stone, mainly quartz and feldspar" },
  { aspect: "Appearance", marble: "Soft veining, often light", granite: "Speckled or flecked, many colours" },
  { aspect: "Hardness", marble: "Softer — scratches more easily", granite: "Harder — more scratch resistant" },
  { aspect: "Common issues", marble: "Etching from acids, dullness, scratches", granite: "Dullness in traffic areas, stains in porous types" },
  { aspect: "Typical wear", marble: "Traffic lanes lose shine quickly", granite: "Wears slowly; edges chip" },
  { aspect: "Polishing approach", marble: "Gentler, progressive steps", granite: "Harder abrasives and more passes" },
  { aspect: "Maintenance", marble: "pH-neutral cleaners; wipe acids fast", granite: "pH-neutral cleaners; reseal porous types" },
  { aspect: "Common mistake", marble: "Acidic or vinegar cleaners", granite: "Assuming it never needs care" },
];

/* ------------------------------------------------------------------ */
/* Treatments                                                          */
/* ------------------------------------------------------------------ */

export const mgTreatments: { key: string; label: string; icon: MgIconName; for: string[]; body: string }[] = [
  { key: "clean", label: "Cleaning", icon: "clean", for: ["Dirt", "Residue", "Surface contamination", "Routine build-up"], body: "A deep clean with stone-safe products. It removes what's on the surface but doesn't change the finish itself." },
  { key: "hone", label: "Honing", icon: "hone", for: ["Worn surfaces", "Scratches", "Uneven finish", "Preparing for polish"], body: "Diamond abrasives level the surface and remove scratches, leaving a smooth matt or satin finish." },
  { key: "polish", label: "Polishing", icon: "polish", for: ["A refined, smoother look", "Bringing back reflectivity", "Finishing a honed surface"], body: "Finer abrasives and polishing compounds refine the surface so it reflects light again, where the stone suits it." },
  { key: "restore", label: "Restoration", icon: "restore", for: ["Deeper scratches", "Damaged areas", "Extensive wear", "Uneven or lippage between tiles"], body: "Grinding, honing and polishing together — sometimes with repairs — for stone that has lost much of its surface." },
  { key: "seal", label: "Sealing", icon: "seal", for: ["Porous stone", "Countertops", "Areas prone to spills"], body: "A separate, optional treatment that slows staining in porous stone. It isn't automatically part of every polishing job." },
];

/* ------------------------------------------------------------------ */
/* Surface stages                                                      */
/* ------------------------------------------------------------------ */

export const mgStages: { label: string; points: string[] }[] = [
  { label: "Before treatment", points: ["Dull surface", "Micro-scratches", "Residue", "Uneven reflection"] },
  { label: "Surface preparation", points: ["Cleaning", "Honing where required", "Progressive refinement"] },
  { label: "Polishing", points: ["Refined surface", "Improved reflectivity", "Smoother appearance"] },
  { label: "Final assessment", points: ["Inspect the finish", "Check edges", "Review consistency", "Discuss maintenance"] },
];

/* ------------------------------------------------------------------ */
/* Causes + problem types                                              */
/* ------------------------------------------------------------------ */

export const mgCauses = ["Heavy foot traffic", "Sand and abrasive dirt", "Unsuitable cleaning products", "Acidic spills and cleaners", "Soap or chemical residue", "Furniture being dragged", "Years of normal wear", "A poor previous treatment", "Surface contamination", "Micro-abrasion", "Loss of the original finish"];

export const mgProblemTypes: { icon: MgIconName; title: string; body: string }[] = [
  { icon: "etch", title: "Etching", body: "Acids such as juice, vinegar or some cleaners react with marble and leave dull marks that feel slightly rough. It's a change to the surface, not dirt." },
  { icon: "scratch", title: "Scratches", body: "Surface wear is shallow and usually hones out; deeper scratches you can catch with a fingernail need more grinding." },
  { icon: "drop", title: "Stains", body: "Oil, rust, tea or dyes soak into the stone. How they behave depends on the stone, the substance, how deep it went and whether it was sealed." },
  { icon: "residue", title: "Residue", body: "Build-up from soaps, waxes or the wrong cleaner can leave a haze or dull film that looks like worn stone." },
];

/* ------------------------------------------------------------------ */
/* Visualiser hotspots                                                 */
/* ------------------------------------------------------------------ */

export const mgSpots: { key: string; label: string; x: number; y: number; means: string; treat: string; need: string }[] = [
  { key: "dull", label: "Dullness", x: 22, y: 30, means: "The finish has worn or is covered by residue.", treat: "Cleaning, then polishing; honing if worn.", need: "A photo in natural light showing reflections." },
  { key: "scratch", label: "Scratch", x: 68, y: 24, means: "Physical wear in the surface.", treat: "Honing then polishing; deeper scratches need grinding.", need: "A close-up — and whether a fingernail catches." },
  { key: "etch", label: "Etching", x: 45, y: 58, means: "An acid has reacted with the stone (marble).", treat: "Honing and polishing the affected area.", need: "What was spilled, if known." },
  { key: "stain", label: "Stain", x: 80, y: 62, means: "Something has soaked into the stone.", treat: "Stain treatment; polishing alone may not lift it.", need: "The colour of the stain and what caused it." },
  { key: "path", label: "Traffic path", x: 50, y: 82, means: "Heavier wear where people walk most.", treat: "Honing and polishing the whole area for an even finish.", need: "A wide photo showing the path and surrounding floor." },
  { key: "edge", label: "Edge wear", x: 10, y: 74, means: "Chipped or rounded edges and corners.", treat: "Repair, then edge honing and polishing.", need: "A close-up of the edge." },
  { key: "uneven", label: "Uneven finish", x: 88, y: 18, means: "Patchy shine or lippage between tiles.", treat: "Grinding to level, then honing and polishing.", need: "A low-angle photo showing the patches." },
];

/* ------------------------------------------------------------------ */
/* Rooms + locations                                                   */
/* ------------------------------------------------------------------ */

export const mgRooms: { key: string; label: string; points: string[] }[] = [
  { key: "entrance", label: "Entrance / foyer", points: ["The heaviest foot traffic in the home", "Sand and grit act like sandpaper", "Dull paths from the door inwards", "Mats at the door make a real difference"] },
  { key: "living", label: "Living room", points: ["Marks from furniture being moved", "Traffic wear between seating and doors", "Uneven shine where rugs used to be"] },
  { key: "kitchen", label: "Kitchen", points: ["Spills and food residue", "Etching from acidic foods on marble", "Oil and stains on porous stone", "Cleaning products that are too harsh"] },
  { key: "bathroom", label: "Bathroom", points: ["Water marks and mineral deposits", "Soap and product residue", "Etching from some cleaners", "Moisture-related changes in appearance"] },
  { key: "hallway", label: "Hallways", points: ["Repeated foot traffic along one line", "Worn paths with shinier edges", "An uneven finish over the length"] },
  { key: "commercial", label: "Commercial areas", points: ["Much higher traffic", "Appearance expectations for visitors", "Maintenance planning", "Work scheduled to limit disruption"] },
];

export const mgLocations: { label: string; points: string[] }[] = [
  { label: "Marble floor", points: ["Foot traffic and grit", "Slip considerations for the finish chosen", "Moving furniture", "Cleaning routine", "Wear patterns"] },
  { label: "Granite floor", points: ["Slower wear but dull traffic lanes", "Harder to refine", "Edges and grout lines"] },
  { label: "Kitchen countertop", points: ["Spills and food stains", "Etching on marble tops", "Edge condition", "Sealing for porous stone"] },
  { label: "Bathroom countertop", points: ["Water and soap residue", "Cosmetic stains", "Around taps and basins"] },
  { label: "Vanity", points: ["Small, detailed areas", "Edges and cut-outs", "Product spills"] },
  { label: "Wall cladding", points: ["Usually less wear", "Access at height", "Consistency across panels"] },
  { label: "Staircase", points: ["Worn treads and nosings", "Edge wear and chips", "Consistency between steps", "Safety — avoiding an over-slippery finish"] },
  { label: "Reception area", points: ["First impressions", "High traffic", "Planned maintenance"] },
  { label: "Commercial flooring", points: ["Large areas", "Consistency", "Work around opening hours"] },
  { label: "Other", points: ["Send photos and tell us where the stone is"] },
];

/* ------------------------------------------------------------------ */
/* Process, limits, replace tool                                       */
/* ------------------------------------------------------------------ */

export const mgProcess: { title: string; body: string; icon: MgIconName }[] = [
  { title: "Surface assessment", body: "Stone type, finish, condition, damage and previous treatments.", icon: "search" },
  { title: "Preparation", body: "Move light furniture, protect skirting and adjoining surfaces.", icon: "home" },
  { title: "Cleaning", body: "Remove dirt, residue and old coatings.", icon: "clean" },
  { title: "Surface refinement", body: "Grinding and honing where scratches or wear need it; repairs if agreed.", icon: "hone" },
  { title: "Polishing", body: "Progressive polishing to suit the stone and the finish you want.", icon: "polish" },
  { title: "Edges & details", body: "Edges, corners, transitions and hard-to-reach areas.", icon: "slab" },
  { title: "Final inspection", body: "Check consistency and appearance with you.", icon: "check" },
  { title: "Maintenance guidance", body: "How to clean and care for the stone — and sealing, if chosen.", icon: "seal" },
];

export const mgCanRestore = ["Dull finishes", "Surface wear", "Many scratches", "Many etch marks", "Surface residue", "Uneven appearance", "Traffic lanes"];
export const mgNeedsMore = ["Deep cracks", "Broken stone", "Severe chips", "Missing pieces", "Loose or hollow tiles", "Problems in the substrate", "Extensive damage"];

export const mgReplaceQs = [
  "Is the stone structurally intact?",
  "Is the problem mainly appearance?",
  "Are the scratches mostly surface-level?",
  "Is the stone still right for the space?",
  "Is the damage localised rather than everywhere?",
];

/* ------------------------------------------------------------------ */
/* Cost + estimator                                                    */
/* ------------------------------------------------------------------ */

export const mgCostFactors = ["Total area (m²)", "Stone type", "Surface condition", "Existing finish", "Depth of scratches", "Stains and etching", "Level of restoration", "Edges and corners", "Stairs", "Access", "Furniture to move", "Residential or commercial", "Sealing or repairs"];

export const mgEstStone = ["Marble", "Granite", "Unsure"];
export const mgEstArea = ["Small", "Medium", "Large", "Multiple rooms"];
export const mgEstCondition = ["Mostly dull", "Scratched", "Stained", "Uneven", "Heavy wear", "Significant damage"];
export const mgEstLocation = ["Floor", "Countertop", "Stairs", "Wall", "Commercial area"];

/* ------------------------------------------------------------------ */
/* Care + mistakes                                                     */
/* ------------------------------------------------------------------ */

export const mgCare = [
  "Use pH-neutral cleaners made for stone",
  "Avoid vinegar, lemon and acidic or bleach-based cleaners",
  "Wipe spills promptly, especially on marble",
  "Put mats at entrances to catch sand",
  "Lift furniture rather than dragging it",
  "Use felt pads under chair and table legs",
  "Dust-mop regularly so grit doesn't scratch",
  "Book an assessment when the shine starts to fade",
];

export const mgMistakes: { title: string; body: string }[] = [
  { title: "Treating every stone the same", body: "Marble and granite need different abrasives and steps." },
  { title: "Using unsuitable cleaning products", body: "Acidic or harsh cleaners etch marble and leave residue." },
  { title: "Polishing without preparation", body: "Polishing over scratches just makes shiny scratches." },
  { title: "Ignoring scratches and etching first", body: "They need honing out before the polish." },
  { title: "Expecting polishing to fix structural damage", body: "Cracks and chips need repair." },
  { title: "Choosing only by how shiny it looks", body: "The right finish depends on the stone, the space and safety — a mirror shine isn't right everywhere." },
];

/* ------------------------------------------------------------------ */
/* Form                                                                */
/* ------------------------------------------------------------------ */

export const mgFormProperty = ["Villa", "Apartment", "Office", "Hotel / showroom", "Restaurant", "Other"];
export const mgFormStone = ["Marble", "Granite", "Not sure"];
export const mgFormProblem = ["Dull", "Scratched", "Stained", "Etched", "Uneven", "Damaged", "Not sure"];

/* ------------------------------------------------------------------ */
/* FAQ                                                                 */
/* ------------------------------------------------------------------ */

export const mgFaqs: { q: string; a: string }[] = [
  { q: "How much does marble polishing cost in Dammam?", a: "It depends on the area, stone type, condition and how much honing or restoration is needed. We assess the stone — photos help — and quote before starting." },
  { q: "How long does marble polishing take?", a: "It depends on the area, the condition and the number of steps. A single room is very different from a whole villa; we'll give you an idea when we quote." },
  { q: "Can scratched marble be polished?", a: "Usually. Light scratches hone out before polishing; deep ones need grinding and may be reduced rather than fully removed." },
  { q: "Can granite be polished?", a: "Yes. Granite is harder, so it takes different abrasives and more passes, but dull granite can usually be brought back." },
  { q: "What is the difference between marble polishing and honing?", a: "Honing levels the surface and removes scratches, leaving a matt or satin finish. Polishing refines it further for reflectivity." },
  { q: "Can polishing remove stains?", a: "Not always. Surface marks may go, but stains that have soaked in usually need separate stain treatment, and some only lighten." },
  { q: "Can polishing remove etching?", a: "Usually, yes — etch marks are surface damage that honing and polishing can remove, though deep etching takes more work." },
  { q: "Does every marble floor need polishing?", a: "No. Sometimes a proper deep clean or removing residue is enough. Honed (matt) floors may be kept honed by choice." },
  { q: "How often should marble be polished?", a: "There's no fixed interval — it depends on traffic, cleaning and care. Entrances may need attention sooner than bedrooms." },
  { q: "Can you polish marble countertops?", a: "Yes — kitchen and bathroom countertops and vanities, including edges." },
  { q: "Can polished stone become dull again?", a: "Yes. Foot traffic, grit and the wrong cleaners wear the finish over time. Good care slows it down." },
  { q: "Can damaged marble be restored?", a: "Often. We repair chips and cracks and restore the surface, but broken or loose stone may need replacing." },
  { q: "Is sealing included with polishing?", a: "No — sealing is a separate, optional service. We'll tell you whether your stone would benefit from it." },
  { q: "Should I send photos before requesting an assessment?", a: "Yes, it helps. Send a wide photo, a close-up of the problem and one at a low angle to show the shine." },
];
