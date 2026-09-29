const values = [
  {
    title: "Clear scope",
    body: "You should understand what work is actually being discussed before it starts.",
  },
  {
    title: "Problem-first communication",
    body: "We ask about the actual issue instead of forcing it into a fixed service category.",
  },
  {
    title: "Residential focus",
    body: "Everyday property problems — not new construction — are the core of what we do.",
  },
  {
    title: "One place for multiple trades",
    body: "Where a job involves more than one trade, you can discuss it here rather than contacting separate specialists.",
  },
  {
    title: "Honest, hedged language",
    body: "We describe what a symptom can indicate, not a guaranteed diagnosis — a proper look is what confirms it.",
  },
  {
    title: "Straightforward requests",
    body: "A message, a photo and a rough description of the issue is usually enough to get started.",
  },
];

export default function AboutValues() {
  return (
    <section className="border-b border-ink-900/10 bg-sand-100/50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-rust-700">How we work</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            What working with us actually looks like.
          </h2>
        </div>

        <div className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((v) => (
            <div key={v.title}>
              <h3 className="font-serif text-lg text-ink-950">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-700">{v.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
