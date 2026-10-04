// Content for the Furniture Assembly page. Confirmed by the business: new and
// flat-pack assembly, disassembly and reassembly, moving / transport, wall
// anchoring, furniture with glass or mirrors, furniture repair, TV / shelf /
// mirror wall mounting, commercial and office furniture, customer-supplied
// furniture, and a workmanship warranty (terms in each quote). No brand
// affiliations, prices, durations, ratings or safety guarantees.

export type FaIconName =
  | "box"
  | "panels"
  | "screw"
  | "frame"
  | "wardrobe"
  | "bed"
  | "dresser"
  | "cabinet"
  | "desk"
  | "table"
  | "chair"
  | "tv"
  | "bookshelf"
  | "shelving"
  | "shoe"
  | "sideboard"
  | "storage"
  | "cot"
  | "outdoor"
  | "drawer"
  | "anchor"
  | "level"
  | "door"
  | "truck"
  | "glass"
  | "office"
  | "home"
  | "camera"
  | "check"
  | "alert"
  | "arrow"
  | "phone"
  | "repair"
  | "quote"
  | "tools";

/* ------------------------------------------------------------------ */
/* Quick answers                                                       */
/* ------------------------------------------------------------------ */

export const faAnswers: { q: string; a: string }[] = [
  { q: "What is furniture assembly?", a: "Putting a furniture item together from its components according to its design and instructions — fitting panels, hardware, doors, drawers and shelves, then aligning and checking it." },
  { q: "Can you assemble flat-pack furniture?", a: "Yes. Flat-pack furniture can be assembled when the item, its components, the instructions and the site conditions are suitable." },
  { q: "Can furniture be disassembled and reassembled?", a: "Often, yes — but it depends on the furniture's design, its condition, the hardware and how it was put together the first time." },
  { q: "What affects furniture assembly cost?", a: "The type and size of the furniture, how many items and components, complexity, access, reassembly, missing parts and extras such as wall anchoring." },
  { q: "Should large wardrobes be secured?", a: "Some tall or tip-prone furniture is designed to be secured for stability. The right method depends on the manufacturer's instructions and the wall." },
  { q: "Do you also move furniture?", a: "Yes. We can disassemble furniture, move it and reassemble it at the new location — tell us both addresses when you book." },
];

/* ------------------------------------------------------------------ */
/* Selector                                                            */
/* ------------------------------------------------------------------ */

export const faCategories: { key: string; label: string; icon: FaIconName; items: { label: string; note: string }[] }[] = [
  {
    key: "bedroom",
    label: "Bedroom",
    icon: "bed",
    items: [
      { label: "Bed", note: "Beds involve a frame, slats or base and sometimes storage drawers or a lift mechanism. Assembling in the room avoids carrying a finished frame through doors." },
      { label: "Bedside table", note: "Usually simple — drawers need aligning so they run smoothly." },
      { label: "Wardrobe", note: "Large wardrobes may involve many panels, doors, shelves, alignment and stability. The room layout and final position can affect how it's assembled — and tall units may need securing to the wall." },
      { label: "Dresser", note: "Several drawers that must run straight and close evenly; tall dressers may need anchoring." },
      { label: "Chest of drawers", note: "Drawer runners and alignment take the time; taller chests can be tip-prone." },
      { label: "Dressing table", note: "Often includes a mirror — glass needs careful handling and fixing." },
      { label: "Headboard", note: "Attached to the bed frame or fixed to the wall, depending on the design." },
    ],
  },
  {
    key: "living",
    label: "Living room",
    icon: "tv",
    items: [
      { label: "TV unit", note: "Doors, drawers and cable openings. If the TV will be wall-mounted above it, plan both together." },
      { label: "Coffee table", note: "Usually straightforward; glass tops need careful handling." },
      { label: "Side table", note: "Generally simple." },
      { label: "Bookshelf", note: "Tall bookshelves are tip-prone and often designed to be secured to the wall." },
      { label: "Display cabinet", note: "Glass doors and shelves need care; tall cabinets may need anchoring." },
      { label: "Sofa table", note: "Usually simple, but check its final position behind the sofa first." },
    ],
  },
  {
    key: "dining",
    label: "Dining",
    icon: "table",
    items: [
      { label: "Dining table", note: "Large tops are awkward to turn — assemble in or near the dining area. Extending tables need their mechanism checked." },
      { label: "Dining chairs", note: "Simple individually; sets take longer and need consistent tightening so none wobble." },
      { label: "Sideboard", note: "Doors and drawers to align; long units need a level floor." },
      { label: "Buffet cabinet", note: "Often includes glass; may need anchoring if tall." },
    ],
  },
  {
    key: "office",
    label: "Office",
    icon: "desk",
    items: [
      { label: "Desk", note: "Confirm orientation, cable access and where storage goes before final assembly. Large or L-shaped desks are best built in place." },
      { label: "Office chair", note: "Usually quick — base, gas lift, seat and arms." },
      { label: "Bookshelf", note: "Tall units may need securing to the wall." },
      { label: "Filing cabinet", note: "Drawer runners and any locking mechanism need checking." },
      { label: "Storage unit", note: "Size and stability decide whether anchoring is needed." },
    ],
  },
  {
    key: "storage",
    label: "Storage",
    icon: "storage",
    items: [
      { label: "Wardrobe", note: "Panels, doors and shelves, plus alignment and stability. Sliding-door wardrobes need careful track adjustment." },
      { label: "Cabinet", note: "Hinges and shelf pins; tall cabinets may need anchoring." },
      { label: "Shelving", note: "Freestanding or wall-fixed; loaded shelving must be stable." },
      { label: "Shoe cabinet", note: "Tip-down compartments often need wall fixing to stay stable." },
      { label: "Storage unit", note: "Modular units need planning so sections line up." },
    ],
  },
  {
    key: "kids",
    label: "Kids / nursery",
    icon: "cot",
    items: [
      { label: "Cot", note: "Follow the manufacturer's design exactly — every fixing matters. We check that the sides and base are secure." },
      { label: "Bed", note: "Bunk and loft beds need every component and careful tightening; guard rails must be fitted." },
      { label: "Changing table", note: "Must be stable; some are designed to be fixed to the wall." },
      { label: "Storage", note: "Children's storage and drawers are often tip-prone — anchoring is worth discussing." },
    ],
  },
  {
    key: "other",
    label: "Other",
    icon: "box",
    items: [
      { label: "Outdoor furniture", note: "Sets with many fixings; metal and rattan pieces need even tightening." },
      { label: "Multiple items", note: "Use the request builder below to list everything — one visit can cover several pieces." },
      { label: "Not sure", note: "Send a photo of the box or the furniture and we'll tell you what's involved." },
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Types + complexity                                                  */
/* ------------------------------------------------------------------ */

export type FaLevel = "Simple" | "Moderate" | "More complex";

export const faTypes: { icon: FaIconName; name: string; body: string; level: FaLevel }[] = [
  { icon: "bed", name: "Beds", body: "Frames, slats, storage and bunk beds.", level: "Moderate" },
  { icon: "wardrobe", name: "Wardrobes", body: "Hinged and sliding-door, single or multi-section.", level: "More complex" },
  { icon: "dresser", name: "Dressers", body: "Drawer units and chests.", level: "Moderate" },
  { icon: "cabinet", name: "Cabinets", body: "Bathroom, display and storage cabinets.", level: "Moderate" },
  { icon: "desk", name: "Desks", body: "Writing, gaming and L-shaped desks.", level: "Moderate" },
  { icon: "table", name: "Tables", body: "Dining, coffee and side tables.", level: "Simple" },
  { icon: "chair", name: "Chairs", body: "Dining and office chairs.", level: "Simple" },
  { icon: "tv", name: "TV units", body: "Low units and media walls.", level: "Moderate" },
  { icon: "bookshelf", name: "Bookshelves", body: "Tall and low bookcases.", level: "Moderate" },
  { icon: "shelving", name: "Shelving", body: "Freestanding and wall-fixed shelves.", level: "Simple" },
  { icon: "shoe", name: "Shoe cabinets", body: "Tip-down and open shoe storage.", level: "Simple" },
  { icon: "sideboard", name: "Sideboards", body: "Dining and living-room sideboards.", level: "Moderate" },
  { icon: "storage", name: "Storage units", body: "Modular and cube storage.", level: "Moderate" },
  { icon: "cot", name: "Nursery furniture", body: "Cots, changing tables, kids' beds.", level: "Moderate" },
  { icon: "outdoor", name: "Outdoor furniture", body: "Patio sets, loungers and benches.", level: "Simple" },
];

export const faComplexity: { level: FaLevel; examples: string[]; body: string }[] = [
  { level: "Simple", examples: ["Small table", "Basic chair", "Bedside table", "Simple shelf"], body: "Few parts, little alignment. Often quick, but still worth doing properly." },
  { level: "Moderate", examples: ["Desk", "Dresser", "TV unit", "Multi-shelf cabinet"], body: "More components, drawers or doors to align, and sometimes a heavier final placement." },
  { level: "More complex", examples: ["Large wardrobe", "Sliding-door wardrobe", "Multi-section storage", "Large modular furniture"], body: "Many panels and fittings, careful alignment, two-person handling and often wall anchoring." },
];

export const faComplexityFactors = ["Number of components", "Instructions", "Hardware", "Alignment", "Size", "Room and access", "Missing or damaged parts", "Wall anchoring"];

/* ------------------------------------------------------------------ */
/* Diagram                                                             */
/* ------------------------------------------------------------------ */

export const faStages: { label: string; body: string; tags: string[] }[] = [
  { label: "Box", body: "Check every box is present, the model is right and nothing is visibly damaged.", tags: ["Model check", "Box count"] },
  { label: "Components", body: "Unpack, lay out the panels and sort the hardware against the instructions.", tags: ["Panels", "Hardware"] },
  { label: "Frame", body: "Build the main carcass square and true — everything else depends on it.", tags: ["Frame"] },
  { label: "Doors & shelves", body: "Fit shelves, drawers and doors in the order the design requires.", tags: ["Shelves", "Doors", "Drawers"] },
  { label: "Finished", body: "Adjust hinges and runners, check it's level and stable, and anchor if required.", tags: ["Final alignment"] },
];

/* ------------------------------------------------------------------ */
/* Flat-pack, parts, damage, stability                                 */
/* ------------------------------------------------------------------ */

export const faFlatPack = ["Unpacking", "Identifying components", "Checking hardware", "Following the manufacturer's instructions", "Assembling sections", "Aligning panels", "Fitting doors and drawers", "Checking stability", "Final positioning"];

export const faBeforeBox = [
  "Confirm it's the correct model",
  "Keep the instructions to hand",
  "Check all boxes are there",
  "Look for visible damage",
  "Keep hardware together",
  "Clear enough floor space",
  "Decide the final location",
  "Check access to the room",
  "Note whether wall anchoring is mentioned",
  "Keep children and pets away from the work area",
];

export const faMissing = ["A missing screw or dowel", "A missing bracket", "Incorrect hardware supplied", "A damaged panel", "A wrong component", "Missing instructions", "Parts still in another box"];

export const faDamaged = ["Photograph the damage", "Keep the packaging where practical", "Identify the affected part", "Check the seller's or manufacturer's replacement process", "Don't force a damaged part into place", "Assembly may need to wait for the replacement"];

export const faTipProne = ["Tall wardrobes", "Bookcases", "Tall cabinets", "Shelving", "Storage units", "Chests of drawers", "Shoe cabinets"];

/* ------------------------------------------------------------------ */
/* Rooms + access                                                      */
/* ------------------------------------------------------------------ */

export const faRooms: { key: string; label: string; note: string }[] = [
  { key: "bedroom", label: "Bedroom", note: "Decide where the bed and wardrobe go before assembly — moving a fully assembled wardrobe or bed is much harder than positioning components first." },
  { key: "living", label: "Living room", note: "Plan the TV unit around sockets and any wall-mounted TV, and keep walkways clear around tables." },
  { key: "dining", label: "Dining room", note: "Assemble the table where it will stand; large tops are hard to turn through doors." },
  { key: "office", label: "Office", note: "Confirm desk orientation, access around it, cable routes and where storage will go before final assembly." },
  { key: "kids", label: "Kids' room", note: "Tall storage and bunk beds deserve extra attention to stability and anchoring." },
  { key: "nursery", label: "Nursery", note: "Place the cot away from windows, cords and heaters, and keep the changing table stable." },
  { key: "hallway", label: "Hallway", note: "Narrow spaces need shallow furniture that doesn't block doors; shoe cabinets often need wall fixing." },
  { key: "storage", label: "Storage area", note: "Leave room to reach shelves and open doors fully; heavy loads go low." },
  { key: "commercial", label: "Commercial space", note: "Plan the layout and the order of assembly so the workspace stays usable." },
  { key: "outdoor", label: "Outdoor area", note: "Assemble on a flat surface near where it will be used; check the furniture is made for outdoor use." },
];

export const faPlacement = ["Clearance from the wall", "Door swing", "Drawer and door opening space", "Walkways", "Sockets and switches", "Windows and curtains", "Room layout", "Future access", "Cleaning access"];

/* ------------------------------------------------------------------ */
/* Builder                                                             */
/* ------------------------------------------------------------------ */

export const faBuilderItems = ["Bed", "Wardrobe", "Bedside table", "Dresser / chest", "Desk", "Office chair", "Dining table", "Dining chair", "TV unit", "Bookshelf", "Cabinet", "Shoe cabinet", "Shelving", "Cot / kids' bed", "Outdoor furniture", "Other"];
export const faBuilderRooms = ["Villa", "Apartment", "Office", "Shop", "Other"];

/* ------------------------------------------------------------------ */
/* Materials, process, quality, problems                               */
/* ------------------------------------------------------------------ */

export const faMaterials: { name: string; body: string }[] = [
  { name: "MDF", body: "Smooth and stable, but edges chip and holes strip if overtightened." },
  { name: "Particleboard", body: "Common in flat-pack; doesn't like being re-screwed or getting wet." },
  { name: "Plywood", body: "Strong and holds screws well." },
  { name: "Solid wood", body: "Heavy; joints need careful alignment." },
  { name: "Metal", body: "Frames and legs — tightening must be even to avoid wobble." },
  { name: "Glass", body: "Doors, shelves and tops need careful handling." },
  { name: "Laminated panels", body: "Surfaces scratch easily during handling." },
];

export const faProcess: { title: string; body: string; icon: FaIconName }[] = [
  { title: "Understand the item", body: "Type, model and what assembly involves.", icon: "phone" },
  { title: "Check the components", body: "Panels, hardware and instructions.", icon: "panels" },
  { title: "Prepare the space", body: "Clear and protect a working area.", icon: "home" },
  { title: "Build the main structure", body: "Frame and major sections, to the manufacturer's design.", icon: "frame" },
  { title: "Fit components", body: "Doors, drawers, shelves and fittings.", icon: "drawer" },
  { title: "Align & check", body: "Doors, drawers, level and stability.", icon: "level" },
  { title: "Final placement", body: "Positioned where agreed; anchored if required.", icon: "anchor" },
  { title: "Final review", body: "Check the finished furniture and tidy the area.", icon: "check" },
];

export const faQuality = ["Level, where applicable", "Doors aligned", "Drawers running smoothly", "Shelves in the right positions", "Panels properly joined", "All required hardware fitted", "Stable", "Manufacturer safety features addressed", "Area left tidy"];

export const faProblems: { title: string; causes: string[] }[] = [
  { title: "Panels don't line up", causes: ["Wrong component", "Assembly order", "Loose or incorrect hardware", "Damaged part"] },
  { title: "Doors don't align", causes: ["Frame not square", "Incorrect installation", "Hinges need adjusting", "Uneven floor"] },
  { title: "Drawer doesn't slide", causes: ["Runner fitted wrongly", "Alignment", "Obstruction", "Wrong component"] },
  { title: "Furniture feels unstable", causes: ["Incomplete assembly", "Incorrect hardware", "Uneven floor", "Missing stability part", "Needs anchoring"] },
];

export const faMistakes = [
  "Starting without checking the parts",
  "Losing hardware",
  "Skipping instructions",
  "Using the wrong screws",
  "Forcing panels",
  "Overtightening fasteners",
  "Ignoring alignment",
  "Working in too small a space",
  "Forgetting the final placement",
  "Ignoring stability instructions",
  "Improvising missing structural hardware",
  "Carrying large assembled furniture through tight spaces",
];

export const faPro = ["Large wardrobes", "Multi-section cabinets", "Complicated beds", "Large desks", "Several items at once", "Furniture with glass", "Pieces needing careful alignment", "Reassembly after moving", "Commercial projects", "No space or tools to work"];

/* ------------------------------------------------------------------ */
/* Cost                                                                */
/* ------------------------------------------------------------------ */

export const faCostFactors: { key: string; label: string; weight: number }[] = [
  { key: "qty", label: "Several items", weight: 3 },
  { key: "large", label: "Large wardrobe or modular unit", weight: 3 },
  { key: "doors", label: "Many doors / drawers", weight: 2 },
  { key: "glass", label: "Glass or mirror parts", weight: 1 },
  { key: "access", label: "Stairs, no lift or tight access", weight: 1 },
  { key: "reassembly", label: "Disassembly and reassembly", weight: 2 },
  { key: "anchor", label: "Wall anchoring", weight: 1 },
  { key: "moving", label: "Moving between locations", weight: 3 },
  { key: "parts", label: "Missing or damaged parts", weight: 1 },
  { key: "mount", label: "TV / shelf / mirror wall mounting", weight: 1 },
];

/* ------------------------------------------------------------------ */
/* Form                                                                */
/* ------------------------------------------------------------------ */

export const faFormProperty = ["Villa", "Apartment", "Office", "Shop", "Other"];
export const faFormJob = ["New assembly", "Reassembly", "Disassemble, move & reassemble", "Repair"];
export const faFormQty = ["1", "2–3", "4–6", "More than 6"];

export const faPreVisit = [
  "Furniture is on site",
  "All boxes are present",
  "Instructions are available",
  "Parts are accessible",
  "Work area is reasonably clear",
  "Final location is decided",
  "Door / lift access is considered",
  "Children and pets kept away",
  "Missing or damaged parts identified",
  "Photos / model information ready",
];

/* ------------------------------------------------------------------ */
/* FAQ                                                                 */
/* ------------------------------------------------------------------ */

export const faFaqs: { q: string; a: string }[] = [
  { q: "Do you assemble flat-pack furniture?", a: "Yes, when the furniture, components, instructions and site conditions are suitable." },
  { q: "What types of furniture can you assemble?", a: "Beds, wardrobes, dressers, cabinets, desks, tables, chairs, TV units, bookshelves, shelving, shoe cabinets, sideboards, storage, nursery and outdoor furniture." },
  { q: "Can you assemble a wardrobe?", a: "Yes, including large, multi-section and sliding-door wardrobes. Tall wardrobes may need securing to the wall, which we can do." },
  { q: "Can you assemble beds and bedroom furniture?", a: "Yes — beds, bunk and storage beds, wardrobes, dressers, bedside tables and dressing tables." },
  { q: "Can you assemble desks and office furniture?", a: "Yes, for homes and businesses — desks, workstations, chairs, storage and meeting tables." },
  { q: "Can you assemble multiple furniture items in one visit?", a: "Yes. List everything when you book so we can plan the visit." },
  { q: "Can you reassemble furniture after moving?", a: "Yes. We can disassemble, move and reassemble furniture, depending on its design and condition." },
  { q: "Can you assemble customer-supplied furniture?", a: "Yes. Furniture you've bought can be assembled where the item, instructions, components and site are suitable. We aren't affiliated with any furniture brand." },
  { q: "What if some parts are missing?", a: "Assembly may need to pause if a required or safety-critical part is missing. We won't improvise structural hardware; we'll help identify the part to request." },
  { q: "What if a furniture panel is damaged?", a: "Photograph it and contact the seller about a replacement. Minor damage can sometimes be repaired — we'll tell you honestly whether that's suitable." },
  { q: "Can large wardrobes be secured for stability?", a: "Yes. We secure tall or tip-prone furniture to the wall using a method that suits the furniture and the wall construction." },
  { q: "Can you assemble furniture with glass doors or mirrors?", a: "Yes. Glass doors, shelves, tops and mirrors are handled and fitted with extra care." },
  { q: "Can I send photos before booking?", a: "Yes — photos of the furniture, box, instructions or room help us plan. We may still need to see some jobs before confirming a quote." },
  { q: "How long does furniture assembly take?", a: "It depends on the item, the number of parts, quantity, access and whether anything is missing. We'll give you an idea when you book." },
  { q: "Do you provide furniture moving as well?", a: "Yes. We can move furniture between locations, including disassembly before and reassembly after." },
  { q: "Can you assemble furniture for offices or businesses?", a: "Yes — multiple desks, workstations, storage and reception furniture, planned around your workspace." },
];
