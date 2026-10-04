import { faTipProne } from "@/lib/furniture-assembly";
import FaIcon from "./FaIcon";

// Tall vs low furniture, centre of gravity and a wall fixing point. Educational only.
function StabilityDiagram() {
  return (
    <svg viewBox="0 0 360 280" className="h-auto w-full" role="img" aria-labelledby="fa-stab-title">
      <title id="fa-stab-title">{`A low chest with a low centre of gravity next to a tall wardrobe whose higher centre of gravity makes it easier to tip, secured to the wall at the top`}</title>
      <rect width="360" height="280" fill="#f0e4d8" />
      <rect x="338" y="0" width="22" height="280" fill="#cdab8f" />
      <path d="M0 256h338" stroke="#a67c5b" strokeWidth="2" />

      {/* low chest */}
      <rect x="30" y="176" width="110" height="80" fill="#faf8f4" stroke="#3d2b1f" strokeWidth="2" />
      <path d="M30 202h110M30 228h110" stroke="#3d2b1f" strokeWidth="1.5" />
      <circle cx="85" cy="216" r="6" fill="#b3652f" />
      <path d="M85 222v34" stroke="#b3652f" strokeWidth="1.5" strokeDasharray="3 3" />
      <text x="30" y="166" fontFamily="ui-monospace, monospace" fontSize="11" fill="#3d2b1f">LOW: STABLE</text>

      {/* tall wardrobe */}
      <rect x="220" y="40" width="110" height="216" fill="#faf8f4" stroke="#3d2b1f" strokeWidth="2" />
      <path d="M275 40v216" stroke="#3d2b1f" strokeWidth="1.5" />
      <circle cx="275" cy="132" r="6" fill="#b3652f" />
      <path d="M275 138v32" stroke="#b3652f" strokeWidth="1.5" strokeDasharray="3 3" />
      <text x="214" y="132" textAnchor="end" fontFamily="ui-monospace, monospace" fontSize="10" fill="#3d2b1f">CENTRE OF</text>
      <text x="214" y="146" textAnchor="end" fontFamily="ui-monospace, monospace" fontSize="10" fill="#3d2b1f">GRAVITY →</text>
      {/* tip arc */}
      <path d="M220 60a200 200 0 0 0-40 60" fill="none" stroke="#a34a28" strokeWidth="2" strokeDasharray="4 4" />
      <path d="M176 112l4 10 8-6" fill="none" stroke="#a34a28" strokeWidth="2" />
      {/* wall fixing */}
      <path d="M330 52h10" stroke="#3d2b1f" strokeWidth="4" />
      <circle cx="342" cy="52" r="4" fill="#3d2b1f" />
      <text x="236" y="30" fontFamily="ui-monospace, monospace" fontSize="11" fill="#3d2b1f">FIXING POINT →</text>
    </svg>
  );
}

export default function FaStability() {
  return (
    <section id="wall-anchoring" aria-labelledby="fa-stab" className="border-b border-ink-900/10 bg-walnut-100/50 py-20 sm:py-24">
      <div className="container-edge grid gap-10 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-6">
          <p className="section-label !text-walnut-700">Stability</p>
          <h2 id="fa-stab" className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">Does the furniture need to be secured to the wall?</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-700">
            Tall, narrow furniture has a higher centre of gravity, so it can tip
            more easily — especially when drawers are open or it&rsquo;s climbed
            on. Many tall pieces are designed to be secured to the wall and come
            with a restraint for it. Not every piece needs anchoring.
          </p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {faTipProne.map((t) => <li key={t} className="rounded-full bg-sand-50 px-3 py-1 text-sm text-ink-800 ring-1 ring-ink-900/10">{t}</li>)}
          </ul>
          <div className="mt-6 flex gap-3 rounded-2xl bg-ink-950 p-5 text-sand-50">
            <FaIcon name="anchor" className="h-6 w-6 flex-none text-walnut-300" />
            <p className="text-sm leading-relaxed text-ink-300">
              We secure furniture to the wall where it&rsquo;s needed. The right
              fixing depends on the wall construction (block, concrete or
              gypsum), the furniture design, the manufacturer&rsquo;s
              instructions, the hardware and the final position — so we check
              before drilling, and avoid hidden pipes and cables.
            </p>
          </div>
        </div>
        <div className="rounded-2xl bg-sand-50 p-4 ring-1 ring-ink-900/10 lg:col-span-6">
          <StabilityDiagram />
          <p className="mt-2 text-center text-xs text-ink-500">Educational illustration, not an engineering calculation.</p>
        </div>
      </div>
    </section>
  );
}
