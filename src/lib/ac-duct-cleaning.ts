// Content for the AC Duct Cleaning page. Confirmed by the business: vacuum
// extraction, brushing / agitation and negative-pressure cleaning (method
// chosen per system on inspection); vents and grilles; filter and coil
// cleaning; duct repair and sealing; residential and commercial work.
// No health, allergy, energy-saving or "100%" claims are made.

export type DkIconName =
  | "duct"
  | "airflow"
  | "vent"
  | "filter"
  | "search"
  | "vacuum"
  | "debris"
  | "home"
  | "office"
  | "checklist"
  | "technician"
  | "shield"
  | "quote"
  | "phone"
  | "alert"
  | "check"
  | "arrow"
  | "drop"
  | "odor"
  | "tools"
  | "brush"
  | "fan";

/* ------------------------------------------------------------------ */
/* Quick answers                                                       */
/* ------------------------------------------------------------------ */

export const dkAnswers: { q: string; a: string }[] = [
  { q: "What is AC duct cleaning?", a: "Inspecting and removing accumulated dust, debris and other unwanted material from the accessible parts of a ducted AC system's air-distribution network — the supply and return ducts, and the vents and grilles that serve them." },
  { q: "How do I know if my AC ducts need cleaning?", a: "Visible dust or debris in vents or duct openings, dust building up again soon after cleaning, recent renovation, or a long time without inspection are reasons to have them looked at. An inspection decides whether cleaning is actually needed." },
  { q: "Does duct cleaning clean the AC itself?", a: "Not by itself. The ducts and the AC equipment are related but separate. Filters, coils and the indoor unit are cleaned as a separate part of the scope when needed." },
  { q: "How often should AC ducts be cleaned?", a: "There's no universal schedule. Condition should guide the decision — an inspection shows whether there's enough buildup to justify cleaning." },
  { q: "Does duct cleaning fix bad airflow?", a: "Only if the restriction is debris in the ducts. Weak airflow is just as often a dirty filter, coil, fan problem, leak or damaged duct." },
  { q: "Does duct cleaning remove odours?", a: "It depends on the source. If the smell comes from material inside the ducts, cleaning can help. Odours from drains, moisture or the equipment need those dealt with instead." },
  { q: "Is duct cleaning necessary after renovation?", a: "Not automatically, but construction dust often gets into ducts — especially if the AC ran during the work. An inspection after major renovation is worthwhile." },
  { q: "How much does duct cleaning cost in Dammam?", a: "It depends on the property size, number of vents, the duct network, access, how dirty it is and how many systems there are. Send the details for a quote rather than relying on a generic price." },
];

/* ------------------------------------------------------------------ */
/* Diagnostic                                                          */
/* ------------------------------------------------------------------ */

export const dkNoticing = [
  "Visible dust around vents",
  "Dust returning quickly after cleaning",
  "Musty or unusual odour",
  "Recent renovation or construction",
  "Ducts not inspected for years",
  "Uneven airflow",
  "Visible debris inside vents",
  "Water or moisture around ductwork",
  "I'm not sure",
];
export const dkProperty = ["Apartment", "Villa", "Office", "Shop", "Restaurant", "Commercial building", "Other"];
export const dkConcern = ["Dust / debris", "Odour", "Airflow", "General maintenance", "Property renovation", "Not sure"];

/* ------------------------------------------------------------------ */
/* HVAC diagram                                                        */
/* ------------------------------------------------------------------ */

export type DkPartKey = "return" | "returnDuct" | "filter" | "handler" | "supplyDuct" | "supplyVent";

export const dkParts: { key: DkPartKey; label: string; body: string; cleaned: string }[] = [
  { key: "return", label: "Return grille", body: "Where room air is drawn back into the system. It often shows the first visible dust.", cleaned: "Cleaned as part of vents and grilles." },
  { key: "returnDuct", label: "Return duct", body: "Carries air from the rooms back toward the equipment. Debris that gets past the grille collects here.", cleaned: "Part of duct cleaning, where accessible." },
  { key: "filter", label: "Filter", body: "Catches dust before it reaches the equipment. A clogged filter cuts airflow; a missing or damaged one lets dust through.", cleaned: "Cleaned or replaced — a separate item in the scope." },
  { key: "handler", label: "Air handler / indoor unit", body: "The equipment that cools and moves the air — fan, coil and drain pan. A critical component in its own right, not just more ductwork.", cleaned: "Coil and unit cleaning are separate from duct cleaning." },
  { key: "supplyDuct", label: "Supply duct", body: "Delivers conditioned air from the equipment to each room through main and branch ducts.", cleaned: "Part of duct cleaning, where accessible." },
  { key: "supplyVent", label: "Supply vent", body: "Where air enters the room. Dust streaks around it can come from the ducts — or from room dust being stirred up.", cleaned: "Cleaned as part of vents and grilles." },
];

/* ------------------------------------------------------------------ */
/* Comparison                                                          */
/* ------------------------------------------------------------------ */

export const dkCompare: { service: string; focus: string; note: string }[] = [
  { service: "Filter cleaning / replacement", focus: "Filter media", note: "Often the first thing to check for dust and airflow." },
  { service: "Indoor unit cleaning", focus: "The indoor HVAC equipment", note: "Fan, casing and drain pan." },
  { service: "Coil cleaning", focus: "Coil surfaces", note: "Affects cooling and airflow through the unit." },
  { service: "AC servicing", focus: "Overall AC system condition", note: "Checks the whole system, not just cleanliness." },
  { service: "AC duct cleaning", focus: "Ductwork and air-distribution pathways", note: "Supply and return ducts, vents and grilles." },
];

/* ------------------------------------------------------------------ */
/* Signs + not the answer                                              */
/* ------------------------------------------------------------------ */

export const dkSigns: { title: string; body: string; icon: DkIconName }[] = [
  { title: "Visible dust or debris", body: "Dust or debris visible around duct openings or inside registers.", icon: "debris" },
  { title: "Persistent odour", body: "Unusual smells that seem to come from the air-distribution system.", icon: "odor" },
  { title: "Renovation or construction", body: "Building work can put a lot of fine dust and debris into the system.", icon: "tools" },
  { title: "No inspection for years", body: "If ducts have never been checked and there are visible concerns, an assessment is worthwhile.", icon: "search" },
  { title: "Pests or foreign material", body: "Nesting material, droppings or debris call for a professional inspection.", icon: "alert" },
  { title: "Moisture concerns", body: "Water, damp or suspected mould needs careful evaluation — cleaning alone may not solve it.", icon: "drop" },
];

export const dkSymptoms = ["Weak airflow", "Poor cooling", "Unusual noise", "Bad odours", "High energy use"];
export const dkOtherCauses = [
  "Clogged filters",
  "Dirty coils",
  "Blower problems",
  "Thermostat issues",
  "Refrigerant / system faults",
  "Blocked airflow",
  "Damaged ductwork",
  "Insulation problems",
  "Drainage or moisture",
  "Equipment faults",
];

export const dkInside = [
  { label: "Fine dust", x: 80 },
  { label: "Construction debris", x: 170 },
  { label: "Loose particles", x: 260 },
  { label: "Fibres", x: 350 },
  { label: "Foreign material", x: 440 },
];

/* ------------------------------------------------------------------ */
/* Process, methods, duct types                                        */
/* ------------------------------------------------------------------ */

export const dkProcess: { title: string; body: string; icon: DkIconName }[] = [
  { title: "Property & HVAC assessment", body: "Property type, system layout, symptoms, access points and visible condition.", icon: "home" },
  { title: "Inspection", body: "Vents, grilles, duct openings, return pathways and relevant components.", icon: "search" },
  { title: "Protect the property", body: "Floors, furniture, walls and surrounding areas covered.", icon: "shield" },
  { title: "Establish access", body: "Through vents and service points, depending on the duct design.", icon: "duct" },
  { title: "Cleaning & extraction", body: "Agitation where suitable, controlled extraction and debris collection.", icon: "vacuum" },
  { title: "Component review", body: "Filters, coils and the unit reviewed — cleaned if in scope.", icon: "filter" },
  { title: "Final inspection", body: "Accessible areas checked after cleaning.", icon: "check" },
  { title: "Handover", body: "What was inspected and cleaned, and anything else worth attention.", icon: "checklist" },
];

export const dkMethods: { title: string; body: string; icon: DkIconName }[] = [
  { title: "Vacuum extraction", body: "Controlled suction removes loosened dust and debris and collects it, rather than blowing it into the room.", icon: "vacuum" },
  { title: "Brushing & agitation", body: "Brushes or air-agitation tools dislodge buildup from duct walls so it can be extracted. Chosen to suit the duct material.", icon: "brush" },
  { title: "Negative-pressure cleaning", body: "The system is held under negative pressure so dislodged material is pulled toward the collection equipment while cleaning progresses.", icon: "airflow" },
];

export const dkMethodFactors = ["Duct construction", "Duct material", "Accessibility", "System design", "Type of buildup", "Property layout"];

export const dkDuctTypes: { title: string; body: string; care: string }[] = [
  { title: "Flexible duct", body: "A wire-reinforced flexible liner, usually insulated, common for branch runs in ceilings.", care: "Easy to tear or crush — needs gentle tools and careful handling." },
  { title: "Rigid metal duct", body: "Sheet-metal sections, often for main trunks.", care: "Tolerates mechanical brushing better, but joints and access points shape the approach." },
  { title: "Insulated ductwork", body: "Duct wrapped or lined with insulation to stop heat gain and condensation.", care: "Insulation condition matters — damaged or wet insulation needs separate attention." },
];

/* ------------------------------------------------------------------ */
/* Odour, dust, cost                                                   */
/* ------------------------------------------------------------------ */

export const dkOdorCauses = ["Dirty filters", "Moisture", "Drain problems", "Biological growth", "Contaminated components", "Duct contamination", "Outside odours drawn in"];
export const dkDustCauses = ["Dirty filters", "Gaps and leaks in ducts", "Household dust", "Poor filtration", "Duct contamination", "Open windows and doors", "Construction activity", "Housekeeping", "Airflow problems"];

export const dkCostFactors: { key: string; label: string; weight: number }[] = [
  { key: "size", label: "Large property / many rooms", weight: 3 },
  { key: "vents", label: "Many vents and grilles", weight: 2 },
  { key: "network", label: "Long or complex duct network", weight: 3 },
  { key: "systems", label: "More than one AC system", weight: 2 },
  { key: "access", label: "Difficult access", weight: 2 },
  { key: "dirty", label: "Heavy buildup or construction dust", weight: 2 },
  { key: "commercial", label: "Commercial scope", weight: 2 },
  { key: "extra", label: "Filters, coils or repairs added", weight: 2 },
];

/* ------------------------------------------------------------------ */
/* Prep, mistakes, questions, scope                                    */
/* ------------------------------------------------------------------ */

export const dkPrep = [
  "Clear access to vents and grilles",
  "Move fragile items near vents",
  "Tell the technician about unusual odours",
  "Mention any recent renovation",
  "Mention moisture or leaks",
  "Mention any signs of pests",
  "Point out rooms with airflow problems",
  "Make sure someone can provide access",
  "Share what you know about the AC system",
];

export const dkMistakes = [
  { title: "Assuming every AC problem is a duct problem", body: "Many symptoms come from filters, coils or equipment." },
  { title: "Ignoring visible moisture", body: "Water around ducts needs its cause found, not just a clean." },
  { title: "Spraying random chemicals into ducts", body: "It can damage duct materials and leave residue in the airflow." },
  { title: "Using a household vacuum instead", body: "It reaches only the first few centimetres and can stir dust up." },
  { title: "Sealing or cutting ducts blindly", body: "Changes without understanding the system can make airflow worse." },
  { title: "Ignoring damaged insulation", body: "It can lead to condensation and heat gain." },
  { title: "Choosing only on the lowest price", body: "Very cheap jobs often clean vents and little else." },
  { title: "Accepting vague 'deep clean' promises", body: "Ask exactly what's included." },
];

export const dkQuestions = [
  "What parts of the system will you inspect?",
  "Which ducts are included?",
  "How will you access the ductwork?",
  "What cleaning method will you use?",
  "How will debris be contained?",
  "Will you protect floors and furniture?",
  "Are filters, coils and the indoor unit included or separate?",
  "Will you tell me about areas that need attention?",
  "Are there any additional charges?",
  "What happens if damaged ductwork is found?",
];

export const dkScope: { area: string; status: string; tone: "in" | "scope" | "separate" }[] = [
  { area: "Supply ducts", status: "Included where accessible", tone: "in" },
  { area: "Return ducts", status: "Included where accessible", tone: "in" },
  { area: "Vents & grilles", status: "Included", tone: "in" },
  { area: "Filters", status: "Cleaned or replaced if in scope", tone: "scope" },
  { area: "Coils & indoor unit", status: "Cleaned if in scope", tone: "scope" },
  { area: "Damaged ductwork", status: "Repair / sealing quoted separately", tone: "separate" },
  { area: "Moisture problems", status: "Need their cause diagnosed", tone: "separate" },
  { area: "Mould-related concerns", status: "Need appropriate assessment first", tone: "separate" },
];

/* ------------------------------------------------------------------ */
/* Form                                                                */
/* ------------------------------------------------------------------ */

export const dkFormProperty = ["Apartment", "Villa", "Office", "Shop / restaurant", "Commercial building", "Other"];
export const dkFormConcern = ["Dust / debris", "Odour", "Airflow", "After renovation", "General maintenance", "Not sure"];

/* ------------------------------------------------------------------ */
/* FAQ                                                                 */
/* ------------------------------------------------------------------ */

export const dkFaqs: { q: string; a: string }[] = [
  { q: "What is included in AC duct cleaning?", a: "Inspection, cleaning of accessible supply and return ducts using extraction and agitation suited to the ducts, and cleaning of vents and grilles. Filters, coils and duct repairs can be added to the scope." },
  { q: "How can I tell if my ducts are dirty?", a: "Look inside a supply vent or return grille with a torch. Visible dust layers, debris or dust blowing out when the AC starts are signs worth having inspected." },
  { q: "Does duct cleaning improve airflow?", a: "It can if debris is restricting the ducts. If the cause is a filter, coil, fan, leak or damaged duct, those need attention instead." },
  { q: "Does duct cleaning remove bad smells?", a: "Only when the source is inside the ducts. Smells from drains, moisture or the equipment need their own fix, so the wider system is checked too." },
  { q: "Should I clean ducts after home renovation?", a: "Have them inspected after major work, especially if the AC ran during it. Construction dust often settles in ducts." },
  { q: "Does duct cleaning include the AC indoor unit?", a: "Not by default. Indoor unit, filter and coil cleaning are separate items that can be added to the scope." },
  { q: "Can damaged ducts be cleaned?", a: "Damaged sections should be repaired or sealed first — cleaning can't fix holes, disconnections or crushed duct. We quote repairs separately." },
  { q: "How long does duct cleaning take?", a: "It depends on the system size, number of ducts and vents, layout, access and how dirty it is. We estimate it with the quote." },
  { q: "How much does duct cleaning cost?", a: "It depends on property size, vents, duct network, access, buildup and number of systems. Send property details for an accurate quote." },
  { q: "Do apartments need duct cleaning?", a: "Only if they have ducted AC and there's a reason — visible dust, renovation or a long time without inspection. Many apartments use split units with no ducts." },
  { q: "Can commercial properties have their ducts cleaned?", a: "Yes. We clean ducts in offices, shops, restaurants and other commercial properties, with scheduling planned around opening hours." },
  { q: "What should I do before duct cleaning?", a: "Clear access to vents, move fragile items, and tell us about odours, renovation, moisture, pests and rooms with airflow problems." },
];
