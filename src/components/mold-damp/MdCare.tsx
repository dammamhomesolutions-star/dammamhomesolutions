import { mdAfter, mdBefore } from "@/lib/mold-damp";
import { Spec } from "./MdUi";

// Safe steps before an assessment, and general prevention after treatment.
export default function MdCare() {
  return (
    <section aria-labelledby="md-care" className="border-t border-ink-900/10 bg-glass-100/60 py-20 sm:py-28">
      <div className="container-edge">
        <Spec code="S-16">Before &amp; after</Spec>
        <h2 id="md-care" className="mt-4 max-w-3xl font-serif text-3xl tracking-tight text-ink-950 sm:text-5xl">What you can do — before and after treatment</h2>
        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          <div className="rounded-2xl border border-ink-900/10 bg-sand-50 p-6 sm:p-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-glass-700">Right now</p>
            <h3 className="mt-2 font-serif text-2xl text-ink-950">Before professional assessment</h3>
            <ul className="mt-5 space-y-3">
              {mdBefore.map((x, i) => (
                <li key={x} className="flex gap-3 text-[15px] text-ink-800">
                  <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full border border-glass-700/40 font-mono text-[10px] text-glass-800">{i + 1}</span>
                  {x}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs leading-relaxed text-ink-500">Please don&rsquo;t try to strip or scrub large areas of growth yourself, or use strong chemicals. Leave extensive growth for the assessment.</p>
          </div>
          <div className="rounded-2xl bg-glass-900 p-6 text-sand-50 sm:p-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-glass-300">After treatment</p>
            <h3 className="mt-2 font-serif text-2xl">Reduce the chance of recurrence</h3>
            <ul className="mt-5 space-y-3">
              {mdAfter.map((x) => (
                <li key={x} className="flex gap-3 text-[15px] text-glass-100">
                  <span aria-hidden="true" className="mt-2.5 h-px w-4 flex-none bg-glass-300" />
                  {x}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs leading-relaxed text-glass-300">No treatment can promise that damp or mold will never return — keeping moisture under control is what makes the difference.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
