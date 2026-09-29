import { buildWhatsAppLink } from "@/lib/site-config";
import CabinetAlignmentVisual from "./CabinetAlignmentVisual";

const topics = ["Cabinet doors", "Hinges", "Alignment", "Handles", "Drawers", "Minor woodwork repairs"];

export default function CabinetDrawerSection() {
  return (
    <section id="cabinets-drawers" className="py-20 sm:py-24">
      <div className="container-edge grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
        <div className="max-w-xl">
          <p className="section-label text-amber-800">Cabinets &amp; drawers</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            When the cabinet door stops lining up.
          </h2>
          <p className="mt-4 text-ink-700">
            Kitchen and storage cabinets go out of alignment the same way
            doors do — usually the hinge, not the cabinet itself.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {topics.map((t) => (
              <span key={t} className="rounded-full border border-ink-900/15 bg-stone-100/60 px-4 py-2 text-sm text-ink-700">
                {t}
              </span>
            ))}
          </div>

          <p className="mt-4 text-sm text-ink-500">
            This is about repairing existing cabinets, not kitchen
            remodeling or custom cabinetry.
          </p>

          <a
            href={buildWhatsAppLink("Hello Dammam Home Solutions, I have a cabinet or drawer problem. Here's what's happening: ")}
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="focus-ring mt-6 inline-flex items-center rounded-full bg-rust-700 px-6 py-3 text-sm font-semibold text-sand-50 transition-transform hover:scale-[1.02]"
          >
            WhatsApp about a cabinet or drawer
          </a>
        </div>

        <div className="flex justify-center lg:justify-end">
          <CabinetAlignmentVisual />
        </div>
      </div>
    </section>
  );
}
