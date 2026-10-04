import { whProblems, whWarnings } from "@/lib/water-heater";
import WhIcon from "./WhIcon";

export default function WhProblems() {
  return (
    <section aria-label="Common problems and warning signs" className="border-b border-ink-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-rust-700">Common problems</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">Does this match what you&rsquo;re seeing?</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-600">
            Possible causes for each — any of them can be the one, which is why
            diagnosis comes before repair.
          </p>
        </div>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {whProblems.map((p) => (
            <li key={p.title} className="rounded-2xl border border-ink-900/10 bg-ember-100/30 p-5">
              <h3 className="text-base font-semibold text-ink-950">{p.title}</h3>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {p.causes.map((c) => (
                  <li key={c} className="rounded-full bg-sand-50 px-2.5 py-0.5 text-xs text-ink-700 ring-1 ring-ink-900/10">{c}</li>
                ))}
              </ul>
              {p.note && <p className="mt-3 text-xs font-medium text-rust-700">{p.note}</p>}
            </li>
          ))}
        </ul>

        <div className="mt-14 grid gap-8 rounded-2xl border-2 border-rust-600/40 bg-rust-100/40 p-6 sm:p-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <WhIcon name="alert" className="h-8 w-8 text-rust-700" />
            <h2 className="mt-3 font-serif text-3xl tracking-tight text-ink-950">Don&rsquo;t ignore these warning signs</h2>
            <p className="mt-4 text-[15px] font-medium leading-relaxed text-ink-900">
              Stop using the system if there&rsquo;s an immediate safety concern
              and get professional help.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-ink-700">
              With a gas heater, if you smell gas: don&rsquo;t use switches or
              flames, open windows, leave the area and contact the gas supplier
              or emergency services.
            </p>
          </div>
          <ul className="grid grid-cols-2 gap-2 text-sm text-ink-900 lg:col-span-7">
            {whWarnings.map((w) => (
              <li key={w} className="flex items-center gap-2 rounded-xl bg-sand-50 px-3 py-2.5">
                <WhIcon name="alert" className="h-4 w-4 flex-none text-rust-700" />
                {w}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
