import { wpPrep, wpQuestions, wpScope } from "@/lib/water-pump";
import WpIcon from "./WpIcon";

export default function WpPrep() {
  return (
    <section aria-label="Before the technician arrives, questions and scope" className="border-b border-ink-900/10 bg-glass-100/50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="section-label !text-glass-700">Before we arrive</p>
            <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950">Before the technician arrives</h2>
            <ul className="mt-6 space-y-2.5 text-sm text-ink-800">
              {wpPrep.map((p) => (
                <li key={p} className="flex gap-3">
                  <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded border border-ink-900/25 bg-sand-50 text-glass-700">
                    <WpIcon name="check" className="h-3.5 w-3.5" />
                  </span>
                  {p}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-ink-500">Please don&rsquo;t open electrical panels or covers.</p>
          </div>
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-sand-50 p-6 ring-1 ring-ink-900/10 sm:p-8">
              <p className="section-label !text-glass-700">Buying guidance</p>
              <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950">Questions to ask a water pump company</h2>
              <ol className="mt-6 grid gap-3 sm:grid-cols-2">
                {wpQuestions.map((q, i) => (
                  <li key={q} className="flex gap-3 text-sm text-ink-800">
                    <span className="font-serif text-lg leading-none text-glass-700">{i + 1}</span>
                    {q}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>

        <h2 className="mt-16 font-serif text-3xl tracking-tight text-ink-950">What we do</h2>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {wpScope.map((s) => (
            <li key={s.service} className="rounded-2xl border border-ink-900/10 bg-sand-50 p-5">
              <h3 className="text-base font-semibold text-ink-950">{s.service}</h3>
              <p className="mt-1 text-sm text-ink-600">{s.purpose}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
