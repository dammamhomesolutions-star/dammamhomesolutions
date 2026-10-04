// Content for the Outdoor & Boundary Wall Repair page. Confirmed by the
// business: crack and plaster / render repair, exterior painting and coating,
// exterior waterproofing coating, coping / cap repair, partial rebuilding
// (block work), commercial and compound work, referral to a structural
// engineer where needed, and a workmanship warranty (terms in each quote).
// No project photos yet, so no before/after gallery. No structural-safety
// guarantees, prices, durations, ratings or "permanent" claims.

export type BwIconName =
  | "wall"
  | "crack"
  | "paint"
  | "plaster"
  | "drop"
  | "coping"
  | "loose"
  | "lean"
  | "corner"
  | "gate"
  | "ground"
  | "block"
  | "brick"
  | "stone"
  | "sun"
  | "camera"
  | "search"
  | "home"
  | "building"
  | "map"
  | "check"
  | "alert"
  | "arrow"
  | "phone"
  | "quote"
  | "tools"
  | "rebuild";

/* ------------------------------------------------------------------ */
/* Answer blocks                                                       */
/* ------------------------------------------------------------------ */

export const bwAnswers: { q: string; a: string }[] = [
  { q: "What is boundary wall repair?", a: "Repairing the cracks, damaged plaster or render, worn finishes, coping and damaged sections of a perimeter wall — and dealing with what caused the damage where that can be identified." },
  { q: "What causes outdoor wall cracks?", a: "Shrinkage, heat movement, moisture, settlement, impact, failed plaster, corroding fixings or movement around gates and openings. The pattern, width and whether it returns all matter." },
  { q: "Can a cracked boundary wall be repaired?", a: "Often, yes. Surface and plaster cracks are commonly repaired. Wide, recurring or displaced cracks need assessing first, and some sections may need rebuilding." },
  { q: "How do I know if a wall crack is serious?", a: "Be cautious if it's wide, growing, recurring, horizontal, stepped, or if the wall leans or sections have moved. Those need an on-site assessment, not a patch." },
  { q: "Why does exterior paint peel?", a: "Weather and heat, poor preparation, moisture behind the paint, incompatible coatings or a breaking-down surface underneath. Repainting over it rarely fixes it." },
  { q: "Does moisture damage exterior walls?", a: "Yes — repeated wetting from rain, irrigation, leaks or poor drainage can stain, loosen plaster and deteriorate the lower wall over time." },
  { q: "Should I repair cracks before painting?", a: "Yes. Cracks and loose plaster should be repaired and the surface prepared, or they'll show through and the paint will fail early." },
  { q: "When should a wall be repaired instead of rebuilt?", a: "When the masonry is sound and the damage is in the finish, plaster or limited areas. Leaning, displaced or badly deteriorated sections may need partial rebuilding." },
];

/* ------------------------------------------------------------------ */
/* Quick diagnostic                                                    */
/* ------------------------------------------------------------------ */

export const bwIssues: { label: string; icon: BwIconName; may: string[]; next: string; serious?: boolean }[] = [
  { label: "Cracks", icon: "crack", may: ["Surface shrinkage", "Plaster failure", "Heat movement", "Settlement or movement"], next: "Photograph the crack with something for scale; we'll assess width, pattern and whether it's recurring." },
  { label: "Peeling paint", icon: "paint", may: ["Normal coating failure", "Poor surface preparation", "Moisture", "Weather exposure", "Substrate problems"], next: "We check the surface underneath before recommending a repaint." },
  { label: "Damaged plaster", icon: "plaster", may: ["Hollow or loose render", "Impact damage", "Weathering", "Moisture behind it"], next: "Loose areas are tapped out and repaired with a compatible material." },
  { label: "Water marks", icon: "drop", may: ["Irrigation spray", "Rain run-off", "A leak nearby", "Poor drainage"], next: "Identify the water source before repairing the finish." },
  { label: "Damp-looking areas", icon: "drop", may: ["Rising ground moisture", "Splashback", "Plumbing leak", "Failed protection"], next: "Look at the ground, drainage and irrigation near the wall." },
  { label: "Broken coping", icon: "coping", may: ["Impact", "Weathering", "Water getting into the joints"], next: "Repair the top first so water stops getting into the wall." },
  { label: "Loose sections", icon: "loose", may: ["Detached render", "Failed mortar", "Masonry movement"], next: "Keep people away from the area and have it assessed.", serious: true },
  { label: "Wall leaning", icon: "lean", may: ["Foundation movement", "Soil or water problems", "Structural failure"], next: "Keep clear of the wall and arrange an assessment promptly — we can involve a structural engineer.", serious: true },
  { label: "Damaged corners", icon: "corner", may: ["Vehicle or impact damage", "Edge weathering", "Corroding fixings"], next: "Corners are rebuilt and re-plastered to a clean edge." },
  { label: "Gate / wall damage", icon: "gate", may: ["Movement around the opening", "Impact from the gate", "Loose fixings"], next: "We check the wall around the opening and any loose sections." },
  { label: "Not sure", icon: "camera", may: ["Several possible causes"], next: "Send a wide photo and close-ups and we'll take a look." },
];

/* ------------------------------------------------------------------ */
/* Condition selector                                                  */
/* ------------------------------------------------------------------ */

export const bwGroups: { group: string; items: string[] }[] = [
  { group: "Crack", items: ["Hairline", "Visible", "Wide", "Recurring", "Around openings", "Diagonal", "Horizontal", "Vertical", "Not sure"] },
  { group: "Surface", items: ["Peeling paint", "Bubbling", "Discolouration", "Powdery surface", "Damaged render", "Exposed masonry"] },
  { group: "Moisture", items: ["Damp-looking patch", "Water staining", "Recurring discolouration", "Lower-wall deterioration"] },
  { group: "Structure", items: ["Leaning", "Displaced section", "Loose masonry", "Damaged coping", "Uncertain"] },
];

export const bwCollect: Record<string, string> = {
  Hairline: "A close-up with a coin or ruler for scale.",
  Visible: "A close-up with scale, and how long the crack is.",
  Wide: "Width with a ruler, and whether the sides are level with each other.",
  Recurring: "When it was last repaired and how quickly it came back.",
  "Around openings": "Photos of the gate or opening and both sides of the wall.",
  Diagonal: "A wide photo showing the whole crack path.",
  Horizontal: "A wide photo, and whether the wall above has moved.",
  Vertical: "Its full height and whether it goes through the wall.",
  "Peeling paint": "A close-up and a wide photo of the affected area.",
  Bubbling: "Whether the bubbles contain water or powder.",
  Discolouration: "Where it is — top, middle or near the ground.",
  "Powdery surface": "A close-up after brushing a hand across it.",
  "Damaged render": "Whether it sounds hollow when lightly tapped.",
  "Exposed masonry": "A photo of the exposed block or brick.",
  "Damp-looking patch": "Nearby irrigation, taps, drains or slopes.",
  "Water staining": "Where water might come from above or nearby.",
  "Recurring discolouration": "When it appears — after rain, irrigation or always.",
  "Lower-wall deterioration": "The ground and drainage at the base.",
  Leaning: "A photo from the end of the wall showing the lean. Keep clear of it.",
  "Displaced section": "Photos from both sides. Don't push or test it.",
  "Loose masonry": "A photo from a safe distance.",
  "Damaged coping": "A photo of the wall top if safely visible.",
  Uncertain: "Wide photos from both sides.",
  "Not sure": "Wide photos and close-ups.",
};

/* ------------------------------------------------------------------ */
/* Cross-section                                                       */
/* ------------------------------------------------------------------ */

export type BwLayer = "finish" | "paint" | "plaster" | "masonry" | "mortar" | "coping" | "base";

export const bwLayers: { key: BwLayer; label: string; problems: string[] }[] = [
  { key: "finish", label: "Exterior finish", problems: ["Fading", "Peeling", "Weathering", "Dust staining"] },
  { key: "paint", label: "Paint / coating", problems: ["Chalking", "Bubbling", "Poor adhesion", "Incompatible coatings"] },
  { key: "plaster", label: "Plaster / render", problems: ["Cracks", "Hollow or loose areas", "Detachment", "Flaking"] },
  { key: "masonry", label: "Masonry", problems: ["Cracking", "Displacement", "Deterioration", "Impact damage"] },
  { key: "mortar", label: "Mortar joints", problems: ["Eroded joints", "Stepped cracking", "Gaps letting water in"] },
  { key: "coping", label: "Coping / cap", problems: ["Broken sections", "Poor water shedding", "Open joints", "Water entry"] },
  { key: "base", label: "Base / ground", problems: ["Damp near the ground", "Splashback", "Pooled water", "Settlement"] },
];

/* ------------------------------------------------------------------ */
/* Crack types                                                         */
/* ------------------------------------------------------------------ */

export const bwCracks: { key: string; title: string; body: string }[] = [
  { key: "hairline", title: "Hairline cracks", body: "Fine surface cracks with many possible causes — often shrinkage or heat in the plaster. Usually repairable, but worth watching." },
  { key: "vertical", title: "Vertical cracks", body: "Their significance depends on location, width, whether they go through the wall and whether they return." },
  { key: "horizontal", title: "Horizontal cracks", body: "Shouldn't be dismissed — especially with leaning, bulging or other movement." },
  { key: "diagonal", title: "Diagonal / stepped", body: "Can come from different causes depending on the wall and where they are; stepped cracks follow mortar joints." },
  { key: "opening", title: "Around gates & openings", body: "Openings concentrate stress and movement, so cracks often start at their corners." },
  { key: "recurring", title: "Recurring cracks", body: "If a crack keeps coming back after patching, the cause hasn't been dealt with yet." },
];

export const bwPhotos = ["The full wall", "A close-up of the crack", "The surrounding area", "Both sides, where safely accessible", "Any nearby gate or opening", "The coping", "The lower wall", "The ground next to the wall"];

/* ------------------------------------------------------------------ */
/* Rebuild tool                                                        */
/* ------------------------------------------------------------------ */

export const bwRebuildInputs: { label: string; level: 0 | 1 | 2 }[] = [
  { label: "Surface damage", level: 0 },
  { label: "Cracked plaster", level: 0 },
  { label: "Damaged coping", level: 0 },
  { label: "Loose sections", level: 1 },
  { label: "Recurring cracks", level: 1 },
  { label: "Unknown condition", level: 1 },
  { label: "Displaced masonry", level: 2 },
  { label: "Leaning", level: 2 },
];

export const bwRebuildResults = [
  { title: "Surface repair may be appropriate", body: "For finish, plaster and coping issues where the wall behind is sound." },
  { title: "Further assessment recommended", body: "The pattern isn't clear enough from a list — we'll inspect before suggesting a scope." },
  { title: "Partial rebuilding may need consideration", body: "Displaced or leaning masonry may need sections rebuilt. Where structure is in question, we can involve a structural engineer." },
];

/* ------------------------------------------------------------------ */
/* Materials, paint                                                    */
/* ------------------------------------------------------------------ */

export const bwMaterials: { label: string; icon: BwIconName; note: string }[] = [
  { label: "Concrete block", icon: "block", note: "Very common for villa boundary walls in Dammam. Usually plastered and painted; cracks often follow block joints." },
  { label: "Brick", icon: "brick", note: "Mortar joints may need repointing; fair-faced brick is repaired to match rather than plastered over." },
  { label: "Rendered masonry", icon: "plaster", note: "Render must be compatible with the wall and bond properly — loose render is cut back to sound material." },
  { label: "Plastered masonry", icon: "plaster", note: "Cracked or hollow plaster is removed and replaced, then finished and coated." },
  { label: "Concrete", icon: "wall", note: "Cracks and spalling are assessed — exposed reinforcement needs particular attention." },
  { label: "Stone", icon: "stone", note: "Joints and stones are repaired to match the existing look." },
  { label: "Mixed materials", icon: "wall", note: "Where materials meet, movement differs and cracks often appear at the junction." },
  { label: "Not sure", icon: "camera", note: "A close-up photo of a damaged area usually shows what the wall is made of." },
];

export const bwPaintFails: { label: string; note: string }[] = [
  { label: "Peeling", note: "Adhesion has failed — often moisture, poor preparation or an incompatible coat. Loose paint must come off first." },
  { label: "Bubbling", note: "Often moisture or heat pushing the coating off the surface." },
  { label: "Fading", note: "Usually sun and age. If the surface is sound, a refresh may be enough." },
  { label: "Chalking", note: "A powdery surface from weathered paint; it needs cleaning and the right primer before recoating." },
  { label: "Cracking", note: "Can be the paint itself, or cracks in the plaster underneath showing through." },
  { label: "Patchy appearance", note: "Often old patch repairs or different paints; the surface needs evening out." },
  { label: "Staining", note: "Water, rust or dust run-off — find the source before repainting." },
];

/* ------------------------------------------------------------------ */
/* Map                                                                 */
/* ------------------------------------------------------------------ */

export type BwZone = "front" | "side" | "rear" | "gate" | "entrance" | "garden" | "service";
export const bwZones: { key: BwZone; label: string }[] = [
  { key: "front", label: "Front boundary" },
  { key: "side", label: "Side wall" },
  { key: "rear", label: "Rear boundary" },
  { key: "gate", label: "Gate area" },
  { key: "entrance", label: "Entrance" },
  { key: "garden", label: "Garden wall" },
  { key: "service", label: "Outdoor service area" },
];
export const bwZoneIssues = ["Cracks", "Paint damage", "Plaster damage", "Moisture", "Coping", "Impact damage"];

/* ------------------------------------------------------------------ */
/* Common problems                                                     */
/* ------------------------------------------------------------------ */

export const bwProblems: { see: string; may: string; assess: string }[] = [
  { see: "Cracks", may: "Shrinkage, movement, plaster failure", assess: "Width, pattern, recurrence" },
  { see: "Chipped plaster", may: "Impact or loose render", assess: "Whether surrounding plaster is hollow" },
  { see: "Peeling paint", may: "Coating failure or moisture", assess: "The surface underneath" },
  { see: "Water staining", may: "Run-off, irrigation, leaks", assess: "Where the water comes from" },
  { see: "Loose render", may: "Lost bond with the wall", assess: "How far the hollow area extends" },
  { see: "Damaged corners", may: "Impact or weathering", assess: "Masonry behind the corner" },
  { see: "Broken coping", may: "Weather or impact", assess: "Water entry into the wall" },
  { see: "Impact damage", may: "Vehicles or gates", assess: "Whether the masonry moved" },
  { see: "Surface discolouration", may: "Dust, damp or salts", assess: "Moisture source" },
  { see: "Recurring repairs", may: "An unresolved cause", assess: "Why it keeps failing" },
  { see: "Weathered finish", may: "Sun and age", assess: "Whether a refresh is enough" },
  { see: "Exposed masonry", may: "Lost plaster", assess: "Masonry condition" },
];

/* ------------------------------------------------------------------ */
/* Process                                                             */
/* ------------------------------------------------------------------ */

export const bwAssessment: { title: string; body: string }[] = [
  { title: "Understand the problem", body: "What you've noticed, when, and any previous repairs." },
  { title: "Inspect the wall", body: "Affected areas, both sides where accessible, the top and the ground." },
  { title: "Identify the scope", body: "Whether it looks surface-level or needs further assessment." },
  { title: "Recommend the work", body: "Surface, plaster or crack repair, coping, coating, partial rebuilding — or a structural engineer's view." },
  { title: "Prepare the surface", body: "Remove failed plaster and paint back to sound material." },
  { title: "Complete repairs", body: "Carry out the agreed scope with compatible materials." },
  { title: "Finish the surface", body: "Plaster finish, primer, paint or waterproof coating where included." },
  { title: "Final review", body: "Check the completed work with you." },
];

export const bwFlow: { label: string; body: string }[] = [
  { label: "Assess", body: "Find out what's damaged and why, before choosing a repair." },
  { label: "Prepare", body: "Cut back loose plaster, remove failed paint, clean the surface." },
  { label: "Repair", body: "Fill and bond cracks, re-plaster areas, repair coping and corners." },
  { label: "Restore", body: "Where needed, rebuild damaged block sections." },
  { label: "Finish", body: "Match the texture, prime and paint or apply a waterproof coating." },
  { label: "Inspect", body: "Review the finish and agree what to watch for." },
];

/* ------------------------------------------------------------------ */
/* Cost + estimator                                                    */
/* ------------------------------------------------------------------ */

export const bwCostFactors = ["Wall length", "Wall height", "Damage severity", "Repair depth", "Plaster / render condition", "Number of areas", "Coping condition", "Access", "Surface preparation", "Coating / finishing", "Multiple repair stages", "Residential or commercial"];

export const bwEstType = ["Boundary wall", "Garden wall", "Exterior building wall", "Entrance wall", "Other"];
export const bwEstSize = ["Small", "Medium", "Large", "Multiple sections"];
export const bwEstProblem = ["Cracks", "Plaster", "Paint", "Moisture", "Coping", "Multiple issues", "Not sure"];
export const bwEstCondition = ["Minor", "Moderate", "Significant", "Unknown"];

/* ------------------------------------------------------------------ */
/* Care + don'ts                                                       */
/* ------------------------------------------------------------------ */

export const bwCare = [
  "Check visible cracks every so often and note any change",
  "Deal with recurring damp before it spreads",
  "Keep an eye on drainage and pooled water near the wall",
  "Point irrigation away from walls",
  "Watch for damaged coping",
  "Repair failing finishes before deterioration spreads",
  "Avoid repeatedly patching damage that keeps returning",
  "Keep exterior coatings maintained",
];

export const bwDont = [
  "Repeatedly fill the same crack without asking why it returns",
  "Paint over peeling or flaking surfaces",
  "Cover moisture stains without finding the cause",
  "Use coatings that aren't compatible with the wall",
  "Ignore loose or displaced sections",
  "Attempt structural repairs without assessment",
  "Climb, prop or push a wall that may be unstable",
];

/* ------------------------------------------------------------------ */
/* Form                                                                */
/* ------------------------------------------------------------------ */

export const bwFormProperty = ["Villa", "Townhouse", "Apartment building", "Compound", "Commercial", "Other"];
export const bwFormIssue = ["Cracks", "Plaster", "Paint", "Moisture", "Coping", "Leaning / loose", "Not sure"];

/* ------------------------------------------------------------------ */
/* FAQ                                                                 */
/* ------------------------------------------------------------------ */

export const bwFaqs: { q: string; a: string }[] = [
  { q: "What causes cracks in boundary walls?", a: "Shrinkage, heat movement, moisture, settlement, impact and movement around gates are common causes. The crack's pattern, width and whether it returns help narrow it down." },
  { q: "Can small outdoor wall cracks be repaired?", a: "Usually, yes — small cracks in plaster are cut out, filled with a compatible repair material and finished. We check they aren't a sign of something bigger first." },
  { q: "When does a boundary wall crack need professional assessment?", a: "When it's wide, growing, recurring, horizontal or stepped, or the wall leans, bulges or has moved. Keep clear of unstable sections." },
  { q: "Can you repair damaged exterior plaster?", a: "Yes. Loose and cracked plaster is removed back to sound material, re-plastered with a compatible mix and finished to match." },
  { q: "Why does exterior wall paint keep peeling?", a: "Usually moisture, poor preparation, an incompatible coating or a weak surface underneath. Fixing the cause matters more than another coat." },
  { q: "Can moisture cause outdoor wall damage?", a: "Yes. Repeated wetting from irrigation, rain, leaks or poor drainage can stain walls, loosen plaster and deteriorate the base over time." },
  { q: "Can a damaged boundary wall be repaired without rebuilding it?", a: "Often. If the masonry is sound, plaster, crack, coping and finish repairs are usually enough." },
  { q: "When might part of a wall need rebuilding?", a: "When sections are leaning, displaced, loose or the blockwork is badly deteriorated. We rebuild sections, and involve a structural engineer where the structure is in question." },
  { q: "Can you repair cracks around a gate?", a: "Yes — we repair cracks and damaged masonry around gate openings and check for movement or loose sections." },
  { q: "What is wall coping and why does it matter?", a: "The cap along the top of the wall. It sheds rain away; when it cracks, water gets into the wall and speeds up deterioration." },
  { q: "How much does boundary wall repair cost in Dammam?", a: "It depends on the wall length and height, the damage, repair depth, coping, access and finishing. Photos help us scope it; we quote after assessing." },
  { q: "Do you repair before exterior painting?", a: "Yes. We repair cracks and plaster and prepare the surface, then paint or apply a waterproof coating." },
  { q: "Can I send photos for an assessment?", a: "Yes — a wide photo plus close-ups help. For anything that may be structural we'll still need to see it on site." },
  { q: "How long does outdoor wall repair take?", a: "It depends on the size of the wall, the repairs and the drying time between stages. We'll give you an idea when we quote." },
  { q: "Can recurring cracks simply be filled again?", a: "They can, but they'll likely return. It's better to find out why first — movement, moisture or a failed earlier repair." },
];
