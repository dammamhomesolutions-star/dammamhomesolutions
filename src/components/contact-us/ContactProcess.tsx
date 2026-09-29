const steps = [
  {
    step: "1",
    title: "You reach out",
    body: "Send us your problem on WhatsApp, by phone, or through the form on this page — whichever is easiest. A short description of what's wrong is enough to start.",
  },
  {
    step: "2",
    title: "We ask a few questions",
    body: "We'll confirm your location in Dammam, ask for a photo or short video if it helps, and check whether the issue needs an urgent visit or can be scheduled normally.",
  },
  {
    step: "3",
    title: "We arrange a visit",
    body: "Once we understand the problem, we agree on a time that works for you. For jobs that involve multiple issues, we'll cover them in the same visit where possible.",
  },
  {
    step: "4",
    title: "The work gets done",
    body: "The technician assesses the issue on site, explains what needs to happen, and carries out the repair or maintenance. You can follow up on WhatsApp afterward if anything needs attention.",
  },
];

export default function ContactProcess() {
  return (
    <section className="border-t border-ink-900/10 py-16 sm:py-20">
      <div className="container-edge max-w-3xl">
        <p className="section-label">What happens next</p>
        <h2 className="mt-4 font-serif text-2xl tracking-tight text-ink-950 sm:text-3xl">
          From message to finished job.
        </h2>

        <ol className="mt-10 space-y-8">
          {steps.map((s) => (
            <li key={s.step} className="flex gap-5">
              <span
                aria-hidden="true"
                className="flex h-9 w-9 flex-none items-center justify-center rounded-full border border-ink-900/15 font-mono text-sm text-ink-700"
              >
                {s.step}
              </span>
              <div>
                <h3 className="font-semibold text-ink-950">{s.title}</h3>
                <p className="mt-1.5 text-[15px] leading-relaxed text-ink-600">{s.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
