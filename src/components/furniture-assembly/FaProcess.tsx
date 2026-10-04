import { faProcess, faQuality } from "@/lib/furniture-assembly";
import FaIcon from "./FaIcon";

export default function FaProcess() {
  return (
    <section id="process" aria-label="Assembly process and quality checks" className="border-b border-ink-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-walnut-700">How it works</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">What happens during furniture assembly?</h2>
        </div>
        <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {faProcess.map((s, i) => (
            <li key={s.title} className="group rounded-2xl border border-ink-900/10 p-5 transition-colors hover:border-walnut-600">
              <div className="flex items-center justify-between">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-walnut-800 text-walnut-100"><FaIcon name={s.icon} className="h-5 w-5" /></span>
                <span className="font-mono text-xs text-walnut-700">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <h3 className="mt-4 text-[15px] font-semibold text-ink-950">{s.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-ink-600">{s.body}</p>
            </li>
          ))}
        </ol>

        <div className="mt-16 grid gap-8 rounded-2xl bg-walnut-100/60 p-6 sm:p-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <FaIcon name="level" className="h-8 w-8 text-walnut-700" />
            <h2 className="mt-3 font-serif text-3xl tracking-tight text-ink-950">What should be checked after assembly?</h2>
            <p className="mt-3 text-sm text-ink-600">We go through these with you before we leave. Our workmanship is covered by a warranty — terms are in your quote.</p>
          </div>
          <ul className="grid gap-2 sm:grid-cols-2 lg:col-span-8 lg:grid-cols-3">
            {faQuality.map((q) => (
              <li key={q} className="flex items-center gap-2 rounded-xl bg-sand-50 px-3 py-2.5 text-sm text-ink-800">
                <FaIcon name="check" className="h-4 w-4 flex-none text-walnut-700" />
                {q}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
