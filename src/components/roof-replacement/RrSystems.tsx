import { rrSelectionFactors, rrSystems } from "@/lib/roof-replacement";
import RrIcon from "./RrIcon";

export default function RrSystems() {
  return (
    <section aria-labelledby="rr-systems" className="border-b border-ink-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="section-label !text-teal-700">Roof systems</p>
          <h2 id="rr-systems" className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            Choosing the right roof system for your property
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-600">
            There isn&rsquo;t one best roofing material. The right system
            depends on:
          </p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {rrSelectionFactors.map((f) => (
              <li key={f} className="rounded-full border border-ink-900/15 px-3 py-1 text-xs text-ink-700">
                {f}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm leading-relaxed text-ink-600">
            Most replacements combine more than one of these — for example
            insulation, a waterproofing layer and a reflective finish.
          </p>
        </div>

        <ul className="grid gap-5 sm:grid-cols-2 lg:col-span-8">
          {rrSystems.map((s) => (
            <li key={s.title} className="group flex flex-col rounded-2xl border border-ink-900/10 bg-sand-100/50 p-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-ink-950 text-teal-300">
                <RrIcon name={s.icon} className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-ink-950">{s.title}</h3>
              <dl className="mt-4 space-y-3 text-sm">
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-ink-500">Best suited for</dt>
                  <dd className="mt-1 leading-relaxed text-ink-800">{s.suited}</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-ink-500">Key advantages</dt>
                  <dd className="mt-1 leading-relaxed text-ink-800">{s.advantages}</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-ink-500">Important considerations</dt>
                  <dd className="mt-1 leading-relaxed text-ink-700">{s.considerations}</dd>
                </div>
              </dl>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
