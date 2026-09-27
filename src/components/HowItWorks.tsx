const steps = [
  {
    n: "01",
    title: "Tell us what's wrong",
    body: "Send a message, photo or short description of the issue.",
  },
  {
    n: "02",
    title: "We understand the job",
    body: "We clarify the property issue, location and required work.",
  },
  {
    n: "03",
    title: "Visit / assessment",
    body: "Where needed, the job is assessed before repair work begins.",
  },
  {
    n: "04",
    title: "Work begins",
    body: "The agreed repair or maintenance work is carried out.",
  },
  {
    n: "05",
    title: "Follow-up",
    body: "For larger or recurring work, we clarify the next maintenance requirement.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label">How requesting service works</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            A straightforward path from problem to repair.
          </h2>
        </div>

        <ol className="mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((step) => (
            <li key={step.n} className="border-t-2 border-ink-950 pt-5">
              <span className="font-serif text-2xl text-ink-300">{step.n}</span>
              <h3 className="mt-3 text-base font-semibold text-ink-950">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-600">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
