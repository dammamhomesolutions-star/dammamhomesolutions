import { aiPrep, aiQuestions } from "@/lib/ac-installation";
import AiIcon from "./AiIcon";

export default function AiPrepQuestions() {
  return (
    <section aria-label="Preparing for installation and questions to ask" className="border-b border-ink-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="section-label !text-teal-700">Before the day</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950">How to prepare for AC installation</h2>
          <ul className="mt-6 space-y-3 text-sm text-ink-800">
            {aiPrep.map((p) => (
              <li key={p} className="flex gap-3">
                <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded border border-ink-900/25 text-teal-700">
                  <AiIcon name="check" className="h-3.5 w-3.5" />
                </span>
                {p}
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm text-ink-600">Please don&rsquo;t disconnect electrical circuits or move the old unit yourself.</p>
        </div>
        <div className="lg:col-span-7">
          <div className="rounded-2xl bg-teal-100/60 p-6 sm:p-8">
            <p className="section-label !text-teal-700">Buying guidance</p>
            <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950">7 questions to ask before installing an AC</h2>
            <ol className="mt-8 space-y-4">
              {aiQuestions.map((q, i) => (
                <li key={q} className="grid grid-cols-[2.5rem_1fr] items-baseline gap-2">
                  <span className="font-serif text-2xl text-teal-700">{i + 1}</span>
                  <h3 className="text-base font-medium text-ink-950">{q}</h3>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
