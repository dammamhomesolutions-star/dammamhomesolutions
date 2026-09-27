export type MoistureAreaId =
  | "roof"
  | "ceiling"
  | "wall"
  | "bathroom"
  | "kitchen"
  | "floor"
  | "external-wall"
  | "not-sure";

export interface MoistureArea {
  id: MoistureAreaId;
  label: string;
  prompt: string;
  panel: string;
  whatsappMessage: string;
}

export const moistureAreas: MoistureArea[] = [
  {
    id: "roof",
    label: "Roof",
    prompt: "Water marks or leakage appearing after weather exposure.",
    panel:
      "Roof-related marks often appear or worsen after rain. Tell us when you first noticed it and whether it changes with weather — the roof's condition and the actual source both need a look.",
    whatsappMessage:
      "Hello Dammam Home Solutions, I have a moisture problem near the roof. Here's what I'm seeing: ",
  },
  {
    id: "ceiling",
    label: "Ceiling",
    prompt: "Staining, dampness or recurring marks.",
    panel:
      "Ceiling stains can have several possible sources. Tell us whether the mark appears after rain, after using plumbing above it, or keeps returning regardless.",
    whatsappMessage:
      "Hello Dammam Home Solutions, I have a ceiling stain or damp mark. Here's what I'm seeing: ",
  },
  {
    id: "wall",
    label: "Wall",
    prompt: "Damp patches, peeling paint or moisture marks.",
    panel:
      "Wall dampness can come from inside the property or from outside it. Tell us which wall, whether it's an exterior-facing one, and whether the paint or plaster is affected.",
    whatsappMessage:
      "Hello Dammam Home Solutions, I have a damp patch or peeling paint on a wall. Here's what I'm seeing: ",
  },
  {
    id: "bathroom",
    label: "Bathroom",
    prompt: "Moisture or leakage around a wet area.",
    panel:
      "Bathroom moisture can be a waterproofing issue, a plumbing issue, or both at once. Tell us where exactly — around the shower, the floor, a wall — and how long it's been happening.",
    whatsappMessage:
      "Hello Dammam Home Solutions, I have moisture or leakage around the bathroom. Here's what I'm seeing: ",
  },
  {
    id: "kitchen",
    label: "Kitchen",
    prompt: "Water-related damage around sinks or wet areas.",
    panel:
      "Kitchen moisture is often plumbing-related, but not always. Tell us whether it's near the sink specifically or affecting a wider area of the wall or floor.",
    whatsappMessage:
      "Hello Dammam Home Solutions, I have water-related damage in the kitchen. Here's what I'm seeing: ",
  },
  {
    id: "floor",
    label: "Floor",
    prompt: "Recurring dampness or water-related surface problems.",
    panel:
      "A floor that stays damp or shows recurring marks is worth describing in detail — which room, whether it's near an external wall, and whether it's linked to weather or water use nearby.",
    whatsappMessage:
      "Hello Dammam Home Solutions, I have recurring dampness on a floor. Here's what I'm seeing: ",
  },
  {
    id: "external-wall",
    label: "External Wall",
    prompt: "Moisture appearing around exterior-facing surfaces.",
    panel:
      "Exterior-facing surfaces are exposed to weather directly, so moisture there is worth flagging separately from an interior wall. Tell us where on the property and what it looks like.",
    whatsappMessage:
      "Hello Dammam Home Solutions, I have moisture on an external wall. Here's what I'm seeing: ",
  },
  {
    id: "not-sure",
    label: "Not Sure",
    prompt: "The property has a moisture problem, but the source isn't obvious.",
    panel:
      "That's fine — describe what you've noticed and where, even loosely. A photo of the affected area and the surrounding context usually helps more than trying to pin down the cause yourself.",
    whatsappMessage:
      "Hello Dammam Home Solutions, I have a moisture problem but I'm not sure of the source. Here's what I've noticed: ",
  },
];
