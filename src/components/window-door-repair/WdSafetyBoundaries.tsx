const notes = [
  {
    title: "Glass",
    body: "Damaged glass is a safety consideration, not just a cosmetic one — it's worth having assessed rather than left.",
  },
  {
    title: "Doors",
    body: "A damaged door or frame can affect both everyday use and how securely the property closes up.",
  },
  {
    title: "Locks",
    body: "We don't provide lock-bypass or forced-entry instructions or services. If you're locked out, a locksmith can help with that specific need.",
  },
  {
    title: "Large or unstable glass",
    body: "Large or loose glass panels are best left to a professional assessment rather than handled directly.",
  },
];

export default function WdSafetyBoundaries() {
  return (
    <section className="border-b border-glass-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge max-w-3xl">
        <p className="section-label !text-glass-700">Worth knowing</p>
        <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
          A few boundaries, kept simple.
        </h2>

        <dl className="mt-10 grid gap-8 sm:grid-cols-2">
          {notes.map((note) => (
            <div key={note.title}>
              <dt className="text-sm font-semibold uppercase tracking-[0.1em] text-glass-700">{note.title}</dt>
              <dd className="mt-2 text-[15px] leading-relaxed text-ink-700">{note.body}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
