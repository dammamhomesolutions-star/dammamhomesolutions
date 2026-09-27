import { restorationStates } from "@/lib/tile-repair";

function StateVisual({ tag }: { tag: string }) {
  return (
    <svg viewBox="0 0 100 100" className="h-full w-full" aria-hidden="true">
      <rect x="0" y="0" width="100" height="100" fill="url(#tile-stone)" filter="url(#tile-noise)" />
      {tag === "01" && (
        <>
          <ellipse cx="30" cy="70" rx="16" ry="4" fill="#8e97a8" opacity="0.35" />
          <ellipse cx="70" cy="30" rx="10" ry="3" fill="#8e97a8" opacity="0.3" />
        </>
      )}
      {tag === "02" && (
        <path d="M20 20 L48 48 L38 60 L70 85" fill="none" stroke="#333a49" strokeWidth="2" strokeLinecap="round" />
      )}
      {tag === "03" && (
        <rect x="15" y="15" width="70" height="70" fill="none" stroke="#69748a" strokeDasharray="4 4" strokeWidth="1.6" />
      )}
      {tag === "04" && (
        <>
          <rect x="0" y="0" width="50" height="100" fill="url(#tile-stone)" filter="url(#tile-noise)" />
          <rect x="50" y="0" width="50" height="100" fill="#f6f2e9" />
          <line x1="50" y1="0" x2="50" y2="100" stroke="#c76a3f" strokeWidth="1.4" strokeDasharray="3 3" />
        </>
      )}
      {tag === "05" && <rect x="0" y="0" width="100" height="100" fill="#f6f2e9" />}
    </svg>
  );
}

export default function TrRestorationStates() {
  return (
    <section className="border-b border-ink-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-rust-700">From damage to finish</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            The surface changes one layer at a time.
          </h2>
        </div>

        <div
          className="mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-3 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          role="list"
        >
          {restorationStates.map((state) => (
            <div
              key={state.tag}
              role="listitem"
              className="w-[62%] flex-none snap-start sm:w-[28%] lg:w-[19%]"
            >
              <div className="aspect-square overflow-hidden rounded-sm border border-ink-900/10">
                <StateVisual tag={state.tag} />
              </div>
              <p className="mt-3 font-mono text-xs text-ink-400">{state.tag}</p>
              <h3 className="text-sm font-semibold text-ink-950">{state.label}</h3>
              <p className="mt-1 text-[13px] leading-snug text-ink-600">{state.description}</p>
            </div>
          ))}
        </div>

        <p className="mt-6 max-w-xl text-xs text-ink-500">
          Illustrative states — replacement is shown only where it&rsquo;s
          actually relevant, not as the default outcome.
        </p>
      </div>
    </section>
  );
}
