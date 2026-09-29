const points = [
  {
    title: "WhatsApp-first, photo-based assessment",
    body: "Send a photo or short video of the problem before a visit is arranged, so the first conversation is about the actual issue, not guesswork.",
  },
  {
    title: "Problem-first communication",
    body: "We ask about the actual issue instead of forcing it into a fixed service category.",
  },
  {
    title: "Clear scope before work starts",
    body: "You should understand what work is actually being discussed — and why — before anyone visits the property.",
  },
  {
    title: "Residential focus",
    body: "Everyday property problems — not new construction — are the core of what we do.",
  },
  {
    title: "One contact for multiple trades",
    body: "Where a job involves more than one trade — AC, plumbing, electrical, general repairs — you can discuss it here rather than contacting separate specialists.",
  },
];

export default function WhyDifferent() {
  return (
    <section id="why-different" className="py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label">What to expect</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            What working with us actually looks like.
          </h2>
        </div>

        <div className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2">
          {points.map((p) => (
            <div key={p.title} className="border-l-2 border-rust-600 pl-6">
              <h3 className="font-serif text-lg text-ink-950">{p.title}</h3>
              <p className="mt-2 text-ink-700">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
