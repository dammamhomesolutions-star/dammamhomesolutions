import Link from "next/link";

const flow = ["Visible damage", "Possible source", "Correct service", "Surface repair"];

export default function TrDontCoverDamage() {
  return (
    <section className="border-b border-ink-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge max-w-2xl">
        <p className="section-label !text-rust-700">Before covering it up</p>
        <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
          A new layer does not always solve an old problem.
        </h2>
        <p className="mt-4 leading-relaxed text-ink-600">
          Painting over surrounding damage, adding sealant, or visually
          covering a problem may not address what&rsquo;s actually causing
          it. Water-related damage, for example, could relate to plumbing,
          waterproofing, or the surface itself — worth understanding before
          it&rsquo;s covered over.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-x-2 gap-y-2 text-[15px] font-medium text-ink-800">
          {flow.map((step, i) => (
            <span key={step} className="flex items-center gap-2">
              {step}
              {i < flow.length - 1 && (
                <span aria-hidden="true" className="text-ink-400">
                  →
                </span>
              )}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
          <Link
            href="/plumbing-repair/"
            className="focus-ring text-sm font-semibold text-ink-950 underline decoration-rust-600 decoration-2 underline-offset-4 hover:text-rust-700"
          >
            Plumbing
          </Link>
          <Link
            href="/waterproofing/"
            className="focus-ring text-sm font-semibold text-ink-950 underline decoration-rust-600 decoration-2 underline-offset-4 hover:text-rust-700"
          >
            Waterproofing
          </Link>
        </div>
      </div>
    </section>
  );
}
