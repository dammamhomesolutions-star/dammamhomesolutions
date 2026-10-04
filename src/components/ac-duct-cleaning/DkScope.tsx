import Link from "next/link";
import { dkScope } from "@/lib/ac-duct-cleaning";
import DkIcon from "./DkIcon";

const toneClass = {
  in: "bg-moss-100 text-moss-900",
  scope: "bg-copper-100 text-copper-900",
  separate: "bg-steel-100 text-ink-800",
};
const toneLabel = { in: "Included", scope: "Optional", separate: "Separate" };

export default function DkScope() {
  return (
    <section id="scope" aria-label="Service scope, repairs and leaks" className="border-b border-ink-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-copper-700">Scope</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">What&rsquo;s included, and what&rsquo;s separate</h2>
        </div>
        {/* Labelled cards work at every width, so no wide table on mobile */}
        <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {dkScope.map((s) => (
            <li key={s.area} className="rounded-2xl border border-ink-900/10 bg-steel-100/40 p-4">
              <span className={`inline-flex rounded-full px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-[0.1em] ${toneClass[s.tone]}`}>
                {toneLabel[s.tone]}
              </span>
              <h3 className="mt-3 text-base font-semibold text-ink-950">{s.area}</h3>
              <p className="mt-1 text-sm text-ink-600">{s.status}</p>
            </li>
          ))}
        </ul>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl bg-ink-950 p-6 text-sand-50 sm:p-8">
            <DkIcon name="tools" className="h-7 w-7 text-copper-300" />
            <h2 className="mt-3 font-serif text-2xl tracking-tight">Duct cleaning vs duct repair</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-300">
              Cleaning removes unwanted material. It can&rsquo;t fix physically
              damaged ductwork. Repair and sealing — which we also do — deal
              with:
            </p>
            <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
              {["Holes and tears", "Disconnected sections", "Crushed or damaged duct", "Insulation problems", "Leaks", "Structural issues"].map((x) => (
                <li key={x} className="flex gap-2">
                  <span className="mt-2 h-1 w-3 flex-none bg-copper-300" aria-hidden="true" />
                  {x}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-ink-300">In some cases, replacing a section is the better option.</p>
          </div>
          <div className="rounded-2xl border border-ink-900/10 bg-steel-100/50 p-6 sm:p-8">
            <DkIcon name="airflow" className="h-7 w-7 text-copper-700" />
            <h2 className="mt-3 font-serif text-2xl tracking-tight text-ink-950">Dirty ducts and leaking ducts are different problems</h2>
            <svg viewBox="0 0 400 90" className="mt-4 h-auto w-full" aria-hidden="true">
              <rect x="10" y="10" width="170" height="30" fill="#d7dce0" stroke="#666f78" strokeWidth="2" />
              <g fill="#78746a"><circle cx="50" cy="34" r="3" /><circle cx="90" cy="35" r="2.5" /><circle cx="130" cy="34" r="3" /></g>
              <text x="10" y="60" fontFamily="ui-monospace, monospace" fontSize="10" fill="#4d545c">DIRTY → CLEANING</text>
              <rect x="220" y="14" width="170" height="26" fill="#d7dce0" stroke="#666f78" strokeWidth="2" />
              <path d="M292 14h16" stroke="#eceef0" strokeWidth="4" />
              <path className="fs-flow" d="M296 14l-6-12M304 14l6-12" stroke="#c98246" strokeWidth="2" fill="none" strokeLinecap="round" />
              <text x="220" y="60" fontFamily="ui-monospace, monospace" fontSize="10" fill="#4d545c">LEAKING → SEALING / REPAIR</text>
            </svg>
            <p className="mt-3 text-sm leading-relaxed text-ink-600">
              Cleaning deals with contamination; sealing or repair deals with
              leaks. Airflow problems can come from either — or from something
              else entirely, like the{" "}
              <Link href="/ac-repair/" className="focus-ring rounded-sm font-semibold text-ink-950 underline decoration-copper-600 decoration-2 underline-offset-4 hover:text-copper-700">
                AC unit itself
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
