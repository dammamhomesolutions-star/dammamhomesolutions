"use client";

import { useState } from "react";
import { buildWhatsAppLink } from "@/lib/site-config";
import { flPhotoShots } from "@/lib/flooring-repair";

function regionOpacity(region: string, highlight: string) {
  if (highlight === "wide") return 1;
  return region === highlight ? 1 : 0.3;
}

export default function PhotoRequest() {
  const [activeIndex, setActiveIndex] = useState(0);
  const highlight = flPhotoShots[activeIndex].highlight;

  return (
    <section id="send-photos" className="border-b border-concrete-900/10 bg-concrete-100/50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-clay-700">Show us the floor</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            Show us the floor.
          </h2>
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-[0.5fr_0.5fr_1fr] lg:items-center">
          <div className="mx-auto w-40 sm:w-44">
            <div className="rounded-[2rem] border-[6px] border-ink-950 bg-ink-950 p-1.5 shadow-lg">
              <div className="overflow-hidden rounded-[1.4rem]">
                <svg viewBox="0 0 220 280" className="aspect-[4/5] h-auto w-full" aria-hidden="true">
                  <rect x="0" y="0" width="220" height="90" fill="url(#fl-ivory)" />
                  <rect x="0" y="90" width="220" height="190" fill="url(#fl-tile)" filter="url(#fl-stone-noise)" />
                  <path d="M60 150 L100 180 L88 195" fill="none" stroke="#464339" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
              </div>
            </div>
            <p className="mt-3 text-center text-xs text-ink-500">Photo {flPhotoShots[activeIndex].tag}</p>
          </div>

          <div className="mx-auto w-full max-w-[11rem]">
            <svg viewBox="0 0 200 200" className="h-auto w-full" aria-hidden="true">
              <rect x="0" y="0" width="200" height="200" fill="#ebe4d6" opacity={highlight === "wide" ? 1 : 0.4} style={{ transition: "opacity 300ms" }} />
              <rect
                x="20"
                y="120"
                width="160"
                height="60"
                fill="url(#fl-tile)"
                style={{ opacity: regionOpacity("close", highlight), transition: "opacity 300ms" }}
              />
              <path
                d="M60 140 L100 160 L88 172"
                fill="none"
                stroke="#464339"
                strokeWidth="1.6"
                strokeLinecap="round"
                style={{ opacity: regionOpacity("close", highlight), transition: "opacity 300ms" }}
              />
              <rect
                x="20"
                y="110"
                width="160"
                height="10"
                fill="#78746a"
                style={{ opacity: regionOpacity("junction", highlight), transition: "opacity 300ms" }}
              />
              <rect
                x="140"
                y="130"
                width="40"
                height="50"
                fill="none"
                stroke="#b8916c"
                strokeWidth="2"
                style={{ opacity: regionOpacity("angle", highlight), transition: "opacity 300ms" }}
              />
            </svg>
          </div>

          <div>
            <div role="group" aria-label="Photo shot" className="grid gap-2.5 sm:grid-cols-2">
              {flPhotoShots.map((shot, i) => {
                const isActive = i === activeIndex;
                return (
                  <button
                    key={shot.tag}
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => setActiveIndex(i)}
                    className={`focus-ring rounded-md border px-4 py-3 text-left transition-colors ${
                      isActive ? "border-clay-700 bg-clay-100/50" : "border-concrete-900/15 hover:border-clay-600"
                    }`}
                  >
                    <span className="font-mono text-xs text-clay-600">{shot.tag}</span>
                    <span className="mt-1 block text-sm font-semibold text-ink-950">{shot.title}</span>
                    <span className="mt-0.5 block text-xs text-ink-600">{shot.body}</span>
                  </button>
                );
              })}
            </div>

            <p className="mt-5 text-xs text-ink-500">
              If you&rsquo;re not sure what the damage is called, simply show
              us what you&rsquo;re seeing.
            </p>

            <a
              href={buildWhatsAppLink("Hello Dammam Home Solutions, I'd like to send a few photos of my floor. ")}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring mt-4 inline-flex items-center rounded-full bg-ink-950 px-6 py-3 text-sm font-semibold text-sand-50 transition-transform hover:scale-[1.02]"
            >
              Send Floor Photos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
