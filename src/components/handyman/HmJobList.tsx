"use client";

import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";
import { hmTasks } from "@/lib/handyman";

// Shared job list used by every tool on the handyman page: the board, task
// explorer, room map, setup builder, "describe it" flow, summary and form.

export interface HmJob {
  id: string;
  label: string;
  qty: number;
  custom?: boolean;
}

interface Ctx {
  jobs: HmJob[];
  has: (id: string) => boolean;
  add: (id: string, qty?: number) => void;
  addCustom: (label: string) => void;
  remove: (id: string) => void;
  setQty: (id: string, qty: number) => void;
  toggle: (id: string) => void;
  total: number;
}

const JobCtx = createContext<Ctx | null>(null);

const labelFor = (id: string) => {
  const t = hmTasks.find((x) => x.id === id);
  return t ? `${t.verb} ${t.label.toLowerCase()}` : id;
};

export function HmJobProvider({ children }: { children: ReactNode }) {
  const [jobs, setJobs] = useState<HmJob[]>([]);

  const add = useCallback((id: string, qty = 1) => {
    setJobs((j) => (j.some((x) => x.id === id) ? j.map((x) => (x.id === id ? { ...x, qty: Math.max(x.qty, qty) } : x)) : [...j, { id, label: labelFor(id), qty }]));
  }, []);
  const addCustom = useCallback((label: string) => {
    const id = `custom-${Date.now()}`;
    setJobs((j) => [...j, { id, label, qty: 1, custom: true }]);
  }, []);
  const remove = useCallback((id: string) => setJobs((j) => j.filter((x) => x.id !== id)), []);
  const setQty = useCallback((id: string, qty: number) => {
    setJobs((j) => (qty <= 0 ? j.filter((x) => x.id !== id) : j.map((x) => (x.id === id ? { ...x, qty } : x))));
  }, []);
  const toggle = useCallback((id: string) => setJobs((j) => (j.some((x) => x.id === id) ? j.filter((x) => x.id !== id) : [...j, { id, label: labelFor(id), qty: 1 }])), []);

  const value = useMemo<Ctx>(
    () => ({ jobs, has: (id) => jobs.some((x) => x.id === id), add, addCustom, remove, setQty, toggle, total: jobs.reduce((s, x) => s + x.qty, 0) }),
    [jobs, add, addCustom, remove, setQty, toggle],
  );

  return <JobCtx.Provider value={value}>{children}</JobCtx.Provider>;
}

export function useJobs() {
  const c = useContext(JobCtx);
  if (!c) throw new Error("useJobs must be used inside HmJobProvider");
  return c;
}

export function AddButton({ id, className = "" }: { id: string; className?: string }) {
  const { has, toggle } = useJobs();
  const on = has(id);
  const t = hmTasks.find((x) => x.id === id);
  return (
    <button
      type="button"
      onClick={() => toggle(id)}
      aria-pressed={on}
      aria-label={`${on ? "Remove" : "Add"} ${t?.label ?? id} ${on ? "from" : "to"} my job list`}
      className={`focus-ring inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors ${on ? "bg-ember-600 text-sand-50" : "bg-ink-950 text-sand-50 hover:bg-ink-800"} ${className}`}
    >
      {on ? "✓ Added" : <>+ Add<span className="hidden sm:inline"> to my list</span></>}
    </button>
  );
}
