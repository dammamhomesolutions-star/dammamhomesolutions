export type RoomId = "bathroom" | "kitchen";

export interface Crossover {
  label: string;
  href: string;
}

export interface RoomHotspot {
  id: string;
  label: string;
  issues: string[];
  panel: string;
  whatsappMessage: string;
  crossover?: Crossover;
}

export const bathroomHotspots: RoomHotspot[] = [
  {
    id: "sink",
    label: "Sink",
    issues: ["Leaking tap", "Drainage problem", "Loose fixture", "Damaged connection"],
    panel:
      "Sink problems are usually plumbing-related, but the exact cause — the tap, the connection, or the drain — depends on what's actually happening.",
    whatsappMessage: "Hello Dammam Home Solutions, I have a problem with the bathroom sink. Here's what I'm seeing: ",
    crossover: { label: "Plumbing & water leak repair", href: "/plumbing-repair/" },
  },
  {
    id: "toilet",
    label: "Toilet",
    issues: ["Running water", "Weak or slow flush", "Loose base", "Leak around the base"],
    panel:
      "Toilet issues can range from a simple internal part to something around the base connection. Tell us what you're noticing and when.",
    whatsappMessage: "Hello Dammam Home Solutions, I have a problem with the toilet. Here's what I'm seeing: ",
    crossover: { label: "Plumbing & water leak repair", href: "/plumbing-repair/" },
  },
  {
    id: "shower",
    label: "Shower / Wet Area",
    issues: ["Slow drainage", "Water escaping the wet area", "Fixture issue", "Recurring dampness nearby"],
    panel:
      "Wet areas see the most water exposure in the bathroom, so problems here can be plumbing, drainage, or a waterproofing question depending on where the water actually ends up.",
    whatsappMessage: "Hello Dammam Home Solutions, I have a problem with the shower or wet area. Here's what I'm seeing: ",
    crossover: { label: "Waterproofing", href: "/waterproofing/" },
  },
  {
    id: "floor",
    label: "Floor",
    issues: ["Standing water", "Recurring dampness", "Damaged tile underfoot", "Uneven or loose section"],
    panel:
      "A bathroom floor problem could have different sources. It helps to know whether it's linked to a specific fixture or happens regardless.",
    whatsappMessage: "Hello Dammam Home Solutions, I have a problem with the bathroom floor. Here's what I'm seeing: ",
  },
  {
    id: "wall",
    label: "Wall",
    issues: ["Damp patch", "Peeling paint", "Staining", "Damaged surface"],
    panel:
      "A damp bathroom wall could overlap with plumbing or waterproofing — the source needs a look before deciding which.",
    whatsappMessage: "Hello Dammam Home Solutions, I have a damp or damaged wall in the bathroom. Here's what I'm seeing: ",
    crossover: { label: "Waterproofing", href: "/waterproofing/" },
  },
  {
    id: "tiles",
    label: "Tiles",
    issues: ["Cracked or damaged tile", "Loose tile", "Damaged grout", "Discoloration"],
    panel:
      "Tile damage is usually a surface repair, though it's worth mentioning if it's near a wet area in case moisture is also involved.",
    whatsappMessage: "Hello Dammam Home Solutions, I have damaged or loose tiles in the bathroom. Here's what I'm seeing: ",
  },
  {
    id: "door",
    label: "Door",
    issues: ["Won't close properly", "Lock problem", "Handle issue", "Hinge noise"],
    panel:
      "Bathroom doors take a lot of daily use in a small space. This is usually a carpentry or hardware question rather than a plumbing one.",
    whatsappMessage: "Hello Dammam Home Solutions, I have a problem with the bathroom door. Here's what I'm seeing: ",
    crossover: { label: "Carpentry, doors & locks", href: "/carpentry-doors-locks/" },
  },
  {
    id: "drain",
    label: "Drain",
    issues: ["Slow to clear", "Recurring blockage", "Standing water", "Unpleasant smell"],
    panel:
      "Slow or blocked drains are usually a plumbing matter, though the cause varies by what's actually restricting the flow.",
    whatsappMessage: "Hello Dammam Home Solutions, I have a slow or blocked bathroom drain. Here's what I'm seeing: ",
    crossover: { label: "Plumbing & water leak repair", href: "/plumbing-repair/" },
  },
];

export const kitchenHotspots: RoomHotspot[] = [
  {
    id: "sink",
    label: "Sink",
    issues: ["Leak", "Loose fixture", "Damaged connection", "Fitting problem"],
    panel: "Kitchen sink problems are usually plumbing-related — a leak, a loose fitting, or a connection worth checking.",
    whatsappMessage: "Hello Dammam Home Solutions, I have a problem with the kitchen sink. Here's what I'm seeing: ",
    crossover: { label: "Plumbing & water leak repair", href: "/plumbing-repair/" },
  },
  {
    id: "tap",
    label: "Tap",
    issues: ["Dripping", "Low pressure", "Loose or wobbly", "Won't shut off fully"],
    panel: "Tap issues range from a worn part to a looser fitting — tell us what it's doing and how long it's been like that.",
    whatsappMessage: "Hello Dammam Home Solutions, I have a problem with the kitchen tap. Here's what I'm seeing: ",
    crossover: { label: "Plumbing & water leak repair", href: "/plumbing-repair/" },
  },
  {
    id: "drain",
    label: "Drain",
    issues: ["Slow drainage", "Recurring blockage", "Standing water", "Smell from the drain"],
    panel: "Slow kitchen drainage is common and usually plumbing-related, though the cause behind it varies.",
    whatsappMessage: "Hello Dammam Home Solutions, I have a slow or blocked kitchen drain. Here's what I'm seeing: ",
    crossover: { label: "Plumbing & water leak repair", href: "/plumbing-repair/" },
  },
  {
    id: "cabinets",
    label: "Cabinets",
    issues: ["Loose hinge", "Misaligned door", "Damaged handle", "Won't close properly"],
    panel: "Cabinet doors going out of alignment is one of the most common kitchen requests — usually the hinge, not the cabinet itself.",
    whatsappMessage: "Hello Dammam Home Solutions, I have a kitchen cabinet problem. Here's what I'm seeing: ",
    crossover: { label: "Carpentry, doors & locks", href: "/carpentry-doors-locks/" },
  },
  {
    id: "drawers",
    label: "Drawers",
    issues: ["Sticking", "Off the runner", "Won't close fully", "Damaged front"],
    panel: "Sticking drawers are usually a runner or alignment issue rather than the drawer itself.",
    whatsappMessage: "Hello Dammam Home Solutions, I have a kitchen drawer problem. Here's what I'm seeing: ",
    crossover: { label: "Carpentry, doors & locks", href: "/carpentry-doors-locks/" },
  },
  {
    id: "counter",
    label: "Counter Area",
    issues: ["Damaged surface", "Chip or crack", "Wear around the sink cutout", "Loose edge"],
    panel: "Counter damage depends a lot on the material and how it happened — worth a photo to explain it clearly.",
    whatsappMessage: "Hello Dammam Home Solutions, I have counter damage in the kitchen. Here's what I'm seeing: ",
  },
  {
    id: "tiles",
    label: "Tiles",
    issues: ["Cracked or damaged tile", "Loose tile", "Damaged grout", "Marks near the cooking area"],
    panel: "Kitchen tile damage is usually a surface repair — cracked tiles, loose grout, or marks that have built up over time.",
    whatsappMessage: "Hello Dammam Home Solutions, I have damaged tiles in the kitchen. Here's what I'm seeing: ",
  },
  {
    id: "wall",
    label: "Wall",
    issues: ["Marks or staining", "Damaged paint", "Damp patch", "Damaged surface"],
    panel: "Kitchen wall marks are often just wear, but a damp patch is worth treating as its own question.",
    whatsappMessage: "Hello Dammam Home Solutions, I have a wall problem in the kitchen. Here's what I'm seeing: ",
    crossover: { label: "Painting & wall repair", href: "/painting-wall-repair/" },
  },
  {
    id: "floor",
    label: "Floor",
    issues: ["Standing water", "Damaged tile or surface", "Recurring dampness", "Uneven section"],
    panel: "A kitchen floor problem could be linked to the sink or drain nearby, or something separate — worth mentioning both.",
    whatsappMessage: "Hello Dammam Home Solutions, I have a floor problem in the kitchen. Here's what I'm seeing: ",
  },
];

export const roomHotspots: Record<RoomId, RoomHotspot[]> = {
  bathroom: bathroomHotspots,
  kitchen: kitchenHotspots,
};

export const roomChecklist: Record<RoomId, string[]> = {
  bathroom: ["Sink", "Drain", "Toilet", "Tiles", "Wall", "Door", "Other"],
  kitchen: ["Sink", "Tap", "Drain", "Cabinet", "Drawer", "Tiles", "Wall", "Other"],
};
