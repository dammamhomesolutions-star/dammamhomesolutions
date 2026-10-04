import { aiExtra, aiProblems, aiScope, aiTesting } from "@/lib/ac-installation";
import AiIcon from "./AiIcon";

export default function AiScope() {
  return (
    <section aria-label="Scope, testing and warning signs" className="border-b border-ink-900/10 bg-teal-100/40 py-20 sm:py-24">
      <div className="container-edge">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl bg-sand-50 p-6 ring-1 ring-ink-900/10 sm:p-8">
            <h2 className="font-serif text-2xl tracking-tight text-ink-950 sm:text-3xl">What&rsquo;s included in an AC installation?</h2>
            <ul className="mt-6 grid gap-2 text-sm text-ink-800 sm:grid-cols-2">
              {aiScope.map((s) => (
                <li key={s} className="flex gap-2">
                  <AiIcon name="check" className="mt-0.5 h-4 w-4 flex-none text-teal-700" />
                  {s}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-xs uppercase tracking-[0.12em] text-ink-500">Actual scope depends on the AC model and site requirements.</p>
          </div>
          <div className="rounded-2xl border border-ink-900/10 bg-sand-100/60 p-6 sm:p-8">
            <h2 className="font-serif text-2xl tracking-tight text-ink-950 sm:text-3xl">When installation needs more than standard mounting</h2>
            <ul className="mt-6 grid gap-2 text-sm text-ink-800 sm:grid-cols-2">
              {aiExtra.map((s) => (
                <li key={s} className="flex gap-2">
                  <span className="mt-2 h-1 w-3 flex-none bg-ember-600" aria-hidden="true" />
                  {s}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm text-ink-600">These may affect the project scope and quotation.</p>
          </div>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-12">
          <div className="rounded-2xl bg-ink-950 p-6 text-sand-50 sm:p-8 lg:col-span-7">
            <h2 className="font-serif text-2xl tracking-tight sm:text-3xl">Installation isn&rsquo;t finished until the system is tested</h2>
            <ol className="mt-6 grid gap-2 sm:grid-cols-2">
              {aiTesting.map((t, i) => (
                <li key={t} className="flex items-center gap-3 rounded-xl bg-sand-50/5 px-3 py-2.5 text-sm">
                  <span className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-teal-300 font-mono text-[11px] text-ink-950">{i + 1}</span>
                  {t}
                </li>
              ))}
            </ol>
          </div>
          <div className="rounded-2xl border border-rust-600/30 bg-sand-50 p-6 sm:p-8 lg:col-span-5">
            <h2 className="font-serif text-2xl tracking-tight text-ink-950">Signs an AC installation may need attention</h2>
            <ul className="mt-5 space-y-2 text-sm text-ink-800">
              {aiProblems.map((p) => (
                <li key={p} className="flex gap-2">
                  <AiIcon name="alert" className="mt-0.5 h-4 w-4 flex-none text-rust-700" />
                  {p}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm leading-relaxed text-ink-600">
              Symptoms alone don&rsquo;t show the cause. If a newly installed
              system behaves unusually, stop using it if safety is a concern and
              contact a qualified technician.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
