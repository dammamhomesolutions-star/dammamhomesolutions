import { mdSpecialist, mdWeDo } from "@/lib/mold-damp";
import { Spec } from "./MdUi";

// What we do, what needs a specialist, and a brief, non-alarmist health note.
export default function MdBoundaries() {
  return (
    <section id="specialists" aria-labelledby="md-bound" className="scroll-mt-20 bg-sand-50 py-20 sm:py-28">
      <div className="container-edge">
        <Spec code="S-17">Scope &amp; specialists</Spec>
        <h2 id="md-bound" className="mt-4 max-w-3xl font-serif text-3xl tracking-tight text-ink-950 sm:text-5xl">What we handle — and when a specialist is needed</h2>
        <div className="mt-12 grid gap-5 lg:grid-cols-12">
          <div className="rounded-2xl border border-glass-700/20 bg-glass-100/60 p-6 sm:p-8 lg:col-span-5">
            <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-glass-700">Within our scope</h3>
            <ul className="mt-4 space-y-2.5">
              {mdWeDo.map((w) => (
                <li key={w} className="flex gap-3 text-[15px] text-ink-800">
                  <span aria-hidden="true" className="mt-1 flex h-4 w-4 flex-none items-center justify-center rounded-full bg-glass-800 text-[9px] text-sand-50">✓</span>
                  {w}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-7">
            <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-500">Needs a specialist or is outside our scope</h3>
            <dl className="mt-4 divide-y divide-ink-900/10 border-y border-ink-900/10">
              {mdSpecialist.map((s) => (
                <div key={s.label} className="py-4">
                  <dt className="font-semibold text-ink-950">{s.label}</dt>
                  <dd className="mt-1 text-sm leading-relaxed text-ink-700">{s.text}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-6 rounded-xl border border-ink-900/10 bg-concrete-100 p-5 text-sm leading-relaxed text-ink-700">
              <span className="font-semibold text-ink-950">A note on health. </span>
              Persistent indoor dampness and visible mold can be undesirable
              indoor-environment conditions. If anyone in the home has health
              concerns, they should consult an appropriate healthcare professional.
              Our work is building treatment and repair — not medical advice.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
