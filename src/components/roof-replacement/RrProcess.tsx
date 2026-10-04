import { rrProcess } from "@/lib/roof-replacement";
import RrReveal from "./RrReveal";

export default function RrProcess() {
  return (
    <section aria-labelledby="rr-process" className="border-b border-ink-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="section-label !text-teal-700">The work</p>
            <h2 id="rr-process" className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
              What happens during a roof replacement?
            </h2>
          </div>
          <p className="text-[15px] leading-relaxed text-ink-600 lg:col-span-5">
            A typical workflow. The exact sequence varies with the roof type
            and what is found once old layers come off.
          </p>
        </div>

        {/* Three phases, twelve steps */}
        <ol className="mt-12 grid gap-x-8 gap-y-2 md:grid-cols-3">
          {[0, 1, 2].map((phase) => (
            <li key={phase} className="list-none">
              <p className="mb-4 border-b-2 border-ink-950 pb-2 text-xs font-semibold uppercase tracking-[0.16em] text-ink-950">
                {["Prepare", "Rebuild", "Finish"][phase]}
              </p>
              <ol className="space-y-5">
                {rrProcess.slice(phase * 4, phase * 4 + 4).map((s, i) => {
                  const n = phase * 4 + i + 1;
                  return (
                    <RrReveal key={s.title} delay={i * 0.06} className="flex gap-4">
                      <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full border border-teal-700/40 font-mono text-xs text-teal-800">
                        {String(n).padStart(2, "0")}
                      </span>
                      <div>
                        <h3 className="text-[15px] font-semibold text-ink-950">{s.title}</h3>
                        <p className="mt-1 text-sm leading-relaxed text-ink-600">{s.body}</p>
                      </div>
                    </RrReveal>
                  );
                })}
              </ol>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
