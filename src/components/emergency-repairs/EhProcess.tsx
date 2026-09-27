import { processSteps } from "@/lib/emergency-repairs";

export default function EhProcess() {
  return (
    <section className="border-b border-ink-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-ember-700">What to expect</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            Once you contact us.
          </h2>
        </div>

        <ol className="mt-12 max-w-xl border-l border-ink-900/10 pl-8">
          {processSteps.map((step, i) => (
            <li key={step.tag} className={`relative ${i < processSteps.length - 1 ? "pb-9" : ""}`}>
              <span
                aria-hidden="true"
                className="absolute -left-[calc(2rem+5px)] top-1 h-2.5 w-2.5 rounded-full border-2 border-ember-600 bg-sand-50"
              />
              <p className="font-mono text-xs text-ink-400">{step.tag}</p>
              <h3 className="mt-1 font-serif text-lg text-ink-950">{step.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-600">{step.body}</p>
            </li>
          ))}
        </ol>

        <p className="mt-2 max-w-xl text-sm text-ink-500">
          We don&rsquo;t promise a fixed arrival time, an immediate
          technician, a guaranteed diagnosis, a first-visit fix or a fixed
          price up front — the actual scope depends on what&rsquo;s found.
        </p>
      </div>
    </section>
  );
}
