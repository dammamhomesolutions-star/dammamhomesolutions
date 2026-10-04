import { pcMistakes } from "@/lib/pest-control";
import PcIcon from "./PcIcon";

export default function PcMistakes() {
  return (
    <section aria-labelledby="pc-mistakes" className="border-b border-ink-900/10 bg-sand-100/60 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-rust-700">Before you reach for the spray</p>
          <h2 id="pc-mistakes" className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            Common pest-control mistakes to avoid
          </h2>
        </div>
        <ol className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {pcMistakes.map((m, i) => (
            <li key={m.title} className="flex flex-col rounded-2xl border border-ink-900/10 bg-sand-50 p-6">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 flex h-8 w-8 flex-none items-center justify-center rounded-full bg-rust-100 text-rust-700">
                  <PcIcon name="alert" className="h-4 w-4" />
                </span>
                <h3 className="text-base font-semibold leading-snug text-ink-950">
                  <span className="sr-only">Mistake {i + 1}: </span>
                  {m.title}
                </h3>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-ink-700">
                <span className="font-semibold text-ink-900">Why it&rsquo;s a problem: </span>
                {m.why}
              </p>
              <p className="mt-3 rounded-xl bg-moss-100 p-3 text-sm leading-relaxed text-moss-900">
                <span className="font-semibold">Better next step: </span>
                {m.instead}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
