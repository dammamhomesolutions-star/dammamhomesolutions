const included = [
  "Roof surface assessment",
  "Drainage concerns",
  "Water accumulation",
  "Cracks and joint concerns",
  "Edge and parapet concerns",
  "Waterproofing-related issues",
  "General rooftop inspection",
];

const notes = [
  {
    title: "Climbing & access",
    body: "We wouldn't recommend climbing onto a rooftop or inspecting unsafe areas yourself — a professional visit is the safer route.",
  },
  {
    title: "Electrical fixtures",
    body: "We don't provide electrical work or instructions for rooftop electrical fixtures as part of this service.",
  },
  {
    title: "Structural assessment",
    body: "We don't make structural engineering claims — a structural concern would be referred to the relevant specialist.",
  },
  {
    title: "Waterproofing outcomes",
    body: "We don't guarantee specific waterproofing results in advance — every rooftop is assessed on its own condition.",
  },
];

export default function RfScopeSafety() {
  return (
    <section className="border-b border-ink-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge max-w-3xl">
        <p className="section-label !text-teal-700">Scope &amp; safety</p>
        <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
          What this service covers.
        </h2>

        <div className="mt-10 border-l-2 border-teal-600 pl-6">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-teal-700">
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
