// Content for the Handyman Services page. Confirmed by the business:
// installing curtains, blinds, shelves, mirrors, décor and TV wall mounts;
// furniture assembly; minor repairs and adjustments (doors, drawers, cabinet
// hinges, wall patching, silicone); minor plumbing and electrical swaps (taps,
// shower heads, light fittings, socket / switch covers); rental move-in /
// move-out work; office and commercial work; customer-supplied items; and a
// workmanship warranty (terms in each quote). No prices, hourly rates, time
// estimates, same-day claims or ratings.

export type HmIconName =
  | "install"
  | "assemble"
  | "repair"
  | "adjust"
  | "maintain"
  | "utility"
  | "curtain"
  | "shelf"
  | "mirror"
  | "frame"
  | "tv"
  | "hook"
  | "sofa"
  | "desk"
  | "cabinet"
  | "wall"
  | "seal"
  | "door"
  | "drawer"
  | "tap"
  | "bulb"
  | "socket"
  | "home"
  | "building"
  | "key"
  | "camera"
  | "search"
  | "plus"
  | "minus"
  | "check"
  | "alert"
  | "arrow"
  | "phone"
  | "pin";

export type HmCat = "install" | "assemble" | "repair" | "adjust" | "utility" | "maintain";
export type HmRoom = "living" | "bedroom" | "kitchen" | "bathroom" | "entry" | "office";

export interface HmTask {
  id: string;
  label: string;
  verb: string;
  cat: HmCat;
  icon: HmIconName;
  rooms: HmRoom[];
  useful: string;
  keywords: string;
}

export const hmCats: { key: HmCat; label: string; icon: HmIconName }[] = [
  { key: "install", label: "Install", icon: "install" },
  { key: "assemble", label: "Assemble", icon: "assemble" },
  { key: "repair", label: "Repair", icon: "repair" },
  { key: "adjust", label: "Adjust", icon: "adjust" },
  { key: "utility", label: "Small plumbing & electrical", icon: "utility" },
  { key: "maintain", label: "Maintain", icon: "maintain" },
];

export const hmTasks: HmTask[] = [
  { id: "curtains", label: "Curtain rods & tracks", verb: "Install", cat: "install", icon: "curtain", rooms: ["living", "bedroom", "office"], useful: "Curtains bought but the rods or tracks still need fitting.", keywords: "curtain rod track drape" },
  { id: "blinds", label: "Blinds", verb: "Install", cat: "install", icon: "curtain", rooms: ["living", "bedroom", "kitchen", "office"], useful: "Roller, Venetian or blackout blinds to fit.", keywords: "blind roller venetian blackout" },
  { id: "shelves", label: "Shelves", verb: "Install", cat: "install", icon: "shelf", rooms: ["living", "bedroom", "kitchen", "office"], useful: "Floating or bracket shelves fixed level and secure.", keywords: "shelf shelves floating bracket" },
  { id: "mirror", label: "Mirrors", verb: "Mount", cat: "install", icon: "mirror", rooms: ["living", "bedroom", "bathroom", "entry"], useful: "Wall mirrors hung safely for their weight.", keywords: "mirror hang mount" },
  { id: "decor", label: "Pictures & wall décor", verb: "Hang", cat: "install", icon: "frame", rooms: ["living", "bedroom", "entry", "office"], useful: "Frames, art and décor hung straight and level.", keywords: "picture frame art decor hang wall" },
  { id: "tv", label: "TV wall mount", verb: "Mount", cat: "install", icon: "tv", rooms: ["living", "bedroom", "office"], useful: "A TV bracket fixed to suit the wall and the screen.", keywords: "tv television bracket mount" },
  { id: "accessories", label: "Hooks, towel rails & accessories", verb: "Fit", cat: "install", icon: "hook", rooms: ["bathroom", "entry", "kitchen", "bedroom"], useful: "Towel rails, hooks, holders and small accessories.", keywords: "hook towel rail holder accessory bathroom" },
  { id: "furniture", label: "Furniture", verb: "Assemble", cat: "assemble", icon: "sofa", rooms: ["living", "bedroom", "office"], useful: "Beds, wardrobes, TV units, tables and flat-pack items.", keywords: "furniture assemble flat pack bed wardrobe tv unit table" },
  { id: "office-furniture", label: "Office furniture", verb: "Assemble", cat: "assemble", icon: "desk", rooms: ["office"], useful: "Desks, chairs and storage for home or work offices.", keywords: "desk chair office furniture" },
  { id: "cabinets-assemble", label: "Cabinets & storage", verb: "Assemble", cat: "assemble", icon: "cabinet", rooms: ["kitchen", "bathroom", "bedroom", "entry"], useful: "Flat-pack cabinets, shoe cabinets and storage units.", keywords: "cabinet storage shoe flat pack" },
  { id: "wall-fix", label: "Wall holes & marks", verb: "Repair", cat: "repair", icon: "wall", rooms: ["living", "bedroom", "entry", "office"], useful: "Old fixing holes, small dents and marks patched and touched up.", keywords: "wall hole dent patch touch up mark" },
  { id: "silicone", label: "Silicone & sealant", verb: "Renew", cat: "repair", icon: "seal", rooms: ["bathroom", "kitchen"], useful: "Mouldy or failed silicone around baths, basins and worktops.", keywords: "silicone sealant caulk mould bath sink" },
  { id: "cabinet-repair", label: "Cabinet doors & hinges", verb: "Repair", cat: "repair", icon: "cabinet", rooms: ["kitchen", "bathroom", "bedroom"], useful: "Loose, dropped or broken cabinet hinges and handles.", keywords: "cabinet hinge handle loose door kitchen" },
  { id: "door-hardware", label: "Door handles & locks", verb: "Replace", cat: "repair", icon: "door", rooms: ["bedroom", "bathroom", "entry", "office"], useful: "Worn handles, latches and simple locks swapped.", keywords: "door handle lock latch knob" },
  { id: "door-adjust", label: "Sticking doors", verb: "Adjust", cat: "adjust", icon: "door", rooms: ["bedroom", "bathroom", "entry", "office", "living"], useful: "A door that rubs, drops or won't latch.", keywords: "door stick rub adjust align close" },
  { id: "drawers", label: "Drawers & runners", verb: "Adjust", cat: "adjust", icon: "drawer", rooms: ["kitchen", "bedroom", "office"], useful: "Drawers that stick, sag or don't close.", keywords: "drawer runner slide stick" },
  { id: "cabinet-adjust", label: "Cabinet alignment", verb: "Adjust", cat: "adjust", icon: "cabinet", rooms: ["kitchen", "bathroom"], useful: "Uneven cabinet doors realigned.", keywords: "cabinet align uneven gap" },
  { id: "hardware", label: "Loose hardware", verb: "Tighten", cat: "adjust", icon: "adjust", rooms: ["kitchen", "bedroom", "bathroom", "living", "entry", "office"], useful: "Wobbly handles, rails and fittings secured.", keywords: "loose handle tighten wobbly hardware" },
  { id: "tap", label: "Tap or mixer swap", verb: "Replace", cat: "utility", icon: "tap", rooms: ["kitchen", "bathroom"], useful: "A like-for-like tap or mixer replacement.", keywords: "tap mixer faucet replace drip" },
  { id: "shower", label: "Shower head & hose", verb: "Replace", cat: "utility", icon: "tap", rooms: ["bathroom"], useful: "Shower heads, hoses and holders swapped.", keywords: "shower head hose" },
  { id: "light", label: "Light fitting swap", verb: "Replace", cat: "utility", icon: "bulb", rooms: ["living", "bedroom", "kitchen", "bathroom", "entry", "office"], useful: "Swapping an existing light fitting at the same point.", keywords: "light fitting lamp fixture bulb" },
  { id: "socket", label: "Socket & switch covers", verb: "Replace", cat: "utility", icon: "socket", rooms: ["living", "bedroom", "kitchen", "office", "entry"], useful: "Cracked or old socket and switch plates replaced.", keywords: "socket switch plate cover outlet" },
  { id: "touchups", label: "General touch-ups", verb: "Maintain", cat: "maintain", icon: "maintain", rooms: ["living", "bedroom", "kitchen", "bathroom", "entry", "office"], useful: "The small list of things that keep getting put off.", keywords: "touch up small maintenance general odd jobs" },
];

export const hmRooms: { key: HmRoom; label: string }[] = [
  { key: "living", label: "Living room" },
  { key: "kitchen", label: "Kitchen" },
  { key: "bedroom", label: "Bedroom" },
  { key: "bathroom", label: "Bathroom" },
  { key: "entry", label: "Entrance" },
  { key: "office", label: "Office" },
];

/* ------------------------------------------------------------------ */
/* Board (hero)                                                        */
/* ------------------------------------------------------------------ */

export const hmBoard = ["curtains", "cabinet-adjust", "mirror", "furniture", "tv", "door-adjust"];

/* ------------------------------------------------------------------ */
/* Describe flow                                                       */
/* ------------------------------------------------------------------ */

export const hmIntents = ["Install something", "Fix something", "Assemble something", "Adjust something", "Replace something", "Not sure"];
export const hmWhere = ["Living room", "Bedroom", "Kitchen", "Bathroom", "Entrance", "Outdoor area", "Office", "Other"];

/* ------------------------------------------------------------------ */
/* New home setup                                                      */
/* ------------------------------------------------------------------ */

export const hmSetup: { id: string; label: string; unit: string }[] = [
  { id: "furniture", label: "Furniture", unit: "item" },
  { id: "curtains", label: "Curtains & blinds", unit: "window" },
  { id: "decor", label: "Wall décor", unit: "piece" },
  { id: "shelves", label: "Shelves", unit: "shelf" },
  { id: "mirror", label: "Mirrors", unit: "mirror" },
  { id: "wall-fix", label: "Minor repairs", unit: "repair" },
];

export const hmMoveIn = ["Assemble furniture", "Install curtains and blinds", "Hang mirrors", "Fit shelves", "Adjust doors", "Finish small odd jobs"];
export const hmMoveOut = ["Take down selected fixtures", "Patch wall marks and holes", "Fix small maintenance issues", "Disassemble furniture for the move"];

/* ------------------------------------------------------------------ */
/* Property, scenarios, matrix, surfaces                               */
/* ------------------------------------------------------------------ */

export const hmProperties: { key: string; label: string; icon: HmIconName; body: string; examples: string[] }[] = [
  { key: "home", label: "Home", icon: "home", body: "The everyday list of household jobs.", examples: ["Curtains and shelves", "A wobbly cabinet door", "New furniture", "A dripping tap"] },
  { key: "office", label: "Office", icon: "desk", body: "Setting up and keeping a workspace tidy.", examples: ["Desks and storage", "Whiteboards and TVs", "Door and lock fixes", "Light fitting swaps"] },
  { key: "rental", label: "Rental", icon: "key", body: "Getting a unit ready between tenants.", examples: ["Patching wall marks", "Replacing worn handles", "Renewing silicone", "Adjusting doors and drawers"] },
  { key: "commercial", label: "Commercial", icon: "building", body: "Recurring small jobs across larger premises.", examples: ["Fixture swaps", "Signage and shelving", "Door hardware", "Planned maintenance visits"] },
];

export const hmScenarios: { title: string; body: string }[] = [
  { title: "New apartment", body: "Furniture to build, curtains to hang, a TV to mount and shelves to fit — in the first week." },
  { title: "Villa refresh", body: "A few rooms that each need a handful of small repairs and installations." },
  { title: "Rental turnover", body: "Patching, silicone, handles and doors so the next tenant moves into a tidy unit." },
  { title: "Office setup", body: "Desks, storage, screens and whiteboards ready before the team arrives." },
  { title: "The household list", body: "Everything you've been meaning to sort out, finally done." },
];

export const hmPutOff = ["Loose cabinet hardware", "Curtains still in the box", "A shelf that never went up", "Flat-pack furniture in the corner", "The door that sticks", "Wall marks from old fixings", "The mirror leaning on the wall", "A dated light fitting"];

export const hmMatrix: { task: string; install: boolean; assemble: boolean; repair: boolean; adjust: boolean }[] = [
  { task: "Furniture", install: false, assemble: true, repair: true, adjust: true },
  { task: "Curtains & blinds", install: true, assemble: false, repair: false, adjust: true },
  { task: "Shelves", install: true, assemble: false, repair: false, adjust: true },
  { task: "Doors", install: false, assemble: false, repair: true, adjust: true },
  { task: "Cabinets", install: true, assemble: true, repair: true, adjust: true },
  { task: "Mirrors & décor", install: true, assemble: false, repair: false, adjust: false },
  { task: "Taps & light fittings", install: true, assemble: false, repair: false, adjust: false },
];

export const hmSurfaces: { label: string; note: string }[] = [
  { label: "Concrete", note: "Strong but needs the right drill and fixings; we check for hidden cables and pipes first." },
  { label: "Block / masonry", note: "Hollow blocks need fixings designed for them, especially for heavy items." },
  { label: "Gypsum / drywall", note: "Heavier items need proper cavity fixings or fixing into the frame behind." },
  { label: "Tile", note: "Drilled carefully to avoid cracking, then fixed into the wall behind." },
  { label: "Wood", note: "Straightforward for most items with the right screws." },
  { label: "Metal", note: "Needs suitable fixings; sometimes better to fix to an adjacent surface." },
  { label: "Not sure", note: "Send a photo — we'll check the wall on the visit." },
];

/* ------------------------------------------------------------------ */
/* Workflow, quality, boundaries, cost                                 */
/* ------------------------------------------------------------------ */

export const hmWorkflow = ["Your request", "Task review", "Scope confirmation", "Visit / work", "Task check", "Completed job list"];

export const hmQuality = ["Items securely fixed", "Doors and drawers work smoothly", "Visible hardware checked", "Alignment and level reviewed", "Work area tidied", "You inspect each task with us"];

export const hmSpecialist = ["Major structural work", "New circuits and significant electrical work", "Major plumbing repairs", "Gas work", "Major roofing", "Complex AC / HVAC work", "Specialist waterproofing", "Significant masonry rebuilding"];

export const hmCostFactors = ["Number of tasks", "Complexity", "Time required", "Materials", "Item size and weight", "Installation requirements", "Access", "Wall / surface type", "Number of rooms", "Whether a specialist is also needed"];

/* ------------------------------------------------------------------ */
/* Form                                                                */
/* ------------------------------------------------------------------ */

export const hmFormProperty = ["Villa", "Apartment", "Office", "Rental unit", "Commercial", "Other"];
export const hmPhotoTips = ["Room photo", "Close-up of the problem", "Product box or label", "Damaged area", "Existing hardware"];

/* ------------------------------------------------------------------ */
/* Answers + FAQ                                                       */
/* ------------------------------------------------------------------ */

export const hmAnswers: { q: string; a: string }[] = [
  { q: "What does a handyman do?", a: "Takes care of the smaller installation, assembly, adjustment and repair jobs around a property — the tasks that don't need a full trade or renovation, but do need doing properly." },
  { q: "What kind of jobs can a handyman handle?", a: "Curtains, blinds, shelves, mirrors and TV mounts; furniture assembly; door, drawer and cabinet adjustments; wall patching and silicone; and small swaps like taps, shower heads, light fittings and socket covers." },
  { q: "Can I combine multiple handyman jobs into one visit?", a: "Yes. Send the whole list so we can review the tasks together and plan the visit around them." },
  { q: "Can I send photos before booking?", a: "Yes — photos of each job help us understand the scope. Some tasks still need a look on site before an exact quote." },
  { q: "Is handyman service suitable for rental properties?", a: "Yes. Move-in and move-out lists — patching, handles, silicone, doors and fixtures — are a common use." },
  { q: "When do I need a specialist instead of a handyman?", a: "For structural work, new electrical circuits, major plumbing, gas, roofing, complex AC or specialist waterproofing. We'll tell you if part of your list needs one." },
  { q: "How much do handyman services cost in Dammam?", a: "It depends on the number and complexity of tasks, materials, access and the surfaces involved. Send your list and we'll quote it as a whole." },
  { q: "Can you assemble furniture I already purchased?", a: "Yes — and install curtains, shelves, mirrors and fittings you've bought, where the item and its hardware are suitable." },
];

export const hmFaqs: { q: string; a: string }[] = [
  { q: "What does a handyman service include?", a: "Installing curtains, blinds, shelves, mirrors, décor and TV mounts; assembling furniture; adjusting doors, drawers and cabinets; small wall repairs and silicone; and minor swaps like taps, shower heads, light fittings and socket covers." },
  { q: "Can I combine several jobs?", a: "Yes. Send the complete list so the work can be reviewed and planned together in one visit where possible." },
  { q: "Can you assemble furniture?", a: "Yes — beds, wardrobes, TV units, desks, cabinets and other flat-pack furniture." },
  { q: "Can you install curtains?", a: "Yes — curtain rods, tracks and blinds, fixed to suit the wall or ceiling." },
  { q: "Can you hang mirrors or shelves?", a: "Yes. We use fixings that suit the item's weight and the wall it's going on." },
  { q: "Can I send photos first?", a: "Yes, it helps. Photos of each task, the room and any product boxes let us prepare — some jobs still need checking on site." },
  { q: "Do you provide handyman services for villas?", a: "Yes — villas, apartments, offices and commercial premises." },
  { q: "Do you work with rental properties?", a: "Yes. We handle move-in and move-out lists and small repairs between tenants." },
  { q: "Can I supply the materials?", a: "Yes. We can install items you've bought, as long as they and their hardware suit the job — or we can advise on what to buy." },
  { q: "What if my job requires a specialist?", a: "We'll tell you. Major electrical, plumbing, gas, structural or HVAC work goes to the right specialist service." },
  { q: "How much do handyman services cost in Dammam?", a: "It depends on the tasks, their complexity, materials and access. We quote your whole list after reviewing it." },
  { q: "Can multiple rooms be handled in one visit?", a: "Often, yes — depending on how many tasks there are and what they involve. Listing everything helps us plan." },
];
