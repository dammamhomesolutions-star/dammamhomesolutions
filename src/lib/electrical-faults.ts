export type FaultId =
  | "lights"
  | "switches"
  | "sockets"
  | "area-power"
  | "breaker"
  | "intermittent"
  | "new-fixture"
  | "not-sure";

export interface ElectricalFault {
  id: FaultId;
  label: string;
  prompt: string;
  panel: string;
  whatsappMessage: string;
}

export const electricalFaults: ElectricalFault[] = [
  {
    id: "lights",
    label: "Lights",
    prompt: "A room light stopped working, flickers or behaves differently.",
    panel:
      "This can involve the bulb, the fixture, the switch or the supply to that point. Which one it is usually becomes clear once it's looked at, so tell us what you're noticing and where.",
    whatsappMessage:
      "Hello Dammam Home Solutions, a light has stopped working or is behaving oddly. Here's what I'm noticing: ",
  },
  {
    id: "switches",
    label: "Switches",
    prompt: "A switch feels loose, doesn't operate normally or isn't controlling the light.",
    panel:
      "A switch that feels different or doesn't control the light the way it should is worth mentioning specifically — it can point to the switch itself or something behind it.",
    whatsappMessage:
      "Hello Dammam Home Solutions, I have a problem with a switch. Here's what I'm noticing: ",
  },
  {
    id: "sockets",
    label: "Sockets",
    prompt: "A socket isn't working or appears damaged.",
    panel:
      "A socket with no power, or one that looks damaged, is worth checking rather than working around with an extension lead. Tell us which room it's in and what you've noticed.",
    whatsappMessage:
      "Hello Dammam Home Solutions, I have a problem with a socket. Here's what I'm noticing: ",
  },
  {
    id: "area-power",
    label: "Power in One Area",
    prompt: "Part of the home has lost power.",
    panel:
      "When one area loses power while the rest of the property is fine, it usually points to that area's circuit specifically. Tell us which rooms are affected and which aren't.",
    whatsappMessage:
      "Hello Dammam Home Solutions, part of my property has lost power. Here's what I'm noticing: ",
  },
  {
    id: "breaker",
    label: "Breaker Keeps Tripping",
    prompt: "A breaker repeatedly switches off.",
    panel:
      "Repeated tripping can have different causes. Avoid repeatedly resetting a breaker if the problem continues, and let us know what was running when it last tripped, if you noticed.",
    whatsappMessage:
      "Hello Dammam Home Solutions, a breaker keeps tripping. Here's what I've noticed: ",
  },
  {
    id: "intermittent",
    label: "Intermittent Problem",
    prompt: "Something works sometimes and stops at other times.",
    panel:
      "Intermittent faults are harder to describe but still useful to report — note when it tends to happen (time of day, weather, an appliance being used) even if it seems unrelated.",
    whatsappMessage:
      "Hello Dammam Home Solutions, I have an intermittent electrical problem. Here's what I've noticed: ",
  },
  {
    id: "new-fixture",
    label: "New Electrical Fixture",
    prompt: "A new light, switch or fixture needs installation.",
    panel:
      "For a new fixture, it helps to know the room, roughly where it should go, and whether it's replacing an existing point or a new one.",
    whatsappMessage:
      "Hello Dammam Home Solutions, I'd like a new electrical fixture installed. Here's what I have in mind: ",
  },
  {
    id: "not-sure",
    label: "Not Sure",
    prompt: "Something electrical isn't behaving normally.",
    panel:
      "That's fine — describe what you've noticed in your own words, including where and when. We'll use that to work out what needs a closer look.",
    whatsappMessage:
      "Hello Dammam Home Solutions, something electrical isn't behaving normally but I'm not sure what. Here's what I've noticed: ",
  },
];
