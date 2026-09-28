"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { waterCrossoverServices } from "@/lib/ceiling-repair";

const nodes = ["Water source", "Ceiling surface", "Visible mark"];

export default function CrWaterCrossover() {
  return (
    <section className="border-b border-ink-900/10 bg-sand-100/50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-rust-700">Before it&rsquo;s painted over</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            A ceiling stain is visible. The cause may not be.
          </h2>
        </div>

        <div className="mt-12 flex flex-col items-center gap-2 sm:flex-row sm:justify-center sm:gap-0">
          {nodes.map((node, i) => (
            <div key={node} className="flex items-center gap-2 sm:gap-0">
              <span className="rounded-full border border-ink-900/15 bg-sand-50 px-5 py-2.5 text-sm font-medium text-ink-800">
                {node}
              </span>
              {i < nodes.length - 1 && (
                <svg width="64" height="20" viewBox="0 0 64 20" className="mx-2 hidden sm:block" aria-hidden="true">
                  <motion.line
                    x1="2"
                    y1="10"
                    x2="62"
                    y2="10"
                    stroke="#c76a3f"
                    strokeWidth="2"
                    strokeDasharray="5 5"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: i * 0.2 }}
                  />
                </svg>
              )}
            </div>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-xl text-center text-ink-600">
          The source needs to be assessed before the surface is restored.
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {waterCrossoverServices.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="focus-ring text-sm font-semibold text-ink-950 underline decoration-rust-600 decoration-2 underline-offset-4 hover:text-rust-700"
            >
              {service.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
