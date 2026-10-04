import { mdPath, mdTerms } from "@/lib/mold-damp";
import { Spec, Ticks } from "./MdUi";

// Moisture path (source → mold/odour/staining) and the three terms people mix up.
export default function MdPath() {
  return (
    <section aria-labelledby="md-path" className="bg-sand-50 py-20 sm:py-28">
      <div className="container-edge">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Spec code="S-03">Moisture path</Spec>
            <h2 id="md-path" className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-5xl">How a hidden source becomes a visible mark</h2>
            <p className="mt-5 text-[15px] leading-relaxed text-ink-600">
              Moisture travels. It can enter at one point, soak through plaster
              and masonry, and appear somewhere else entirely. That&rsquo;s why the
              visible mark doesn&rsquo;t always identify the original source — and
              why treating only the surface often isn&rsquo;t enough.
            </p>
          </div>

          <ol className="relative lg:col-span-7">
            <span aria-hidden="true" className="absolute bottom-6 left-[19px] top-6 w-px bg-gradient-to-b from-glass-600 via-glass-500 to-clay-500" />
            {mdPath.map((p, i) => (
              <li key={p.step} className="relative flex items-start gap-5 pb-6 last:pb-0">
                <span aria-hidden="true" className="md-step relative z-10 flex h-10 w-10 flex-none items-center justify-center rounded-full border border-glass-700/30 bg-sand-50 font-mono text-xs text-glass-800" style={{ animationDelay: `${i * 0.5}s` }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className={`flex-1 rounded-xl border px-5 py-3.5 ${i === mdPath.length - 1 ? "border-clay-500/40 bg-clay-100" : "border-ink-900/10 bg-glass-100/60"}`}>
                  <p className="font-semibold text-ink-950">{p.step}</p>
                  <p className="text-sm text-ink-600">{p.note}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-24">
          <h3 className="max-w-3xl font-serif text-2xl tracking-tight text-ink-950 sm:text-4xl">Mold vs dampness vs water damage</h3>
          <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-ink-600">These conditions can overlap, but they are not interchangeable terms.</p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {mdTerms.map((t) => (
              <article key={t.term} className="relative bg-glass-100/50 p-6">
                <Ticks />
                <h4 className="font-serif text-2xl text-ink-950">{t.term}</h4>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-800">{t.def}</p>
                <dl className="mt-5 space-y-3 border-t border-glass-700/15 pt-4 text-sm">
                  <div>
                    <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-glass-700">Typically from</dt>
                    <dd className="mt-0.5 text-ink-700">{t.from}</dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-glass-700">What it can look like</dt>
                    <dd className="mt-0.5 text-ink-700">{t.looks}</dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
