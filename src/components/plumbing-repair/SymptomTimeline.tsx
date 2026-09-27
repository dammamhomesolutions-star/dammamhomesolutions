const stages = [
  {
    title: "It starts small",
    body: "A drip. A damp patch. A slow drain.",
  },
  {
    title: "It becomes noticeable",
    body: "The problem keeps returning.",
  },
  {
    title: "The surrounding area changes",
    body: "Staining, moisture or surface damage may appear.",
  },
  {
    title: "The source needs attention",
    body: "The plumbing issue should be assessed and repaired.",
  },
];

export default function SymptomTimeline() {
  return (
    <section className="py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-xl">
          <p className="section-label text-teal-700">How it tends to go</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            Most plumbing problems follow a similar shape.
          </h2>
        </div>

        <div className="relative mt-16">
          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-1/2 hidden h-px -translate-y-1/2 bg-ink-900/15 sm:block"
          />
          <ol className="grid gap-10 sm:grid-cols-4 sm:gap-6">
            {stages.map((stage, i) => (
              <li
                key={stage.title}
                className={`relative flex flex-col gap-3 ${
                  i % 2 === 1 ? "sm:mt-16" : ""
                }`}
              >
                <span
                  aria-hidden="true"
                  className="h-2.5 w-2.5 rounded-full bg-teal-600 ring-4 ring-sand-50"
                />
                <div>
                  <h3 className="font-serif text-lg text-ink-950">{stage.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-600">{stage.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
