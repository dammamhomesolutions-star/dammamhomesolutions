// Content for the Wallpaper Installation page. Confirmed by the business:
// installation of paper, vinyl, non-woven, textured, peel-and-stick, patterned
// and mural wallpaper; wallpaper removal; wall preparation and gypsum repair;
// wallpaper supply; customer-supplied wallpaper; measurement visits;
// commercial and rental properties; and a workmanship warranty (terms in each
// quote). No prices, durations, "invisible seams", waterproofing, brand or
// health claims.

export type WlIconName =
  | "roll"
  | "sheet"
  | "wall"
  | "seam"
  | "pattern"
  | "corner"
  | "window"
  | "door"
  | "measure"
  | "brush"
  | "prepared"
  | "feature"
  | "mural"
  | "room"
  | "scraper"
  | "drop"
  | "home"
  | "building"
  | "key"
  | "camera"
  | "check"
  | "alert"
  | "arrow"
  | "phone"
  | "quote"
  | "level";

/* ------------------------------------------------------------------ */
/* Quick answers                                                       */
/* ------------------------------------------------------------------ */

export const wlAnswers: { q: string; a: string }[] = [
  { q: "What is wallpaper installation?", a: "Preparing a wall and hanging wallpaper sheets or panels so they're positioned, aligned and finished to suit the product and the surface." },
  { q: "Does the wall need to be smooth first?", a: "Most wallpaper looks and holds best on a clean, smooth, stable wall. How much preparation is needed depends on the wall and the product." },
  { q: "Can wallpaper go over old wallpaper?", a: "Sometimes — it depends on the old paper, its condition, how flat it is and what the new product requires. Removing it often gives a better result." },
  { q: "What affects wallpaper installation cost?", a: "Wall area, wallpaper type, pattern complexity, preparation, removing old wallpaper, access and the number of walls or rooms." },
  { q: "Can wallpaper be used in a bathroom?", a: "Some products are designed for humid rooms. Check the product specification, ventilation and wall condition first — ordinary wallpaper isn't suitable everywhere." },
  { q: "How is patterned wallpaper handled?", a: "With a planned layout and careful positioning so each sheet continues the pattern from the last, according to its repeat." },
];

/* ------------------------------------------------------------------ */
/* Wallpaper types (selector)                                          */
/* ------------------------------------------------------------------ */

export const wlKinds: { label: string; note: string }[] = [
  { label: "Paper-based", note: "Traditional paper. Handling and paste requirements vary by product — some soak, some don't — so the label instructions come first." },
  { label: "Vinyl", note: "A vinyl surface that's often more wipeable than paper. Durability and cleaning depend on the specific product." },
  { label: "Non-woven", note: "Often hung with a paste-the-wall method and can be easier to remove later — but the product's instructions decide." },
  { label: "Textured", note: "Embossed or textured finishes. Wall preparation and pattern alignment matter more, and seams need careful handling." },
  { label: "Peel-and-stick", note: "Self-adhesive. A smooth, clean, well-cured wall is essential, and it follows its own instructions closely." },
  { label: "Mural / feature", note: "Numbered panels that form one image. Panel order, alignment and accurate wall measurements are critical." },
  { label: "Patterned", note: "Has a repeat that must line up across sheets — affects the starting point, the amount needed and the wastage." },
  { label: "Not sure", note: "Send a photo of the roll label or the product page and we'll tell you what it needs." },
];

export const wlGrid: { name: string; use: string; consider: string; swatch: "plain" | "pattern" | "texture" | "floral" | "geo" | "mural" | "stripe" }[] = [
  { name: "Plain", use: "Any room, a calm backdrop", consider: "Shows wall imperfections", swatch: "plain" },
  { name: "Patterned", use: "Living and dining rooms", consider: "Pattern repeat and matching", swatch: "pattern" },
  { name: "Textured", use: "Feature walls, offices", consider: "Seam handling", swatch: "texture" },
  { name: "Floral", use: "Bedrooms, dining rooms", consider: "Scale against the room", swatch: "floral" },
  { name: "Geometric", use: "Living rooms, offices", consider: "Straight, level layout", swatch: "geo" },
  { name: "Feature / mural", use: "One statement wall", consider: "Panel order and measurements", swatch: "mural" },
  { name: "Bedroom", use: "Wall behind the bed", consider: "Scale and lighting", swatch: "stripe" },
  { name: "Living room", use: "TV or sofa wall", consider: "Furniture and focal point", swatch: "pattern" },
  { name: "Office", use: "Reception and meeting rooms", consider: "Durability and glare", swatch: "texture" },
  { name: "Commercial", use: "Shops, cafés, hotels", consider: "Consistency across areas", swatch: "geo" },
];

/* ------------------------------------------------------------------ */
/* Diagram                                                             */
/* ------------------------------------------------------------------ */

export const wlStages: { label: string; body: string }[] = [
  { label: "Wall", body: "The starting point — we check it's sound, dry and how flat it is." },
  { label: "Prepared surface", body: "Cleaned, repaired, smoothed and primed if the product needs it." },
  { label: "Sheet", body: "Each sheet or panel is positioned plumb and handled to suit the product." },
  { label: "Seam", body: "Adjacent sheets meet neatly according to the product design." },
  { label: "Pattern repeat", body: "The design continues naturally from one sheet to the next." },
  { label: "Finished wall", body: "Edges trimmed, corners and openings finished — the result depends heavily on the preparation." },
];

/* ------------------------------------------------------------------ */
/* Wall check                                                          */
/* ------------------------------------------------------------------ */

export const wlConditions: { label: string; note: string; flag?: "prep" | "stop" }[] = [
  { label: "Smooth", note: "A good start — usually just cleaning and possibly priming." },
  { label: "Minor imperfections", note: "Small dents and marks are filled and sanded so they don't show through.", flag: "prep" },
  { label: "Cracks", note: "Cracks are repaired first; recurring or wide cracks may need looking at before decorating.", flag: "prep" },
  { label: "Holes", note: "Holes from fixings are filled and sanded flush.", flag: "prep" },
  { label: "Peeling paint", note: "Loose paint must come off — wallpaper over it can pull away with the paint.", flag: "prep" },
  { label: "Flaking paint", note: "Flaking areas are scraped back and stabilised before hanging.", flag: "prep" },
  { label: "Damp / moisture concern", note: "Active moisture needs its cause dealt with first — wallpaper shouldn't hide it.", flag: "stop" },
  { label: "Existing wallpaper", note: "We check whether it can stay or should be removed for a better result.", flag: "prep" },
  { label: "Textured wall", note: "Heavy texture usually needs skimming or a lining before wallpaper.", flag: "prep" },
  { label: "Unknown", note: "Send photos and we'll assess it." },
];

export const wlSurfaces = ["Painted gypsum / drywall", "Plastered wall", "Concrete", "Previously wallpapered", "Textured surface", "Other", "Not sure"];

export const wlPrepIssues = ["Holes", "Cracks", "Uneven areas", "Loose paint", "Dust", "Grease", "Old adhesive", "Textured surfaces", "Moisture", "Poor previous finishes"];
export const wlPrepSteps = ["Inspect", "Clean", "Repair", "Smooth", "Prime / prepare", "Install"];

/* ------------------------------------------------------------------ */
/* Pattern visualiser + scale                                          */
/* ------------------------------------------------------------------ */

export type WlPatternKey = "plain" | "small" | "large" | "geo" | "mural";

export const wlPatterns: { key: WlPatternKey; label: string; body: string }[] = [
  { key: "plain", label: "Plain", body: "No pattern to match — but plain papers show seams and wall imperfections more readily." },
  { key: "small", label: "Small repeat", body: "Matching is quick to see and wastage is usually low." },
  { key: "large", label: "Large repeat", body: "Each sheet may start at a different point on the roll, so more paper is used to keep the design continuous." },
  { key: "geo", label: "Geometric", body: "Lines must stay level and plumb — any drift is obvious across the wall." },
  { key: "mural", label: "Feature mural", body: "Numbered panels form one image; order and alignment are everything." },
];

export const wlScale: { label: string; points: string[] }[] = [
  { label: "Plain", points: ["Works on any wall size", "Lets furniture and art stand out", "Needs a well-prepared wall"] },
  { label: "Small pattern", points: ["Reads as texture from a distance", "Good for smaller rooms and walls with interruptions", "Forgiving around windows and doors"] },
  { label: "Large pattern", points: ["Best on large, uninterrupted walls", "Can feel busy behind lots of furniture", "Plan where the motifs land"] },
  { label: "Geometric", points: ["Makes uneven corners and ceilings more noticeable", "Strong focal point", "Layout and levels matter most"] },
  { label: "Floral", points: ["Scale it to the room — big blooms on big walls", "Softens bedrooms and dining rooms", "Check how it looks in your lighting"] },
  { label: "Textured", points: ["Adds depth under side lighting", "Hides minor wall flaws better than flat paper", "Seams need careful handling"] },
  { label: "Mural", points: ["One wall, ideally with few interruptions", "Measure accurately before ordering", "Furniture shouldn't hide the key part of the image"] },
  { label: "Not sure", points: ["Send a photo of the room", "We'll suggest what suits the wall and lighting"] },
];

export const wlRoomEffects = [
  { t: "Vertical patterns", b: "Draw the eye up, so ceilings can feel higher." },
  { t: "Horizontal patterns", b: "Lead the eye along a wall, so it can feel wider." },
  { t: "Large patterns", b: "Make a bold statement; can make a small room feel busier." },
  { t: "Small patterns", b: "Read as texture and suit smaller spaces." },
  { t: "Light colours", b: "Reflect more light and feel more open." },
  { t: "Dark colours", b: "Feel cosy and dramatic, especially on a feature wall." },
];

/* ------------------------------------------------------------------ */
/* Rooms                                                               */
/* ------------------------------------------------------------------ */

export const wlRooms: { key: string; label: string; points: string[] }[] = [
  { key: "living", label: "Living room", points: ["A feature wall behind the TV or sofa", "Large, uninterrupted surfaces suit bigger patterns", "Coordinate with furniture and curtains", "Check the paper in both daylight and evening light"] },
  { key: "bedroom", label: "Bedroom", points: ["The wall behind the bed is the classic feature wall", "Pattern scale relative to the bed and headboard", "Visual balance with wardrobes", "Bedside lighting shows texture"] },
  { key: "dining", label: "Dining room", points: ["Decorative patterns work well here", "A feature wall facing the entrance", "Plan around the table and sideboard"] },
  { key: "kids", label: "Kids' room", points: ["Choose a wipeable product where cleaning matters", "Playful patterns or a single mural wall", "Good wall preparation helps it last"] },
  { key: "office", label: "Office", points: ["A feature wall behind reception or a desk", "A professional, restrained look", "Pattern scale for the room size", "Avoid glossy finishes facing windows"] },
  { key: "hallway", label: "Hallway", points: ["Narrow spaces suit smaller patterns", "Visual continuity along the corridor", "Many corners and door openings to finish", "Durable products for high-traffic walls"] },
  { key: "stairs", label: "Stairway", points: ["Tall walls need safe access equipment", "Long drops and angled cuts", "Pattern matching over a long height", "More complex than a standard wall"] },
  { key: "commercial", label: "Commercial space", points: ["Repeated surfaces and multiple rooms", "Pattern and batch consistency", "Scheduling around opening hours", "Access and protection of the space"] },
];

/* ------------------------------------------------------------------ */
/* Planner                                                             */
/* ------------------------------------------------------------------ */

export const wlQuantityFactors = ["Wall width and height", "Roll or panel size", "Pattern repeat", "Hanging direction", "Doors and windows", "Number of walls", "How it's packaged", "Cutting and wastage", "Matching requirements", "Same batch for all rolls"];

export const wlPlanWalls = ["1 (feature wall)", "2", "3", "4 (full room)", "More"];
export const wlPlanWidth = ["Under 3 m", "3–5 m", "5–8 m", "Over 8 m", "Not sure"];
export const wlPlanHeight = ["Under 2.7 m", "2.7–3.2 m", "Over 3.2 m", "Not sure"];
export const wlPlanType = ["Plain", "Patterned", "Textured", "Mural", "Not sure"];
export const wlPlanCondition = ["Good", "Needs some prep", "Old wallpaper", "Not sure"];

/* ------------------------------------------------------------------ */
/* Process, problems, cost                                             */
/* ------------------------------------------------------------------ */

export const wlProcess: { title: string; body: string; icon: WlIconName }[] = [
  { title: "Understand the project", body: "Room, walls, wallpaper and the finish you want.", icon: "phone" },
  { title: "Inspect the surface", body: "Condition, existing finish and preparation needed.", icon: "wall" },
  { title: "Prepare the wall", body: "Clean, repair, smooth and prime as needed.", icon: "prepared" },
  { title: "Plan the layout", body: "Starting point, pattern, corners, doors and windows.", icon: "level" },
  { title: "Prepare the wallpaper", body: "Cut and handle sheets to the product's method.", icon: "roll" },
  { title: "Install", body: "Hang each sheet plumb with the right method.", icon: "sheet" },
  { title: "Match & finish", body: "Align patterns, close seams, trim edges and corners.", icon: "seam" },
  { title: "Final inspection", body: "Check the appearance, alignment and finish with you.", icon: "check" },
];

export const wlRoomPrep = ["Move small furniture away from the walls", "Clear access to every wall", "Protect valuable items", "Point out wall-mounted items to take down", "Point out sockets and switches", "Put fragile décor away", "Keep children and pets out of the room"];

export const wlProblems: { title: string; causes: string[] }[] = [
  { title: "Visible seams", causes: ["Poor surface preparation", "Positioning", "Product or method", "Wall movement or condition"] },
  { title: "Pattern doesn't line up", causes: ["Wrong starting point", "Repeat not allowed for", "Product characteristics", "Installation"] },
  { title: "Bubbles appear", causes: ["Technique", "Adhesive and product", "Surface condition", "Room conditions"] },
  { title: "Edges lifting", causes: ["Surface condition", "Adhesion", "Moisture or environment", "Installation"] },
  { title: "Wall flaws show through", causes: ["Thin or smooth paper reveals the surface underneath"] },
];

export const wlMistakes = [
  "Hanging over unstable paint",
  "Skipping wall preparation",
  "Not checking for moisture",
  "Choosing a paper without considering the wall",
  "Ignoring the pattern repeat",
  "Starting in the wrong place",
  "Poor seam alignment",
  "Ordering too little — or from different batches",
  "Ignoring doors and windows",
  "Assuming old wallpaper can always stay",
  "Ordinary paper in high-moisture areas",
  "Rushing corners and edges",
];

export const wlPro = ["Complex patterns", "Large walls", "Mural panels", "Several rooms", "Walls needing preparation", "Many corners, windows and doors", "Expensive or delicate paper", "Precise pattern alignment", "Old wallpaper to remove", "Uneven walls"];

export const wlCostFactors: { key: string; label: string; weight: number }[] = [
  { key: "rooms", label: "Several walls or rooms", weight: 3 },
  { key: "pattern", label: "Large or complex pattern", weight: 2 },
  { key: "mural", label: "Mural / panel installation", weight: 2 },
  { key: "prep", label: "Wall repairs and preparation", weight: 2 },
  { key: "removal", label: "Removing old wallpaper", weight: 2 },
  { key: "openings", label: "Many corners, doors and windows", weight: 1 },
  { key: "height", label: "High walls or stairway", weight: 2 },
  { key: "texture", label: "Textured or delicate paper", weight: 1 },
  { key: "supply", label: "We supply the wallpaper", weight: 3 },
  { key: "measure", label: "Measurement visit", weight: 1 },
];

/* ------------------------------------------------------------------ */
/* Form                                                                */
/* ------------------------------------------------------------------ */

export const wlFormProperty = ["Villa", "Apartment", "Office", "Shop", "Other"];
export const wlFormJob = ["Install", "Remove & install", "Removal only", "Supply & install", "Measure first"];
export const wlFormType = ["Plain", "Patterned", "Textured", "Mural", "Peel-and-stick", "Not sure"];
export const wlFormCondition = ["Smooth / painted", "Needs repairs", "Old wallpaper", "Textured", "Damp concern", "Not sure"];

export const wlChecklist = [
  "Wallpaper chosen",
  "Product instructions kept",
  "Enough rolls or panels, from the same batch",
  "Walls accessible",
  "Furniture moved where appropriate",
  "Existing wallpaper pointed out",
  "Wall damage pointed out",
  "Any moisture concerns mentioned",
  "Doors and windows noted",
  "Feature wall confirmed",
  "Pattern direction confirmed",
  "Photos ready",
];

/* ------------------------------------------------------------------ */
/* FAQ                                                                 */
/* ------------------------------------------------------------------ */

export const wlFaqs: { q: string; a: string }[] = [
  { q: "Do you install wallpaper in Dammam?", a: "Yes — in villas, apartments, offices, shops and rental properties across Dammam." },
  { q: "What types of wallpaper can you install?", a: "Paper, vinyl, non-woven, textured, peel-and-stick, patterned and mural wallpaper." },
  { q: "Can you install patterned wallpaper?", a: "Yes. We plan the starting point and match each sheet to the pattern repeat." },
  { q: "Can you install mural or feature-wall wallpaper?", a: "Yes. We measure the wall, check the panel order and align the panels so the image runs continuously." },
  { q: "Does the wall need to be prepared first?", a: "Usually some preparation is needed — cleaning at least, and often filling, sanding and priming. We do this as part of the job where needed." },
  { q: "Can wallpaper be installed over painted walls?", a: "Often, yes, if the paint is sound, clean and smooth. Peeling or flaking paint has to be dealt with first." },
  { q: "Can new wallpaper be installed over old wallpaper?", a: "Sometimes, but removing it usually gives a flatter, longer-lasting result. We'll check the old paper before deciding." },
  { q: "Do you remove old wallpaper?", a: "Yes. We remove old wallpaper and adhesive, then repair and prepare the wall underneath." },
  { q: "Can wallpaper be installed on textured walls?", a: "Light texture can sometimes be papered; heavier texture usually needs skimming or lining first to get a good finish." },
  { q: "Can wallpaper be used in bathrooms?", a: "Only products designed for humid rooms, in a ventilated space with a sound wall. We'll check the product specification." },
  { q: "Can you install wallpaper around windows and doors?", a: "Yes. Openings, corners, sockets and switches are cut and finished carefully as part of the installation." },
  { q: "Can I send photos of the wall before booking?", a: "Yes — photos of the full wall, corners, windows, doors and the current surface help us plan. We may still need to see it before an exact quote." },
  { q: "Do you provide wall measurements?", a: "Yes. We can visit to measure and work out how many rolls or panels you need for the chosen product." },
  { q: "How long does wallpaper installation take?", a: "It depends on the wall area, preparation, pattern and number of rooms. We'll give you an idea when we quote." },
  { q: "Can you install wallpaper in multiple rooms?", a: "Yes, from a single feature wall to whole homes and commercial spaces." },
  { q: "Do you install customer-supplied wallpaper?", a: "Yes. Send the product label or name and we'll check its requirements — or we can supply the wallpaper for you." },
];
