import { rrChecklist, rrQuestions } from "@/lib/roof-replacement";
import RrIcon from "./RrIcon";

const durationFactors = [
  "Roof size",
  "Roof system",
  "Existing damage",
  "How much has to be removed",
  "Weather",
  "Material availability",
  "Access",
  "Repairs to the base",
  "Overall complexity",
];

export default function RrPlanning() {
  return (
    <section aria-label="Planning a roof replacement" className="border-b border-ink-900/10 bg-sand-100/60 py-20 sm:py-24">
      <div className="container-edge grid gap-14 lg:grid-cols-12">
        {/* How long */}
        <div className="lg:col-span-5">
          <p className="section-label !text-teal-700">Timeline</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950">How long does a roof replacement take?</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-600">
            It depends on the project, so we don&rsquo;t promise a number of
            days before seeing the roof. A realistic timeline is part of the
            agreed scope. What affects it:
          </p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {durationFactors.map((f) => (
              <li key={f} className="flex items-center gap-1.5 rounded-full border border-ink-900/15 bg-sand-50 px-3 py-1 text-xs text-ink-700">
                <RrIcon name="calendar" className="h-3.5 w-3.5 text-teal-700" />
                {f}
              </li>
            ))}
          </ul>

          <h2 className="mt-14 font-serif text-3xl tracking-tight text-ink-950">How to prepare for roof replacement</h2>
          <ul className="mt-6 space-y-3">
            {rrChecklist.map((c) => (
              <li key={c} className="flex items-start gap-3 text-sm text-ink-800">
                <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded border border-ink-900/25 bg-sand-50 text-teal-700">
                  <RrIcon name="check" className="h-3.5 w-3.5" />
                </span>
                {c}
              </li>
            ))}
          </ul>
        </div>

        {/* Questions to ask */}
        <div className="lg:col-span-7">
          <div className="rounded-2xl bg-sand-50 p-6 ring-1 ring-ink-900/10 sm:p-8">
            <p className="section-label !text-ember-700">Before you approve a quote</p>
            <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950">7 questions to ask before replacing your roof</h2>
            <ol className="mt-8 space-y-6">
              {rrQuestions.map((q, i) => (
                <li key={q.q} className="grid grid-cols-[2.5rem_1fr] gap-2">
                  <span className="font-serif text-2xl leading-none text-ember-700">{i + 1}</span>
                  <div>
                    <h3 className="text-base font-semibold text-ink-950">{q.q}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-ink-600">{q.why}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
