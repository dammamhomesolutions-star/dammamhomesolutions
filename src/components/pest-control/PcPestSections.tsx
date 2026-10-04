import { pcPestSections, pcPests } from "@/lib/pest-control";
import PcIcon from "./PcIcon";
import PcCtas from "./PcCtas";

// Mosquito breeding chain, drawn inline for the mosquito section.
function MosquitoChain() {
  const steps = ["Standing water", "Breeding", "Adult mosquitoes", "Bites"];
  return (
    <ol className="mt-6 flex flex-wrap items-center gap-2 text-xs font-medium text-ink-800" aria-label="Mosquito breeding chain">
      {steps.map((s, i) => (
        <li key={s} className="flex items-center gap-2">
          <span className="rounded-full border border-moss-600/40 bg-sand-50 px-3 py-1">{s}</span>
          {i < steps.length - 1 && <PcIcon name="arrow" className="h-3.5 w-3.5 text-moss-700" />}
        </li>
      ))}
    </ol>
  );
}

export default function PcPestSections() {
  return (
    <section aria-label="Pest-by-pest guide" className="border-b border-ink-900/10 bg-sand-100/60 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-moss-700">Pest by pest</p>
          <p className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            What each pest needs — and what controlling it involves
          </p>
        </div>

        {/* In-page index */}
        <nav aria-label="Jump to a pest" className="mt-8 flex flex-wrap gap-2">
          {pcPestSections.map((s) => {
            const p = pcPests.find((x) => x.key === s.key)!;
            return (
              <a
                key={s.key}
                href={`#pest-${s.key}`}
                className="focus-ring group inline-flex items-center gap-2 rounded-full border border-ink-900/15 bg-sand-50 px-3.5 py-1.5 text-sm text-ink-800 hover:border-moss-600"
              >
                <PcIcon name={p.icon} className="h-4 w-4 text-moss-700" />
                {p.label}
              </a>
            );
          })}
        </nav>

        <div className="mt-12 space-y-6">
          {pcPestSections.map((s, idx) => {
            const p = pcPests.find((x) => x.key === s.key)!;
            return (
              <article
                key={s.key}
                id={`pest-${s.key}`}
                aria-labelledby={`pest-h-${s.key}`}
                className="scroll-mt-24 grid gap-8 rounded-2xl border border-ink-900/10 bg-sand-50 p-6 sm:p-8 lg:grid-cols-12"
              >
                <div className="lg:col-span-5">
                  <div className="flex items-center gap-3">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-moss-100 text-moss-800">
                      <PcIcon name={p.icon} className="h-7 w-7" />
                    </span>
                    <span className="font-mono text-xs text-ink-400">{String(idx + 1).padStart(2, "0")} / 07</span>
                  </div>
                  <h2 id={`pest-h-${s.key}`} className="mt-5 font-serif text-2xl tracking-tight text-ink-950 sm:text-3xl">
                    {s.heading}
                  </h2>
                  <p className="mt-3 text-[15px] leading-relaxed text-ink-600">{s.intro}</p>
                  {s.key === "mosquito" && <MosquitoChain />}
                </div>
                <div className="grid gap-6 sm:grid-cols-2 lg:col-span-7">
                  {s.points.map((pt) => (
                    <div key={pt.title}>
                      <h3 className="text-xs font-semibold uppercase tracking-[0.12em] text-ink-500">{pt.title}</h3>
                      <ul className="mt-3 space-y-2 text-sm text-ink-800">
                        {pt.items.map((it) => (
                          <li key={it} className="flex gap-2">
                            <PcIcon name="check" className="mt-0.5 h-4 w-4 flex-none text-moss-700" />
                            {it}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                  <p className="rounded-xl bg-moss-100 p-4 text-sm leading-relaxed text-moss-900 sm:col-span-2">{s.note}</p>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-10 flex flex-col gap-4 rounded-2xl bg-ink-950 p-6 text-sand-50 sm:p-8 lg:flex-row lg:items-center lg:justify-between">
          <p className="font-serif text-xl">Seeing the same pest repeatedly? Request an inspection.</p>
          <PcCtas tone="dark" />
        </div>
      </div>
    </section>
  );
}
