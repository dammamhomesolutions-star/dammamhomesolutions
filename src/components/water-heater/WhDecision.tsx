import { whDecisionFlow } from "@/lib/water-heater";
import WhIcon from "./WhIcon";
import WhCtas from "./WhCtas";
import type { WhIconName } from "@/lib/water-heater";

const options: { title: string; lead: string; icon: WhIconName; points: string[]; accent: string }[] = [
  {
    title: "Repair",
    lead: "Potentially appropriate when",
    icon: "repair",
    points: ["A replaceable part has failed — element, thermostat, valve or fitting", "The tank is otherwise in reasonable condition", "The problem is localised", "Repair is practical and economical"],
    accent: "#5f7050",
  },
  {
    title: "Replace",
    lead: "May make more sense when",
    icon: "replace",
    points: ["The tank is badly corroded or leaking", "Failures keep recurring", "The unit is near the end of its useful life", "Repair cost is no longer practical", "There's significant physical damage"],
    accent: "#94472a",
  },
  {
    title: "New installation",
    lead: "Appropriate when",
    icon: "install",
    points: ["The property has no suitable heater", "A renovation needs a new unit", "An existing heater is being replaced", "A new bathroom needs more hot-water capacity"],
    accent: "#3d5a6b",
  },
];

export default function WhDecision() {
  return (
    <section id="repair-or-replace" aria-labelledby="wh-decision" className="border-b border-ink-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-rust-700">The decision</p>
          <h2 id="wh-decision" className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">Repair, replace, or install?</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-600">
            We don&rsquo;t sell a new heater when a repair will do. There&rsquo;s
            no fixed age at which a heater must be replaced — condition decides.
          </p>
        </div>
        <ul className="mt-10 grid gap-5 lg:grid-cols-3">
          {options.map((o) => (
            <li key={o.title} className="group flex flex-col rounded-2xl border border-ink-900/10 bg-sand-100/50 p-6" style={{ borderTop: `4px solid ${o.accent}` }}>
              <span className="flex h-11 w-11 items-center justify-center rounded-full text-sand-50" style={{ background: o.accent }}>
                <WhIcon name={o.icon} className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-xl font-semibold text-ink-950">{o.title}</h3>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-ink-500">{o.lead}</p>
              <ul className="mt-4 space-y-2.5">
                {o.points.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink-800">
                    <WhIcon name="check" className="mt-0.5 h-4 w-4 flex-none" />
                    {p}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        {/* Decision flow */}
        <div className="mt-12 rounded-2xl bg-ink-950 p-6 text-sand-50 sm:p-8">
          <h3 className="font-serif text-2xl">A rough guide — not a hard rule</h3>
          <ol className="mt-6 space-y-3">
            {whDecisionFlow.map((d) => (
              <li key={d.when} className="grid gap-2 rounded-xl bg-sand-50/5 p-3 text-sm sm:grid-cols-[1fr_auto_1fr] sm:items-center sm:gap-4">
                <span className="text-sand-100">{d.when}</span>
                <WhIcon name="arrow" className="hidden h-4 w-4 text-ember-500 sm:block" />
                <span className="font-semibold text-ember-500">{d.then}</span>
              </li>
            ))}
          </ol>
          <WhCtas tone="dark" className="mt-8" primaryLabel="Request an Assessment" />
        </div>
      </div>
    </section>
  );
}
