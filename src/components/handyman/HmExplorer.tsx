"use client";

import { useMemo, useState } from "react";
import { hmCats, hmTasks, type HmCat } from "@/lib/handyman";
import HmIcon from "./HmIcon";
import { AddButton } from "./HmJobList";

// Search + category filter + task cards, each with "Add to my list".
export default function HmExplorer() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<HmCat | "all">("all");

  const shown = useMemo(() => {
    const term = q.trim().toLowerCase();
    return hmTasks.filter((t) => (cat === "all" || t.cat === cat) && (!term || `${t.label} ${t.keywords} ${t.verb}`.toLowerCase().includes(term)));
  }, [q, cat]);

  return (
    <section id="tasks" aria-labelledby="hm-tasks" className="scroll-mt-20 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-6">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-ember-700">Task explorer</p>
            <h2 id="hm-tasks" className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-5xl">What do you need help with?</h2>
          </div>
          <div className="lg:col-span-6">
            <label htmlFor="hm-search" className="text-sm font-semibold text-ink-950">Search for a job</label>
            <div className="relative mt-2">
              <HmIcon name="search" className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-ink-400" />
              <input
                id="hm-search"
                type="search"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="What needs fixing, installing, assembling or adjusting?"
                className="focus-ring w-full rounded-2xl border border-ink-900/15 bg-sand-50 py-3.5 pl-12 pr-4 text-sm text-ink-950 shadow-sm placeholder:text-ink-400"
              />
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label="Task category">
          {[{ key: "all" as const, label: "All tasks", icon: "maintain" as const }, ...hmCats].map((c) => (
            <button
              key={c.key}
              type="button"
              aria-pressed={cat === c.key}
              onClick={() => setCat(c.key)}
              className={`focus-ring inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${cat === c.key ? "border-ink-950 bg-ink-950 text-sand-50" : "border-ink-900/15 text-ink-800 hover:border-ember-600"}`}
            >
              <HmIcon name={c.icon} className="h-4 w-4" />
              {c.label}
            </button>
          ))}
        </div>

        <p className="mt-4 text-sm text-ink-500" aria-live="polite">{shown.length} task{shown.length === 1 ? "" : "s"}</p>
        <ul className="mt-4 grid grid-cols-2 gap-2 sm:gap-3 lg:grid-cols-4">
          {shown.map((t) => (
            <li key={t.id} className="group flex flex-col justify-between gap-3 rounded-2xl border border-ink-900/10 bg-sand-100/60 p-3 transition-all sm:gap-4 sm:p-4 hover:-translate-y-0.5 hover:border-ember-600 hover:shadow-md">
              <div>
                <div className="flex items-center justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-ink-950 text-ember-500"><HmIcon name={t.icon} className="h-5 w-5" /></span>
                  <span className="hidden font-mono text-[10px] uppercase tracking-[0.14em] text-ink-500 sm:inline">{t.verb}</span>
                </div>
                <h3 className="mt-3 text-sm font-semibold leading-tight text-ink-950 sm:text-base">{t.label}</h3>
                <p className="mt-1 text-xs leading-relaxed text-ink-600 sm:text-sm"><span className="hidden font-medium text-ink-800 sm:inline">Useful when: </span>{t.useful}</p>
              </div>
              <AddButton id={t.id} className="self-start" />
            </li>
          ))}
        </ul>
        {!shown.length && (
          <p className="mt-6 rounded-2xl bg-sand-100 p-5 text-sm text-ink-700">
            No match — describe it in your own words below and we&rsquo;ll work out the right service.{" "}
            <a href="#describe" className="focus-ring rounded-sm font-semibold text-ember-700 underline underline-offset-4">Describe the problem</a>
          </p>
        )}
      </div>
    </section>
  );
}
