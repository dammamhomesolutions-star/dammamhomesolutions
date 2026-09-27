const steps = [
  {
    title: "Start with the symptom.",
    body: "Tell us what stopped working — light, socket, room, breaker or another issue.",
  },
  {
    title: "Tell us where it happens.",
    body: "The property and the room or location.",
  },
  {
    title: "Share useful information.",
    body: "A photo or video, only when it's safe to take one.",
  },
  {
    title: "We clarify the service requirement.",
    body: "The exact cause may need an on-site assessment.",
  },
  {
    title: "Repair the fault.",
    body: "The appropriate electrical work is then carried out.",
  },
];

export default function ElectricalJourney() {
  return (
    <section className="py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-xl">
          <p className="section-label text-blue-700">How this works</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            From symptom to repair.
          </h2>
        </div>

        <ol className="mt-14 grid gap-x-6 gap-y-10 sm:grid-cols-5">
          {steps.map((step, i) => (
            <li key={step.title} className="relative pt-5">
              <span
                aria-hidden="true"
                className="absolute left-0 top-0 h-[2px] w-full bg-ink-900/15"
              />
              <span
                aria-hidden="true"
                className="absolute -top-[3px] left-0 h-2 w-2 rounded-full bg-blue-600"
              />
              <span className="font-serif text-xs text-ink-400">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-2 text-base font-semibold text-ink-950">{step.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-600">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
