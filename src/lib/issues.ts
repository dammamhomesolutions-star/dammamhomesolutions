export type IssueId =
  | "cooling"
  | "water"
  | "electricity"
  | "walls"
  | "bathrooms"
  | "carpentry"
  | "other";

export interface IssueCategory {
  id: IssueId;
  label: string;
  short: string;
  examples: string[];
  whatsappMessage: string;
  href: string;
}

export const issueCategories: IssueCategory[] = [
  {
    id: "cooling",
    label: "Cooling",
    short: "AC not cooling, unusual noise, water dripping, weak airflow.",
    examples: [
      "AC running but not cooling the room",
      "Water dripping from the indoor unit",
      "Weak or reduced airflow",
      "Unusual noise when the unit is running",
      "Routine AC maintenance",
    ],
    whatsappMessage:
      "Hello Dammam Home Solutions, I have an AC / cooling issue. Here's what's happening: ",
    href: "/ac-repair/",
  },
  {
    id: "water",
    label: "Water",
    short: "Leak, low pressure, blocked drain, damaged pipe.",
    examples: [
      "Leak under the sink or near a fixture",
      "Low water pressure",
      "Blocked or slow drain",
      "Water appearing on a wall or ceiling",
      "Damaged or corroded pipe",
    ],
    whatsappMessage:
      "Hello Dammam Home Solutions, I have a water / plumbing issue. Here's what's happening: ",
    href: "/plumbing-repair/",
  },
  {
    id: "electricity",
    label: "Electricity",
    short: "Power issue, socket problem, lighting fault, breaker issue.",
    examples: [
      "Socket not working or sparking",
      "Lighting fault or flickering",
      "Breaker tripping repeatedly",
      "Partial power loss in a room",
      "General electrical inspection",
    ],
    whatsappMessage:
      "Hello Dammam Home Solutions, I have an electrical issue. Here's what's happening: ",
    href: "/electrical-repair/",
  },
  {
    id: "walls",
    label: "Walls & Paint",
    short: "Cracks, peeling paint, damp marks, damaged walls.",
    examples: [
      "Cracks appearing on a wall or ceiling",
      "Peeling or bubbling paint",
      "Damp marks or discoloration",
      "Wall damage that needs repair before repainting",
    ],
    whatsappMessage:
      "Hello Dammam Home Solutions, I have a wall / paint issue. Here's what's happening: ",
    href: "/painting-wall-repair/",
  },
  {
    id: "bathrooms",
    label: "Bathrooms",
    short: "Leakage, tiles, fixtures, drainage, water problems.",
    examples: [
      "Leakage around the shower or bathtub",
      "Loose or damaged tiles",
      "Fixture that needs repair or replacement",
      "Slow or blocked drainage",
    ],
    whatsappMessage:
      "Hello Dammam Home Solutions, I have a bathroom issue. Here's what's happening: ",
    href: "/bathroom-kitchen-repair/",
  },
  {
    id: "carpentry",
    label: "Doors & Carpentry",
    short: "Door alignment, lock, hinges, cabinets, wood repairs.",
    examples: [
      "Door not closing or aligning properly",
      "Lock or hinge that needs repair",
      "Cabinet or cupboard repair",
      "General wood / carpentry repair",
    ],
    whatsappMessage:
      "Hello Dammam Home Solutions, I have a door / carpentry issue. Here's what's happening: ",
    href: "/carpentry-doors-locks/",
  },
  {
    id: "other",
    label: "Something Else",
    short: "General repair or maintenance issue.",
    examples: [
      "A repair that doesn't fit one category",
      "Multiple issues in the same property",
      "General property maintenance",
      "Not sure which trade this needs",
    ],
    whatsappMessage:
      "Hello Dammam Home Solutions, I have a property issue I'd like to discuss: ",
    href: "/property-maintenance/",
  },
];
