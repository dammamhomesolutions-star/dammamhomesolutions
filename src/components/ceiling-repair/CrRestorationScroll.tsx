import { restorationSteps } from "@/lib/ceiling-repair";

function StepVisual({ tag }: { tag: string }) {
  return (
    <svg viewBox="0 0 100 100" className="h-full w-full" aria-hidden="true">
      <rect x="0" y="0" width="100" height="100" fill="url(#ceiling-plaster)" filter="url(#ceiling-noise)" />
      {tag === "01" && (
        <rect x="35" y="35" width="30" height="30" fill="#8e97a8" opacity="0.4" />
      )}
      {tag === "02" && (
        <rect x="30" y="30" width="40" height="40" fill="none" stroke="#c76a3f" strokeWidth="2" strokeDasharray="4 4" />
      )}
      {tag === "03" && (
        <rect x="30" y="30" width="40" height="40" fill="#c9bfa8" />
      )}
      {tag === "04" && <rect x="30" y="30" width="40" height="40" fill="#f6f2e9" />}
      {tag === "05" && <rect x="0" y="0" width="100" height="100" fill="#f6f2e9" />}
      {tag === "06" && <rect x="0" y="0" width="100" height="100" fill="url(#ceiling-plaster)" filter="url(#ceiling-noise)" />}
    </svg>
  );
}

export default function CrRestorationScroll() {
  return (
    <section className="border-b border-ink-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-rust-700">Hole to finish</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            From damage to a finished ceiling.
          </h2>
        </div>

        <div
          className="mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-3 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          role="list"
        >
          {restorationSteps.map((step) => (
            <div key={step.tag} role="listitem" className="w-[62%] flex-none snap-start sm:w-[28%] lg:w-[15%]">
              <div className="aspect-square overflow-hidden rounded-sm border border-ink-900/10">
                <StepVisual tag={step.tag} />
              </div>
              <p className="mt-3 font-mono text-xs text-ink-400">{step.tag}</p>
              <h3 className="text-sm font-semibold text-ink-950">{step.label}</h3>
              <p className="mt-1 text-[13px] leading-snug text-ink-600">{step.description}</p>
            </div>
          ))}
        </div>

        <p className="mt-6 max-w-xl text-xs text-ink-500">
          Illustrative repair process — not detailed construction
          instructions.
        </p>
      </div>
    </section>
  );
}
