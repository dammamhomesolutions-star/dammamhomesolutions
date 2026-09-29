const included = [
  "Garage door movement assessment",
  "Gate alignment concerns",
  "Damaged panels",
  "Hinges, rollers and tracks",
  "Handles and hardware",
  "Closing and opening issues",
  "General inspection and repair",
];

const notes = [
  {
    title: "Locks & hardware",
    body: "We don't provide lock-bypass, forced-entry or security circumvention instructions or services.",
  },
  {
    title: "Springs & tensioned parts",
    body: "Garage door springs and similar components carry stored tension — we don't encourage dismantling these yourself.",
  },
];

export default function GdScopeBoundaries() {
  return (
    <section className="border-b border-ink-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge max-w-3xl">
        <p className="section-label !text-rust-700">Scope &amp; safety</p>
        <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
          What this service covers.
        </h2>

        <div className="mt-10 border-l-2 border-rust-600 pl-6">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-rust-700">
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
