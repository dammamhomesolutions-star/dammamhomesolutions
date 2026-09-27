"use client";

import { motion } from "framer-motion";
import { buildWhatsAppLink } from "@/lib/site-config";

const shots = [
  { tag: "01", title: "Full area", body: "A wider shot of the tiled area." },
  { tag: "02", title: "Close-up of damage", body: "A closer look at the tile or grout in question." },
  { tag: "03", title: "Surrounding surface", body: "What's around the affected area." },
  { tag: "04", title: "Optional side angle", body: "Helpful if the damage is easier to see at an angle." },
];

export default function TrPhotoRequest() {
  return (
    <section className="border-b border-ink-900/10 bg-sand-100/50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-rust-700">Show us the surface</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            Show us the surface.
          </h2>
          <p className="mt-4 text-ink-600">
            A few clear photos can help us understand the tile, grout and
            surrounding area before discussing the repair.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {shots.map((shot, i) => (
            <motion.div
              key={shot.tag}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, delay: i * 0.08, ease: "easeOut" }}
              className="rounded-md border border-ink-900/10 bg-sand-50 p-5"
            >
              <p className="font-mono text-xs text-rust-700">{shot.tag}</p>
              <h3 className="mt-2 text-sm font-semibold text-ink-950">{shot.title}</h3>
              <p className="mt-1.5 text-[13px] leading-relaxed text-ink-600">{shot.body}</p>
            </motion.div>
          ))}
        </div>

        <a
          href={buildWhatsAppLink("Hello Dammam Home Solutions, I'd like to send a few photos of a tile/grout issue. Here's a quick note: ")}
          target="_blank"
          rel="noopener noreferrer"
          className="focus-ring mt-8 inline-flex items-center rounded-full bg-ink-950 px-6 py-3 text-sm font-semibold text-sand-50 transition-transform hover:scale-[1.02]"
        >
          Send Tile Photos
        </a>
      </div>
    </section>
  );
}
