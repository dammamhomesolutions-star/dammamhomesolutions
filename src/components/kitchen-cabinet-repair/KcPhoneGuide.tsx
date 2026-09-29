"use client";

import { useState } from "react";
import { buildWhatsAppLink } from "@/lib/site-config";
import { kcPhotoShots } from "@/lib/kitchen-cabinet-repair";

function partOpacity(part: string, highlight: string) {
  return part === highlight ? 1 : 0.3;
}

export default function KcPhoneGuide() {
  const [activeIndex, setActiveIndex] = useState(0);
  const highlight = kcPhotoShots[activeIndex].highlight;

  return (
    <section id="send-photos" className="border-b border-walnut-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-walnut-700">Show us the cabinet</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            Show us the cabinet.
          </h2>
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-[0.5fr_0.5fr_1fr] lg:items-center">
          <div className="mx-auto w-40 sm:w-44">
            <div className="rounded-[2rem] border-[6px] border-ink-950 bg-ink-950 p-1.5 shadow-lg">
              <div className="overflow-hidden rounded-[1.4rem]">
                <svg viewBox="0 0 220 280" className="aspect-[4/5] h-auto w-full" aria-hidden="true">
                  <rect x="0" y="0" width="220" height="280" fill="url(#kc-ivory)" />
                  <rect x="30" y="30" width="160" height="100" fill="url(#kc-walnut)" filter="url(#kc-wood-grain)" />
                  <rect x="30" y="150" width="70" height="100" fill="url(#kc-walnut-dark)" />
                  <rect x="115" y="150" width="75" height="100" fill="url(#kc-walnut)" filter="url(#kc-wood-grain)" />
                  <circle cx="160" cy="200" r="5" fill="#eceef0" />
                </svg>
              </div>
            </div>
            <p className="mt-3 text-center text-xs text-ink-500">Photo {kcPhotoShots[activeIndex].tag}</p>
          </div>

          <div className="mx-auto w-full max-w-[11rem]">
            <svg viewBox="0 0 200 200" className="h-auto w-full" aria-hidden="true">
              <rect x="0" y="0" width="200" height="200" fill="#ebe4d6" opacity={highlight === "body" ? 1 : 0.4} style={{ transition: "opacity 300ms" }} />
              <rect
                x="40"
                y="30"
                width="120"
                height="140"
                fill="url(#kc-walnut-dark)"
                style={{ opacity: partOpacity("body", highlight), transition: "opacity 300ms" }}
              />
              <rect
                x="54"
                y="44"
                width="46"
                height="112"
                fill="url(#kc-walnut)"
                filter="url(#kc-wood-grain)"
                style={{ opacity: partOpacity("door", highlight), transition: "opacity 300ms" }}
              />
              <g style={{ opacity: partOpacity("hinge", highlight), transition: "opacity 300ms" }}>
                <rect x="48" y="60" width="8" height="18" rx="2" fill="#838d96" />
                <rect x="48" y="120" width="8" height="18" rx="2" fill="#838d96" />
              </g>
              <rect
                x="106"
                y="44"
                width="48"
                height="112"
                fill="url(#kc-walnut)"
                style={{ opacity: partOpacity("drawer", highlight), transition: "opacity 300ms" }}
              />
              <rect
                x="98"
                y="44"
                width="4"
                height="112"
                fill="#94472a"
                style={{ opacity: partOpacity("edge", highlight), transition: "opacity 300ms" }}
              />
            </svg>
          </div>

          <div>
            <div role="group" aria-label="Photo shot" className="grid gap-2.5 sm:grid-cols-2">
              {kcPhotoShots.map((shot, i) => {
                const isActive = i === activeIndex;
                return (
                  <button
                    key={shot.tag}
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => setActiveIndex(i)}
                    className={`focus-ring rounded-md border px-4 py-3 text-left transition-colors ${
                      isActive ? "border-walnut-700 bg-walnut-100/50" : "border-walnut-900/15 hover:border-walnut-600"
                    }`}
                  >
                    <span className="font-mono text-xs text-walnut-500">{shot.tag}</span>
                    <span className="mt-1 block text-sm font-semibold text-ink-950">{shot.title}</span>
                    <span className="mt-0.5 block text-xs text-ink-600">{shot.body}</span>
                  </button>
                );
              })}
            </div>

            <p className="mt-5 text-xs text-ink-500">
              If you&rsquo;re not sure what part is causing the problem,
              that&rsquo;s okay. Show us the cabinet and describe what
              isn&rsquo;t working.
            </p>

            <a
              href={buildWhatsAppLink("Hello Dammam Home Solutions, I'd like to send a few photos of my kitchen cabinet. ")}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring mt-4 inline-flex items-center rounded-full bg-ink-950 px-6 py-3 text-sm font-semibold text-sand-50 transition-transform hover:scale-[1.02]"
            >
              Send Cabinet Photos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
