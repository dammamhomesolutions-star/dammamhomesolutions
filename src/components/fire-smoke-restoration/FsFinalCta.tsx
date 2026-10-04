import FsCtas from "./FsCtas";

export default function FsFinalCta() {
  return (
    <section aria-labelledby="fs-final" className="relative overflow-hidden bg-ink-950 py-24 text-sand-50 sm:py-28">
      <div
        aria-hidden="true"
        className="fs-drift pointer-events-none absolute left-1/2 top-0 h-80 w-[36rem] -translate-x-1/2 rounded-full"
        style={{ background: "radial-gradient(closest-side, rgba(214,154,95,0.22), transparent)" }}
      />
      <div className="container-edge relative max-w-3xl text-center">
        <svg viewBox="0 0 120 60" className="mx-auto h-12 w-24 text-ember-500" aria-hidden="true">
          <path d="M10 50h100" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M24 50V26l36-18 36 18v24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" pathLength={1} className="[stroke-dasharray:1] motion-safe:animate-drawLine" />
          <path d="M52 50V36h16v14" fill="none" stroke="currentColor" strokeWidth="2" />
        </svg>
        <h2 id="fs-final" className="mt-6 font-serif text-3xl tracking-tight sm:text-5xl">
          Ready to start restoring your property?
        </h2>
        <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-ink-300">
          Whether the fire affected one room or the entire property, the
          first step is understanding what has been damaged and what can be
          restored. Tell us what happened and where the property is located
          in Dammam.
        </p>
        <FsCtas tone="dark" primaryLabel="Request an Assessment" secondaryLabel="Call Now" className="mt-9 sm:justify-center" />
        <p className="mt-5 text-xs text-ink-400">
          Photos can help us understand the situation before the assessment.
        </p>
      </div>
    </section>
  );
}
