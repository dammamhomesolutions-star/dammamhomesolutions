// Content for the Mold & Damp Treatment page (/mold-damp-treatment-dammam/).
// Confirmed scope: on-site damp assessment / moisture check, surface mold
// treatment, surface restoration, anti-mold / moisture-resistant finishes;
// source work: plumbing leaks, bathroom and roof waterproofing, exterior
// wall and crack sealing, ventilation / exhaust fans; residential and
// commercial. NOT offered: lab or environmental mold testing, structural work
// (engineer needed), furniture / fabric / soft-furnishing treatment.
// No warranty claim, no prices, no durations, no real-project photos.

export type MdSourceKey = "roof" | "exterior" | "window" | "bathroom" | "plumbing" | "kitchen" | "ground" | "condensation" | "unknown";

export interface MdSign {
  key: string;
  label: string;
  line: string;
  see: string;
  considerations: string[];
  assess: string[];
}

export const mdSigns: MdSign[] = [
  { key: "growth", label: "Black, green or discoloured growth", line: "Possible mold-like growth.", see: "Spotted or patchy dark, green or grey growth — often in corners, around windows, on bathroom ceilings or behind furniture.", considerations: ["Moisture has likely been present for some time", "Ventilation and condensation", "A leak or water entry nearby"], assess: ["How far the growth extends", "Moisture levels in the surface", "What's next to, above and behind the wall"] },
  { key: "patch", label: "Damp patch", line: "Visible moisture or discolouration.", see: "A darker area that may feel cool or damp, sometimes with a tide-mark edge.", considerations: ["A leak in a nearby pipe or fixture", "Water entering from outside or above", "Condensation on a cool surface"], assess: ["Whether the patch is active or historic", "Nearby plumbing and wet rooms", "Exterior wall and roof above"] },
  { key: "peeling", label: "Peeling paint", line: "Possible moisture or surface failure.", see: "Paint lifting or flaking, often with powdery plaster underneath.", considerations: ["Moisture pushing through from behind", "Paint applied over a damp or unprepared surface", "Coating unsuited to the area"], assess: ["Moisture behind the coating", "Plaster condition", "Previous repainting history"] },
  { key: "bubbling", label: "Bubbling or blistering", line: "Possible moisture or coating issue.", see: "Raised bubbles in paint or wallpaper, sometimes containing water or powder.", considerations: ["Trapped moisture", "Water entry behind the finish", "Coating adhesion problems"], assess: ["Whether the blisters are wet or dry", "Source of moisture", "Substrate condition"] },
  { key: "odor", label: "Musty odour", line: "May indicate a moisture-related condition.", see: "A persistent stale or earthy smell, often stronger in closed rooms or cupboards.", considerations: ["Hidden damp behind furniture or in cupboards", "Poor ventilation", "Moisture in ceilings or wall cavities"], assess: ["Where the smell is strongest", "Hidden surfaces and cupboards", "Ventilation and AC drainage"] },
  { key: "white", label: "White deposits", line: "May be salts, mineral deposits or another surface issue.", see: "White, crystalline or powdery deposits on plaster, masonry or tile.", considerations: ["Salts carried to the surface by moisture (efflorescence)", "Moisture moving through masonry", "Not necessarily mold"], assess: ["Whether the area is still damp", "Exterior or ground moisture", "Surface and plaster condition"] },
  { key: "recurring", label: "Recurring damage", line: "The same area keeps coming back after repair.", see: "A patch that was cleaned, repainted or patched — and has returned.", considerations: ["The moisture source hasn't been dealt with", "Surface treated but not the cause", "Unsuitable finish for a damp-prone area"], assess: ["What was done before and when", "The moisture source", "Whether restoration needs a different finish"] },
  { key: "unsure", label: "Not sure", line: "Send photos and we'll take a look.", see: "Something doesn't look or smell right, but it's hard to describe.", considerations: ["Several causes can look alike", "Photos help us understand the next step"], assess: ["Photos of the area and its surroundings", "When you first noticed it", "Whether it's changing"] },
];

export interface MdSource {
  key: MdSourceKey;
  label: string;
  possible: string;
  signs: string[];
  checked: string[];
  next: string;
  href?: string;
  linkLabel?: string;
}

export const mdSources: MdSource[] = [
  { key: "roof", label: "Roof / ceiling", possible: "Water entering through the roof or from the level above — failed roof waterproofing, blocked drains, or a leak upstairs.", signs: ["Ceiling stains with tide-marks", "Damp at the top of walls", "Damage after rain or tank overflow"], checked: ["Roof surface and waterproofing", "Roof drains and parapets", "Plumbing on the floor above"], next: "Assess the roof or upper level before treating the ceiling.", href: "/roof-repair/", linkLabel: "Roof repair" },
  { key: "exterior", label: "Exterior wall", possible: "Water entering through cracks, failed exterior finishes or joints in the outside wall.", signs: ["Damp on the inside face of an outside wall", "Patches that change with weather or washing", "White deposits"], checked: ["Exterior cracks and finishes", "Wall joints and parapets", "Water run-off against the wall"], next: "Seal exterior cracks and failed finishes, then dry and restore inside.", href: "/outdoor-boundary-wall-repair-dammam/", linkLabel: "Exterior wall repair" },
  { key: "window", label: "Window / opening", possible: "Water getting in around frames, or condensation forming on cool glass and frames.", signs: ["Damp or mold below window corners", "Stained sills", "Peeling paint around the frame"], checked: ["Frame sealant and joints", "Sill drainage", "Condensation on glass"], next: "Reseal the opening or address condensation, depending on what's found.", href: "/window-door-glass-repair/", linkLabel: "Window repair" },
  { key: "bathroom", label: "Bathroom", possible: "Moisture around bathrooms can be associated with plumbing, waterproofing, ventilation, condensation or surface issues. The exact source requires assessment.", signs: ["Mold on ceilings and grout", "Damp on walls shared with the bathroom", "Lifting tiles or bubbling paint"], checked: ["Waterproofing under tiles", "Shower, basin and WC connections", "Exhaust ventilation"], next: "Find the source first — leak, waterproofing or ventilation — then treat and restore.", href: "/waterproofing/", linkLabel: "Waterproofing" },
  { key: "plumbing", label: "Plumbing", possible: "A leaking supply or drain pipe inside a wall, floor or ceiling.", signs: ["Damp that persists regardless of weather", "Stains below or beside pipe runs", "Rising water bills"], checked: ["Pipe runs and joints", "Fixture connections", "Signs of hidden leaks"], next: "Repair the leak, let the area dry, then treat and restore.", href: "/water-leak-repair/", linkLabel: "Water leak repair" },
  { key: "kitchen", label: "Kitchen", possible: "Plumbing under the sink, water around fixtures, cooking steam and limited ventilation.", signs: ["Damp or swollen cabinet bases", "Mold behind appliances", "Musty smell in under-sink cupboards"], checked: ["Sink, tap and appliance connections", "Ventilation and extraction", "Sealant around worktops"], next: "Fix leaks or improve extraction, then treat affected surfaces.", href: "/plumbing-repair/", linkLabel: "Plumbing repair" },
  { key: "ground", label: "Ground / lower wall", possible: "Moisture at floor level from leaks, wet floors, water against the outside wall or ground contact.", signs: ["Damp along the bottom of walls", "Damaged skirting", "White salts low on the wall"], checked: ["Plumbing in floors and lower walls", "Outside ground level and drainage", "Floor-level waterproofing"], next: "Identify where the moisture enters before restoring lower walls." },
  { key: "condensation", label: "Condensation / humidity", possible: "Humid indoor air meeting cooler surfaces — common where ventilation is limited or AC cools surfaces.", signs: ["Mold in corners and behind furniture", "Water droplets on glass or cold surfaces", "Damp worse in closed rooms"], checked: ["Ventilation and exhaust fans", "Cool surfaces and AC positions", "How rooms are used and aired"], next: "Improve ventilation where suitable, then treat and refinish." },
  { key: "unknown", label: "Not sure", possible: "Often the source isn't obvious — the visible mark can be some distance from where the moisture starts.", signs: ["Any of the signs above", "A problem that returns after repair"], checked: ["The full area around the mark", "Above, behind and outside", "History of previous repairs"], next: "Start with photos, then an on-site damp assessment." },
];

export const mdPath = [
  { step: "Possible source", note: "Leak, roof, exterior wall, condensation…" },
  { step: "Moisture entry", note: "Water reaches the building material." },
  { step: "Material absorption", note: "Plaster and masonry hold moisture." },
  { step: "Visible dampness", note: "Patches, tide-marks, cool surfaces." },
  { step: "Surface deterioration", note: "Peeling, bubbling, crumbling plaster." },
  { step: "Mold / odour / staining", note: "Growth and smells where moisture persists." },
];

export const mdTerms = [
  { term: "Dampness", def: "Moisture present in or around a building surface.", from: "Leaks, water entry, condensation, ground contact.", looks: "Darker patches, cool surfaces, tide-marks." },
  { term: "Mold", def: "Visible fungal growth that can occur where moisture persists.", from: "Ongoing moisture plus limited drying or ventilation.", looks: "Spotted or patchy black, green, grey or white growth." },
  { term: "Water damage", def: "Physical deterioration caused by water or moisture exposure.", from: "Leaks, flooding, long-term damp.", looks: "Crumbling plaster, swollen wood, stained ceilings, lifting finishes." },
];

export interface MdRoom { key: string; label: string; concerns: string[]; context: string }
export const mdRooms: MdRoom[] = [
  { key: "bathroom", label: "Bathroom", concerns: ["Moisture", "Ventilation", "Plumbing", "Waterproofing"], context: "Daily showers add a lot of moisture to a bathroom. Mold on the ceiling often points to ventilation; damp on a neighbouring wall more often points to plumbing or waterproofing." },
  { key: "kitchen", label: "Kitchen", concerns: ["Plumbing", "Condensation", "Water around fixtures", "Ventilation"], context: "Under-sink pipes, dishwasher and washing-machine connections and cooking steam all add moisture. Look inside base cabinets and behind appliances." },
  { key: "bedroom", label: "Bedroom", concerns: ["Condensation", "External wall dampness", "Hidden moisture"], context: "Bedrooms are often closed for long periods. Mold behind wardrobes or beds on an outside wall is a common pattern of condensation or exterior moisture." },
  { key: "living", label: "Living room", concerns: ["Exterior wall exposure", "Plumbing", "Roof / upper-level moisture"], context: "Large outside walls, windows and rooms below bathrooms or the roof can all show damp in living areas." },
  { key: "ceiling", label: "Ceiling", concerns: ["Roof", "Plumbing", "Upper-level water entry"], context: "Ceiling stains usually start above — the roof, a bathroom upstairs, a water tank or pipework in the ceiling void." },
  { key: "lower", label: "Lower floor / ground level", concerns: ["Floor-level leaks", "Water against outside walls", "Ground contact"], context: "Ground-floor rooms can show damp at the base of walls from floor-level plumbing, wet floors or outside water. Only relevant where the property has these conditions." },
];

export interface MdSpot { key: string; label: string; x: number; y: number; considerations: string }
// x/y are percentages on the wall illustration.
export const mdSpots: MdSpot[] = [
  { key: "ceiling", label: "Ceiling", x: 50, y: 6, considerations: "Roof, a leak above, or condensation on a cool ceiling." },
  { key: "upper", label: "Upper wall", x: 22, y: 24, considerations: "Roof edges, parapets, upper-level plumbing or exterior cracks." },
  { key: "corner", label: "Corner", x: 92, y: 18, considerations: "Condensation in cold corners, or water at the junction of exterior walls and roof." },
  { key: "window", label: "Around window", x: 70, y: 40, considerations: "Frame sealant, sill drainage or condensation on glass." },
  { key: "furniture", label: "Behind furniture", x: 30, y: 62, considerations: "Trapped air and condensation, especially on outside walls." },
  { key: "bath", label: "Bathroom wall", x: 8, y: 50, considerations: "Shared-wall leaks, waterproofing or bathroom humidity." },
  { key: "kitchen", label: "Kitchen wall", x: 52, y: 58, considerations: "Pipe and appliance connections or cooking steam." },
  { key: "lower", label: "Lower wall", x: 82, y: 78, considerations: "Floor-level plumbing, outside water or ground moisture." },
  { key: "edge", label: "Floor edge", x: 55, y: 92, considerations: "Leaks under flooring, wet-floor seepage or skirting damage." },
];

export const mdLookalikes = [
  { label: "Mold-like growth", clue: "Spotty or fuzzy, often spreading in clusters; may smell musty.", other: "Can be confused with dirt or soot.", swatch: "radial-gradient(circle at 30% 40%,#2b2f33 0 6%,transparent 7%),radial-gradient(circle at 60% 55%,#4d545c 0 5%,transparent 6%),radial-gradient(circle at 45% 70%,#2b2f33 0 4%,transparent 5%),radial-gradient(circle at 70% 30%,#4d545c 0 3%,transparent 4%),#d7d2c4" },
  { label: "Dirt or soot", clue: "Even, smudgy layer; often near vents, lamps or hands.", other: "Usually wipes more evenly than growth.", swatch: "linear-gradient(160deg,#d7d2c4 0%,#b4ab94 50%,#d7d2c4 100%)" },
  { label: "Mineral deposits", clue: "White, crystalline or powdery; on masonry and plaster.", other: "Often efflorescence — salts left by moisture.", swatch: "radial-gradient(circle at 40% 60%,#faf8f4 0 10%,transparent 11%),radial-gradient(circle at 65% 40%,#faf8f4 0 8%,transparent 9%),#c4c0b4" },
  { label: "Paint deterioration", clue: "Cracking, flaking or chalky paint without spots.", other: "Can be age, poor preparation or moisture.", swatch: "repeating-linear-gradient(115deg,#ebe4d6 0 10px,#c4c0b4 10px 11px,#ebe4d6 11px 18px)" },
  { label: "Water staining", clue: "Yellow-brown rings or tide-marks.", other: "May be old (dry) or active — needs checking.", swatch: "radial-gradient(ellipse at 50% 50%,#ebe4d6 0 30%,#d9bfa0 31% 34%,#ebe4d6 35% 52%,#cdab8f 53% 55%,#ebe4d6 56%)" },
];

export const mdCauses = ["Plumbing leaks", "Roof or exterior water entry", "Bathroom moisture", "Condensation", "Poor ventilation", "Ground contact at lower walls", "Damaged waterproofing", "Water collecting against walls or on roofs"];

export const mdMatrix = [
  { sign: "Ceiling stain", consider: "Roof · plumbing · water entry from above" },
  { sign: "Lower-wall dampness", consider: "Plumbing · ground moisture · exterior water" },
  { sign: "Bathroom mold", consider: "Moisture · ventilation · plumbing" },
  { sign: "Window-area dampness", consider: "Condensation · water entry around the frame" },
  { sign: "Repeated paint peeling", consider: "Moisture · substrate · coating" },
  { sign: "Musty room", consider: "Moisture · ventilation · hidden affected area" },
];

export const mdTreatment = [
  { n: "01", title: "Assess", text: "Look at the visible growth and staining, check moisture in the surfaces and note what's around, above and behind the area." },
  { n: "02", title: "Identify the moisture concern", text: "Work out what is likely contributing — a leak, water entry, waterproofing, condensation or ventilation." },
  { n: "03", title: "Prepare the area", text: "Protect floors and furniture, isolate the work area and set up suitable working conditions." },
  { n: "04", title: "Treat affected surfaces", text: "Apply suitable professional treatment for the material and its condition. Badly affected plaster or finishes may need removing instead." },
  { n: "05", title: "Address the moisture source", text: "Repair leaks, waterproofing, exterior cracks or ventilation where within our scope — or tell you which specialist is needed." },
  { n: "06", title: "Restore", text: "Once the area is dry enough, repair plaster and refinish — using moisture-resistant or anti-mold finishes where suitable." },
  { n: "07", title: "Review", text: "Check the treated area with you and talk through ventilation, monitoring and maintenance." },
];

export const mdPaths = [
  { key: "treat", label: "Surface treatment", when: "Visible growth on surfaces where the underlying moisture issue is understood and suitable for treatment." },
  { key: "repair", label: "Moisture repair", when: "Water or moisture entry is contributing — a leak, failed waterproofing, exterior cracks or poor ventilation." },
  { key: "restore", label: "Surface restoration", when: "Plaster, paint or finishes have deteriorated and need repairing once the area is dry." },
  { key: "specialist", label: "Specialist assessment", when: "Possible structural concerns, significant water intrusion, extensive damage or environmental testing." },
];
export const mdSituations = [
  { key: "visible", label: "Visible growth on a surface", paths: ["treat", "restore"] },
  { key: "leak", label: "A leak or water coming in", paths: ["repair", "treat", "restore"] },
  { key: "damaged", label: "Crumbling plaster or failed paint", paths: ["restore", "repair"] },
  { key: "returns", label: "It came back after cleaning or painting", paths: ["repair", "treat", "restore"] },
  { key: "extensive", label: "Large area, cracks or structural worry", paths: ["specialist"] },
  { key: "testing", label: "I want lab testing of the growth", paths: ["specialist"] },
];

export const mdLayers = [
  { key: "finish", label: "Finish", text: "Wallpaper, tiles or decorative finishes. Moisture behind them can loosen adhesive, stain from behind or let growth develop out of sight." },
  { key: "paint", label: "Paint", text: "Paint can trap moisture, then bubble, blister or peel. Painting over damp usually only hides it for a while." },
  { key: "plaster", label: "Plaster", text: "Plaster absorbs moisture. Over time it can soften, crumble, stain and carry salts to the surface." },
  { key: "masonry", label: "Masonry", text: "Block and concrete can hold and move moisture a long way from where it entered — which is why the mark isn't always at the source." },
  { key: "source", label: "Moisture source", text: "A leak, water entry, waterproofing failure or condensation. Unless this is dealt with, the layers above may be affected again." },
];

export interface MdMaterial { key: string; label: string; note: string; inScope: boolean }
export const mdMaterials: MdMaterial[] = [
  { key: "painted", label: "Painted wall", note: "Treat, let dry, and refinish — with anti-mold paint where suitable.", inScope: true },
  { key: "plaster", label: "Plaster", note: "Sound plaster can be treated; soft or crumbling plaster is usually removed and replaced.", inScope: true },
  { key: "concrete", label: "Concrete / masonry", note: "Treated after the moisture source is addressed; salts may need cleaning back.", inScope: true },
  { key: "tile", label: "Tile & grout", note: "Grout and silicone can be treated or replaced; persistent mold may mean water behind the tiles.", inScope: true },
  { key: "ceiling", label: "Ceiling", note: "Plaster or gypsum ceilings are treated or repaired once the leak above is dealt with.", inScope: true },
  { key: "wood", label: "Wood", note: "Surface treatment where the wood is sound; swollen or decayed wood is usually replaced.", inScope: true },
  { key: "wallpaper", label: "Wallpaper", note: "Usually removed so the wall behind can be treated and dried before refinishing.", inScope: true },
  { key: "fabric", label: "Fabric / soft furnishing", note: "We don't treat furniture, fabrics or soft furnishings — we focus on the building surfaces.", inScope: false },
  { key: "unknown", label: "Not sure", note: "That's fine — photos help us tell what the surface is.", inScope: true },
];

export const mdHistory = ["No", "Cleaned before", "Repainted before", "Patched before", "Treated before", "Multiple times"];
export const mdDuration = ["Just noticed", "Several weeks", "Several months", "Recurring"];
export const mdLocations = ["Ceiling", "Wall", "Floor edge", "Bathroom", "Kitchen", "Bedroom", "Other"];
export const mdAppearances = ["Mold-like growth", "Stain", "Damp patch", "Peeling", "Bubbling", "Odour", "Unknown"];
export const mdProperties = [
  { key: "Villa", note: "Roofs, exterior walls, several bathrooms and ground-floor rooms — more possible sources to check." },
  { key: "Apartment", note: "Moisture can come from a neighbouring or upstairs unit; access to the source may need building management." },
  { key: "Office", note: "Work around opening hours where the scope allows; AC and ceiling voids are common areas to check." },
  { key: "Rental", note: "Between tenants is a good time to treat, repair the source and refinish properly." },
  { key: "Commercial", note: "Larger areas and shared services; plan access and work areas in advance." },
];
export const mdPhotoTips = ["Wide shot of the room", "Close-up of the affected area", "Area above and below it", "Nearby bathroom or kitchen", "Outside of the same wall", "Any previous repairs"];

export const mdStory = [
  { stage: "Visible problem", text: "Dark growth in a bedroom corner and peeling paint along an outside wall." },
  { stage: "Moisture investigation", text: "Moisture readings, a look at the outside wall and the bathroom next door, and a talk about ventilation." },
  { stage: "Treatment", text: "Affected surfaces treated; soft plaster removed back to sound material." },
  { stage: "Surface restoration", text: "Source dealt with, wall dried, plaster repaired and refinished with a suitable paint." },
  { stage: "Final condition", text: "A sound, refinished wall — and a plan to keep the room ventilated and monitor the area." },
];

export const mdBefore = [
  "Photograph the affected area — wide and close-up",
  "Note when you first noticed it",
  "Note whether it returns after cleaning",
  "Identify nearby bathrooms, kitchens and pipe runs",
  "Avoid painting over an active damp area",
  "Avoid disturbing large areas of visible growth unnecessarily",
  "Keep the area ventilated where practical",
];
export const mdAfter = [
  "Deal with the moisture source, not just the surface",
  "Keep bathrooms and kitchens ventilated",
  "Monitor areas that have been damp before",
  "Repair leaks and water-entry problems promptly",
  "Keep treated areas dry where practical",
  "Don't simply cover recurring damage",
  "Follow the maintenance advice given after treatment",
];

export const mdCost = [
  { label: "Affected area", note: "Size and number of affected spots." },
  { label: "Extent of growth", note: "Surface spotting versus deeper spread." },
  { label: "Moisture source", note: "Whether a leak, waterproofing or ventilation fix is needed." },
  { label: "Surface / material", note: "Paint, plaster, tile, ceiling, wood." },
  { label: "Accessibility", note: "Height, furniture, ceiling voids, outside access." },
  { label: "Surface damage", note: "How much plaster or finish needs replacing." },
  { label: "Treatment required", note: "Type and number of treatment stages." },
  { label: "Restoration needs", note: "Replastering, refinishing, anti-mold paint." },
  { label: "Other specialists", note: "Engineer or testing, where required." },
  { label: "Property size", note: "One room versus several areas or floors." },
];

export const mdWeDo = [
  "On-site damp assessment and moisture checks",
  "Surface mold treatment on building surfaces",
  "Plumbing leak repair",
  "Bathroom and roof waterproofing",
  "Exterior wall and crack sealing",
  "Ventilation and exhaust fans",
  "Plaster repair and refinishing, including anti-mold finishes",
  "Residential and commercial properties",
];
export const mdSpecialist = [
  { label: "Laboratory or environmental testing", text: "We don't carry out lab or environmental mold testing. If you need the growth identified or air quality tested, a specialist testing provider is required." },
  { label: "Structural moisture or damage", text: "Cracking, movement or damage to structure needs a qualified structural engineer. We don't carry out structural work." },
  { label: "Furniture, fabrics and soft furnishings", text: "Our treatment covers building surfaces — not furniture, upholstery, clothing or other soft items." },
  { label: "Significant building damage", text: "Extensive water intrusion or large-scale damage may need several trades and a proper survey first." },
];

export interface MdQA { q: string; a: string }
export const mdAnswers: MdQA[] = [
  { q: "What causes damp walls?", a: "Damp walls are usually caused by plumbing leaks, water entering from outside or above, damaged waterproofing, condensation, or moisture at the base of walls. The visible patch isn't always where the moisture starts, so the surrounding area needs checking." },
  { q: "Why does mold keep coming back?", a: "Mold tends to return when the moisture that allowed it to grow is still there. Cleaning or repainting the surface without dealing with a leak, water entry, condensation or poor ventilation often only hides the problem for a while." },
  { q: "Is every dark patch on a wall mold?", a: "No. Dark patches can also be dirt, soot, water staining or paint deterioration. Appearance gives clues, but identification may need an on-site inspection or, where needed, specialist testing." },
  { q: "Can mold be treated without fixing the moisture source?", a: "The surface can be treated, but if the moisture source remains, the problem may return. A lasting result usually means treating the surface and dealing with the cause." },
  { q: "Why is paint peeling from a damp wall?", a: "Moisture in the plaster behind the paint weakens adhesion and can push the paint off as bubbles or flakes. Salts carried by the moisture can also break the surface down." },
  { q: "Can condensation cause dampness?", a: "Yes. When humid indoor air meets a cooler surface, water can condense on it. Over time this can cause damp patches and mold, especially in corners, behind furniture and in poorly ventilated rooms." },
  { q: "How do I know whether I have a moisture problem?", a: "Common signs are damp or stained patches, peeling or bubbling paint, mold-like growth, white powdery deposits and a musty smell. If several appear together, or keep returning, an assessment is worthwhile." },
  { q: "Should I repaint a mold-affected wall?", a: "Not before the area has been treated, the moisture source dealt with and the wall allowed to dry. Painting over active damp or growth usually fails and can hide the problem." },
  { q: "Can I send photos for an initial assessment?", a: "Yes. Wide and close-up photos, plus the areas above, below and outside, help us understand the situation and suggest a next step. Photos can't confirm the source on their own; an on-site check is usually needed." },
  { q: "How much does mold and damp treatment cost in Dammam?", a: "It depends on the affected area, the extent of the damage, the moisture source, the surfaces involved, access and the restoration needed. We quote after understanding the situation rather than giving a general price." },
];

export type MdFaqCat = "Mold" | "Dampness" | "Treatment" | "Cost";
export interface MdFaq extends MdQA { cat: MdFaqCat }
export const mdFaqs: MdFaq[] = [
  { cat: "Mold", q: "What causes mold in a home?", a: "Mold grows where moisture persists — from leaks, water entry, condensation or limited ventilation. Bathrooms, kitchens, corners of outside walls and areas behind furniture are common places for it to appear." },
  { cat: "Dampness", q: "What causes damp walls?", a: "Plumbing leaks, water entering from outside or above, damaged waterproofing, condensation and moisture at floor level are common causes. The source needs to be found on site, because the visible mark isn't always where the water enters." },
  { cat: "Mold", q: "Can mold come back after treatment?", a: "It can, if the moisture that allowed it to grow is still present. That's why we look for and, where within our scope, deal with the moisture source as well as treating the surface. No treatment can promise it will never return." },
  { cat: "Dampness", q: "Why does paint peel on damp walls?", a: "Moisture behind the paint weakens its bond with the plaster, and salts carried by the moisture can break the surface down, causing bubbling, flaking and peeling." },
  { cat: "Dampness", q: "Can condensation cause mold?", a: "Yes. Humid air condensing on cooler surfaces can keep them damp enough for mold to grow, particularly where ventilation is limited." },
  { cat: "Treatment", q: "Can you treat mold on painted walls?", a: "Yes. We treat mold on painted walls, plaster, ceilings, tile and grout, concrete and other building surfaces. We don't treat furniture, fabrics or soft furnishings." },
  { cat: "Treatment", q: "Should the moisture source be fixed first?", a: "Ideally, yes — or at least as part of the same job. We repair plumbing leaks, waterproofing, exterior cracks and ventilation where that's the cause, so the restored surface has a better chance of staying sound." },
  { cat: "Cost", q: "Can I send photos before booking?", a: "Yes. Photos of the area and its surroundings help us understand the situation and plan the next step. They can't replace an on-site moisture check." },
  { cat: "Cost", q: "How much does mold treatment cost in Dammam?", a: "Cost depends on the size and extent of the affected area, the moisture source, the materials, access and how much restoration is needed. We provide a quote once we understand the situation." },
  { cat: "Treatment", q: "How long does treatment take?", a: "It depends on the extent of the problem, whether the moisture source needs repair, and how long the area takes to dry before restoration. We'll explain the expected stages for your situation." },
  { cat: "Treatment", q: "Can damp damage be repaired after treatment?", a: "Yes. Once the source is dealt with and the area is dry enough, we repair plaster and refinish surfaces, using moisture-resistant or anti-mold finishes where suitable." },
  { cat: "Mold", q: "When is specialist assessment needed?", a: "When there may be structural damage, very extensive water intrusion, or you need laboratory or environmental testing. We don't carry out lab testing or structural work and will tell you when a specialist is needed." },
];
