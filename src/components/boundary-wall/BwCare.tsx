import { bwCare, bwDont } from "@/lib/boundary-wall";
import BwIcon from "./BwIcon";

export default function BwCare() {
  return (
    <section aria-label="Maintenance and what not to do" className="border-b border-ink-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl bg-clay-100/60 p-6 sm:p-8">
          <BwIcon name="check" className="h-8 w-8 text-clay-700" />
          <h2 className="mt-3 font-serif text-3xl tracking-tight text-ink-950">How to reduce future exterior wall problems</h2>
          <ul className="mt-5 space-y-2">{bwCare.map((c) => <li key={c} className="flex gap-2 text-sm text-ink-800"><BwIcon name="check" className="mt-0.5 h-4 w-4 flex-none text-clay-700" />{c}</li>)}</ul>
        </div>
        <div className="rounded-2xl border border-ink-900/10 p-6 sm:p-8">
          <BwIcon name="alert" className="h-8 w-8 text-rust-700" />
          <h2 className="mt-3 font-serif text-3xl tracking-tight text-ink-950">Before you patch the wall</h2>
          <ul className="mt-5 space-y-2">
            {bwDont.map((d) => (
              <li key={d} className="flex gap-3 text-sm text-ink-800">
                <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-rust-100 text-[11px] font-bold text-rust-700" aria-hidden="true">✕</span>
                <span>Don&rsquo;t {d.charAt(0).toLowerCase() + d.slice(1)}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
