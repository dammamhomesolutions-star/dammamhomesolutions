// Content for the Water Heater Repair & Installation page. Confirmed by
// the business: electric storage, instant / tankless electric, gas and solar
// heaters; residential and commercial; old-unit removal; supplying heaters;
// a workmanship warranty (terms given with each quote — no duration is
// stated here). No prices, response times or guaranteed repairs.

export type WhIconName =
  | "heater"
  | "hot"
  | "cold"
  | "repair"
  | "replace"
  | "install"
  | "leak"
  | "thermostat"
  | "heating"
  | "safety"
  | "search"
  | "plumbing"
  | "bolt"
  | "checklist"
  | "technician"
  | "quote"
  | "phone"
  | "alert"
  | "check"
  | "arrow"
  | "flame"
  | "sun"
  | "home"
  | "building";

/* ------------------------------------------------------------------ */
/* Hero diagram                                                        */
/* ------------------------------------------------------------------ */

export type WhPartKey = "tank" | "element" | "thermostat" | "safety" | "inlet" | "outlet" | "drain" | "electrical";

export const whParts: { key: WhPartKey; label: string; body: string }[] = [
  { key: "tank", label: "Tank", body: "Stores heated water ready for use. Its inner lining and condition decide how long a storage heater lasts." },
  { key: "element", label: "Heating element", body: "Heats the water in electric storage heaters. Gas, solar and instant heaters heat water differently." },
  { key: "thermostat", label: "Thermostat", body: "Controls the water temperature and switches heating on and off." },
  { key: "safety", label: "Safety valve", body: "Releases pressure or temperature if it gets too high. Correct safety components are essential at installation." },
  { key: "inlet", label: "Cold-water inlet", body: "Where mains or tank water enters the heater, usually through an isolation valve." },
  { key: "outlet", label: "Hot-water outlet", body: "Where heated water leaves for the taps and showers." },
  { key: "drain", label: "Drain connection", body: "Lets the tank be drained for service or replacement, and carries safety-valve discharge away safely." },
  { key: "electrical", label: "Electrical connection", body: "Supplies power to the heater. Electrical work should be done by qualified professionals only." },
];

/* ------------------------------------------------------------------ */
/* Quick answers                                                       */
/* ------------------------------------------------------------------ */

export const whAnswers: { q: string; a: string }[] = [
  { q: "Why is my water heater not heating?", a: "The usual categories are no power reaching the heater, a failed heating element, a thermostat or control fault, or an internal fault. Gas and solar heaters have their own causes. The exact cause needs checking before deciding on repair." },
  { q: "Why is my water heater leaking?", a: "It depends where. Leaks from pipe connections or valves are often repairable; a leak from the tank body usually means the tank has failed." },
  { q: "Should I repair or replace my water heater?", a: "Repair makes sense when a replaceable part has failed and the tank is sound. Replacement makes more sense with a corroded or leaking tank, repeated failures, or when repair costs approach the price of a new unit." },
  { q: "How do I know what size water heater I need?", a: "It depends on how many people use hot water, how many bathrooms and showers run at the same time, kitchen use, and the space available — not a single formula." },
  { q: "How much does water heater repair cost in Dammam?", a: "It depends on the fault, the part needed, the heater type and access. A technician usually needs to see the heater to give an accurate quote." },
  { q: "How long does water heater installation take?", a: "It depends on the heater type and whether plumbing or electrical changes are needed. A like-for-like replacement is usually much quicker than a new location." },
  { q: "Can a leaking water heater be repaired?", a: "Sometimes. Leaking connections, valves or fittings can be repaired. A leaking or badly corroded tank generally can't." },
  { q: "Why does my water heater keep tripping?", a: "Repeated tripping points to an electrical fault — the element, wiring, connection or the heater itself. It needs professional diagnosis; don't keep resetting the breaker." },
];

/* ------------------------------------------------------------------ */
/* Diagnostic                                                          */
/* ------------------------------------------------------------------ */

export const whSymptoms: { key: string; label: string; causes: string; urgent?: boolean }[] = [
  { key: "nohot", label: "No hot water", causes: "No hot water can come from the power supply, the heating element, the thermostat or controls, an internal fault, or the water supply." },
  { key: "lukewarm", label: "Water is only lukewarm", causes: "Lukewarm water can point to a temperature-control fault, a weak heating element, demand exceeding capacity, or a setting." },
  { key: "runsout", label: "Hot water runs out quickly", causes: "This is often capacity versus demand, but can also be a failing element or sediment taking up space in the tank." },
  { key: "leak", label: "Heater is leaking", causes: "The leak's location matters — a connection or valve is different from the tank itself.", urgent: true },
  { key: "trip", label: "Keeps switching off / tripping", causes: "Repeated tripping usually means an electrical fault in the element, wiring or connection.", urgent: true },
  { key: "temp", label: "Temperature keeps changing", causes: "Fluctuating temperature can come from the thermostat, a failing element, mixing valves or pressure changes." },
  { key: "noise", label: "Strange noise", causes: "Noises can come from sediment, heating, loose components or pressure. The cause needs inspection." },
  { key: "rusty", label: "Rusty or discoloured water", causes: "Discolouration can come from the heater tank or from the pipes or water supply — it should be traced." },
  { key: "old", label: "The heater is old", causes: "Age alone isn't a reason to replace, but an older unit is worth checking for corrosion and reliability." },
  { key: "unsure", label: "I'm not sure", causes: "Describe what you're seeing and send a photo — that's enough to start." },
];

export const whProperty = ["Apartment", "Villa", "House", "Office", "Shop", "Other"];
export const whNeed = ["Repair", "Replacement", "New installation", "Inspection", "Not sure"];

/* ------------------------------------------------------------------ */
/* Heater types                                                        */
/* ------------------------------------------------------------------ */

export const whTypes: { key: string; label: string; icon: WhIconName; how: string; spot: string; notes: string }[] = [
  {
    key: "storage",
    label: "Electric storage (tank)",
    icon: "heater",
    how: "An electric element heats water in an insulated tank, ready for use.",
    spot: "A cylinder on a bathroom wall, in a ceiling void, utility room or on the roof.",
    notes: "The most common type in homes. Capacity sets how much hot water is available at once.",
  },
  {
    key: "instant",
    label: "Instant / tankless electric",
    icon: "bolt",
    how: "Heats water as it flows, with no stored tank.",
    spot: "A compact box under a sink or beside a shower.",
    notes: "Needs a suitable electrical supply. Flow rate limits how many outlets it can serve.",
  },
  {
    key: "gas",
    label: "Gas water heater",
    icon: "flame",
    how: "A gas burner heats the water, either in a tank or instantly.",
    spot: "Usually in a ventilated area with a gas supply and flue.",
    notes: "Needs correct ventilation and gas connections. Gas smell is an emergency — see the warning signs.",
  },
  {
    key: "solar",
    label: "Solar water heater",
    icon: "sun",
    how: "Roof collectors heat water using the sun, often with an electric backup.",
    spot: "Panels and a storage tank on the roof.",
    notes: "Roof position, piping runs and the backup heater all affect performance.",
  },
];

/* ------------------------------------------------------------------ */
/* Problems, warnings, leaks                                           */
/* ------------------------------------------------------------------ */

export const whProblems: { title: string; causes: string[]; note?: string }[] = [
  { title: "No hot water", causes: ["Electrical supply", "Heating element", "Thermostat / controls", "Internal fault"], note: "Please don't open electrical covers to check." },
  { title: "Lukewarm water", causes: ["Temperature control", "Heating performance", "Excessive demand", "Settings"] },
  { title: "Hot water runs out quickly", causes: ["Heater capacity", "Many showers at once", "Heating performance", "Sediment"] },
  { title: "Water heater leaking", causes: ["Connections", "Valves", "Tank deterioration", "Pressure"], note: "Leaks need a proper inspection." },
  { title: "Strange noise", causes: ["Sediment", "Heating-related noise", "Loose components", "System condition"] },
  { title: "Heater keeps tripping", causes: ["Electrical connection", "Heating element", "Wiring", "Internal fault"], note: "Don't keep resetting the breaker." },
  { title: "Rusty or discoloured water", causes: ["Tank corrosion", "Pipework", "Water supply"], note: "The source should be traced." },
];

export const whWarnings = [
  "Active water leakage",
  "A burning smell",
  "Sparking",
  "Damaged electrical parts",
  "Repeated tripping",
  "Severe corrosion",
  "Water near electrical connections",
  "Unusual overheating",
  "Pressure-valve discharging constantly",
  "Gas smell (gas heaters)",
];

export type WhLeakKey = "top" | "inlet" | "outlet" | "valve" | "drain" | "body" | "base";

export const whLeaks: { key: WhLeakKey; label: string; meaning: string; x: number; y: number }[] = [
  { key: "top", label: "Top connections", meaning: "Often a loose or worn fitting — usually repairable.", x: 150, y: 46 },
  { key: "inlet", label: "Cold inlet", meaning: "A fitting, isolation valve or pipe joint. Often repairable.", x: 104, y: 46 },
  { key: "outlet", label: "Hot outlet", meaning: "Fittings or pipe joints on the hot side. Often repairable.", x: 196, y: 46 },
  { key: "valve", label: "Safety valve", meaning: "May be faulty — or doing its job because pressure or temperature is too high. Needs checking, not blocking.", x: 232, y: 110 },
  { key: "drain", label: "Drain valve", meaning: "A worn or loose drain valve. Usually repairable.", x: 190, y: 268 },
  { key: "body", label: "Tank body", meaning: "Water seeping through the tank wall usually means the tank has failed and replacement is needed.", x: 150, y: 160 },
  { key: "base", label: "Under the heater", meaning: "Water collecting below can come from any point above — the source has to be traced.", x: 150, y: 300 },
];

/* ------------------------------------------------------------------ */
/* Capacity, processes, location                                       */
/* ------------------------------------------------------------------ */

export const whCapacity = [
  "Number of occupants",
  "Number of bathrooms",
  "Showers used at the same time",
  "Usage patterns (mornings, evenings)",
  "Kitchen hot-water use",
  "Property type",
  "Space available for the heater",
];

export const whInstallSteps = [
  { title: "Understand your requirements", body: "Property, household size, hot-water demand and the existing system." },
  { title: "Inspect the existing setup", body: "Plumbing, electrical supply, space, connections and support." },
  { title: "Select a suitable heater", body: "Capacity, size, type and installation requirements — supplied by us or you." },
  { title: "Prepare the area", body: "Safe access and suitable conditions for the installation." },
  { title: "Install the unit", body: "Mount it and connect plumbing and required safety components." },
  { title: "Check connections", body: "Water connections, valves, drainage, electrical connection and stability." },
  { title: "Test", body: "Water flow, heating, temperature control, leaks and system behaviour." },
  { title: "Handover", body: "Basic operation, maintenance advice and warranty terms explained." },
];

export const whReplaceSteps = [
  { title: "Inspect", body: "Understand why the current heater failed." },
  { title: "Repair or replace?", body: "We don't replace if a repair is practical." },
  { title: "Select a unit", body: "Match capacity and installation needs." },
  { title: "Remove the old heater", body: "Drained and removed by our team." },
  { title: "Prepare connections", body: "Check the plumbing and electrical setup." },
  { title: "Install", body: "To the manufacturer's and applicable requirements." },
  { title: "Test", body: "Operation and connections checked." },
  { title: "Handover", body: "Operation and maintenance explained." },
];

export const whLocation = [
  "Enough space around the unit",
  "Access for maintenance",
  "A support strong enough for a full tank",
  "Plumbing access",
  "A suitable electrical supply",
  "A safe route for drain and valve discharge",
  "Ventilation where the system needs it (gas)",
  "Protection from unsuitable conditions",
];

export const whDiy: { task: string; you: boolean }[] = [
  { task: "Identify symptoms", you: true },
  { task: "Send heater photos and details", you: true },
  { task: "Basic visual check from a distance", you: true },
  { task: "Electrical troubleshooting", you: false },
  { task: "Opening or dismantling the heater", you: false },
  { task: "Replacing components", you: false },
  { task: "Installing a new heater", you: false },
  { task: "Safety testing", you: false },
];

/* ------------------------------------------------------------------ */
/* Cost, maintenance, checklists                                       */
/* ------------------------------------------------------------------ */

export const whCostFactors: { key: string; label: string; weight: number }[] = [
  { key: "type", label: "Gas or solar system", weight: 3 },
  { key: "capacity", label: "Large capacity", weight: 2 },
  { key: "unit", label: "New heater supplied", weight: 3 },
  { key: "plumbing", label: "Plumbing changes", weight: 2 },
  { key: "electrical", label: "Electrical upgrades", weight: 2 },
  { key: "access", label: "Difficult access (ceiling / roof)", weight: 2 },
  { key: "removal", label: "Old unit removal", weight: 1 },
  { key: "units", label: "More than one heater", weight: 2 },
];

export const whDecisionFlow = [
  { when: "Minor, localised fault", then: "Repair may make sense" },
  { when: "Repeated failures", then: "Compare repair and replacement" },
  { when: "Tank corrosion or tank leak", then: "Replacement is usually more appropriate" },
  { when: "Old unit in poor condition", then: "Evaluate replacement" },
  { when: "New property or extra demand", then: "New installation" },
];

export const whMaintain = [
  "Have it inspected periodically",
  "Look at visible connections for drips",
  "Notice new or unusual sounds",
  "Watch for small leaks or damp patches",
  "Pay attention to temperature changes",
  "Follow the manufacturer's maintenance guidance",
  "Deal with small issues early",
];

export const whBeforeCall = [
  "What exactly is happening?",
  "Is there any visible leakage?",
  "Is the problem constant or on and off?",
  "Is there any hot water at all?",
  "Does it affect all taps or just one?",
  "What type of heater is it?",
  "Roughly how old is it?",
  "Any recent installation or repair?",
  "Any unusual smell or noise?",
  "Can you send a photo of the heater and connections?",
];

export const whQuestions = [
  "Is my heater repairable?",
  "What caused the problem?",
  "Does the tank itself look damaged?",
  "Would replacement be more practical?",
  "What size heater do I need?",
  "What's included in the installation?",
  "Are plumbing changes included?",
  "Are electrical requirements included?",
  "Is removal of the old heater included?",
  "What testing is done after installation?",
  "What manufacturer warranty comes with the heater?",
  "What warranty covers the workmanship?",
];

export const whScope = [
  { service: "Diagnosis", purpose: "Find the likely source of the problem" },
  { service: "Repair", purpose: "Fix repairable faults — elements, thermostats, valves, connections" },
  { service: "Replacement", purpose: "Replace a failed or unsuitable unit, including removal of the old one" },
  { service: "New installation", purpose: "Install a new water heating system" },
  { service: "Connection inspection", purpose: "Review the plumbing and electrical connections" },
  { service: "Testing", purpose: "Confirm safe operation after service" },
];

/* ------------------------------------------------------------------ */
/* Form                                                                */
/* ------------------------------------------------------------------ */

export const whFormService = ["Repair", "Replacement", "New installation", "Inspection", "Not sure"];
export const whFormType = ["Electric tank", "Instant / tankless", "Gas", "Solar", "Not sure"];
export const whFormProblem = ["No hot water", "Lukewarm", "Runs out quickly", "Leaking", "Tripping", "Noise", "Discoloured water", "Other"];
export const whFormAge = ["Under 3 years", "3–7 years", "Over 7 years", "Don't know"];

/* ------------------------------------------------------------------ */
/* FAQ                                                                 */
/* ------------------------------------------------------------------ */

export const whFaqs: { q: string; a: string }[] = [
  { q: "Why is my water heater not producing hot water?", a: "Common causes are no power reaching the heater, a failed heating element, a thermostat or control fault, or an internal fault. Gas and solar heaters have their own causes. A technician needs to check which one it is." },
  { q: "Why is my water heater only producing lukewarm water?", a: "Often a temperature-control or element problem, or more hot water being used than the heater can supply. Settings and sediment can also play a part." },
  { q: "Why does my water heater leak?", a: "Leaks can come from connections, valves, the drain or the tank itself. Connection and valve leaks are usually repairable; tank leaks usually mean replacement." },
  { q: "Should I repair or replace my water heater?", a: "Repair when a replaceable part has failed and the tank is sound. Consider replacement for a corroded or leaking tank, repeated breakdowns, or when repair costs come close to a new unit." },
  { q: "How do I choose the right water heater size?", a: "Consider how many people use hot water, how many showers run at once, kitchen use and the space available. We'll recommend a capacity after looking at the property." },
  { q: "How much does water heater repair cost in Dammam?", a: "It depends on the fault, the parts needed, the heater type and access. We'll quote once we've seen the heater or clear photos of it." },
  { q: "How much does water heater installation cost?", a: "It depends on the heater type and capacity, whether we supply the unit, plumbing and electrical changes, access and old-unit removal. We'll quote for your specific setup." },
  { q: "Does installation include removing the old heater?", a: "Yes, we can drain and remove the old heater as part of a replacement. It's listed in the quote." },
  { q: "Why does my water heater keep tripping?", a: "Repeated tripping usually indicates an electrical fault in the element, wiring or connection. Stop resetting the breaker and have it checked." },
  { q: "How often should a water heater be inspected?", a: "Follow the manufacturer's guidance, and have it checked sooner if you notice leaks, noises, discoloured water or temperature changes." },
  { q: "Can an old water heater be replaced with a larger one?", a: "Often, yes — if there's space, the support can carry the extra weight, and the electrical or gas supply suits the new unit. We check those first." },
  { q: "What should I check before calling a water heater technician?", a: "Note what's happening, whether there's a leak, whether it affects all taps, the heater type and rough age, and take a photo of the heater and its connections. Don't open electrical covers." },
];
