import { dkDuctTypes, dkMethodFactors, dkMethods, dkProcess } from "@/lib/ac-duct-cleaning";
import DkIcon from "./DkIcon";
import DkCtas from "./DkCtas";

export default function DkProcess() {
  return (
    <section id="process" aria-label="Process, methods and duct types" className="border-b border-ink-900/10 bg-steel-100/60 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-copper-700">The process</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">How professional AC duct cleaning works</h2>
        </div>

        {/* Horizontal on large screens, vertical below */}
        <ol className="relative mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-8 xl:gap-3">
          <span aria-hidden="true" className="absolute left-6 right-6 top-6 hidden h-px bg-copper-500/50 xl:block" />
          {dkProcess.map((s, i) => (
            <li key={s.title} className="group relative">
              <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-copper-500/60 bg-sand-50 text-copper-700">
                <DkIcon name={s.icon} className="h-5 w-5" />
              </span>
              <p className="mt-4 font-mono text-[11px] tracking-[0.14em] text-ink-400">STEP {i + 1}</p>
              <h3 className="mt-1 text-[15px] font-semibold leading-snug text-ink-950">{s.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-600">{s.body}</p>
            </li>
          ))}
        </ol>

        <div className="mt-8 grid gap-4 rounded-2xl bg-sand-50 p-6 ring-1 ring-ink-900/10 sm:grid-cols-3">
          {[
            { t: "Before", b: "Inspection, then a clear discussion of the scope." },
            { t: "During", b: "Property protected, ducts cleaned and debris contained." },
            { t: "After", b: "Final check and an explanation of what we found." },
          ].map((x) => (
            <div key={x.t}>
              <h3 className="font-serif text-xl text-ink-950">{x.t}</h3>
              <p className="mt-1 text-sm text-ink-600">{x.b}</p>
            </div>
          ))}
        </div>
        <DkCtas className="mt-8" primaryLabel="Schedule an Inspection" />

        {/* Methods */}
        <div className="mt-16 grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 className="font-serif text-3xl tracking-tight text-ink-950">Cleaning methods — chosen per system</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-600">
              No single method suits every duct. The approach depends on:
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {dkMethodFactors.map((f) => (
                <li key={f} className="rounded-full bg-sand-50 px-3 py-1 text-xs text-ink-800 ring-1 ring-ink-900/10">{f}</li>
              ))}
            </ul>
          </div>
          <ul className="grid gap-5 md:grid-cols-3 lg:col-span-8">
            {dkMethods.map((m) => (
              <li key={m.title} className="group rounded-2xl bg-ink-950 p-6 text-sand-50">
                <DkIcon name={m.icon} className="h-7 w-7 text-copper-300" />
                <h3 className="mt-4 text-lg font-semibold">{m.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-300">{m.body}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Duct types */}
        <div className="mt-16">
          <h2 className="font-serif text-3xl tracking-tight text-ink-950">Different ducts need different care</h2>
          <ul className="mt-8 grid gap-5 md:grid-cols-3">
            {dkDuctTypes.map((d, i) => (
              <li key={d.title} className="rounded-2xl border border-ink-900/10 bg-sand-50 p-6">
                <svg viewBox="0 0 200 60" className="h-auto w-full" aria-hidden="true">
                  {i === 0 && (
                    <g fill="none" stroke="#666f78" strokeWidth="2">
                      <path d="M10 20c20-8 40 8 60 0s40 8 60 0 40 8 60 0" />
                      <path d="M10 44c20-8 40 8 60 0s40 8 60 0 40 8 60 0" />
                      {[30, 60, 90, 120, 150, 180].map((x) => <path key={x} d={`M${x} 18v28`} strokeWidth="1" />)}
                    </g>
                  )}
                  {i === 1 && (
                    <g>
                      <rect x="10" y="16" width="180" height="30" fill="#d7dce0" stroke="#666f78" strokeWidth="2" />
                      <path d="M70 16v30M130 16v30" stroke="#4d545c" strokeWidth="3" />
                    </g>
                  )}
                  {i === 2 && (
                    <g>
                      <rect x="10" y="10" width="180" height="42" rx="6" fill="#f2e6d5" stroke="#b8916c" strokeWidth="2" />
                      <rect x="24" y="20" width="152" height="22" fill="#d7dce0" stroke="#666f78" strokeWidth="2" />
                    </g>
                  )}
                </svg>
                <h3 className="mt-4 text-lg font-semibold text-ink-950">{d.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-600">{d.body}</p>
                <p className="mt-3 rounded-xl bg-copper-100/70 p-3 text-sm text-ink-800">{d.care}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
