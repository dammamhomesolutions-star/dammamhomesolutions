"use client";

import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";

// One dampness report shared by the sign selector, moisture map, room map,
// surface selector, history tracker and the request form.

export interface Report {
  signs: string[];
  locations: string[];
  source: string | null;
  material: string | null;
  duration: string | null;
  history: string | null;
  property: string | null;
  photos: number;
}

interface Ctx extends Report {
  toggle: (field: "signs" | "locations", v: string) => void;
  add: (field: "signs" | "locations", v: string) => void;
  set: (field: "source" | "material" | "duration" | "history" | "property", v: string | null) => void;
  changePhotos: (d: number) => void;
}

const ReportCtx = createContext<Ctx | null>(null);

export function MdReportProvider({ children }: { children: ReactNode }) {
  const [r, setR] = useState<Report>({ signs: [], locations: [], source: null, material: null, duration: null, history: null, property: null, photos: 0 });

  const toggle = useCallback((field: "signs" | "locations", v: string) => setR((p) => ({ ...p, [field]: p[field].includes(v) ? p[field].filter((x) => x !== v) : [...p[field], v] })), []);
  const add = useCallback((field: "signs" | "locations", v: string) => setR((p) => (p[field].includes(v) ? p : { ...p, [field]: [...p[field], v] })), []);
  const set = useCallback((field: "source" | "material" | "duration" | "history" | "property", v: string | null) => setR((p) => ({ ...p, [field]: v })), []);
  const changePhotos = useCallback((d: number) => setR((p) => ({ ...p, photos: Math.max(0, Math.min(30, p.photos + d)) })), []);

  const value = useMemo<Ctx>(() => ({ ...r, toggle, add, set, changePhotos }), [r, toggle, add, set, changePhotos]);
  return <ReportCtx.Provider value={value}>{children}</ReportCtx.Provider>;
}

export function useReport() {
  const c = useContext(ReportCtx);
  if (!c) throw new Error("useReport must be used inside MdReportProvider");
  return c;
}
