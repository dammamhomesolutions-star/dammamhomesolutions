"use client";

import { useState } from "react";
import { buildWhatsAppLink } from "@/lib/site-config";
import { wdPhotoShots } from "@/lib/window-door-repair";

const viewBoxes = ["0 0 320 220", "60 60 160 120", "180 40 140 140", "0 0 320 220"];

function partOpacity(part: string, highlight: string) {
  if (highlight === "wall") return 1;
  return part === highlight ? 1 : 0.3;
}

export default function WdPhoneGuide() {
  const [activeIndex, setActiveIndex] = useState(0);
  const highlight = wdPhotoShots[activeIndex].highlight;

  return (
    <section id="send-photos" className="border-b border-glass-900/10 bg-glass-100/50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-glass-700">Show us the door or window</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            Show us the door or window.
          </h2>
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-[0.55fr_0.45fr_1fr] lg:items-center">
          <div className="mx-auto w-40 sm:w-48">
            <div className="rounded-[2rem] border-[6px] border-ink-950 bg-ink-950 p-1.5 shadow-lg">
              <div className="overflow-hidden rounded-[1.4rem] transition-transform duration-300">
                <svg viewBox={viewBoxes[activeIndex]} className="aspect-[4/5] h-auto w-full" aria-hidden="true">
                  <rect x="0" y="0" width="320" height="220" fill="url(#wd-sand)" />
                  <rect x="60" y="40" width="200" height="150" fill="url(#wd-frame-dark)" />
                  <rect x="76" y="54" width="168" height="122" fill="url(#wd-glass)" />
                  <circle cx="216" cy="115" r="5" fill="#eef3f5" />
                  <rect x="216" y="111" width="28" height="8" rx="4" fill="#eef3f5" />
                </svg>
              </div>
            </div>
            <p className="mt-3 text-center text-xs text-ink-500">Photo {wdPhotoShots[activeIndex].tag}</p>
          </div>

          <div className="mx-auto w-full max-w-[12rem]">
            <svg viewBox="0 0 200 200" className="h-auto w-full" aria-hidden="true">
              <rect x="0" y="0" width="200" height="200" fill="#ebe4d6" opacity={highlight === "wall" ? 1 : 0.4} style={{ transition: "opacity 300ms" }} />
              <rect
                x="40"
                y="30"
                width="120"
                height="140"
                fill="url(#wd-frame-dark)"
                style={{ opacity: partOpacity("frame", highlight), transition: "opacity 300ms" }}
              />
              <rect
                x="54"
                y="44"
                width="92"
                height="112"
                fill="url(#wd-glass)"
                style={{ opacity: partOpacity("glass", highlight), transition: "opacity 300ms" }}
              />
              <g style={{ opacity: partOpacity("hardware", highlight), transition: "opacity 300ms" }}>
                <circle cx="130" cy="100" r="5" fill="#c17f3e" />
                <rect x="130" y="96" width="24" height="8" rx="4" fill="#c17f3e" />
              </g>
            </svg>
          </div>

          <div>
            <div role="group" aria-label="Photo shot" className="grid gap-2.5 sm:grid-cols-2">
              {wdPhotoShots.map((shot, i) => {
                const isActive = i === activeIndex;
                return (
                  <button
                    key={shot.tag}
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => setActiveIndex(i)}
                    className={`focus-ring rounded-md border px-4 py-3 text-left transition-colors ${
                      isActive ? "border-glass-700 bg-glass-100" : "border-glass-900/15 hover:border-glass-700"
                    }`}
                  >
                    <span className="font-mono text-xs text-glass-500">{shot.tag}</span>
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
              href={buildWhatsAppLink("Hello Dammam Home Solutions, I'd like to send a few photos of my door or window. ")}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="focus-ring mt-4 inline-flex items-center rounded-full bg-ink-950 px-6 py-3 text-sm font-semibold text-sand-50 transition-transform hover:scale-[1.02]"
            >
              Send Photos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
