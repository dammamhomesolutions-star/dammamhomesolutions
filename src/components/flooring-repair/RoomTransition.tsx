"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { flRoomContexts, type FlRoomContext } from "@/lib/flooring-repair";

function RoomBackdrop({ id }: { id: FlRoomContext["id"] }) {
  return (
    <svg viewBox="0 0 320 200" className="absolute inset-0 h-full w-full" aria-hidden="true">
      <rect x="0" y="0" width="320" height="90" fill="url(#fl-ivory)" />

      {id === "living" && (
        <>
          <rect x="30" y="30" width="60" height="40" fill="#c4c0b4" opacity="0.6" />
          <rect x="230" y="20" width="50" height="50" fill="#9c7752" opacity="0.4" />
        </>
      )}
      {id === "bedroom" && <rect x="120" y="20" width="90" height="50" fill="#d9bfa0" opacity="0.5" />}
      {id === "kitchen" && (
        <>
          <rect x="20" y="30" width="280" height="18" fill="#78746a" opacity="0.5" />
          <rect x="150" y="48" width="30" height="22" fill="#5c584f" opacity="0.6" />
        </>
      )}
      {id === "bathroom" && <rect x="220" y="25" width="60" height="45" fill="#b8ccd4" opacity="0.5" />}
      {id === "entry" && <rect x="10" y="10" width="20" height="80" fill="#78746a" opacity="0.5" />}
      {id === "other" && <rect x="140" y="30" width="40" height="40" fill="#c4c0b4" opacity="0.4" />}
    </svg>
  );
}

export default function RoomTransition() {
  const [activeId, setActiveId] = useState(flRoomContexts[0].id);

  return (
    <section className="border-b border-concrete-900/10 bg-concrete-100/50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-clay-700">Where is it happening?</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            The floor stays central. The room changes.
          </h2>
          <p className="mt-4 text-ink-600">Where is the flooring problem?</p>
        </div>

        <div role="tablist" aria-label="Room" className="mt-8 flex flex-wrap gap-2.5">
          {flRoomContexts.map((room) => {
            const isActive = room.id === activeId;
            return (
              <button
                key={room.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveId(room.id)}
                className={`focus-ring rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                  isActive ? "border-ink-950 bg-ink-950 text-sand-50" : "border-concrete-900/15 text-ink-700 hover:border-clay-600"
                }`}
              >
                {room.label}
              </button>
            );
          })}
        </div>

        <div className="relative mx-auto mt-10 aspect-[16/10] w-full max-w-2xl overflow-hidden rounded-md border border-concrete-900/10">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeId}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0"
            >
              <RoomBackdrop id={activeId} />
            </motion.div>
          </AnimatePresence>

          {/* the floor itself, unchanged across selections */}
          <svg viewBox="0 0 320 200" className="absolute inset-0 h-full w-full" aria-hidden="true">
            <rect x="0" y="90" width="320" height="110" fill="url(#fl-tile)" filter="url(#fl-stone-noise)" />
            {Array.from({ length: 7 }).map((_, i) => (
              <line key={i} x1={(i + 1) * 40} y1="90" x2={(i + 1) * 40} y2="200" stroke="#9a968a" strokeWidth="1" opacity="0.5" />
            ))}
            <line x1="0" y1="90" x2="320" y2="90" stroke="#9a968a" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
    </section>
  );
}
