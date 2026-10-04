"use client";

import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";
import type { ShTypeKey } from "@/lib/shade-pergola";

// One shade assessment request shared by the inspector, problem selector,
// shade builder, condition panel, scope estimator and the photo form.

export type Cond = "Good" | "Attention" | "Unknown";
export const condParts = ["Cover", "Frame", "Base", "Drainage"] as const;
export type CondPart = (typeof condParts)[number];

interface Plan {
  type: ShTypeKey | null;
  vehicles: "1" | "2" | "3+" | null;
  issues: string[];
  mainIssue: string | null;
  severity: string | null;
  cond: Record<CondPart, Cond | null>;
  property: string | null;
  photos: number;
}

interface Ctx extends Plan {
  setType: (t: ShTypeKey) => void;
  setVehicles: (v: "1" | "2" | "3+") => void;
  toggleIssue: (i: string) => void;
  addIssue: (i: string) => void;
  setMainIssue: (i: string) => void;
  setSeverity: (s: string) => void;
  setCond: (p: CondPart, c: Cond) => void;
  setProperty: (p: string) => void;
  changePhotos: (d: number) => void;
}

const PlanCtx = createContext<Ctx | null>(null);

export function ShPlanProvider({ children }: { children: ReactNode }) {
  const [p, setP] = useState<Plan>({ type: null, vehicles: null, issues: [], mainIssue: null, severity: null, cond: { Cover: null, Frame: null, Base: null, Drainage: null }, property: null, photos: 0 });

  const setType = useCallback((type: ShTypeKey) => setP((x) => ({ ...x, type })), []);
  const setVehicles = useCallback((vehicles: "1" | "2" | "3+") => setP((x) => ({ ...x, vehicles })), []);
  const toggleIssue = useCallback((i: string) => setP((x) => ({ ...x, issues: x.issues.includes(i) ? x.issues.filter((y) => y !== i) : [...x.issues, i] })), []);
  const addIssue = useCallback((i: string) => setP((x) => (x.issues.includes(i) ? x : { ...x, issues: [...x.issues, i] })), []);
  const setMainIssue = useCallback((mainIssue: string) => setP((x) => ({ ...x, mainIssue })), []);
  const setSeverity = useCallback((severity: string) => setP((x) => ({ ...x, severity })), []);
  const setCond = useCallback((part: CondPart, c: Cond) => setP((x) => ({ ...x, cond: { ...x.cond, [part]: c } })), []);
  const setProperty = useCallback((property: string) => setP((x) => ({ ...x, property })), []);
  const changePhotos = useCallback((d: number) => setP((x) => ({ ...x, photos: Math.max(0, Math.min(30, x.photos + d)) })), []);

  const value = useMemo<Ctx>(
    () => ({ ...p, setType, setVehicles, toggleIssue, addIssue, setMainIssue, setSeverity, setCond, setProperty, changePhotos }),
    [p, setType, setVehicles, toggleIssue, addIssue, setMainIssue, setSeverity, setCond, setProperty, changePhotos],
  );
  return <PlanCtx.Provider value={value}>{children}</PlanCtx.Provider>;
}

export function useShade() {
  const c = useContext(PlanCtx);
  if (!c) throw new Error("useShade must be used inside ShPlanProvider");
  return c;
}
