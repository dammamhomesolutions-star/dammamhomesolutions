import { apDont, apPrep, apWarnings } from "@/lib/appliance-repair";
import ApIcon from "./ApIcon";

const prepIcon = { washer: "washer", fridge: "fridge", oven: "oven", other: "appliance", general: "checklist" } as const;

export default function ApSafety() {
  return (
    <section aria-label="Safety warnings and preparing for the technician" className="border-b border-ink-900/10 bg-steel-100/50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="grid gap-8 rounded-2xl border-2 border-rust-600/40 bg-rust-100/40 p-6 sm:p-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <ApIcon name="alert" className="h-8 w-8 text-rust-700" />
            <h2 className="mt-3 font-serif text-3xl tracking-tight text-ink-950">Stop using the appliance if you notice</h2>
            <p className="mt-3 text-sm text-ink-700">
              Switch it off at the wall if it&rsquo;s safe to reach, and get it
              checked. For a gas smell, leave and call your gas supplier or
              emergency services.
            </p>
          </div>
          <ul className="grid gap-2 sm:grid-cols-2 lg:col-span-8 lg:grid-cols-3">
            {apWarnings.map((w) => (
              <li key={w} className="flex items-center gap-2 rounded-xl bg-sand-50 px-3 py-2.5 text-sm text-ink-900">
                <ApIcon name="alert" className="h-4 w-4 flex-none text-rust-700" />
                {w}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-14">
          <h2 className="font-serif text-3xl tracking-tight text-ink-950">What not to do</h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {apDont.map((m) => (
              <li key={m} className="flex gap-3 rounded-xl border border-ink-900/10 bg-sand-50 p-4 text-sm text-ink-800">
                <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-rust-100 text-[11px] font-bold text-rust-700" aria-hidden="true">✕</span>
                <span>Don&rsquo;t {m.charAt(0).toLowerCase() + m.slice(1)}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-14">
          <h2 className="font-serif text-3xl tracking-tight text-ink-950">Before the technician arrives</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {apPrep.map((p) => (
              <div key={p.key} className={`rounded-2xl p-5 ${p.key === "general" ? "bg-ink-950 text-sand-50" : "bg-sand-50 ring-1 ring-ink-900/10"}`}>
                <ApIcon name={prepIcon[p.key]} className={`h-6 w-6 ${p.key === "general" ? "text-copper-300" : "text-copper-700"}`} />
                <h3 className="mt-3 font-semibold">{p.title}</h3>
                <ul className={`mt-3 space-y-1.5 text-sm ${p.key === "general" ? "text-ink-300" : "text-ink-700"}`}>
                  {p.items.map((i) => (
                    <li key={i} className="flex gap-2">
                      <ApIcon name="check" className="mt-0.5 h-4 w-4 flex-none text-copper-600" />
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
