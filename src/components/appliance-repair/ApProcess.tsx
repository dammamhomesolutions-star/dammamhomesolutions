import { apProcess } from "@/lib/appliance-repair";
import ApIcon from "./ApIcon";
import ApCtas from "./ApCtas";

export default function ApProcess() {
  return (
    <section id="process" aria-labelledby="ap-process" className="border-b border-ink-900/10 bg-ink-950 py-20 text-sand-50 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-copper-300">How it works</p>
          <h2 id="ap-process" className="mt-4 font-serif text-3xl tracking-tight sm:text-4xl">How our appliance repair process works</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-300">
            Nothing is replaced until you&rsquo;ve heard what failed and agreed
            the repair.
          </p>
        </div>
        <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {apProcess.map((s, i) => (
            <li key={s.title} className="group relative rounded-2xl border border-sand-100/10 bg-ink-900 p-5 transition-colors hover:border-copper-300/50">
              <div className="flex items-center justify-between">
                <ApIcon name={s.icon} className="h-6 w-6 text-copper-300" />
                <span className="font-mono text-xs text-ink-400">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <h3 className="mt-4 text-[15px] font-semibold">{s.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-ink-300">{s.body}</p>
            </li>
          ))}
        </ol>
        <ApCtas tone="dark" className="mt-10" />
      </div>
    </section>
  );
}
