export type AreaId =
  | "bathroom"
  | "kitchen"
  | "wall"
  | "ceiling"
  | "floor"
  | "outside"
  | "not-sure";

export interface WaterArea {
  id: AreaId;
  label: string;
  prompt: string;
  panel: string;
  whatsappMessage: string;
}

export const waterAreas: WaterArea[] = [
  {
    id: "bathroom",
    label: "Bathroom",
    prompt: "Water around shower, toilet, sink or floor.",
    panel:
      "Bathroom leaks often show up near a fitting rather than at the exact source. Tell us which fixture is closest to what you're seeing, and whether it happens during use or all the time.",
    whatsappMessage:
      "Hello Dammam Home Solutions, I have a bathroom plumbing problem. Here's what I'm seeing: ",
  },
  {
    id: "kitchen",
    label: "Kitchen",
    prompt: "Leak under sink, tap, drain or cabinet area.",
    panel:
      "Kitchen leaks are often centered under the sink, but water can travel along cabinets or the floor before it's noticed. A look under the sink usually explains a lot.",
    whatsappMessage:
      "Hello Dammam Home Solutions, I have a kitchen plumbing problem. Here's what I'm seeing: ",
  },
  {
    id: "wall",
    label: "Wall",
    prompt: "Damp patch, staining or moisture.",
    panel:
      "Water marks can come from different sources. Tell us when you notice the dampness and whether it changes after using nearby plumbing.",
    whatsappMessage:
      "Hello Dammam Home Solutions, I have a damp patch or staining on a wall. Here's what I'm seeing: ",
  },
  {
    id: "ceiling",
    label: "Ceiling",
    prompt: "Water mark, dripping or damp area above.",
    panel:
      "A ceiling mark usually means water has traveled from somewhere else — a bathroom, kitchen or pipe run above. Tell us what's directly above the mark, if you know.",
    whatsappMessage:
      "Hello Dammam Home Solutions, I have a water mark or dripping from the ceiling. Here's what I'm seeing: ",
  },
  {
    id: "floor",
    label: "Floor",
    prompt: "Standing water, recurring dampness or visible leak.",
    panel:
      "Standing water on a floor is usually easier to trace than damp walls or ceilings, but it still helps to know when it appears and whether it's linked to a specific fixture.",
    whatsappMessage:
      "Hello Dammam Home Solutions, I have standing water or dampness on a floor. Here's what I'm seeing: ",
  },
  {
    id: "outside",
    label: "Outside / Utility Area",
    prompt: "Water around tanks, pipes or external plumbing.",
    panel:
      "External plumbing covers tanks, exposed pipework and utility connections. Let us know what you're seeing and roughly where on the property it is.",
    whatsappMessage:
      "Hello Dammam Home Solutions, I have a plumbing problem in an outside or utility area. Here's what I'm seeing: ",
  },
  {
    id: "not-sure",
    label: "Not Sure",
    prompt: "Something is wrong, but the source isn't obvious.",
    panel:
      "That's fine — describe what you've noticed, including where and when. A photo or short video, even an imperfect one, usually helps more than trying to describe it precisely.",
    whatsappMessage:
      "Hello Dammam Home Solutions, something seems wrong with the plumbing but I'm not sure where it's coming from. Here's what I've noticed: ",
  },
];
