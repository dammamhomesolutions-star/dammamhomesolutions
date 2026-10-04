import PcCtas from "./PcCtas";

export default function PcFinalCta() {
  return (
    <section aria-labelledby="pc-final" className="relative overflow-hidden bg-moss-900 py-24 text-sand-50 sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-80 w-[36rem] -translate-x-1/2 rounded-full"
        style={{ background: "radial-gradient(closest-side, rgba(219,225,205,0.18), transparent)" }}
      />
      <div className="container-edge relative max-w-3xl text-center">
        <h2 id="pc-final" className="font-serif text-3xl tracking-tight sm:text-5xl">
          Not sure what pest you&rsquo;re dealing with?
        </h2>
        <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-moss-100/90">
          You don&rsquo;t need to identify the pest yourself. Tell us what
          you&rsquo;ve seen, where you&rsquo;ve seen it and how often it&rsquo;s
          happening, and we&rsquo;ll help work out the next step.
        </p>
        <PcCtas tone="dark" secondaryLabel="Call Dammam Home Solutions" className="mt-9 sm:justify-center" />
      </div>
    </section>
  );
}
