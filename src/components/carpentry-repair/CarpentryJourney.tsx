const steps = [
  { title: "Tell us what isn't working", body: "Door, lock, handle, hinge, cabinet or other issue." },
  { title: "Show us the problem", body: "Photo or video can help explain the situation." },
  { title: "Clarify the job", body: "Location, condition and required work." },
  { title: "Repair or adjust", body: "Appropriate work is carried out." },
  { title: "Check the result", body: "The door, hardware or repaired item should function as intended within the agreed scope." },
];

function CheckMark({ filled }: { filled: boolean }) {
  return (
    <span
      aria-hidden="true"
      className={`flex h-6 w-6 flex-none items-center justify-center rounded-md border-2 ${
        filled ? "border-amber-700 bg-amber-700" : "border-ink-900/25"
      }`}
    >
      {filled && (
        <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
          <path d="M1 5 L4.5 8.5 L11 1" stroke="#faf7f0" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
    </span>
  );
}

export default function CarpentryJourney() {
  return (
    <section className="py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-xl">
          <p className="section-label text-amber-800">How this works</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            From annoying to working again.
          </h2>
        </div>

        <ol className="mt-12 max-w-xl space-y-5">
          {steps.map((step, i) => (
            <li key={step.title} className="flex items-start gap-4">
              <CheckMark filled={i < steps.length - 1} />
              <div>
                <h3 className="font-serif text-lg text-ink-950">{step.title}</h3>
                <p className="mt-1 text-ink-700">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
