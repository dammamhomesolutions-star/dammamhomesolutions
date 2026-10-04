import { scMistakes } from "@/lib/sofa-carpet-cleaning";
import ScIcon from "./ScIcon";

const donts = [
  "Don't scrub aggressively",
  "Don't use random household chemicals",
  "Don't mix cleaning products",
  "Don't saturate upholstery with water",
];

export default function ScFreshOld() {
  return (
    <section aria-label="Fresh stains and common mistakes" className="border-b border-ink-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6">
            <p className="section-label !text-glass-700">Timing</p>
            <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">Fresh stain or old stain? Timing matters</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-600">
              Fresh spills are often easier to deal with than old, set-in
              stains. What you do in the first few minutes can make the
              difference — and the safest first step is usually the gentlest.
            </p>
            <p className="mt-4 rounded-xl bg-glass-100 px-4 py-3 text-sm leading-relaxed text-ink-800">
              If it&rsquo;s safe for the material, gently <strong>blot</strong> a
              fresh liquid spill with a clean, dry cloth rather than rubbing it.
            </p>
          </div>
          {/* timeline bar: fresh → setting → set */}
          <figure className="lg:col-span-6">
            <svg viewBox="0 0 480 140" className="h-auto w-full" role="img" aria-labelledby="sc-time-title">
              <title id="sc-time-title">A stain moves from fresh, to setting, to set over time; it becomes harder to remove at each stage</title>
              <defs>
                <linearGradient id="sc-time" x1="0" x2="1">
                  <stop offset="0" stopColor="#b8ccd4" />
                  <stop offset="1" stopColor="#6b4a35" />
                </linearGradient>
              </defs>
              <rect x="20" y="62" width="440" height="12" rx="6" fill="url(#sc-time)" />
              {[
                { x: 40, label: "FRESH", sub: "Blot gently" },
                { x: 240, label: "SETTING", sub: "Avoid DIY chemicals" },
                { x: 440, label: "SET", sub: "Needs assessment" },
              ].map((p) => (
                <g key={p.label}>
                  <circle cx={p.x} cy="68" r="12" fill="#faf8f4" stroke="#26333f" strokeWidth="2" />
                  <text x={p.x} y="40" textAnchor="middle" fontFamily="ui-monospace, monospace" fontSize="11" letterSpacing="1.4" fill="#26333f">{p.label}</text>
                  <text x={p.x} y="104" textAnchor="middle" fontFamily="ui-monospace, monospace" fontSize="9" fill="#69748a">{p.sub.toUpperCase()}</text>
                </g>
              ))}
            </svg>
            <ul className="mt-4 grid grid-cols-2 gap-2 text-sm text-ink-800">
              {donts.map((d) => (
                <li key={d} className="flex gap-2">
                  <ScIcon name="alert" className="mt-0.5 h-4 w-4 flex-none text-rust-700" />
                  {d}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-ink-600">
              If you&rsquo;re unsure what the material is, avoid experimenting
              with strong products before it&rsquo;s been assessed.
            </p>
          </figure>
        </div>

        <h2 className="mt-20 font-serif text-3xl tracking-tight text-ink-950">Common sofa &amp; carpet cleaning mistakes</h2>
        <ol className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {scMistakes.map((m) => (
            <li key={m.title} className="flex flex-col rounded-2xl border border-ink-900/10 bg-sand-100/50 p-6">
              <h3 className="flex items-start gap-3 text-base font-semibold text-ink-950">
                <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-rust-100 text-rust-700">
                  <ScIcon name="alert" className="h-4 w-4" />
                </span>
                {m.title}
              </h3>
              <dl className="mt-4 space-y-2.5 text-sm">
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-ink-500">What people do</dt>
                  <dd className="mt-0.5 text-ink-700">{m.what}</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-ink-500">Why it causes problems</dt>
                  <dd className="mt-0.5 text-ink-700">{m.why}</dd>
                </div>
                <div className="rounded-xl bg-glass-100 p-3">
                  <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-glass-800">Better approach</dt>
                  <dd className="mt-0.5 text-glass-900">{m.better}</dd>
                </div>
              </dl>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
