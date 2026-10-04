import { rrSymptoms } from "@/lib/roof-replacement";
import RrIcon from "./RrIcon";

export default function RrSymptoms() {
  return (
    <section aria-labelledby="rr-symptoms" className="border-b border-ink-900/10 bg-sand-100/60 py-20 sm:py-24">
      <div className="container-edge">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="section-label !text-teal-700">Signs to look for</p>
            <h2 id="rr-symptoms" className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
              Is your roof telling you it&rsquo;s time for replacement?
            </h2>
          </div>
          <p className="flex items-start gap-3 rounded-xl border border-teal-600/30 bg-teal-100/70 px-4 py-3 text-sm font-medium leading-relaxed text-teal-900 lg:col-span-5">
            <RrIcon name="alert" className="mt-0.5 h-5 w-5 flex-none" />
            A leak does not automatically mean the entire roof needs replacement.
          </p>
        </div>

        <div className="mt-10 overflow-hidden rounded-2xl border border-ink-900/10 bg-sand-50">
          <div className="hidden grid-cols-[1fr_1.3fr_1.3fr] gap-6 border-b border-ink-900/10 bg-sand-100 px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-500 md:grid" aria-hidden="true">
            <span>What you see</span>
            <span>What it may mean</span>
            <span>What to do</span>
          </div>
          <ul className="divide-y divide-ink-900/10">
            {rrSymptoms.map((s) => (
              <li key={s.see} className="grid gap-2 px-6 py-5 md:grid-cols-[1fr_1.3fr_1.3fr] md:gap-6">
                <h3 className="text-[15px] font-semibold text-ink-950">{s.see}</h3>
                <p className="text-sm leading-relaxed text-ink-700">
                  <span className="font-semibold text-ink-500 md:hidden">May mean: </span>
                  {s.mean}
                </p>
                <p className="flex gap-2 text-sm leading-relaxed text-ink-700">
                  <RrIcon name="arrow" className="mt-0.5 h-4 w-4 flex-none text-teal-700" />
                  <span>
                    <span className="font-semibold text-ink-500 md:hidden">What to do: </span>
                    {s.todo}
                  </span>
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
