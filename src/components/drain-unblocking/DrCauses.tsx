import { drCauses, drRecurring } from "@/lib/drain-unblocking";
import DrIcon from "./DrIcon";

export default function DrCauses() {
  return (
    <section aria-label="What causes blocked drains and why they come back" className="border-b border-ink-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-teal-700">Causes</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">What causes blocked drains?</h2>
        </div>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {drCauses.map((c) => (
            <li key={c.title} className="group flex gap-4 rounded-2xl border border-ink-900/10 bg-concrete-100/40 p-5">
              <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-sand-50 text-teal-700 ring-1 ring-ink-900/10">
                <DrIcon name={c.icon} className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-base font-semibold text-ink-950">{c.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-ink-600">{c.body}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-16 grid gap-8 rounded-2xl bg-ink-950 p-6 text-sand-50 sm:p-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="section-label !text-teal-300">Recurring blockages</p>
            <h2 className="mt-4 font-serif text-3xl tracking-tight">The drain keeps blocking again. Why?</h2>
            <p className="mt-5 rounded-xl border-l-4 border-teal-300 bg-sand-50/5 px-4 py-3 text-[15px] leading-relaxed text-sand-100">
              If a drain repeatedly blocks after being cleared, the goal should
              be to understand why — not simply clear the same blockage again
              and again.
            </p>
          </div>
          <ul className="grid grid-cols-2 gap-2 text-sm lg:col-span-7">
            {drRecurring.map((r) => (
              <li key={r} className="flex items-center gap-2 rounded-xl bg-sand-50/5 px-3 py-2.5">
                <DrIcon name="search" className="h-4 w-4 flex-none text-teal-300" />
                {r}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
