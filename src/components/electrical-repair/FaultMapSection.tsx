"use client";

import { useState } from "react";

type MapFocus = "breaker" | "room" | "socket" | "light";

const toggles: { id: MapFocus; label: string }[] = [
  { id: "breaker", label: "Breaker" },
  { id: "room", label: "One Room" },
  { id: "socket", label: "Socket" },
  { id: "light", label: "Light" },
];

const ACTIVE = "#2451c4";
const NEUTRAL = "#c9bd9e";
const NEUTRAL_LINE = "#ded2ba";

export default function FaultMapSection() {
  const [focus, setFocus] = useState<MapFocus>("light");

  const supplyToBreaker = true;
  const breakerToRoom = focus !== "breaker";
  const roomToFixtures = focus === "room" || focus === "socket" || focus === "light";

  const socketOn = focus === "socket";
  const lightOn = focus === "light";
  const roomOn = focus === "room";
  const breakerOn = focus === "breaker";

  return (
    <section className="bg-ink-950 py-20 text-sand-100 sm:py-24">
      <div className="container-edge grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
        <div className="max-w-lg">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-400">
            How a home is wired, roughly
          </p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-sand-50 sm:text-4xl">
            One conceptual map, not your exact wiring.
          </h2>
          <p className="mt-4 leading-relaxed text-ink-300">
            Power moves from the main supply, through the distribution
            board, into a room&rsquo;s circuit, and out to a switch,
            socket or light. This is a simplified idea of that path — every
            property is wired a little differently.
          </p>

          <div role="group" aria-label="Highlight a part of the electrical path" className="mt-7 flex flex-wrap gap-2">
            {toggles.map((t) => (
              <button
                key={t.id}
                onClick={() => setFocus(t.id)}
                aria-pressed={focus === t.id}
                className={`focus-ring rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                  focus === t.id
                    ? "border-blue-500 bg-blue-500/10 text-blue-300"
                    : "border-sand-100/15 text-ink-300 hover:border-sand-100/35"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        <svg viewBox="0 0 320 380" className="w-full max-w-sm justify-self-center" role="img" aria-label="Simplified electrical path from main supply to switch, socket and light">
          {/* main supply */}
          <g transform="translate(160,30)">
            <rect x="-70" y="-20" width="140" height="40" rx="8" fill="none" stroke={NEUTRAL} strokeWidth="1.5" />
            <text x="0" y="5" textAnchor="middle" fontSize="12" fill="#e7edf1" fontFamily="var(--font-poppins), sans-serif">
              Main supply
            </text>
          </g>

          <path d="M160 50 V100" stroke={supplyToBreaker ? ACTIVE : NEUTRAL_LINE} strokeWidth="2" strokeDasharray={supplyToBreaker ? "1 7" : "0"} />

          {/* breaker */}
          <g transform="translate(160,130)">
            <rect x="-90" y="-22" width="180" height="44" rx="8" fill={breakerOn ? "#1c3a8a" : "none"} stroke={breakerOn ? ACTIVE : NEUTRAL} strokeWidth="1.5" />
            <text x="0" y="5" textAnchor="middle" fontSize="12" fill="#e7edf1" fontFamily="var(--font-poppins), sans-serif">
              Distribution / breaker area
            </text>
          </g>

          <path d="M160 152 V202" stroke={breakerToRoom ? ACTIVE : NEUTRAL_LINE} strokeWidth="2" strokeDasharray={breakerToRoom ? "1 7" : "0"} />

          {/* room circuit */}
          <g transform="translate(160,232)">
            <rect x="-70" y="-20" width="140" height="40" rx="8" fill={roomOn ? "#1c3a8a" : "none"} stroke={roomOn ? ACTIVE : NEUTRAL} strokeWidth="1.5" />
            <text x="0" y="5" textAnchor="middle" fontSize="12" fill="#e7edf1" fontFamily="var(--font-poppins), sans-serif">
              Room circuit
            </text>
          </g>

          <path d="M160 252 V292" stroke={roomToFixtures ? ACTIVE : NEUTRAL_LINE} strokeWidth="2" strokeDasharray={roomToFixtures ? "1 7" : "0"} />

          {/* fixtures row: switch / socket / light */}
          <g transform="translate(160,292)">
            <path d="M-90 0 H90" stroke={roomToFixtures ? ACTIVE : NEUTRAL_LINE} strokeWidth="1.5" />
            <path d="M-90 0 V30" stroke={NEUTRAL_LINE} strokeWidth="1.5" />
            <path d="M0 0 V30" stroke={socketOn ? ACTIVE : NEUTRAL_LINE} strokeWidth="1.5" strokeDasharray={socketOn ? "1 6" : "0"} />
            <path d="M90 0 V30" stroke={lightOn ? ACTIVE : NEUTRAL_LINE} strokeWidth="1.5" strokeDasharray={lightOn ? "1 6" : "0"} />
          </g>

          <g transform="translate(70,352)" textAnchor="middle" fontFamily="var(--font-poppins), sans-serif" fontSize="11">
            <circle r="16" fill="none" stroke={NEUTRAL} strokeWidth="1.5" />
            <text y="4" fill="#c9bd9e" fontSize="10">SW</text>
            <text y="26" fill="#9aa5b1">Switch</text>
          </g>
          <g transform="translate(160,352)" textAnchor="middle" fontFamily="var(--font-poppins), sans-serif" fontSize="11">
            <circle r="16" fill={socketOn ? "#1c3a8a" : "none"} stroke={socketOn ? ACTIVE : NEUTRAL} strokeWidth="1.5" />
            <text y="4" fill={socketOn ? "#bcd0ff" : "#c9bd9e"} fontSize="10">SK</text>
            <text y="26" fill={socketOn ? "#bcd0ff" : "#9aa5b1"}>Socket</text>
          </g>
          <g transform="translate(250,352)" textAnchor="middle" fontFamily="var(--font-poppins), sans-serif" fontSize="11">
            <circle r="16" fill={lightOn ? "#1c3a8a" : "none"} stroke={lightOn ? ACTIVE : NEUTRAL} strokeWidth="1.5" />
            <text y="4" fill={lightOn ? "#bcd0ff" : "#c9bd9e"} fontSize="10">L</text>
            <text y="26" fill={lightOn ? "#bcd0ff" : "#9aa5b1"}>Light</text>
          </g>
        </svg>
      </div>
    </section>
  );
}
