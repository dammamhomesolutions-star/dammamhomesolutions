"use client";

import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";
import { rnRooms, rnScales, type RnRoomKey } from "@/lib/renovation";

// One renovation plan shared by the floor plan, scale selector, vision board,
// scope builder, material board, summary card and request form.

interface Plan {
  rooms: RnRoomKey[];
  goal: string | null;
  scale: string | null;
  look: string | null;
  depth: string | null;
  priorities: string[];
  work: string[];
  materials: Record<string, string>;
  photos: number;
}

interface Ctx extends Plan {
  toggleRoom: (k: RnRoomKey) => void;
  addRoom: (k: RnRoomKey) => void;
  hasRoom: (k: RnRoomKey) => boolean;
  setGoal: (k: string | null) => void;
  setScale: (k: string | null) => void;
  setLook: (k: string | null) => void;
  setDepth: (k: string | null) => void;
  togglePriority: (k: string) => void;
  toggleWork: (k: string) => void;
  setMaterial: (slot: string, name: string) => void;
  changePhotos: (delta: number) => void;
  roomLabels: string[];
  scaleLabel: string | null;
}

const PlanCtx = createContext<Ctx | null>(null);

const toggleIn = <T,>(list: T[], v: T) => (list.includes(v) ? list.filter((x) => x !== v) : [...list, v]);

export function RnPlanProvider({ children }: { children: ReactNode }) {
  const [plan, setPlan] = useState<Plan>({ rooms: [], goal: null, scale: null, look: null, depth: null, priorities: [], work: [], materials: {}, photos: 0 });

  const toggleRoom = useCallback((k: RnRoomKey) => setPlan((p) => ({ ...p, rooms: toggleIn(p.rooms, k) })), []);
  const addRoom = useCallback((k: RnRoomKey) => setPlan((p) => (p.rooms.includes(k) ? p : { ...p, rooms: [...p.rooms, k] })), []);
  const setGoal = useCallback((goal: string | null) => setPlan((p) => ({ ...p, goal })), []);
  const setScale = useCallback((scale: string | null) => setPlan((p) => ({ ...p, scale })), []);
  const setLook = useCallback((look: string | null) => setPlan((p) => ({ ...p, look })), []);
  const setDepth = useCallback((depth: string | null) => setPlan((p) => ({ ...p, depth })), []);
  const togglePriority = useCallback((k: string) => setPlan((p) => ({ ...p, priorities: toggleIn(p.priorities, k) })), []);
  const toggleWork = useCallback((k: string) => setPlan((p) => ({ ...p, work: toggleIn(p.work, k) })), []);
  const setMaterial = useCallback((slot: string, name: string) => setPlan((p) => ({ ...p, materials: { ...p.materials, [slot]: name } })), []);
  const changePhotos = useCallback((delta: number) => setPlan((p) => ({ ...p, photos: Math.max(0, Math.min(40, p.photos + delta)) })), []);

  const value = useMemo<Ctx>(() => {
    const s = rnScales.find((x) => x.key === plan.scale);
    return {
      ...plan,
      toggleRoom,
      addRoom,
      hasRoom: (k) => plan.rooms.includes(k),
      setGoal,
      setScale,
      setLook,
      setDepth,
      togglePriority,
      toggleWork,
      setMaterial,
      changePhotos,
      roomLabels: plan.rooms.map((k) => rnRooms.find((r) => r.key === k)?.label ?? k),
      scaleLabel: s ? `${s.tag} ${s.label.toLowerCase()}` : null,
    };
  }, [plan, toggleRoom, addRoom, setGoal, setScale, setLook, setDepth, togglePriority, toggleWork, setMaterial, changePhotos]);

  return <PlanCtx.Provider value={value}>{children}</PlanCtx.Provider>;
}

export function usePlan() {
  const c = useContext(PlanCtx);
  if (!c) throw new Error("usePlan must be used inside RnPlanProvider");
  return c;
}
