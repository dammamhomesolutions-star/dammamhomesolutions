import AiIcon from "./AiIcon";

const issues = [
  "Indoor unit placed where airflow is restricted",
  "Refrigerant lines poorly routed or connected",
  "Lines without enough insulation",
  "A drain that's blocked, flat or badly routed",
  "Outdoor unit boxed in or unstable",
  "Electrical connection not suited to the unit",
  "Gaps around wall openings left unsealed",
  "System not properly tested after installation",
];

const answers = [
  {
    q: "How much does AC installation cost in Dammam?",
    a: "It depends on the AC type, capacity, number of units, piping, drainage, electrical requirements, access and whether existing infrastructure can be reused. A site-specific quotation is more accurate than a fixed generic price.",
  },
  {
    q: "How long does AC installation take?",
    a: "It depends on the number of units, AC type, piping, drainage, electrical work and site access. A simple replacement can differ significantly from a completely new installation.",
  },
  {
    q: "Can an old AC installation be reused?",
    a: "Some existing components may be reusable if they're compatible and in good condition, but piping, drainage, electrical connections and mounting should be checked first.",
  },
];

export default function AiProblem() {
  return (
    <section aria-label="Why installation quality matters" className="border-b border-ink-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <p className="section-label !text-teal-700">The real problem</p>
            <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">Good AC performance starts with good installation</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-600">
              A correctly sized AC can still perform poorly if it&rsquo;s
              installed badly. These details don&rsquo;t always cause
              problems, but they&rsquo;re where problems often start.
            </p>
            <p className="mt-4 rounded-xl border-l-4 border-teal-600 bg-teal-100/70 px-4 py-3 text-sm leading-relaxed text-ink-800">
              Installation quality is one part of AC performance, alongside
              equipment selection, maintenance, the building and how the
              system is used.
            </p>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2 lg:col-span-7">
            {issues.map((i) => (
              <li key={i} className="flex items-start gap-3 rounded-xl border border-ink-900/10 bg-sand-100/50 p-4 text-sm text-ink-800">
                <AiIcon name="alert" className="mt-0.5 h-4 w-4 flex-none text-ember-700" />
                {i}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {answers.map((x) => (
            <div key={x.q} className="border-l-4 border-teal-600 pl-5">
              <h2 className="font-serif text-xl tracking-tight text-ink-950">{x.q}</h2>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-700">{x.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
