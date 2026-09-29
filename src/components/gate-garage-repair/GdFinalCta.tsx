"use client";

import { motion } from "framer-motion";
import { buildWhatsAppLink } from "@/lib/site-config";

export default function GdFinalCta() {
  return (
    <section id="contact" className="relative overflow-hidden bg-ink-950 py-24 sm:py-28">
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full"
        style={{ background: "radial-gradient(circle, rgba(199,106,63,0.28), transparent 70%)" }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease: "easeOut" }}
      />

      <div className="container-edge relative">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <p className="section-label !text-ink-300">Recognize the issue?</p>
            <h2 className="mt-4 max-w-md font-serif text-3xl tracking-tight text-sand-50 sm:text-4xl">
              Request a repair assessment.
            </h2>
            <p className="mt-4 max-w-md leading-relaxed text-ink-300">
              Send a few photos or a short video of the gate or garage door
              and tell us what you&rsquo;ve noticed.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
              <a
                href={buildWhatsAppLink("Hello Dammam Home Solutions, I'd like to request a gate or garage door repair assessment. ")}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="focus-ring inline-flex items-center rounded-full bg-rust-600 px-6 py-3 text-sm font-semibold text-ink-950 transition-transform hover:scale-[1.02]"
              >
                Request a Repair Assessment
              </a>
              <a
                href={buildWhatsAppLink("Hello Dammam Home Solutions, I'd like to send photos of a gate or garage door issue. ")}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="focus-ring text-sm font-semibold text-sand-100 underline underline-offset-4 hover:text-rust-400"
              >
                Send Photos
              </a>
            </div>
          </div>

          <motion.svg
            viewBox="0 0 320 180"
            className="mx-auto h-auto w-full max-w-sm"
            aria-hidden="true"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <rect x="0" y="0" width="320" height="180" fill="#191d25" />
            <rect x="0" y="130" width="320" height="50" fill="#232833" />
            <rect x="20" y="40" width="140" height="90" fill="none" stroke="#4a5468" strokeWidth="3" />
            <rect x="30" y="50" width="120" height="72" fill="url(#gd-panel-dark)" />
            <rect x="190" y="70" width="10" height="60" fill="#4a5468" />
            <rect x="200" y="80" width="70" height="50" fill="none" stroke="#4a5468" strokeWidth="3" />
            <circle cx="15" cy="60" r="2.5" fill="#eef3f5" />
            <circle cx="305" cy="60" r="2.5" fill="#eef3f5" />
          </motion.svg>
        </div>
      </div>
    </section>
  );
}
