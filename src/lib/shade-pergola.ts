// Content for the Shade & Pergola Repair page
// (/shade-pergola-repair-car-parking-shades-dammam/).
// Confirmed scope: residential car parking shades, pergolas / garden shades,
// villa entrance shades, commercial parking shades; cover repair, re-tensioning
// and replacement; frame repair incl. welding and section replacement; rust
// treatment and repainting; connections, base and drainage; PVC / coated
// fabric, HDPE shade net / tensile fabric, metal sheet and polycarbonate;
// new shade installation. Major structural / foundation problems → engineer.
// Workmanship warranty — terms in the quote. No prices, durations or lifespans.

export type ShPart = "cover" | "frame" | "connections" | "base" | "drainage" | "finish";

export interface ShPartInfo {
  key: ShPart;
  label: string;
  notice: string[];
  check: string[];
  next: string;
}

export const shParts: ShPartInfo[] = [
  { key: "frame", label: "Frame", notice: ["Bending or twisting", "Corrosion on beams or posts", "A damaged section", "A connection that has loosened"], check: ["Extent and location of corrosion", "Straightness of beams and posts", "Condition at welds and joints"], next: "Localised frame repair or section replacement — or an engineer's view if damage is significant." },
  { key: "cover", label: "Cover", notice: ["Tears or holes", "Sagging between supports", "Faded or brittle material", "An edge that has come away"], check: ["How far the damage spreads", "Tension and attachment points", "Overall age and condition of the material"], next: "Repair or re-tension where practical; otherwise cover replacement." },
  { key: "connections", label: "Connections", notice: ["Loose fasteners or cables", "Damaged brackets or joints", "Visible gaps or separation"], check: ["Every bracket, bolt and cable fixing", "Movement at joints", "Missing components"], next: "Replace or secure hardware and repair damaged connection points." },
  { key: "base", label: "Anchor / base", notice: ["Rust or deterioration at the foot of posts", "Movement when the shade is pushed", "Cracked surface around the base"], check: ["Base plates and fixings", "Post alignment", "Surrounding concrete or paving"], next: "Base repair where suitable; foundation concerns are referred for engineering assessment." },
  { key: "drainage", label: "Drainage", notice: ["Water collecting on the cover", "Water dripping where people park", "A damaged edge or gutter"], check: ["Slope and tension of the cover", "Gutters and downpipes where fitted", "Where runoff lands"], next: "Correct tension or slope, repair gutters and edges, or adjust runoff." },
  { key: "finish", label: "Finish", notice: ["Faded or chalky paint", "Peeling coating", "Surface rust showing through"], check: ["Whether rust is only on the surface", "Coating condition across the frame", "Areas that trap water"], next: "Rust treatment, primer and repainting to protect the frame." },
];

export const shLayers = [
  { key: "cover", label: "Cover", text: "Fabric, shade net, metal sheet or polycarbonate. The part you see first — and the part most exposed to sun and wind." },
  { key: "connections", label: "Connections", text: "Brackets, bolts, cables and fixing points that hold the cover in tension or in place. Small parts that carry a lot of load." },
  { key: "frame", label: "Frame", text: "The beams, arms or rafters that support and shape the cover." },
  { key: "posts", label: "Posts / beams", text: "Vertical columns and main beams that carry the frame down to the ground." },
  { key: "base", label: "Base / anchor", text: "Base plates, anchors and footings that fix the structure to the ground. Problems here are assessed carefully." },
];

export const shProblemGroups = [
  { key: "cover", label: "Cover", items: ["Torn", "Sagging", "Loose", "Faded", "Damaged edge"], note: "Many cover problems are repairable or fixed by re-tensioning; widespread tearing or brittle material usually means a new cover." },
  { key: "frame", label: "Frame", items: ["Corrosion", "Bending", "Damaged section", "Loose connection"], note: "Frame issues are assessed for extent and location. Localised damage can often be repaired or a section replaced." },
  { key: "base", label: "Base", items: ["Visible deterioration", "Movement", "Damaged surrounding surface"], note: "Any movement at the base should be looked at before the shade is relied on. Foundation concerns go to an engineer." },
  { key: "water", label: "Water", items: ["Pooling", "Poor runoff", "Dripping"], note: "Water problems usually trace back to tension, slope, a damaged edge or a gutter." },
  { key: "appearance", label: "Appearance", items: ["Faded", "Stained", "Worn"], note: "Appearance problems can often be handled with cleaning, rust treatment, repainting or a new cover." },
] as const;

export const shSpectrum = [
  { key: "repair", tag: "Minor", label: "Repair", when: "Damage is localised — a tear, a loose connection, a small damaged section — and the rest of the structure remains suitable." },
  { key: "partial", tag: "Partial", label: "Replacement", when: "One component has reached the end of its useful life — usually the cover, or a frame section — while the rest is sound." },
  { key: "refurb", tag: "Refurbishment", label: "Refurbishment", when: "Several components need attention: new cover, rust treatment and repainting, replaced hardware." },
  { key: "full", tag: "Full", label: "Replacement assessment", when: "Damage is extensive, several components have deteriorated, or repair is impractical. We assess and quote for a new shade." },
];
export const shFactors = ["Frame condition", "Cover condition", "Connection condition", "Age", "Extent of damage", "Corrosion", "Anchoring", "Overall stability", "Compatibility of replacement parts"];

export interface ShMaterial {
  key: string;
  label: string;
  swatch: string;
  appearance: string;
  deterioration: string;
  repair: string;
  replace: string;
}
export const shMaterials: ShMaterial[] = [
  { key: "pvc", label: "PVC / coated fabric", swatch: "linear-gradient(135deg,#eceef0,#b7bfc6)", appearance: "Smooth, solid membrane; blocks sun and rain.", deterioration: "Tears from edges or fixing points, fading, stiffening, sagging.", repair: "Small tears and edges can sometimes be repaired; re-tensioning can correct sagging.", replace: "Widespread tears, brittle material or repeated failures usually mean a new cover." },
  { key: "hdpe", label: "HDPE shade net / tensile fabric", swatch: "repeating-linear-gradient(45deg,#c98246 0 2px,#e0b28a 2px 4px),repeating-linear-gradient(-45deg,transparent 0 2px,rgba(107,61,39,0.35) 2px 3px)", appearance: "Woven, breathable fabric with a soft, tensioned look.", deterioration: "Fraying, holes, fading, loosening at the edges.", repair: "Edge reinforcement, re-tensioning and some localised repairs.", replace: "Large holes or general wear across the fabric call for a new cover." },
  { key: "metal", label: "Metal sheet", swatch: "repeating-linear-gradient(90deg,#838d96 0 8px,#b7bfc6 8px 10px,#666f78 10px 18px)", appearance: "Solid, profiled sheet; fully waterproof.", deterioration: "Rust at fixings and overlaps, dents, leaks at joints.", repair: "Replacing fixings, sealing joints, replacing damaged sheets, rust treatment.", replace: "Widespread corrosion or many damaged sheets." },
  { key: "poly", label: "Polycarbonate", swatch: "linear-gradient(180deg,rgba(184,204,212,0.9),rgba(238,243,245,0.9)),repeating-linear-gradient(90deg,transparent 0 12px,#b8ccd4 12px 13px)", appearance: "Light-transmitting sheet that lets daylight through.", deterioration: "Yellowing, cracking, clouding, damaged edges.", repair: "Replacing cracked sheets and sealing edges.", replace: "General yellowing or brittleness across the roof." },
];

export const shCorrosion = [
  { label: "Surface discoloration", text: "Light orange or brown staining on paint. Often cosmetic — and the right time to treat it." },
  { label: "Visible corrosion", text: "Flaking rust, bubbling paint, rough patches. Treatment and repainting are usually needed before it spreads." },
  { label: "Material deterioration", text: "Pitting, thinning or holes in the metal. The affected section may need repair or replacement." },
  { label: "Assessment required", text: "Corrosion at the base, at welds or across load-bearing members. Needs professional assessment before the shade is relied on." },
];

export const shConnectionSigns = ["Looseness", "Separation", "Missing components", "Movement", "Damaged connection points"];

export const shTypes = [
  { key: "single", label: "Single car", cars: 1 },
  { key: "two", label: "Two cars", cars: 2 },
  { key: "multi", label: "Multiple cars", cars: 4 },
  { key: "entrance", label: "Villa entrance", cars: 0 },
  { key: "driveway", label: "Driveway", cars: 2 },
  { key: "garden", label: "Garden / outdoor area", cars: 0 },
  { key: "commercial", label: "Commercial parking", cars: 6 },
  { key: "pergola", label: "Pergola / sitting area", cars: 0 },
  { key: "other", label: "Other", cars: 0 },
] as const;
export type ShTypeKey = (typeof shTypes)[number]["key"];

export const shWeather = [
  { label: "Sun & heat", text: "UV and high temperatures fade and stiffen covers and break down paint over time." },
  { label: "Dust", text: "Dust settles on covers, holds moisture and wears fabric; it can also block gutters." },
  { label: "Wind", text: "Gusts load the cover and its connections, loosening fixings and stressing edges." },
  { label: "Rain", text: "Occasional heavy rain shows up sagging, poor slope and blocked drainage." },
  { label: "Humidity", text: "Coastal humidity can speed up corrosion on unprotected steel." },
  { label: "Repeated cycles", text: "Heating, cooling and wind, year after year — deterioration is gradual, then suddenly visible." },
];
export const shAfterWeather = ["Torn cover", "Displaced components", "Damaged connections", "Pooling water", "Bent sections", "Loose material"];

export const shResidential = [
  { key: "villa", label: "Villa parking", text: "Covered parking for one or more cars beside the villa, protecting vehicles from direct sun." },
  { key: "driveway", label: "Driveway", text: "Shade over the driveway or the access to a garage or gate." },
  { key: "entrance", label: "Entrance", text: "Canopies over the villa entrance or arrival area." },
  { key: "garden", label: "Garden", text: "Pergolas and shade over garden seating and outdoor space." },
  { key: "patio", label: "Patio", text: "Shade structures over terraces, patios and roof-top seating." },
];
export const shCommercial = {
  places: ["Offices", "Compounds", "Retail properties", "Commercial buildings", "Staff parking", "Customer parking"],
  points: [
    { label: "Multiple structures", text: "Several shades assessed together and scoped as one job." },
    { label: "Consistent appearance", text: "Matching covers and finishes across the site." },
    { label: "Maintenance planning", text: "Regular checks rather than waiting for failure." },
    { label: "Access", text: "Working around parked cars and opening hours where the scope allows." },
    { label: "Phased repair", text: "Bays repaired in stages so parking stays usable." },
  ],
};

export const shMaintain = [
  { label: "Visual checks", text: "Look for obvious changes from the ground — sagging, tears, bent sections." },
  { label: "Cover condition", text: "Watch for tearing, sagging, fading and edges or fixings coming loose." },
  { label: "Frame", text: "Look for rust spots, peeling paint or anything that looks out of line." },
  { label: "Base", text: "Look for rust at the foot of posts, cracks around the base or movement." },
  { label: "Drainage", text: "Notice where water collects or drips after rain." },
  { label: "After severe weather", text: "Look over the shade from a safe distance before parking under it again." },
];

export const shProcess = [
  { stage: "Observe", text: "We look over the whole shade — cover, frame, connections, base and drainage — not just the damaged area you called about." },
  { stage: "Map", text: "Each problem is noted by location and component so the scope is clear." },
  { stage: "Assess", text: "We judge the extent: localised, component-level or widespread. Significant structural or foundation concerns are referred to an engineer." },
  { stage: "Scope", text: "We agree with you what will be repaired, replaced or refurbished — and what the options are." },
  { stage: "Repair / replace", text: "Cover repair or replacement, re-tensioning, frame repair, welding or section replacement, rust treatment, repainting, hardware, base and drainage work." },
  { stage: "Check", text: "We check tension, fixings, runoff and finish with you. Workmanship warranty terms are set out in your quote." },
];

export const shStory = [
  { stage: "Damaged shade", text: "Torn, sagging cover; rust on the beams; water pooling over the car." },
  { stage: "Assessment", text: "Frame checked, corrosion found to be on the surface, base sound, two fixings failed." },
  { stage: "Repair / refurbishment", text: "Rust treated, frame repainted, new hardware, new cover fitted and tensioned." },
  { stage: "Restored appearance", text: "A taut cover, clean frame and water running off where it should." },
];

export const shCost = [
  "Structure size", "Number of parking spaces", "Cover material", "Extent of cover damage", "Frame condition", "Corrosion",
  "Connection condition", "Access", "Number of affected sections", "Replacement components", "Residential vs commercial scope",
];

export const shChange = [
  { label: "Functional repair", text: "Fix what's damaged so the shade works properly again." },
  { label: "Appearance refresh", text: "Rust treatment, repainting and cleaning to make it look cared-for." },
  { label: "Cover replacement", text: "A new cover on the existing frame — sometimes in a different colour or material, where the frame suits it." },
  { label: "Structural refurbishment", text: "Frame sections, hardware and finish renewed together." },
  { label: "Complete replacement", text: "A new shade where the existing one isn't worth repairing — or you want a different design." },
];

export const shPhotoShots = ["Full structure", "Close-up of damage", "Base / post", "Cover", "Connections / hardware"];
export const shProperties = ["Villa", "Residential", "Commercial"];
export const shMainIssues = ["Cover", "Frame", "Connections", "Base", "Drainage", "Multiple"];
export const shConditions = ["Minor", "Moderate", "Significant", "Unknown"];

export interface ShQA { q: string; a: string }
export const shAnswers: ShQA[] = [
  { q: "Can a damaged car parking shade be repaired?", a: "Often, yes. Localised cover damage, loose connections, surface rust and damaged sections can usually be repaired or replaced individually. Whether repair makes sense depends on the condition of the frame, cover, connections and base, which is confirmed on assessment." },
  { q: "When should a shade cover be replaced?", a: "When tears are widespread, the material has become brittle or badly faded, repairs keep failing, or the cover can no longer be tensioned properly. A sound frame can usually take a new cover." },
  { q: "Can a pergola frame be repaired?", a: "In many cases. Damaged or corroded sections can be repaired, welded or replaced, and the frame treated and repainted. Extensive deterioration may make a replacement more practical." },
  { q: "What causes shade fabric to tear?", a: "Common causes are long-term sun exposure, wind loading at edges and fixing points, loss of tension that lets the fabric flap, and sharp or worn contact points on the frame." },
  { q: "Why does a parking shade sag?", a: "Sagging usually comes from fabric stretching with age, loosened cables or fixings, a damaged edge, or water and dust collecting on the cover. Re-tensioning or a new cover often corrects it." },
  { q: "Can rust on a shade frame be repaired?", a: "Surface rust can usually be treated and the frame repainted. Deeper corrosion that has thinned or holed the metal may need the section repaired or replaced. Corrosion at the base or across load-bearing parts needs assessment first." },
  { q: "What should I do if my shade is damaged after strong weather?", a: "Look from a safe distance. If you see bent sections, displaced parts, loose material or movement, keep people and vehicles clear and arrange an assessment before using the shade again." },
  { q: "How much does car parking shade repair cost in Dammam?", a: "It depends on the size of the structure, the number of bays, the cover material, the extent of damage, frame and connection condition, corrosion, access and any replacement parts. We quote after seeing photos or the shade itself." },
  { q: "Can I send photos before requesting an assessment?", a: "Yes. A full view of the structure, close-ups of the damage, the base of the posts, the cover and any visible connections help us understand the scope. Structural condition still needs an on-site check." },
];

export type ShFaqCat = "Cover" | "Frame" | "Repair" | "Maintenance";
export interface ShFaq extends ShQA { cat: ShFaqCat }
export const shFaqs: ShFaq[] = [
  { cat: "Repair", q: "Can car parking shades be repaired?", a: "Yes. We repair residential and commercial car parking shades — covers, frames, connections, bases and drainage — and replace components or the whole shade where repair isn't practical." },
  { cat: "Cover", q: "Can torn shade fabric be repaired?", a: "Small, localised tears and damaged edges can sometimes be repaired. If the fabric is torn in several places, brittle or faded, a new cover is usually the better option." },
  { cat: "Cover", q: "When should a shade cover be replaced?", a: "When damage is widespread, the material has deteriorated, it can't be properly tensioned, or repairs keep failing. We fit PVC / coated fabric, HDPE shade net, metal sheet and polycarbonate covers." },
  { cat: "Frame", q: "Can a rusted shade frame be repaired?", a: "Surface rust is treated and repainted. Sections with deeper corrosion can be repaired, welded or replaced. Corrosion at the base or across main members is assessed before any decision." },
  { cat: "Cover", q: "Why is my parking shade sagging?", a: "Usually because the fabric has stretched, cables or fixings have loosened, an edge is damaged or water and dust are collecting on it. Re-tensioning or a new cover typically fixes it." },
  { cat: "Frame", q: "Can a pergola be refurbished?", a: "Yes. Pergola refurbishment can include frame repair, rust treatment, repainting, new hardware and a new cover or roof sheet, depending on its condition." },
  { cat: "Maintenance", q: "What causes shade structures to deteriorate?", a: "Sun, heat, dust, wind, occasional heavy rain and humidity all take a toll over time — fading covers, loosening connections and corroding unprotected steel." },
  { cat: "Repair", q: "Should I repair or replace my parking shade?", a: "It depends on the condition of the frame, cover, connections and base, how widespread the damage is, and whether replacement parts are compatible. We'll explain the options after assessment." },
  { cat: "Repair", q: "Can I send photos for assessment?", a: "Yes. Photos of the full structure, the damage, the base, the cover and the connections help us plan. Structural condition is confirmed on site." },
  { cat: "Repair", q: "How much does shade repair cost in Dammam?", a: "Cost depends on size, number of bays, cover material, the extent of damage, frame condition, corrosion, access and the components needed. We provide a quote after assessment." },
  { cat: "Maintenance", q: "Can you repair residential villa parking shades?", a: "Yes. Villa parking shades, driveway shades, entrance canopies, pergolas and garden shades are all within our scope." },
  { cat: "Maintenance", q: "Can multiple parking shades be assessed together?", a: "Yes. For villas with several shades and for commercial parking, we can assess all the structures together and plan repairs in phases if needed." },
];
