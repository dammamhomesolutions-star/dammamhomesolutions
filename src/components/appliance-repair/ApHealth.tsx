import { apHealthStages } from "@/lib/appliance-repair";
import ApIcon from "./ApIcon";

const paths = [
  { icon: "repair" as const, title: "Repair", body: "A specific part has failed and the rest of the appliance is in reasonable condition." },
  { icon: "checklist" as const, title: "Maintain", body: "Performance is slipping — dirty filters, worn seals, poor airflow or levelling — but nothing has failed yet." },
  { icon: "replace" as const, title: "Replace", body: "Repeated failures, major damage, or a repair that costs more than the appliance is worth." },
];

// Where the appliance sits, from working normally to replacement worth considering.
export default function ApHealth() {
  return (
    <section aria-labelledby="ap-health" className="border-b border-ink-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-copper-700">Repair, maintain or replace</p>
          <h2 id="ap-health" className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">Not every appliance problem means a new appliance</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-600">
            The right answer depends on what has failed, the appliance&rsquo;s
            overall condition and its repair history — not on age alone.
          </p>
        </div>

        <ol className="mt-10 grid gap-3 sm:grid-cols-5" aria-label="Appliance condition stages">
          {apHealthStages.map((s, i) => (
            <li key={s} className="flex items-center gap-3 sm:block">
              <span
                aria-hidden="true"
                className="block h-2 w-16 flex-none rounded-full sm:w-full"
                style={{ background: ["#48a08f", "#b8916c", "#c98246", "#b3652f", "#8f4f2f"][i] }}
              />
              <span className="text-sm text-ink-800 sm:mt-2 sm:block">{s}</span>
            </li>
          ))}
        </ol>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {paths.map((p) => (
            <div key={p.title} className="group rounded-2xl border border-ink-900/10 bg-steel-100/60 p-6 transition-colors hover:border-copper-600">
              <ApIcon name={p.icon} className="h-7 w-7 text-copper-700" />
              <h3 className="mt-3 font-serif text-xl text-ink-950">{p.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-600">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
