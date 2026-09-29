const included = [
  "Leak source assessment",
  "Hidden or hard-to-find leaks",
  "Damp patches and stains",
  "Rising water bills",
  "Pipe joint and fitting concerns",
  "Post-repair testing",
];

const notes = [
  {
    title: "Opening up surfaces",
    body: "We try non-invasive checks first and explain before any wall, tile or floor surface needs to be opened.",
  },
  {
    title: "Excavation & digging",
    body: "We don't provide instructions for digging up exterior lines yourself — underground work is handled as part of the service, not as a DIY guide.",
  },
  {
    title: "Electrical near water",
    body: "We don't provide electrical work or instructions in areas affected by water — that's referred to electrical repair where relevant.",
  },
  {
    title: "Confirmed outcomes",
    body: "We can't guarantee the exact source or timeline in advance — some leaks are found quickly, others take more than one step.",
  },
];

export default function WlScopeSafety() {
  return (
    <section className="border-b border-ink-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge max-w-3xl">
        <p className="section-label !text-copper-700">Scope &amp; safety</p>
        <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
          What this service covers.
        </h2>

        <div className="mt-10 border-l-2 border-copper-600 pl-6">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-copper-700">
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
