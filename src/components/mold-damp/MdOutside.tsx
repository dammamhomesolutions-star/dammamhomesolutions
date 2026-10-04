import Link from "next/link";
import { Spec } from "./MdUi";

const a = "focus-ring rounded-sm font-semibold text-ink-950 underline decoration-glass-600 underline-offset-4 hover:text-glass-700";

// Condensation (inside) and exterior sources (outside), side by side.
export default function MdOutside() {
  return (
    <section aria-labelledby="md-cond" className="bg-sand-50 py-20 sm:py-28">
      <div className="container-edge grid gap-16 lg:grid-cols-2">
        <div>
          <Spec code="S-07">Humidity &amp; condensation</Spec>
          <h2 id="md-cond" className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">Not every damp patch comes from a leak.</h2>
          <figure className="mt-8 rounded-2xl border border-ink-900/10 bg-glass-100/60 p-5">
            <svg viewBox="0 0 400 180" className="h-auto w-full" role="img" aria-label="Diagram: warm, humid room air meets a cooler wall surface and moisture condenses on it as droplets">
              <rect x="300" y="10" width="40" height="160" fill="#7fa0b0" />
              <text x="320" y="100" textAnchor="middle" fontSize="11" fill="#eef3f5" className="font-mono" transform="rotate(-90 320 100)">COOLER SURFACE</text>
              {[40, 80, 120].map((y, i) => (
                <g key={y}>
                  <path className="md-flow" d={`M30 ${y}C110 ${y - 12} 190 ${y + 12} 290 ${y}`} stroke="#c98246" strokeWidth="2" fill="none" strokeDasharray="6 8" style={{ animationDelay: `${i * 0.3}s` }} />
                </g>
              ))}
              <text x="30" y="160" fontSize="12" fill="#4d545c">Warm, humid indoor air</text>
              {[[294, 50], [292, 90], [295, 130], [291, 150]].map(([x, y], i) => (
                <path key={i} className="md-drip" style={{ animationDelay: `${i * 0.5}s` }} d={`M${x} ${y}c3 4 5 7 5 9a5 5 0 0 1-10 0c0-2 2-5 5-9z`} fill="#3d5a6b" />
              ))}
            </svg>
            <figcaption className="mt-2 text-xs text-ink-500">Simplified diagram.</figcaption>
          </figure>
          <p className="mt-6 text-[15px] leading-relaxed text-ink-700">
            Condensation happens when humid indoor air meets a cooler surface and
            the moisture in the air turns back into water. Over time, that can be
            enough to cause damp patches and mold — with no leak at all.
          </p>
          <p className="mt-4 text-sm font-semibold text-ink-950">Conditions that can contribute:</p>
          <ul className="mt-2 grid grid-cols-2 gap-x-4 gap-y-1.5 text-sm text-ink-700">
            {["Humid indoor air", "Cooler surfaces", "Limited ventilation", "Temperature differences", "Enclosed areas and cupboards", "Bathrooms and kitchens"].map((x) => <li key={x}>· {x}</li>)}
          </ul>
          <p className="mt-5 rounded-xl border border-glass-700/20 bg-glass-100/60 p-4 text-sm leading-relaxed text-ink-700">
            Air-conditioning can play a part — cooled surfaces, blocked condensate
            drains or dirty ducts in some cases — but not every mold problem is an
            AC problem. Where it is, see{" "}
            <Link href="/ac-repair/" className={a}>AC repair</Link> or{" "}
            <Link href="/ac-duct-cleaning-dammam/" className={a}>AC duct cleaning</Link>.
          </p>
        </div>

        <div>
          <Spec code="S-08">Exterior sources</Spec>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">Sometimes the problem starts outside.</h2>
          <figure className="mt-8 rounded-2xl border border-ink-900/10 bg-glass-900 p-5">
            <svg viewBox="0 0 400 260" className="h-auto w-full" role="img" aria-label="Cross-section of a house wall and roof showing water entering through the roof, a crack in the exterior finish, the edge of a window and pooled water at the base of the wall, each travelling inward">
              <rect x="40" y="40" width="280" height="16" fill="#3d5a6b" />
              <rect x="300" y="40" width="20" height="200" fill="#3d5a6b" />
              <rect x="40" y="56" width="260" height="184" fill="#26333f" />
              <rect x="300" y="110" width="20" height="50" fill="#b8ccd4" fillOpacity="0.35" />
              <path d="M0 240H400" stroke="#b8ccd4" strokeOpacity="0.5" />
              <path d="M320 190l-6 8 4 6-5 8" stroke="#eef3f5" strokeWidth="1.5" fill="none" />
              <rect x="320" y="232" width="70" height="8" fill="#7fa0b0" opacity="0.6" />
              {[
                { d: "M200 20C200 30 200 40 196 60", lx: 206, ly: 22, t: "Roof" },
                { d: "M370 196C350 196 330 200 300 204", lx: 340, ly: 186, t: "Exterior crack" },
                { d: "M370 112C350 116 330 118 300 124", lx: 334, ly: 102, t: "Window edge" },
                { d: "M360 230C340 230 320 228 300 226", lx: 330, ly: 254, t: "Drainage" },
              ].map((p) => (
                <g key={p.t}>
                  <path className="md-flow" d={p.d} stroke="#b8ccd4" strokeWidth="2.5" fill="none" strokeDasharray="6 8" />
                  <text x={p.lx} y={p.ly} fontSize="11" fill="#eef3f5" textAnchor={p.lx > 300 ? "middle" : "start"}>{p.t}</text>
                </g>
              ))}
              <ellipse cx="290" cy="210" rx="10" ry="22" fill="#7fa0b0" opacity="0.5" />
              <ellipse cx="190" cy="66" rx="40" ry="8" fill="#7fa0b0" opacity="0.5" />
              <text x="60" y="150" fontSize="11" fill="#b8ccd4" className="font-mono">INSIDE</text>
            </svg>
            <figcaption className="mt-2 text-xs text-glass-300">Simplified cross-section.</figcaption>
          </figure>
          <p className="mt-6 text-[15px] leading-relaxed text-ink-700">
            An indoor stain can sometimes be associated with something outside: a
            roof that lets water in, cracks or failed finishes on an exterior wall,
            gaps around a window frame, or water collecting against the base of a
            wall. It isn&rsquo;t always the case — but it&rsquo;s why we look outside
            as well as in.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-ink-700">
            Related services:{" "}
            <Link href="/waterproofing/" className={a}>waterproofing</Link>,{" "}
            <Link href="/roof-repair/" className={a}>roof repair</Link>,{" "}
            <Link href="/outdoor-boundary-wall-repair-dammam/" className={a}>exterior and boundary wall repair</Link>.
          </p>
        </div>
      </div>
    </section>
  );
}
