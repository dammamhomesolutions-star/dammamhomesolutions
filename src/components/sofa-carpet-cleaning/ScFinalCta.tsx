import ScCtas from "./ScCtas";

export default function ScFinalCta() {
  return (
    <section aria-labelledby="sc-final" className="relative overflow-hidden bg-glass-900 py-24 text-sand-50 sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-80 w-[36rem] -translate-x-1/2 rounded-full"
        style={{ background: "radial-gradient(closest-side, rgba(184,204,212,0.2), transparent)" }}
      />
      <div className="container-edge relative max-w-3xl text-center">
        <h2 id="sc-final" className="font-serif text-3xl tracking-tight sm:text-5xl">Give your sofa or carpet a fresh start</h2>
        <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-glass-100">
          Tell us what needs cleaning, the problem you&rsquo;re seeing and the
          material if you know it. We&rsquo;ll help work out the right cleaning
          scope for your sofa, carpet or upholstered furniture.
        </p>
        <ScCtas tone="dark" className="mt-9 sm:justify-center" quoteFirst />
      </div>
    </section>
  );
}
