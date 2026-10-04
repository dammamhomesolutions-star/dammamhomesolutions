"use client";

import { buildWhatsAppLink } from "@/lib/site-config";
import { shProblemGroups } from "@/lib/shade-pergola";
import { useShade } from "./ShPlan";
import { Tag, opt, optOff, optOn } from "./ShUi";

const glyph: Record<string, string> = {
  cover: "M4 14L20 6L28 14L12 22Z",
  frame: "M4 24V8h24v16M4 8l24 16",
  base: "M8 6v16M4 24h8M24 6v16M20 24h8",
  water: "M16 4c5 7 8 11 8 15a8 8 0 0 1-16 0c0-4 3-8 8-15z",
  appearance: "M16 4a12 12 0 1 0 0 24a12 12 0 0 0 0-24zM16 4v24",
};
const photosHref = buildWhatsAppLink("Hello Dammam Home Solutions, I'm not sure what's wrong with my parking shade. Here are photos.");

// Grouped symptom selector; picks go straight into the request.
export default function ShProblems() {
  const { issues, toggleIssue } = useShade();
  const active = shProblemGroups.filter((g) => g.items.some((i) => issues.includes(`${g.label}: ${i}`)));

  return (
    <section id="problems" aria-labelledby="sh-problems" className="scroll-mt-20 border-t border-steel-900/10 bg-steel-100/60 py-20 sm:py-28">
      <div className="container-edge">
        <Tag n="03">What&rsquo;s wrong?</Tag>
        <h2 id="sh-problems" className="mt-5 max-w-3xl font-serif text-3xl tracking-tight text-ink-950 sm:text-5xl">What&rsquo;s wrong with your shade?</h2>
        <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-ink-600">Select everything you&rsquo;ve noticed. Each selection is added to your assessment request.</p>

        <div className="mt-10 grid gap-px bg-steel-900/10 md:grid-cols-2 lg:grid-cols-3">
          {shProblemGroups.map((g) => (
            <fieldset key={g.key} className="bg-sand-50 p-5 sm:p-6">
              <legend className="sr-only">{g.label} problems</legend>
              <div aria-hidden="true" className="flex items-center gap-3">
                <svg viewBox="0 0 32 32" className="h-8 w-8 text-copper-600" fill="none" stroke="currentColor" strokeWidth="1.8"><path d={glyph[g.key]} /></svg>
                <span className="font-serif text-xl text-ink-950">{g.label}</span>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {g.items.map((it) => {
                  const v = `${g.label}: ${it}`;
                  const on = issues.includes(v);
                  return (
                    <label key={it} className={`${opt} ${on ? optOn : optOff}`}>
                      <input type="checkbox" checked={on} onChange={() => toggleIssue(v)} className="sr-only" />
                      {it}
                    </label>
                  );
                })}
              </div>
            </fieldset>
          ))}
          <div className="flex flex-col justify-between bg-steel-900 p-5 text-sand-50 sm:p-6">
            <div>
              <p className="font-serif text-xl">Not sure?</p>
              <p className="mt-2 text-sm leading-relaxed text-steel-300">Send photos of the whole shade and the damaged area — we&rsquo;ll help work out what&rsquo;s going on.</p>
            </div>
            <a href={photosHref} target="_blank" rel="nofollow noopener noreferrer" className="focus-ring mt-5 inline-flex items-center justify-center bg-copper-600 px-4 py-3 text-sm font-semibold hover:bg-copper-700">Send Photos</a>
          </div>
        </div>

        <div aria-live="polite" className="mt-6">
          {active.length > 0 && (
            <ul className="grid gap-3 md:grid-cols-2">
              {active.map((g) => (
                <li key={g.key} className="border-l-4 border-copper-600 bg-sand-50 p-4 text-sm leading-relaxed text-ink-700">
                  <span className="font-semibold text-ink-950">{g.label}: </span>{g.note}
                </li>
              ))}
            </ul>
          )}
          <p className="mt-3 text-xs text-ink-500">Notes are general — the right repair is confirmed on assessment.</p>
        </div>
      </div>
    </section>
  );
}
