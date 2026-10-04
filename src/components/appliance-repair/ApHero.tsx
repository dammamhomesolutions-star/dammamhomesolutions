import ApCtas from "./ApCtas";
import ApIcon from "./ApIcon";

// Washer, fridge and oven side by side. CSS-only motion; server-rendered.
function AppliancesVisual() {
  return (
    <figure className="rounded-3xl border border-ink-900/10 bg-sand-50 p-4 shadow-[0_30px_60px_-30px_rgba(20,24,31,0.35)] sm:p-6">
      <svg viewBox="0 0 520 320" className="h-auto w-full" role="img" aria-labelledby="ap-hero-title">
        <title id="ap-hero-title">{`Washing machine, refrigerator and oven side by side, each with the area a technician checks highlighted`}</title>
        <rect width="520" height="320" fill="#eceef0" />
        <path d="M0 286h520" stroke="#838d96" strokeWidth="2" />

        {/* washing machine */}
        <rect x="24" y="110" width="140" height="176" rx="10" fill="#faf8f4" stroke="#2b2f33" strokeWidth="2" />
        <path d="M24 142h140" stroke="#2b2f33" strokeWidth="2" />
        <circle cx="46" cy="126" r="5" fill="#c98246" />
        <rect x="100" y="120" width="50" height="12" rx="3" fill="#2b2f33" />
        <circle cx="94" cy="210" r="48" fill="#b7bfc6" stroke="#2b2f33" strokeWidth="2" />
        <circle cx="94" cy="210" r="36" fill="#eceef0" stroke="#4d545c" strokeWidth="2" />
        <g className="ap-drum">
          <circle cx="94" cy="210" r="30" fill="none" />
          <path d="M94 180v12M94 228v12M64 210h12M112 210h12" stroke="#666f78" strokeWidth="3" strokeLinecap="round" />
          <path d="M80 214c6-6 22-6 28 0" stroke="#c98246" strokeWidth="3" fill="none" strokeLinecap="round" />
        </g>
        <text x="58" y="306" fontFamily="ui-monospace, monospace" fontSize="10" fill="#2b2f33">WASHER</text>

        {/* refrigerator */}
        <rect x="190" y="40" width="130" height="246" rx="10" fill="#faf8f4" stroke="#2b2f33" strokeWidth="2" />
        <path d="M190 120h130" stroke="#2b2f33" strokeWidth="2" />
        <path d="M206 64v32M206 140v50" stroke="#4d545c" strokeWidth="4" strokeLinecap="round" />
        <path d="M232 70h70M232 90h70" stroke="#b7bfc6" strokeWidth="2" strokeDasharray="4 6" />
        <g className="ap-drift">
          <path d="M260 140v-6M257 137h6" stroke="#5b7d8f" strokeWidth="2" strokeLinecap="round" />
        </g>
        <g className="ap-drift [animation-delay:1s]">
          <path d="M286 150v-6M283 147h6" stroke="#5b7d8f" strokeWidth="2" strokeLinecap="round" />
        </g>
        <g className="ap-drift [animation-delay:2s]">
          <path d="M240 156v-6M237 153h6" stroke="#5b7d8f" strokeWidth="2" strokeLinecap="round" />
        </g>
        <path d="M232 210h70M232 240h70" stroke="#b7bfc6" strokeWidth="2" />
        <text x="226" y="306" fontFamily="ui-monospace, monospace" fontSize="10" fill="#2b2f33">FRIDGE</text>

        {/* oven */}
        <rect x="346" y="120" width="150" height="166" rx="10" fill="#faf8f4" stroke="#2b2f33" strokeWidth="2" />
        <path d="M346 150h150" stroke="#2b2f33" strokeWidth="2" />
        <circle cx="366" cy="135" r="6" fill="none" stroke="#2b2f33" strokeWidth="2" />
        <circle cx="388" cy="135" r="6" fill="none" stroke="#2b2f33" strokeWidth="2" />
        <rect x="440" y="129" width="40" height="12" rx="3" fill="#2b2f33" />
        <rect x="362" y="166" width="118" height="100" rx="6" fill="#2b2f33" />
        <path className="wh-glow" d="M374 250h94M374 182h94" stroke="#c98246" strokeWidth="4" strokeLinecap="round" />
        <path d="M374 216h94" stroke="#666f78" strokeWidth="2" />
        <text x="404" y="306" fontFamily="ui-monospace, monospace" fontSize="10" fill="#2b2f33">OVEN</text>
      </svg>
      <figcaption className="mt-3 text-[11px] uppercase tracking-[0.14em] text-ink-500">
        Simplified illustration — every model is built differently
      </figcaption>
    </figure>
  );
}

export default function ApHero() {
  return (
    <section className="relative overflow-hidden border-b border-ink-900/10 bg-steel-100">
      <div aria-hidden="true" className="blueprint-grid pointer-events-none absolute inset-0 opacity-60" />
      <div className="container-edge relative grid gap-10 py-12 sm:py-16 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:gap-14 lg:py-20">
        <div className="animate-fadeUp">
          <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-copper-700">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-copper-600" aria-hidden="true" />
            Appliance repair in Dammam
          </p>
          <h1 className="mt-5 max-w-xl font-serif text-[2.2rem] leading-[1.08] tracking-tight text-ink-950 sm:text-5xl">
            Washing machine, fridge or oven not working properly?
          </h1>
          <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-ink-700 sm:text-base">
            A machine that won&rsquo;t drain, a fridge that won&rsquo;t cool or
            an oven that won&rsquo;t heat can have several different causes.
            Dammam Home Solutions diagnoses the actual fault first, then tells
            you honestly whether repair makes sense.
          </p>
          <ApCtas className="mt-8" />
          <ul className="mt-6 flex flex-wrap gap-2 text-xs text-ink-700">
            {(["washer", "fridge", "oven"] as const).map((k) => (
              <li key={k} className="inline-flex items-center gap-1.5 rounded-full bg-sand-50 px-3 py-1.5 ring-1 ring-ink-900/10">
                <ApIcon name={k} className="h-4 w-4 text-copper-700" />
                {k === "washer" ? "Washing machines" : k === "fridge" ? "Fridges & freezers" : "Electric & gas ovens"}
              </li>
            ))}
          </ul>
          <p className="mt-4 max-w-md text-xs leading-relaxed text-ink-500">
            Tell us the appliance, brand, model and what it&rsquo;s doing — a
            photo of the model label helps.
          </p>
        </div>
        <div className="animate-fadeIn [animation-delay:150ms]">
          <AppliancesVisual />
        </div>
      </div>
    </section>
  );
}
