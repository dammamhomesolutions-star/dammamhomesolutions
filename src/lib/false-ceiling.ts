// Content for the False Ceiling Installation page. Confirmed by the business:
// gypsum board ceilings (flat, cove, multi-level), suspended / tile-grid
// ceilings, moisture-resistant board, decorative and feature designs, lighting
// and electrical integration, AC diffuser and access-panel coordination, old
// ceiling removal and replacement, joint finishing and painting, design help,
// commercial projects and a workmanship warranty (terms in each quote). No
// prices, fixed drops, durations, "seamless" guarantees, ratings or
// engineering claims.

export type FcIconName =
  | "slab"
  | "frame"
  | "board"
  | "cavity"
  | "downlight"
  | "cove"
  | "diffuser"
  | "access"
  | "levels"
  | "height"
  | "grid"
  | "feature"
  | "flat"
  | "pendant"
  | "drop"
  | "repair"
  | "replace"
  | "paint"
  | "curtain"
  | "wall"
  | "home"
  | "building"
  | "camera"
  | "check"
  | "alert"
  | "arrow"
  | "phone"
  | "quote"
  | "plan"
  | "search";

/* ------------------------------------------------------------------ */
/* Quick answers                                                       */
/* ------------------------------------------------------------------ */

export const fcAnswers: { q: string; a: string }[] = [
  { q: "What is a false ceiling?", a: "A second, finished ceiling installed below the structural one — usually gypsum board or a suspended grid — used to create a clean look and bring lighting and services together." },
  { q: "Why install a false ceiling?", a: "For the design, for integrated lighting such as downlights and cove light, and to tidy up services like AC ducts and cables — depending on the room and system." },
  { q: "How much height does a false ceiling take?", a: "There's no single figure. It depends on the system, the framing, light fittings, AC and services above it, and the existing ceiling." },
  { q: "Can lights be installed in a false ceiling?", a: "Yes, when the fittings, the ceiling system and the electrical layout are planned together before the ceiling is closed." },
  { q: "Can AC vents be integrated into a false ceiling?", a: "Often, yes — but diffuser positions and access for maintenance need deciding before the ceiling is finished." },
  { q: "Does a false ceiling hide moisture problems?", a: "It shouldn't. An active leak or damp needs finding and fixing first, or it will stain and damage the new ceiling." },
  { q: "What affects false ceiling cost?", a: "Room size, ceiling type, design complexity, material, height, lighting and AC integration, access panels, removal of an old ceiling and finishing." },
];

/* ------------------------------------------------------------------ */
/* Project selector                                                    */
/* ------------------------------------------------------------------ */

export const fcProjects: { label: string; icon: FcIconName; note: string }[] = [
  { label: "New false ceiling", icon: "board", note: "We start from the existing ceiling height, services and the design you want, then plan levels, lighting and access before framing." },
  { label: "Modify existing ceiling", icon: "levels", note: "If the existing ceiling is sound, adding a cove, new level or new light positions may be possible without replacing it all." },
  { label: "Ceiling replacement", icon: "replace", note: "We remove the old ceiling, check what's above it, and install a new system — useful when the old one is damaged, sagging or outdated." },
  { label: "Lighting integration", icon: "downlight", note: "Downlights, cove LEDs and pendant points are planned with the ceiling layout, and we install them as part of the job." },
  { label: "AC / service integration", icon: "diffuser", note: "We coordinate diffuser and return positions with your AC, keep access to units and valves, and add access panels where needed." },
  { label: "Repair / damage", icon: "repair", note: "Cracks, stains or sagging areas — we check the cause first. Smaller repairs are covered on our ceiling & gypsum repair page." },
  { label: "Not sure", icon: "camera", note: "Send photos of the ceiling and room and we'll suggest the options." },
];

/* ------------------------------------------------------------------ */
/* Systems                                                             */
/* ------------------------------------------------------------------ */

export type FcStyle = "flat" | "cove" | "multi" | "grid" | "feature" | "modern";

export const fcSystems: { name: string; body: string; style: FcStyle }[] = [
  { name: "Gypsum board ceiling", body: "Smooth, painted finish; very flexible for shapes and lighting.", style: "flat" },
  { name: "Suspended / tile grid", body: "Lay-in tiles on a grid — easy access to services above.", style: "grid" },
  { name: "Simple flat ceiling", body: "One clean level, often with downlights.", style: "flat" },
  { name: "Cove / perimeter", body: "A dropped border with indirect light around the room.", style: "cove" },
  { name: "Multi-level", body: "Layered levels that zone a room or frame a feature.", style: "multi" },
  { name: "Decorative / feature", body: "A statement shape over a dining table or entrance.", style: "feature" },
  { name: "Moisture-resistant board", body: "For bathrooms and kitchens, with ventilation.", style: "flat" },
  { name: "Commercial ceiling", body: "Functional, clean and service-accessible.", style: "grid" },
];

export const fcCompare: { type: string; use: string; consider: string }[] = [
  { type: "Gypsum board", use: "Homes and offices", consider: "Finish and design flexibility" },
  { type: "Suspended / grid", use: "Commercial spaces", consider: "Access to services" },
  { type: "Simple flat", use: "Clean, modern interiors", consider: "Minimal visual complexity" },
  { type: "Cove / perimeter", use: "Decorative interiors", consider: "Lighting integration" },
  { type: "Multi-level", use: "Feature spaces", consider: "Height and design complexity" },
  { type: "Decorative", use: "Feature areas", consider: "Design and finishing" },
];

/* ------------------------------------------------------------------ */
/* Cross-section                                                       */
/* ------------------------------------------------------------------ */

export type FcPart = "slab" | "frame" | "cavity" | "board" | "light" | "cove" | "diffuser" | "access";

export const fcParts: { key: FcPart; label: string; body: string }[] = [
  { key: "slab", label: "Structural ceiling", body: "The concrete slab or existing ceiling the new system hangs from. Its condition and any moisture are checked first." },
  { key: "frame", label: "Suspension / framing", body: "Hangers and metal channels that carry the boards, set level to the planned ceiling height." },
  { key: "cavity", label: "Ceiling cavity", body: "The space between the structural and false ceiling — where ducts, cables and light housings sit." },
  { key: "board", label: "Ceiling board / panel", body: "Gypsum board or grid tiles that form the finished surface you see." },
  { key: "light", label: "Recessed light", body: "Downlights need depth in the cavity and should be positioned before the ceiling is finished." },
  { key: "cove", label: "Cove light", body: "An LED strip hidden in a perimeter step, washing light across the ceiling." },
  { key: "diffuser", label: "AC diffuser", body: "Where conditioned air enters. Its position is coordinated with the lights and the layout." },
  { key: "access", label: "Access panel", body: "A removable panel so AC units, valves or junctions above can still be reached." },
];

/* ------------------------------------------------------------------ */
/* Rooms                                                               */
/* ------------------------------------------------------------------ */

export const fcRooms: { key: string; label: string; points: string[] }[] = [
  { key: "living", label: "Living room", points: ["A feature level or cove over the seating area", "Layered lighting: downlights plus indirect light", "Keep proportions right for the ceiling height", "Coordinate with split or ducted AC", "Curtain tracks at the windows"] },
  { key: "bedroom", label: "Bedroom", points: ["Simpler designs feel calmer", "Indirect cove light rather than bright downlights over the bed", "Place lights and AC so neither blows or shines on the bed"] },
  { key: "dining", label: "Dining room", points: ["A feature shape centred on the table, not the room", "A pendant or chandelier point planned in", "Dimmable lighting"] },
  { key: "kitchen", label: "Kitchen", points: ["Moisture-resistant board near cooking areas", "Bright, even task lighting over worktops", "Access to the extractor duct"] },
  { key: "bathroom", label: "Bathroom", points: ["Moisture-resistant board and good ventilation", "Suitable light fittings", "Access to water heaters or valves above"] },
  { key: "hallway", label: "Hallway", points: ["A dropped ceiling can hide ducts running between rooms", "Evenly spaced downlights", "Access panels for AC units often located here"] },
  { key: "entrance", label: "Entrance", points: ["A statement feature or a chandelier in double-height spaces", "First impressions — clean edges matter", "Access at height for installation and maintenance"] },
  { key: "office", label: "Home office", points: ["Even, glare-free light over the desk", "Simple design", "Quiet AC diffuser placement"] },
  { key: "retail", label: "Retail", points: ["Track or display lighting", "Grid ceilings for easy service access", "Consistent look across the shop"] },
  { key: "restaurant", label: "Restaurant", points: ["Atmosphere lighting by zone", "Kitchen areas need suitable materials", "Work planned around opening hours"] },
  { key: "commercial", label: "Office / reception", points: ["Lighting layout for workstations", "Service access through grid tiles or panels", "Clean, modular design", "Easy maintenance"] },
];

/* ------------------------------------------------------------------ */
/* Height + lighting                                                   */
/* ------------------------------------------------------------------ */

export const fcHeightFactors = ["Existing ceiling height", "The design", "Light fitting depth", "AC ducts and diffusers", "Concealed services", "Framing system", "Access requirements"];

export type FcHeightMode = "simple" | "lighting" | "services";
export const fcHeightModes: { key: FcHeightMode; label: string; body: string; drop: number }[] = [
  { key: "simple", label: "Simple ceiling", body: "Just enough cavity for the framing and flat fittings.", drop: 18 },
  { key: "lighting", label: "Lighting-focused", body: "Deeper where downlights and cove details need housing depth.", drop: 30 },
  { key: "services", label: "Service-integrated", body: "Deepest where ducts, diffusers and AC units run above.", drop: 48 },
];

export type FcLightMode = "general" | "recessed" | "cove" | "feature" | "mixed";
export const fcLightModes: { key: FcLightMode; label: string; body: string }[] = [
  { key: "general", label: "General lighting", body: "One or two central fixtures for even, simple light." },
  { key: "recessed", label: "Recessed lighting", body: "Downlights in a grid or pattern — clean ceiling, even light." },
  { key: "cove", label: "Cove / indirect", body: "Hidden LED in a perimeter step, bouncing soft light off the ceiling." },
  { key: "feature", label: "Feature lighting", body: "A pendant or chandelier as the focal point of a feature shape." },
  { key: "mixed", label: "Mixed lighting", body: "Downlights, cove and a feature together, switched separately for different moods." },
];

/* ------------------------------------------------------------------ */
/* Design styles                                                       */
/* ------------------------------------------------------------------ */

export const fcStyles: { key: FcStyle; label: string; body: string }[] = [
  { key: "flat", label: "Simple & minimal", body: "A clean flat ceiling — calm and easy to coordinate." },
  { key: "modern", label: "Modern", body: "Simple geometry with integrated lighting lines." },
  { key: "cove", label: "Cove / indirect", body: "A perimeter detail that hides soft indirect light." },
  { key: "multi", label: "Multi-level", body: "Layered levels that add depth and zone a space." },
  { key: "feature", label: "Feature ceiling", body: "A statement shape over a specific area." },
  { key: "grid", label: "Commercial", body: "Functional, clean and service-accessible." },
];

export const fcSimpleVsMulti: { simple: string; multi: string }[] = [
  { simple: "Cleaner appearance", multi: "More decorative" },
  { simple: "Less visual complexity", multi: "More design complexity" },
  { simple: "Easier to coordinate", multi: "Needs more planning" },
  { simple: "Works in most rooms", multi: "Suits feature areas" },
  { simple: "Simpler lighting layout", multi: "More chances for integrated light" },
];

/* ------------------------------------------------------------------ */
/* Repair tool + assessment                                            */
/* ------------------------------------------------------------------ */

export const fcConditions: { label: string; note: string }[] = [
  { label: "New room", note: "A clean start — plan the design, lighting, AC and access together." },
  { label: "Existing ceiling looks outdated", note: "If it's sound, modifying it — a new cove, level or lighting — may be worth assessing before replacing it all." },
  { label: "Cracked / damaged", note: "Small cracks can often be repaired; widespread cracking may point to framing or movement issues worth checking first." },
  { label: "Water-damaged", note: "Find and fix the source of water first. Damaged board usually needs replacing, not painting over." },
  { label: "Sagging", note: "Sagging needs inspecting — it can mean moisture or support problems. Avoid the area underneath until it's checked." },
  { label: "Need new lighting", note: "New light points can often be added into an existing gypsum ceiling, with patching around them." },
  { label: "Need AC / service access", note: "An access panel can usually be cut in and framed neatly." },
  { label: "Complete redesign", note: "Removing the old ceiling and installing a new system gives a clean slate." },
  { label: "Not sure", note: "Send photos and we'll suggest whether repair, modification or replacement makes sense." },
];

export const fcAssess = ["Existing ceiling condition", "Ceiling height", "Signs of moisture", "Existing services", "Lighting points", "AC units and ducts", "Access needs", "Wall condition", "Room dimensions", "The final ceiling level"];

/* ------------------------------------------------------------------ */
/* Process, finish, problems, cost                                     */
/* ------------------------------------------------------------------ */

export const fcProcess: { title: string; body: string; icon: FcIconName }[] = [
  { title: "Site assessment", body: "Room, existing ceiling, height and services.", icon: "search" },
  { title: "Design & layout", body: "Levels, lighting, AC and access planned together.", icon: "plan" },
  { title: "Prepare the area", body: "Protect floors and furniture, clear the space.", icon: "home" },
  { title: "Install the framing", body: "Suspension or framing for the chosen system.", icon: "frame" },
  { title: "Fit boards / panels", body: "Gypsum board or grid tiles fixed in place.", icon: "board" },
  { title: "Integrate services", body: "Lights, diffusers and access panels cut in and fitted.", icon: "downlight" },
  { title: "Finish the surface", body: "Joints, edges, primer and paint.", icon: "paint" },
  { title: "Final inspection", body: "Alignment, finish and lighting checked with you.", icon: "check" },
];

export const fcFinish = ["Joint treatment", "Surface smoothness", "Corners and edges", "Paint preparation", "Transitions between levels", "Light reveals"];
export const fcPaintSteps = ["Joint finishing", "Sanding", "Primer", "Paint"];
export const fcMaintenance = ["AC units and filters", "Valves and junctions", "Inspection points", "Cleaning light fittings", "Repainting", "Future changes"];

export const fcProblems: { title: string; causes: string[] }[] = [
  { title: "Cracks", causes: ["Movement", "Joint issues", "Surface condition", "Installation"] },
  { title: "Sagging", causes: ["Material or system issue", "Moisture", "Installation", "Support concerns"] },
  { title: "Water stains", causes: ["A leak", "Condensation from AC", "Other moisture"] },
  { title: "Uneven ceiling", causes: ["Framing alignment", "Existing structure", "Finishing"] },
  { title: "Peeling paint", causes: ["Moisture", "Surface preparation", "Finish failure"] },
];

export const fcMistakes = [
  "Ignoring the existing ceiling height",
  "Closing off access to services",
  "Not coordinating the lighting",
  "Not coordinating the AC",
  "Ignoring moisture",
  "A design too complex for the room",
  "Forgetting curtain tracks",
  "No maintenance access",
  "Poor alignment",
  "Poor finishing",
  "Covering problems instead of fixing them",
  "Materials that don't suit the room",
];

export const fcPro = ["Framing or suspension", "Large areas", "High ceilings", "Integrated lighting", "AC and service coordination", "Moisture or damage", "Multiple levels", "Commercial spaces"];

export const fcCostFactors: { key: string; label: string; weight: number }[] = [
  { key: "area", label: "Large room or several rooms", weight: 3 },
  { key: "multi", label: "Multi-level or feature design", weight: 3 },
  { key: "cove", label: "Cove / indirect lighting", weight: 2 },
  { key: "lights", label: "Many downlights / new light points", weight: 2 },
  { key: "ac", label: "AC diffusers and access panels", weight: 1 },
  { key: "moist", label: "Moisture-resistant board", weight: 1 },
  { key: "remove", label: "Removing an old ceiling", weight: 2 },
  { key: "height", label: "High or double-height ceiling", weight: 2 },
  { key: "paint", label: "Painting and finishing", weight: 1 },
  { key: "grid", label: "Commercial grid ceiling", weight: 2 },
];

/* ------------------------------------------------------------------ */
/* Planner + form                                                      */
/* ------------------------------------------------------------------ */

export const fcPlanProperty = ["Villa", "Apartment", "Office", "Shop", "Restaurant", "Other"];
export const fcPlanRoom = ["Living room", "Bedroom", "Office", "Dining", "Hallway", "Commercial area", "Other"];
export const fcPlanProject = ["New false ceiling", "Replace existing", "Modify ceiling", "Repair", "Add lighting", "Not sure"];
export const fcPlanDesign = ["Simple", "Modern", "Cove", "Multi-level", "Feature", "Not sure"];
export const fcPlanServices = ["Lighting", "AC / vents", "Access panel", "None", "Not sure"];

export const fcChecklist = [
  "Room decided",
  "Approximate dimensions",
  "Existing ceiling condition noted",
  "Moisture concerns mentioned",
  "Lighting preferences considered",
  "AC vents identified",
  "Curtain tracks considered",
  "Furniture and access considered",
  "Design style chosen",
  "Photos ready",
];

/* ------------------------------------------------------------------ */
/* FAQ                                                                 */
/* ------------------------------------------------------------------ */

export const fcFaqs: { q: string; a: string }[] = [
  { q: "What is a false ceiling?", a: "A finished ceiling installed below the structural one, usually gypsum board or a suspended grid, used for design and to integrate lighting and services." },
  { q: "Do you install gypsum false ceilings?", a: "Yes — flat, cove, multi-level and feature gypsum ceilings, including moisture-resistant board for wet areas." },
  { q: "What types of false ceilings do you install?", a: "Gypsum board ceilings in various designs, suspended / tile-grid ceilings, moisture-resistant ceilings and decorative feature ceilings." },
  { q: "Can recessed lights be installed in a false ceiling?", a: "Yes. We plan the positions with the layout and install downlights and cove lighting as part of the job." },
  { q: "Can AC vents be integrated into the ceiling?", a: "Yes. We coordinate diffuser and return positions with your AC and fit access panels where units or valves need reaching." },
  { q: "How much ceiling height is needed?", a: "It depends on the system, the light fittings, AC and services above it and the existing ceiling — we measure and advise for your room rather than quote one figure." },
  { q: "Can a false ceiling be installed over an existing ceiling?", a: "Often, yes, if the existing ceiling is sound and there's enough height. If it's damaged or sagging, it's better removed first." },
  { q: "Can you replace a damaged false ceiling?", a: "Yes. We remove the old ceiling, check the cause of any damage, and install a new one." },
  { q: "Can false ceilings be used in bathrooms or kitchens?", a: "Yes, with moisture-resistant board and suitable ventilation. Standard gypsum isn't suitable for every wet area." },
  { q: "Can you install a false ceiling in a villa?", a: "Yes — living rooms, bedrooms, majlis, entrances and double-height spaces." },
  { q: "Can you install commercial false ceilings?", a: "Yes — offices, shops, restaurants and reception areas, including suspended grid ceilings." },
  { q: "Can I send ceiling photos before booking?", a: "Yes — photos of the full ceiling, room, walls, lights, AC vents and any damage help us plan. We'll still assess on site before an exact quote." },
  { q: "Do you help with ceiling design?", a: "Yes. We help plan the levels, lighting and layout to suit the room and its height." },
  { q: "How long does false ceiling installation take?", a: "It depends on the area, design, lighting and finishing. We'll give you an idea when we quote." },
  { q: "Can curtain tracks be integrated with a false ceiling?", a: "Yes. A curtain pelmet or recess can be built into the ceiling, or support added for a ceiling-mounted track — best planned before the ceiling is closed." },
  { q: "Can you install lighting at the same time?", a: "Yes. We install the downlights, cove LEDs and pendant points as part of the ceiling work." },
];
