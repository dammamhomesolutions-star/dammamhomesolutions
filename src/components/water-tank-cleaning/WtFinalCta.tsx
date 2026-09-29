"use client";

import { motion } from "framer-motion";
import { buildWhatsAppLink } from "@/lib/site-config";

export default function WtFinalCta() {
  return (
    <section id="contact" className="relative overflow-hidden bg-ink-950 py-24 sm:py-28">
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full"
        style={{ background: "radial-gradient(circle, rgba(72,160,143,0.28), transparent 70%)" }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease: "easeOut" }}
      />

      <div className="container-edge relative">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <p className="section-label !text-mint-300">When did you last check?</p>
            <h2 className="mt-4 max-w-md font-serif text-3xl tracking-tight text-sand-50 sm:text-4xl">
              Request a tank cleaning.
            </h2>
            <p className="mt-4 max-w-md leading-relaxed text-ink-300">
              Send a photo of your tank and roughly how long it&rsquo;s been
              since it was last cleaned.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
              <a
                href={buildWhatsAppLink("Hello Dammam Home Solutions, I'd like to request a water tank cleaning. ")}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring inline-flex items-center rounded-full bg-mint-600 px-6 py-3 text-sm font-semibold text-ink-950 transition-transform hover:scale-[1.02]"
              >
                Request Tank Cleaning
              </a>
              <a
                href={buildWhatsAppLink("Hello Dammam Home Solutions, I'd like to send a photo of my water tank. ")}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring text-sm font-semibold text-sand-100 underline underline-offset-4 hover:text-mint-400"
              >
                Send a Photo
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
            <rect x="120" y="20" width="80" height="140" rx="10" fill="none" stroke="#4a5468" strokeWidth="2" />
            <rect x="130" y="30" width="60" height="120" rx="6" fill="url(#wt-clean-water)" opacity="0.85" />
          </motion.svg>
        </div>
      </div>
    </section>
  );
}
