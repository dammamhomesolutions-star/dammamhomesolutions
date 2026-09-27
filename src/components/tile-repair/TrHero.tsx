import { buildWhatsAppLink } from "@/lib/site-config";
import TrTileGrid from "./TrTileGrid";

export default function TrHero() {
  return (
    <section className="border-b border-ink-900/10 bg-sand-50 pb-16 pt-14 sm:pb-20 sm:pt-16">
      <div className="container-edge">
        <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-rust-700">
          <span className="inline-block h-1.5 w-1.5 bg-rust-600" aria-hidden="true" />
          Tile &amp; grout restoration
        </p>

        <h1 className="mt-5 max-w-2xl font-serif text-4xl leading-[1.12] tracking-tight text-ink-950 sm:text-5xl">
          When the surface is damaged, start with the tile.
        </h1>

        <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-ink-600 sm:text-base">
          Cracked tiles, damaged grout, loose tiles and worn tiled surfaces
          can affect how a bathroom, kitchen or other area looks and
          functions. We help assess the surface and determine the
          appropriate repair.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
          <a
            href={buildWhatsAppLink("Hello Dammam Home Solutions, I'd like to send a tile repair request. Here's what I'm noticing: ")}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring inline-flex items-center rounded-full bg-ink-950 px-6 py-3 text-sm font-semibold text-sand-50 transition-transform hover:scale-[1.02]"
          >
            Send a Tile Repair Request
          </a>
          <a
            href="#what-are-you-seeing"
            className="focus-ring group inline-flex items-center gap-1.5 text-sm font-semibold text-ink-800"
          >
            Show Us the Damage
            <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">
              →
            </span>
          </a>
        </div>
      </div>

      <div className="container-edge mt-12">
        <TrTileGrid />
      </div>
    </section>
  );
}
