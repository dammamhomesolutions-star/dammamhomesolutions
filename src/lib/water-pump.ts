// Content for the Water Pump Repair page. Confirmed by the business:
// booster / pressure, transfer and submersible pumps, and pressure-tank
// systems; repair, replacement and installation; supplying pumps;
// residential and commercial; a workmanship warranty (terms in each quote,
// no duration stated). No prices, response times or guaranteed pressure.

export type WpIconName =
  | "pump"
  | "tank"
  | "pressure"
  | "flow"
  | "repair"
  | "replace"
  | "install"
  | "leak"
  | "motor"
  | "controller"
  | "valve"
  | "pipe"
  | "search"
  | "alert"
  | "technician"
  | "home"
  | "apartment"
  | "building"
  | "checklist"
  | "phone"
  | "check"
  | "arrow"
  | "sound"
  | "bolt";

/* ------------------------------------------------------------------ */
/* Quick answers                                                       */
/* ------------------------------------------------------------------ */

export const wpAnswers: { q: string; a: string }[] = [
  { q: "Why is my water pump not working?", a: "The main categories are no power or a control fault, a motor or mechanical fault, no water reaching the pump, or a problem in the pressure controls. Which one needs checking on site." },
  { q: "Why is my water pressure low?", a: "The pump is only one possibility. Low tank level, a blocked filter, a partly closed valve, a leak, a restricted pipe or a faulty pressure controller can all cause it." },
  { q: "Why does my water pump keep running?", a: "It may be meeting real demand, chasing a hidden leak, unable to reach its target pressure, short of water, or responding to a faulty control." },
  { q: "Why does my pump keep turning on and off?", a: "Rapid on-off cycling usually points to the pressure control, a pressure tank that has lost its charge, or a small leak letting pressure drop." },
  { q: "Why is my water pump making noise?", a: "Worn bearings, vibration, loose mounting, air in the system or the pump struggling for water can all cause noise. The sound alone doesn't confirm which." },
  { q: "Should I repair or replace my water pump?", a: "Repair when a replaceable part has failed and the pump is otherwise sound. Replace when there's major mechanical failure, heavy corrosion, repeated breakdowns, or the pump no longer suits the system." },
  { q: "How much does water pump repair cost in Dammam?", a: "It depends on the pump type, the fault, parts, access and whether plumbing or electrical work is needed. A diagnosis usually comes first." },
  { q: "Does a bigger pump always mean better water pressure?", a: "No. An oversized pump can cycle badly, strain pipes and fittings, and still be limited by supply or pipe size. The pump has to match the system." },
  { q: "Can low water pressure be caused by plumbing instead of the pump?", a: "Yes — blocked filters, scaled or undersized pipes, partly closed valves and leaks are common causes that a new pump won't fix." },
  { q: "Is it safe to repair a water pump myself?", a: "Pumps combine electricity and pressurised water. Beyond describing the problem and taking photos, repairs are best left to a professional." },
];

/* ------------------------------------------------------------------ */
/* Diagnostic                                                          */
/* ------------------------------------------------------------------ */

export const wpProblemsList: { key: string; label: string; note: string; urgent?: boolean }[] = [
  { key: "noflow", label: "No water flow", note: "No flow can come from an empty tank, a pump that isn't running, an airlock, a closed valve or a control fault." },
  { key: "weak", label: "Weak water pressure", note: "Weak pressure can come from the pump, the supply, filters, valves, pipe restrictions, leaks or the pressure controls." },
  { key: "nostart", label: "Pump won't start", note: "Power, the controller, the pressure switch, the motor or dry-run protection can all stop a pump starting." },
  { key: "continuous", label: "Pump runs continuously", note: "Continuous running can mean demand, a hidden leak, low supply, a control problem or a worn pump." },
  { key: "cycling", label: "Pump starts and stops repeatedly", note: "Rapid cycling usually points to the pressure control, a pressure tank or a small leak." },
  { key: "noisy", label: "Pump is noisy", note: "Noise can come from bearings, mounting, air in the system or the pump struggling for water." },
  { key: "vibrating", label: "Pump is vibrating", note: "Vibration can come from mounting, alignment, wear or pipe connections." },
  { key: "leaking", label: "Pump is leaking", note: "The leak may be from a seal, fitting, valve or nearby pipe — not necessarily the pump body.", urgent: true },
  { key: "hot", label: "Pump gets very hot", note: "Overheating can come from continuous running, mechanical resistance, electrical faults or poor ventilation.", urgent: true },
  { key: "trips", label: "Pump trips the electrical supply", note: "Repeated tripping points to an electrical or motor fault — don't keep resetting it.", urgent: true },
  { key: "changes", label: "Water pressure changes", note: "Fluctuating pressure can come from the controller, a pressure tank, demand changes or supply." },
  { key: "unsure", label: "I'm not sure", note: "Describe what you're seeing and send a photo or short video of the pump." },
];

export const wpWhere = ["Whole property", "One bathroom", "Kitchen", "Upper floor", "Outdoor tap", "Multiple fixtures", "Not sure"];
export const wpProperty = ["Apartment", "Villa", "House", "Office", "Shop", "Commercial property", "Other"];

/* ------------------------------------------------------------------ */
/* System diagram                                                      */
/* ------------------------------------------------------------------ */

export type WpPartKey = "tank" | "suction" | "pump" | "check" | "control" | "ptank" | "discharge" | "fixtures";

export const wpParts: { key: WpPartKey; label: string; body: string }[] = [
  { key: "tank", label: "Water tank", body: "The pump can only deliver what reaches it. A low or empty tank, or a blocked tank outlet, limits everything after it." },
  { key: "suction", label: "Inlet / suction line", body: "Carries water from the tank to the pump. Air leaks, blockages or a long, narrow run can starve the pump." },
  { key: "pump", label: "Pump", body: "Moves water and adds pressure. A motor drives an impeller inside the housing; seals keep water away from the motor." },
  { key: "check", label: "Check valve", body: "A non-return valve that stops water flowing back when the pump stops. A failing one can cause cycling or loss of prime." },
  { key: "control", label: "Pressure control", body: "A pressure switch or electronic controller starts and stops the pump as pressure falls and rises." },
  { key: "ptank", label: "Pressure tank (where fitted)", body: "Stores a small volume under pressure so the pump doesn't start for every tap. Not every system has one." },
  { key: "discharge", label: "Discharge line", body: "Carries pressurised water from the pump to the property's pipework." },
  { key: "fixtures", label: "Fixtures", body: "Taps, showers, heaters and appliances. What you notice here is the end result of everything upstream." },
];

/* ------------------------------------------------------------------ */
/* Problems                                                            */
/* ------------------------------------------------------------------ */

export const wpProblems: { title: string; causes: string[]; note?: string }[] = [
  { title: "Pump won't start", causes: ["Electrical supply", "Controller", "Motor", "Pressure control", "Internal fault"], note: "Please don't open electrical covers." },
  { title: "Pump runs continuously", causes: ["Real demand", "Hidden leak", "Pressure-control fault", "Can't reach pressure", "System set-up", "Pump fault"] },
  { title: "Starts and stops repeatedly", causes: ["Pressure control", "Pressure tank", "Fluctuating demand", "Small leak"] },
  { title: "Weak water pressure", causes: ["Pump performance", "Supply", "Blocked filter", "Pipe restriction", "Leak", "Valve", "Controller", "System design"] },
  { title: "Pump is noisy", causes: ["Vibration", "Mechanical wear", "Air in the system", "Installation", "Bearings"] },
  { title: "Pump vibrates", causes: ["Mounting", "Alignment", "Mechanical condition", "Pipe connections"] },
  { title: "Pump is leaking", causes: ["Connection", "Seal", "Fitting", "Valve", "Housing", "Nearby pipework"] },
  { title: "Pump overheats", causes: ["Continuous running", "Mechanical resistance", "Electrical problem", "Poor ventilation", "Running dry"] },
  { title: "Pump keeps tripping", causes: ["Motor fault", "Wiring", "Water near electrics", "Control fault"], note: "Don't keep resetting the breaker." },
];

/* ------------------------------------------------------------------ */
/* Low-pressure stages                                                 */
/* ------------------------------------------------------------------ */

export const wpPressureStages: { key: string; label: string; checks: string[] }[] = [
  { key: "source", label: "Source", checks: ["Tank level", "Incoming supply", "Tank outlet and float valve"] },
  { key: "pump", label: "Pump", checks: ["Motor and impeller condition", "Priming / air", "Pump suited to the system"] },
  { key: "pipework", label: "Pipework", checks: ["Blocked filters or strainers", "Partly closed valves", "Scaled or undersized pipes", "Leaks"] },
  { key: "control", label: "Pressure control", checks: ["Switch or controller settings", "Pressure tank charge", "Check valve"] },
  { key: "fixtures", label: "Fixtures", checks: ["Clogged aerators or shower heads", "One fixture vs all", "Mixer or heater restrictions"] },
];

export const wpLeakPoints: { key: string; label: string; meaning: string; x: number; y: number }[] = [
  { key: "inlet", label: "Inlet connection", meaning: "A loose or worn fitting on the suction side — often a simple repair, but it can also let air in.", x: 70, y: 130 },
  { key: "outlet", label: "Outlet connection", meaning: "A fitting on the pressure side. Usually repairable.", x: 210, y: 60 },
  { key: "seal", label: "Seal area", meaning: "A worn mechanical seal lets water escape between the pump and motor. Replaceable, and worth doing before water reaches the motor.", x: 160, y: 130 },
  { key: "housing", label: "Pump housing", meaning: "A cracked or corroded housing may mean replacing the pump.", x: 130, y: 150 },
  { key: "valve", label: "Valve", meaning: "A leaking check or isolation valve near the pump — a valve repair, not a pump fault.", x: 250, y: 90 },
  { key: "pipe", label: "Nearby pipework", meaning: "Water collecting under the pump can come from pipes above it. The source has to be traced.", x: 280, y: 160 },
];

export const wpNoises: { title: string; body: string }[] = [
  { title: "Humming", body: "Often motor or electrical operation — a hum without starting needs checking." },
  { title: "Grinding", body: "May indicate mechanical wear, such as bearings." },
  { title: "Rattling", body: "May relate to vibration, loose mounting or components." },
  { title: "Whining", body: "Has several possible causes, including the pump struggling for water." },
  { title: "Loud or sudden change", body: "A new or much louder sound justifies prompt inspection." },
];

/* ------------------------------------------------------------------ */
/* Types + identification                                              */
/* ------------------------------------------------------------------ */

export const wpTypes: { key: string; title: string; body: string; where: string }[] = [
  { key: "booster", title: "Booster / pressure pump", body: "Raises pressure to taps and showers, usually controlled automatically by pressure.", where: "Near the roof tank, in a utility area or on the roof." },
  { key: "transfer", title: "Transfer pump", body: "Moves water from a ground or underground tank up to the roof tank, often controlled by a float switch.", where: "Next to the ground tank or in a pump room." },
  { key: "submersible", title: "Submersible pump", body: "Sits under water inside a tank or well and pushes water up.", where: "Inside the tank — only the cable and pipe are visible." },
  { key: "ptank", title: "Pressure-tank system", body: "A pump paired with a pressure vessel to smooth out pressure and reduce cycling.", where: "A rounded tank next to the pump." },
];

export const wpIdWhere = ["Near a water tank", "Utility area", "Basement / pump room", "Roof", "Outside", "Not sure"];
export const wpIdDoes = ["Increase pressure", "Move water up to a tank", "Fill a tank", "Not sure"];

/* ------------------------------------------------------------------ */
/* Process, repair vs replace, installation                            */
/* ------------------------------------------------------------------ */

export const wpRepairSteps = [
  { title: "Understand the symptoms", body: "Pressure, pump behaviour, noise, leaks, electrical signs and which fixtures are affected." },
  { title: "Inspect the system", body: "Pump, tank, connections, valves, controls and visible pipework." },
  { title: "Identify the likely cause", body: "Pump, controls, supply, plumbing, pressure system — or something else." },
  { title: "Recommend the repair", body: "Only repair what's actually faulty." },
  { title: "Test operation", body: "Start/stop behaviour, flow, pressure, leaks and noise." },
  { title: "Explain findings", body: "What we found and anything else that may need attention." },
];

export const wpInstallSteps = [
  { title: "Assessment", body: "Understand the tank, pipework, fixtures and demand." },
  { title: "Pump selection", body: "Match flow and pressure to the system — supplied by us or by you." },
  { title: "Connection planning", body: "Inlet, outlet, valves and how it ties into the plumbing." },
  { title: "Electrical requirements", body: "A suitable supply, connected by a qualified professional." },
  { title: "Installation", body: "Secure mounting and proper connections." },
  { title: "Testing", body: "Flow, pressure, noise, leaks and cycling behaviour." },
  { title: "Handover", body: "How the system behaves, and warranty terms explained." },
];

export const wpSelection = [
  "Required flow",
  "Pressure needed",
  "Water source",
  "Pipe configuration",
  "Number of fixtures",
  "Building height",
  "Simultaneous demand",
  "Electrical supply",
  "Installation location",
  "Pump type",
];

/* ------------------------------------------------------------------ */
/* Cost, safety, prep                                                  */
/* ------------------------------------------------------------------ */

export const wpCostFactors: { key: string; label: string; weight: number }[] = [
  { key: "submersible", label: "Submersible or transfer pump", weight: 2 },
  { key: "parts", label: "Replacement parts needed", weight: 2 },
  { key: "newpump", label: "New pump supplied", weight: 3 },
  { key: "access", label: "Difficult access (roof, pump room, tank)", weight: 2 },
  { key: "plumbing", label: "Plumbing changes", weight: 2 },
  { key: "electrical", label: "Electrical requirements", weight: 2 },
  { key: "ptank", label: "Pressure tank or controller work", weight: 2 },
  { key: "commercial", label: "Commercial system", weight: 2 },
];

export const wpWarnings = [
  "Burning smell",
  "Electrical sparking",
  "Repeated electrical trips",
  "Water near electrical parts",
  "Severe leakage",
  "Sudden major pressure loss",
  "Pump overheating",
  "Loud abnormal mechanical noise",
  "Running continuously with no demand",
];

export const wpMistakes = [
  "Keep resetting a tripping circuit",
  "Open electrical parts while they're live",
  "Run a pump without water if it isn't designed for it",
  "Adjust pressure controls without understanding the system",
  "Assume low pressure means the pump needs replacing",
  "Fit a bigger pump without checking the plumbing can take it",
  "Ignore leaks around electrical equipment",
  "Keep running a pump that's overheating or making severe noises",
];

export const wpDiy: { task: string; you: boolean }[] = [
  { task: "Describe the symptoms", you: true },
  { task: "Photograph the pump", you: true },
  { task: "Note model information", you: true },
  { task: "Look and listen from outside", you: true },
  { task: "Electrical diagnosis", you: false },
  { task: "Pump disassembly", you: false },
  { task: "Component replacement", you: false },
  { task: "Pressure-system diagnosis", you: false },
  { task: "Pump installation", you: false },
  { task: "Final system testing", you: false },
];

export const wpPrep = [
  "Note what the pump is doing",
  "Record any unusual noise on your phone",
  "List which fixtures have low pressure",
  "Check whether all outlets are affected",
  "Note whether it's constant or on-and-off",
  "Mention previous repairs",
  "Take photos of the pump",
  "Note the model if visible",
  "Mention any leakage",
  "Mention repeated electrical trips",
  "Keep the pump area accessible",
];

export const wpQuestions = [
  "Is the pump actually faulty?",
  "Could the problem be elsewhere in the system?",
  "What caused the failure?",
  "Is repair practical?",
  "Is replacement necessary?",
  "What pump type suits the system?",
  "What performance does a replacement need?",
  "Are plumbing changes included?",
  "Are electrical requirements included?",
  "What testing is done afterwards?",
  "What warranty covers parts and workmanship?",
];

export const wpScope = [
  { service: "Pump diagnosis", purpose: "Find the likely fault" },
  { service: "Pump repair", purpose: "Fix repairable faults — seals, bearings, controllers, valves, connections" },
  { service: "Water pressure assessment", purpose: "Investigate low-pressure problems across the system" },
  { service: "Pump replacement", purpose: "Replace a failed or unsuitable pump" },
  { service: "Pump installation", purpose: "Install a new pump or pressure system" },
  { service: "System inspection", purpose: "Check tank, valves, controls and pipework" },
  { service: "Testing", purpose: "Verify operation after service" },
];

/* ------------------------------------------------------------------ */
/* Form                                                                */
/* ------------------------------------------------------------------ */

export const wpFormProblem = ["No water", "Weak pressure", "Won't start", "Runs constantly", "On / off cycling", "Noise", "Leaking", "Tripping", "Other"];
export const wpFormType = ["Booster / pressure", "Transfer", "Submersible", "With pressure tank", "Not sure"];

/* ------------------------------------------------------------------ */
/* FAQ                                                                 */
/* ------------------------------------------------------------------ */

export const wpFaqs: { q: string; a: string }[] = [
  { q: "Why is my water pump not starting?", a: "Common causes are no power reaching it, a controller or pressure-switch fault, dry-run protection stopping it, or a motor fault. Don't open electrical covers — describe what happens and we'll check it." },
  { q: "Why is my water pressure low?", a: "It might be the pump, but it's often the supply, a blocked filter, a partly closed valve, a leak, a pipe restriction or the pressure controls. We check the whole path before blaming the pump." },
  { q: "Why does my pump keep running?", a: "It may be meeting real demand, chasing a hidden leak, short of water, unable to reach its set pressure, or responding to a faulty control." },
  { q: "Why does my water pump turn on and off repeatedly?", a: "Usually the pressure control, a pressure tank that has lost its charge, or a small leak letting pressure fall. Frequent cycling wears the pump, so it's worth checking." },
  { q: "Why is my water pump noisy?", a: "Worn bearings, loose mounting, vibration, air in the system or the pump struggling for water. A new or much louder noise should be checked promptly." },
  { q: "Why is my pump leaking?", a: "Often a fitting, valve or the mechanical seal — not the pump body. The leak's exact location decides whether it's a simple repair." },
  { q: "Should I repair or replace my water pump?", a: "Repair when a replaceable part has failed and the pump is otherwise sound. Replace for major mechanical failure, heavy corrosion, repeated breakdowns or a pump that doesn't suit the system." },
  { q: "Does a bigger pump increase water pressure?", a: "Not necessarily. If supply or pipework is the limit, a bigger pump won't help — and an oversized pump can cycle badly and strain the system." },
  { q: "Why is water pressure low only upstairs?", a: "Height, tank position, long pipe runs, pump set-up and demand all play a part. Upper floors often need the system designed for them, not just a stronger pump." },
  { q: "How much does water pump repair cost in Dammam?", a: "It depends on the pump type, the fault, parts, access and any plumbing or electrical work. We usually diagnose first, then quote." },
  { q: "How long does water pump repair take?", a: "It depends on the diagnosis, the fault, parts availability, access and whether replacement is needed. We'll estimate it once we know the cause." },
  { q: "What should I check before calling a water pump technician?", a: "Note what the pump is doing, which taps are affected, whether it's constant or intermittent, any leaks or trips, and send a photo or video of the pump and its label." },
];
