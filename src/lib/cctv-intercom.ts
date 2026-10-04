// Content for the CCTV & Intercom Installation page. Confirmed by the business:
// IP / PoE + NVR, analog HD + DVR and Wi-Fi cameras; cloud storage where the
// system supports it; audio, video and smart / mobile intercoms; gate and door
// release integration; apartment / multi-unit entry systems; equipment supply;
// maintenance and repair; commercial installations; a workmanship warranty
// (terms in each quote). No brand partnerships, monitoring services, prices,
// response times, legal claims or crime-prevention guarantees.

export type CvIconName =
  | "camera"
  | "intercom"
  | "gate"
  | "door"
  | "house"
  | "apartment"
  | "office"
  | "shop"
  | "warehouse"
  | "coverage"
  | "night"
  | "recording"
  | "nvr"
  | "cloud"
  | "mobile"
  | "network"
  | "poe"
  | "shield"
  | "maintenance"
  | "search"
  | "quote"
  | "motion"
  | "alert"
  | "audio"
  | "lock"
  | "eye"
  | "user"
  | "check"
  | "arrow"
  | "phone"
  | "cable"
  | "sun";

/* ------------------------------------------------------------------ */
/* Quick answers                                                       */
/* ------------------------------------------------------------------ */

export const cvAnswers: { q: string; a: string }[] = [
  { q: "How many CCTV cameras does a house need?", a: "It depends on the layout, the number of entrances, each camera's field of view and what you need to see. There's no honest fixed number without looking at the property." },
  { q: "What is the difference between CCTV and an intercom?", a: "CCTV watches and records areas. An intercom lets you talk to — and, with video, see — a visitor at the door or gate before deciding to let them in." },
  { q: "Should I choose wired or wireless CCTV?", a: "Wired gives a stable connection and suits permanent installs; wireless helps where cabling is difficult but depends on Wi-Fi quality and still needs power." },
  { q: "Can I view CCTV cameras from my phone?", a: "Yes, on compatible systems — once the recorder or cameras are connected to the internet and the app is set up correctly." },
  { q: "How long does CCTV footage stay recorded?", a: "It depends on storage capacity, the number of cameras, resolution and whether it records continuously or on motion. It's planned, not fixed." },
  { q: "Is night vision important?", a: "If you need to see entrances, gates or parking after dark, yes. Results depend on the camera, the available light and the placement." },
  { q: "How much does CCTV installation cost in Dammam?", a: "It depends on the number and type of cameras, recording and storage, cabling distance, mounting and any intercom. An assessment comes before the quote." },
  { q: "Does an intercom open the gate automatically?", a: "Only if it's connected to a compatible electric lock or gate opener. Many intercoms can trigger a release; the visitor is never let in automatically." },
  { q: "Does CCTV work without internet?", a: "A local recorder keeps recording without internet. You lose remote viewing and phone alerts until the connection returns." },
  { q: "How should CCTV cameras be positioned?", a: "Cover entrances and access points, watch for blind spots, glare and obstructions, mount securely at a sensible height, and respect privacy." },
];

/* ------------------------------------------------------------------ */
/* Planner                                                             */
/* ------------------------------------------------------------------ */

export const cvPlanProperty = ["Villa", "Apartment", "Office", "Shop", "Warehouse", "Building entrance", "Other"];
export const cvPlanMonitor = ["Main entrance", "Gate", "Driveway", "Parking area", "Outdoor perimeter", "Indoor areas", "Office entrance", "Shop floor", "Multiple areas", "Not sure"];
export const cvPlanNeed = ["CCTV only", "Intercom only", "CCTV + Intercom", "Not sure"];
export const cvPlanPriority = ["See visitors before opening", "Monitor entrances", "Monitor outdoor areas", "Remote viewing", "Recording", "Night visibility", "Access control", "General security"];

/* ------------------------------------------------------------------ */
/* Property map                                                        */
/* ------------------------------------------------------------------ */

export type CvZone = "gate" | "door" | "driveway" | "parking" | "side" | "perimeter" | "common" | "interior";

export const cvZones: { key: CvZone; label: string; needs: string[]; note: string }[] = [
  { key: "gate", label: "Main gate", needs: ["Outdoor camera", "Gate intercom", "Lighting", "Visitor identification"], note: "Often the first point of contact — a common place for both a camera and an intercom station." },
  { key: "door", label: "Front door", needs: ["Entrance camera", "Video intercom", "Visitor communication"], note: "Where you want a clear face-height view of whoever is at the door." },
  { key: "driveway", label: "Driveway", needs: ["Wider field of view", "Suitable night visibility", "Vehicle coverage"], note: "Long, open areas need the right lens — too wide and detail is lost at the far end." },
  { key: "parking", label: "Parking", needs: ["Outdoor camera", "Lighting consideration", "Coverage of access"], note: "Headlights and low light can affect the picture; placement matters." },
  { key: "side", label: "Side entrance", needs: ["Blind-spot check", "Possible camera"], note: "Side doors and service entrances are easy to overlook in a plan." },
  { key: "perimeter", label: "Back / perimeter", needs: ["Assess whether coverage is needed", "Weather exposure", "Cable route"], note: "Not every wall needs a camera — it depends on access points and what you want to know." },
  { key: "common", label: "Shared / common area", needs: ["Privacy of neighbours", "Building permissions", "Agreed coverage"], note: "In shared spaces, coverage should be agreed and limited to what's necessary." },
  { key: "interior", label: "Interior entrance", needs: ["Indoor camera, if appropriate", "Privacy consideration"], note: "Indoors, keep to entrances and hallways — never private spaces." },
];

/* ------------------------------------------------------------------ */
/* Blind-spot visualiser                                               */
/* ------------------------------------------------------------------ */

export type CvView = "narrow" | "wide" | "obstruction" | "poor" | "better";

export const cvViews: { key: CvView; label: string; body: string }[] = [
  { key: "narrow", label: "Narrow view", body: "More detail at distance, but a smaller area. Good for a gate or a single doorway." },
  { key: "wide", label: "Wider view", body: "Covers more area but each person or plate is smaller in the image. Detail at the far end drops." },
  { key: "obstruction", label: "Obstruction", body: "A pillar, tree or parked car blocks part of the view and creates a blind spot behind it." },
  { key: "poor", label: "Poor positioning", body: "Aimed away from the entrance or into the sun — the area you actually care about is barely in frame." },
  { key: "better", label: "Better positioning", body: "Mounted to look along the approach to the entrance, with the door and gate both in view." },
];

/* ------------------------------------------------------------------ */
/* Technology                                                          */
/* ------------------------------------------------------------------ */

export const cvWiredWireless: { aspect: string; wired: string; wireless: string }[] = [
  { aspect: "Connection", wired: "Stable physical cable", wireless: "Depends on Wi-Fi signal and network quality" },
  { aspect: "Installation", wired: "Cable routes need planning", wireless: "Easier placement where cabling is hard" },
  { aspect: "Power", wired: "Often via PoE on the same cable", wireless: "Still needs a power supply nearby" },
  { aspect: "Best for", wired: "Permanent, multi-camera systems", wireless: "Small setups or difficult-to-cable spots" },
];

export const cvFeatures: { icon: CvIconName; title: string; body: string }[] = [
  { icon: "motion", title: "Motion detection", body: "How well it ignores trees, shadows and cars depends on the system and its settings." },
  { icon: "night", title: "Night vision", body: "Infrared or low-light capability; clarity depends on the camera and the scene." },
  { icon: "mobile", title: "Remote viewing", body: "Needs compatible hardware, an internet connection and the app configured." },
  { icon: "recording", title: "Recording", body: "Continuous or event-based, to a recorder, card or cloud where supported." },
  { icon: "alert", title: "Alerts", body: "Phone notifications on supported systems; tuned to avoid constant false alarms." },
  { icon: "audio", title: "Two-way audio", body: "Speak through some cameras and all intercoms; not every camera has it." },
  { icon: "lock", title: "Door / gate control", body: "Release a lock or gate from the intercom when compatible hardware is fitted." },
];

export const cvQuality = ["Resolution", "Lens", "Field of view", "Sensor size", "Lighting", "Night performance", "Placement", "Compression", "Recording settings"];

/* ------------------------------------------------------------------ */
/* Intercom                                                            */
/* ------------------------------------------------------------------ */

export const cvIntercomTypes: { key: string; title: string; icon: CvIconName; provides: string[] }[] = [
  { key: "audio", title: "Audio intercom", icon: "audio", provides: ["Two-way voice", "Simple to use", "Door release where wired"] },
  { key: "video", title: "Video intercom", icon: "intercom", provides: ["Two-way voice", "See the visitor on an indoor monitor", "Door / gate release where compatible"] },
  { key: "smart", title: "Smart / mobile intercom", icon: "mobile", provides: ["Answer from your phone", "Video and audio", "Remote door / gate release where compatible", "Needs a reliable network"] },
];

export const cvGateFlow = ["Visitor", "Gate intercom", "Indoor monitor / phone", "Visitor verification", "Your entry decision"];
export const cvLayers = ["Gate camera", "Intercom", "Entrance camera", "Recorder", "Mobile viewing"];

/* ------------------------------------------------------------------ */
/* Process                                                             */
/* ------------------------------------------------------------------ */

export const cvProcess: { title: string; body: string; icon: CvIconName }[] = [
  { title: "Property assessment", body: "Layout, entrances, what you want to monitor, and network and power conditions.", icon: "search" },
  { title: "System planning", body: "Camera types and positions, intercom type, recording, connectivity and cable routes.", icon: "coverage" },
  { title: "Equipment selection", body: "Matched to the actual requirement, and supplied by us if you need it.", icon: "camera" },
  { title: "Installation", body: "Cameras, intercom stations and the infrastructure they need, securely mounted.", icon: "maintenance" },
  { title: "Cabling & connectivity", body: "Network, PoE where applicable, power, routing and weather protection.", icon: "cable" },
  { title: "Configuration", body: "Cameras, recorder, intercom, user accounts and mobile viewing where supported.", icon: "network" },
  { title: "Testing", body: "Camera views, recording, night picture, intercom audio / video and remote access.", icon: "check" },
  { title: "Handover", body: "How to use it, who has access, playback, and what maintenance it needs.", icon: "user" },
];

export const cvCabling = [
  "Sensible cable routes, kept out of reach where possible",
  "Protected outdoor cabling and sealed connections",
  "Proper terminations, not twisted joints",
  "Secure, level mounting",
  "Network capacity planned for the cameras",
  "Power that suits the equipment",
  "Access left for future maintenance",
];

/* ------------------------------------------------------------------ */
/* Privacy, maintenance, repair                                        */
/* ------------------------------------------------------------------ */

export const cvPrivacy = [
  "Point cameras at your own entrances and areas, not into neighbours' homes",
  "Avoid private spaces such as bedrooms and bathrooms entirely",
  "Agree coverage of shared and common areas",
  "Limit who can view live and recorded footage",
  "Protect recordings and delete what you don't need",
];

export const cvAccess = [
  "Change default passwords on every device",
  "Separate administrator and viewer accounts",
  "Give each user only the access they need",
  "Remove access when staff or tenants leave",
  "Apply firmware updates where the manufacturer provides them",
];

export const cvCctvMaint = ["Clean camera lenses and housings", "Check cables and connections", "Confirm recording is running", "Check hard-drive health", "Test network and remote access", "Re-check camera alignment", "Review the night picture"];
export const cvIntercomMaint = ["Audio clarity", "Microphone and speaker", "Outdoor station condition", "Indoor monitor", "Network / connectivity", "Power supply", "Door / gate release"];

export const cvRepair = ["A single component has failed", "The camera is otherwise suitable", "Cabling is sound", "The recorder is still compatible", "The intercom part is replaceable"];
export const cvReplace = ["The system is obsolete", "Components are incompatible", "Repeated failures", "Image quality no longer meets your needs", "Storage or network setup is outdated", "Your requirements have changed"];

/* ------------------------------------------------------------------ */
/* Cost                                                                */
/* ------------------------------------------------------------------ */

export const cvCostFactors: { key: string; label: string; weight: number }[] = [
  { key: "cams", label: "More than a few cameras", weight: 3 },
  { key: "outdoor", label: "Outdoor cameras", weight: 2 },
  { key: "night", label: "Night visibility needed", weight: 1 },
  { key: "storage", label: "Longer recording / more storage", weight: 2 },
  { key: "cable", label: "Long cable runs", weight: 2 },
  { key: "height", label: "Difficult mounting / height", weight: 1 },
  { key: "intercom", label: "Video or smart intercom", weight: 2 },
  { key: "release", label: "Door / gate release integration", weight: 2 },
  { key: "remote", label: "Remote viewing setup", weight: 1 },
  { key: "existing", label: "Replacing an old system", weight: 1 },
];

export const cvCountChain = ["More equipment", "More storage", "Potentially more cabling", "More network capacity", "More installation work"];

/* ------------------------------------------------------------------ */
/* Checklists                                                          */
/* ------------------------------------------------------------------ */

export const cvBefore = [
  "Which areas actually need monitoring?",
  "Do you need recording, or just live view?",
  "Roughly how long should footage be kept?",
  "Do you need to view it from your phone?",
  "Is night visibility important?",
  "Wired, wireless, or a mix?",
  "Where can the recorder be kept safely?",
  "What internet and network do you have?",
  "Do you need an intercom — and gate or door release?",
  "Who should have access to the system?",
];

export const cvAskCctv = [
  "What area will each camera cover?",
  "Where are the blind spots?",
  "Which camera type, and why does it suit this spot?",
  "How will footage be stored, and for how long?",
  "Is remote viewing supported?",
  "What happens if the internet goes down?",
  "How will outdoor cables be protected?",
  "What happens if a camera fails?",
  "Are installation, configuration and handover included?",
  "What warranty applies, and to what?",
];

export const cvAskIntercom = [
  "Audio or video?",
  "Where will the outdoor station go?",
  "Where will the indoor monitor go?",
  "Does it support gate or door release?",
  "Is mobile answering supported?",
  "What happens in a power or internet outage?",
  "Is cabling included?",
  "Can it work with my existing gate equipment?",
  "What maintenance does it need?",
];

export const cvScope: { service: string; purpose: string }[] = [
  { service: "CCTV installation", purpose: "Install security cameras and recorders" },
  { service: "CCTV system planning", purpose: "Work out suitable coverage and camera types" },
  { service: "CCTV configuration", purpose: "Set up recording, network and user access" },
  { service: "Intercom installation", purpose: "Install audio or video visitor communication" },
  { service: "Gate / door release", purpose: "Connect the intercom to compatible locks or gate openers" },
  { service: "Remote viewing setup", purpose: "Configure phone access on compatible systems" },
  { service: "Equipment supply", purpose: "Supply cameras, recorders and intercoms to suit the plan" },
  { service: "Maintenance & repair", purpose: "Check, fix or upgrade existing systems" },
];

/* ------------------------------------------------------------------ */
/* Form                                                                */
/* ------------------------------------------------------------------ */

export const cvFormProperty = ["Villa", "Apartment", "Office", "Shop", "Warehouse", "Building", "Other"];
export const cvFormSystem = ["CCTV", "Intercom", "Both"];
export const cvFormService = ["New installation", "Add to existing system", "Repair / maintenance", "Upgrade"];
export const cvFormFloors = ["1", "2", "3+", "Not applicable"];
export const cvFormYesNo = ["Yes", "No", "Not sure"];

/* ------------------------------------------------------------------ */
/* FAQ                                                                 */
/* ------------------------------------------------------------------ */

export const cvFaqs: { q: string; a: string }[] = [
  { q: "How many CCTV cameras does my property need?", a: "It depends on the layout, number of entrances, each camera's field of view, how much detail you need and any blind spots. We plan coverage at a site assessment rather than guess a number." },
  { q: "What's the difference between CCTV and an intercom?", a: "CCTV monitors and records areas. An intercom lets you speak to — and with video, see — a visitor before deciding whether to let them in. Many properties use both." },
  { q: "Should I choose wired or wireless CCTV?", a: "Wired is generally more stable and suits permanent multi-camera systems. Wireless helps where cabling is difficult but depends on Wi-Fi quality and still needs power." },
  { q: "Can I view my CCTV from my phone?", a: "On compatible systems, yes — once the recorder or cameras are online and the app is configured. We set this up and test it during handover." },
  { q: "Does CCTV work without internet?", a: "A system with a local recorder keeps recording without internet. Remote viewing and phone alerts stop until the connection is back." },
  { q: "How long can CCTV footage be stored?", a: "It depends on the drive size, number of cameras, resolution and whether recording is continuous or motion-based. We size storage to the retention you want." },
  { q: "Do outdoor cameras work at night?", a: "Many have infrared or low-light capability, but clarity depends on the camera, available lighting and placement. Not every camera gives a clear colour picture at night." },
  { q: "What is an NVR?", a: "A network video recorder. It records footage from IP (network) cameras, usually onto a hard drive, and often powers them over PoE." },
  { q: "What is the difference between a DVR and an NVR?", a: "A DVR records from analog / HD coaxial cameras; an NVR records from IP network cameras. The right one depends on the camera system." },
  { q: "Should I install an audio or video intercom?", a: "Audio lets you talk to visitors. Video adds seeing them, which helps verify who is there. Smart intercoms also let you answer from your phone." },
  { q: "Can an intercom control a gate or door?", a: "Yes, when it's connected to a compatible electric lock or gate opener. We check your existing gate or door hardware first." },
  { q: "How much does CCTV installation cost in Dammam?", a: "It depends on the number and type of cameras, recording and storage, cabling, mounting and any remote viewing. We assess the property and quote before any work." },
  { q: "How much does intercom installation cost?", a: "It depends on audio or video, the number of stations, cable distance, mobile features and any gate or door release integration." },
  { q: "What should I prepare before installation?", a: "Decide which areas matter, whether you need recording, remote viewing or an intercom, where the recorder can go, and who needs access." },
  { q: "How often should a CCTV system be maintained?", a: "There's no single schedule — dusty or exposed cameras need more attention. Regularly check that recording works, lenses are clean and remote access still connects." },
];
