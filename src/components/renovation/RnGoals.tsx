"use client";

import { rnGoals, rnRooms } from "@/lib/renovation";
import { usePlan } from "./RnPlan";
import { Arrow, Check, Eyebrow } from "./RnUi";

// Outcome-first entry point: "what are you trying to change?" Every answer
// stays in the HTML; only the selected one is shown.
export default function RnGoals() {
  const { goal, setGoal, addRoom, hasRoom } = usePlan();
  const active = goal ?? rnGoals[0].key;

  return (
    <section id="change" aria-labelledby="rn-change" className="scroll-mt-20 bg-sand-50 py-20 sm:py-28">
      <div className="container-edge">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <Eyebrow n="01">What are you trying to change?</Eyebrow>
            <h2 id="rn-change" className="mt-5 font-serif text-4xl font-light tracking-tight text-ink-950 sm:text-6xl">Start with the change you want.</h2>
          </div>
          <p className="max-w-md text-[15px] leading-relaxed text-ink-600 lg:col-span-5">
            You don&rsquo;t need to know what the work is called. Pick the outcome
            you&rsquo;re after and we&rsquo;ll show what it usually involves.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 border-l border-t border-ink-950/10 md:grid-cols-4" role="group" aria-label="Renovation goal">
          {rnGoals.map((g, i) => {
            const on = active === g.key;
            return (
              <button
                key={g.key}
                type="button"
                aria-pressed={goal === g.key}
                aria-controls={`rn-goal-${g.key}`}
                onClick={() => setGoal(g.key)}
                className={`focus-ring group relative flex min-h-[8.5rem] flex-col justify-between border-b border-r border-ink-950/10 p-4 text-left transition-colors sm:min-h-[10rem] sm:p-6 ${on ? "bg-ink-950 text-sand-50" : "bg-transparent text-ink-950 hover:bg-sand-100"}`}
              >
                <span className={`font-mono text-[10px] tracking-[0.2em] ${on ? "text-clay-300" : "text-ink-400"}`}>{String(i + 1).padStart(2, "0")}</span>
                <span>
                  <span className="block font-serif text-lg leading-tight sm:text-2xl">{g.label}</span>
                  <span className={`mt-1.5 hidden text-xs leading-snug sm:block ${on ? "text-sand-200" : "text-ink-500"}`}>{g.line}</span>
                </span>
              </button>
            );
          })}
        </div>

        {rnGoals.map((g) => (
          <div key={g.key} id={`rn-goal-${g.key}`} hidden={active !== g.key} className="grid [&[hidden]]:hidden gap-8 border-b border-ink-950/10 py-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <h3 className="font-serif text-2xl text-ink-950 sm:text-3xl">{g.label}</h3>
              <p className="mt-1 text-sm text-walnut-700">{g.line}</p>
              <p className="mt-4 text-[15px] leading-relaxed text-ink-700">{g.detail}</p>
            </div>
            <div className="lg:col-span-4">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-500">What we&rsquo;d look at</p>
              <ul className="mt-3 divide-y divide-ink-950/10 border-y border-ink-950/10">
                {g.looksAt.map((x) => (
                  <li key={x} className="flex items-center gap-3 py-2.5 text-sm text-ink-800">
                    <span aria-hidden="true" className="h-px w-4 bg-walnut-600" />
                    {x}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-3">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-500">Rooms this often involves</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {g.rooms.map((k) => {
                  const r = rnRooms.find((x) => x.key === k)!;
                  const on = hasRoom(k);
                  return (
                    <button key={k} type="button" onClick={() => addRoom(k)} aria-pressed={on} className={`focus-ring inline-flex items-center gap-2 border px-3 py-2 text-xs font-semibold transition-colors ${on ? "border-walnut-700 bg-walnut-700 text-sand-50" : "border-ink-950/20 text-ink-900 hover:border-ink-950"}`}>
                      {on ? <Check /> : "+"} {r.label}
                    </button>
                  );
                })}
              </div>
              <a href="#floor-plan" className="focus-ring mt-6 inline-flex items-center gap-2 text-sm font-semibold text-ink-950 underline decoration-walnut-600 decoration-1 underline-offset-[6px]">
                See it on the floor plan <Arrow />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
