const phases = [
  {
    tag: "T-01",
    label: "Daily / Occasional",
    intro: "Things occupants naturally notice, without looking for them.",
    items: [
      "Strange noises",
      "Water marks",
      "Dripping",
      "Doors becoming difficult to close",
      "Unusual electrical behaviour",
      "AC performance changes",
    ],
  },
  {
    tag: "T-02",
    label: "Periodic",
    intro: "Things worth reviewing over time, rather than waiting on.",
    items: [
      "AC condition",
      "Plumbing fixtures",
      "Drains",
      "Electrical fixtures",
      "Doors, locks and handles",
      "Bathroom surfaces",
      "Kitchen fixtures",
      "Paint and wall condition",
    ],
  },
  {
    tag: "T-03",
    label: "When Needed",
    intro:
      "Repairs identified through normal property use — the outcome of noticing something above and following up on it.",
    items: [],
  },
];

export default function PmRhythmTimeline() {
  return (
    <section className="border-b border-ink-900/10 bg-ink-950 py-20 text-sand-100 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-moss-500">
            Maintenance rhythm
          </p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-sand-50 sm:text-4xl">
            A property has a rhythm to what needs attention, and when.
          </h2>
          <p className="mt-4 leading-relaxed text-ink-300">
            Notice → maintain → prevent → repair → review. Not every step
            happens on a schedule — some of it is simply what comes up as a
            property is lived in.
          </p>
        </div>
      </div>

      <div className="container-edge mt-12">
        <div
          className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          role="list"
          aria-label="Maintenance rhythm phases"
        >
          {phases.map((phase, i) => (
            <div
              key={phase.tag}
              role="listitem"
              className="w-[82%] flex-none snap-start rounded-md border border-sand-100/15 bg-ink-900 p-6 sm:w-[46%] sm:p-7 lg:w-[31%]"
            >
              <div className="flex items-baseline justify-between">
                <span className="font-mono text-xs text-moss-500">{phase.tag}</span>
                <span className="font-mono text-xs text-ink-500">
                  {String(i + 1).padStart(2, "0")} / 03
                </span>
              </div>
              <h3 className="mt-3 font-serif text-xl text-sand-50">{phase.label}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-300">{phase.intro}</p>
              {phase.items.length > 0 && (
                <ul className="mt-5 space-y-2 border-t border-sand-100/10 pt-5">
                  {phase.items.map((item) => (
                    <li key={item} className="text-sm text-ink-200">
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
        <p className="mt-2 text-xs text-ink-500 sm:hidden">Swipe to see all three phases →</p>
      </div>

      <div className="container-edge mt-10">
        <p className="max-w-2xl text-sm text-ink-400">
          There isn&rsquo;t a universal maintenance schedule that fits every
          property. The right frequency depends on the property, its
          systems, how it&rsquo;s occupied and its actual maintenance needs.
        </p>
      </div>
    </section>
  );
}
