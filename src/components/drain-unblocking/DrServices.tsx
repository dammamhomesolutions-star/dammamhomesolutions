import { drServices, drSewerSteps, drUnblockSteps } from "@/lib/drain-unblocking";
import DrIcon from "./DrIcon";

function Steps({ steps, dark }: { steps: { title: string; body: string }[]; dark?: boolean }) {
  return (
    <ol className="relative mt-6 space-y-4">
      <span aria-hidden="true" className={`absolute bottom-3 left-[15px] top-3 w-px ${dark ? "bg-teal-300/40" : "bg-teal-600/40"}`} />
      {steps.map((s, i) => (
        <li key={s.title} className="relative flex gap-4">
          <span className={`relative z-10 flex h-8 w-8 flex-none items-center justify-center rounded-full font-mono text-xs ${dark ? "bg-teal-300 text-ink-950" : "border border-teal-600/50 bg-sand-50 text-teal-800"}`}>
            {i + 1}
          </span>
          <div>
            <h3 className="text-[15px] font-semibold">{s.title}</h3>
            <p className={`mt-0.5 text-sm leading-relaxed ${dark ? "text-ink-300" : "text-ink-600"}`}>{s.body}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

export default function DrServices() {
  return (
    <section id="services" aria-label="Services and processes" className="border-b border-ink-900/10 bg-concrete-100/50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-teal-700">Which service?</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">Unblocking, cleaning, inspection or repair?</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-600">They overlap, but they aren&rsquo;t interchangeable — and we provide all six.</p>
        </div>
        <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {drServices.map((s) => (
            <li key={s.service} className="rounded-2xl border border-ink-900/10 bg-sand-50 p-5">
              <h3 className="text-base font-semibold text-ink-950">{s.service}</h3>
              <p className="mt-1 text-sm text-ink-600">{s.purpose}</p>
            </li>
          ))}
        </ul>

        {/* Cleaning won't fix damage */}
        <div className="mt-12 grid gap-6 rounded-2xl bg-sand-50 p-6 ring-1 ring-ink-900/10 sm:p-8 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <DrIcon name="repair" className="h-7 w-7 text-ember-700" />
            <h2 className="mt-3 font-serif text-3xl tracking-tight text-ink-950">Cleaning won&rsquo;t fix a damaged pipe</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-600">
              Cleaning deals with blockages and build-up. If the pipe itself is
              damaged, the next step is repair or replacement — not clearing it
              again every few weeks.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
            <div className="rounded-xl bg-teal-100/60 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-teal-800">Cleaning addresses</p>
              <p className="mt-2 text-sm text-ink-800">Blockages and build-up</p>
            </div>
            <div className="rounded-xl bg-ember-100/60 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-ember-900">Repair addresses</p>
              <p className="mt-2 text-sm text-ink-800">Cracks, breaks, collapsed sections, displaced joints, damaged pipe and structural defects</p>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl bg-ink-950 p-6 text-sand-50 sm:p-8">
            <div className="flex items-center gap-3 text-teal-300">
              <DrIcon name="drain" />
              <p className="section-label !text-teal-300">Drains</p>
            </div>
            <h2 className="mt-3 font-serif text-3xl tracking-tight">How drain unblocking works</h2>
            <Steps steps={drUnblockSteps} dark />
          </div>
          <div className="rounded-2xl border border-ink-900/10 bg-sand-50 p-6 text-ink-950 sm:p-8">
            <div className="flex items-center gap-3 text-teal-700">
              <DrIcon name="sewer" />
              <p className="section-label !text-teal-700">Sewer lines</p>
            </div>
            <h2 className="mt-3 font-serif text-3xl tracking-tight">How sewer line cleaning works</h2>
            <Steps steps={drSewerSteps} />
          </div>
        </div>
      </div>
    </section>
  );
}
