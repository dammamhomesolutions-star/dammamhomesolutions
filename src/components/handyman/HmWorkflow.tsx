import { hmQuality, hmWorkflow } from "@/lib/handyman";
import HmIcon from "./HmIcon";

const ticket = [
  { task: "Assemble TV unit", state: "Completed" },
  { task: "Install 2 curtain rods", state: "Checked" },
  { task: "Adjust bedroom door", state: "Checked" },
  { task: "Replace kitchen tap", state: "Requires follow-up" },
];

// Job-ticket style workflow, then the final check.
export default function HmWorkflow() {
  return (
    <section id="how-it-works" aria-label="How a handyman visit works" className="bg-ink-950 py-20 text-sand-50 sm:py-24">
      <div className="container-edge">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-ember-500">How it works</p>
        <h2 className="mt-4 max-w-2xl font-serif text-3xl tracking-tight sm:text-5xl">From your list to a completed job ticket</h2>

        <div className="mt-12 grid gap-8 lg:grid-cols-12">
          <ol className="relative space-y-3 lg:col-span-5">
            <span aria-hidden="true" className="absolute bottom-6 left-5 top-6 w-px bg-ember-500/30" />
            {hmWorkflow.map((s, i) => (
              <li key={s} className="relative flex items-center gap-4">
                <span className={`relative z-10 flex h-10 w-10 flex-none items-center justify-center rounded-full font-mono text-xs ${i === hmWorkflow.length - 1 ? "bg-ember-500 text-ink-950" : "bg-ink-900 text-ember-500 ring-1 ring-ember-500/40"}`}>{String(i + 1).padStart(2, "0")}</span>
                <span className="font-semibold">{s}</span>
              </li>
            ))}
          </ol>
          <div className="lg:col-span-7">
            <div className="rounded-[1.75rem] bg-sand-50 p-6 text-ink-950 shadow-xl sm:p-8" style={{ backgroundImage: "repeating-linear-gradient(transparent 0 31px, rgba(20,24,31,0.06) 31px 32px)" }}>
              <div className="flex items-center justify-between border-b-2 border-dashed border-ink-900/20 pb-3">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-500">Job ticket — example</p>
                <HmIcon name="maintain" className="h-5 w-5 text-ember-700" />
              </div>
              <ul className="mt-4 space-y-3">
                {ticket.map((t) => (
                  <li key={t.task} className="flex items-center justify-between gap-3 text-sm">
                    <span className="font-medium">{t.task}</span>
                    <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ${t.state === "Requires follow-up" ? "bg-ember-100 text-ember-900" : "bg-ink-950 text-sand-50"}`}>
                      <span aria-hidden="true">{t.state === "Requires follow-up" ? "○" : "✓"}</span>{t.state}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-xs text-ink-500">An illustration of how we review each task with you at the end of a visit.</p>
            </div>
          </div>
        </div>

        <div className="mt-16 rounded-[2rem] border border-sand-100/10 p-6 sm:p-10">
          <h2 className="font-serif text-3xl tracking-tight">A handyman job isn&rsquo;t finished until the small details are checked</h2>
          <ul className="mt-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {hmQuality.map((q) => <li key={q} className="flex gap-2 rounded-xl bg-ink-900 p-3 text-sm text-ink-300"><HmIcon name="check" className="mt-0.5 h-4 w-4 flex-none text-ember-500" />{q}</li>)}
          </ul>
          <p className="mt-4 text-sm text-ink-400">Our workmanship is covered by a warranty — terms are in your quote.</p>
        </div>
      </div>
    </section>
  );
}
