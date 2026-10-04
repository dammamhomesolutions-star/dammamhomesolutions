import { rnAssessChecks } from "@/lib/renovation";
import RnReadiness from "./RnReadiness";
import { Eyebrow } from "./RnUi";

// Pre-renovation assessment as an annotated survey sheet, plus readiness.
export default function RnAssess() {
  return (
    <section id="assessment" aria-labelledby="rn-assess" className="scroll-mt-20 border-t border-ink-950/10 bg-sand-100 py-20 sm:py-28">
      <div className="container-edge">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Eyebrow n="09">Pre-renovation assessment</Eyebrow>
            <h2 id="rn-assess" className="mt-5 font-serif text-4xl font-light tracking-tight text-ink-950 sm:text-5xl">Before choosing the finish, understand the home.</h2>
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-ink-600">
              New finishes are only as good as what&rsquo;s underneath. An assessment
              looks at the property as it is, so the scope reflects real
              conditions — not just how you&rsquo;d like the room to look.
            </p>

            <div className="relative mt-10 bg-sand-50 p-5 sm:p-8">
              <div aria-hidden="true" className="blueprint-grid pointer-events-none absolute inset-0 opacity-70" />
              <div className="relative flex items-center justify-between border-b border-ink-950/15 pb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-ink-500">
                <span>Survey sheet</span>
                <span>{rnAssessChecks.length} checks</span>
              </div>
              <ol className="relative mt-2 grid gap-x-8 sm:grid-cols-2">
                {rnAssessChecks.map((c, i) => (
                  <li key={c.label} className="flex gap-4 border-b border-dashed border-ink-950/15 py-3">
                    <span className="w-6 flex-none font-mono text-[11px] text-walnut-700">{String(i + 1).padStart(2, "0")}</span>
                    <span>
                      <span className="block text-sm font-semibold text-ink-950">{c.label}</span>
                      <span className="block text-xs leading-relaxed text-ink-600">{c.note}</span>
                    </span>
                  </li>
                ))}
              </ol>
            </div>
            <p className="mt-5 border-l-2 border-walnut-600 pl-4 text-sm leading-relaxed text-ink-700">
              This page doesn&rsquo;t replace an engineer&rsquo;s assessment. Where
              structural concerns are involved, a qualified structural engineer
              needs to assess the property — we don&rsquo;t carry out structural work.
            </p>
          </div>

          <div className="lg:col-span-5 lg:pt-24">
            <RnReadiness />
          </div>
        </div>
      </div>
    </section>
  );
}
