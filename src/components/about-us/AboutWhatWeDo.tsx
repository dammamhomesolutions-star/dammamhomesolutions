const groups = [
  {
    title: "Inside the home",
    body: "Plumbing, electrical, AC, painting, carpentry, tile & grout, ceiling repair, flooring, kitchen cabinets, windows, doors and gate & garage door repair.",
  },
  {
    title: "Protecting the property",
    body: "Waterproofing, water leak detection and repair, and roof & rooftop repair — the areas most linked to long-term property damage.",
  },
  {
    title: "Keeping it running",
    body: "General maintenance, preventive maintenance and emergency home repairs, for ongoing upkeep rather than one-off fixes.",
  },
];

export default function AboutWhatWeDo() {
  return (
    <section className="border-b border-ink-900/10 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label">What we do</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            One company for the range of problems a property runs into.
          </h2>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {groups.map((g) => (
            <div key={g.title} className="border-l-2 border-rust-600 pl-6">
              <h3 className="font-serif text-lg text-ink-950">{g.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-700">{g.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
