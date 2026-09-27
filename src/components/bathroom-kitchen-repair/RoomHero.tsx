import { buildWhatsAppLink } from "@/lib/site-config";
import RoomHeroVisual from "./RoomHeroVisual";

const heroWhatsAppMessage =
  "Hello Dammam Home Solutions, I'd like help with a bathroom or kitchen repair.";

export default function RoomHero() {
  return (
    <section className="relative overflow-hidden bg-sand-50">
      <div className="container-edge grid gap-12 py-14 sm:py-18 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-24">
        <div className="max-w-xl animate-fadeUp">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-800">
            Dammam · Bathroom &amp; kitchen repair
          </p>
          <h1 className="mt-3 text-sm font-semibold uppercase tracking-[0.08em] text-ink-500">
            Bathroom &amp; Kitchen Repair in Dammam
          </h1>
          <h2 className="mt-5 font-serif text-4xl leading-[1.1] tracking-tight text-ink-950 sm:text-5xl">
            Two rooms. A lot of things that can go wrong.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-ink-700">
            From a leaking kitchen sink to a damaged bathroom surface,
            Dammam Home Solutions handles practical repair and maintenance
            work for bathrooms and kitchens in Dammam.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#choose-the-room"
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-rust-700 px-7 py-3.5 text-sm font-semibold text-sand-50 shadow-sm transition-transform hover:scale-[1.02]"
            >
              Tell Us What Needs Fixing
            </a>
            <a
              href={buildWhatsAppLink(heroWhatsAppMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-full border border-ink-900/20 px-7 py-3.5 text-sm font-semibold text-ink-900 transition-colors hover:bg-ink-900/5"
            >
              WhatsApp Us
            </a>
          </div>

          <p className="mt-8 text-sm text-ink-500">
            You don&rsquo;t need to know the right trade first — start
            with the room and what you&rsquo;re seeing.
          </p>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="animate-fadeIn [animation-delay:150ms]">
            <RoomHeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
