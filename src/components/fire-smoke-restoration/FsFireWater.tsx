import Link from "next/link";

const fire = ["Smoke", "Soot", "Heat", "Structural damage"];
const water = ["Water", "Moisture", "Wet materials", "Potential secondary damage"];

export default function FsFireWater() {
  return (
    <section aria-labelledby="fs-firewater" className="border-b border-ink-900/10 bg-ink-950 py-20 text-sand-50 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-glass-300">Two problems at once</p>
          <h2 id="fs-firewater" className="mt-4 font-serif text-3xl tracking-tight sm:text-4xl">
            Fire damage often comes with water damage
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-300">
            Firefighting can put a lot of water into a property. Gypsum
            walls, wooden cabinets, flooring and ceilings below can stay wet
            long after the fire is out. If they aren&rsquo;t assessed and
            dried properly, they can cause problems of their own — swelling,
            staining, failing finishes, and conditions where mold can grow.
          </p>
        </div>

        {/* FIRE + FIREFIGHTING = RESTORATION PLAN */}
        <div className="mt-12 grid items-center gap-6 lg:grid-cols-[1fr_auto_1fr_auto_1.1fr]">
          <div className="rounded-2xl border border-ember-500/40 bg-ink-900 p-6">
            <p className="font-mono text-xs tracking-[0.18em] text-ember-500">FIRE</p>
            <ul className="mt-4 space-y-2">
              {fire.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-sand-100">
                  <span className="h-1.5 w-1.5 rounded-full bg-ember-500" aria-hidden="true" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <span className="mx-auto font-serif text-3xl text-ink-400" aria-hidden="true">+</span>

          <div className="rounded-2xl border border-glass-500/40 bg-ink-900 p-6">
            <p className="font-mono text-xs tracking-[0.18em] text-glass-300">FIREFIGHTING</p>
            <ul className="mt-4 space-y-2">
              {water.map((w) => (
                <li key={w} className="flex items-center gap-2 text-sm text-sand-100">
                  <span className="h-1.5 w-1.5 rounded-full bg-glass-500" aria-hidden="true" />
                  {w}
                </li>
              ))}
            </ul>
          </div>

          <span className="mx-auto font-serif text-3xl text-ink-400" aria-hidden="true">=</span>

          <div className="relative overflow-hidden rounded-2xl border border-sand-100/20 bg-sand-50 p-6 text-ink-950">
            <svg viewBox="0 0 200 60" className="absolute inset-x-0 top-0 h-12 w-full" preserveAspectRatio="none" aria-hidden="true">
              <path className="fs-flow" d="M0 40C50 10 90 50 200 20" fill="none" stroke="#c17f3e" strokeWidth="1.5" />
              <path className="fs-flow" d="M0 20C60 50 120 0 200 40" fill="none" stroke="#5b7d8f" strokeWidth="1.5" />
            </svg>
            <p className="relative mt-6 font-mono text-xs tracking-[0.18em] text-ink-500">ONE RESTORATION PLAN</p>
            <ol className="relative mt-4 space-y-2 text-sm">
              <li><span className="font-mono text-xs text-ink-400">1 </span>Assess fire, smoke and water together</li>
              <li><span className="font-mono text-xs text-ink-400">2 </span>Extract water and dry materials</li>
              <li><span className="font-mono text-xs text-ink-400">3 </span>Clean and treat odor</li>
              <li><span className="font-mono text-xs text-ink-400">4 </span>Remove what can&rsquo;t be kept</li>
              <li><span className="font-mono text-xs text-ink-400">5 </span>Repair and finish</li>
            </ol>
          </div>
        </div>

        <p className="mt-10 max-w-2xl text-sm leading-relaxed text-ink-300">
          If water has spread beyond the fire-affected area, or you&rsquo;re
          seeing damp patches days later, our{" "}
          <Link href="/water-leak-repair/" className="focus-ring rounded-sm font-semibold text-sand-50 underline decoration-glass-500 decoration-2 underline-offset-4 hover:text-glass-300">
            water damage and leak repair
          </Link>{" "}
          team can trace where it&rsquo;s gone, and{" "}
          <Link href="/waterproofing/" className="focus-ring rounded-sm font-semibold text-sand-50 underline decoration-glass-500 decoration-2 underline-offset-4 hover:text-glass-300">
            waterproofing
          </Link>{" "}
          can help where wet areas need protection afterwards.
        </p>
      </div>
    </section>
  );
}
