// Content for the AC Installation page. Confirmed by the business: split,
// central / ducted, window, and cassette / floor-standing installation;
// residential and commercial; removal of old units; electrical connection;
// supplying units as well as installing customer-supplied ones. No brand
// partnerships, prices, warranties or efficiency figures are claimed.

export type AiIconName =
  | "ac"
  | "snowflake"
  | "fan"
  | "thermometer"
  | "house"
  | "apartment"
  | "villa"
  | "outdoor"
  | "indoor"
  | "pipe"
  | "drop"
  | "drain"
  | "bolt"
  | "tools"
  | "search"
  | "checklist"
  | "airflow"
  | "shield"
  | "phone"
  | "pin"
  | "calendar"
  | "alert"
  | "check"
  | "arrow"
  | "building"
  | "duct"
  | "window";

/* ------------------------------------------------------------------ */
/* System diagram hotspots                                             */
/* ------------------------------------------------------------------ */

export type AiPartKey = "indoor" | "airflow" | "refrigerant" | "drain" | "electrical" | "outdoor";

export const aiParts: { key: AiPartKey; label: string; body: string }[] = [
  { key: "indoor", label: "Indoor unit", body: "Distributes conditioned air into the room. Its position affects airflow, drainage and service access." },
  { key: "airflow", label: "Airflow", body: "Cooled air needs a clear path across the room — furniture or curtains in front of the unit restrict it." },
  { key: "refrigerant", label: "Refrigerant lines", body: "Connect the indoor and outdoor units. They're sized, routed and insulated to suit the equipment." },
  { key: "drain", label: "Drain line", body: "Carries condensate away from the indoor unit to a suitable drainage point." },
  { key: "electrical", label: "Electrical connection", body: "Supplies the unit through a suitable circuit, set up by a qualified professional to the unit's specifications." },
  { key: "outdoor", label: "Outdoor unit", body: "Rejects heat to the outside, so it needs space for airflow, a stable support and access for servicing." },
];

/* ------------------------------------------------------------------ */
/* AC type selector                                                    */
/* ------------------------------------------------------------------ */

export interface AiType {
  key: string;
  label: string;
  icon: AiIconName;
  application: string;
  considerations: string[];
  ask: string[];
}

export const aiTypes: AiType[] = [
  {
    key: "split",
    label: "Split AC",
    icon: "indoor",
    application: "Commonly used for individual rooms or zones — bedrooms, living rooms, majlis and offices.",
    considerations: ["Indoor unit placement", "Outdoor unit placement", "Refrigerant piping", "Drainage", "Electrical connection", "Wall penetration", "Testing"],
    ask: ["Is the capacity right for the room?", "Where will the pipes and drain run?", "Can existing piping be reused if replacing?"],
  },
  {
    key: "central",
    label: "Central / ducted AC",
    icon: "duct",
    application: "Cooling several rooms or a whole floor through ducts, with the equipment hidden in a ceiling void, roof or plant area.",
    considerations: ["Equipment location", "Ductwork and insulation", "Supply and return air", "Ceiling access", "Controls and zoning", "Balancing at commissioning"],
    ask: ["Where will the indoor equipment sit, and can it be serviced?", "How will return air get back to the unit?", "How are rooms with different heat loads handled?"],
  },
  {
    key: "window",
    label: "Window AC",
    icon: "window",
    application: "A single self-contained unit fitted through a wall or window opening, often replacing an existing one.",
    considerations: ["Opening size and support", "Sealing around the unit", "Drainage to the outside", "Electrical supply", "Outdoor clearance"],
    ask: ["Does the new unit fit the existing opening?", "Where will the condensate drain?", "Is the socket and circuit suitable?"],
  },
  {
    key: "cassette",
    label: "Cassette / floor-standing",
    icon: "fan",
    application: "Ceiling cassettes for even air spread in open areas; floor-standing units for large halls, majlis and shops.",
    considerations: ["Ceiling void depth (cassette)", "Floor space and airflow (floor-standing)", "Drain route and pump if needed", "Pipe routing to the outdoor unit", "Electrical supply"],
    ask: ["Is there enough ceiling depth?", "How will condensate be drained?", "Where will the outdoor unit go?"],
  },
  {
    key: "unsure",
    label: "Not sure",
    icon: "search",
    application: "Tell us the rooms, their size and how they're used — we'll suggest suitable options.",
    considerations: ["Number of rooms to cool", "Room sizes and sun exposure", "Existing AC or openings", "Where an outdoor unit could go"],
    ask: ["Which rooms need cooling most?", "Is this a new installation or a replacement?"],
  },
];

/* ------------------------------------------------------------------ */
/* Room assessment                                                     */
/* ------------------------------------------------------------------ */

export const aiRoomTypes = ["Bedroom", "Living room / majlis", "Kitchen", "Office", "Shop", "Other"];
export const aiExposure = ["Little direct sun", "Some sun", "Strong afternoon sun"];
export const aiWindows = ["Few / small", "Average", "Large or many"];
export const aiInsulation = ["Good / top-floor insulated", "Not sure", "Poor / top floor under roof"];

/* ------------------------------------------------------------------ */
/* Placement                                                           */
/* ------------------------------------------------------------------ */

export const aiIndoorGood = [
  "Air can circulate across the room",
  "Accessible for cleaning and servicing",
  "A suitable path for the drain line",
  "A reasonable route for refrigerant piping",
  "Clear of furniture, curtains and shelving",
];
export const aiIndoorBad = [
  "Airflow blocked by furniture or cabinets",
  "Hard to reach for maintenance",
  "Drain line that would run uphill or a long way",
  "An awkward, very long piping route",
  "Directly above electronics or bedding where drips matter",
];
export const aiOutdoorGood = [
  "Space around it for airflow",
  "A stable, properly fixed support",
  "Safe access for servicing",
  "Room for heat to escape",
  "A sensible pipe route to the indoor unit",
  "Considerate of noise for neighbours and bedrooms",
];
export const aiOutdoorBad = [
  "Boxed in, recirculating its own hot air",
  "Unsafe or unstable mounting",
  "Unreachable for maintenance",
  "Blowing hot air straight at a wall or into a tight space",
];

/* ------------------------------------------------------------------ */
/* Process                                                             */
/* ------------------------------------------------------------------ */

export const aiProcess: { title: string; body: string; icon: AiIconName }[] = [
  { title: "Understand the property", body: "Rooms, property type, any existing system and where units could go.", icon: "house" },
  { title: "Confirm equipment", body: "AC type, capacity and specifications — supplied by us or by you.", icon: "ac" },
  { title: "Plan placement", body: "Indoor and outdoor positions, piping, drainage and electrical needs.", icon: "pin" },
  { title: "Prepare the area", body: "Protect floors, furniture and surrounding surfaces.", icon: "shield" },
  { title: "Install the system", body: "Mount the units and connect piping, drainage and power.", icon: "tools" },
  { title: "Check connections", body: "Inspect the installation details and connections.", icon: "search" },
  { title: "Test operation", body: "Confirm it starts, runs and cools as expected.", icon: "snowflake" },
  { title: "Handover", body: "Explain basic operation and care, and answer your questions.", icon: "checklist" },
];

/* ------------------------------------------------------------------ */
/* Cost + scope                                                        */
/* ------------------------------------------------------------------ */

export const aiCostParts = [
  { key: "type", label: "AC type", options: ["Split", "Central / ducted", "Window", "Cassette / floor"] },
  { key: "units", label: "Units", options: ["1", "2–3", "4+"] },
  { key: "complexity", label: "Complexity", options: ["Replacement, same spot", "New, simple route", "New, long or difficult route"] },
  { key: "materials", label: "Materials", options: ["Reuse existing (if suitable)", "New piping & drain", "Plus electrical work"] },
  { key: "access", label: "Access", options: ["Easy", "Height / roof", "Tight or restricted"] },
] as const;

export const aiCostFactors = [
  "AC type",
  "Capacity",
  "Number of units",
  "Installation height",
  "Piping length",
  "Drainage requirements",
  "Electrical requirements",
  "Wall work",
  "Outdoor unit mounting",
  "Existing infrastructure",
  "New vs replacement",
  "Access",
  "Additional materials",
  "Equipment, if we supply it",
];

export const aiScope = [
  "Indoor unit mounting",
  "Outdoor unit placement",
  "Refrigerant piping",
  "Drainage connection",
  "Electrical connection",
  "Mounting and supports",
  "Testing",
  "Cleanup",
];

export const aiExtra = [
  "Long piping routes",
  "Difficult access",
  "New electrical requirements",
  "Additional drainage work",
  "Wall repairs after new openings",
  "Outdoor brackets or supports",
  "Multiple units",
  "Ceiling or duct work",
  "Removal of old equipment",
];

export const aiTesting = [
  "Unit powers on",
  "Cooling operation checked",
  "Controls and remote tested",
  "Indoor airflow checked",
  "Outdoor unit operation checked",
  "Drainage observed where appropriate",
  "Visible connections inspected",
  "Unusual noise or vibration checked",
  "Basic operation shown to you",
];

export const aiProblems = [
  "Water leaking from the indoor unit",
  "Poor airflow",
  "Unusual vibration",
  "Unusual noise",
  "Not cooling as expected",
  "Ice forming on the unit or pipes",
  "Breaker tripping repeatedly",
  "Drainage problems",
];

export const aiPrep = [
  "Clear access to the installation area",
  "Move fragile items nearby",
  "Make sure we can reach the outdoor unit location",
  "Let us know about furniture that needs protecting",
  "Confirm access to the electrical board",
  "Check any building or landlord requirements",
  "Keep children and pets away from the work area",
  "Tell us about any old AC that needs removing",
];

export const aiQuestions = [
  "Is this AC correctly sized for the room?",
  "Where will the indoor unit be placed?",
  "Where will the outdoor unit be installed?",
  "How will the drain line be routed?",
  "What happens to the existing refrigerant piping?",
  "What electrical requirements does the unit have?",
  "What exactly is included in the installation quote?",
];

/* ------------------------------------------------------------------ */
/* Decision tool + form                                                */
/* ------------------------------------------------------------------ */

export const aiQuiz = [
  { key: "property", label: "Property", options: ["Apartment", "Villa", "Office", "Shop", "Other"] },
  { key: "install", label: "Installation", options: ["New AC", "Replacing existing AC", "Multiple units", "Not sure"] },
  { key: "type", label: "AC type", options: ["Split", "Central / ducted", "Window", "Cassette / floor-standing", "Not sure"] },
  { key: "rooms", label: "Number of rooms", options: ["1", "2–3", "4–6", "7+"] },
  { key: "size", label: "Approximate room size", options: ["Small (under 15 m²)", "Medium (15–25 m²)", "Large (25–40 m²)", "Very large (40 m²+)", "Not sure"] },
] as const;

export const aiFormProperty = ["Apartment", "Villa", "Office", "Commercial", "Other"];
export const aiFormInstall = ["New AC", "Replacement", "Multiple units", "Not sure"];
export const aiFormType = ["Split", "Central / ducted", "Window", "Cassette / floor-standing", "Not sure"];

/* ------------------------------------------------------------------ */
/* FAQ                                                                 */
/* ------------------------------------------------------------------ */

export const aiFaqs: { q: string; a: string }[] = [
  { q: "How much does AC installation cost in Dammam?", a: "The cost depends on the AC type, capacity, number of units, piping, drainage, electrical requirements, access and whether existing infrastructure can be reused. A site-specific quotation is more accurate than a fixed generic price." },
  { q: "How long does AC installation take?", a: "Installation time depends on the number of units, AC type, piping, drainage, electrical work and site access. A simple replacement can differ significantly from a completely new installation." },
  { q: "What is included in AC installation?", a: "Typically mounting the indoor unit, placing the outdoor unit, refrigerant piping, drainage, the electrical connection, supports, testing and cleanup. The actual scope depends on the AC model and the site, and is confirmed in the quote." },
  { q: "Do you install split AC units?", a: "Yes — wall-mounted split units, as well as central / ducted, window, cassette and floor-standing units." },
  { q: "Can you replace an old AC with a new one?", a: "Yes. We remove the old unit and install the new one, checking which existing parts — piping, drain, power and mounting — are suitable to reuse." },
  { q: "Can existing refrigerant piping be reused?", a: "Some existing components may be reusable if they are compatible and in suitable condition, but refrigerant piping, drainage, electrical connections and mounting should be checked before reuse." },
  { q: "Where should an indoor AC unit be installed?", a: "Where air can circulate across the room, it can be reached for servicing, and the drain and piping have sensible routes — always within the manufacturer's installation requirements." },
  { q: "Where should the outdoor AC unit be installed?", a: "On a stable support, with space for airflow and heat to escape, safe access for servicing, and a reasonable pipe route to the indoor unit." },
  { q: "Why does AC drainage matter?", a: "Indoor units produce condensate. A poorly routed or blocked drain can lead to water leaking from the unit, wall staining and ceiling damage." },
  { q: "Does AC installation include electrical work?", a: "Yes, we handle the electrical connection for the unit. The circuit and supply are checked against the unit's requirements, and electrical work is carried out by a qualified professional." },
  { q: "How do I choose the right AC capacity?", a: "It depends on more than floor area — ceiling height, windows, sun exposure, occupants, insulation, equipment in the room and the property. Our room tool gives a rough picture; final sizing is confirmed on site." },
  { q: "Is a site inspection necessary?", a: "For new installations, multiple units and central or ducted systems, yes. For a like-for-like replacement, photos can sometimes be enough to quote, with details confirmed on the day." },
  { q: "Can you install multiple AC units in a villa?", a: "Yes. Villas are planned room by room, including where several outdoor units can go and how pipes and drains are routed." },
  { q: "Can you install AC in an apartment?", a: "Yes. Apartments often have limited outdoor space and building rules, so placement and any building requirements are checked first." },
  { q: "What affects AC installation cost?", a: "AC type, capacity, number of units, height, piping length, drainage, electrical needs, wall work, outdoor mounting, existing infrastructure, new vs replacement, access, materials and whether we supply the equipment." },
  { q: "What should I prepare before installation?", a: "Clear access inside and to the outdoor location, move fragile items, confirm access to the electrical board, check building rules, and tell us about any old unit to remove. Don't disconnect anything electrical yourself." },
  { q: "What should be checked after AC installation?", a: "That the unit powers on and cools, controls work, air flows well indoors, the outdoor unit runs smoothly, the drain works, connections look right, and there's no unusual noise or vibration." },
  { q: "What if the new AC is not cooling properly?", a: "Contact us so the installation can be checked. If there's a safety concern — burning smell, tripping or water near electrics — switch it off and don't use it until it's been looked at." },
  { q: "Can you remove the old AC?", a: "Yes. Removing old units can be included in the installation scope." },
  { q: "Do you install central or ducted AC systems?", a: "Yes. Central and ducted systems are planned around equipment location, ductwork, supply and return air, access and controls, and need a site visit to quote." },
];
