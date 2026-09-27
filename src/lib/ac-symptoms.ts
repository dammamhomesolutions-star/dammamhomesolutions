export type SymptomId =
  | "not-cooling"
  | "weak-airflow"
  | "water-leaking"
  | "noise"
  | "keeps-stopping"
  | "bad-smell"
  | "needs-maintenance"
  | "not-sure";

export interface AcSymptom {
  id: SymptomId;
  label: string;
  prompt: string;
  panel: string;
  whatsappMessage: string;
}

export const acSymptoms: AcSymptom[] = [
  {
    id: "not-cooling",
    label: "Not Cooling",
    prompt: "Air is coming out, but the room stays warm.",
    panel:
      "This can be related to the refrigerant level, a blocked filter, a thermostat setting, or the unit struggling with the room's cooling load. Which one it is depends on the unit, so it needs a closer look rather than a guess.",
    whatsappMessage:
      "Hello Dammam Home Solutions, my AC is running but not cooling the room. Here's what I'm noticing: ",
  },
  {
    id: "weak-airflow",
    label: "Weak Airflow",
    prompt: "The AC runs, but barely any air comes out.",
    panel:
      "Weak airflow is often related to a blocked filter, a fan issue, or something restricting air movement inside the indoor unit. It can also point to a system condition that needs checking.",
    whatsappMessage:
      "Hello Dammam Home Solutions, my AC has weak airflow. Here's what I'm noticing: ",
  },
  {
    id: "water-leaking",
    label: "Water Leaking",
    prompt: "Water is dripping from the indoor unit or appearing nearby.",
    panel:
      "Possible areas to inspect may include drainage, condensation handling or other AC-related issues. The exact cause depends on the unit and its condition, so we'd want to see it rather than assume.",
    whatsappMessage:
      "Hello Dammam Home Solutions, water is leaking from my AC. Here's what I'm noticing: ",
  },
  {
    id: "noise",
    label: "Making Noise",
    prompt: "Buzzing, rattling, clicking or unusual sounds.",
    panel:
      "Noise can come from a loose panel, something obstructing the fan, a mounting issue, or a component inside the unit. The type of sound usually narrows it down, but confirming it needs an inspection.",
    whatsappMessage:
      "Hello Dammam Home Solutions, my AC is making an unusual noise. Here's what I'm noticing: ",
  },
  {
    id: "keeps-stopping",
    label: "Keeps Stopping",
    prompt: "The AC starts and stops unexpectedly.",
    panel:
      "This can relate to the thermostat, the electrical supply to the unit, or the AC protecting itself from a fault. If it's happening across more than one appliance, it may be worth checking the property's electrical supply too.",
    whatsappMessage:
      "Hello Dammam Home Solutions, my AC keeps starting and stopping. Here's what I'm noticing: ",
  },
  {
    id: "bad-smell",
    label: "Bad Smell",
    prompt: "There is an unusual smell when the AC runs.",
    panel:
      "An unusual smell is often related to moisture or dust that has built up in the unit over time, though it can have other causes. It's worth mentioning when the smell happens and what it's like.",
    whatsappMessage:
      "Hello Dammam Home Solutions, there's an unusual smell from my AC. Here's what I'm noticing: ",
  },
  {
    id: "needs-maintenance",
    label: "Needs Maintenance",
    prompt: "Cooling is working, but the unit needs cleaning or servicing.",
    panel:
      "If cooling is still working fine, this is routine maintenance rather than a repair — cleaning, filters and a general condition check, usually before the unit is put under heavier use.",
    whatsappMessage:
      "Hello Dammam Home Solutions, I'd like to arrange AC maintenance. Here's some context: ",
  },
  {
    id: "not-sure",
    label: "Not Sure",
    prompt: "Something is wrong, but I can't identify it.",
    panel:
      "That's fine — describe what you've noticed in your own words, and send a photo or short video if you have one. We'll use that to work out what kind of visit makes sense.",
    whatsappMessage:
      "Hello Dammam Home Solutions, something seems off with my AC but I'm not sure what. Here's what I've noticed: ",
  },
];
