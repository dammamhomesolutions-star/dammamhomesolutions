import { aiProcess } from "@/lib/ac-installation";
import AiIcon from "./AiIcon";
import AiCtas from "./AiCtas";

export default function AiProcess() {
  return (
    <section id="process" aria-labelledby="ai-process" className="border-b border-ink-900/10 bg-teal-900 py-20 text-sand-50 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-teal-300">The process</p>
          <h2 id="ai-process" className="mt-4 font-serif text-3xl tracking-tight sm:text-4xl">How AC installation works</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-teal-100">
            Exact steps depend on the equipment and the project, but every
            installation follows the same order: plan, install, check, test.
          </p>
        </div>
        <ol className="relative mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {aiProcess.map((s, i) => (
            <li key={s.title} className="group relative rounded-2xl border border-teal-300/20 bg-teal-800/50 p-5">
              <div className="flex items-center justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-teal-300 text-ink-950">
                  <AiIcon name={s.icon} className="h-5 w-5" />
                </span>
                <span className="font-mono text-xs text-teal-300">STEP {i + 1}</span>
              </div>
              <h3 className="mt-4 text-base font-semibold">{s.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-teal-100">{s.body}</p>
              {i % 4 !== 3 && (
                <AiIcon name="arrow" className="absolute -right-6 top-1/2 hidden h-4 w-4 -translate-y-1/2 text-teal-300 lg:block" />
              )}
            </li>
          ))}
        </ol>
        <AiCtas tone="dark" className="mt-12" />
      </div>
    </section>
  );
}
