export interface RepairCategory {
  id: string;
  label: string;
  notice: string[];
  serviceArea: { label: string; href: string }[];
  helps: string;
}

export const repairCategories: RepairCategory[] = [
  {
    id: "water",
    label: "Water",
    notice: ["Leaking tap", "Blocked drain", "Damp patch", "Low water pressure"],
    serviceArea: [
      { label: "Plumbing & water leak repair", href: "/plumbing-repair/" },
      { label: "Waterproofing", href: "/waterproofing/" },
    ],
    helps: "A photo of the wet area and the surrounding surface.",
  },
  {
    id: "power",
    label: "Power",
    notice: ["Light not working", "Socket issue", "Breaker tripping"],
    serviceArea: [{ label: "Electrical repair & maintenance", href: "/electrical-repair/" }],
    helps: "A photo of the fixture or switch, and which room it's in.",
  },
  {
    id: "surfaces",
    label: "Surfaces",
    notice: ["Cracked wall", "Peeling paint", "Damaged tile"],
    serviceArea: [
      { label: "Painting & wall repair", href: "/painting-wall-repair/" },
      { label: "Bathroom & kitchen repair", href: "/bathroom-kitchen-repair/" },
    ],
    helps: "A photo of the affected surface.",
  },
  {
    id: "doors",
    label: "Doors & Hardware",
    notice: ["Door doesn't close properly", "Handle feels loose", "Cabinet door is misaligned", "Lock or handle needs attention"],
    serviceArea: [{ label: "Carpentry, doors & locks", href: "/carpentry-doors-locks/" }],
    helps: "A photo of the door, handle, frame, or affected area.",
  },
  {
    id: "rooms",
    label: "Rooms & Fixtures",
    notice: ["Bathroom or kitchen fixture problem", "Drainage", "Cabinet issue"],
    serviceArea: [{ label: "Bathroom & kitchen repair", href: "/bathroom-kitchen-repair/" }],
    helps: "A photo of the room and the specific fixture.",
  },
  {
    id: "general",
    label: "General Repairs",
    notice: ["A few small jobs at once", "Not sure what it's called", "Minor household fixes"],
    serviceArea: [{ label: "General home repairs", href: "/general-home-repairs/" }],
    helps: "A short list of what needs attention.",
  },
];
