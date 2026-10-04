import { wpProblems } from "@/lib/water-pump";

export default function WpProblems() {
  return (
    <section aria-labelledby="wp-problems" className="border-b border-ink-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-glass-700">Common problems</p>
          <h2 id="wp-problems" className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">Does your symptom match?</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-600">Possible causes for each — any one of them could be it, which is why diagnosis comes first.</p>
        </div>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {wpProblems.map((p) => (
            <li key={p.title} className={`rounded-2xl border p-5 ${p.title === "Weak water pressure" ? "border-glass-700 bg-glass-100" : "border-ink-900/10 bg-glass-100/30"}`}>
              <h3 className="text-base font-semibold text-ink-950">{p.title}</h3>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {p.causes.map((c) => (
                  <li key={c} className="rounded-full bg-sand-50 px-2.5 py-0.5 text-xs text-ink-700 ring-1 ring-ink-900/10">{c}</li>
                ))}
              </ul>
              {p.note && <p className="mt-3 text-xs font-medium text-rust-700">{p.note}</p>}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
