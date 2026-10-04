"use client";

import { hmBoard, hmTasks } from "@/lib/handyman";
import HmIcon from "./HmIcon";
import { useJobs } from "./HmJobList";

const tilt = ["-rotate-2", "rotate-1", "-rotate-1", "rotate-2", "rotate-1", "-rotate-2"];

// The signature "handyman board": pinned task cards that move into the job
// list when tapped. Plain buttons — no drag-and-drop needed.
export default function HmBoard() {
  const { jobs, has, toggle, remove, total } = useJobs();

  return (
    <div className="rounded-[2rem] bg-ink-950 p-4 shadow-[0_40px_80px_-40px_rgba(20,24,31,0.8)] sm:p-5">
      <div className="grid gap-4 sm:grid-cols-[1.1fr_1fr]">
        {/* board */}
        <div className="rounded-[1.5rem] p-4" style={{ background: "#c9a77c", backgroundImage: "radial-gradient(rgba(74,54,38,0.25) 1px, transparent 1px)", backgroundSize: "10px 10px" }}>
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-clay-900">Today&rsquo;s home list</p>
          <ul className="mt-3 grid grid-cols-2 gap-3">
            {hmBoard.map((id, i) => {
              const t = hmTasks.find((x) => x.id === id)!;
              const on = has(id);
              return (
                <li key={id}>
                  <button
                    type="button"
                    aria-pressed={on}
                    onClick={() => toggle(id)}
                    className={`focus-ring relative w-full rounded-lg p-3 pt-4 text-left shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:rotate-0 ${on ? "rotate-0 bg-ember-100 ring-2 ring-ember-600" : `${tilt[i]} bg-sand-50`}`}
                  >
                    <span aria-hidden="true" className={`absolute left-1/2 top-1 h-2.5 w-2.5 -translate-x-1/2 rounded-full shadow ${on ? "bg-ember-600" : "bg-rust-600"}`} />
                    <HmIcon name={t.icon} className="h-5 w-5 text-ink-700" />
                    <span className="mt-1 block text-sm font-semibold leading-tight text-ink-950">{t.label.split(" &")[0].split(" wall")[0]}</span>
                    <span className="block text-[11px] uppercase tracking-[0.1em] text-ink-500">{on ? "✓ On my list" : t.verb}</span>
                  </button>
                </li>
              );
            })}
          </ul>
          <a href="#tasks" className="focus-ring mt-3 flex items-center justify-center gap-1.5 rounded-lg border-2 border-dashed border-clay-900/40 px-3 py-2.5 text-sm font-semibold text-clay-900 hover:bg-sand-50/40">
            <HmIcon name="plus" className="h-4 w-4" /> Add another task
          </a>
        </div>

        {/* job list */}
        <div className="flex flex-col rounded-[1.5rem] bg-ink-900 p-4 text-sand-50">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ember-500">My job list</p>
          <div className="mt-3 flex-1" aria-live="polite">
            {jobs.length ? (
              <ol className="space-y-1.5">
                {jobs.map((j, i) => (
                  <li key={j.id} className="flex animate-fadeIn items-center gap-2 rounded-lg bg-ink-950 px-2.5 py-2 text-sm">
                    <span className="font-mono text-[11px] text-ink-400">{String(i + 1).padStart(2, "0")}</span>
                    <span className="flex-1 leading-tight">{j.label}{j.qty > 1 ? ` × ${j.qty}` : ""}</span>
                    <button type="button" onClick={() => remove(j.id)} aria-label={`Remove ${j.label}`} className="focus-ring rounded px-1 text-ink-400 hover:text-sand-50">×</button>
                  </li>
                ))}
              </ol>
            ) : (
              <p className="text-sm text-ink-400">Tap a card on the board to add it here.</p>
            )}
          </div>
          <div className="mt-4 border-t border-sand-100/10 pt-3">
            <p className="text-sm"><span className="font-mono text-2xl text-ember-500">{total}</span> <span className="text-ink-300">task{total === 1 ? "" : "s"} selected</span></p>
            <a href="#job-request" className="focus-ring mt-3 flex items-center justify-center gap-2 rounded-full bg-ember-500 px-4 py-3 text-sm font-semibold text-ink-950 transition-transform hover:-translate-y-0.5">
              Request Assessment <HmIcon name="arrow" className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
