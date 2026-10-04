import AiCtas from "./AiCtas";

export default function AiFinalCta() {
  return (
    <section aria-labelledby="ai-final" className="relative overflow-hidden bg-teal-900 py-24 text-sand-50 sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-80 w-[36rem] -translate-x-1/2 rounded-full"
        style={{ background: "radial-gradient(closest-side, rgba(143,196,196,0.22), transparent)" }}
      />
      <div className="container-edge relative max-w-3xl text-center">
        <h2 id="ai-final" className="font-serif text-3xl tracking-tight sm:text-5xl">Planning a new AC installation?</h2>
        <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-teal-100">
          Before choosing an installation method, it&rsquo;s worth checking the
          room, equipment, placement, drainage, piping and electrical
          requirements. Tell us what you&rsquo;re installing and where, and
          we&rsquo;ll help define the next step.
        </p>
        <AiCtas tone="dark" primaryLabel="Request an Installation Quote" secondaryLabel="Call Dammam Home Solutions" className="mt-9 sm:justify-center" />
      </div>
    </section>
  );
}
