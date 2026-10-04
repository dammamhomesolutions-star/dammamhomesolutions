"use client";

import { useMemo, useState } from "react";
import { buildWhatsAppLink } from "@/lib/site-config";
import { aiExposure, aiInsulation, aiRoomTypes, aiWindows } from "@/lib/ac-installation";
import AiIcon from "./AiIcon";

const factors = [
  "Room size",
  "Ceiling height",
  "Windows",
  "Sun exposure",
  "Number of occupants",
  "Insulation",
  "Room orientation",
  "Heat-producing equipment",
  "Property type",
  "Local climate",
  "Existing cooling conditions",
];

const inputClass =
  "focus-ring mt-1.5 w-full rounded-lg border border-ink-900/15 bg-sand-50 px-3 py-2 text-sm text-ink-950";

// Deliberately does NOT output a tonnage or BTU figure. It compares the
// room's heat-gain factors against an "average" room of the same size and
// sends the details for a proper assessment.
export default function AiSizing() {
  const [length, setLength] = useState("5");
  const [width, setWidth] = useState("4");
  const [height, setHeight] = useState("3");
  const [roomType, setRoomType] = useState(aiRoomTypes[0]);
  const [windows, setWindows] = useState(aiWindows[1]);
  const [sun, setSun] = useState(aiExposure[1]);
  const [people, setPeople] = useState("2");
  const [insulation, setInsulation] = useState(aiInsulation[1]);
  const [current, setCurrent] = useState("");

  const result = useMemo(() => {
    const l = parseFloat(length) || 0;
    const w = parseFloat(width) || 0;
    const h = parseFloat(height) || 0;
    const area = l * w;
    const volume = area * h;
    const drivers: string[] = [];
    let score = 0;
    if (h > 3.2) { score += 1; drivers.push("High ceiling"); }
    if (windows === aiWindows[2]) { score += 1; drivers.push("Large or many windows"); }
    if (windows === aiWindows[0]) score -= 1;
    if (sun === aiExposure[2]) { score += 2; drivers.push("Strong afternoon sun"); }
    if (sun === aiExposure[1]) score += 1;
    const n = parseInt(people) || 0;
    if (n > 6) { score += 2; drivers.push("Many occupants"); } else if (n > 3) { score += 1; drivers.push("Several occupants"); }
    if (roomType === "Kitchen") { score += 2; drivers.push("Cooking heat"); }
    if (roomType === "Shop" || roomType === "Office") { score += 1; drivers.push("Equipment and visitors"); }
    if (insulation === aiInsulation[2]) { score += 2; drivers.push("Roof heat / poor insulation"); }
    if (insulation === aiInsulation[0]) score -= 1;
    const band =
      score <= 0 ? "Lower than a typical room this size" : score <= 2 ? "About typical for a room this size" : score <= 4 ? "Higher than a typical room this size" : "Much higher than a typical room this size";
    const level = Math.max(0, Math.min(4, score <= 0 ? 0 : score <= 2 ? 1 : score <= 4 ? 2 : 3));
    return { area, volume, band, level, drivers };
  }, [length, width, height, windows, sun, people, roomType, insulation]);

  const message = [
    "Hello Dammam Home Solutions, I'd like an AC installation assessment. Room details:",
    `Room: ${roomType}`,
    `Size: ${length} × ${width} m, ceiling ${height} m (≈${result.area.toFixed(1)} m²)`,
    `Windows: ${windows}`,
    `Sun: ${sun}`,
    `People: ${people}`,
    `Insulation: ${insulation}`,
    current.trim() ? `Current AC: ${current.trim()}` : "",
  ]
    .filter(Boolean)
    .join("\n");

  return (
    <section id="sizing" aria-labelledby="ai-sizing" className="border-b border-ink-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="section-label !text-teal-700">Capacity</p>
            <h2 id="ai-sizing" className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">How do you choose the right AC size?</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-600">
              Floor area alone isn&rsquo;t enough. Two rooms of the same size
              can need very different cooling — a shaded bedroom and a
              west-facing majlis under the roof are not the same job. An
              undersized unit runs constantly and struggles; an oversized one
              cycles on and off and can leave the room feeling clammy.
            </p>
            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.12em] text-ink-500">Sizing depends on</p>
            <ul className="mt-2 flex flex-wrap gap-2">
              {factors.map((f) => (
                <li key={f} className="rounded-full bg-teal-100 px-3 py-1 text-xs text-teal-900">{f}</li>
              ))}
            </ul>
          </div>

          {/* Room assessment tool */}
          <div className="rounded-2xl border border-ink-900/10 bg-sand-100/60 p-6 sm:p-8 lg:col-span-7">
            <h3 className="font-serif text-2xl text-ink-950">Help us understand your room</h3>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <label className="block text-sm font-medium text-ink-800">
                Length (m)
                <input type="number" min="1" step="0.1" inputMode="decimal" value={length} onChange={(e) => setLength(e.target.value)} className={inputClass} />
              </label>
              <label className="block text-sm font-medium text-ink-800">
                Width (m)
                <input type="number" min="1" step="0.1" inputMode="decimal" value={width} onChange={(e) => setWidth(e.target.value)} className={inputClass} />
              </label>
              <label className="block text-sm font-medium text-ink-800">
                Ceiling height (m)
                <input type="number" min="2" step="0.1" inputMode="decimal" value={height} onChange={(e) => setHeight(e.target.value)} className={inputClass} />
              </label>
              <label className="block text-sm font-medium text-ink-800">
                Room type
                <select value={roomType} onChange={(e) => setRoomType(e.target.value)} className={inputClass}>
                  {aiRoomTypes.map((o) => <option key={o}>{o}</option>)}
                </select>
              </label>
              <label className="block text-sm font-medium text-ink-800">
                Windows
                <select value={windows} onChange={(e) => setWindows(e.target.value)} className={inputClass}>
                  {aiWindows.map((o) => <option key={o}>{o}</option>)}
                </select>
              </label>
              <label className="block text-sm font-medium text-ink-800">
                Sun exposure
                <select value={sun} onChange={(e) => setSun(e.target.value)} className={inputClass}>
                  {aiExposure.map((o) => <option key={o}>{o}</option>)}
                </select>
              </label>
              <label className="block text-sm font-medium text-ink-800">
                People usually in the room
                <input type="number" min="0" step="1" inputMode="numeric" value={people} onChange={(e) => setPeople(e.target.value)} className={inputClass} />
              </label>
              <label className="block text-sm font-medium text-ink-800">
                Insulation
                <select value={insulation} onChange={(e) => setInsulation(e.target.value)} className={inputClass}>
                  {aiInsulation.map((o) => <option key={o}>{o}</option>)}
                </select>
              </label>
              <label className="block text-sm font-medium text-ink-800">
                Current AC, if replacing
                <input type="text" value={current} onChange={(e) => setCurrent(e.target.value)} placeholder="e.g. old split, 2 ton" className={inputClass} />
              </label>
            </div>

            <div className="mt-6 rounded-2xl bg-ink-950 p-5 text-sand-50" aria-live="polite">
              <div className="flex flex-wrap items-baseline gap-x-6 gap-y-1 font-mono text-xs text-teal-300">
                <span>AREA ≈ {result.area.toFixed(1)} m²</span>
                <span>VOLUME ≈ {result.volume.toFixed(0)} m³</span>
              </div>
              <p className="mt-3 text-xs font-semibold uppercase tracking-[0.14em] text-ink-400">Estimated cooling requirement</p>
              <p className="mt-1 font-serif text-xl">{result.band}</p>
              <div className="mt-3 grid grid-cols-4 gap-1" aria-hidden="true">
                {[0, 1, 2, 3].map((i) => (
                  <span key={i} className={`h-2 rounded-full ${i <= result.level ? "bg-teal-300" : "bg-ink-800"}`} />
                ))}
              </div>
              {result.drivers.length > 0 && (
                <p className="mt-3 text-sm text-ink-300">Driven by: {result.drivers.join(", ").toLowerCase()}.</p>
              )}
              <p className="mt-4 flex gap-2 border-t border-sand-100/10 pt-4 text-xs leading-relaxed text-ink-300">
                <AiIcon name="alert" className="h-4 w-4 flex-none text-ember-500" />
                An estimate only — not a capacity recommendation. These details
                help determine the right installation approach; final equipment
                sizing is confirmed from the property and site conditions.
              </p>
              <a
                href={buildWhatsAppLink(message)}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="focus-ring mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-teal-300 px-5 py-3 text-sm font-semibold text-ink-950 sm:w-auto"
              >
                Request an Installation Assessment
                <AiIcon name="arrow" className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
