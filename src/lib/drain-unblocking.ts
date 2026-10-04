// Content for the Drain Unblocking & Sewer Line Cleaning page. Confirmed
// by the business: drain snake / auger, high-pressure water jetting, camera
// inspection, plungers and manual tools; drain / pipe repair and sewer line
// repair; outdoor and main drains; residential and commercial (including
// restaurants). No response times, prices or guaranteed clearance.

export type DrIconName =
  | "drain"
  | "pipe"
  | "sewer"
  | "wastewater"
  | "search"
  | "camera"
  | "jet"
  | "snake"
  | "alert"
  | "kitchen"
  | "bathroom"
  | "toilet"
  | "house"
  | "building"
  | "repair"
  | "cleaning"
  | "technician"
  | "checklist"
  | "phone"
  | "check"
  | "arrow"
  | "odor"
  | "plunger";

/* ------------------------------------------------------------------ */
/* Quick answers                                                       */
/* ------------------------------------------------------------------ */

export const drAnswers: { q: string; a: string }[] = [
  { q: "What causes a blocked drain?", a: "Usually a build-up of hair, grease, food, soap residue or paper, or an object that shouldn't be in the pipe. Sometimes the blockage is a symptom of a damaged or badly laid pipe." },
  { q: "How do I know if my sewer line is blocked?", a: "When several fixtures are slow or back up at the same time — especially toilets and floor drains on the lowest level — or wastewater comes back up, the problem is often further down the line." },
  { q: "What's the difference between drain cleaning and drain unblocking?", a: "Unblocking restores flow through a blocked drain. Cleaning removes the build-up lining the pipe, which helps stop it blocking again." },
  { q: "Why does my drain keep blocking?", a: "Usually because build-up remains further along the pipe, the pipe is damaged or poorly sloped, or the same material keeps going down it. Repeated blockages need the cause found." },
  { q: "When should a sewer line be cleaned?", a: "When there are repeated backups, several drains are affected, or an inspection shows build-up. Condition — not a fixed schedule — should guide it." },
  { q: "Does high-pressure water jetting work on every drain?", a: "No. It suits many build-ups and larger lines, but pipe condition, material and the blockage decide whether it's the right method." },
  { q: "How much does drain unblocking cost in Dammam?", a: "It depends on where the blockage is, how severe it is, access, pipe size, the method and whether inspection or repair is needed. We quote once we understand the problem." },
  { q: "Can a blocked drain damage plumbing?", a: "It can lead to overflows, water damage around fixtures and pressure on weak joints. Most blockages don't damage pipes if they're dealt with promptly." },
  { q: "Why do multiple drains back up at once?", a: "Because they share a branch or the main drain, and the blockage is in that shared section rather than at any one fixture." },
  { q: "Should I use chemical drain cleaner?", a: "It's not a universal fix. Strong chemicals can harm some pipes, rarely clear solid blockages, and are dangerous if mixed or left in a pipe a technician then works on." },
];

/* ------------------------------------------------------------------ */
/* Diagnostic                                                          */
/* ------------------------------------------------------------------ */

export const drSymptoms = [
  "Sink draining slowly",
  "Shower or bath drain blocked",
  "Kitchen drain blocked",
  "Floor drain blocked",
  "Toilet not draining",
  "Several drains are slow",
  "Multiple drains backing up",
  "Sewer smell",
  "Wastewater coming back up",
  "Outdoor drain blocked",
  "Not sure",
];
export const drWhere = ["One drain", "One bathroom", "Kitchen", "Several rooms", "Whole property", "Outdoor / main drain", "Not sure"];
export const drHistory = ["First time", "Occasionally", "Frequently", "Keeps returning"];

/* ------------------------------------------------------------------ */
/* Drainage system diagram                                             */
/* ------------------------------------------------------------------ */

export type DrPointKey = "fixture" | "branch" | "main" | "sewer" | "cleanout";

export const drPoints: { key: DrPointKey; label: string; body: string; affects: string }[] = [
  { key: "fixture", label: "Fixture drain", body: "The short pipe and trap directly under a sink, shower or toilet. Hair, soap and grease usually collect here first.", affects: "Usually just that one fixture." },
  { key: "branch", label: "Branch pipe", body: "Carries waste from several fixtures — say a whole bathroom — to the main drain.", affects: "Every fixture on that branch." },
  { key: "main", label: "Main drain", body: "The building's main waste pipe. A blockage here backs up into the lowest fixtures first.", affects: "Several rooms, often the whole property." },
  { key: "sewer", label: "Sewer connection", body: "Where the property's drainage connects to the outside line or municipal sewer.", affects: "Everything upstream — and outdoor manholes." },
  { key: "cleanout", label: "Access point / cleanout", body: "A capped opening or manhole that lets equipment reach the line without removing fixtures.", affects: "Used for cleaning and camera inspection." },
];

/* ------------------------------------------------------------------ */
/* Causes                                                              */
/* ------------------------------------------------------------------ */

export const drCauses: { title: string; body: string; icon: DrIconName }[] = [
  { title: "Hair", body: "Binds with soap to form clumps in shower and basin drains.", icon: "bathroom" },
  { title: "Grease & fat", body: "Liquid when hot, solid when it cools — it coats the inside of kitchen pipes and narrows them.", icon: "kitchen" },
  { title: "Food debris", body: "Rice, scraps and coffee grounds settle in traps and bends.", icon: "kitchen" },
  { title: "Soap & residue", body: "Builds up gradually, especially combined with hard water.", icon: "cleaning" },
  { title: "Foreign objects", body: "Toys, caps, wipes and sanitary items can lodge and catch everything behind them.", icon: "alert" },
  { title: "Too much paper / wipes", body: "Wipes don't break down like toilet paper — they're a common toilet and main-line blockage.", icon: "toilet" },
  { title: "Sediment & debris", body: "Sand and grit wash into floor and outdoor drains and settle in low points.", icon: "wastewater" },
  { title: "Roots (where applicable)", body: "In some older outdoor lines, roots can enter through cracks or joints.", icon: "sewer" },
  { title: "Damaged pipe", body: "A cracked, sagging or displaced pipe catches waste — the blockage is the symptom.", icon: "repair" },
];

export const drRecurring = [
  "Blockage not fully removed",
  "Build-up further inside the pipe",
  "A damaged pipe",
  "Poor slope or drainage design",
  "Grease accumulating again",
  "Foreign material still in the line",
  "Root intrusion where relevant",
  "A deformed or sagging pipe",
  "A deeper sewer-line problem",
];

/* ------------------------------------------------------------------ */
/* Services, processes, methods                                        */
/* ------------------------------------------------------------------ */

export const drServices: { service: string; purpose: string }[] = [
  { service: "Drain unblocking", purpose: "Restore flow through a blocked drain" },
  { service: "Drain cleaning", purpose: "Remove build-up lining the pipe" },
  { service: "Sewer line cleaning", purpose: "Clean and clear larger drainage and sewer lines" },
  { service: "Drain inspection", purpose: "Find the location and condition of a problem" },
  { service: "Drain repair", purpose: "Fix damaged or defective pipework" },
  { service: "Sewer repair", purpose: "Address significant sewer-line damage" },
];

export const drUnblockSteps = [
  { title: "Understand the symptoms", body: "Which fixture, how bad, how often, and any backup or odour." },
  { title: "Inspect the drain", body: "Accessible areas and the likely blockage location." },
  { title: "Choose the method", body: "Based on the blockage, pipe layout, access and condition." },
  { title: "Clear the blockage", body: "With the appropriate professional equipment." },
  { title: "Test drainage", body: "Run water to confirm it's flowing properly." },
  { title: "Check for recurring causes", body: "Discuss inspection if it looks like it will come back." },
  { title: "Handover", body: "What we found, what we did, and anything else needed." },
];

export const drSewerSteps = [
  { title: "Assess the system", body: "Understand which line is affected." },
  { title: "Locate the problem", body: "Find the likely blockage area." },
  { title: "Access the line", body: "Through cleanouts or manholes where available." },
  { title: "Clean the line", body: "Using the method suited to the pipe." },
  { title: "Flush & test", body: "Confirm the line flows." },
  { title: "Inspect if needed", body: "Camera inspection when it's recurring or the pipe condition is uncertain." },
  { title: "Report findings", body: "Explain what we saw and recommend next steps." },
];

export const drMethods: { title: string; icon: DrIconName; body: string; suits: string }[] = [
  { title: "Plungers & manual tools", icon: "plunger", body: "Simple tools for light, local blockages close to the fixture.", suits: "Single fixtures, early slow drains." },
  { title: "Drain snake / auger", icon: "snake", body: "A flexible mechanical cable that breaks through or pulls out blockages further down the pipe.", suits: "Solid blockages, toilets, branch lines." },
  { title: "High-pressure water jetting", icon: "jet", body: "Pressurised water scours build-up from the pipe walls and flushes it away.", suits: "Grease, sediment, larger and main lines — if the pipe is in suitable condition." },
  { title: "Camera inspection", icon: "camera", body: "A camera on a cable shows the inside of the pipe and where the problem is.", suits: "Recurring, hard-to-locate or uncertain problems." },
];

export const drJettingUses = ["Accumulated build-up", "Grease", "Stubborn deposits", "Larger drainage lines", "Recurring cleaning needs"];

export const drCameraWhen = [
  "The blockage keeps returning",
  "Several drains are affected",
  "There's unexplained backup",
  "The blockage is hard to locate",
  "Pipe condition is uncertain",
  "Repair or replacement may be needed",
];

export type DrFindingKey = "clear" | "buildup" | "blockage" | "crack" | "joint" | "roots" | "standing" | "damaged";

export const drFindings: { key: DrFindingKey; label: string; body: string }[] = [
  { key: "clear", label: "Clear pipe", body: "Smooth walls and a clear path — no further work needed." },
  { key: "buildup", label: "Build-up", body: "A layer of grease or scale narrowing the pipe — cleaning territory." },
  { key: "blockage", label: "Blockage", body: "A mass of material stopping flow — unblocking, then cleaning." },
  { key: "crack", label: "Cracked section", body: "A crack in the pipe wall — repair rather than repeated cleaning." },
  { key: "joint", label: "Displaced joint", body: "Two sections out of line, catching waste at the step." },
  { key: "roots", label: "Root intrusion", body: "Roots entering through a joint in some older outdoor lines." },
  { key: "standing", label: "Standing water", body: "Water sitting in a dip — a sign of a sagging pipe or poor slope." },
  { key: "damaged", label: "Damaged pipe", body: "Deformed or collapsing pipe — repair or replacement." },
];

/* ------------------------------------------------------------------ */
/* Situations                                                          */
/* ------------------------------------------------------------------ */

export const drSituations: { key: string; title: string; icon: DrIconName; body: string; points: string[] }[] = [
  { key: "multiple", title: "Several drains blocked at once?", icon: "pipe", body: "When more than one fixture is affected, the problem is usually in a shared branch or the main drain — not at each fixture.", points: ["Branch-line blockage", "Main drain blockage", "Sewer-line problem", "System-wide restriction"] },
  { key: "backup", title: "Wastewater coming back up? Don't ignore it.", icon: "wastewater", body: "Backup means waste has nowhere to go. Use as little water as possible and get help — and avoid contact with the wastewater.", points: ["Toilets backing up", "Floor drains overflowing", "Water returning through fixtures", "Strong sewer odour", "Outdoor pooling"] },
  { key: "odor", title: "Why does my property smell like sewer?", icon: "odor", body: "A sewer smell doesn't automatically mean the sewer line needs cleaning. Dried-out traps and vent issues are common causes too.", points: ["Drainage blockage", "Dry or faulty traps", "Stagnant wastewater", "Damaged pipe", "Connection or vent issues"] },
  { key: "slow", title: "A slow drain is an early warning", icon: "drain", body: "Slow drainage often means a partial blockage building up. Dealing with it early can avoid a full blockage at a worse time.", points: ["Gradual build-up", "Partial blockage", "Pipe restriction", "Foreign material"] },
  { key: "kitchen", title: "Kitchen drain blockages", icon: "kitchen", body: "Grease, cooking residue and food scraps are the usual cause. Prevention is mostly about what goes down the sink.", points: ["Don't pour grease down drains", "Use a sink strainer", "Bin food scraps", "Act on recurring slow drainage"] },
  { key: "bathroom", title: "Bathroom & shower drain blockages", icon: "bathroom", body: "Hair, soap residue and product build-up collect in traps. Repeated blockages are worth having looked at.", points: ["Hair", "Soap residue", "Personal-care products", "Foreign objects"] },
  { key: "toilet", title: "Toilet blocked? Know when it's more than a toilet problem.", icon: "toilet", body: "One toilet on its own is usually a local blockage. A toilet plus a floor drain or sink backing up suggests a deeper problem. Please don't dismantle the toilet.", points: ["One toilet: likely local", "Several fixtures: deeper issue"] },
  { key: "outdoor", title: "Outdoor & main drains", icon: "sewer", body: "Outdoor drains and manholes collect sand, leaves and debris, and can also show problems in the main line.", points: ["Yard and floor drains", "Manholes and access points", "External sewer connections", "Sediment and debris"] },
];

/* ------------------------------------------------------------------ */
/* Warnings, mistakes, cost, prep                                      */
/* ------------------------------------------------------------------ */

export const drWarnings = [
  "Wastewater backing up",
  "Multiple blocked drains",
  "Recurring sewer odour",
  "Repeated blockage",
  "Overflowing floor drain",
  "Toilet and sink backing up together",
  "Outdoor wastewater pooling",
  "Persistent gurgling",
  "Blockage back soon after clearing",
];

export const drMistakes = [
  "Repeatedly pouring harsh chemicals into a blocked drain",
  "Mixing drain-cleaning chemicals",
  "Forcing more water into a fully blocked system",
  "Ignoring recurring blockages",
  "Assuming the cheapest quick fix solves the cause",
  "Dismantling plumbing or sewer parts without knowing the system",
  "Ignoring wastewater contamination",
  "Assuming every blockage is the same",
];

export const drChemicalConcerns = [
  "May not suit every pipe material",
  "Chemical exposure for you and your family",
  "Rarely clears solid blockages fully",
  "Blockages often come back",
  "Dangerous if products are mixed",
  "A hazard for technicians if left in the pipe",
];

export const drCostFactors: { key: string; label: string; weight: number }[] = [
  { key: "main", label: "Blockage in the main or sewer line", weight: 3 },
  { key: "severe", label: "Severe or fully blocked", weight: 2 },
  { key: "access", label: "Difficult access", weight: 2 },
  { key: "jetting", label: "Water jetting needed", weight: 2 },
  { key: "camera", label: "Camera inspection", weight: 2 },
  { key: "length", label: "Long affected line", weight: 2 },
  { key: "repair", label: "Repair needed", weight: 3 },
  { key: "commercial", label: "Commercial property", weight: 2 },
];

export const drPrep = [
  "Note which drains are affected",
  "Note when the problem started",
  "Say whether it has happened before",
  "Mention any sewer odour",
  "Mention any wastewater backup",
  "Say if several fixtures are affected",
  "Mention recent plumbing work",
  "Keep access areas clear",
  "Tell us if chemical drain cleaner was used recently",
  "Send photos or a short video if you can",
];

export const drQuestions = [
  "Where do you think the blockage is?",
  "Is this a local blockage or a deeper drainage issue?",
  "What cleaning method will you use?",
  "Is that method suitable for my pipe?",
  "How will you confirm it's cleared?",
  "What happens if it comes back?",
  "Can you inspect the pipe if needed?",
  "Is repair included or quoted separately?",
  "Are there extra equipment or access charges?",
  "What exactly is included in the quote?",
];

/* ------------------------------------------------------------------ */
/* Form                                                                */
/* ------------------------------------------------------------------ */

export const drFormProperty = ["Apartment", "Villa", "House", "Office", "Shop / restaurant", "Commercial building", "Other"];
export const drFormArea = ["Kitchen", "Bathroom", "Toilet", "Floor drain", "Several areas", "Outdoor / main drain"];
export const drFormSymptom = ["Slow drain", "Fully blocked", "Backing up", "Sewer smell", "Gurgling", "Other"];
export const drFormCount = ["One", "Two or three", "Many / whole property", "Not sure"];
export const drFormBefore = ["First time", "Occasionally", "Keeps returning"];

/* ------------------------------------------------------------------ */
/* FAQ                                                                 */
/* ------------------------------------------------------------------ */

export const drFaqs: { q: string; a: string }[] = [
  { q: "Why is my drain blocked?", a: "Most blockages are hair, grease, food, soap residue, wipes or a foreign object. If it keeps happening, a damaged or poorly sloped pipe may be the real cause." },
  { q: "Why does my drain keep blocking?", a: "Build-up left further down the pipe, a damaged section, poor slope or the same material going down the drain. Camera inspection can show which." },
  { q: "How do I know if the sewer line is blocked?", a: "Several fixtures slow or backing up together — especially low-level toilets and floor drains — gurgling, sewer smells and wastewater coming back up all point further down the line." },
  { q: "What's the difference between drain cleaning and drain unblocking?", a: "Unblocking restores flow; cleaning removes the build-up coating the pipe so it's less likely to block again. Often both are done together." },
  { q: "Can a blocked drain cause wastewater backup?", a: "Yes. When a shared or main line is blocked, wastewater backs up through the lowest fixtures, such as floor drains and toilets." },
  { q: "When is sewer line cleaning necessary?", a: "When several drains are affected, backups recur, or an inspection shows significant build-up in the line." },
  { q: "Can high-pressure water jetting clear a sewer line?", a: "Often, for grease, sediment and build-up — if the pipe is in suitable condition. Damaged or fragile pipes may need a different approach." },
  { q: "Does drain cleaning fix damaged pipes?", a: "No. Cleaning removes blockages and build-up. Cracks, breaks, displaced joints and collapsed sections need repair or replacement, which we also carry out." },
  { q: "How much does drain unblocking cost in Dammam?", a: "It depends on the blockage location and severity, access, pipe size, the method, the length of line and whether inspection or repair is needed. We quote once we understand the problem." },
  { q: "How long does drain unblocking take?", a: "A simple local blockage is usually much quicker than a main-line or recurring problem that needs inspection. We'll give you an estimate once we know what we're dealing with." },
  { q: "Should I use chemical drain cleaner?", a: "We'd advise against relying on it — it rarely clears solid blockages, can harm some pipes, and is dangerous if mixed or left in the pipe. If you've used one, tell us before we start." },
  { q: "What should I do if several drains are blocked?", a: "Use as little water as possible, avoid contact with any wastewater, and contact us — it usually means a shared branch or main line is blocked." },
];
