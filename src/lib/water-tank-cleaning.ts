// Shared data for the /water-tank-cleaning/ page.

export interface WtTankType {
  id: string;
  label: string;
  note: string;
}

export const wtTankTypes: WtTankType[] = [
  { id: "rooftop-plastic", label: "Rooftop plastic tank", note: "Common on villas — exposed to sunlight, which can encourage algae growth inside if the seal isn't tight." },
  { id: "underground-concrete", label: "Underground concrete tank", note: "Common in older buildings — sediment and mineral buildup are the usual concern here." },
  { id: "steel", label: "Steel tank", note: "Less common in newer builds, but rust and corrosion are worth checking for." },
  { id: "not-sure", label: "Not sure", note: "That's fine — a photo of the tank helps us identify the type." },
];

export type WtSignId = "smell" | "taste" | "discolored" | "low-flow" | "visible-sediment" | "not-sure";

export interface WtSign {
  id: WtSignId;
  label: string;
  description: string;
}

export const wtSigns: WtSign[] = [
  { id: "smell", label: "An unusual smell", description: "Water that smells different than it used to, especially after the tap has been off for a while." },
  { id: "taste", label: "A change in taste", description: "A metallic, musty or otherwise off taste." },
  { id: "discolored", label: "Discolored water", description: "Water that looks cloudy, yellowish or has visible particles." },
  { id: "low-flow", label: "Reduced water flow", description: "Weaker flow at taps, which can sometimes relate to sediment buildup." },
  { id: "visible-sediment", label: "Visible sediment in the tank", description: "If you've looked inside and noticed buildup at the bottom." },
  { id: "not-sure", label: "Not sure", description: "Send a photo of the tank if you can, and we'll help assess it." },
];

export const wtCleaningStages = [
  { id: "inspect", label: "Inspect", description: "The tank is checked for sediment, algae, and overall condition." },
  { id: "drain", label: "Drain", description: "Water is drained safely away from the tank." },
  { id: "scrub", label: "Scrub", description: "Interior surfaces and sediment are cleaned." },
  { id: "disinfect", label: "Disinfect", description: "The tank interior is treated appropriately." },
  { id: "rinse", label: "Rinse & refill", description: "The tank is rinsed thoroughly before being refilled." },
];

export interface WtFaqEntry {
  q: string;
  a: string;
}

export const wtFaqs: WtFaqEntry[] = [
  {
    q: "How often should a water tank be cleaned?",
    a: "This varies by tank type, usage and local water quality, but periodic cleaning — commonly discussed as roughly every 6 to 12 months — is a reasonable general guideline. We can advise more specifically after seeing your tank.",
  },
  {
    q: "How do I know if my tank needs cleaning?",
    a: "A change in smell, taste or clarity of your water, or visible sediment when you look inside the tank, are common signs worth having checked.",
  },
  {
    q: "Is it safe for me to clean the tank myself?",
    a: "We wouldn't recommend entering a tank yourself — confined spaces like tanks carry real risks, and proper cleaning also involves handling and disposal considerations that are best left to a professional visit.",
  },
  {
    q: "Do you clean both rooftop and underground tanks?",
    a: "Yes, we work with the common tank types found in Dammam properties — send a photo if you're not sure which type you have.",
  },
  {
    q: "Will cleaning the tank guarantee the water is completely safe to drink?",
    a: "Tank cleaning addresses sediment, buildup and tank condition, but we don't make water-safety guarantees — if you have specific health concerns about drinking water quality, that's worth discussing with a water-testing specialist.",
  },
  {
    q: "Can a dirty tank affect water pressure?",
    a: "It's possible — sediment buildup can be one contributing factor among several, so it's worth mentioning if you're also noticing reduced flow.",
  },
  {
    q: "Do you clean tanks for rental properties and buildings with multiple units?",
    a: "Yes — this is a common request from landlords and property managers with shared tanks.",
  },
  {
    q: "What should I send you before a visit?",
    a: "A photo of the tank (rooftop or underground), roughly how long it's been since it was last cleaned, and anything you've noticed about the water.",
  },
];

export interface WtConnectionEntry {
  label: string;
  href: string;
}

export const wtInternalLinks: WtConnectionEntry[] = [
  { label: "Waterproofing", href: "/waterproofing/" },
  { label: "Water Leak Detection & Repair", href: "/water-leak-repair/" },
  { label: "Plumbing", href: "/plumbing-repair/" },
  { label: "Property Maintenance", href: "/property-maintenance/" },
];
