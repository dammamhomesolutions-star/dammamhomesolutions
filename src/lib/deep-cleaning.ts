// Content for the Deep Cleaning / Move-In Move-Out Cleaning page.
// Confirmed by the business: deep, move-in and move-out cleaning; add-ons
// for inside cabinets and appliances, windows and balconies, carpets and
// upholstery; post-renovation cleaning; and commercial spaces. Nothing here
// claims guarantees, disinfection standards or "chemical-free" products.

export type DcIconName =
  | "house"
  | "apartment"
  | "villa"
  | "kitchen"
  | "bathroom"
  | "bedroom"
  | "sofa"
  | "cabinet"
  | "floor"
  | "window"
  | "sink"
  | "toilet"
  | "bucket"
  | "cloth"
  | "vacuum"
  | "brush"
  | "checklist"
  | "movein"
  | "moveout"
  | "calendar"
  | "phone"
  | "pin"
  | "check"
  | "alert"
  | "arrow"
  | "building"
  | "key"
  | "search";

/* ------------------------------------------------------------------ */
/* Decision tool                                                       */
/* ------------------------------------------------------------------ */

export interface DcIntent {
  key: string;
  label: string;
  service: string;
  why: string;
  icon: DcIconName;
}

export const dcIntents: DcIntent[] = [
  {
    key: "movein",
    label: "I'm moving into a property",
    service: "Move-in cleaning",
    why: "Clean the empty property before your belongings arrive, while every cabinet and corner is still easy to reach.",
    icon: "movein",
  },
  {
    key: "moveout",
    label: "I'm leaving a rental",
    service: "Move-out cleaning",
    why: "Prepare the vacated property for handover, inspection or the next occupant.",
    icon: "moveout",
  },
  {
    key: "deep",
    label: "I've lived here a while and need a reset",
    service: "Deep cleaning",
    why: "Deal with buildup and the areas routine cleaning doesn't reach, in an occupied home.",
    icon: "brush",
  },
  {
    key: "reno",
    label: "The property has been renovated",
    service: "Post-renovation cleaning",
    why: "Remove fine dust and residue left after building work, once debris has been cleared.",
    icon: "vacuum",
  },
  {
    key: "unsure",
    label: "I'm not sure",
    service: "A cleaning quote",
    why: "Tell us about the property and what you need — we'll suggest the right scope.",
    icon: "checklist",
  },
];

/* ------------------------------------------------------------------ */
/* Move-in vs move-out                                                 */
/* ------------------------------------------------------------------ */

export const dcMoveIn = {
  goal: "Start with a clean property before your belongings arrive.",
  situations: [
    "Previous occupants left dust or residue",
    "Cabinets and shelves need cleaning before use",
    "Kitchen and bathrooms need detailed attention",
    "Empty rooms show dust in every corner",
    "Appliances may need cleaning",
  ],
  focus: ["Empty rooms", "Cabinets & shelves", "Kitchen", "Bathrooms", "Floors", "Doors & handles", "Fixtures", "Accessible windows", "Dust & residue"],
};

export const dcMoveOut = {
  goal: "Leave the property clean and ready for inspection or the next occupant.",
  situations: [
    "The tenancy is ending and handover is close",
    "A landlord is preparing for the next tenant",
    "Furniture has gone and hidden areas are exposed",
    "Kitchen and bathroom buildup needs attention",
    "Floors and surfaces need a final clean",
  ],
  focus: ["Empty rooms", "Remaining dust", "Kitchen surfaces", "Cabinets", "Bathrooms", "Floors", "Doors", "Built-up residue", "Areas behind removed furniture"],
};

/* ------------------------------------------------------------------ */
/* Room map                                                            */
/* ------------------------------------------------------------------ */

export type DcRoomKey =
  | "kitchen"
  | "bathroom"
  | "bedroom"
  | "living"
  | "dining"
  | "hallway"
  | "entry"
  | "balcony"
  | "utility"
  | "storage";

export interface DcRoom {
  key: DcRoomKey;
  label: string;
  focus: string[];
  extra: string[];
  notIncluded: string[];
}

export const dcRooms: DcRoom[] = [
  {
    key: "kitchen",
    label: "Kitchen",
    focus: ["Countertops & backsplash", "Cabinet fronts & handles", "Sink & taps", "Appliance exteriors", "Floor & corners"],
    extra: ["Grease near the cooker", "Residue on cabinet tops", "Grout lines"],
    notIncluded: ["Inside cabinets, oven or fridge (add-on)"],
  },
  {
    key: "bathroom",
    label: "Bathroom",
    focus: ["Tiles & shower area", "Toilet, sink & vanity", "Mirrors & fixtures", "Floor, doors & handles"],
    extra: ["Water marks and mineral deposits", "Soap residue", "Corners and behind the toilet"],
    notIncluded: ["Re-grouting or sealing (a repair, not cleaning)"],
  },
  {
    key: "bedroom",
    label: "Bedrooms",
    focus: ["Floors & skirting", "Doors, handles & switches", "Wardrobe exteriors", "Window sills"],
    extra: ["Dust where furniture stood", "Wardrobe tops"],
    notIncluded: ["Inside wardrobes when full (empty properties only)", "Mattress cleaning"],
  },
  {
    key: "living",
    label: "Living room",
    focus: ["Floors & skirting", "Shelves & surfaces", "Doors & switches", "Window areas"],
    extra: ["Under and behind furniture", "AC vent covers"],
    notIncluded: ["Sofa or rug cleaning (upholstery / carpet add-on)"],
  },
  {
    key: "dining",
    label: "Dining area",
    focus: ["Table and chair surfaces", "Floor", "Light switches & sockets"],
    extra: ["Sticky residue near the kitchen"],
    notIncluded: ["Upholstered chairs (upholstery add-on)"],
  },
  {
    key: "hallway",
    label: "Hallways & stairs",
    focus: ["Floors & stairs where applicable", "Handrails", "Skirting", "Doors"],
    extra: ["Scuffs and marks at hand height"],
    notIncluded: ["Wall repainting"],
  },
  {
    key: "entry",
    label: "Entry",
    focus: ["Door & frame", "Floor", "Shoe area", "Switches"],
    extra: ["Sand and dust tracked in"],
    notIncluded: ["Exterior facade cleaning"],
  },
  {
    key: "balcony",
    label: "Balcony",
    focus: ["Floor", "Railings", "Accessible glass"],
    extra: ["Dust and sand build-up"],
    notIncluded: ["Balcony is an add-on — confirm when booking"],
  },
  {
    key: "utility",
    label: "Utility area",
    focus: ["Surfaces", "Sink", "Floor", "Appliance exteriors"],
    extra: ["Lint and detergent residue"],
    notIncluded: ["Inside washing machine (appliance add-on)"],
  },
  {
    key: "storage",
    label: "Storage",
    focus: ["Shelves when empty", "Floor", "Door"],
    extra: ["Dust in rarely opened spaces"],
    notIncluded: ["Clearing stored items or rubbish"],
  },
];

/* ------------------------------------------------------------------ */
/* Room detail sections                                                */
/* ------------------------------------------------------------------ */

export const dcKitchen = [
  "Countertops",
  "Cabinet fronts",
  "Cabinet interiors where accessible (add-on)",
  "Shelves",
  "Backsplash",
  "Sink & taps",
  "Appliance exteriors",
  "Appliance interiors (add-on)",
  "Handles",
  "Floor & corners",
  "Grease and residue buildup",
];

export const dcBathroom = [
  "Tiles",
  "Shower area",
  "Bath where present",
  "Sink & vanity",
  "Toilet",
  "Mirrors",
  "Fixtures",
  "Floors",
  "Doors & handles",
  "Accessible corners",
];

export const dcLiving = [
  "Floors",
  "Skirting where accessible",
  "Doors & handles",
  "Light switches",
  "Shelves",
  "Cabinets",
  "Window areas (add-on for full windows)",
  "Corners & dust build-up",
];

/* ------------------------------------------------------------------ */
/* Empty-property stages                                               */
/* ------------------------------------------------------------------ */

export const dcEmptyStages = [
  { label: "Furnished", caption: "Furniture hides floor area, corners and skirting." },
  { label: "Furniture removed", caption: "Dust and marks where furniture stood become visible." },
  { label: "Accessible surfaces", caption: "Every wall edge, cabinet and corner can now be reached." },
  { label: "Detailed clean", caption: "Room-by-room cleaning of the exposed surfaces." },
  { label: "Ready", caption: "A clean, empty property ready for handover or for belongings." },
];

/* ------------------------------------------------------------------ */
/* Processes                                                           */
/* ------------------------------------------------------------------ */

export const dcMoveInSteps = [
  { title: "Tell us about the property", body: "Type, size, condition and location." },
  { title: "Confirm the scope", body: "Rooms, kitchen, bathrooms and any add-ons." },
  { title: "Prepare the property", body: "Personal items removed where appropriate." },
  { title: "Clean accessible areas", body: "Room by room, kitchen and bathrooms in detail." },
  { title: "Quality check", body: "Completed areas reviewed against the scope." },
  { title: "Move in", body: "The property is ready for your belongings." },
];

export const dcMoveOutSteps = [
  { title: "Remove personal belongings", body: "Everything that's leaving with you." },
  { title: "Identify handover priorities", body: "Anything your landlord or manager has flagged." },
  { title: "Clean rooms & surfaces", body: "Empty rooms, doors, switches and shelves." },
  { title: "Detail kitchen & bathrooms", body: "Where most residue builds up." },
  { title: "Floors & common areas", body: "Last, so they stay clean." },
  { title: "Final walkthrough", body: "Checked together against the agreed scope." },
  { title: "Handover-ready", body: "Ready for inspection or the next occupant." },
];

/* ------------------------------------------------------------------ */
/* Checklist                                                           */
/* ------------------------------------------------------------------ */

export const dcChecklist: { group: string; items: string[] }[] = [
  { group: "Kitchen", items: ["Countertops", "Cabinet surfaces", "Sink", "Taps", "Backsplash", "Appliance exteriors", "Floors"] },
  { group: "Bathroom", items: ["Toilet", "Sink", "Shower", "Mirrors", "Fixtures", "Floors"] },
  { group: "Living & bedrooms", items: ["Floors", "Doors", "Handles", "Accessible shelves", "Dust removal", "Corners"] },
  { group: "Final", items: ["Belongings removed", "Rubbish removed", "Cabinets checked", "Appliances checked", "Floors checked", "Final walkthrough"] },
];

/* ------------------------------------------------------------------ */
/* Add-ons and separate services                                       */
/* ------------------------------------------------------------------ */

export const dcAddOns: { key: string; label: string; icon: DcIconName }[] = [
  { key: "cabinets", label: "Inside cabinets", icon: "cabinet" },
  { key: "appliances", label: "Inside appliances (oven, fridge)", icon: "kitchen" },
  { key: "windows", label: "Windows", icon: "window" },
  { key: "balcony", label: "Balcony", icon: "house" },
  { key: "carpet", label: "Carpet cleaning", icon: "vacuum" },
  { key: "upholstery", label: "Upholstery cleaning", icon: "sofa" },
];

export const dcSeparate: { label: string; href?: string }[] = [
  { label: "Pest control", href: "/pest-control-dammam/" },
  { label: "Repairs to fixtures, doors or cabinets", href: "/general-home-repairs/" },
  { label: "Painting and wall touch-ups", href: "/painting-wall-repair/" },
  { label: "Heavy rubbish or construction debris removal" },
  { label: "Damp patches and the leak behind them", href: "/water-leak-repair/" },
  { label: "Mold remediation" },
  { label: "Restoring damaged or permanently stained surfaces" },
  { label: "Exterior high-level window cleaning" },
  { label: "Biohazard cleanup" },
];

/* ------------------------------------------------------------------ */
/* Cost factors                                                        */
/* ------------------------------------------------------------------ */

export const dcCostFactors: { key: string; label: string; detail: string; weight: number }[] = [
  { key: "size", label: "Large property", detail: "More rooms and floor area", weight: 3 },
  { key: "baths", label: "Several bathrooms", detail: "Each bathroom is detailed work", weight: 2 },
  { key: "buildup", label: "Heavy buildup", detail: "Grease, mineral deposits or long-term dust", weight: 3 },
  { key: "furnished", label: "Furnished", detail: "Working around furniture and belongings", weight: 2 },
  { key: "kitchen", label: "Kitchen needs extra work", detail: "Heavy grease or residue", weight: 2 },
  { key: "addons", label: "Add-ons", detail: "Inside appliances, windows, carpets, upholstery", weight: 2 },
  { key: "special", label: "Special requirements", detail: "Delicate surfaces, post-renovation dust", weight: 2 },
  { key: "access", label: "Difficult access", detail: "Stairs, high areas, parking or building rules", weight: 1 },
];

/* ------------------------------------------------------------------ */
/* Request form options                                                */
/* ------------------------------------------------------------------ */

export const dcCleaningTypes = ["Deep cleaning", "Move-in", "Move-out", "Post-renovation", "Not sure"];
export const dcPropertyTypes = ["Apartment", "Villa", "House", "Office / commercial", "Other"];
export const dcConditions = ["Lightly used", "Average", "Heavy buildup", "Post-renovation dust"];
export const dcBedrooms = ["Studio", "1", "2", "3", "4", "5+"];
export const dcBathrooms = ["1", "2", "3", "4", "5+"];

/* ------------------------------------------------------------------ */
/* FAQ                                                                 */
/* ------------------------------------------------------------------ */

export const dcFaqs: { q: string; a: string }[] = [
  {
    q: "What is included in a deep cleaning service?",
    a: "Detailed cleaning of kitchens, bathrooms, floors, doors, handles, switches, shelves, cabinet fronts, fixtures and accessible corners, focusing on buildup and areas routine cleaning misses. Inside cabinets and appliances, windows, balconies, carpets and upholstery are add-ons. The exact scope is confirmed before booking.",
  },
  {
    q: "What is the difference between deep cleaning and regular cleaning?",
    a: "Regular cleaning keeps a home tidy week to week — visible surfaces, floors and quick bathroom and kitchen cleans. Deep cleaning goes further into buildup, edges, fixtures and areas that aren't cleaned often. They solve different needs.",
  },
  {
    q: "What is move-in cleaning?",
    a: "Move-in cleaning prepares a property for occupancy before the new resident brings in their belongings, while the rooms are still empty and easy to reach.",
  },
  {
    q: "What is move-out cleaning?",
    a: "Move-out cleaning prepares a vacated property for handover, inspection or the next occupant.",
  },
  {
    q: "Is move-out cleaning the same as end-of-tenancy cleaning?",
    a: "Generally, yes — both describe cleaning a rental after the tenant leaves. What your landlord expects depends on your tenancy agreement, so share any handover requirements when you book.",
  },
  {
    q: "Should I clean before moving into a new home?",
    a: "It's the easiest moment to do it. An empty property lets every cabinet, corner and floor area be cleaned before furniture and boxes cover them.",
  },
  {
    q: "What areas are usually cleaned during a move-out service?",
    a: "Empty rooms, kitchen surfaces and cabinets, bathrooms, floors, doors, handles, switches, and the areas behind and under where furniture stood.",
  },
  {
    q: "Do you clean kitchen cabinets?",
    a: "Cabinet fronts and handles are part of the standard clean. Cabinet interiors are an add-on and are easiest when the cabinets are empty.",
  },
  {
    q: "Do you clean inside appliances?",
    a: "Yes, as an add-on — for example the oven and fridge. Fridges and freezers should be emptied and switched off in advance if they're included.",
  },
  {
    q: "Can deep cleaning remove all stains?",
    a: "Not always. Some stains, burned-on residue, etching or damaged surfaces can't be fully removed by cleaning. We'll tell you before starting if an area is unlikely to come clean.",
  },
  {
    q: "How much does deep cleaning cost in Dammam?",
    a: "It depends on property size, the number of bedrooms and bathrooms, condition and buildup, whether it's furnished, and any add-ons. Send the property details and we'll give you a quote for the agreed scope.",
  },
  {
    q: "How long does a deep cleaning service take?",
    a: "It depends on the size, condition, whether the property is furnished, and the scope. We'll give you an estimate once we know the details.",
  },
  {
    q: "Should the property be empty before cleaning?",
    a: "For move-in and move-out cleaning, yes — it allows a more thorough clean. Deep cleaning can be done in an occupied home, working around furniture and belongings.",
  },
  {
    q: "Do I need to remove my belongings before the cleaners arrive?",
    a: "For move-out cleaning, remove everything you're taking. For deep cleaning, put away valuables, documents and fragile items, and clear surfaces you want cleaned.",
  },
  {
    q: "Can landlords book move-out cleaning?",
    a: "Yes. Landlords often book it between tenants to prepare the property for the next occupant.",
  },
  {
    q: "Can property managers book cleaning between tenants?",
    a: "Yes. Property managers can book move-out and move-in cleaning for turnovers. Tell us how many units and the timing.",
  },
  {
    q: "What should I prepare before move-in cleaning?",
    a: "Make sure we have access, the water and electricity are on, and let us know about any delicate surfaces or areas you want prioritised.",
  },
  {
    q: "Can I request extra cleaning tasks?",
    a: "Yes. Add-ons include inside cabinets and appliances, windows, balconies, carpets and upholstery. Other requests can be discussed when you ask for a quote.",
  },
  {
    q: "Do you clean villas and apartments?",
    a: "Yes — apartments, villas and houses, as well as offices and other commercial spaces.",
  },
  {
    q: "What happens if a surface is damaged or heavily stained?",
    a: "We'll point it out and explain what cleaning can and can't achieve. Damage may need a repair rather than cleaning, which we can arrange as a separate service.",
  },
];
