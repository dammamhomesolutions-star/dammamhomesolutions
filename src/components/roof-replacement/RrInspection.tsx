import { rrInspection } from "@/lib/roof-replacement";
import RrIcon from "./RrIcon";
import RrReveal from "./RrReveal";
import RrCtas from "./RrCtas";

export default function RrInspection() {
  return (
    <section id="inspection" aria-labelledby="rr-inspection" className="border-b border-ink-900/10 bg-ink-950 py-20 text-sand-50 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-teal-300">Inspection first</p>
          <h2 id="rr-inspection" className="mt-4 font-serif text-3xl tracking-tight sm:text-4xl">
            How we assess a roof before recommending replacement
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-300">
            Replacement is the last answer, not the first. Every
            recommendation follows the same order.
          </p>
        </div>

        <ol className="relative mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 xl:gap-4">
          <span aria-hidden="true" className="absolute left-6 right-6 top-6 hidden h-px bg-gradient-to-r from-teal-500 via-ink-600 to-ink-700 xl:block" />
          {rrInspection.map((s, i) => (
            <RrReveal key={s.title} delay={i * 0.07} className="relative">
              <span className="group relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-teal-500/60 bg-ink-950 text-teal-300">
                <RrIcon name={s.icon} className="h-5 w-5" />
              </span>
              <p className="mt-5 font-mono text-[11px] tracking-[0.14em] text-ink-400">STEP {i + 1}</p>
              <h3 className="mt-1 text-base font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-300">{s.body}</p>
            </RrReveal>
          ))}
        </ol>

        <RrCtas tone="dark" className="mt-14" />
      </div>
    </section>
  );
}
