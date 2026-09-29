// Shared data for the /gate-garage-door-repair/ page.

export type GdMovementId = "normal" | "sticking" | "misaligned" | "noisy" | "damaged";

export interface GdMovementState {
  id: GdMovementId;
  label: string;
  note: string;
}

export const gdMovementStates: GdMovementState[] = [
  { id: "normal", label: "Normal", note: "Smooth, continuous travel from open to closed." },
  { id: "sticking", label: "Sticking", note: "Movement pauses partway through travel — possible area to inspect: track or rollers." },
  { id: "misaligned", label: "Misaligned", note: "One side moves slightly differently from the other — possible area to inspect: alignment or track." },
  { id: "noisy", label: "Noisy / rough movement", note: "Vibration appears around moving components — possible area to inspect: rollers or hardware." },
  { id: "damaged", label: "Damaged panel", note: "A panel's shape or appearance has changed — possible area to inspect: the panel itself." },
];

export interface GdMechanismPart {
  id: string;
  label: string;
  description: string;
}

export const gdMechanismParts: GdMechanismPart[] = [
  { id: "rollers", label: "Rollers", description: "Movement can become uneven when rollers or their surrounding hardware need attention." },
  { id: "tracks", label: "Tracks", description: "Alignment and condition of the track can affect how the door travels." },
  { id: "hinges", label: "Hinges", description: "Hinges connect moving sections and may require inspection when movement changes." },
  { id: "panels", label: "Panels", description: "Bent or damaged panels can affect appearance and movement." },
  { id: "springs", label: "Springs", description: "These mechanical components help balance the door's weight during movement." },
  { id: "frame", label: "Frame", description: "The surrounding frame provides the reference for alignment." },
  { id: "handle", label: "Handle", description: "Used to operate the door or gate by hand." },
  { id: "hardware", label: "Locking hardware", description: "Latches and locks secure the door or gate when closed." },
];

export interface GdMovementPoint {
  id: string;
  label: string;
  notes: string[];
}

export const gdMovementPoints: GdMovementPoint[] = [
  { id: "start", label: "Start", notes: ["Movement begins.", "Initial resistance may be noticeable here."] },
  { id: "midpoint", label: "Midpoint", notes: ["Movement becomes uneven.", "Resistance can appear during travel."] },
  { id: "near-close", label: "Near close", notes: ["Panel alignment may look different.", "Hardware may need inspection."] },
  { id: "fully-closed", label: "Fully closed", notes: ["Closing position may have changed.", "Gaps along the frame can become visible."] },
];

export interface GdLayer {
  id: string;
  label: string;
  description: string;
}

export const gdLayers: GdLayer[] = [
  { id: "frame", label: "Frame", description: "The surrounding structure the door travels within." },
  { id: "track", label: "Track", description: "The channel that guides the door's movement." },
  { id: "roller", label: "Roller", description: "Rolls along the track as the door moves." },
  { id: "panel", label: "Panel", description: "The visible section that makes up the door." },
  { id: "hinge", label: "Hinge", description: "Connects adjoining panels so they can move together." },
  { id: "hardware", label: "Handle / hardware", description: "Used to operate and secure the door." },
];

export type GdConditionId =
  | "sticking"
  | "uneven"
  | "damaged-panel"
  | "roller"
  | "track"
  | "hinge"
  | "hardware"
  | "wont-close"
  | "gate-alignment"
  | "not-sure";

export interface GdCondition {
  id: GdConditionId;
  label: string;
  note: string;
}

export const gdConditions: GdCondition[] = [
  { id: "sticking", label: "Door sticking", note: "Movement starts smoothly, then slows at one point — worth a closer look at the track or rollers." },
  { id: "uneven", label: "Uneven movement", note: "One side may be moving differently from the other." },
  { id: "damaged-panel", label: "Damaged panel", note: "A panel's shape or finish has visibly changed." },
  { id: "roller", label: "Roller issue", note: "Rollers or their hardware may be affecting how smoothly the door travels." },
  { id: "track", label: "Track concern", note: "The track's alignment or condition can affect the door's path." },
  { id: "hinge", label: "Hinge concern", note: "A hinge connecting panels may need inspection." },
  { id: "hardware", label: "Handle / hardware issue", note: "A handle, latch or lock may be loose or not functioning as expected." },
  { id: "wont-close", label: "Door won't close properly", note: "The door may be stopping before reaching its final position." },
  { id: "gate-alignment", label: "Gate alignment concern", note: "A gate's swing or resting position may have shifted." },
  { id: "not-sure", label: "Not sure", note: "That's fine — send us a photo or short video and we'll help point it in the right direction." },
];

export type GdSymptomId = "sticks" | "sags" | "shakes" | "scrapes" | "wont-close" | "damaged" | "not-sure";

export interface GdSymptom {
  id: GdSymptomId;
  label: string;
  description: string;
}

export const gdSymptoms: GdSymptom[] = [
  { id: "sticks", label: "Sticks", description: "The door pauses during travel instead of moving continuously." },
  { id: "sags", label: "Sags", description: "One side appears to sit lower than the other." },
  { id: "shakes", label: "Shakes", description: "A subtle vibration or movement appears during operation." },
  { id: "scrapes", label: "Scrapes", description: "Visible contact along the track or frame during movement." },
  { id: "wont-close", label: "Won't close", description: "The door stops short of its final closed position." },
  { id: "damaged", label: "Damaged", description: "A panel or component looks visibly different than before." },
  { id: "not-sure", label: "Not sure", description: "Send a photo or short video and we'll help point it in the right direction." },
];

export const gdRepairStages = [
  { id: "observe", label: "Observe", description: "The affected area is identified." },
  { id: "inspect", label: "Inspect", description: "The relevant mechanical components are looked at more closely." },
  { id: "repair", label: "Repair", description: "The affected component is addressed." },
  { id: "test", label: "Test", description: "The door or gate is moved through a full cycle." },
  { id: "restore", label: "Restore", description: "The system is returned to everyday use." },
];

export interface GdPropertyArea {
  id: string;
  label: string;
}

export const gdPropertyAreas: GdPropertyArea[] = [
  { id: "garage", label: "Garage" },
  { id: "gate", label: "Gate" },
  { id: "entry", label: "Entry" },
];

export interface GdPropertyPart {
  id: string;
  label: string;
  description: string;
}

export const gdPropertyParts: GdPropertyPart[] = [
  { id: "garage", label: "Garage", description: "Sectional door, track and rollers serving the garage opening." },
  { id: "gate", label: "Gate", description: "A swinging pedestrian or driveway gate and its hinge points." },
  { id: "door", label: "Door", description: "Panels and hardware that make up the moving surface." },
  { id: "hardware", label: "Lock / hardware", description: "Handles, latches and locking components." },
];

export interface GdFaqEntry {
  q: string;
  a: string;
}

export const gdFaqs: GdFaqEntry[] = [
  {
    q: "Do you repair garage doors that stick or move unevenly?",
    a: "Yes. A door that sticks, pauses, or moves unevenly is one of the most common issues we assess.",
  },
  {
    q: "Can you repair a garage door that won't close properly?",
    a: "Yes — this can involve the track, rollers, alignment or hardware, and is worth having assessed in person.",
  },
  {
    q: "Do you repair driveway or pedestrian gates?",
    a: "Yes. Gate alignment, hinge and hardware concerns are part of this service.",
  },
  {
    q: "Can you repair a damaged garage door panel?",
    a: "In many cases, yes — the approach depends on the extent of the damage and the condition of the surrounding panels.",
  },
  {
    q: "What if I'm not sure whether it's the track, rollers or hinges causing the problem?",
    a: "That's common. Send a few photos or a short video and describe what you're noticing, and we'll help narrow it down.",
  },
  {
    q: "Can I send photos or a video before requesting a repair?",
    a: "Yes — a wider view of the door or gate plus a closer look at what's changed helps us prepare before a visit.",
  },
  {
    q: "Do you repair noisy or rough-moving garage doors?",
    a: "Yes. Vibration or rough movement during operation is a common reason for a closer inspection.",
  },
  {
    q: "Can you help with hinge, roller or handle issues specifically?",
    a: "Yes — these are individual components that can often be addressed without replacing the whole system.",
  },
  {
    q: "Do you provide lock-opening or bypass services for gates or garage doors?",
    a: "No. We don't provide lock-bypass or forced-entry services. If you're locked out, please contact a locksmith for that specific need — we're glad to help with the repair afterward.",
  },
  {
    q: "What information should I include with a repair request?",
    a: "What you've noticed, when it started, and a few clear photos or a short video if you can.",
  },
];

export interface GdConnectionEntry {
  label: string;
  href: string;
}

export const gdInternalLinks: GdConnectionEntry[] = [
  { label: "Carpentry, Doors & Locks", href: "/carpentry-doors-locks/" },
  { label: "Window, Door & Glass Repair", href: "/window-door-glass-repair/" },
  { label: "Electrical Repair", href: "/electrical-repair/" },
  { label: "General Home Repairs", href: "/general-home-repairs/" },
  { label: "Property Maintenance", href: "/property-maintenance/" },
];
