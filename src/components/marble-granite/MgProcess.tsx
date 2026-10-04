import { mgProcess } from "@/lib/marble-granite";
import MgCtas from "./MgCtas";
import MgIcon from "./MgIcon";

export default function MgProcess() {
  return (
    <section id="process" aria-labelledby="mg-process" className="border-b border-ink-900/10 bg-ink-950 py-20 text-sand-50 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-concrete-300">How it works</p>
          <h2 id="mg-process" className="mt-4 font-serif text-3xl tracking-tight sm:text-4xl">Our marble &amp; granite polishing process</h2>
        </div>
        <ol className="relative mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {mgProcess.map((s, i) => (
            <li key={s.title} className="rounded-2xl border border-sand-100/10 bg-ink-900 p-5 transition-colors hover:border-concrete-300/50">
              <div className="flex items-center justify-between">
                <MgIcon name={s.icon} className="h-6 w-6 text-concrete-300" />
                <span className="font-mono text-xs text-ink-400">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <h3 className="mt-4 text-[15px] font-semibold">{s.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-ink-300">{s.body}</p>
            </li>
          ))}
        </ol>
        <p className="mt-6 text-sm text-ink-400">Our workmanship is covered by a warranty — terms are in your quote.</p>
        <MgCtas tone="dark" className="mt-8" primaryLabel="Discuss Your Stone" />
      </div>
    </section>
  );
}
