import { ltMistakes, ltPlanning, ltPro, ltScope } from "@/lib/lighting-installation";
import LtIcon from "./LtIcon";

const requestInfo = [
  "What fixture do you want installed?",
  "How many fixtures?",
  "Is it replacing an existing fixture?",
  "Is the location changing?",
  "What type of ceiling or wall?",
  "How high is the ceiling?",
  "Is a new lighting point needed?",
  "Do you need separate controls?",
  "Is it indoors or outdoors?",
  "Can you send photos?",
];

export default function LtPlanning() {
  return (
    <section aria-label="Planning, mistakes and service scope" className="border-b border-ink-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="section-label !text-ember-700">Avoid these</p>
            <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">Common lighting installation mistakes</h2>
            <ul className="mt-6 grid gap-2 sm:grid-cols-2">
              {ltMistakes.map((m) => (
                <li key={m} className="flex gap-3 rounded-xl border border-ink-900/10 p-3.5 text-sm text-ink-800">
                  <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-rust-100 text-[11px] font-bold text-rust-700" aria-hidden="true">✕</span>
                  {m}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-ink-950 p-6 text-sand-50 sm:p-8">
              <h2 className="font-serif text-2xl tracking-tight sm:text-3xl">DIY or professional?</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-300">
                Changing a bulb is a DIY job. Anything involving wiring is not.
                Professional assessment is especially useful when:
              </p>
              <ul className="mt-4 space-y-1.5">
                {ltPro.map((p) => (
                  <li key={p} className="flex gap-2 text-sm text-sand-100"><LtIcon name="check" className="mt-0.5 h-4 w-4 flex-none text-ember-500" />{p}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl bg-ember-100/50 p-6 sm:p-8">
            <h2 className="font-serif text-2xl tracking-tight text-ink-950 sm:text-3xl">Before you choose a fixture</h2>
            <ol className="mt-5 space-y-2">
              {ltPlanning.map((q, i) => (
                <li key={q} className="flex gap-3 text-sm text-ink-800">
                  <span className="font-mono text-xs text-ember-700">{String(i + 1).padStart(2, "0")}</span>
                  {q}
                </li>
              ))}
            </ol>
          </div>
          <div className="rounded-2xl border border-ink-900/10 p-6 sm:p-8">
            <h2 className="font-serif text-2xl tracking-tight text-ink-950 sm:text-3xl">What information helps with an installation request?</h2>
            <ol className="mt-5 space-y-2">
              {requestInfo.map((q, i) => (
                <li key={q} className="flex gap-3 text-sm text-ink-800">
                  <span className="font-mono text-xs text-ember-700">{String(i + 1).padStart(2, "0")}</span>
                  {q}
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">What we install and fix</h2>
          <ul className="mt-6 flex flex-wrap gap-2">
            {ltScope.map((s) => (
              <li key={s} className="inline-flex items-center gap-1.5 rounded-full bg-ink-950 px-3.5 py-2 text-sm text-sand-50">
                <LtIcon name="check" className="h-4 w-4 text-ember-500" />
                {s}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
