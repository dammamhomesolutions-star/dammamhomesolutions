const reactiveSteps = [
  "Something broke.",
  "Customer contacts the company.",
  "Problem is assessed.",
  "Repair is carried out if appropriate.",
];

const preventiveSteps = [
  "Something needs attention.",
  "Property condition is reviewed.",
  "Potential maintenance needs are identified.",
  "Necessary work is planned according to actual condition.",
];

function FlowColumn({
  tag,
  title,
  steps,
  accent,
}: {
  tag: string;
  title: string;
  steps: string[];
  accent: boolean;
}) {
  return (
    <div>
      <p className={`font-mono text-xs tracking-wide ${accent ? "text-moss-700" : "text-ink-400"}`}>
        {tag}
      </p>
      <h3 className="mt-2 font-serif text-xl text-ink-950">{title}</h3>
      <ol className="mt-6 space-y-0">
        {steps.map((step, i) => (
          <li key={step}>
            <p className="text-[15px] text-ink-800">{step}</p>
            {i < steps.length - 1 && (
              <p
                aria-hidden="true"
                className={`py-1.5 text-sm ${accent ? "text-moss-600" : "text-ink-400"}`}
              >
                ↓
              </p>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default function PmPreventiveReactive() {
  return (
    <section className="border-b border-ink-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-moss-700">Two ways a repair starts</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            Reactive and preventive maintenance start from different moments.
          </h2>
        </div>

        <div className="mt-12 grid gap-12 sm:grid-cols-2 sm:gap-16">
          <FlowColumn tag="A." title="Reactive" steps={reactiveSteps} accent={false} />
          <FlowColumn tag="B." title="Preventive / Routine" steps={preventiveSteps} accent />
        </div>

        <p className="mt-10 max-w-2xl text-sm italic text-ink-500">
          Routine attention does not guarantee that nothing will break in the
          future. It simply reviews the property&rsquo;s condition and plans
          work around what&rsquo;s actually found.
        </p>
      </div>
    </section>
  );
}
