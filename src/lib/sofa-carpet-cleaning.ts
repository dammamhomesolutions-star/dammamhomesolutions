// Content for the Sofa & Carpet Cleaning page. Confirmed by the business:
// shampoo with wet extraction, hot-water / steam extraction and low-moisture
// methods; fabric and leather sofas, carpets, rugs and commercial carpets;
// odor treatment; cotton, polyester, microfiber, velvet and wool. Nothing
// here claims guaranteed stain removal, allergen removal or sanitisation.

export type ScIconName =
  | "sofa"
  | "carpet"
  | "rug"
  | "chair"
  | "vacuum"
  | "machine"
  | "water"
  | "drop"
  | "stain"
  | "odor"
  | "fabric"
  | "fiber"
  | "brush"
  | "shield"
  | "search"
  | "checklist"
  | "home"
  | "office"
  | "phone"
  | "pin"
  | "calendar"
  | "check"
  | "alert"
  | "arrow"
  | "wind";

/* ------------------------------------------------------------------ */
/* Interactive sofa + carpet map                                       */
/* ------------------------------------------------------------------ */

export type ScZoneKey =
  | "armrest"
  | "seat"
  | "backrest"
  | "cushion"
  | "base"
  | "center"
  | "edges"
  | "traffic"
  | "corner"
  | "underFurniture";

export interface ScZone {
  key: ScZoneKey;
  item: "sofa" | "carpet";
  label: string;
  issue: string;
  consideration: string;
  next: string;
}

export const scZones: ScZone[] = [
  { key: "armrest", item: "sofa", label: "Armrests", issue: "Darkening from hands, body oils and resting arms.", consideration: "Oily soil needs pre-treatment; edges and piping can be colour-sensitive.", next: "Pre-treat and clean, checking colour stability first." },
  { key: "seat", item: "sofa", label: "Seat", issue: "General soil, spills and flattened pile from daily use.", consideration: "The most-used area — often needs more attention than the rest of the sofa.", next: "Spot-treat spills, then clean the whole seat evenly to avoid patches." },
  { key: "backrest", item: "sofa", label: "Backrest", issue: "Hair oils and dust where heads rest.", consideration: "Upper backs collect oily marks that look like discolouration.", next: "Pre-treatment, then the method suited to the fabric." },
  { key: "cushion", item: "sofa", label: "Cushions", issue: "Spills that soak through the cover into the foam.", consideration: "Moisture in foam dries slowly; some covers shrink if wet-cleaned off the cushion.", next: "Clean covers on the cushion with controlled moisture." },
  { key: "base", item: "sofa", label: "Base & skirt", issue: "Dust, scuffs and marks from shoes and floor cleaning.", consideration: "Wooden legs and trims need protecting from cleaning solutions.", next: "Protect legs, clean fabric edges, dry well." },
  { key: "center", item: "carpet", label: "Centre", issue: "General soil ground into the pile.", consideration: "Fine dust sits deep in the pile and isn't visible from above.", next: "Vacuum thoroughly, then clean with the method suited to the fibre." },
  { key: "edges", item: "carpet", label: "Edges", issue: "Dust lines along walls and skirting.", consideration: "Fine dust collects where vacuums don't reach.", next: "Detail the edges before the main clean." },
  { key: "traffic", item: "carpet", label: "High-traffic path", issue: "Grey, flattened lanes between doors and seating.", consideration: "Soiling plus worn fibres — cleaning helps the soil, not the wear.", next: "Pre-treat the lane and set realistic expectations about wear." },
  { key: "corner", item: "carpet", label: "Corners", issue: "Spots and old spills that were never treated.", consideration: "Old spots may have set or been treated with household products.", next: "Inspect, ask what was used before, then spot-treat." },
  { key: "underFurniture", item: "carpet", label: "Under furniture", issue: "Indentations and colour difference where furniture stood.", consideration: "Indentations may lift partly; colour difference from sun is permanent.", next: "Move light furniture where possible and clean the exposed area." },
];

/* ------------------------------------------------------------------ */
/* Stain selector                                                      */
/* ------------------------------------------------------------------ */

export interface ScStain {
  key: string;
  label: string;
  requires: string;
  harder: string;
  inspect: string;
  why: string;
}

export const scStains: ScStain[] = [
  { key: "coffee", label: "Coffee", requires: "Treatment for tannin staining; milk and sugar add a protein and sticky residue.", harder: "Heat, age, and rubbing it in with a wet cloth.", inspect: "Colour stability and whether a ring has formed.", why: "Coffee stains can set and leave a brown mark as they age." },
  { key: "tea", label: "Tea", requires: "Similar to coffee — tannin stains that respond to the right treatment.", harder: "Age and repeated attempts with household products.", inspect: "Size, age and fibre type.", why: "Older tea stains are more likely to leave a shadow." },
  { key: "food", label: "Food", requires: "Removing solid residue first, then treating fats, proteins or colours.", harder: "Grinding food into the fabric, or heat.", inspect: "What the food was and how long it's been there.", why: "Food residue can also cause odour if it stays." },
  { key: "grease", label: "Grease / oil", requires: "A degreasing pre-treatment suited to the material.", harder: "Water alone, which can spread oil.", inspect: "Whether the oil has wicked into the backing or cushion.", why: "Oil attracts more soil over time and darkens." },
  { key: "mud", label: "Mud / dirt", requires: "Letting it dry, removing loose soil, then cleaning.", harder: "Wiping it while wet, which spreads it.", inspect: "Pile and backing for embedded soil.", why: "Soil left in pile acts abrasively on fibres." },
  { key: "juice", label: "Juice / soft drinks", requires: "Treatment for sugars and dyes.", harder: "Artificial dyes, age and sticky residue.", inspect: "Dye colour and how far it spread.", why: "Sugary residue attracts dirt and can become sticky." },
  { key: "ink", label: "Ink", requires: "A solvent-type spot treatment chosen for the fabric.", harder: "Rubbing, which spreads ink.", inspect: "Ink type and fabric compatibility.", why: "Ink can be permanent on some fabrics." },
  { key: "pet", label: "Pet-related stains", requires: "Cleaning plus treatment of any odour source in the padding or cushion.", harder: "Repeated accidents in the same spot, and age.", inspect: "Whether it reached the foam, underlay or backing.", why: "Urine in particular can discolour fibres and leave odour." },
  { key: "unknown", label: "Unknown stain", requires: "Testing before any treatment.", harder: "Guessing with strong products.", inspect: "Colour, texture, smell and any previous treatment.", why: "Knowing what it is decides how it's treated." },
  { key: "discolour", label: "General discolouration", requires: "Overall cleaning to lift soil, then assessing what remains.", harder: "Sun fading or dye loss, which cleaning can't reverse.", inspect: "Whether it's soil, wear or permanent colour change.", why: "Separating dirt from damage sets honest expectations." },
];

/* ------------------------------------------------------------------ */
/* Material selector                                                   */
/* ------------------------------------------------------------------ */

export interface ScMaterial {
  key: string;
  label: string;
  check: string;
  considerations: string;
  testing: string;
}

export const scMaterials: ScMaterial[] = [
  { key: "cotton", label: "Cotton", check: "Colourfastness and any shrinkage risk on removable covers.", considerations: "Absorbs water readily and can brown or shrink if over-wetted.", testing: "Confirms dyes stay put and the moisture level is safe." },
  { key: "polyester", label: "Polyester", check: "Oily soil and any coatings.", considerations: "Usually tolerant, but oily stains need the right pre-treatment.", testing: "Checks the chosen solution suits the finish." },
  { key: "microfiber", label: "Microfiber", check: "The care code and whether it marks with water.", considerations: "Some microfibres water-mark easily; low-moisture methods may suit them.", testing: "Shows whether water rings or texture change appear." },
  { key: "velvet", label: "Velvet", check: "Pile direction and fibre (cotton, synthetic or blend).", considerations: "Pile can crush or mark; needs gentle handling and controlled moisture.", testing: "Checks pile recovery and colour before the full clean." },
  { key: "blend", label: "Synthetic blends", check: "The blend and any care label.", considerations: "Behaviour depends on the mix of fibres.", testing: "Confirms the blend reacts as expected." },
  { key: "wool", label: "Wool (rugs & carpets)", check: "Dye stability, fringe and backing.", considerations: "Sensitive to heat, high alkalinity and over-wetting; dyes can bleed.", testing: "Essential for dye stability, especially on hand-made rugs." },
  { key: "leather", label: "Leather", check: "Finish type and condition of the surface.", considerations: "Cleaned with leather-appropriate products, not wet extraction.", testing: "Checks the finish reacts well to the cleaner." },
  { key: "unknown", label: "Unknown fabric", check: "Care labels, fibre and construction — on inspection.", considerations: "No method is chosen until the material is identified.", testing: "The first step, before anything else." },
];

/* ------------------------------------------------------------------ */
/* Methods                                                             */
/* ------------------------------------------------------------------ */

export const scMethods: { title: string; icon: ScIconName; suits: string; note: string }[] = [
  { title: "Shampoo with wet extraction", icon: "machine", suits: "Most fabric sofas and carpets with general soil and stains.", note: "Cleaning solution is worked in, then extracted with the soil." },
  { title: "Hot-water / steam extraction", icon: "water", suits: "Carpets and robust fabrics with heavier soil.", note: "Heat helps lift oily soil; not used on heat-sensitive materials." },
  { title: "Low-moisture cleaning", icon: "drop", suits: "Delicate fabrics, water-sensitive upholstery, and when fast drying matters.", note: "Less water, shorter drying, gentler on sensitive materials." },
];

/* ------------------------------------------------------------------ */
/* Processes                                                           */
/* ------------------------------------------------------------------ */

export const scSofaSteps = [
  { title: "Inspection", body: "Identify material, condition and problem areas." },
  { title: "Preparation", body: "Prepare the area and protect surrounding surfaces." },
  { title: "Pre-treatment", body: "Address specific soil and stain areas where appropriate." },
  { title: "Main cleaning", body: "The method suited to the upholstery." },
  { title: "Moisture removal", body: "Remove as much cleaning moisture as appropriate." },
  { title: "Drying", body: "Let the material dry in suitable conditions." },
  { title: "Final check", body: "Review the result and any remaining limitations." },
];

export const scCarpetSteps = [
  { title: "Inspect", body: "Fibre, pile and backing." },
  { title: "Identify", body: "Stains and high-traffic areas." },
  { title: "Prepare", body: "Clear the area and protect nearby surfaces." },
  { title: "Clean", body: "The method suited to the carpet." },
  { title: "Extract", body: "Remove moisture where applicable." },
  { title: "Spot-treat", body: "Revisit remaining problem areas." },
  { title: "Dry", body: "Airflow and time." },
  { title: "Final inspection", body: "Walk through the result together." },
];

export const scBeforeAfter = [
  { label: "Dust & soil", caption: "Soil sits in the fibres; colours look dull and traffic areas grey." },
  { label: "Cleaning", caption: "Pre-treatment and the main clean loosen soil and stains." },
  { label: "Moisture removal", caption: "Extraction lifts out the loosened soil with the moisture." },
  { label: "Cleaner surface", caption: "Brighter, more even fibres once dry. Some marks may remain." },
];

export const scLimits = [
  "Age of the stain",
  "Type of stain",
  "Fabric or fibre",
  "Previous cleaning attempts",
  "Heat exposure",
  "Permanent discolouration",
  "Material damage",
  "Dye transfer",
  "Wear",
];

export const scMistakes: { title: string; what: string; why: string; better: string }[] = [
  { title: "Scrubbing stains hard", what: "Rubbing back and forth with force.", why: "Spreads the stain, frays fibres and distorts pile.", better: "Blot gently from the outside in, if the material allows." },
  { title: "Using too much water", what: "Pouring water to dilute a spill.", why: "Soaks foam or backing, slows drying and can leave rings or odour.", better: "Blot up as much as possible and leave the rest for assessment." },
  { title: "Mixing household products", what: "Combining cleaners to make them stronger.", why: "Can cause harmful fumes and permanent colour damage.", better: "Never mix products. Tell the technician anything already used." },
  { title: "Not checking the material", what: "Using a product without knowing the fabric.", why: "Some fabrics bleach, shrink or water-mark.", better: "Check the care label, or leave it until the material is identified." },
  { title: "Repeated attempts on a set stain", what: "Treating the same old stain over and over.", why: "Builds residue and can make the stain permanent.", better: "Stop and get it assessed." },
  { title: "Covering odour with fragrance", what: "Spraying air freshener on the sofa or carpet.", why: "The source remains and the mix can smell worse.", better: "Find and treat the source." },
];

/* ------------------------------------------------------------------ */
/* Service matrix                                                      */
/* ------------------------------------------------------------------ */

export const scMatrixItems = ["Fabric sofa", "Sectional", "Leather sofa", "Chair", "Cushions", "Carpet", "Rug"];
export const scMatrixServices = ["Inspection", "Cleaning", "Spot treatment", "Odour treatment", "Drying guidance"];

/* ------------------------------------------------------------------ */
/* Decision tool + form options                                        */
/* ------------------------------------------------------------------ */

export const scQuiz = [
  { key: "what", label: "What needs cleaning?", options: ["Sofa", "Carpet", "Rug", "Chair / upholstery", "Multiple items"] },
  { key: "problem", label: "What's the main problem?", options: ["General dirt", "Stains", "Odour", "Heavy buildup", "Pet-related dirt", "Not sure"] },
  { key: "material", label: "Do you know the material?", options: ["Known fabric", "Known carpet type", "Leather", "Unknown"] },
  { key: "where", label: "Where is it?", options: ["Home", "Villa", "Apartment", "Office", "Commercial property"] },
] as const;

export const scFormItems = ["Sofa", "Carpet", "Rug", "Chair", "Multiple items"];
export const scFormProblems = ["Dust / soil", "Stain", "Odour", "Heavy buildup", "Other"];
export const scPropertyTypes = ["Apartment", "Villa", "House", "Office", "Shop / hotel / other commercial"];

/* ------------------------------------------------------------------ */
/* FAQ                                                                 */
/* ------------------------------------------------------------------ */

export const scFaqs: { q: string; a: string }[] = [
  { q: "How much does sofa cleaning cost in Dammam?", a: "It depends on the number of seats and size, the material, the condition, how many stains need treatment, and cushions. Send a photo and the seat count and we'll quote for that sofa." },
  { q: "How much does carpet cleaning cost?", a: "It depends on the carpet's size, fibre, how soiled and stained it is, access and drying needs. Approximate dimensions and a photo let us give an accurate quote." },
  { q: "Can you remove old sofa stains?", a: "Some old stains improve significantly; others leave a mark. Results depend on the stain, the fabric, its age and anything used on it before. We'll tell you honestly before we start." },
  { q: "Can you remove coffee stains from a carpet?", a: "Coffee stains often respond well, especially if they're recent. Older ones, or ones treated with household products, may leave a shadow." },
  { q: "How long does a sofa take to dry?", a: "Drying time depends on the material, cleaning method, moisture level, ventilation and indoor conditions. Low-moisture methods dry faster. We'll give guidance for your sofa on the day." },
  { q: "How long does carpet cleaning take?", a: "The cleaning time depends on size, soil level and stains; drying depends on the method, fibre and airflow. We'll estimate both when quoting." },
  { q: "Can all sofa fabrics be professionally cleaned?", a: "Most can, but not all with the same method. Some fabrics need low-moisture cleaning, leather needs its own products, and a few delicate materials may only be suitable for limited cleaning." },
  { q: "Should I clean a stain myself before calling?", a: "For a fresh liquid spill, gently blotting is fine if the material allows. Avoid scrubbing, soaking or using household chemicals — they often make stains harder to remove." },
  { q: "Why does my sofa smell after cleaning?", a: "Usually because moisture is still drying, or because an odour source in the foam wasn't fully reached. Good airflow helps; if a smell persists after drying, let us know." },
  { q: "Can professional cleaning remove pet-related odours?", a: "Often it can greatly reduce them, especially when the source is treated. If urine has soaked into foam or underlay, complete removal isn't always possible." },
  { q: "Can you clean sectional sofas?", a: "Yes — sectional and L-shaped sofas, as well as standard sofas, couches and upholstered chairs." },
  { q: "Can you clean rugs?", a: "Yes, including area rugs and wool rugs. Wool and hand-made rugs are dye-tested first." },
  { q: "Do you clean office carpets?", a: "Yes. We clean carpets in offices, shops, hotels and other commercial spaces, and can plan timing around business hours." },
  { q: "Should I move furniture before carpet cleaning?", a: "Move small and fragile items. Tell us about large furniture — light pieces can usually be moved during the clean; heavy ones are cleaned around." },
  { q: "How should I prepare my sofa?", a: "Remove items from the seat and crevices, take off throws, and point out stains or delicate areas. Tell us about any products used on it before." },
  { q: "Will carpet cleaning damage the carpet?", a: "Choosing the method for the fibre, testing and controlling moisture keeps the risk low. Existing wear, weak backing or unstable dyes are checked and discussed first." },
  { q: "Can old stains be completely removed?", a: "Not always. Some stains are permanent once they've set, discoloured the fibre or been heat-treated. We'll explain what's realistic before cleaning." },
  { q: "Why is testing the fabric important?", a: "A small test area shows whether the colour stays stable and how the material responds, before the whole item is cleaned. It's one part of a responsible assessment." },
  { q: "How often should sofas and carpets be professionally cleaned?", a: "Cleaning frequency depends on household use, material, visible soil, spills and other conditions. High-use furniture may need attention more often than lightly used furniture." },
  { q: "What affects the cleaning price?", a: "The item, its size, material, condition, stains and odour, access, and any special treatment. A photo and rough size are usually enough for a quote." },
];
