import { mgCanRestore, mgNeedsMore } from "@/lib/marble-granite";
import MgIcon from "./MgIcon";

export default function MgLimits() {
  return (
    <section aria-labelledby="mg-limits" className="border-b border-ink-900/10 bg-concrete-100/60 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-concrete-700">Honest expectations</p>
          <h2 id="mg-limits" className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">What can — and can&rsquo;t — be restored?</h2>
          <p className="mt-4 rounded-xl bg-sand-50 p-4 text-[15px] font-medium text-ink-900 ring-1 ring-ink-900/10">
            Polishing improves the surface; it does not automatically repair
            every form of stone damage.
          </p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl bg-sand-50 p-6 ring-1 ring-ink-900/10">
            <h3 className="flex items-center gap-2 font-semibold text-moss-800"><MgIcon name="check" className="h-5 w-5" /> Often suitable for treatment</h3>
            <ul className="mt-4 space-y-1.5 text-sm text-ink-800">{mgCanRestore.map((c) => <li key={c}>{c}</li>)}</ul>
          </div>
          <div className="rounded-2xl bg-ink-950 p-6 text-sand-50">
            <h3 className="flex items-center gap-2 font-semibold"><MgIcon name="alert" className="h-5 w-5 text-concrete-300" /> Needs further assessment</h3>
            <ul className="mt-4 space-y-1.5 text-sm text-ink-300">{mgNeedsMore.map((c) => <li key={c}>{c}</li>)}</ul>
            <p className="mt-4 text-xs text-ink-400">We repair chips and cracks; loose, hollow or broken stone may need re-laying or replacing.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
