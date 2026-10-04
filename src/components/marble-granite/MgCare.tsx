import { mgCare, mgMistakes } from "@/lib/marble-granite";
import MgIcon from "./MgIcon";

export default function MgCare() {
  return (
    <section aria-label="Maintenance and common mistakes" className="border-b border-ink-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="rounded-2xl bg-concrete-100/70 p-6 sm:p-8">
            <MgIcon name="sparkle" className="h-8 w-8 text-concrete-700" />
            <h2 className="mt-3 font-serif text-3xl tracking-tight text-ink-950">How to keep your stone looking better after polishing</h2>
            <ul className="mt-5 space-y-2">
              {mgCare.map((c) => <li key={c} className="flex gap-2 text-sm text-ink-800"><MgIcon name="check" className="mt-0.5 h-4 w-4 flex-none text-concrete-700" />{c}</li>)}
            </ul>
          </div>
        </div>
        <div className="lg:col-span-7">
          <h2 className="font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">Common marble &amp; granite polishing mistakes</h2>
          <ol className="mt-6 grid gap-3 sm:grid-cols-2">
            {mgMistakes.map((m, i) => (
              <li key={m.title} className="flex gap-3 rounded-2xl border border-ink-900/10 p-4">
                <span className="flex h-7 w-7 flex-none items-center justify-center rounded-full bg-rust-100 font-mono text-xs font-bold text-rust-700">{i + 1}</span>
                <div>
                  <h3 className="font-semibold text-ink-950">{m.title}</h3>
                  <p className="mt-0.5 text-sm text-ink-600">{m.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
