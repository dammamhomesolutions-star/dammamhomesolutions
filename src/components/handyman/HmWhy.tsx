import { hmPutOff, hmScenarios } from "@/lib/handyman";
import HmIcon from "./HmIcon";

const reasons = ["Fewer appointments to arrange", "One request for everything", "Easier access to the property", "Simpler planning", "Ideal before moving in or out", "Clears the backlog of small jobs"];

export default function HmWhy() {
  return (
    <section aria-label="Why combine small jobs, and common scenarios" className="bg-ink-950 py-20 text-sand-50 sm:py-24">
      <div className="container-edge">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-ember-500">The small jobs</p>
            <h2 className="mt-4 font-serif text-3xl tracking-tight sm:text-5xl">The small jobs that keep getting put off</h2>
            <p className="mt-5 font-serif text-xl italic text-ink-300">&ldquo;You don&rsquo;t always need a renovation. Sometimes you just need someone to finish the list.&rdquo;</p>
          </div>
          <ul className="flex flex-wrap content-start gap-2 lg:col-span-7">
            {hmPutOff.map((p, i) => (
              <li key={p} className={`rounded-lg px-4 py-3 text-sm shadow-md ${i % 3 === 0 ? "-rotate-1 bg-sand-50 text-ink-950" : i % 3 === 1 ? "rotate-1 bg-ember-100 text-ink-950" : "bg-ink-800 text-sand-50"}`}>{p}</li>
            ))}
          </ul>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="font-serif text-3xl tracking-tight sm:text-4xl">Why book several small jobs together?</h2>
            <ul className="mt-6 space-y-2">
              {reasons.map((r) => <li key={r} className="flex gap-2 text-sm text-ink-300"><HmIcon name="check" className="mt-0.5 h-4 w-4 flex-none text-ember-500" />{r}</li>)}
            </ul>
            <p className="mt-4 text-xs text-ink-400">How much fits into one visit depends on the tasks — we&rsquo;ll plan it with you rather than promise same-day completion.</p>
          </div>
          <ol className="grid gap-3 sm:grid-cols-2 lg:col-span-7">
            {hmScenarios.map((s, i) => (
              <li key={s.title} className={`rounded-2xl border border-sand-100/10 bg-ink-900 p-5 ${i === hmScenarios.length - 1 ? "sm:col-span-2" : ""}`}>
                <p className="font-mono text-xs text-ember-500">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="mt-2 font-serif text-xl">{s.title}</h3>
                <p className="mt-1 text-sm text-ink-300">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
