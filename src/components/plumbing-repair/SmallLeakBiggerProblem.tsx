import { buildWhatsAppLink } from "@/lib/site-config";

export default function SmallLeakBiggerProblem() {
  return (
    <section className="bg-sand-100/60 py-20 sm:py-24">
      <div className="container-edge max-w-3xl">
        <p className="section-label text-teal-700">Why it&apos;s worth acting early</p>
        <p className="mt-6 font-serif text-3xl leading-snug tracking-tight text-ink-950 sm:text-4xl">
          A small leak can leave a bigger mark.
        </p>
        <p className="mt-6 leading-relaxed text-ink-700">
          Depending on the amount and duration of moisture, water leaks can
          affect nearby surfaces — staining, damp patches, damaged paint or
          plaster, and general deterioration around the affected area. How
          much this matters depends on how long it&rsquo;s been happening
          and where.
        </p>
        <p className="mt-4 text-sm text-ink-500">
          If water is anywhere near sockets, wiring or a distribution
          board, treat that as the priority — see our{" "}
          <a
            href="/electrical-repair/"
            className="focus-ring rounded-sm underline decoration-ink-900/20 underline-offset-4 hover:decoration-teal-600"
          >
            electrical repair
          </a>{" "}
          service for anything on that side of it.
        </p>
        <a
          href={buildWhatsAppLink(
            "Hello Dammam Home Solutions, I'd like to request a plumbing assessment. Here's what I'm seeing: "
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="focus-ring mt-8 inline-flex items-center rounded-full bg-ink-950 px-6 py-3 text-sm font-semibold text-sand-50 transition-transform hover:scale-[1.02]"
        >
          Request a Plumbing Assessment
        </a>
      </div>
    </section>
  );
}
