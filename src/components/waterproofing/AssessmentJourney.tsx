const steps = [
  "Visible symptom",
  "Context",
  "Assessment",
  "Source / repair requirement",
  "Waterproofing or appropriate repair",
  "Surface restoration where needed",
];

export default function AssessmentJourney() {
  return (
    <section className="py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label text-cyan-800">How a job actually proceeds</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            From symptom to solution.
          </h2>
          <p className="mt-4 text-ink-700">
            The appropriate solution depends on the actual condition —
            this is the shape the process tends to take, not a fixed
            script.
          </p>
        </div>

        <div className="relative mt-16 overflow-x-auto pb-4">
          <div className="relative min-w-[720px]">
            <div aria-hidden="true" className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 bg-ink-900/15" />
            <div
              aria-hidden="true"
              className="absolute left-0 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-cyan-700"
              style={{ animation: "moisture-journey-dot 9s linear infinite" }}
            />
            <div className="relative grid grid-cols-6">
              {steps.map((step, i) => (
                <div key={step} className={`flex flex-col items-center px-2 text-center ${i % 2 === 1 ? "pt-14" : "pb-14"}`}>
                  <span aria-hidden="true" className="h-2.5 w-2.5 flex-none rounded-full bg-ink-950 ring-4 ring-sand-50" />
                  <p className="mt-3 max-w-[9rem] text-sm text-ink-800">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <style>{`
          @keyframes moisture-journey-dot {
            0% { left: 0%; }
            100% { left: 100%; }
          }
          @media (prefers-reduced-motion: reduce) {
            [style*="moisture-journey-dot"] { animation: none !important; }
          }
        `}</style>
      </div>
    </section>
  );
}
