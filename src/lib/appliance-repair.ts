// Content for the Appliance Repair page. Confirmed by the business:
// washing machines, refrigerators / freezers, electric and gas ovens and
// cookers, dishwashers, dryers, microwaves and hobs; residential and
// commercial appliances; sealed-system (refrigerant / compressor) work on
// fridges; a workmanship warranty (terms in each quote). No brand list is
// claimed — customers are asked for the model instead. No prices, response
// times or guaranteed repairs.

export type ApIconName =
  | "washer"
  | "fridge"
  | "oven"
  | "appliance"
  | "drum"
  | "water"
  | "drain"
  | "spin"
  | "vibration"
  | "leak"
  | "cooling"
  | "freezer"
  | "thermometer"
  | "seal"
  | "airflow"
  | "heat"
  | "fan"
  | "door"
  | "element"
  | "control"
  | "search"
  | "repair"
  | "replace"
  | "technician"
  | "checklist"
  | "quote"
  | "safety"
  | "alert"
  | "check"
  | "arrow"
  | "phone"
  | "flame"
  | "home"
  | "building"
  | "tag";

export type ApApplianceKey = "washer" | "fridge" | "oven" | "other";

/* ------------------------------------------------------------------ */
/* Quick answers                                                       */
/* ------------------------------------------------------------------ */

export const apAnswers: { q: string; a: string }[] = [
  { q: "Why is my washing machine not spinning?", a: "Often an unbalanced load or a door-lock problem; otherwise the motor, drive, drain or control system. If it hasn't drained, it won't spin either." },
  { q: "Why won't my washing machine drain?", a: "A blocked filter, a kinked or blocked hose, a faulty drain pump, a control fault — or a blocked household drain rather than the machine." },
  { q: "Why is my refrigerator not cooling?", a: "Blocked airflow, a faulty fan, temperature-control problems, a worn door seal, a defrost fault or a sealed-system problem. It needs checking in person." },
  { q: "Why is my freezer not freezing?", a: "Airflow, door seals, temperature controls, defrost problems or reduced cooling performance are the usual causes." },
  { q: "Why is my oven not heating?", a: "A failed heating element, temperature sensor or control, an electrical fault — or, on gas models, an ignition or gas-supply problem." },
  { q: "Should I repair or replace my appliance?", a: "Weigh the fault, repair cost, parts availability, overall condition and repair history. Age alone shouldn't decide." },
  { q: "How much does appliance repair cost in Dammam?", a: "It depends on the appliance, brand and model, the fault, the parts needed and access. A diagnosis comes first." },
  { q: "How long does appliance repair take?", a: "Some faults are fixed on the first visit; others need parts ordered. It depends on the appliance, fault and parts availability." },
  { q: "Do you repair all appliance brands?", a: "We don't publish a brand list. Send the brand and model number or a photo of the label and we'll confirm whether we can help." },
  { q: "What information should I send before booking?", a: "The appliance type, brand and model, what it's doing, any error code, roughly how old it is, and a photo or short video." },
];

/* ------------------------------------------------------------------ */
/* Selector + diagnostic                                               */
/* ------------------------------------------------------------------ */

export interface ApApplianceDiag {
  key: ApApplianceKey;
  label: string;
  icon: ApIconName;
  symptoms: string[];
  areas: string[];
  guidance: string;
  urgentSymptoms?: string[];
}

export const apDiagnostics: ApApplianceDiag[] = [
  {
    key: "washer",
    label: "Washing machine",
    icon: "washer",
    symptoms: ["Won't turn on", "Won't fill with water", "Won't drain", "Won't spin", "Stops during a cycle", "Leaking water", "Unusual noise", "Vibrating a lot", "Door won't open", "Clothes stay very wet", "Error code", "Not sure"],
    areas: ["Water supply", "Drainage", "Door / lock system", "Controls", "Drain pump", "Motor and drive"],
    guidance: "A professional inspection may be worthwhile. Washing-machine faults can sit in the water supply, drainage, door lock, controls, pump or motor — and some are actually plumbing problems.",
    urgentSymptoms: ["Leaking water"],
  },
  {
    key: "fridge",
    label: "Refrigerator / freezer",
    icon: "fridge",
    symptoms: ["Not cooling", "Cooling weakly", "Freezer not freezing", "Too much ice", "Leaking water", "Unusual noise", "Running continuously", "Turning on and off a lot", "Temperature fluctuating", "Door not sealing", "Light not working", "Error code", "Not sure"],
    areas: ["Airflow", "Temperature controls", "Door seal", "Fans", "Defrost system", "Drainage", "Electrical parts", "Cooling system"],
    guidance: "The cooling system should be assessed before deciding on repair or replacement. Cooling problems can come from airflow, controls, fans, door seals, defrost faults or the sealed system.",
    urgentSymptoms: ["Not cooling"],
  },
  {
    key: "oven",
    label: "Oven / cooker",
    icon: "oven",
    symptoms: ["Won't turn on", "Not heating", "Heating slowly", "Heating unevenly", "Temperature seems wrong", "Turns off by itself", "Fan not working", "Door problem", "Strange smell", "Strange noise", "Error code", "Not sure"],
    areas: ["Heating element / burner", "Temperature sensor", "Controls", "Fan", "Door seal and hinges", "Electrical or gas supply"],
    guidance: "An oven that isn't heating correctly can have electrical, control, element, sensor or — on gas models — ignition issues. Professional diagnosis finds the actual cause.",
    urgentSymptoms: ["Strange smell"],
  },
  {
    key: "other",
    label: "Other appliance",
    icon: "appliance",
    symptoms: ["Dishwasher not cleaning or draining", "Dryer not heating or turning", "Microwave not heating", "Hob or cooker problem", "Other"],
    areas: ["Water / drainage (dishwasher)", "Heating and airflow (dryer)", "Controls", "Door and safety switches", "Electrical or gas supply"],
    guidance: "We also repair dishwashers, dryers, microwaves, cookers and hobs. Send the model and what it's doing so we can check before visiting.",
  },
];

/* ------------------------------------------------------------------ */
/* Washing machine                                                     */
/* ------------------------------------------------------------------ */

export const apWasherProblems: { title: string; causes: string[]; note?: string }[] = [
  { title: "Won't start", causes: ["Power supply", "Door / lock", "Controls", "Internal electrical part", "Program fault"], note: "Don't open the back panel to check." },
  { title: "Won't fill", causes: ["Water supply / tap", "Inlet filter restriction", "Inlet valve", "Controls"] },
  { title: "Won't drain", causes: ["Blocked filter or drain path", "Drain pump", "Hose restriction", "Controls", "Household drain"] },
  { title: "Won't spin", causes: ["Unbalanced load", "Door lock", "Motor / drive", "Controls", "Not draining"] },
  { title: "Leaking", causes: ["Hose", "Door seal", "Connection", "Pump area", "Internal part", "Drainage"], note: "Where it leaks from matters." },
  { title: "Very noisy", causes: ["Load imbalance", "Mechanical wear", "Bearings", "Loose part", "Levelling"] },
  { title: "Vibrates a lot", causes: ["Levelling", "Load balance", "Installation", "Suspension parts"] },
];

export const apWasherTable: { symptom: string; area: string }[] = [
  { symptom: "Won't start", area: "Power, controls, door system" },
  { symptom: "Won't fill", area: "Water supply, inlet system" },
  { symptom: "Won't drain", area: "Drainage, pump, hose" },
  { symptom: "Won't spin", area: "Motor, controls, mechanical" },
  { symptom: "Leaking", area: "Hose, seal, connection, component" },
  { symptom: "Excessive noise", area: "Load, mechanical, installation" },
  { symptom: "Excessive vibration", area: "Balance, levelling, mechanical" },
];

/* ------------------------------------------------------------------ */
/* Refrigerator                                                        */
/* ------------------------------------------------------------------ */

export const apFridgeProblems: { title: string; causes: string[] }[] = [
  { title: "Not cooling", causes: ["Airflow", "Temperature control", "Fan", "Door seal", "Cooling system", "Electrical / control"] },
  { title: "Freezer not freezing", causes: ["Airflow", "Controls", "Door seal", "Defrost fault", "Fan", "Cooling performance"] },
  { title: "Running continuously", causes: ["Hot room / heavy load", "Poor door seal", "Blocked airflow", "Controls", "Cooling system"] },
  { title: "Leaking water", causes: ["Blocked defrost drain", "Ice build-up", "Door seal", "Water / ice dispenser line"] },
  { title: "Making noise", causes: ["Fans", "Compressor operation", "Normal system sounds", "Vibration", "Loose parts"] },
  { title: "Door not sealing", causes: ["Worn gasket", "Door alignment", "Hinges", "Overfilled shelves"] },
];

export type ApFridgeZone = "freezer" | "cooling" | "seal" | "airflow" | "drain" | "fan" | "control";

export const apFridgeZones: { key: ApFridgeZone; label: string; body: string }[] = [
  { key: "freezer", label: "Freezer", body: "Usually the coldest part and where the cooling coil sits in many models. Frost build-up here can block airflow to the fridge." },
  { key: "cooling", label: "Cooling compartment", body: "Relies on cold air from the freezer section. If the freezer works but the fridge is warm, airflow is often the issue." },
  { key: "seal", label: "Door seal", body: "Keeps cold in. A worn or dirty seal lets warm, humid air in, causing frost, sweating and longer running." },
  { key: "airflow", label: "Airflow path", body: "Vents and ducts carry cold air between compartments. Overpacked shelves or ice can block them." },
  { key: "drain", label: "Defrost drain", body: "Carries melt water away during defrost. A blocked drain is a common cause of water inside or under the fridge." },
  { key: "fan", label: "Fans", body: "Circulate cold air inside and cool the components behind the fridge. A failed fan can stop cooling even when the compressor runs." },
  { key: "control", label: "Controls", body: "Thermostats, sensors and control boards decide when the system runs. Faults can cause too warm, too cold or constant running." },
];

/* ------------------------------------------------------------------ */
/* Oven                                                                */
/* ------------------------------------------------------------------ */

export const apOvenProblems: { title: string; causes: string[] }[] = [
  { title: "Won't turn on", causes: ["Electrical supply", "Controls", "Internal electrical part", "Safety / control system"] },
  { title: "Not heating", causes: ["Heating element", "Control", "Temperature sensor", "Electrical part", "Gas ignition (gas models)"] },
  { title: "Heating unevenly", causes: ["Element", "Fan / airflow", "Temperature control", "Sensor", "Door seal"] },
  { title: "Temperature seems wrong", causes: ["Sensor", "Controls", "Heating performance", "Door seal"] },
  { title: "Turns off by itself", causes: ["Overheat protection", "Controls", "Electrical fault", "Sensor"] },
  { title: "Door problem", causes: ["Hinge", "Seal", "Latch", "Alignment"] },
];

export type ApOvenZone = "cavity" | "element" | "sensor" | "fan" | "seal" | "panel";

export const apOvenZones: { key: ApOvenZone; label: string; body: string }[] = [
  { key: "cavity", label: "Heating area", body: "The oven cavity. Even heat depends on the elements, fan and a good door seal working together." },
  { key: "element", label: "Heating element / burner", body: "Electric ovens use top, bottom and fan elements; gas ovens use a burner and igniter. A failed one usually means no or slow heat." },
  { key: "sensor", label: "Temperature sensor", body: "Tells the controls how hot it is. A faulty sensor can cause over- or under-heating." },
  { key: "fan", label: "Fan", body: "Spreads heat in fan ovens. If it stops, food cooks unevenly." },
  { key: "seal", label: "Door seal", body: "Keeps heat in. A damaged seal causes heat loss, uneven cooking and hot surfaces." },
  { key: "panel", label: "Control panel", body: "Sets the function and temperature. Control faults can stop the oven starting or cause it to switch off." },
];

/* ------------------------------------------------------------------ */
/* Process, repair vs replace                                          */
/* ------------------------------------------------------------------ */

export const apProcess: { title: string; body: string; icon: ApIconName }[] = [
  { title: "Understand the symptom", body: "You tell us what the appliance is doing.", icon: "phone" },
  { title: "Identify appliance & model", body: "Type, brand, model, rough age and symptoms.", icon: "tag" },
  { title: "Inspect", body: "Check the relevant accessible components.", icon: "search" },
  { title: "Diagnose", body: "Find the likely cause.", icon: "technician" },
  { title: "Recommend", body: "What failed, whether repair is practical, and if parts are needed.", icon: "checklist" },
  { title: "Repair", body: "Carried out once you've approved it.", icon: "repair" },
  { title: "Test", body: "Confirm the appliance works properly.", icon: "check" },
  { title: "Handover", body: "What we did, care tips and warranty terms.", icon: "safety" },
];

export const apHealthStages = ["Working normally", "Performance problem", "Repair needed", "Repeated failure", "Replacement worth considering"];

export const apToolAge = ["Newer", "Mid-life", "Older", "Not sure"];
export const apToolRepairs = ["Never", "Once", "Several times", "Frequently"];
export const apToolFault = ["Minor performance issue", "Replaceable component", "Major failure", "Physical damage", "Not sure"];

/* ------------------------------------------------------------------ */
/* Cost, prep, safety                                                  */
/* ------------------------------------------------------------------ */

export const apCostFactors = ["Appliance type", "Brand", "Model", "The fault", "Parts required", "Parts availability", "Access", "Technician time", "Appliance condition", "Repair vs replacement", "Additional work"];

export const apCostByAppliance: { key: ApApplianceKey; title: string; items: string[] }[] = [
  { key: "washer", title: "Washing machine", items: ["Drain pump", "Door lock", "Motor / drive parts", "Control parts", "Hoses and seals", "Bearings / mechanical"] },
  { key: "fridge", title: "Refrigerator", items: ["Fans", "Controls / sensors", "Door seal", "Defrost parts", "Sealed-system work", "Electrical parts"] },
  { key: "oven", title: "Oven / cooker", items: ["Elements / burners", "Sensor", "Controls", "Fan", "Door / seal", "Igniter (gas)"] },
];

export const apPrep: { key: ApApplianceKey | "general"; title: string; items: string[] }[] = [
  { key: "washer", title: "Washing machine", items: ["Note any error code", "Say whether it leaks", "Say whether it drains", "Mention unusual noise", "Have the model ready"] },
  { key: "fridge", title: "Refrigerator", items: ["Describe the temperature problem", "Say if the freezer is affected", "Mention unusual noise", "Mention any water", "Have the model ready"] },
  { key: "oven", title: "Oven / cooker", items: ["Say whether it turns on", "Describe the heating problem", "Note any error code", "Mention any smell or noise", "Say if it's gas or electric"] },
  { key: "general", title: "For any appliance", items: ["Clear access around it", "Have model / serial info if possible", "Mention previous repairs"] },
];

export const apWarnings = ["Burning smell", "Smoke", "Sparks", "Exposed wiring", "Repeated electrical trips", "Significant water leak", "Severe overheating", "Damaged power cable", "Unusual electrical sounds", "Gas smell (gas cookers)"];

export const apDont = [
  "Open electrical panels or back covers",
  "Bypass door locks or safety switches",
  "Keep using an appliance that smells of burning or sparks",
  "Keep resetting a tripping circuit",
  "Dismantle refrigeration parts",
  "Attempt refrigerant work yourself",
  "Run a leaking appliance near electrical connections",
  "Use an oven with serious electrical or heating faults",
  "Keep running a washing machine with a major leak",
];

/* ------------------------------------------------------------------ */
/* Form                                                                */
/* ------------------------------------------------------------------ */

export const apFormAppliance = ["Washing machine", "Refrigerator / freezer", "Oven / cooker", "Dishwasher", "Dryer", "Microwave / hob", "Other"];
export const apFormAge = ["Under 3 years", "3–7 years", "Over 7 years", "Don't know"];

/* ------------------------------------------------------------------ */
/* FAQ                                                                 */
/* ------------------------------------------------------------------ */

export const apFaqs: { q: string; a: string }[] = [
  { q: "What appliances do you repair?", a: "Washing machines, refrigerators and freezers, electric and gas ovens and cookers, dishwashers, dryers, microwaves and hobs — for homes and commercial premises." },
  { q: "Why is my washing machine not draining?", a: "A blocked filter or hose, a faulty drain pump, a control fault, or a blocked household drain. Check the hose isn't kinked; beyond that it needs inspecting." },
  { q: "Why is my washing machine not spinning?", a: "An unbalanced load, a door-lock fault, a drainage problem, or a motor, drive or control issue." },
  { q: "Why is my washing machine leaking?", a: "Hoses, the door seal, connections, the pump area or internal parts. Where the water appears is the best clue — note it for the technician." },
  { q: "Why is my refrigerator not cooling?", a: "Blocked airflow, a failed fan, temperature controls, a worn door seal, a defrost fault or a sealed-system problem. We check before recommending anything." },
  { q: "Why is my freezer not freezing?", a: "Often airflow blocked by ice or food, a door that doesn't seal, defrost faults or controls; sometimes reduced cooling performance in the sealed system." },
  { q: "Why is my refrigerator leaking water?", a: "Most often a blocked defrost drain; also ice build-up, a poor door seal or a dispenser water line." },
  { q: "Why is my oven not heating?", a: "A failed element or burner, a temperature sensor, controls, an electrical fault, or a gas-ignition problem on gas models." },
  { q: "Why is my oven heating unevenly?", a: "A failed element, a fan that isn't running, a sensor or control fault, or a door seal letting heat out." },
  { q: "Should I repair or replace my appliance?", a: "Consider the fault, repair cost, parts availability, the appliance's condition and how often it has needed repair. We'll tell you honestly if repair isn't worth it." },
  { q: "How much does appliance repair cost in Dammam?", a: "It depends on the appliance, brand, model, fault and parts. We diagnose first and quote before any repair." },
  { q: "How long does appliance repair take?", a: "Some repairs are done on the first visit; others need parts ordered. We'll tell you after the diagnosis." },
  { q: "Do you repair my appliance brand?", a: "We don't publish a brand list. Send the brand and model or a photo of the label and we'll confirm." },
  { q: "Where can I find my appliance model number?", a: "Usually on a label inside the door frame, on the side or back panel, or near the controls — it varies by appliance and brand. A photo of the label is enough." },
  { q: "What should I do before the technician arrives?", a: "Clear access around the appliance, note any error code, have the model information ready, and tell us about previous repairs. Don't open panels yourself." },
];
