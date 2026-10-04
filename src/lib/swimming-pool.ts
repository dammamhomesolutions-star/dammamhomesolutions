// Content for the Swimming Pool Repair & Maintenance page. Confirmed by the
// business: pump and filter repair / replacement, leak detection and repair,
// tile, grout and coping repair, pool light repair, routine cleaning and water
// care, maintenance contracts, heater / chlorinator / automation servicing,
// resurfacing / re-plastering, commercial and compound pools, and a
// workmanship warranty (terms in each quote). Real before / after photos will
// be supplied later — until then the slider uses labelled illustrations. No
// prices, durations, chemical dosing, electrical DIY or regulatory claims.

export type SpIconName =
  | "pool"
  | "water"
  | "level"
  | "circulation"
  | "clarity"
  | "pump"
  | "filter"
  | "pipe"
  | "valve"
  | "skimmer"
  | "drain"
  | "tile"
  | "light"
  | "heater"
  | "chlorinator"
  | "control"
  | "edge"
  | "area"
  | "calendar"
  | "home"
  | "building"
  | "camera"
  | "search"
  | "repair"
  | "check"
  | "alert"
  | "arrow"
  | "phone"
  | "sun";

/* ------------------------------------------------------------------ */
/* Hero status panel                                                   */
/* ------------------------------------------------------------------ */

export type SpState = "good" | "check" | "attention";
export const spStateLabel: Record<SpState, string> = { good: "Good", check: "Check recommended", attention: "Needs attention" };

export const spStatusRows: { label: string; start: SpState; tip: Record<SpState, string> }[] = [
  { label: "Water", start: "attention", tip: { good: "Clear and comfortable.", check: "Slightly dull — keep an eye on it.", attention: "Cloudy or discoloured — balance and filtration need checking." } },
  { label: "Circulation", start: "check", tip: { good: "Strong, even flow.", check: "Flow seems weaker than usual.", attention: "Little or no movement at the returns." } },
  { label: "Surface", start: "good", tip: { good: "No visible damage.", check: "A few loose tiles or stains.", attention: "Cracks, hollow areas or failing finish." } },
  { label: "Equipment", start: "check", tip: { good: "Running normally.", check: "New noise or cycling.", attention: "Not starting, leaking or tripping." } },
  { label: "Maintenance", start: "attention", tip: { good: "Up to date.", check: "Due soon.", attention: "Overdue." } },
];

/* ------------------------------------------------------------------ */
/* Problem cards                                                       */
/* ------------------------------------------------------------------ */

export const spProblems: { icon: SpIconName; title: string; q: string; href: string }[] = [
  { icon: "level", title: "Water level", q: "Dropping faster than expected?", href: "#water-loss" },
  { icon: "circulation", title: "Circulation", q: "Water isn't moving properly?", href: "#equipment" },
  { icon: "clarity", title: "Water clarity", q: "Cloudy or hard to keep clear?", href: "#water-clarity" },
  { icon: "pump", title: "Equipment", q: "Pump or filter behaving differently?", href: "#equipment" },
  { icon: "tile", title: "Surface", q: "Tiles, plaster or coping damaged?", href: "#surface" },
  { icon: "light", title: "Pool lighting", q: "Lights out, flickering or damaged?", href: "#lighting" },
];

/* ------------------------------------------------------------------ */
/* Pool explorer                                                       */
/* ------------------------------------------------------------------ */

export type SpSpot = "water" | "skimmer" | "pump" | "filter" | "pipes" | "surface" | "tiles" | "lights" | "drain" | "edge" | "area";

export const spSpots: { key: SpSpot; label: string; x: number; y: number; notice: string; causes: string; check: string; next: string }[] = [
  { key: "water", label: "Water", x: 50, y: 48, notice: "Cloudy, green, discoloured or hard to keep clear.", causes: "Water balance, filtration, circulation or contamination.", check: "Chemistry, filter condition and run times.", next: "Water care visit, then routine maintenance." },
  { key: "skimmer", label: "Skimmer", x: 16, y: 22, notice: "Debris building up, weak suction, a cracked lid or basket.", causes: "Blockage, low water level, damaged parts.", check: "Basket, weir door and the line to the pump.", next: "Cleaning and part replacement if damaged." },
  { key: "pump", label: "Pump", x: 92, y: 30, notice: "Noisy operation, weak flow, cycling or not starting.", causes: "Worn bearings, air leaks, blockage, motor or electrical issues.", check: "Pump, seals, impeller and supply — by a qualified technician.", next: "Pump assessment; repair or replacement." },
  { key: "filter", label: "Filter", x: 92, y: 62, notice: "Reduced flow, cloudy water, pressure changes.", causes: "Dirty or worn media, cartridge or valve problems.", check: "Pressure, media and backwash valve.", next: "Filter service, media or cartridge change." },
  { key: "pipes", label: "Pipes", x: 78, y: 82, notice: "Wet ground, damp patches, unexplained water loss.", causes: "Leaking joints or cracked pipework.", check: "Pressure testing and visible fittings.", next: "Leak detection, then repair." },
  { key: "surface", label: "Pool surface", x: 34, y: 62, notice: "Rough patches, stains, cracking or flaking.", causes: "Age, water balance, movement.", check: "Extent of damage and whether it's hollow.", next: "Patch repair or resurfacing assessment." },
  { key: "tiles", label: "Tiles", x: 64, y: 16, notice: "Cracked, loose or missing tiles; failing grout.", causes: "Movement, impact, grout wear, water balance.", check: "Bond of surrounding tiles.", next: "Tile and grout repair." },
  { key: "lights", label: "Pool lights", x: 50, y: 82, notice: "Not working, flickering, water in the fitting.", causes: "Failed lamp, seal failure, wiring or transformer.", check: "Fitting and circuit — by a qualified technician.", next: "Pool light repair or replacement." },
  { key: "drain", label: "Main drain", x: 50, y: 60, notice: "Weak suction, debris collecting, a damaged cover.", causes: "Blockage or damaged cover.", check: "Cover condition and flow.", next: "Assessment — drain covers are a safety item." },
  { key: "edge", label: "Pool edge / coping", x: 8, y: 52, notice: "Cracked, loose or sharp coping stones.", causes: "Movement, impact, failed bedding.", check: "Bedding and joints.", next: "Coping repair." },
  { key: "area", label: "Surrounding area", x: 28, y: 92, notice: "Damp patches, cracked paving, puddles that don't dry.", causes: "Leaks, drainage or splash-out.", check: "Where the water is coming from.", next: "Leak assessment if it persists." },
];

/* ------------------------------------------------------------------ */
/* Health indicator                                                    */
/* ------------------------------------------------------------------ */

export const spHealthQs: { key: string; label: string; options: { label: string; score: number }[] }[] = [
  { key: "water", label: "Water", options: [{ label: "Clear", score: 0 }, { label: "Cloudy", score: 2 }, { label: "Discoloured", score: 2 }, { label: "Unknown", score: 1 }] },
  { key: "level", label: "Water level", options: [{ label: "Stable", score: 0 }, { label: "Dropping", score: 3 }, { label: "Frequently changing", score: 2 }, { label: "Unknown", score: 1 }] },
  { key: "circ", label: "Circulation", options: [{ label: "Strong", score: 0 }, { label: "Weak", score: 2 }, { label: "Uneven", score: 1 }, { label: "Unknown", score: 1 }] },
  { key: "equip", label: "Equipment", options: [{ label: "Normal", score: 0 }, { label: "Noisy", score: 2 }, { label: "Not running correctly", score: 3 }, { label: "Unknown", score: 1 }] },
  { key: "surface", label: "Surface", options: [{ label: "Good", score: 0 }, { label: "Cracked", score: 2 }, { label: "Damaged", score: 2 }, { label: "Discoloured", score: 1 }] },
];

/* ------------------------------------------------------------------ */
/* System                                                              */
/* ------------------------------------------------------------------ */

export type SpPart = "pool" | "skimmer" | "pump" | "filter" | "heater" | "chlorinator" | "return" | "lights" | "controls";

export const spParts: { key: SpPart; label: string; optional?: boolean; body: string }[] = [
  { key: "pool", label: "Pool", body: "Holds the water. Everything else exists to keep it clean, clear and moving." },
  { key: "skimmer", label: "Skimmer / intake", body: "Draws surface water and floating debris into the system, with a basket to catch leaves." },
  { key: "pump", label: "Pump", body: "The heart of the system — pulls water from the pool and pushes it through the filter." },
  { key: "filter", label: "Filter", body: "Sand, cartridge or media that traps fine particles so the water stays clear." },
  { key: "heater", label: "Heater", optional: true, body: "Warms the water on its way back, where fitted." },
  { key: "chlorinator", label: "Chlorinator", optional: true, body: "Salt or tablet chlorination that keeps sanitiser levels steady, where fitted." },
  { key: "return", label: "Returns", body: "Jets that push clean water back in, keeping the whole pool circulating." },
  { key: "lights", label: "Lighting", optional: true, body: "Underwater lights on their own low-voltage or protected circuit." },
  { key: "controls", label: "Automation / controls", optional: true, body: "Timers and controllers that run the pump, lights and equipment on schedule." },
];

/* ------------------------------------------------------------------ */
/* Water loss                                                          */
/* ------------------------------------------------------------------ */

export const spNormalLoss = ["Evaporation — especially in summer heat and wind", "Splash-out when the pool is used", "Backwashing the filter", "Water dragged out on bodies and towels"];
export const spConcernLoss = ["Ongoing loss you can't explain", "Wet or soft ground near the pool", "Water around the equipment", "Level dropping even when unused", "Damp patches on nearby walls or floors", "Cracks in the pool shell or surround"];

export const spTopUp = ["Rarely", "Weekly", "Several times a week", "Daily", "Unsure"];
export const spWhere = ["Around the pool", "Equipment area", "No visible water", "Unknown"];

/* ------------------------------------------------------------------ */
/* Equipment                                                           */
/* ------------------------------------------------------------------ */

export const spPump = ["Unusual noise", "Weak circulation", "Not starting", "Inconsistent operation", "Visible leakage", "Tripping the breaker"];
export const spFilter = ["Reduced flow", "Poor water clarity", "Pressure changes", "Needs cleaning very often", "Media or cartridge worn"];

export type SpRoomPart = "pump" | "filter" | "valves" | "pipes" | "controls";
export const spRoom: { key: SpRoomPart; label: string; body: string }[] = [
  { key: "pump", label: "Pump", body: "Moves the water. Noise, leaks at the seal or weak flow are the usual signs it needs attention." },
  { key: "filter", label: "Filter", body: "Traps dirt. Rising pressure means it needs cleaning or the media needs replacing." },
  { key: "valves", label: "Valves", body: "Direct water for filtering, backwashing and draining. Worn valves leak or bypass." },
  { key: "pipes", label: "Pipes", body: "Carry water to and from the pool. Joints and unions are common leak points." },
  { key: "controls", label: "Controls", body: "Timers, breakers and control panels. Electrical work must be done by a qualified technician." },
];

/* ------------------------------------------------------------------ */
/* Water clarity                                                       */
/* ------------------------------------------------------------------ */

export const spWaterStates: { key: string; label: string; color: string; body: string }[] = [
  { key: "clear", label: "Clear", color: "#8fd3e0", body: "Normal appearance — keep the routine going." },
  { key: "cloudy", label: "Cloudy", color: "#c9dde2", body: "Can point to water balance, filtration, circulation, contamination or a mix of these." },
  { key: "discoloured", label: "Discoloured", color: "#8fb39a", body: "Green, brown or other tints need their cause identified before treatment." },
  { key: "persistent", label: "Keeps coming back", color: "#a8b5b8", body: "A recurring problem usually means the wider system or maintenance routine needs reviewing." },
];

/* ------------------------------------------------------------------ */
/* Surface                                                             */
/* ------------------------------------------------------------------ */

export const spSurfaceSpots: { key: string; label: string; x: number; y: number; level: 0 | 1 | 2; body: string }[] = [
  { key: "cracked", label: "Cracked tile", x: 22, y: 30, level: 1, body: "Single cracked tiles are usually replaced; several in a line can point to movement worth checking." },
  { key: "loose", label: "Loose tile", x: 46, y: 22, level: 1, body: "A hollow or loose tile is re-bedded — and nearby tiles are checked too." },
  { key: "grout", label: "Grout deterioration", x: 70, y: 34, level: 0, body: "Worn grout is raked out and replaced to protect the tiles behind it." },
  { key: "coping", label: "Damaged coping", x: 88, y: 12, level: 1, body: "Cracked or loose coping stones are re-bedded or replaced." },
  { key: "stain", label: "Surface discolouration", x: 30, y: 66, level: 0, body: "Often water balance or metals — sometimes cleaned, sometimes needing surface treatment." },
  { key: "peeling", label: "Peeling / failed finish", x: 60, y: 70, level: 2, body: "Widespread failure of plaster or paint usually means resurfacing." },
  { key: "rough", label: "Rough areas", x: 82, y: 58, level: 2, body: "Etched or rough plaster can be smoothed or resurfaced depending on extent." },
];
export const spSurfaceLevels = ["Appearance issue", "Surface repair", "Deeper assessment"];

/* ------------------------------------------------------------------ */
/* Lighting                                                            */
/* ------------------------------------------------------------------ */

export const spLightStates: { key: string; label: string; body: string }[] = [
  { key: "off", label: "Light not working", body: "Could be the lamp, the fitting, the transformer or the circuit." },
  { key: "flicker", label: "Flickering", body: "Often a failing lamp or connection — get it checked before it stops altogether." },
  { key: "damaged", label: "Damaged fixture", body: "Cracked lenses or rims need replacing to keep the fitting sealed." },
  { key: "water", label: "Water in the fixture", body: "A failed seal. Switch the lights off and leave it for a technician." },
  { key: "multiple", label: "Several lights affected", body: "Points to the shared supply, transformer or controls rather than one lamp." },
];

/* ------------------------------------------------------------------ */
/* Calendar + plan                                                     */
/* ------------------------------------------------------------------ */

export const spCalendar: { key: string; label: string; items: string[] }[] = [
  { key: "weekly", label: "Weekly", items: ["Skim and empty baskets", "Brush walls and floor", "Vacuum", "Test and balance water", "Check pump and filter are running"] },
  { key: "monthly", label: "Monthly", items: ["Clean or backwash the filter", "Inspect pump seals and noise", "Check lights and timers", "Look over tiles and coping"] },
  { key: "seasonal", label: "Seasonal", items: ["Full equipment check", "Deep clean of filter media", "Surface and grout inspection", "Plan repairs before peak summer use"] },
  { key: "before", label: "Before heavy use", items: ["Check water condition", "Confirm circulation", "Test equipment", "Look for visible surface issues"] },
  { key: "after", label: "After a long break", items: ["Inspect the pool and surrounds", "Restart and check equipment", "Rebalance and clear the water", "Check for leaks or damage before normal use"] },
];

export const spPlanType = ["Residential", "Villa", "Apartment / compound", "Commercial"];
export const spPlanUsage = ["Light", "Regular", "Heavy", "Seasonal"];
export const spPlanNeed = ["Cleaning", "Water care", "Equipment checks", "Surface maintenance", "Complete maintenance"];
export const spPlanCond = ["Good", "Needs attention", "Several issues", "Unknown"];

/* ------------------------------------------------------------------ */
/* Journey, cost, ready, when to call                                  */
/* ------------------------------------------------------------------ */

export const spJourney: { title: string; body: string }[] = [
  { title: "Tell us what changed", body: "What you've noticed, when it started, and photos if you have them." },
  { title: "Review the pool", body: "We look at the water, surface, surrounds and equipment area." },
  { title: "Assess the system", body: "Pump, filter, circulation, lights and any leak concerns — tested where needed." },
  { title: "Define the work", body: "Repair, maintenance or both — explained and quoted before we start." },
  { title: "Repair / maintain", body: "Carry out the agreed work, or start the maintenance routine." },
  { title: "Final check", body: "Confirm everything runs, the water is on track and you know what's next." },
];

export const spCostFactors = ["Pool size", "Type of issue", "Equipment condition", "Surface condition", "Access", "Repair complexity", "Number of components", "Maintenance frequency", "Residential or commercial", "Parts and materials"];

export const spReady = [
  "Water level stable",
  "Water looks acceptable",
  "Circulation working normally",
  "Pump running normally",
  "Filter working as expected",
  "No obvious surface damage",
  "No unexplained water loss",
  "Pool lights working",
  "Surrounding area looks safe",
  "Maintenance up to date",
];

export const spWhenToCall = ["Persistent water loss", "Unusual pump noise", "Weak circulation", "Cloudy water that keeps coming back", "Visible leaks", "Damaged tiles", "A deteriorating surface", "Equipment repeatedly stopping", "Unexplained changes in performance"];

/* ------------------------------------------------------------------ */
/* Form                                                                */
/* ------------------------------------------------------------------ */

export const spFormProperty = ["Villa", "Apartment / compound", "Hotel / gym", "Commercial", "Other"];
export const spFormProblem = ["Water loss / leak", "Cloudy water", "Pump / filter", "Tiles / surface", "Lights", "Routine maintenance", "Not sure"];
export const spFormPool = ["In-ground", "Above-ground", "Infinity / overflow", "Not sure"];
export const spFormSize = ["Small", "Medium", "Large", "Not sure"];
export const spPhotoTips = ["Pool overview", "Equipment area", "Damaged surface", "Water appearance", "Pump and filter", "Problem area"];

/* ------------------------------------------------------------------ */
/* Answers + FAQ                                                       */
/* ------------------------------------------------------------------ */

export const spAnswers: { q: string; a: string }[] = [
  { q: "What does swimming pool maintenance include?", a: "Typically skimming, brushing, vacuuming, emptying baskets, testing and balancing the water, cleaning the filter and checking the pump, lights and surfaces — on a schedule that suits the pool's use." },
  { q: "What causes a pool to lose water?", a: "Evaporation, splash-out and backwashing are normal. Ongoing unexplained loss can come from leaks in the shell, fittings, pipework or equipment — which needs proper detection." },
  { q: "Why does pool water become cloudy?", a: "Usually an imbalance in the water, poor filtration, short pump run times, weak circulation or a heavy load of swimmers, dust or debris." },
  { q: "How do I know if my pool pump has a problem?", a: "New noise, weak flow at the returns, cycling on and off, failing to start, leaks at the pump or tripping the breaker are common signs." },
  { q: "Can pool tiles be repaired?", a: "Yes. Cracked and loose tiles are replaced or re-bedded and grout renewed; widespread failure may point to a deeper issue or resurfacing." },
  { q: "How often should a pool be inspected?", a: "Routine care is usually weekly, with equipment and surfaces checked regularly — and a fuller inspection before heavy use or after the pool has sat unused." },
  { q: "What is the difference between pool repair and maintenance?", a: "Maintenance keeps a working pool clean and running. Repair fixes something that has failed — a leak, a pump, damaged tiles. Good maintenance spots repairs early." },
];

export const spFaqs: { q: string; a: string }[] = [
  { q: "How often should a swimming pool be maintained?", a: "Most pools benefit from weekly routine care, with regular equipment checks and fuller inspections seasonally. Heavily used pools may need more." },
  { q: "Why is my pool losing water?", a: "Evaporation and splash-out account for some loss, especially in summer. If the level keeps dropping unexplained, it may be a leak and is worth an assessment." },
  { q: "Why is my pool water cloudy?", a: "Common causes are water balance, filtration, circulation or contamination. We test the water and check the system rather than just adding chemicals." },
  { q: "Why is my pool pump making unusual noise?", a: "Worn bearings, air getting in, a blockage or a struggling motor are common causes. Have it checked by a technician — don't open live electrical equipment." },
  { q: "How do I know if my pool filter needs attention?", a: "Rising pressure, weaker flow, cloudy water or needing to clean it far more often than usual are the usual signs." },
  { q: "Can damaged pool tiles be repaired?", a: "Yes — we replace cracked tiles, re-bed loose ones and renew grout and coping." },
  { q: "Can a swimming pool leak be repaired?", a: "Yes. We carry out leak detection to find where the water is going, then repair the shell, fittings or pipework as needed." },
  { q: "What is included in pool maintenance?", a: "Cleaning, water testing and balancing, filter care and checks of the pump, lights and surfaces. Maintenance contracts can be set up on a regular schedule." },
  { q: "Do you repair pool pumps?", a: "Yes — we repair and replace pumps and filters, and service heaters, chlorinators and automation where fitted." },
  { q: "Can I send photos before booking?", a: "Yes. Photos of the pool, the equipment area and the problem help us prepare. Leaks and equipment faults still need an on-site check." },
  { q: "How much does pool repair cost in Dammam?", a: "It depends on the pool, the issue, the equipment and the parts needed. We assess first and quote before any work." },
  { q: "How long does pool repair take?", a: "It depends on the repair and whether parts are needed. We'll give you an idea once we've assessed the pool." },
  { q: "Should I maintain the pool even when it is not being used?", a: "Yes. Unused pools still collect dust and debris and the water can turn. Keeping some care going avoids a bigger clean-up and equipment problems later." },
];
