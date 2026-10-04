import RrCtas from "./RrCtas";

export default function RrFinalCta() {
  return (
    <section aria-labelledby="rr-final" className="relative overflow-hidden bg-ink-950 py-24 text-sand-50 sm:py-28">
      <svg viewBox="0 0 1200 300" className="pointer-events-none absolute inset-x-0 bottom-0 h-40 w-full opacity-30" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0 220h1200M0 240h1200" stroke="#4a5468" strokeWidth="2" />
        <path d="M80 220V120h300v100M420 220V90h420v130M880 220V140h240v80" fill="none" stroke="#4a5468" strokeWidth="2" />
        <path className="fs-flow" d="M420 90h420" stroke="#4a9797" strokeWidth="3" />
      </svg>
      <div className="container-edge relative max-w-3xl text-center">
        <h2 id="rr-final" className="font-serif text-3xl tracking-tight sm:text-5xl">
          Not sure whether to repair or replace your roof?
        </h2>
        <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-ink-300">
          Don&rsquo;t make the decision based on a leak alone. A proper
          assessment can find the source of the problem and show whether
          repair, restoration or full replacement makes the most sense for
          your property.
        </p>
        <RrCtas tone="dark" secondaryLabel="Call Dammam Home Solutions" className="mt-9 sm:justify-center" />
      </div>
    </section>
  );
}
