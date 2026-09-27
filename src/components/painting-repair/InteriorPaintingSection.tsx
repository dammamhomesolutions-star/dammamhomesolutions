import { buildWhatsAppLink } from "@/lib/site-config";

const topics = ["Repainting", "Touch-ups", "Surface preparation", "Color refresh", "Wall and ceiling painting"];

export default function InteriorPaintingSection() {
  return (
    <section className="py-20 sm:py-24">
      <div className="container-edge max-w-2xl">
        <p className="section-label">Interior painting</p>
        <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
          A room can feel different without changing the room.
        </h2>
        <p className="mt-4 text-ink-700">
          Most interior painting work is straightforward once the surface
          is in good condition — the finish is what changes, not the
          layout or the furniture.
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {topics.map((t) => (
            <span key={t} className="rounded-full border border-ink-900/15 bg-stone-100/60 px-4 py-2 text-sm text-ink-700">
              {t}
            </span>
          ))}
        </div>

        <a
          href={buildWhatsAppLink("Hello Dammam Home Solutions, I'd like to request interior painting.")}
          target="_blank"
          rel="noopener noreferrer"
          className="focus-ring mt-7 inline-flex items-center rounded-full bg-rust-700 px-6 py-3 text-sm font-semibold text-sand-50 transition-transform hover:scale-[1.02]"
        >
          Request Interior Painting
        </a>
      </div>
    </section>
  );
}
