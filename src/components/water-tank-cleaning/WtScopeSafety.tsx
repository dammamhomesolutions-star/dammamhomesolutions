const included = [
  "Rooftop tank cleaning",
  "Underground tank cleaning",
  "Sediment removal",
  "Tank interior disinfection",
  "Multi-unit / shared tanks",
  "General tank condition assessment",
];

const notes = [
  {
    title: "Confined space entry",
    body: "We don't provide instructions for entering a tank yourself — confined spaces carry real risks and this is handled as part of the professional visit.",
  },
  {
    title: "Disinfectant handling",
    body: "Cleaning agents used inside a tank are handled by trained technicians, not something we'd recommend doing yourself.",
  },
  {
    title: "Water safety guarantees",
    body: "We don't guarantee specific drinking-water safety outcomes — tank cleaning addresses tank condition, not a substitute for water quality testing.",
  },
  {
    title: "Structural tank repairs",
    body: "If a tank itself is cracked or structurally damaged, that's assessed separately from routine cleaning.",
  },
];

export default function WtScopeSafety() {
  return (
    <section className="border-b border-ink-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge max-w-3xl">
        <p className="section-label !text-mint-700">Scope &amp; safety</p>
        <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
          What this service covers.
        </h2>

        <div className="mt-10 border-l-2 border-mint-600 pl-6">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-mint-700">
            Included, directionally
          </p>
          <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-2">
            {included.map((item) => (
              <li key={item} className="text-[15px] text-ink-800">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <dl className="mt-10 grid gap-6 sm:grid-cols-2">
          {notes.map((n) => (
            <div key={n.title}>
              <dt className="text-sm font-semibold uppercase tracking-[0.08em] text-ink-500">{n.title}</dt>
              <dd className="mt-2 text-[15px] leading-relaxed text-ink-700">{n.body}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
