import Link from "next/link";
import { apWasherProblems, apWasherTable } from "@/lib/appliance-repair";
import ApIcon from "./ApIcon";

const linkClass =
  "focus-ring rounded-sm font-semibold text-ink-950 underline decoration-copper-600 decoration-2 underline-offset-4 hover:text-copper-700";

export default function ApWasher() {
  return (
    <section id="washing-machine" aria-labelledby="ap-washer" className="border-b border-ink-900/10 bg-steel-100/50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="flex items-center gap-3 text-copper-700">
          <ApIcon name="washer" className="h-8 w-8" />
          <p className="section-label !text-copper-700">Washing machines</p>
        </div>
        <h2 id="ap-washer" className="mt-4 max-w-3xl font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">Washing machine repair in Dammam</h2>
        <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-ink-600">
          Front-load and top-load machines share the same basic systems: water
          in, drum and motor, water out, and the controls and door lock that
          tie them together. Most faults sit in one of them.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {apWasherProblems.map((p) => (
            <div key={p.title} className="rounded-2xl border border-ink-900/10 bg-sand-50 p-5">
              <h3 className="font-semibold text-ink-950">{p.title}</h3>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {p.causes.map((c) => (
                  <li key={c} className="rounded-full bg-steel-100 px-2.5 py-1 text-xs text-ink-700">{c}</li>
                ))}
              </ul>
              {p.note && <p className="mt-3 text-xs text-ink-500">{p.note}</p>}
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h3 className="font-serif text-2xl tracking-tight text-ink-950">Symptom → area to check</h3>
            {/* Cards on mobile, table from md, so nothing widens the viewport. */}
            <ul className="mt-5 space-y-2 md:hidden">
              {apWasherTable.map((r) => (
                <li key={r.symptom} className="rounded-xl bg-sand-50 p-4 ring-1 ring-ink-900/10">
                  <p className="text-sm font-semibold text-ink-950">{r.symptom}</p>
                  <p className="mt-0.5 text-sm text-ink-600">{r.area}</p>
                </li>
              ))}
            </ul>
            <table className="mt-5 hidden w-full overflow-hidden rounded-xl text-left text-sm ring-1 ring-ink-900/10 md:table">
              <thead className="bg-ink-950 text-sand-50">
                <tr>
                  <th scope="col" className="px-4 py-3 font-semibold">Symptom</th>
                  <th scope="col" className="px-4 py-3 font-semibold">Possible area to check</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-ink-900/10 bg-sand-50">
                {apWasherTable.map((r) => (
                  <tr key={r.symptom}>
                    <th scope="row" className="px-4 py-3 font-medium text-ink-950">{r.symptom}</th>
                    <td className="px-4 py-3 text-ink-700">{r.area}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-ink-950 p-6 text-sand-50 sm:p-8">
              <ApIcon name="drain" className="h-7 w-7 text-copper-300" />
              <h3 className="mt-3 font-serif text-2xl">Is it the washing machine or the plumbing?</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-300">
                If the machine fills slowly, check whether other taps have good
                pressure. If it won&rsquo;t drain, a blocked standpipe or waste
                line can look exactly like a failed drain pump — especially if
                the sink or floor drain nearby is also slow.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-sand-100">
                <li className="flex gap-2"><ApIcon name="check" className="mt-0.5 h-4 w-4 flex-none text-copper-300" />Other drains slow too? Likely plumbing.</li>
                <li className="flex gap-2"><ApIcon name="check" className="mt-0.5 h-4 w-4 flex-none text-copper-300" />Water on the floor behind? Hose, connection or drain.</li>
                <li className="flex gap-2"><ApIcon name="check" className="mt-0.5 h-4 w-4 flex-none text-copper-300" />Only the machine affected? Likely the appliance.</li>
              </ul>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-ink-700">
              For blocked waste lines see{" "}
              <Link href="/drain-unblocking-sewer-line-cleaning-dammam/" className={linkClass}>drain unblocking</Link>
              ; for supply pipes, valves and leaks see{" "}
              <Link href="/plumbing-repair/" className={linkClass}>plumbing repair</Link>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
