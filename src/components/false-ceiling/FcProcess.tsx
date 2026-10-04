import { fcFinish, fcPaintSteps, fcProcess } from "@/lib/false-ceiling";
import FcIcon from "./FcIcon";

export default function FcProcess() {
  return (
    <section id="process" aria-label="Installation process and finishing" className="border-b border-ink-900/10 bg-glass-100/60 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-glass-700">How it works</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">What happens during false ceiling installation?</h2>
        </div>
        <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {fcProcess.map((s, i) => (
            <li key={s.title} className="rounded-2xl bg-sand-50 p-5 ring-1 ring-ink-900/10 transition-colors hover:ring-glass-600">
              <div className="flex items-center justify-between">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-glass-900 text-glass-200"><FcIcon name={s.icon} className="h-5 w-5" /></span>
                <span className="font-mono text-xs text-glass-700">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <h3 className="mt-4 text-[15px] font-semibold text-ink-950">{s.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-ink-600">{s.body}</p>
            </li>
          ))}
        </ol>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl bg-ink-950 p-6 text-sand-50 sm:p-8">
            <h2 className="font-serif text-3xl tracking-tight">The finish is what you see</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-300">
              Good framing gets hidden; the finish doesn&rsquo;t. Careful joint
              work and preparation give a smooth, even result — especially where
              cove light grazes across the surface and shows every flaw.
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">{fcFinish.map((f) => <li key={f} className="rounded-full bg-sand-100/10 px-3 py-1 text-xs text-sand-100">{f}</li>)}</ul>
          </div>
          <div className="rounded-2xl bg-sand-50 p-6 ring-1 ring-ink-900/10 sm:p-8">
            <FcIcon name="paint" className="h-8 w-8 text-glass-700" />
            <h2 className="mt-3 font-serif text-3xl tracking-tight text-ink-950">What happens after the ceiling is installed?</h2>
            <p className="mt-3 text-sm text-ink-600">We finish and paint the ceiling as part of the job:</p>
            <ol className="mt-4 flex flex-wrap items-center gap-2">
              {fcPaintSteps.map((s, i) => (
                <li key={s} className="flex items-center gap-2">
                  <span className="rounded-full bg-glass-100 px-3 py-1.5 text-sm font-medium text-ink-900">{s}</span>
                  {i < fcPaintSteps.length - 1 && <FcIcon name="arrow" className="h-4 w-4 text-glass-600" />}
                </li>
              ))}
            </ol>
            <p className="mt-4 text-xs text-ink-500">Our workmanship is covered by a warranty — terms are in your quote.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
