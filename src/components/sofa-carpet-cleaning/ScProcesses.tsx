import { scCarpetSteps, scSofaSteps } from "@/lib/sofa-carpet-cleaning";
import ScIcon from "./ScIcon";
import ScCtas from "./ScCtas";

function Timeline({ steps, dark }: { steps: { title: string; body: string }[]; dark?: boolean }) {
  return (
    <ol className="relative mt-6 space-y-4">
      <span aria-hidden="true" className={`absolute bottom-3 left-[15px] top-3 w-px ${dark ? "bg-glass-300/40" : "bg-glass-600/40"}`} />
      {steps.map((s, i) => (
        <li key={s.title} className="relative flex gap-4">
          <span
            className={`relative z-10 flex h-8 w-8 flex-none items-center justify-center rounded-full font-mono text-xs ${
              dark ? "bg-glass-300 text-ink-950" : "border border-glass-600/50 bg-sand-50 text-glass-800"
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

export default function ScProcesses() {
  return (
    <section id="process" aria-label="Cleaning processes" className="border-b border-ink-900/10 bg-sand-100/60 py-20 sm:py-24">
      <div className="container-edge">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl bg-ink-950 p-6 text-sand-50 sm:p-8">
            <div className="flex items-center gap-3 text-glass-300">
              <ScIcon name="sofa" />
              <p className="section-label !text-glass-300">Sofa</p>
            </div>
            <h2 className="mt-3 font-serif text-3xl tracking-tight">How professional sofa cleaning works</h2>
            <Timeline steps={scSofaSteps} dark />
          </div>
          <div className="rounded-2xl border border-ink-900/10 bg-sand-50 p-6 text-ink-950 sm:p-8">
            <div className="flex items-center gap-3 text-glass-700">
              <ScIcon name="carpet" />
              <p className="section-label !text-glass-700">Carpet</p>
            </div>
            <h2 className="mt-3 font-serif text-3xl tracking-tight">How professional carpet cleaning works</h2>
            <Timeline steps={scCarpetSteps} />
            <p className="mt-6 text-sm text-ink-600">Exact steps vary by carpet type and cleaning method.</p>
          </div>
        </div>
        <ScCtas className="mt-10" />
      </div>
    </section>
  );
}
