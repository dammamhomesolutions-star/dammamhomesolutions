"use client";

import { mdDuration, mdHistory } from "@/lib/mold-damp";
import { useReport } from "./MdReport";
import { Spec, chip, chipOff, chipOn } from "./MdUi";

// How long, and has it been repaired before? Both feed the report.
export default function MdHistory() {
  const { duration, history, set } = useReport();
  const idx = duration ? mdDuration.indexOf(duration) : -1;

  return (
    <section id="history" aria-labelledby="md-history" className="scroll-mt-20 border-t border-ink-900/10 bg-concrete-100 py-20 sm:py-24">
      <div className="container-edge grid gap-14 lg:grid-cols-2">
        <div>
          <Spec code="S-11">Timeline</Spec>
          <h2 id="md-history" className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">How long has it been there?</h2>
          <p className="mt-3 text-[15px] leading-relaxed text-ink-600">
            Duration is useful context during an assessment. On its own, it
            doesn&rsquo;t tell us how serious the problem is.
          </p>
          <div className="mt-8">
            <label htmlFor="md-duration" className="sr-only">How long the problem has been there</label>
            <input
              id="md-duration"
              type="range"
              min={0}
              max={mdDuration.length - 1}
              step={1}
              value={idx < 0 ? 0 : idx}
              onChange={(e) => set("duration", mdDuration[Number(e.target.value)])}
              aria-valuetext={duration ?? "Not set"}
              className="w-full accent-glass-800"
            />
            <ol className="mt-2 grid grid-cols-4 text-[11px] leading-tight text-ink-600 sm:text-xs" aria-hidden="true">
              {mdDuration.map((d, i) => (
                <li key={d} className={`${i === 0 ? "text-left" : i === mdDuration.length - 1 ? "text-right" : "text-center"} ${idx === i ? "font-semibold text-glass-900" : ""}`}>
                  <button type="button" tabIndex={-1} onClick={() => set("duration", d)} className="hover:text-glass-900">{d}</button>
                </li>
              ))}
            </ol>
            <p className="mt-4 text-sm text-ink-700" aria-live="polite">{duration ? <>Noted: <strong>{duration}</strong></> : "Move the slider to note how long it's been there."}</p>
          </div>
        </div>

        <div>
          <Spec code="S-12">Recurring problem tracker</Spec>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">Has this area been repaired before?</h2>
          <fieldset className="mt-6">
            <legend className="sr-only">Previous repairs</legend>
            <div className="flex flex-wrap gap-2">
              {mdHistory.map((h) => (
                <label key={h} className={`${chip} ${history === h ? chipOn : chipOff}`}>
                  <input type="radio" name="md-history" checked={history === h} onChange={() => set("history", h)} className="sr-only" />
                  {h}
                </label>
              ))}
            </div>
          </fieldset>
          <div aria-live="polite" className="mt-6">
            {history && history !== "No" && (
              <p className="rounded-xl border-l-4 border-glass-700 bg-sand-50 p-5 text-[15px] leading-relaxed text-ink-800">
                Previous treatment history can help identify why the condition may be
                recurring. Tell us what was done and roughly when — it&rsquo;s in your report.
              </p>
            )}
            {history === "No" && <p className="rounded-xl bg-sand-50 p-5 text-[15px] text-ink-700">A first look — photos of the area as it is now are the most useful starting point.</p>}
          </div>
        </div>
      </div>
    </section>
  );
}
