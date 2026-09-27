import { buildWhatsAppLink } from "@/lib/site-config";

export default function CeilingSection() {
  return (
    <section className="bg-ink-950 py-20 text-sand-100 sm:py-24">
      <div className="container-edge max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-rust-500">
          Ceilings
        </p>
        <h2 className="mt-4 font-serif text-3xl tracking-tight text-sand-50 sm:text-4xl">
          Look up. The ceiling tells a different story.
        </h2>
        <p className="mt-5 leading-relaxed text-ink-300">
          Ceiling staining, peeling paint and visible marks are usually
          approached the same way as a wall — repainting once the surface
          is prepared. The difference is what to check first.
        </p>
        <p className="mt-4 text-ink-400">
          If the staining looks moisture-related, the source may need
          attention before repainting — see our{" "}
          <a href="/waterproofing/" className="text-rust-400 underline underline-offset-4 hover:text-rust-300">
            waterproofing
          </a>{" "}
          service, or, if water is actively appearing, our{" "}
          <a href="/plumbing-repair/" className="text-rust-400 underline underline-offset-4 hover:text-rust-300">
            plumbing &amp; water leak repair
          </a>{" "}
          service.
        </p>

        <a
          href={buildWhatsAppLink("Hello Dammam Home Solutions, I need ceiling painting or repair. Here's what I'm seeing: ")}
          target="_blank"
          rel="noopener noreferrer"
          className="focus-ring mt-7 inline-flex items-center rounded-full bg-rust-600 px-6 py-3 text-sm font-semibold text-sand-50 transition-transform hover:scale-[1.02]"
        >
          WhatsApp about a ceiling
        </a>
      </div>
    </section>
  );
}
