import { flScopeIncluded, flScopeNotIncluded } from "@/lib/flooring-repair";

export default function FlScopeBoundaries() {
  return (
    <section className="border-b border-concrete-900/10 bg-concrete-100/50 py-20 sm:py-24">
      <div className="container-edge max-w-3xl">
        <p className="section-label !text-clay-700">Scope</p>
        <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
          What this service is for.
        </h2>

        <div className="mt-10 border-l-2 border-clay-600 pl-6">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-clay-700">
            Included, directionally
          </p>
          <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-2">
            {flScopeIncluded.map((item) => (
              <li key={item} className="text-[15px] text-ink-800">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 border-l-2 border-ink-300 pl-6">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">
            A different scope, unless otherwise confirmed
          </p>
          <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-2">
            {flScopeNotIncluded.map((item) => (
              <li key={item} className="text-[15px] text-ink-500">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
