"use client";

import { useState } from "react";
import { buildWhatsAppLink } from "@/lib/site-config";
import { photoShots } from "@/lib/ceiling-repair";

const viewBoxes = ["0 0 320 200", "70 60 140 100", "0 120 160 80", "160 0 160 120"];
const rotations = ["rotate-0", "rotate-0", "rotate-0", "-rotate-2"];

export default function CrPhoneGuide() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="border-b border-ink-900/10 bg-sand-100/50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-rust-700">Show us the ceiling</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            A ceiling photo can be surprisingly useful.
          </h2>
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
          <div className="mx-auto w-40 sm:w-48">
            <div className="rounded-[2rem] border-[6px] border-ink-950 bg-ink-950 p-1.5 shadow-lg">
              <div className={`overflow-hidden rounded-[1.4rem] transition-transform duration-300 ${rotations[activeIndex]}`}>
                <svg viewBox={viewBoxes[activeIndex]} className="aspect-[4/5] h-auto w-full" aria-hidden="true">
                  <rect x="0" y="0" width="320" height="200" fill="url(#ceiling-plaster)" filter="url(#ceiling-noise)" />
                  <circle cx="260" cy="45" r="14" fill="#e4dcc7" stroke="#b4bac6" strokeWidth="1.2" />
                  <ellipse cx="120" cy="110" rx="50" ry="34" fill="url(#ceiling-stain)" />
                  <path d="M40 150 L70 175" fill="none" stroke="#333a49" strokeWidth="1.6" strokeLinecap="round" />
                  <line x1="0" y1="0" x2="0" y2="200" stroke="#ded2ba" strokeWidth="1.4" />
                </svg>
              </div>
            </div>
          </div>

          <div>
            <div role="group" aria-label="Photo shot" className="grid gap-2.5 sm:grid-cols-2">
              {photoShots.map((shot, i) => {
                const isActive = i === activeIndex;
                return (
                  <button
                    key={shot.tag}
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => setActiveIndex(i)}
                    className={`focus-ring rounded-md border px-4 py-3 text-left transition-colors ${
                      isActive ? "border-rust-700 bg-rust-100/50" : "border-ink-900/15 hover:border-rust-600"
                    }`}
                  >
                    <span className="font-mono text-xs text-ink-400">{shot.tag}</span>
                    <span className="mt-1 block text-sm font-semibold text-ink-950">{shot.title}</span>
                    <span className="mt-0.5 block text-xs text-ink-600">{shot.body}</span>
                  </button>
                );
              })}
            </div>

            <p className="mt-5 text-xs text-ink-500">
              Photos help us understand faster — they don&rsquo;t guarantee a
              diagnosis on their own.
            </p>

            <a
              href={buildWhatsAppLink("Hello Dammam Home Solutions, I'd like to send a few photos of my ceiling. ")}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="focus-ring mt-4 inline-flex items-center rounded-full bg-ink-950 px-6 py-3 text-sm font-semibold text-sand-50 transition-transform hover:scale-[1.02]"
            >
              Send Ceiling Photos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
