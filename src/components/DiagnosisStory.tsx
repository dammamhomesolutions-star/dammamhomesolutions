interface Flow {
  title: string;
  steps: string[];
}

const flows: Flow[] = [
  {
    title: "A wet wall may not be a painting problem.",
    steps: [
      "Water mark",
      "Possible source",
      "Inspection",
      "Repair",
      "Surface restoration",
    ],
  },
  {
    title: "AC dripping isn't always the compressor.",
    steps: [
      "AC dripping",
      "Drainage issue",
      "Inspection",
      "Repair",
      "Cooling restored",
    ],
  },
];

function FlowRow({ flow }: { flow: Flow }) {
  return (
    <div>
      <h3 className="font-serif text-lg text-ink-950 sm:text-xl">{flow.title}</h3>
      <div className="mt-6 flex flex-wrap items-center gap-x-2 gap-y-4">
        {flow.steps.map((step, i) => (
          <div key={step} className="flex items-center gap-2">
            <span
              className={`rounded-full px-4 py-2 text-sm ${
                i === 0
                  ? "bg-ink-950 text-sand-50"
                  : i === flow.steps.length - 1
                    ? "border border-rust-600 text-rust-700"
                    : "border border-ink-900/15 text-ink-700"
              }`}
            >
              {step}
            </span>
            {i < flow.steps.length - 1 && (
              <span aria-hidden="true" className="h-px w-6 bg-ink-900/25 sm:w-10" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function DiagnosisStory() {
  return (
    <section className="bg-ink-950 py-20 text-sand-100 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-rust-500">
            How we approach a job
          </p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-sand-50 sm:text-4xl">
            A repair is rarely just a repair.
          </h2>
          <p className="mt-4 leading-relaxed text-ink-300">
            What&rsquo;s visible on the surface often has a cause somewhere
            else. We look at the problem before recommending the work —
            not the other way around.
          </p>
        </div>

        <div className="mt-14 space-y-12">
          {flows.map((flow) => (
            <FlowRow key={flow.title} flow={flow} />
          ))}
        </div>
      </div>
    </section>
  );
}
