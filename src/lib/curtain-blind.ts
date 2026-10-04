// Content for the Curtain & Blind Installation page. Confirmed by the business:
// curtain and blind supply, measurement visits, installation of customer-
// supplied products, rods, wall and ceiling tracks (including gypsum
// ceilings), heavy curtains and large windows, motorised / smart blinds and
// curtains, commercial and rental properties, and a workmanship warranty
// (terms in each quote). No prices, durations, "100% blackout" claims, brand
// partnerships, ratings or guarantees.

export type CbIconName =
  | "window"
  | "curtain"
  | "rod"
  | "track"
  | "ceiling"
  | "roller"
  | "venetian"
  | "vertical"
  | "roman"
  | "blackout"
  | "sheer"
  | "layered"
  | "handle"
  | "bracket"
  | "measure"
  | "align"
  | "slider"
  | "motor"
  | "sun"
  | "eye"
  | "home"
  | "building"
  | "key"
  | "camera"
  | "check"
  | "alert"
  | "arrow"
  | "phone"
  | "tools"
  | "quote";

/* ------------------------------------------------------------------ */
/* Quick answers                                                       */
/* ------------------------------------------------------------------ */

export const cbAnswers: { q: string; a: string }[] = [
  { q: "What is curtain and blind installation?", a: "Fitting window coverings and the hardware that holds them — rods, tracks or brackets — while allowing for the window size, mounting surface, clearance and how the covering opens." },
  { q: "Can curtains be installed on the ceiling?", a: "Yes, when the track or rod is designed for it and the ceiling — concrete or gypsum — can take the fixings and the curtain's weight." },
  { q: "Is inside or outside mounting better?", a: "Neither is better everywhere. It depends on the recess, the clearance, the covering, the look you want and how the window opens." },
  { q: "What affects installation cost?", a: "The number and size of windows, the covering, the mounting method and hardware, access, ceiling or wall conditions and how complex the job is." },
  { q: "Can existing curtain hardware be reused?", a: "Sometimes — if it's in good condition, the right size and position, and suits the new covering's weight and design." },
  { q: "Do blackout curtains block all light?", a: "Blackout material blocks most light through the fabric, but light can still get in around the edges. The room result depends on gaps, mounting and the system." },
];

/* ------------------------------------------------------------------ */
/* Selector                                                            */
/* ------------------------------------------------------------------ */

export const cbCategories: { key: string; label: string; icon: CbIconName; items: { label: string; note: string }[] }[] = [
  {
    key: "curtains",
    label: "Curtains",
    icon: "curtain",
    items: [
      { label: "Standard curtains", note: "The hardware position and height decide how the curtain hangs and where it stacks when open." },
      { label: "Blackout curtains", note: "Heavier fabric and the aim of less light at the edges — wider and higher hardware, or a ceiling track, often helps." },
      { label: "Sheer curtains", note: "Light fabric, often layered with a blackout curtain on a double track or rod." },
      { label: "Layered curtains", note: "Two layers need a double rod or double track with enough depth so they don't rub." },
      { label: "Eyelet curtains", note: "Need a rod rather than a track; stack-back is wider, so allow room either side." },
      { label: "Pleated curtains", note: "Usually hung on a track with hooks or gliders for an even, structured fold." },
      { label: "Other", note: "Send a photo of the curtain heading and the window and we'll advise." },
    ],
  },
  {
    key: "hardware",
    label: "Curtain hardware",
    icon: "rod",
    items: [
      { label: "Curtain rod", note: "Decorative and visible. Bracket spacing and the wall behind decide how much weight it can carry." },
      { label: "Curtain track", note: "Slim and smooth-running; can be wall or ceiling mounted and bent around bays." },
      { label: "Ceiling track", note: "Needs the right fixing for concrete or gypsum. Gives a floor-to-ceiling look and less light at the top." },
      { label: "Heavy-duty track", note: "For heavy or very wide curtains — more support points and solid fixings." },
      { label: "Double curtain track", note: "Sheer plus blackout on one fitting; check the depth from the wall or window." },
    ],
  },
  {
    key: "blinds",
    label: "Blinds",
    icon: "roller",
    items: [
      { label: "Roller blinds", note: "Inside or outside the recess, depending on depth and handles; the clearance, mounting surface and operating side all matter." },
      { label: "Blackout blinds", note: "Mounting position and side gaps affect how dark the room gets. Outside mounting with overlap can reduce edge light." },
      { label: "Venetian blinds", note: "Slats need clearance from handles; tilt gives privacy with daylight." },
      { label: "Vertical blinds", note: "Suit wide windows and sliding doors; check the stack side against the door." },
      { label: "Roman blinds", note: "Fabric folds need depth at the top of the window; heavier than a roller." },
      { label: "Other", note: "Tell us the blind type or send a photo." },
    ],
  },
  {
    key: "other",
    label: "Other",
    icon: "window",
    items: [
      { label: "Existing curtain replacement", note: "We check whether the existing rod or track suits the new curtains before reusing it." },
      { label: "Existing blind replacement", note: "Old brackets often don't match a new blind — we'll check and replace them if needed." },
      { label: "Multiple windows", note: "Use the room builder below to list each room and window." },
      { label: "Not sure", note: "Send photos of the window and we'll suggest options — we can also supply the curtains or blinds." },
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Comparison + types                                                  */
/* ------------------------------------------------------------------ */

export const cbCompare: { aspect: string; curtain: string; blind: string }[] = [
  { aspect: "What it is", curtain: "Fabric hung from a rod or track", blind: "Roller, slatted or folding covering" },
  { aspect: "Look", curtain: "Strong decorative impact", blind: "Clean, compact appearance" },
  { aspect: "Coverage", curtain: "Can be layered — sheer and blackout", blind: "Precise coverage of each window" },
  { aspect: "Hardware", curtain: "Rods or tracks", blind: "Brackets or a headrail" },
  { aspect: "Suits", curtain: "Large openings and sliding doors", blind: "Many individual windows" },
];

export const cbTypes: { icon: CbIconName; name: string; body: string; use: string; consider: string }[] = [
  { icon: "rod", name: "Curtain rod", body: "Visible pole with brackets and finials.", use: "Bedrooms, living rooms", consider: "Bracket spacing for the weight" },
  { icon: "track", name: "Curtain track", body: "Slim rail with gliders.", use: "Modern rooms, bays", consider: "Straight, level fixing" },
  { icon: "ceiling", name: "Ceiling track", body: "Fixed to the ceiling for a full-height drop.", use: "Villas, gypsum ceilings", consider: "Ceiling construction" },
  { icon: "roller", name: "Roller blind", body: "Fabric that rolls onto a tube.", use: "Bedrooms, offices, kitchens", consider: "Recess depth and handles" },
  { icon: "blackout", name: "Blackout blind", body: "Light-blocking roller fabric.", use: "Bedrooms, media rooms", consider: "Side and top gaps" },
  { icon: "venetian", name: "Venetian blind", body: "Horizontal tilting slats.", use: "Offices, kitchens", consider: "Slat clearance" },
  { icon: "vertical", name: "Vertical blind", body: "Vertical vanes on a headrail.", use: "Sliding doors, wide windows", consider: "Stack side" },
  { icon: "roman", name: "Roman blind", body: "Fabric that folds as it rises.", use: "Living and dining rooms", consider: "Headroom for folds" },
  { icon: "sheer", name: "Sheer curtain", body: "Light, see-through fabric.", use: "Daytime privacy", consider: "Often paired on a double track" },
  { icon: "layered", name: "Layered curtain", body: "Sheer plus blackout layers.", use: "Bedrooms, living rooms", consider: "Double hardware depth" },
];

/* ------------------------------------------------------------------ */
/* Mounting diagram                                                    */
/* ------------------------------------------------------------------ */

export type CbMount = "inside" | "outside" | "ceiling";

export const cbMounts: { key: CbMount; label: string; body: string }[] = [
  { key: "inside", label: "Inside mount", body: "Fitted within the window recess. A neat, built-in look when the recess is deep enough and handles don't get in the way." },
  { key: "outside", label: "Outside mount", body: "Fitted on the wall above and beyond the recess. Covers more of the window and edges, and works where the recess is shallow." },
  { key: "ceiling", label: "Ceiling mount", body: "Track fixed to the ceiling. Full-height curtains, less light at the top — the ceiling has to take the fixings." },
];

export const cbInside = { pros: ["Clean, recessed appearance", "Leaves the surrounding wall clear", "Suits deep recesses"], consider: ["Recess depth", "Window handles", "How the window opens", "Obstructions in the recess", "Light gaps at the edges"] };
export const cbOutside = { pros: ["Covers more of the window", "Works with shallow recesses", "Can reduce edge light for blackout"], consider: ["Wall space around the window", "Nearby furniture", "Switches and sockets", "Doors", "Ceiling height", "Trim and cornices"] };

/* ------------------------------------------------------------------ */
/* Window types                                                        */
/* ------------------------------------------------------------------ */

export const cbWindows: { label: string; points: string[] }[] = [
  { label: "Standard window", points: ["Inside or outside mount", "Handle position", "Sill depth", "Stack-back either side"] },
  { label: "Large window", points: ["Hardware span and support points", "Curtain weight", "Splitting into two blinds", "Stack-back space"] },
  { label: "Floor-to-ceiling window", points: ["Ceiling track for a full drop", "Ceiling construction", "Floor clearance", "Access at height"] },
  { label: "Sliding window", points: ["Handle and latch clearance", "Blind depth inside the recess", "Which pane slides"] },
  { label: "Sliding door", points: ["Curtain clearance from the door", "Door movement", "Track or rod placement", "Handle clearance", "Where the fabric stacks"] },
  { label: "French door", points: ["Doors opening inward", "Blinds fixed to the door or hardware above", "Handle clearance"] },
  { label: "Bay window", points: ["Bendable track or separate blinds", "Corner joins", "Even appearance across panes"] },
  { label: "Corner window", points: ["Two hardware runs meeting", "Which way each side opens", "Corner bracket"] },
  { label: "Small bathroom window", points: ["Moisture-suitable covering", "Privacy", "Limited recess"] },
  { label: "Office window", points: ["Glare on screens", "Consistent look across windows", "Privacy for meeting rooms"] },
  { label: "Not sure", points: ["Send a photo of the full window and surroundings", "We can measure on site"] },
];

/* ------------------------------------------------------------------ */
/* Measurement                                                         */
/* ------------------------------------------------------------------ */

export const cbMeasurements = ["Window width", "Window height", "Recess width", "Recess height and depth", "Wall space either side", "Ceiling height", "Handle position", "Sill projection", "Curtain stack-back space", "Furniture clearance"];

export const cbPlanWindow = ["Standard", "Large", "Floor-to-ceiling", "Sliding door", "Other"];
export const cbPlanWidth = ["Under 1 m", "1–2 m", "2–3 m", "Over 3 m", "Not sure"];
export const cbPlanHeight = ["Under 1.5 m", "1.5–2.5 m", "Over 2.5 m", "Not sure"];
export const cbPlanMount = ["Inside", "Outside", "Ceiling", "Not sure"];
export const cbPlanCover = ["Curtain", "Blind", "Both"];

/* ------------------------------------------------------------------ */
/* Light, privacy, rooms                                               */
/* ------------------------------------------------------------------ */

export const cbLight: { label: string; body: string }[] = [
  { label: "Maximum light reduction", body: "Blackout fabric, mounted outside the recess with overlap or on a ceiling track, plus side returns where possible. Some edge light may remain." },
  { label: "Balanced daylight", body: "Light-filtering roller or Roman blinds, or layered sheer and lined curtains you can adjust through the day." },
  { label: "Soft filtered light", body: "Sheer curtains or translucent blinds diffuse daylight without darkening the room." },
  { label: "Privacy-focused", body: "Venetian blinds tilted, or sheers by day with a heavier layer at night when lights are on inside." },
  { label: "Decorative only", body: "Dress curtains that frame the window and don't need to close fully." },
];

export const cbPrivacy = ["Bedroom privacy", "Bathroom privacy", "Street-facing windows", "Ground-floor windows", "Office meeting rooms", "Daytime vs night-time", "Sheer vs blackout", "Slat angle on Venetian blinds"];

export const cbRooms: { key: string; label: string; points: string[] }[] = [
  { key: "living", label: "Living room", points: ["Decorative impact and fabric choice", "Large windows and long spans", "Curtain length to the floor", "Rod or track style", "Natural light during the day", "Clearance from sofas and units"] },
  { key: "bedroom", label: "Bedroom", points: ["Blackout for sleep", "Privacy at night", "Where curtains stack when open", "Clearance from bedside furniture and wardrobes"] },
  { key: "kitchen", label: "Kitchen", points: ["Compact coverings such as roller or Venetian blinds", "Heat and moisture near the hob and sink", "Easy operation", "Clearance around worktops and taps"] },
  { key: "bathroom", label: "Bathroom", points: ["Moisture-suitable materials", "Privacy", "Window and handle clearance", "Easy to clean"] },
  { key: "dining", label: "Dining room", points: ["Decorative curtains", "Large windows or doors", "Clearance from the table and chairs"] },
  { key: "office", label: "Office", points: ["Glare on screens", "Daylight control", "Privacy", "Consistent look across windows"] },
  { key: "kids", label: "Kids' room", points: ["Safe operation", "Stable installation", "Cords and chains kept out of reach with fitted safety devices", "Blackout for naps"] },
];

export const cbClearance = ["Curtain length", "Floor clearance", "Sill clearance", "Stack-back when open", "Furniture", "AC units", "Doors", "Window handles", "Walking paths"];

/* ------------------------------------------------------------------ */
/* Obstructions                                                        */
/* ------------------------------------------------------------------ */

export const cbObstructions: { label: string; note: string }[] = [
  { label: "Window handle", note: "May stop an inside-mount blind dropping fully — check the depth or mount outside." },
  { label: "Door handle", note: "Curtains or blinds near a door need to clear the handle and the door swing." },
  { label: "AC unit", note: "Keep fabric clear of the airflow and the unit; a shorter blind or different stack side may help." },
  { label: "Furniture", note: "Curtains may need to finish above or stack away from beds, sofas or desks." },
  { label: "Cabinet", note: "Kitchen cabinets near a window can limit bracket position and curtain stack." },
  { label: "Ceiling fan", note: "Ceiling tracks and long curtains must stay clear of the blades." },
  { label: "Light switch", note: "Hardware and stacked fabric shouldn't cover switches." },
  { label: "Socket", note: "Fabric resting near sockets and chargers is best avoided." },
  { label: "Wall feature", note: "Cladding, panels or niches can change where brackets can go." },
  { label: "Deep sill", note: "Curtains may need to clear the sill, or a blind can sit inside above it." },
  { label: "Curtain box / pelmet", note: "Track must fit inside the box with room for the curtain to run." },
  { label: "Other", note: "Send a photo of the window and its surroundings." },
];

/* ------------------------------------------------------------------ */
/* Process, hardware, problems                                         */
/* ------------------------------------------------------------------ */

export const cbProcess: { title: string; body: string; icon: CbIconName }[] = [
  { title: "Understand the window", body: "Type, covering, quantity and how it should open.", icon: "phone" },
  { title: "Measure", body: "Window and recess, clearance and mounting position.", icon: "measure" },
  { title: "Check the surface", body: "Wall or ceiling construction and the right fixing.", icon: "tools" },
  { title: "Confirm hardware position", body: "Rod, track or blind bracket height and width.", icon: "bracket" },
  { title: "Install the hardware", body: "Fixed level and secure for the system chosen.", icon: "rod" },
  { title: "Hang the covering", body: "Fit the curtain or blind and check it runs.", icon: "curtain" },
  { title: "Align & adjust", body: "Position, operation, drop and appearance.", icon: "align" },
  { title: "Final review", body: "Walk through it with you and tidy up.", icon: "check" },
];

export const cbReuse = ["Condition", "Size", "Compatibility", "Mounting position", "Weight of the new covering", "Hardware design", "Existing fixings", "New product dimensions"];

export const cbProblems: { title: string; causes: string[] }[] = [
  { title: "Curtain hangs unevenly", causes: ["Hardware not level", "Measurement issue", "Uneven ceiling or wall", "Curtain construction", "Position"] },
  { title: "Blind doesn't sit correctly", causes: ["Wrong mount position", "Clearance", "Unsuitable surface", "Product size"] },
  { title: "Curtain doesn't open smoothly", causes: ["Track or rod alignment", "Obstruction", "Curtain weight", "Hardware fault"] },
  { title: "Blind hits the window handle", causes: ["Not enough clearance"] },
  { title: "Curtain blocks a door", causes: ["Stack-back or hardware in the wrong place"] },
];

export const cbMistakes = [
  "Measuring only the glass",
  "Ignoring window handles",
  "Ignoring door movement",
  "Hardware that doesn't suit the covering",
  "Heavy curtains on weak fixings",
  "Ignoring wall or ceiling construction",
  "Too little clearance",
  "Forgetting stack-back",
  "Choosing before thinking about the room",
  "Assuming old brackets fit",
  "Focusing only on appearance",
  "No access left for maintenance",
];

export const cbPro = ["Heavy curtains", "Wide windows", "Ceiling mounting", "High windows", "Several windows", "New hardware", "Unknown wall or ceiling", "Blackout matters", "Matching across windows", "Expensive or delicate coverings"];

/* ------------------------------------------------------------------ */
/* Builder, cost, form                                                 */
/* ------------------------------------------------------------------ */

export const cbBuilderRooms = ["Living room", "Bedroom", "Kitchen", "Bathroom", "Office", "Dining room", "Other"];
export const cbBuilderCover = ["Curtain", "Blind", "Both", "Not sure"];

export const cbCostFactors: { key: string; label: string; weight: number }[] = [
  { key: "qty", label: "Several windows", weight: 3 },
  { key: "large", label: "Large or wide windows", weight: 2 },
  { key: "heavy", label: "Heavy curtains", weight: 2 },
  { key: "ceiling", label: "Ceiling mounting", weight: 1 },
  { key: "high", label: "High windows / difficult access", weight: 2 },
  { key: "double", label: "Double / layered hardware", weight: 1 },
  { key: "remove", label: "Removing old hardware", weight: 1 },
  { key: "motor", label: "Motorised or smart control", weight: 3 },
  { key: "supply", label: "We supply the curtains / blinds", weight: 3 },
  { key: "measure", label: "Measurement visit", weight: 1 },
];

export const cbFormProperty = ["Villa", "Apartment", "Office", "Shop", "Other"];
export const cbFormCover = ["Curtain", "Blind", "Rod", "Track", "Motorised"];
export const cbFormJob = ["New installation", "Replacement", "Supply & install", "Measure first"];
export const cbFormQty = ["1", "2–4", "5–10", "More than 10"];
export const cbFormYesNo = ["Yes", "No", "Not sure"];

export const cbChecklist = [
  "Decide which windows need covering",
  "Have customer-supplied curtains or blinds on site",
  "Keep product instructions",
  "Note approximate sizes",
  "Clear furniture from the window where possible",
  "Point out existing hardware",
  "Take photos",
  "Mention unusual access or high ceilings",
  "Mention sliding doors",
  "Mention blackout or privacy needs",
];

/* ------------------------------------------------------------------ */
/* FAQ                                                                 */
/* ------------------------------------------------------------------ */

export const cbFaqs: { q: string; a: string }[] = [
  { q: "Do you install curtains and blinds?", a: "Yes — curtains, blinds, rods and tracks, for homes, offices, shops and rental properties." },
  { q: "Can you install curtain rods?", a: "Yes. We position the brackets for the curtain's weight and width and fix them to suit the wall." },
  { q: "Can you install curtain tracks?", a: "Yes — single, double and heavy-duty tracks, wall or ceiling mounted, including bent tracks for bays." },
  { q: "Can curtains be ceiling-mounted?", a: "Yes, when the track suits it and the ceiling can take the fixings. We install ceiling tracks into concrete and gypsum ceilings." },
  { q: "Can you install roller blinds?", a: "Yes, inside or outside the recess depending on depth, handles and the look you want." },
  { q: "Can you install blackout blinds or curtains?", a: "Yes. We'll suggest a mounting position that reduces edge light, but some light may still enter around the edges." },
  { q: "Can you install blinds on large windows?", a: "Yes. Very wide windows may be better split into two or more blinds; we'll advise." },
  { q: "Can you install curtains for sliding doors?", a: "Yes. We plan the track or rod so the curtain stacks clear of the door and handles." },
  { q: "Can existing curtain rods or tracks be reused?", a: "Sometimes. It depends on their condition, size, position and whether they suit the new covering's weight." },
  { q: "Do you install customer-supplied curtains and blinds?", a: "Yes. Send photos or product details and we'll check the hardware and fit." },
  { q: "Can I send window photos before booking?", a: "Yes — a photo of the full window, the wall or ceiling around it, the handles and any existing hardware helps us plan." },
  { q: "Do you provide measurements?", a: "Yes. We can visit to measure, and we can supply curtains and blinds made to those measurements." },
  { q: "How long does curtain or blind installation take?", a: "It depends on the number of windows, the hardware, the ceiling or wall and access. We'll give you an idea when we quote." },
  { q: "Can you install curtains in high-ceiling rooms?", a: "Yes, including floor-to-ceiling and double-height windows, with suitable access equipment." },
  { q: "Can you install multiple curtains or blinds throughout a home?", a: "Yes. List the rooms and windows in the builder above or send photos and we'll plan it together." },
  { q: "Do you install motorized blinds?", a: "Yes — motorised blinds and curtain tracks with remote or smart control, where the system and power supply are suitable." },
];
