export type SurfaceId =
  | "cracks"
  | "peeling-paint"
  | "stains"
  | "holes"
  | "damp-mark"
  | "old-paint"
  | "ceiling"
  | "full-room"
  | "not-sure";

export type LayerId = "paint" | "preparation" | "surface" | "wall";

export interface WallSurface {
  id: SurfaceId;
  label: string;
  prompt: string;
  panel: string;
  whatsappMessage: string;
  layer: LayerId | "all" | "none";
}

export const wallSurfaces: WallSurface[] = [
  {
    id: "cracks",
    label: "Cracks",
    prompt: "Small or visible cracks appearing on a wall or ceiling.",
    panel:
      "Visible cracks can vary a lot in what they mean. Smaller, stable cracks are often a surface-preparation matter — filled and smoothed before painting. Anything larger or changing is worth a closer look first.",
    whatsappMessage:
      "Hello Dammam Home Solutions, I have a crack on a wall or ceiling. Here's what I'm seeing: ",
    layer: "surface",
  },
  {
    id: "peeling-paint",
    label: "Peeling Paint",
    prompt: "Paint lifting, flaking or separating from the surface.",
    panel:
      "Peeling paint can be related to surface condition, moisture, or how the surface was prepared before it was last painted. The right repair depends on what's underneath the visible finish.",
    whatsappMessage:
      "Hello Dammam Home Solutions, paint is peeling on a wall or ceiling. Here's what I'm seeing: ",
    layer: "preparation",
  },
  {
    id: "stains",
    label: "Stains / Marks",
    prompt: "Discoloration, marks or visible patches.",
    panel:
      "Stains and marks can come from moisture, everyday wear, or something that happened once and left a trace. Tell us what the mark looks like and whether it's changed over time.",
    whatsappMessage:
      "Hello Dammam Home Solutions, I have a stain or mark on a wall. Here's what I'm seeing: ",
    layer: "surface",
  },
  {
    id: "holes",
    label: "Holes / Damage",
    prompt: "Small holes, impact marks or damaged areas.",
    panel:
      "Small holes and impact damage are usually a patch-and-repair job before painting. Tell us roughly how many, how large, and where.",
    whatsappMessage:
      "Hello Dammam Home Solutions, I have holes or damage on a wall. Here's what I'm seeing: ",
    layer: "surface",
  },
  {
    id: "damp-mark",
    label: "Damp / Moisture Mark",
    prompt: "A wall or ceiling showing signs of moisture.",
    panel:
      "The moisture source may need to be addressed before repainting — otherwise the mark is likely to return. This is worth treating as a separate question from the painting itself.",
    whatsappMessage:
      "Hello Dammam Home Solutions, I have a damp or moisture mark on a wall or ceiling. Here's what I'm seeing: ",
    layer: "wall",
  },
  {
    id: "old-paint",
    label: "Old / Worn Paint",
    prompt: "The surface is intact but needs a fresh finish.",
    panel:
      "When the surface itself is in reasonable condition, this is usually more straightforward — a refresh of the finish rather than a repair job first.",
    whatsappMessage:
      "Hello Dammam Home Solutions, I'd like to refresh some old or worn paint. Here's some context: ",
    layer: "paint",
  },
  {
    id: "ceiling",
    label: "Ceiling",
    prompt: "Painting or repair work required above.",
    panel:
      "Ceilings get seen differently to walls — marks and unevenness are more noticeable from below. Tell us what's happening and whether it's linked to anything above the ceiling.",
    whatsappMessage:
      "Hello Dammam Home Solutions, I need ceiling painting or repair work. Here's what I'm seeing: ",
    layer: "none",
  },
  {
    id: "full-room",
    label: "Full Room",
    prompt: "The room needs preparation and repainting.",
    panel:
      "For a full room, it helps to know the general condition of the walls — mostly fine and due a refresh, or with a few problem areas that need addressing first.",
    whatsappMessage:
      "Hello Dammam Home Solutions, I'd like a full room prepared and repainted. Here's some context: ",
    layer: "all",
  },
  {
    id: "not-sure",
    label: "Not Sure",
    prompt: "The surface doesn't fit one category.",
    panel:
      "That's fine — a photo usually explains more than a category ever could. Send what you're seeing and we'll take it from there.",
    whatsappMessage:
      "Hello Dammam Home Solutions, I have a wall or surface problem but I'm not sure how to describe it. Here's what I've noticed: ",
    layer: "none",
  },
];
