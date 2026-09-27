import { buildWhatsAppLink } from "@/lib/site-config";

export default function BathroomWetAreaSection() {
  return (
    <section id="bathroom-wet-area" className="bg-ink-950 py-20 text-sand-100 sm:py-24">
      <div className="container-edge max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-500">
          Bathrooms &amp; wet areas
        </p>
        <h2 className="mt-4 font-serif text-3xl tracking-tight text-sand-50 sm:text-4xl">
          Water belongs in the bathroom. Not inside the wall.
        </h2>
        <p className="mt-5 leading-relaxed text-ink-300">
          Wet areas are built to handle water — until moisture starts
          reaching surfaces it shouldn&rsquo;t. Recurring dampness,
          deterioration around fittings, or a wall that stays damp near a
          shower are worth looking into rather than repeatedly cleaning or
          repainting over.
        </p>
        <p className="mt-4 text-ink-400">
          Not every bathroom leak is a waterproofing failure — plumbing and
          waterproofing issues can overlap, and sometimes it&rsquo;s one
          rather than the other. If it seems more plumbing-related, see
          our{" "}
          <a href="/plumbing-repair/" className="text-cyan-400 underline underline-offset-4 hover:text-cyan-300">
            plumbing &amp; water leak repair
          </a>{" "}
          service.
        </p>

        <a
          href={buildWhatsAppLink(
            "Hello Dammam Home Solutions, I have a moisture problem in a bathroom or wet area. Here's what I'm seeing: "
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="focus-ring mt-7 inline-flex items-center rounded-full bg-cyan-600 px-6 py-3 text-sm font-semibold text-ink-950 transition-transform hover:scale-[1.02]"
        >
          WhatsApp about a wet area
        </a>
      </div>
    </section>
  );
}
