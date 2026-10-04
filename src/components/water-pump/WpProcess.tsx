import { wpInstallSteps, wpRepairSteps, wpSelection } from "@/lib/water-pump";
import WpIcon from "./WpIcon";
import WpCtas from "./WpCtas";

function Steps({ steps, dark }: { steps: { title: string; body: string }[]; dark?: boolean }) {
  return (
    <ol className="relative mt-6 space-y-4">
      <span aria-hidden="true" className={`absolute bottom-3 left-[15px] top-3 w-px ${dark ? "bg-glass-300/40" : "bg-glass-600/40"}`} />
      {steps.map((s, i) => (
        <li key={s.title} className="relative flex gap-4">
          <span className={`relative z-10 flex h-8 w-8 flex-none items-center justify-center rounded-full font-mono text-xs ${dark ? "bg-glass-300 text-ink-950" : "border border-glass-600/50 bg-sand-50 text-glass-800"}`}>
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

export default function WpProcess() {
  return (
    <section id="process" aria-label="Repair, replacement and installation" className="border-b border-ink-900/10 bg-glass-100/50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl bg-ink-950 p-6 text-sand-50 sm:p-8">
            <div className="flex items-center gap-3 text-glass-300"><WpIcon name="repair" /><p className="section-label !text-glass-300">Repair</p></div>
            <h2 className="mt-3 font-serif text-3xl tracking-tight">How our water pump repair process works</h2>
            <Steps steps={wpRepairSteps} dark />
          </div>
          <div className="rounded-2xl border border-ink-900/10 bg-sand-50 p-6 sm:p-8">
            <h2 className="font-serif text-3xl tracking-tight text-ink-950">Should you repair or replace the water pump?</h2>
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <div className="rounded-xl bg-moss-100 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-moss-800">Repair may make sense when</p>
                <ul className="mt-3 space-y-1.5 text-sm text-moss-900">
                  {["The fault is localised", "The part is replaceable", "The pump is otherwise in good condition", "Repair is practical"].map((x) => <li key={x}>{x}</li>)}
                </ul>
              </div>
              <div className="rounded-xl bg-rust-100/70 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-rust-700">Replacement may make sense when</p>
                <ul className="mt-3 space-y-1.5 text-sm text-ink-800">
                  {["Major mechanical failure", "Severe corrosion or damage", "Repeated failures", "The pump doesn't suit the system", "Repair is no longer economical", "Requirements have changed"].map((x) => <li key={x}>{x}</li>)}
                </ul>
              </div>
            </div>
            <p className="mt-5 text-sm text-ink-600">There&rsquo;s no fixed age or rule — the pump&rsquo;s condition and the system decide.</p>
          </div>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="font-serif text-3xl tracking-tight text-ink-950">Replacing a water pump? Match it to the system.</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-600">
              Don&rsquo;t choose a pump on horsepower alone. A pump that&rsquo;s
              too small won&rsquo;t keep up; one that&rsquo;s too big can cycle,
              strain the pipework and still be limited by the supply. We can
              supply a suitable pump or fit one you&rsquo;ve bought, once
              we&rsquo;ve confirmed it suits the system.
            </p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {wpSelection.map((s) => (
                <li key={s} className="rounded-full bg-sand-50 px-3 py-1 text-xs text-ink-800 ring-1 ring-ink-900/10">{s}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-ink-900/10 bg-sand-50 p-6 sm:p-8 lg:col-span-7">
            <div className="flex items-center gap-3 text-glass-700"><WpIcon name="install" /><p className="section-label !text-glass-700">Installation</p></div>
            <h2 className="mt-3 font-serif text-3xl tracking-tight text-ink-950">Water pump installation</h2>
            <Steps steps={wpInstallSteps} />
          </div>
        </div>
        <WpCtas className="mt-10" />
      </div>
    </section>
  );
}
