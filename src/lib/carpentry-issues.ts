export type CarpentryIssueId =
  | "door-wont-close"
  | "lock-problem"
  | "handle-problem"
  | "hinge-problem"
  | "cabinet-door"
  | "drawer"
  | "wood-damage"
  | "something-else";

export type AlignmentPoint = "door" | "hinge" | "frame" | "latch" | "none";

export interface CarpentryIssue {
  id: CarpentryIssueId;
  label: string;
  prompt: string;
  panel: string;
  whatsappMessage: string;
  highlight: AlignmentPoint;
}

export const carpentryIssues: CarpentryIssue[] = [
  {
    id: "door-wont-close",
    label: "Door Won't Close",
    prompt: "Door catches, rubs or doesn't align properly.",
    panel:
      "Tell us whether it catches at the top, bottom or side of the frame. A photo of the door and frame can also help explain the problem — though it won't identify the exact fault on its own.",
    whatsappMessage:
      "Hello Dammam Home Solutions, a door isn't closing properly. Here's what I'm noticing: ",
    highlight: "frame",
  },
  {
    id: "lock-problem",
    label: "Lock Problem",
    prompt: "Lock doesn't operate normally or needs repair/replacement.",
    panel:
      "Tell us what the lock is doing — stiff, not turning, not catching, or something else — and whether it happens from both sides of the door.",
    whatsappMessage:
      "Hello Dammam Home Solutions, I have a problem with a lock. Here's what I'm noticing: ",
    highlight: "latch",
  },
  {
    id: "handle-problem",
    label: "Handle Problem",
    prompt: "Loose, damaged or poorly functioning handle.",
    panel:
      "Loose or damaged handles are usually a straightforward fix. Let us know if it's loose, disconnected, or just feels different to use.",
    whatsappMessage:
      "Hello Dammam Home Solutions, I have a problem with a door handle. Here's what I'm noticing: ",
    highlight: "door",
  },
  {
    id: "hinge-problem",
    label: "Hinge Problem",
    prompt: "Noise, looseness or door alignment issue.",
    panel:
      "Squeaking, looseness or a door that's started to sag often traces back to the hinges. Tell us which hinge and what you're noticing.",
    whatsappMessage:
      "Hello Dammam Home Solutions, I have a problem with a door hinge. Here's what I'm noticing: ",
    highlight: "hinge",
  },
  {
    id: "cabinet-door",
    label: "Cabinet Door",
    prompt: "Door is misaligned, loose or won't close properly.",
    panel:
      "Cabinet doors usually go out of alignment gradually. Tell us which cabinet, and whether it's the door, the hinge, or the catch that seems off.",
    whatsappMessage:
      "Hello Dammam Home Solutions, I have a cabinet door problem. Here's what I'm noticing: ",
    highlight: "none",
  },
  {
    id: "drawer",
    label: "Drawer",
    prompt: "Drawer sticks, doesn't align or won't close.",
    panel:
      "Sticking drawers are often a runner or alignment issue rather than the drawer itself. Tell us which drawer and what happens when you open or close it.",
    whatsappMessage:
      "Hello Dammam Home Solutions, I have a drawer that's sticking or misaligned. Here's what I'm noticing: ",
    highlight: "none",
  },
  {
    id: "wood-damage",
    label: "Wood Damage",
    prompt: "Minor damage to a supported wooden surface.",
    panel:
      "Tell us where the damage is and roughly how it happened, if you know. A photo helps show the extent of it.",
    whatsappMessage:
      "Hello Dammam Home Solutions, I have wood damage on a door or surface. Here's what I'm noticing: ",
    highlight: "none",
  },
  {
    id: "something-else",
    label: "Something Else",
    prompt: "Another carpentry or door-related issue.",
    panel:
      "That's fine — describe what you're seeing in your own words, and send a photo if you have one.",
    whatsappMessage:
      "Hello Dammam Home Solutions, I have a carpentry or door-related issue. Here's what I'm noticing: ",
    highlight: "none",
  },
];
