import DcCtas from "./DcCtas";

export default function DcFinalCta() {
  return (
    <section aria-labelledby="dc-final" className="relative overflow-hidden bg-mint-900 py-24 text-sand-50 sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-80 w-[36rem] -translate-x-1/2 rounded-full"
        style={{ background: "radial-gradient(closest-side, rgba(148,202,189,0.22), transparent)" }}
      />
      <div className="container-edge relative max-w-3xl text-center">
        <h2 id="dc-final" className="font-serif text-3xl tracking-tight sm:text-5xl">Get the property ready for what&rsquo;s next</h2>
        <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-mint-100/90">
          Whether you&rsquo;re moving in, moving out or giving your home a
          much-needed reset, tell us what needs cleaning and we&rsquo;ll help
          define the right scope.
        </p>
        <DcCtas tone="dark" secondaryLabel="Call Dammam Home Solutions" className="mt-9 sm:justify-center" />
      </div>
    </section>
  );
}
