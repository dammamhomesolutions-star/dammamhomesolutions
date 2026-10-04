// Content for the Lighting & Fixture Installation page. Confirmed by the
// business: ceiling, wall, pendant, chandelier / heavy fixtures, recessed
// downlights in gypsum, track and under-cabinet lighting, outdoor lighting,
// new lighting points and moved lights, dimmers / multiple switches, smart and
// motion controls, troubleshooting faulty lights, customer-supplied fixtures,
// fixture supply and help choosing, gypsum patching / finishing, commercial
// projects and a workmanship warranty (terms in each quote). No prices,
// durations, ratings, certifications or regulatory-compliance claims.

export type LtIconName =
  | "ceiling"
  | "pendant"
  | "chandelier"
  | "flush"
  | "recessed"
  | "track"
  | "sconce"
  | "mirror"
  | "outdoor"
  | "flood"
  | "decorative"
  | "cabinet"
  | "switch"
  | "dimmer"
  | "smart"
  | "motion"
  | "zones"
  | "room"
  | "mount"
  | "install"
  | "assess"
  | "test"
  | "ambient"
  | "task"
  | "accent"
  | "alert"
  | "check"
  | "arrow"
  | "phone"
  | "camera"
  | "home"
  | "building"
  | "sun"
  | "quote";

/* ------------------------------------------------------------------ */
/* Quick answers                                                       */
/* ------------------------------------------------------------------ */

export const ltAnswers: { q: string; a: string }[] = [
  { q: "What is lighting fixture installation?", a: "The fitting or replacement of a light fixture at an existing or newly prepared location, taking into account mounting, placement, electrical connection, controls and operation." },
  { q: "What affects lighting installation cost?", a: "Fixture type and quantity, size and weight, mounting conditions, ceiling height, existing electrical points, access, controls, and whether new wiring or finishing is needed." },
  { q: "Should I replace an existing light or add a new lighting point?", a: "Replacing a fixture in the same place is usually simpler. A new point needs assessment of cable routing, access, switching and finishing the ceiling or wall afterwards." },
  { q: "Can you install a fixture I've already bought?", a: "Yes. Send the model or a photo so we can check its size, weight, mounting and whether it suits the location and controls." },
  { q: "Can you install lights on a high ceiling?", a: "Yes, including chandeliers and heavy fixtures. High ceilings need the right access equipment and a mounting point that suits the fixture's weight." },
  { q: "Can I send photos before booking?", a: "Yes — photos of the fixture, the ceiling or wall, the existing point and the switch help us understand the job before visiting." },
];

/* ------------------------------------------------------------------ */
/* Fixture selector                                                    */
/* ------------------------------------------------------------------ */

export interface LtCategory {
  key: string;
  label: string;
  icon: LtIconName;
  options: { label: string; note: string }[];
}

export const ltCategories: LtCategory[] = [
  {
    key: "ceiling",
    label: "Ceiling lighting",
    icon: "ceiling",
    options: [
      { label: "Pendant", note: "Check ceiling height, mounting conditions, fixture weight, the electrical connection, the final hanging height and position, and how it will be switched." },
      { label: "Chandelier", note: "Weight and size come first: the mounting point has to suit the load. Ceiling height, room scale, safe access and future bulb changes also matter." },
      { label: "Flush mount", note: "Good for lower ceilings. Check fixture depth, the base size against the existing point, and the ceiling condition around it." },
      { label: "Semi-flush mount", note: "Hangs slightly below the ceiling — check clearance under it and that the base suits the existing mounting point." },
      { label: "Recessed / downlight", note: "Needs a suitable ceiling void (usually gypsum or a false ceiling), a planned layout and spacing, and compatible drivers and dimmers." },
      { label: "Ceiling fixture", note: "Most standard ceiling fixtures replace an existing one directly; the mounting plate and ceiling material decide the fixing." },
      { label: "Other", note: "Tell us what it is and send a photo — we'll check mounting, connection and placement." },
    ],
  },
  {
    key: "wall",
    label: "Wall lighting",
    icon: "sconce",
    options: [
      { label: "Wall sconce", note: "Height, spacing and symmetry matter. A new sconce position usually means a new point and some wall finishing." },
      { label: "Decorative wall light", note: "Check weight, the wall material, how the cable reaches it and how it will be switched." },
      { label: "Bathroom wall light", note: "The fixture must suit a humid room and its position relative to water. Installation should be done professionally." },
      { label: "Outdoor wall light", note: "Needs a fixture made for outdoor use, sealed entry for the cable, and a sensible height for light and maintenance." },
      { label: "Other", note: "Send a photo of the wall and the fixture and we'll take it from there." },
    ],
  },
  {
    key: "functional",
    label: "Functional lighting",
    icon: "task",
    options: [
      { label: "Kitchen lighting", note: "Combine general light with task light over worktops; under-cabinet lighting removes shadows from wall cabinets." },
      { label: "Bathroom lighting", note: "Even light at the mirror, suitable fixtures for the humidity, and safe positioning near water." },
      { label: "Bedroom lighting", note: "Soft general light plus bedside or reading light, ideally switchable from the bed and dimmable." },
      { label: "Office lighting", note: "Even task light at desks while avoiding glare on screens; fixture position relative to desks matters." },
      { label: "Stairway lighting", note: "Every step should be visible without glare. Fixtures above stairs need safe access to install and maintain." },
      { label: "Corridor lighting", note: "Consistent spacing avoids dark patches; switching from both ends is often worth planning." },
    ],
  },
  {
    key: "outdoor",
    label: "Outdoor lighting",
    icon: "outdoor",
    options: [
      { label: "Entrance", note: "Light faces at the door and the steps without dazzling visitors. Often paired with motion or timed control." },
      { label: "Patio", note: "Comfortable, low-glare light for seating, with fixtures suited to sun, heat and dust." },
      { label: "Garden", note: "Cable routes, fixture suitability for outdoor exposure, and where the light should and shouldn't fall." },
      { label: "Pathway", note: "Low, evenly spaced light to see the path; cable routes need planning." },
      { label: "Driveway", note: "Wider coverage for vehicles and walking, without shining into neighbours' windows." },
      { label: "Perimeter", note: "Flood or wall lights for walls and corners; motion control can reduce running time." },
      { label: "Other", note: "Describe the area and send a photo." },
    ],
  },
  {
    key: "other",
    label: "Other",
    icon: "install",
    options: [
      { label: "Fixture replacement", note: "Usually the simplest job — we check the existing point, mounting and switch, then swap the fixture." },
      { label: "Multiple fixtures", note: "A layout plan first: positions, spacing, switching and which circuit they run on." },
      { label: "New lighting point", note: "Needs an assessment of cable routing, access, switch position and making good the ceiling or wall." },
      { label: "Not sure", note: "Send photos of the room and what you have in mind and we'll suggest the options." },
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Fixture grid + comparison                                           */
/* ------------------------------------------------------------------ */

export const ltFixtures: { icon: LtIconName; name: string; body: string; use: string }[] = [
  { icon: "pendant", name: "Pendant", body: "Hangs from a cord, rod or chain to bring light lower.", use: "Dining tables, islands, feature spots" },
  { icon: "chandelier", name: "Chandelier", body: "Multi-arm decorative fixture, often large and heavy.", use: "Entrances, dining and living rooms" },
  { icon: "flush", name: "Flush mount", body: "Sits tight to the ceiling with no drop.", use: "Lower ceilings, bedrooms, corridors" },
  { icon: "recessed", name: "Recessed light", body: "Set into the ceiling so only the trim shows.", use: "General light in gypsum ceilings" },
  { icon: "track", name: "Track lighting", body: "Adjustable heads on a single rail.", use: "Directional light, displays, shops" },
  { icon: "sconce", name: "Wall sconce", body: "Wall-mounted light, up, down or both.", use: "Bedrooms, corridors, stair walls" },
  { icon: "mirror", name: "Mirror / bathroom light", body: "Even light at face height.", use: "Bathroom and dressing mirrors" },
  { icon: "outdoor", name: "Outdoor wall light", body: "Made for outdoor exposure.", use: "Entrances, gates, patios" },
  { icon: "flood", name: "Flood / security light", body: "Wide, bright beam, often with a sensor.", use: "Driveways, perimeters, yards" },
  { icon: "decorative", name: "Decorative lighting", body: "Strips, coves and feature pieces.", use: "Ceiling coves, niches, shelves" },
  { icon: "cabinet", name: "Under-cabinet", body: "Slim fixtures under wall cabinets.", use: "Kitchen worktops" },
];

export const ltComparison: { fixture: string; use: string; consider: string }[] = [
  { fixture: "Pendant", use: "Dining / kitchen / feature areas", consider: "Hanging height and position" },
  { fixture: "Chandelier", use: "Dining / entry / living", consider: "Scale, weight and ceiling height" },
  { fixture: "Flush mount", use: "Lower ceilings", consider: "Fixture depth" },
  { fixture: "Recessed", use: "General / task lighting", consider: "Ceiling construction and layout" },
  { fixture: "Wall sconce", use: "Bedrooms / corridors / bathrooms", consider: "Mounting height and spacing" },
  { fixture: "Track lighting", use: "Directional lighting", consider: "Layout and beam direction" },
  { fixture: "Under-cabinet", use: "Kitchen work areas", consider: "Worktop coverage" },
  { fixture: "Outdoor fixture", use: "Entrance / patio / garden", consider: "Suitability for outdoor exposure" },
];

/* ------------------------------------------------------------------ */
/* Rooms                                                               */
/* ------------------------------------------------------------------ */

export const ltRooms: { key: string; label: string; points: string[] }[] = [
  { key: "living", label: "Living room", points: ["Layered ambient light rather than one central fixture", "Accent light for art, niches or a feature wall", "A decorative fixture sized to the room", "Place fixtures around the furniture layout", "Avoid glare at seating eye level"] },
  { key: "bedroom", label: "Bedroom", points: ["Soft general (ambient) light", "Bedside or reading light", "Avoid fixtures shining straight at the pillow", "Switching from the bed is worth planning", "Dimming where fixtures support it"] },
  { key: "kitchen", label: "Kitchen", points: ["General illumination for the whole room", "Task light over worktops and the hob", "Under-cabinet lighting to remove shadows", "Pendants over an island at the right height", "Separate switching for task and general light"] },
  { key: "bathroom", label: "Bathroom", points: ["Even light at the mirror, from the sides or above", "Ceiling light suited to a humid room", "Fixture position relative to the shower and basin", "Professional installation near water"] },
  { key: "dining", label: "Dining area", points: ["Pendant or chandelier centred on the table, not the room", "Scale the fixture to the table and ceiling", "Hanging height that clears heads but lights the table", "Dimming suits dining well"] },
  { key: "hallway", label: "Hallway", points: ["Consistent spacing to avoid dark patches", "Avoid harsh light at room transitions", "Switching from both ends", "Flush or wall lights for narrow corridors"] },
  { key: "stairs", label: "Staircase", points: ["Every step visible, without glare in the eyes", "Wall or ceiling fixtures placed for safe maintenance access", "Switching at the top and bottom", "Professional installation over stairwells"] },
  { key: "office", label: "Office", points: ["Even task light at desks", "Avoid glare and reflections on screens", "General light for the whole space", "Fixtures that are easy to maintain"] },
  { key: "retail", label: "Retail / shop", points: ["Bright, even general light", "Track or accent light on displays", "Comfortable light at the counter", "Maintenance access during opening hours"] },
  { key: "restaurant", label: "Restaurant", points: ["Atmosphere at tables, task light in service areas", "Dimming and separate zones", "Durable fixtures that are easy to clean", "Planning work around opening hours"] },
  { key: "entrance", label: "Entrance", points: ["Light faces at the door and the steps", "Avoid dazzling visitors", "Outdoor-rated fixtures outside", "Motion or timed control"] },
  { key: "garage", label: "Garage", points: ["Bright, even light for parking and storage", "Robust fixtures", "Switch by the door", "Motion control is useful"] },
  { key: "outdoor", label: "Outdoor", points: ["Fixtures made for outdoor exposure", "Protected cable routes", "Light where it's needed, not into neighbours' windows", "Plan for dust and maintenance"] },
  { key: "other", label: "Other", points: ["Tell us how the space is used", "Send photos of the room and ceiling", "We'll suggest fixture types and positions"] },
];

/* ------------------------------------------------------------------ */
/* Diagram / layout                                                    */
/* ------------------------------------------------------------------ */

export type LtLayer = "ambient" | "task" | "accent";

export const ltLayers: { key: LtLayer; label: string; icon: LtIconName; body: string }[] = [
  { key: "ambient", label: "Ambient", icon: "ambient", body: "General illumination for the whole room — usually ceiling fixtures or downlights spread evenly." },
  { key: "task", label: "Task", icon: "task", body: "Focused light where an activity happens: a desk, a worktop, a reading chair or a mirror." },
  { key: "accent", label: "Accent", icon: "accent", body: "Light that highlights architecture or decoration — art, niches, textured walls or a feature fixture." },
];

export type LtPart = "ceiling" | "wall" | "switch" | "furniture";

export const ltParts: { key: LtPart; label: string; body: string }[] = [
  { key: "ceiling", label: "Ceiling fixture", body: "Provides most of the general light. Its position should follow the furniture, not just the centre of the ceiling." },
  { key: "wall", label: "Wall light", body: "Adds softer, lower light and accent. Needs a wall point and careful height and spacing." },
  { key: "switch", label: "Switch", body: "Where and how lights are controlled — near doors, by the bed, with dimming or separate zones." },
  { key: "furniture", label: "Furniture", body: "Seating, tables and desks decide where task light and pendants should land." },
];

export const ltQuality = ["Fixture placement", "Beam and light distribution", "Glare", "Room size", "Ceiling height", "Furniture layout", "Surface colours", "Task requirements", "Fixture scale", "Colour temperature", "Controls", "Number and spacing of fixtures"];

export const ltTemps: { name: string; feel: string; use: string; swatch: string }[] = [
  { name: "Warm white", feel: "Soft, yellowish, relaxed", use: "Living rooms, bedrooms, dining", swatch: "#f6c98a" },
  { name: "Neutral white", feel: "Balanced, clean", use: "Kitchens, bathrooms, corridors", swatch: "#f7ecd8" },
  { name: "Cool / daylight", feel: "Crisp, bluish, alert", use: "Offices, garages, work areas", swatch: "#e3eef7" },
];

/* ------------------------------------------------------------------ */
/* Replacement vs new + decision tool                                  */
/* ------------------------------------------------------------------ */

export const ltChanges: { label: string; note: string }[] = [
  { label: "Replacing an existing light", note: "Replacing a fixture in the same location is usually more straightforward than a new point — but the existing point, mounting and fixture size and weight still need checking." },
  { label: "Adding another light", note: "A new lighting point is needed: cable routing, access in the ceiling or wall, switching and finishing all come into it." },
  { label: "Moving a light", note: "The old point has to be made safe and closed, a new one created, and both ceiling areas finished." },
  { label: "Changing the lighting layout", note: "Worth planning the whole room — positions, spacing, zones and switching — before any work starts." },
  { label: "Installing multiple fixtures", note: "We plan positions and switching together and check the circuit can take the added fixtures." },
  { label: "Renovating the room", note: "The best time to plan new points and switching is before ceilings and walls are finished." },
  { label: "Not sure", note: "Send photos of the room and what you want to achieve and we'll suggest the options." },
];

/* ------------------------------------------------------------------ */
/* Ceilings, controls                                                  */
/* ------------------------------------------------------------------ */

export const ltCeilings: { name: string; body: string }[] = [
  { name: "Concrete", body: "Strong for fixings but hard to route new cables through; surface conduit or chasing may be needed." },
  { name: "Gypsum / drywall", body: "Easy to cut for downlights and route cables above, but heavier fixtures need proper support behind the board." },
  { name: "Suspended", body: "Tiles and grid give access above, but the grid itself shouldn't carry heavy fixtures." },
  { name: "False ceiling", body: "Creates a void for recessed lights and coves; access and support are planned around the frame." },
  { name: "Decorative", body: "Cornices and patterns limit where fixtures can go and need careful finishing." },
  { name: "High ceiling", body: "Needs suitable access equipment and planning for mounting, scale and future maintenance." },
];

export const ltControls: { icon: LtIconName; title: string; body: string }[] = [
  { icon: "switch", title: "Standard switch", body: "One switch, one light or group." },
  { icon: "zones", title: "Multiple switches", body: "Control from two places — corridors, stairs, bedrooms." },
  { icon: "dimmer", title: "Dimming", body: "Where the fixture, lamp, driver and dimmer are compatible." },
  { icon: "ambient", title: "Separate zones", body: "Switch general, task and accent light independently." },
  { icon: "motion", title: "Motion control", body: "Lights on when someone arrives — entrances, garages, stores." },
  { icon: "smart", title: "Smart / app control", body: "Smart switches or fixtures, where compatible with your setup." },
];

export const ltIndoorOutdoor: { indoor: string; outdoor: string }[] = [
  { indoor: "Room function", outdoor: "Exposure to sun, heat and dust" },
  { indoor: "Furniture layout", outdoor: "Mounting location" },
  { indoor: "Glare", outdoor: "Fixture suitability for outdoor use" },
  { indoor: "Ceiling height", outdoor: "Moisture and dust protection" },
  { indoor: "Decorative style", outdoor: "Durability" },
  { indoor: "Controls", outdoor: "Access and maintenance" },
];

/* ------------------------------------------------------------------ */
/* Process, prep, cost                                                 */
/* ------------------------------------------------------------------ */

export const ltProcess: { title: string; body: string; icon: LtIconName }[] = [
  { title: "Understand the requirement", body: "Fixture, room, location and what the light is for.", icon: "phone" },
  { title: "Assess the existing setup", body: "Existing fixture, electrical point, mounting surface and access.", icon: "assess" },
  { title: "Confirm fixture & placement", body: "Position, scale, height, orientation and controls.", icon: "room" },
  { title: "Prepare the installation", body: "Protect the area and prepare based on the site and fixture.", icon: "mount" },
  { title: "Install the fixture", body: "Mount and connect to suit the specific fixture and location.", icon: "install" },
  { title: "Test", body: "Operation, switching, dimming and final position.", icon: "test" },
  { title: "Finish & handover", body: "Make good where agreed, clean up and explain the controls.", icon: "check" },
];

export const ltPrep = [
  "Fixture chosen, if already bought",
  "Fixture model or box information",
  "Photos of the existing fixture",
  "Photos of the ceiling or wall",
  "Photos of the room",
  "Approximate ceiling height",
  "Number of fixtures",
  "Preferred positions",
  "Current switch / control setup",
  "Property type and access details",
];

export const ltCostFactors: { key: string; label: string; weight: number }[] = [
  { key: "qty", label: "Several fixtures", weight: 2 },
  { key: "heavy", label: "Large or heavy fixture", weight: 2 },
  { key: "new", label: "New lighting point needed", weight: 3 },
  { key: "high", label: "High ceiling / difficult access", weight: 2 },
  { key: "concrete", label: "Concrete ceiling or wall to route through", weight: 2 },
  { key: "recessed", label: "Recessed lights / layout", weight: 2 },
  { key: "controls", label: "Dimming or extra switches", weight: 1 },
  { key: "smart", label: "Smart or motion controls", weight: 1 },
  { key: "outdoor", label: "Outdoor installation", weight: 2 },
  { key: "finish", label: "Ceiling / wall finishing", weight: 1 },
];

/* ------------------------------------------------------------------ */
/* Diagnostic, warnings, mistakes, checklists                          */
/* ------------------------------------------------------------------ */

export const ltCauses: { title: string; body: string }[] = [
  { title: "Lamp / bulb", body: "Failed, wrong type, or not seated properly." },
  { title: "Fixture", body: "A faulty fitting, holder or internal part." },
  { title: "Driver / transformer", body: "An LED driver can fail while the LEDs are fine." },
  { title: "Control compatibility", body: "Dimmer and lamp not matched — flicker or buzzing." },
  { title: "Connection", body: "A loose or poor connection at the point or switch." },
  { title: "Supply", body: "A circuit, breaker or wiring issue upstream." },
  { title: "Moisture / environment", body: "Water or dust getting into a fitting." },
  { title: "Installation", body: "Wrong mounting, ventilation or fixture for the location." },
];

export const ltWarnings = ["Breaker tripping repeatedly", "Burning smell", "Visible scorching or damage", "Fixture or switch overheating", "Damaged fixture", "Exposed wiring", "Moisture near electrical parts", "Recurring flicker", "Buzzing from a fixture or dimmer", "Loose or moving fixture"];

export const ltMistakes = [
  "Fixture too large for the room",
  "Fixture too small to make an impact",
  "Positioned to the ceiling centre, not the furniture",
  "Ignoring ceiling height",
  "Excessive glare at eye level",
  "Dimmer and lamp not compatible",
  "No access left for maintenance",
  "Indoor fixture used outdoors",
  "Unnecessary electrical changes",
  "Heavy fixture on an unsuitable mounting",
  "Choosing looks over function",
];

export const ltPro = [
  "New wiring or a new point is needed",
  "The light position is changing",
  "The fixture is heavy",
  "The ceiling is high",
  "You're unsure what the ceiling is made of",
  "There are electrical warning signs",
  "Several fixtures are being added",
  "It's an outdoor installation",
  "New controls are needed",
];

export const ltPlanning = [
  "What is this room used for?",
  "Is the light decorative, functional or both?",
  "Where is the current electrical point?",
  "How high is the ceiling?",
  "What is the ceiling made of?",
  "Where is the furniture?",
  "Do I need task lighting?",
  "Do I want dimming?",
  "Is the fixture for indoors or outdoors?",
  "How will it be maintained?",
  "Are the fixture and controls compatible?",
];

export const ltScope = [
  "Ceiling light installation",
  "Pendant installation",
  "Chandelier and heavy fixtures",
  "Wall light installation",
  "Fixture replacement",
  "Recessed downlights",
  "Track and under-cabinet lighting",
  "Decorative lighting",
  "Outdoor lighting",
  "New lighting points",
  "Dimmers, switches and smart controls",
  "Faulty light troubleshooting",
  "Lighting layout advice",
  "Fixture supply",
  "Ceiling / wall making good",
];

/* ------------------------------------------------------------------ */
/* Form                                                                */
/* ------------------------------------------------------------------ */

export const ltFormProperty = ["Villa", "Apartment", "Office", "Shop", "Restaurant", "Other"];
export const ltFormFixture = ["Ceiling light", "Pendant", "Chandelier", "Downlights", "Wall light", "Outdoor light", "Under-cabinet / strip", "Not sure"];
export const ltFormJob = ["Replacing existing fixture", "New lighting point", "Moving a light", "Faulty light", "Not sure"];
export const ltFormQty = ["1", "2–5", "6–10", "More than 10"];

/* ------------------------------------------------------------------ */
/* FAQ                                                                 */
/* ------------------------------------------------------------------ */

export const ltFaqs: { q: string; a: string }[] = [
  { q: "Can you replace an existing ceiling light?", a: "Yes. We check the existing point, mounting and switch, then fit the new fixture and test it." },
  { q: "Can you install a chandelier?", a: "Yes, including large and heavy chandeliers on high ceilings. We check the weight and the ceiling first so the mounting suits the load." },
  { q: "Can you install a new lighting point?", a: "Yes. A new point means routing a cable from a suitable circuit, adding or changing a switch, and making good the ceiling or wall afterwards." },
  { q: "Can you install outdoor lights?", a: "Yes — entrance, wall, garden, pathway, driveway and flood or security lights, using fixtures made for outdoor exposure." },
  { q: "Can I send photos before booking?", a: "Yes. Photos of the fixture, the ceiling or wall, the existing point and the switch help us plan. We may still need to see it in person before confirming a quote." },
  { q: "Do you install customer-supplied fixtures?", a: "Yes. Send the model or a photo so we can confirm it suits the location, mounting and controls." },
  { q: "Can you install multiple lights?", a: "Yes, from a few downlights to whole-room or multi-room layouts. We plan positions and switching together." },
  { q: "Can you install dimmable lighting?", a: "Yes, where the fixture, lamp, driver and dimmer are compatible. We check compatibility to avoid flicker or buzzing." },
  { q: "Can you install smart lighting?", a: "Yes — smart switches, smart fixtures and motion sensors, where they are compatible with your wiring and setup." },
  { q: "What information do you need for a quote?", a: "The fixture type and number, whether it's a replacement or a new point, the ceiling type and height, the controls you want, and photos." },
  { q: "Can you install lights on high ceilings?", a: "Yes. High ceilings need suitable access equipment and planning for the mounting and future maintenance." },
  { q: "How long does lighting installation take?", a: "It depends on the number of fixtures, whether new points are needed, the ceiling, and access. We'll give you an idea when we quote." },
  { q: "Can you help choose a suitable fixture?", a: "Yes. We can advise on type, size and placement for the room, and supply fixtures if you need them." },
  { q: "Can you troubleshoot a faulty light?", a: "Yes. Flicker, lights that won't turn on, buzzing dimmers and tripping circuits can be diagnosed and repaired." },
];
