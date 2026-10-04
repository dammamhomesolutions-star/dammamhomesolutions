import { cbMistakes, cbPro, cbProblems } from "@/lib/curtain-blind";
import CbIcon from "./CbIcon";

export default function CbProblems() {
  return (
    <section aria-label="Common problems, mistakes and when to get help" className="border-b border-ink-900/10 bg-clay-100/50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-clay-700">Troubleshooting</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">Common curtain &amp; blind installation problems</h2>
        </div>
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {cbProblems.map((p) => (
            <div key={p.title} className="rounded-2xl bg-sand-50 p-5 ring-1 ring-ink-900/10">
              <h3 className="font-semibold text-ink-950">{p.title}</h3>
              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.12em] text-clay-700">Possible causes</p>
              <ul className="mt-2 space-y-1 text-sm text-ink-700">{p.causes.map((c) => <li key={c}>{c}</li>)}</ul>
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm text-ink-600">Already installed and not working right? We can re-hang, adjust or refit existing curtains and blinds.</p>

        <div className="mt-16 grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="font-serif text-3xl tracking-tight text-ink-950">Common curtain &amp; blind installation mistakes</h2>
            <ul className="mt-6 grid gap-2 sm:grid-cols-2">
              {cbMistakes.map((m) => (
                <li key={m} className="flex gap-3 rounded-xl bg-sand-50 p-3.5 text-sm text-ink-800 ring-1 ring-ink-900/10">
                  <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-rust-100 text-[11px] font-bold text-rust-700" aria-hidden="true">✕</span>
                  {m}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-ink-950 p-6 text-sand-50 sm:p-8">
              <h2 className="font-serif text-2xl tracking-tight sm:text-3xl">DIY or professional installation?</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-300">
                A simple tension rod or a stick-on blind is easy to do yourself.
                Professional installation is especially useful with:
              </p>
              <ul className="mt-4 grid grid-cols-2 gap-x-3 gap-y-1.5">
                {cbPro.map((p) => (
                  <li key={p} className="flex gap-2 text-sm text-sand-100"><CbIcon name="check" className="mt-0.5 h-4 w-4 flex-none text-clay-300" />{p}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
