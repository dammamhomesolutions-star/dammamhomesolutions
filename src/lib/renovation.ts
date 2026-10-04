// Content for the Home Renovation page (/home-renovation-dammam/).
// Confirmed scope: living areas, bedrooms, hallways, entrances, kitchens,
// bathrooms and outdoor/exterior areas; refresh through whole-home work;
// removal and non-structural layout changes; commercial (office/retail);
// electrical and plumbing work within the renovation; structural work is
// NOT carried out (engineer needed). Workmanship warranty — terms in quote.
// No prices, durations, project counts or real-project claims.

export type RnRoomKey = "entrance" | "living" | "dining" | "kitchen" | "bedroom" | "bathroom" | "hallway" | "outdoor" | "multiple";

export interface RnRoom {
  key: RnRoomKey;
  label: string;
  short: string;
  areas: string[];
  current: string[];
  scope: string[];
  vision: string[];
  note: string;
}

export const rnRooms: RnRoom[] = [
  {
    key: "entrance",
    label: "Entrance",
    short: "First impression",
    areas: ["Walls and paint", "Flooring", "Ceiling", "Lighting", "Main door and hardware", "Storage for shoes and coats"],
    current: ["Scuffed walls", "Dated lighting", "Nowhere to put things"],
    scope: ["Wall refresh", "Feature lighting", "Built-in storage"],
    vision: ["Welcoming", "Organised", "Consistent with the rest"],
    note: "A small space that sets the tone for the whole home — often a good place to start a phased renovation.",
  },
  {
    key: "living",
    label: "Living room",
    short: "Where the household gathers",
    areas: ["Walls", "Flooring", "Lighting", "Ceiling", "Feature wall or panelling", "Storage and TV wall", "Finishes"],
    current: ["Worn finishes", "Flat, uneven lighting", "Limited storage"],
    scope: ["Wall refresh", "Lighting", "Flooring", "Feature wall"],
    vision: ["Updated", "Coordinated", "Functional"],
    note: "Living rooms often combine several jobs — ceiling, lighting, walls and floor — so the order of work matters.",
  },
  {
    key: "dining",
    label: "Dining area",
    short: "Often open to the living room",
    areas: ["Walls", "Flooring", "Ceiling detail", "Pendant or feature lighting", "Display or storage units"],
    current: ["Doesn't match the living room", "Lighting in the wrong place"],
    scope: ["Matching finishes", "Pendant lighting", "Ceiling detail"],
    vision: ["Connected", "Defined", "Comfortable"],
    note: "When dining and living areas are open to each other, planning them together keeps finishes consistent.",
  },
  {
    key: "kitchen",
    label: "Kitchen",
    short: "The hardest-working room",
    areas: ["Cabinets — repair, refresh or replace", "Worktop surfaces", "Backsplash", "Lighting", "Flooring", "Walls", "Sink, tap and fixture changes"],
    current: ["Tired or damaged cabinets", "Stained backsplash", "Poor task lighting"],
    scope: ["Cabinet update", "New backsplash", "Under-cabinet lighting"],
    vision: ["Practical", "Easy to clean", "Brighter"],
    note: "Kitchen work often touches plumbing and electrical points; we handle those within the renovation scope.",
  },
  {
    key: "bedroom",
    label: "Bedroom",
    short: "Calm, storage, comfort",
    areas: ["Walls and wallpaper", "Flooring", "Wardrobes and storage", "Lighting", "Ceiling", "Finishes", "Layout improvements where practical"],
    current: ["Not enough storage", "Harsh lighting", "Dated finishes"],
    scope: ["Wardrobe update", "Soft lighting", "Wall finish"],
    vision: ["Calm", "Organised", "Restful"],
    note: "Bedrooms are often renovated one at a time while the rest of the home stays in use.",
  },
  {
    key: "bathroom",
    label: "Bathroom",
    short: "Surfaces, fixtures, storage",
    areas: ["Wall and floor tiles", "Fixtures — basin, WC, shower", "Lighting", "Storage and vanity", "Ceiling", "Surface repairs"],
    current: ["Cracked or dated tiles", "Old fixtures", "Mould-prone corners"],
    scope: ["Re-tiling", "Fixture replacement", "Vanity and storage"],
    vision: ["Clean", "Easy to maintain", "Fresh"],
    note: "Bathrooms are wet areas — the condition behind the tiles and any waterproofing needs checking before new finishes go on.",
  },
  {
    key: "hallway",
    label: "Hallway",
    short: "Connects every room",
    areas: ["Walls", "Flooring", "Ceiling and lighting", "Doors and frames", "Skirting and trims"],
    current: ["Marked walls", "Mismatched doors", "Dark corridor"],
    scope: ["Wall and trim refresh", "Door updates", "Lighting"],
    vision: ["Bright", "Consistent", "Tidy"],
    note: "Hallways tie rooms together; doors, trims and flooring here are often chosen to match the rest of the home.",
  },
  {
    key: "outdoor",
    label: "Outdoor area",
    short: "Walls, surfaces, exterior",
    areas: ["Boundary wall repair and finish", "Exterior wall refresh", "Outdoor surfaces", "Outdoor lighting", "Gate and entrance areas"],
    current: ["Faded, cracked boundary wall", "Worn outdoor surfaces", "Little lighting at night"],
    scope: ["Wall repair and refinish", "Surface repairs", "Outdoor lighting"],
    vision: ["Cared-for", "Usable after dark", "Weather-ready"],
    note: "Exterior surfaces face strong sun, heat and dust, so repair before refinishing is usually part of the scope.",
  },
  {
    key: "multiple",
    label: "Multiple rooms",
    short: "Several spaces together",
    areas: ["Coordinated finishes across rooms", "Flooring that runs through", "Consistent doors and lighting", "A sensible order of work room by room"],
    current: ["Several areas share the same problems", "Finishes don't match"],
    scope: ["Room-by-room plan", "Shared finishes", "Phased work"],
    vision: ["Consistent", "Planned", "Whole"],
    note: "Planning several rooms together lets finishes, materials and the order of work be decided once.",
  },
];

export interface RnGoal {
  key: string;
  label: string;
  line: string;
  detail: string;
  looksAt: string[];
  rooms: RnRoomKey[];
}

export const rnGoals: RnGoal[] = [
  { key: "modernize", label: "Modernize", line: "Update an outdated room or interior.", detail: "Modernising usually means replacing the elements that date a room most — lighting, flooring, wall finishes and ceiling details — while keeping what still works.", looksAt: ["Lighting and ceiling", "Wall finishes", "Flooring", "Doors and hardware"], rooms: ["living", "bedroom", "kitchen"] },
  { key: "repair", label: "Repair", line: "Fix worn, damaged or deteriorated areas.", detail: "If the room works but parts of it are damaged, repair may be all you need. We'll say so — renovation isn't the answer to every problem.", looksAt: ["Cracked or stained surfaces", "Damaged tiles or flooring", "Doors and cabinets", "Signs of moisture"], rooms: ["bathroom", "kitchen", "outdoor"] },
  { key: "function", label: "Improve function", line: "Make a room work better.", detail: "Better storage, better lighting where you actually work, and changes to how a room is arranged — within what the space and structure allow.", looksAt: ["Storage and built-ins", "Task lighting", "Socket and fixture positions", "Layout, where practical"], rooms: ["kitchen", "bedroom", "entrance"] },
  { key: "refresh", label: "Refresh", line: "Change finishes, appearance or selected elements.", detail: "A refresh changes how a room looks without rebuilding it — paint or wallpaper, lighting, hardware and a few selected upgrades.", looksAt: ["Paint or wallpaper", "Light fittings", "Hardware and accents", "Selected surfaces"], rooms: ["living", "bedroom", "hallway"] },
  { key: "reconfigure", label: "Reconfigure", line: "Change the arrangement, where the scope allows.", detail: "Removing old built-ins, moving storage or adjusting non-structural elements. Anything touching structure needs an engineer first — we don't carry out structural work.", looksAt: ["Old built-ins to remove", "Non-structural partitions", "Storage positions", "Lighting and socket layout"], rooms: ["living", "kitchen", "multiple"] },
  { key: "move-in", label: "Prepare for move-in", line: "Complete several improvements before you live there.", detail: "Before the furniture arrives is the easiest time to change floors, walls, ceilings and lighting — rooms are empty and work can follow a clear order.", looksAt: ["Walls and floors", "Lighting and fixtures", "Repairs from previous use", "Final clean and check"], rooms: ["multiple", "living", "bedroom"] },
  { key: "sale-rental", label: "Prepare for sale or rental", line: "Improve selected areas for presentation and use.", detail: "Repairing visible damage and refreshing tired surfaces so the property presents well and works properly for the next occupant.", looksAt: ["Visible damage", "Worn paint and surfaces", "Kitchen and bathroom condition", "Small functional issues"], rooms: ["kitchen", "bathroom", "multiple"] },
  { key: "whole-home", label: "Whole home", line: "Multiple rooms or a larger renovation.", detail: "A larger renovation starts with a room-by-room assessment, then a single plan that sets materials, finishes and the order of work for the whole property.", looksAt: ["Every room's condition", "Shared finishes", "Electrical and plumbing scope", "Order of work"], rooms: ["multiple"] },
];

export interface RnScale {
  key: string;
  tag: string;
  label: string;
  scope: string;
  considerations: string[];
  examples: string;
  complexity: 1 | 2 | 3 | 4;
  complexityLabel: string;
}

export const rnScales: RnScale[] = [
  { key: "small", tag: "Small", label: "Refresh", scope: "Selected visual changes in one area — finishes, lighting, hardware, small repairs.", considerations: ["What stays and what changes", "Matching new finishes to existing ones", "Living in the space during work"], examples: "Entrance, hallway, one bedroom", complexity: 1, complexityLabel: "Lower" },
  { key: "room", tag: "Room", label: "Renovation", scope: "Several components of one room planned together — surfaces, fixtures, storage and lighting.", considerations: ["Condition behind existing finishes", "Electrical or plumbing points", "Order of work within the room"], examples: "Kitchen, bathroom, living room", complexity: 2, complexityLabel: "Moderate" },
  { key: "multi", tag: "Multi-room", label: "Renovation", scope: "Several spaces coordinated — shared finishes, flooring that runs through, a room-by-room sequence.", considerations: ["Which rooms first", "Consistent materials", "Access and furniture moving"], examples: "Living + dining, bedrooms + hallway", complexity: 3, complexityLabel: "Higher" },
  { key: "whole", tag: "Whole home", label: "Renovation", scope: "A broad renovation of the property, often including removal, repairs, finishes and services.", considerations: ["Full assessment first", "Specialists where required", "Whether the home is occupied"], examples: "Villas, apartments, older properties", complexity: 4, complexityLabel: "Highest" },
];

export const rnLevels = [
  { label: "Refresh", line: "Small visual improvements." },
  { label: "Repair + refresh", line: "Fix worn areas, then improve appearance." },
  { label: "Partial renovation", line: "Selected elements or sections of a room." },
  { label: "Full room renovation", line: "Multiple components of one room." },
  { label: "Multi-room renovation", line: "Several spaces coordinated together." },
  { label: "Larger renovation", line: "Extensive work with detailed scope and planning." },
];

// Vision board
export const rnLooks = [
  { key: "Modern", swatch: ["#ebe4d6", "#333a49", "#b4bac6", "#c17f3e"] },
  { key: "Minimal", swatch: ["#faf8f4", "#eae7de", "#c4c0b4", "#14181f"] },
  { key: "Warm", swatch: ["#f2e6d5", "#b8916c", "#8a6248", "#d69a5f"] },
  { key: "Classic", swatch: ["#f4f0e8", "#cdab8f", "#513825", "#94472a"] },
  { key: "Contemporary", swatch: ["#eceef0", "#666f78", "#2b2f33", "#c98246"] },
  { key: "Neutral", swatch: ["#f4f0e8", "#ded2ba", "#9a968a", "#5c584f"] },
] as const;
export const rnPriorities = ["Appearance", "Function", "Durability", "Maintenance", "Space use"] as const;
export const rnVisionRooms = ["Living", "Kitchen", "Bedroom", "Bathroom", "Multiple"] as const;
export const rnVisionScopes = ["Small", "Medium", "Extensive", "Not sure"] as const;

// Scope builder layers
export const rnLayers = [
  { key: "surfaces", label: "Surfaces", items: ["Walls", "Flooring", "Ceiling"] },
  { key: "fixtures", label: "Fixtures", items: ["Lighting", "Doors", "Hardware", "Bathroom fixtures", "Kitchen sink & tap"] },
  { key: "built-in", label: "Built-in elements", items: ["Kitchen cabinets", "Storage units", "Wardrobes", "Vanity"] },
  { key: "finishes", label: "Finishes", items: ["Paint", "Wallpaper", "Tile", "Stone / marble"] },
  { key: "other", label: "Other", items: ["Removal of old fittings", "Non-structural layout change", "Electrical points", "Plumbing points"] },
] as const;

// Material / finish board
export interface RnMaterialOption {
  name: string;
  swatch: string;
  appearance: string;
  maintenance: string;
  durability: string;
  suits: string;
}
export interface RnMaterialSlot {
  key: string;
  label: string;
  prompt: string;
  options: RnMaterialOption[];
}

export const rnMaterials: RnMaterialSlot[] = [
  {
    key: "wall", label: "Wall", prompt: "Finish",
    options: [
      { name: "Paint", swatch: "#ebe4d6", appearance: "Clean and even; any colour.", maintenance: "Easy to touch up; washable paints wipe clean.", durability: "Good indoors; scuffs show in busy areas.", suits: "Any room, ceilings, quick refreshes." },
      { name: "Wallpaper", swatch: "repeating-linear-gradient(90deg,#cdab8f 0 6px,#f0e4d8 6px 14px)", appearance: "Pattern and texture paint can't give.", maintenance: "Vinyl types wipe clean; seams need care.", durability: "Depends on the paper and the wall behind it.", suits: "Feature walls, bedrooms, living rooms." },
      { name: "Panelling", swatch: "repeating-linear-gradient(90deg,#8a6248 0 3px,#a67c5b 3px 22px)", appearance: "Depth and rhythm on a single wall.", maintenance: "Dust the grooves; resists marks.", durability: "Robust once fixed to a sound wall.", suits: "TV walls, headboard walls, entrances." },
      { name: "Wall tile", swatch: "repeating-conic-gradient(#eceef0 0 25%,#b7bfc6 0 50%) 0 0/16px 16px", appearance: "Crisp, from plain to patterned.", maintenance: "Wipe clean; grout needs occasional care.", durability: "Very hard-wearing in wet areas.", suits: "Bathrooms, backsplashes, laundry areas." },
    ],
  },
  {
    key: "floor", label: "Floor", prompt: "Material",
    options: [
      { name: "Porcelain tile", swatch: "repeating-conic-gradient(#eae7de 0 25%,#c4c0b4 0 50%) 0 0/24px 24px", appearance: "Large formats look seamless.", maintenance: "Sweep and mop; grout lines are the weak point.", durability: "Very hard-wearing.", suits: "Most rooms, including wet areas." },
      { name: "Marble", swatch: "linear-gradient(135deg,#faf8f4 0%,#ebe4d6 40%,#c4c0b4 42%,#faf8f4 46%,#ebe4d6 100%)", appearance: "Natural veining; each slab differs.", maintenance: "Needs sealing and gentle cleaners.", durability: "Durable but can etch and scratch.", suits: "Entrances, living areas, majlis." },
      { name: "Wood-look", swatch: "repeating-linear-gradient(0deg,#a67c5b 0 10px,#8a6248 10px 11px)", appearance: "Warmth without real timber.", maintenance: "Varies by product — ask about wet areas.", durability: "Depends on product and use.", suits: "Bedrooms, living rooms." },
      { name: "Keep & restore", swatch: "linear-gradient(135deg,#dbe1cd,#eaeee0)", appearance: "Existing floor polished or repaired.", maintenance: "As before, once restored.", durability: "Depends on the existing floor.", suits: "Sound floors that are only worn." },
    ],
  },
  {
    key: "ceiling", label: "Ceiling", prompt: "Finish",
    options: [
      { name: "Flat painted", swatch: "#faf8f4", appearance: "Quiet and simple.", maintenance: "Repaint when needed.", durability: "Good; shows cracks if the ceiling moves.", suits: "Any room." },
      { name: "Gypsum drop", swatch: "linear-gradient(180deg,#faf8f4 0 60%,#ebe4d6 60%)", appearance: "Defined edges and hidden lighting.", maintenance: "Dust; repaint occasionally.", durability: "Good in dry rooms.", suits: "Living, dining, bedrooms." },
      { name: "Cove lighting", swatch: "linear-gradient(180deg,#f3e4d1 0%,#faf8f4 70%)", appearance: "Soft, indirect glow.", maintenance: "Occasional LED strip replacement.", durability: "Depends on the lighting chosen.", suits: "Living rooms, bedrooms, majlis." },
      { name: "Moisture-resistant board", swatch: "#eceef0", appearance: "Plain, clean finish.", maintenance: "Wipe; keep ventilated.", durability: "Made for humid rooms.", suits: "Bathrooms, kitchens." },
    ],
  },
  {
    key: "lighting", label: "Lighting", prompt: "Style",
    options: [
      { name: "Recessed spots", swatch: "radial-gradient(circle at 30% 50%,#f3e4d1 0 18%,transparent 19%),radial-gradient(circle at 70% 50%,#f3e4d1 0 18%,#333a49 19%)", appearance: "Even, unobtrusive light.", maintenance: "Replace lamps as they fail.", durability: "Depends on fittings.", suits: "Kitchens, hallways, modern rooms." },
      { name: "Pendants", swatch: "linear-gradient(180deg,#333a49 0 30%,#d69a5f 30% 60%,#333a49 60%)", appearance: "A focal point over a table or island.", maintenance: "Dust shades.", durability: "Depends on fittings.", suits: "Dining areas, kitchen islands." },
      { name: "Indirect / strip", swatch: "linear-gradient(90deg,#333a49,#d69a5f,#333a49)", appearance: "Soft glow along a line.", maintenance: "Drivers and strips are replaceable.", durability: "Depends on product quality.", suits: "Coves, shelves, under cabinets." },
      { name: "Layered", swatch: "linear-gradient(135deg,#d69a5f 0 33%,#f3e4d1 33% 66%,#c17f3e 66%)", appearance: "General, task and accent light together.", maintenance: "More fittings to look after.", durability: "Depends on fittings.", suits: "Living rooms, kitchens." },
    ],
  },
  {
    key: "detail", label: "Detail", prompt: "Hardware / accent",
    options: [
      { name: "Brushed brass", swatch: "linear-gradient(135deg,#c98246,#e0b28a,#b3652f)", appearance: "Warm accent.", maintenance: "Wipe; finish may age.", durability: "Depends on product.", suits: "Warm and classic schemes." },
      { name: "Matt black", swatch: "#232833", appearance: "Graphic and modern.", maintenance: "Shows water marks.", durability: "Depends on coating.", suits: "Modern and minimal schemes." },
      { name: "Brushed steel", swatch: "linear-gradient(135deg,#b7bfc6,#eceef0,#838d96)", appearance: "Neutral and practical.", maintenance: "Hides fingerprints well.", durability: "Robust.", suits: "Kitchens, bathrooms." },
      { name: "Wood accent", swatch: "linear-gradient(135deg,#6b4a35,#a67c5b)", appearance: "Natural warmth.", maintenance: "Keep dry; wipe.", durability: "Depends on finish.", suits: "Living rooms, bedrooms." },
    ],
  },
];

export const rnPriorityMatrix = [
  { key: "Appearance", focus: "Finishes and visual upgrades", detail: "Paint, wallpaper, lighting, hardware and selected surfaces — the elements that change how a room looks.", items: ["Wall finish", "Lighting", "Hardware", "Ceiling detail"] },
  { key: "Function", focus: "Layout and usability", detail: "Storage, lighting where tasks happen, socket and fixture positions, and non-structural layout changes.", items: ["Storage", "Task lighting", "Electrical points", "Layout"] },
  { key: "Maintenance", focus: "Easy-care choices", detail: "Surfaces that wipe clean, fewer grout lines, finishes suited to the room's use and Dammam's dust.", items: ["Large-format tile", "Washable paint", "Sealed stone", "Simple hardware"] },
  { key: "Comfort", focus: "Lighting, surfaces, room experience", detail: "Softer layered lighting, warmer materials and calmer finishes that make a room pleasant to spend time in.", items: ["Layered lighting", "Warm materials", "Ceiling detail", "Window dressing"] },
  { key: "Property preparation", focus: "Selected repairs plus refresh", detail: "Repairing visible damage, refreshing tired surfaces and fixing small functional issues before a move, sale or new tenancy.", items: ["Damage repair", "Repainting", "Fixture updates", "Final clean"] },
];

// Repair vs renovation
export const rnConditions = [
  { key: "outdated", label: "Visually outdated" },
  { key: "damaged", label: "Physically damaged" },
  { key: "difficult", label: "Difficult to use" },
  { key: "moisture", label: "Showing moisture or wear" },
  { key: "missing", label: "Missing functionality" },
];

export const rnPaths = {
  repair: { label: "Repair", when: "The space is fundamentally suitable but has specific defects — a cracked tile, a sagging door, a damaged patch of wall.", next: "Fix the defects. No need to renovate the whole room." },
  renovation: { label: "Renovation", when: "Several elements need improving or modernising at once, or the room no longer works the way you need it to.", next: "Plan the room as a whole so materials and order of work fit together." },
  replacement: { label: "Replacement", when: "An element has reached the point where repair may not be worthwhile — swollen cabinets, failed fixtures, badly damaged flooring.", next: "Replace that element, and check what's around it while it's out." },
  assess: { label: "Assessment first", when: "Moisture or mixed problems can have causes behind the surface. Covering them with new finishes can hide them, not fix them.", next: "Find and deal with the cause before choosing finishes." },
};

export const rnAssessChecks = [
  { label: "Existing surfaces", note: "What can stay, what needs preparing." },
  { label: "Damaged areas", note: "Cracks, chips, swelling, loose tiles." },
  { label: "Moisture concerns", note: "Staining, peeling, smells, damp corners." },
  { label: "Electrical scope", note: "Points to add, move or replace." },
  { label: "Plumbing scope", note: "Fixtures, supply and drain positions." },
  { label: "Doors and windows", note: "Fit, frames, hardware, condition." },
  { label: "Ceiling", note: "Cracks, stains, existing gypsum." },
  { label: "Flooring", note: "Level, hollow tiles, wear." },
  { label: "Walls", note: "Flatness, cracks, previous repairs." },
  { label: "Existing fixtures", note: "Lights, taps, cabinets to keep or replace." },
  { label: "Access", note: "Parking, lifts, stairs, working hours." },
  { label: "Furniture and use", note: "What needs moving; how the room is used." },
];

export const rnRoadmap = [
  { stage: "Vision", text: "What you want the space to feel like and why — appearance, function, maintenance or preparing the property." },
  { stage: "Rooms", text: "Which rooms are included, and which stay as they are. Sometimes the right answer is fewer rooms, done properly." },
  { stage: "Scope", text: "The actual work in each room — what's repaired, replaced, removed or refinished — confirmed on site." },
  { stage: "Materials / finishes", text: "Choosing finishes that suit the room's use, your maintenance expectations and the existing surfaces." },
  { stage: "Work sequence", text: "Ordering the work so later stages don't damage earlier ones — for example, ceiling and electrical before final paint." },
  { stage: "Installation", text: "Fitting the new elements: cabinets, fixtures, flooring, lighting and anything else in scope." },
  { stage: "Finishing", text: "Paint, sealing, trims, silicone and the small details that make a renovation look complete." },
  { stage: "Final review", text: "Walking through the work with you and noting anything that needs attention before handover." },
];

export const rnSequence = ["Assessment", "Preparation", "Removal, where required", "Repairs", "Surface work", "Installations", "Finishing", "Final review"];

export const rnReadiness = {
  condition: ["Mostly good", "Some repairs needed", "Several damaged areas", "Significant work needed", "Not sure"],
  scope: ["One room", "Several rooms", "Whole home"],
  planning: ["Already have a clear plan", "Have ideas", "Need help defining scope"],
};

export const rnMoveIn = [
  { group: "Appearance", items: ["Walls", "Floors", "Ceilings", "Finishes"] },
  { group: "Function", items: ["Lighting", "Storage", "Doors", "Selected fixtures"] },
  { group: "Repairs", items: ["Damaged surfaces", "Worn areas", "Minor defects"] },
  { group: "Final preparation", items: ["Cleaning", "Finishing touches", "Final walkthrough"] },
];

export const rnRental = [
  { title: "Repair visible damage", text: "Holes, chipped tiles, damaged doors and marked walls left by the previous occupant." },
  { title: "Refresh tired surfaces", text: "Repainting, re-grouting and refreshing the surfaces people notice first." },
  { title: "Improve presentation", text: "Lighting, hardware and selected updates that make rooms feel looked-after." },
  { title: "Fix functional issues", text: "Sticking doors, loose fittings, dripping taps and the small things that cause complaints." },
  { title: "Coordinate the list", text: "Several small renovation tasks planned and done together instead of one at a time." },
];

export const rnCommercial = [
  { title: "Offices", text: "Walls, ceilings, lighting, flooring and partitions for working spaces." },
  { title: "Retail spaces", text: "Refreshing finishes and lighting in customer-facing areas." },
  { title: "Reception areas", text: "The first space visitors see — finishes, lighting, feature walls." },
  { title: "Small commercial properties", text: "Selected renovation across a small building or unit." },
];
export const rnCommercialConsider = [
  { title: "Appearance", text: "Finishes that suit the business and stand up to daily use." },
  { title: "Functionality", text: "Lighting, power points and layouts that support the work done there." },
  { title: "Scheduling", text: "Work planned around opening hours where the scope allows — discussed when we quote." },
  { title: "Access", text: "Building access, parking and permissions arranged in advance with you or building management." },
  { title: "Minimising disruption", text: "Phasing work and keeping areas tidy so the rest of the space can keep running." },
];

export const rnStories = [
  {
    title: "An outdated living room",
    before: ["Tired finishes", "Poor visual consistency", "Worn surfaces"],
    planning: ["Wall treatment", "Lighting", "Flooring", "Selected upgrades"],
    after: ["Refreshed appearance", "Improved coordination", "More functional space"],
  },
  {
    title: "A kitchen that no longer works",
    before: ["Damaged cabinet doors", "Stained backsplash", "Dim work areas"],
    planning: ["Cabinet repair or replacement", "New backsplash", "Task lighting", "Tap and sink update"],
    after: ["Practical storage", "Easier to clean", "Better-lit worktops"],
  },
  {
    title: "A rental between tenants",
    before: ["Marked walls", "Loose fittings", "Dated bathroom"],
    planning: ["Repairs first", "Repaint throughout", "Bathroom fixture update"],
    after: ["Ready for the next occupant", "Fewer small complaints", "A consistent finish"],
  },
];

export const rnSliderScenes = [
  { key: "living", label: "Living room", before: "Dated finishes, single ceiling light", after: "Feature wall, layered lighting, new floor" },
  { key: "bedroom", label: "Bedroom", before: "Bare walls, freestanding wardrobe", after: "Built-in wardrobe, wallpaper, soft lighting" },
  { key: "kitchen", label: "Kitchen", before: "Worn cabinets, plain backsplash", after: "Updated cabinets, tiled backsplash, task light" },
  { key: "bathroom", label: "Bathroom", before: "Cracked tiles, old vanity", after: "New tiles, wall-hung vanity, mirror light" },
  { key: "exterior", label: "Exterior", before: "Faded, cracked boundary wall", after: "Repaired, refinished wall with lighting" },
] as const;
export type RnSceneKey = (typeof rnSliderScenes)[number]["key"];

export const rnPhotoKinds = ["Room overview", "Damaged area", "Existing finishes", "Inspiration image", "Floor and ceiling", "Kitchen / bathroom", "Several rooms"];
export const rnPropertyTypes = ["Villa", "Apartment", "Older property", "Townhouse", "Office", "Retail / commercial"];

export const rnQuestions = [
  { q: "What actually needs changing?", a: "Separate what bothers you from what's simply unfamiliar. Some things are better kept." },
  { q: "What needs repairing before finishing?", a: "New finishes over cracks, damp or loose tiles tend to fail early. Repair comes first." },
  { q: "Which work needs to happen first?", a: "Ceilings before floors, electrical before paint, removal before everything. The order protects the result." },
  { q: "Which materials suit the space?", a: "A bathroom, a hallway and a majlis ask very different things of a floor or wall finish." },
  { q: "Which specialist trades are required?", a: "Structural changes, gas or major waterproofing may need specialists. Better to know before you start." },
  { q: "What should remain unchanged?", a: "Sound floors, good doors or solid cabinets may only need restoring. Keeping them focuses the budget." },
];

export const rnCostFactors = [
  { label: "Number of rooms", note: "More rooms, more work — but also more shared decisions." },
  { label: "Project size", note: "Floor and wall areas drive material and labour." },
  { label: "Existing condition", note: "Hidden damage found during removal changes the scope." },
  { label: "Removal and demolition", note: "How much has to come out before new work goes in." },
  { label: "Materials", note: "Tile, stone, board, fittings — ranges vary widely." },
  { label: "Finish level", note: "Simple finishes versus detailed, feature-heavy ones." },
  { label: "Custom work", note: "Made-to-measure cabinets, panelling, ceiling details." },
  { label: "Fixtures", note: "Lighting, sanitaryware and hardware you choose." },
  { label: "Access", note: "Floors, lifts, parking and working-hour limits." },
  { label: "Specialist trades", note: "Engineers or specialists when the scope needs them." },
  { label: "Repair requirements", note: "Fixing what's behind the surface before finishing." },
  { label: "Scope changes", note: "Decisions changed mid-project usually cost more." },
];

export const rnSpecialist = {
  weDo: [
    "Interior renovation — walls, floors, ceilings, finishes",
    "Kitchen and bathroom renovation",
    "Removal of old fittings and non-structural changes",
    "Electrical work within the renovation scope",
    "Plumbing work within the renovation scope",
    "Exterior walls, boundary walls and outdoor surfaces",
  ],
  specialist: [
    { label: "Structural engineering", text: "Load-bearing walls, beams, columns, slabs and foundations. We don't carry out structural work — a qualified engineer is needed first." },
    { label: "Structural modifications", text: "Removing or opening walls that may be structural, adding openings, extensions. Engineer assessment comes before any decision." },
    { label: "Gas systems", text: "Gas supply and appliances need a licensed gas specialist." },
    { label: "Major waterproofing", text: "Roofs and large wet areas need a proper waterproofing system.", href: "/waterproofing/", linkLabel: "Waterproofing" },
    { label: "HVAC", text: "Air conditioning installation and ducting are separate services.", href: "/ac-installation-dammam/", linkLabel: "AC installation" },
  ],
};

export interface RnAnswer { q: string; a: string }

export const rnAnswers: RnAnswer[] = [
  { q: "What does home renovation include?", a: "Home renovation improves an existing home rather than building a new one. Depending on scope it can include walls, flooring, ceilings, lighting, kitchen and bathroom updates, storage, removal of old fittings, non-structural layout changes, related electrical and plumbing work, and exterior walls and surfaces." },
  { q: "How do I know whether my home needs renovation or repair?", a: "If a room is basically suitable but has specific defects, repair is usually enough. If several elements are worn or the room no longer works for you, renovation makes more sense. Moisture or mixed problems should be assessed first, because their cause may sit behind the surface." },
  { q: "Can I renovate only one room?", a: "Yes. Single-room renovations — a kitchen, a bathroom, a bedroom or a living room — are common, and they're a sensible way to phase work across a home over time." },
  { q: "How much does home renovation cost in Dammam?", a: "There's no fair single figure. Cost depends on the number of rooms, their size and condition, how much is removed, the materials and finish level, custom work, fixtures, access and any specialist trades. We quote after seeing the scope, either from photos and a conversation or a site assessment." },
  { q: "What should I do before starting a renovation?", a: "Decide what you want to change and why, note which rooms are involved, photograph the current condition, collect a few inspiration images, and flag anything like damp, cracks or electrical problems so they're assessed before finishes are chosen." },
  { q: "Can I send photos before requesting an assessment?", a: "Yes. Photos of each room, close-ups of damage and inspiration images help us understand the scope and plan the right next step. Photos alone usually aren't enough for an exact quote on larger work." },
  { q: "How long does a home renovation take?", a: "It depends on scope, condition, materials and how the work is phased. A refresh and a multi-room renovation are very different jobs. We'll give a realistic plan for your scope once it's defined, rather than a general figure." },
  { q: "Can multiple renovation services be coordinated?", a: "Yes. Renovation usually combines several trades — ceilings, electrical, plumbing, tiling, carpentry, painting. We plan them as one project so the work happens in a sensible order." },
];

export type RnFaqCat = "Planning" | "Scope" | "Cost" | "Process";
export interface RnFaq { q: string; a: string; cat: RnFaqCat }

export const rnFaqs: RnFaq[] = [
  { cat: "Planning", q: "What does home renovation include?", a: "It covers improving an existing home: walls, flooring, ceilings, lighting, kitchens, bathrooms, storage, removal of old fittings, non-structural layout changes, related electrical and plumbing work, and exterior walls and surfaces. The exact scope depends on your home and what you want to change." },
  { cat: "Planning", q: "Can I renovate just one room?", a: "Yes. Renovating one room at a time is common and lets you phase a larger renovation. We'll keep later rooms in mind so finishes can match when you get to them." },
  { cat: "Planning", q: "Should I repair before renovating?", a: "Usually, yes. Cracks, damp, loose tiles and damaged surfaces should be dealt with before new finishes go on, otherwise the new work can fail early or hide an ongoing problem." },
  { cat: "Planning", q: "How do I plan a home renovation?", a: "Start with what you want to change and why, then decide which rooms are included, define the work in each, choose materials and finishes, and agree the order of work. Sending photos and a short description is a good first step." },
  { cat: "Cost", q: "What affects renovation cost?", a: "The number and size of rooms, existing condition, removal work, materials, finish level, custom elements, fixtures, access, specialist trades, repairs found along the way and any changes to the scope." },
  { cat: "Cost", q: "Can I send photos for an initial assessment?", a: "Yes. Photos help us understand the rooms, the condition and the look you're after. For larger or more complex work we'll usually recommend a site visit before giving a quote." },
  { cat: "Scope", q: "Can you coordinate multiple renovation tasks?", a: "Yes. We plan ceilings, electrical, plumbing, tiling, carpentry, painting and other work as one project so each stage happens in the right order." },
  { cat: "Process", q: "How long does renovation take?", a: "It depends on the scope, the condition of the property, the materials chosen and whether the home is occupied. We give a plan for your specific project once the scope is defined rather than a general estimate." },
  { cat: "Scope", q: "Can you renovate villas?", a: "Yes. We renovate villas as well as apartments, older properties and commercial spaces — from single rooms to multiple rooms, outdoor areas and boundary walls." },
  { cat: "Scope", q: "Can you help with move-in renovation?", a: "Yes. Before you move in is often the easiest time to change floors, walls, ceilings and lighting. We can plan the work room by room and finish with a final walkthrough." },
  { cat: "Scope", q: "Do you handle kitchen renovation?", a: "Yes — cabinets, worktop surfaces, backsplash, lighting, flooring, walls, and sink, tap and fixture changes, including the related plumbing and electrical work within the renovation." },
  { cat: "Scope", q: "Do you handle bathroom renovation?", a: "Yes — wall and floor tiling, fixtures such as basins, WCs and showers, vanities and storage, lighting, ceilings and surface repairs, including related plumbing and electrical work. Condition behind the tiles is checked before new finishes go on." },
  { cat: "Process", q: "When do I need a specialist contractor?", a: "For structural work (load-bearing walls, beams, slabs or any structural modification), gas systems, major waterproofing and HVAC systems. We don't carry out structural work and will tell you when an engineer or specialist is needed." },
];
