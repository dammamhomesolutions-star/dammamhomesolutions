import { dkMistakes, dkPrep, dkQuestions } from "@/lib/ac-duct-cleaning";
import DkIcon from "./DkIcon";

export default function DkPrepMistakes() {
  return (
    <section aria-label="Preparation, mistakes and questions to ask" className="border-b border-ink-900/10 bg-steel-100/60 py-20 sm:py-24">
      <div className="container-edge">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="section-label !text-copper-700">Before we arrive</p>
            <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950">What to do before the technician arrives</h2>
            <ul className="mt-6 space-y-3 text-sm text-ink-800">
              {dkPrep.map((p) => (
                <li key={p} className="flex gap-3">
                  <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded border border-ink-900/25 bg-sand-50 text-copper-700">
                    <DkIcon name="check" className="h-3.5 w-3.5" />
                  </span>
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-sand-50 p-6 ring-1 ring-ink-900/10 sm:p-8">
              <p className="section-label !text-copper-700">Buying guidance</p>
              <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950">Questions to ask a duct cleaning company</h2>
              <ol className="mt-6 grid gap-3 sm:grid-cols-2">
                {dkQuestions.map((q, i) => (
                  <li key={q} className="flex gap-3 text-sm text-ink-800">
                    <span className="font-serif text-lg leading-none text-copper-700">{i + 1}</span>
                    {q}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>

        <h2 className="mt-16 font-serif text-3xl tracking-tight text-ink-950">Avoid these mistakes</h2>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {dkMistakes.map((m) => (
            <li key={m.title} className="rounded-2xl border border-ink-900/10 bg-sand-50 p-5">
              <DkIcon name="alert" className="h-5 w-5 text-rust-700" />
              <h3 className="mt-3 text-[15px] font-semibold leading-snug text-ink-950">Don&rsquo;t {m.title.charAt(0).toLowerCase() + m.title.slice(1)}</h3>
              <p className="mt-1.5 text-sm text-ink-600">{m.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
