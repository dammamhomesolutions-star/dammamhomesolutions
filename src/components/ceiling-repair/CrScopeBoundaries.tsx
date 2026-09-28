import { scopeIncluded, scopeNotIncluded } from "@/lib/ceiling-repair";

export default function CrScopeBoundaries() {
  return (
    <section className="border-b border-ink-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge max-w-3xl">
        <p className="section-label !text-rust-700">Scope</p>
        <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
          What this service is for.
        </h2>

        <div className="mt-10 border-l-2 border-rust-600 pl-6">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-rust-700">
            Included, directionally
          </p>
          <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-2">
            {scopeIncluded.map((item) => (
              <li key={item} className="text-[15px] text-ink-800">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 border-l-2 border-ink-300 pl-6">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">
            May require a different scope or provider
          </p>
          <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-2">
            {scopeNotIncluded.map((item) => (
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
