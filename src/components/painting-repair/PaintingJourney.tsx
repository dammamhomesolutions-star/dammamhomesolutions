const steps = [
  { title: "See the problem", body: "Identify what's visible.", tone: "bg-stone-300/60" },
  { title: "Understand the condition", body: "Work out whether this is mainly repair, preparation, painting, or something that needs another service first.", tone: "bg-stone-200/70" },
  { title: "Prepare the surface", body: "Appropriate preparation before finishing.", tone: "bg-stone-100" },
  { title: "Repair where needed", body: "Address supported surface damage.", tone: "bg-sand-100" },
  { title: "Apply the finish", body: "Paint or finish the prepared surface.", tone: "bg-sand-50" },
  { title: "Final check", body: "Review the completed work.", tone: "bg-white" },
];

export default function PaintingJourney() {
  return (
    <section className="py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-xl">
          <p className="section-label">How a job proceeds</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            From damaged surface to finished wall.
          </h2>
          <p className="mt-4 text-ink-700">
            We don&rsquo;t promise a fixed number of coats or a drying
            time upfront — that depends on the surface and the product
            used. This is the shape the work tends to take.
          </p>
        </div>

        <ol className="mt-12 overflow-hidden rounded-2xl border border-ink-900/10">
          {steps.map((step, i) => (
            <li key={step.title} className={`${step.tone} border-t border-ink-900/10 first:border-t-0`}>
              <div className="flex flex-col gap-1 px-6 py-6 sm:flex-row sm:items-baseline sm:gap-8 sm:px-8">
                <span className="flex items-baseline gap-3 sm:w-64 sm:flex-none">
                  <span className="font-serif text-sm text-ink-400">{String(i + 1).padStart(2, "0")}</span>
                  <span className="font-serif text-lg text-ink-950">{step.title}</span>
                </span>
                <span className="text-ink-700">{step.body}</span>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
