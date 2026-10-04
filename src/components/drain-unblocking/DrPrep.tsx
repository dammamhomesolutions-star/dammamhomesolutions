import { drPrep, drQuestions } from "@/lib/drain-unblocking";
import DrIcon from "./DrIcon";

export default function DrPrep() {
  return (
    <section aria-label="Before the technician arrives and questions to ask" className="border-b border-ink-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="section-label !text-teal-700">Before we arrive</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950">Before the technician arrives</h2>
          <ul className="mt-6 space-y-3 text-sm text-ink-800">
            {drPrep.map((p) => (
              <li key={p} className={`flex gap-3 ${p.includes("chemical") ? "rounded-xl bg-ember-100/70 p-2 font-medium" : ""}`}>
                <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded border border-ink-900/25 bg-sand-50 text-teal-700">
                  <DrIcon name="check" className="h-3.5 w-3.5" />
                </span>
                {p}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-ink-500">Telling us about drain chemicals is important for the technician&rsquo;s safety.</p>
        </div>
        <div className="lg:col-span-7">
          <div className="rounded-2xl bg-teal-100/50 p-6 sm:p-8">
            <p className="section-label !text-teal-700">Buying guidance</p>
            <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950">Questions to ask a drain service company</h2>
            <ol className="mt-6 grid gap-3 sm:grid-cols-2">
              {drQuestions.map((q, i) => (
                <li key={q} className="flex gap-3 text-sm text-ink-800">
                  <span className="font-serif text-lg leading-none text-teal-700">{i + 1}</span>
                  {q}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
