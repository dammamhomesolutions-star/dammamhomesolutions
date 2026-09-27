const steps = [
  {
    title: "Start with what you can see.",
    body: "Tell us where the problem appears — bathroom, kitchen, wall, ceiling, floor or another area.",
  },
  {
    title: "Show us the symptom.",
    body: "Photos or a short video can help explain the situation.",
  },
  {
    title: "Tell us about the property.",
    body: "Location and any useful context about the property.",
  },
  {
    title: "We clarify what service is needed.",
    body: "The exact work depends on the issue and, where needed, an assessment.",
  },
  {
    title: "Repair the source where possible.",
    body: "The appropriate plumbing work is then carried out.",
  },
];

export default function PlumbingJourney() {
  return (
    <section className="bg-sand-100/60 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-xl">
          <p className="section-label text-teal-700">How this works</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            From what you notice to what gets fixed.
          </h2>
        </div>

        <ol className="relative mt-14 space-y-10 border-l-2 border-dashed border-teal-700/30 pl-8 sm:pl-10">
          {steps.map((step) => (
            <li key={step.title} className="relative">
              <span
                aria-hidden="true"
                className="absolute -left-[41px] top-1 h-3 w-3 rounded-full bg-teal-600 ring-4 ring-sand-100 sm:-left-[49px]"
              />
              <h3 className="font-serif text-lg text-ink-950 sm:text-xl">{step.title}</h3>
              <p className="mt-1.5 max-w-xl text-ink-700">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
