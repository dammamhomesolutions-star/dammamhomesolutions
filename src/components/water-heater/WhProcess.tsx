import { whCapacity, whInstallSteps, whLocation, whReplaceSteps } from "@/lib/water-heater";
import WhIcon from "./WhIcon";

function Steps({ steps, dark }: { steps: { title: string; body: string }[]; dark?: boolean }) {
  return (
    <ol className="relative mt-6 space-y-4">
      <span aria-hidden="true" className={`absolute bottom-3 left-[15px] top-3 w-px ${dark ? "bg-ember-500/40" : "bg-rust-600/30"}`} />
      {steps.map((s, i) => (
        <li key={s.title} className="relative flex gap-4">
          <span
            className={`relative z-10 flex h-8 w-8 flex-none items-center justify-center rounded-full font-mono text-xs ${
              dark ? "bg-ember-500 text-ink-950" : "border border-rust-600/50 bg-sand-50 text-rust-700"
            }`}
          >
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

export default function WhProcess() {
  return (
    <section id="process" aria-label="Capacity, installation and replacement" className="border-b border-ink-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge">
        {/* Capacity */}
        <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6">
            <p className="section-label !text-rust-700">Capacity</p>
            <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">How much hot water does your property need?</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-600">
              A heater that&rsquo;s too small runs out at the worst moment; one
              that&rsquo;s too large costs more to buy and heat. There&rsquo;s no
              reliable &ldquo;X people = Y litres&rdquo; rule — the right
              capacity comes from looking at how hot water is actually used,
              especially how many showers run at the same time.
            </p>
          </div>
          <ul className="grid gap-2 sm:grid-cols-2 lg:col-span-6">
            {whCapacity.map((c) => (
              <li key={c} className="flex items-center gap-2 rounded-xl bg-ember-100/50 px-3 py-2.5 text-sm text-ink-800">
                <WhIcon name="hot" className="h-4 w-4 flex-none text-rust-700" />
                {c}
              </li>
            ))}
          </ul>
        </div>

        {/* Processes */}
        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-ink-900/10 bg-sand-100/50 p-6 text-ink-950 sm:p-8">
            <div className="flex items-center gap-3 text-rust-700">
              <WhIcon name="install" />
              <p className="section-label !text-rust-700">Installation</p>
            </div>
            <h2 className="mt-3 font-serif text-3xl tracking-tight">Water heater installation process</h2>
            <Steps steps={whInstallSteps} />
          </div>
          <div className="rounded-2xl bg-ink-950 p-6 text-sand-50 sm:p-8">
            <div className="flex items-center gap-3 text-ember-500">
              <WhIcon name="replace" />
              <p className="section-label !text-ember-500">Replacement</p>
            </div>
            <h2 className="mt-3 font-serif text-3xl tracking-tight">Water heater replacement process</h2>
            <Steps steps={whReplaceSteps} dark />
          </div>
        </div>

        {/* Location */}
        <div className="mt-16 grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="font-serif text-3xl tracking-tight text-ink-950">Where should a water heater be installed?</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-600">
              A full storage heater is heavy, and every heater needs water,
              power or gas, and a safe drain route. These are the main
              considerations — the manufacturer&rsquo;s requirements always
              apply.
            </p>
          </div>
          <ul className="grid gap-2 sm:grid-cols-2 lg:col-span-7">
            {whLocation.map((l) => (
              <li key={l} className="flex gap-2 rounded-xl border border-ink-900/10 px-3 py-2.5 text-sm text-ink-800">
                <WhIcon name="check" className="mt-0.5 h-4 w-4 flex-none text-rust-700" />
                {l}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
