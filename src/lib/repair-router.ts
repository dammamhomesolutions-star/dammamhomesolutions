export interface RouterLink {
  label: string;
  href: string;
}

export interface WhatsWrongOption {
  id: string;
  label: string;
  secondStepQuestion?: string;
  secondStepOptions?: string[];
  guidance: string;
  links: RouterLink[];
}

export const whatsWrongOptions: WhatsWrongOption[] = [
  {
    id: "leaking",
    label: "Something is leaking",
    secondStepQuestion: "Where are you seeing it?",
    secondStepOptions: ["Bathroom", "Kitchen", "Ceiling", "Wall", "Floor", "Outside", "Utility area", "Not sure"],
    guidance:
      "This could involve plumbing, waterproofing, or another property issue depending on where it's coming from. Send us a photo and describe when you notice it.",
    links: [
      { label: "Plumbing & water leak repair", href: "/plumbing-repair/" },
      { label: "Waterproofing", href: "/waterproofing/" },
    ],
  },
  {
    id: "not-working",
    label: "Something is not working",
    secondStepQuestion: "What kind of thing is it?",
    secondStepOptions: ["Lights / switches", "AC / cooling", "Water fixture", "Door / lock", "Kitchen or bathroom fixture", "Something else"],
    guidance:
      "This can point to electrical, AC, plumbing or hardware depending on what's affected. Tell us what stopped working and where.",
    links: [
      { label: "Electrical repair & maintenance", href: "/electrical-repair/" },
      { label: "AC repair & maintenance", href: "/ac-repair/" },
      { label: "Plumbing & water leak repair", href: "/plumbing-repair/" },
    ],
  },
  {
    id: "loose",
    label: "Something is loose",
    secondStepQuestion: "What's loose?",
    secondStepOptions: ["Door handle", "Cabinet or drawer", "Hinge", "Fixture", "Railing or fitting", "Not sure"],
    guidance:
      "Loose hardware is usually a carpentry or general repair matter. Tell us which item and where it is.",
    links: [{ label: "Carpentry, doors & locks", href: "/carpentry-doors-locks/" }],
  },
  {
    id: "wont-open-close",
    label: "Something won't open or close",
    secondStepQuestion: "What is it?",
    secondStepOptions: ["Door", "Cabinet", "Drawer", "Window", "Not sure"],
    guidance:
      "This is usually about alignment or hardware rather than the item itself. Tell us which one and what it's doing.",
    links: [{ label: "Carpentry, doors & locks", href: "/carpentry-doors-locks/" }],
  },
  {
    id: "damaged",
    label: "Something is damaged",
    secondStepQuestion: "Where is the damage?",
    secondStepOptions: ["Wall", "Tile", "Floor", "Cabinet", "Fixture", "Not sure"],
    guidance:
      "The right repair depends on the surface and what caused it. A photo helps explain the extent of it.",
    links: [
      { label: "Painting & wall repair", href: "/painting-wall-repair/" },
      { label: "Carpentry, doors & locks", href: "/carpentry-doors-locks/" },
      { label: "Bathroom & kitchen repair", href: "/bathroom-kitchen-repair/" },
    ],
  },
  {
    id: "looks-wrong",
    label: "Something looks wrong",
    secondStepQuestion: "What are you noticing?",
    secondStepOptions: ["Wall / paint", "Ceiling", "Tile", "Cabinet alignment", "Not sure"],
    guidance:
      "This can be a surface, moisture or alignment matter depending on what you're seeing. Tell us where and when it started.",
    links: [
      { label: "Painting & wall repair", href: "/painting-wall-repair/" },
      { label: "Waterproofing", href: "/waterproofing/" },
    ],
  },
  {
    id: "needs-replacing",
    label: "Something needs replacing",
    secondStepQuestion: "What kind of item?",
    secondStepOptions: ["Fixture", "Handle or hinge", "Tile", "Small fitting", "Not sure"],
    guidance:
      "Sometimes a repair is enough, sometimes a small component genuinely needs replacing — that's usually clearer once it's been looked at.",
    links: [{ label: "Carpentry, doors & locks", href: "/carpentry-doors-locks/" }],
  },
  {
    id: "several-things",
    label: "Several things need fixing",
    guidance:
      "That's exactly what this page is for. List everything in one message — the room, the item and what's happening with each — and we'll help sort out what's needed.",
    links: [],
  },
  {
    id: "not-sure",
    label: "I'm not sure",
    guidance:
      "That's fine — describe what you're noticing in your own words and send a photo. We'll help point it toward the right kind of repair.",
    links: [],
  },
];
