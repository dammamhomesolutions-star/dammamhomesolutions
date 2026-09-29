const supportingProblems = [
  {
    title: "Blocked drains",
    body: "Slow or backed-up drainage in kitchens, bathrooms or utility areas.",
  },
  {
    title: "Low water pressure",
    body: "Weak flow from taps or fixtures.",
  },
  {
    title: "Bathroom plumbing",
    body: "Issues around sinks, toilets, showers, drains and related fittings.",
  },
  {
    title: "Kitchen plumbing",
    body: "Sink, tap, drain and under-sink plumbing problems.",
  },
  {
    title: "Fixtures & fittings",
    body: "Taps, valves, connections and other plumbing fixtures.",
  },
  {
    title: "General plumbing repairs",
    body: "Smaller plumbing faults that don't fit one category.",
  },
];

export default function ProblemList() {
  return (
    <section className="py-20 sm:py-24">
      <div className="container-edge">
        <p className="section-label text-teal-700">Plumbing problems we handle</p>
        <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-ink-600">
          Plumbing repair cost depends on the fault, the fixtures involved
          and whether parts need replacing. Send a photo or short video on
          WhatsApp for an initial assessment.
        </p>

        <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <div className="border-b border-ink-900/15 pb-8 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-10">
            <h2 className="font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
              Water leaks
            </h2>
            <p className="mt-4 max-w-sm text-ink-700">
              Visible dripping, recurring dampness or a suspected pipe leak
              — the problem most people call about first, and the one this
              page is built around.
            </p>
          </div>

          <div className="divide-y divide-ink-900/10">
            {supportingProblems.map((p) => (
              <div key={p.title} className="py-4 first:pt-0">
                <h3 className="text-base font-semibold text-ink-950">{p.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-600">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
