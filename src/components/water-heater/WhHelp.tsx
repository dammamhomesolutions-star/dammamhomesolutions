import { whBeforeCall, whMaintain, whQuestions } from "@/lib/water-heater";
import WhIcon from "./WhIcon";

export default function WhHelp() {
  return (
    <section aria-label="Maintenance, before you call, and questions to ask" className="border-b border-ink-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <p className="section-label !text-rust-700">Prevention</p>
            <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950">How to reduce water heater problems</h2>
            <ul className="mt-6 space-y-2.5 text-sm text-ink-800">
              {whMaintain.map((m) => (
                <li key={m} className="flex gap-2">
                  <WhIcon name="check" className="mt-0.5 h-4 w-4 flex-none text-moss-700" />
                  {m}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-ink-600">Draining, flushing and internal checks are best left to a technician.</p>
          </div>
          <div className="rounded-2xl bg-ember-100/50 p-6 sm:p-8 lg:col-span-7">
            <p className="section-label !text-rust-700">Before you call</p>
            <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950">What to note down</h2>
            <p className="mt-2 text-sm text-ink-600">These answers help us diagnose faster and quote more accurately.</p>
            <ol className="mt-6 grid gap-2.5 sm:grid-cols-2">
              {whBeforeCall.map((b, i) => (
                <li key={b} className="flex gap-3 text-sm text-ink-800">
                  <span className="font-mono text-xs text-rust-700">{String(i + 1).padStart(2, "0")}</span>
                  {b}
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="mt-14 rounded-2xl border border-ink-900/10 bg-sand-100/50 p-6 sm:p-8">
          <h2 className="font-serif text-3xl tracking-tight text-ink-950">Questions to ask a water heater company</h2>
          <ol className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {whQuestions.map((q, i) => (
              <li key={q} className="flex gap-3 text-sm text-ink-800">
                <span className="font-serif text-lg leading-none text-rust-700">{i + 1}</span>
                {q}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
