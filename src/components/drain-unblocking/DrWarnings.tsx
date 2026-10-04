import { drChemicalConcerns, drMistakes, drWarnings } from "@/lib/drain-unblocking";
import DrIcon from "./DrIcon";

export default function DrWarnings() {
  return (
    <section aria-label="Warning signs, mistakes and chemical cleaners" className="border-b border-ink-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="grid gap-8 rounded-2xl border-2 border-rust-600/40 bg-rust-100/40 p-6 sm:p-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <DrIcon name="alert" className="h-8 w-8 text-rust-700" />
            <h2 className="mt-3 font-serif text-3xl tracking-tight text-ink-950">Act promptly if you notice</h2>
            <p className="mt-3 text-sm text-ink-700">Avoid contact with wastewater and keep children and pets away from it.</p>
          </div>
          <ul className="grid gap-2 sm:grid-cols-2 lg:col-span-8 lg:grid-cols-3">
            {drWarnings.map((w) => (
              <li key={w} className="flex items-center gap-2 rounded-xl bg-sand-50 px-3 py-2.5 text-sm text-ink-900">
                <DrIcon name="alert" className="h-4 w-4 flex-none text-rust-700" />
                {w}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="font-serif text-3xl tracking-tight text-ink-950">Avoid these mistakes</h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {drMistakes.map((m) => (
                <li key={m} className="flex gap-3 rounded-xl border border-ink-900/10 bg-concrete-100/40 p-4 text-sm text-ink-800">
                  <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-rust-100 text-[11px] font-bold text-rust-700" aria-hidden="true">✕</span>
                  <span>Don&rsquo;t {m.charAt(0).toLowerCase() + m.slice(1)}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-ink-950 p-6 text-sand-50 sm:p-8">
              <h2 className="font-serif text-2xl tracking-tight">Should you use chemical drain cleaners?</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-300">
                They&rsquo;re not a universal fix, and we&rsquo;d advise against
                relying on them. Concerns include:
              </p>
              <ul className="mt-4 space-y-2 text-sm">
                {drChemicalConcerns.map((c) => (
                  <li key={c} className="flex gap-2">
                    <span className="mt-2 h-1 w-3 flex-none bg-ember-500" aria-hidden="true" />
                    {c}
                  </li>
                ))}
              </ul>
              <p className="mt-5 rounded-xl bg-ember-500/15 p-3 text-sm text-ember-100">
                If you&rsquo;ve used any drain chemical recently, tell the
                technician before work starts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
