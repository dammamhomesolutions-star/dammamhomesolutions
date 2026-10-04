import CbIcon from "./CbIcon";

const sliding = ["Which way the door opens", "Where the curtain stacks", "Track or rod span", "Door handles", "Floor clearance", "Furniture", "Traffic flow"];
const operation = [
  { t: "Manual", b: "Pull the curtain by hand or with a wand on a track." },
  { t: "Chain or cord", b: "Common on roller and Venetian blinds; we fit the supplied safety devices to keep loops out of reach." },
  { t: "Wand", b: "Tilt or traverse with a rigid wand — no hanging loops." },
  { t: "Motorised", b: "A motor raises the blind or draws the curtain, by switch or remote." },
  { t: "Smart control", b: "App, schedule or voice control, where the system is compatible." },
];
const motor = ["Motor and product compatibility", "Power supply or battery", "Control method", "Remote control", "Smart-home compatibility", "Motor position", "Access for maintenance"];

// Sliding door → track → opening → stack-back.
function SlidingDiagram() {
  return (
    <svg viewBox="0 0 360 240" className="h-auto w-full" role="img" aria-labelledby="cb-slide-title">
      <title id="cb-slide-title">{`Sliding door with a curtain track above it; the curtain stacks to one side, clear of the opening and the door handle`}</title>
      <rect width="360" height="240" fill="#f2e6d5" />
      <rect x="20" y="20" width="320" height="6" rx="2" fill="#4a3626" />
      <text x="24" y="16" fontFamily="ui-monospace, monospace" fontSize="10" fill="#4a3626">TRACK</text>
      <rect x="40" y="40" width="240" height="180" fill="#e3eef7" stroke="#4a3626" strokeWidth="2.5" />
      <path d="M160 40v180" stroke="#4a3626" strokeWidth="2" />
      <rect x="150" y="120" width="5" height="22" rx="2" fill="#4a3626" />
      <path d="M100 210h120" stroke="#b3652f" strokeWidth="2" />
      <path d="M210 204l10 6-10 6" fill="none" stroke="#b3652f" strokeWidth="2" />
      <text x="96" y="234" fontFamily="ui-monospace, monospace" fontSize="10" fill="#b3652f">OPENING</text>
      {/* stack-back */}
      <path d="M284 26h52c-4 70-4 140 2 200h-56c4-60 4-130 2-200z" fill="#9c7752" />
      <path d="M296 26c-2 70-2 140 0 200M312 26c2 70 2 140 0 200M326 26c-2 70-2 140 0 200" stroke="#7a5a3f" strokeWidth="2" fill="none" />
      <text x="282" y="236" fontFamily="ui-monospace, monospace" fontSize="10" fill="#4a3626">STACK-BACK</text>
    </svg>
  );
}

export default function CbSliding() {
  return (
    <section id="sliding-doors" aria-label="Sliding doors, blind operation and motorised blinds" className="border-b border-ink-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6">
            <p className="section-label !text-clay-700">Large openings</p>
            <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">Curtains for sliding doors &amp; large openings</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-600">
              The curtain has to clear the door when it&rsquo;s open — so the
              track usually extends past the opening and the fabric stacks on
              the side the door doesn&rsquo;t slide to.
            </p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {sliding.map((s) => <li key={s} className="rounded-full bg-clay-100/70 px-3 py-1 text-sm text-ink-800">{s}</li>)}
            </ul>
          </div>
          <div className="overflow-hidden rounded-2xl ring-1 ring-ink-900/10 lg:col-span-6">
            <SlidingDiagram />
          </div>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-ink-900/10 p-6 sm:p-8">
            <h2 className="font-serif text-3xl tracking-tight text-ink-950">Think about how the blind will be used</h2>
            <ul className="mt-5 space-y-3">
              {operation.map((o) => (
                <li key={o.t} className="text-sm leading-relaxed text-ink-700"><span className="font-semibold text-ink-950">{o.t}. </span>{o.b}</li>
              ))}
            </ul>
            <p className="mt-4 rounded-xl bg-clay-100/60 p-3 text-sm text-ink-800">In children&rsquo;s rooms, keep cords and chains out of reach — and never remove or modify the safety devices supplied with a blind.</p>
          </div>
          <div className="rounded-2xl bg-ink-950 p-6 text-sand-50 sm:p-8">
            <CbIcon name="motor" className="h-8 w-8 text-clay-300" />
            <h2 className="mt-3 font-serif text-3xl tracking-tight">Considering motorised or smart blinds?</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-300">
              We supply and install motorised blinds and curtain tracks with
              remote or smart control. Before choosing, we check:
            </p>
            <ul className="mt-4 grid gap-1.5 sm:grid-cols-2">
              {motor.map((m) => <li key={m} className="flex gap-2 text-sm text-sand-100"><CbIcon name="check" className="mt-0.5 h-4 w-4 flex-none text-clay-300" />{m}</li>)}
            </ul>
            <p className="mt-4 text-xs text-ink-400">Mains-powered motors may need a nearby power point; we&rsquo;ll tell you if electrical work is needed.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
