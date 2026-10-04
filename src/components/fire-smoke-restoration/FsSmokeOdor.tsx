import FsIcon from "./FsIcon";
import type { FsIconName } from "@/lib/fire-smoke-restoration";

const materials: { label: string; note: string; depth: number }[] = [
  { label: "Fabrics & curtains", note: "Fibres trap fine residue", depth: 0.75 },
  { label: "Upholstery & mattresses", note: "Foam holds odor deep inside", depth: 0.95 },
  { label: "Carpets & rugs", note: "Pile and underlay absorb smoke", depth: 0.8 },
  { label: "Wood & cabinets", note: "Unsealed edges and backs absorb it", depth: 0.6 },
  { label: "Gypsum walls & ceilings", note: "Porous board and paint layers", depth: 0.55 },
  { label: "AC pathways", note: "Filters and returns recirculate it", depth: 0.7 },
  { label: "Insulation (where present)", note: "Hidden, and often needs replacing", depth: 0.9 },
];

const steps: { title: string; icon: FsIconName }[] = [
  { title: "Identify affected areas", icon: "search" },
  { title: "Remove loose contamination", icon: "tools" },
  { title: "Clean suitable surfaces", icon: "brush" },
  { title: "Treat affected contents and materials", icon: "sofa" },
  { title: "Address the odor sources", icon: "odor" },
  { title: "Reassess", icon: "check" },
];

export default function FsSmokeOdor() {
  return (
    <section aria-labelledby="fs-odor" className="border-b border-ink-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
        <div>
          <p className="section-label !text-ember-700">Smoke odor</p>
          <h2 id="fs-odor" className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            Why does the smoke smell remain after cleaning?
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-600">
            Smoke particles and residue get into porous materials, not just
            onto surfaces. A room can look clean and still smell, and the
            smell often comes back on hot days, in humid weather, or when the
            AC starts running.
          </p>
          <p className="mt-4 rounded-xl border-l-4 border-ember-600 bg-ember-100/60 px-4 py-3 text-[15px] font-medium leading-relaxed text-ink-900">
            Air freshener or a fresh coat of paint covers the smell. It
            doesn&rsquo;t deal with where it&rsquo;s coming from.
          </p>

          <h3 className="mt-10 text-sm font-semibold uppercase tracking-[0.14em] text-ink-500">
            How the odor is dealt with
          </h3>
          <ol className="mt-4 space-y-3">
            {steps.map((s, i) => (
              <li key={s.title} className="group flex items-center gap-4">
                <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full border border-ink-900/15 text-ink-800">
                  <FsIcon name={s.icon} className="h-4 w-4" />
                </span>
                <span className="text-sm text-ink-800">
                  <span className="mr-2 font-mono text-xs text-ink-400">{i + 1}</span>
                  {s.title}
                </span>
              </li>
            ))}
          </ol>
        </div>

        {/* Absorption gauge: how deep smoke tends to get into each material */}
        <figure className="rounded-2xl border border-ink-900/10 bg-sand-100/60 p-6 sm:p-8">
          <figcaption className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">
            Where smoke odor tends to stay
          </figcaption>
          <ul className="mt-6 space-y-5">
            {materials.map((m) => (
              <li key={m.label}>
                <div className="flex items-baseline justify-between gap-4">
                  <span className="text-sm font-medium text-ink-900">{m.label}</span>
                  <span className="text-right text-xs text-ink-500">{m.note}</span>
                </div>
                <svg viewBox="0 0 300 10" preserveAspectRatio="none" className="mt-2 h-2.5 w-full" aria-hidden="true">
                  <rect x="0" y="0" width="300" height="10" rx="5" fill="#ebe4d6" />
                  <rect x="0" y="0" width={300 * m.depth} height="10" rx="5" fill="#4a5468" opacity={0.35 + m.depth * 0.5} />
                  {Array.from({ length: Math.round(m.depth * 14) }).map((_, j) => (
                    <circle key={j} cx={8 + j * 20} cy="5" r="1.4" fill="#14181f" opacity="0.5" />
                  ))}
                </svg>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-xs leading-relaxed text-ink-500">
            Shading is a general guide to how readily each material holds
            odor, not a measurement. Actual results depend on the fire and
            the property.
          </p>
        </figure>
      </div>
    </section>
  );
}
