import { bwCracks, bwPhotos } from "@/lib/boundary-wall";
import BwIcon from "./BwIcon";

// Small wall panels showing each crack pattern.
function CrackSketch({ k }: { k: string }) {
  const paths: Record<string, string> = {
    hairline: "M30 20l6 14-4 10 8 12-3 10",
    vertical: "M60 8l-2 20 3 18-2 22 2 22",
    horizontal: "M8 50h30l6-2h30l8 2h26",
    diagonal: "M20 10h16v12h16v12h16v12h16v12h16",
    opening: "M70 30l14-14M70 30l-10 10",
    recurring: "M40 12l6 16-4 14 6 16-3 14",
  };
  return (
    <svg viewBox="0 0 120 100" className="h-20 w-full" aria-hidden="true">
      <rect width="120" height="100" fill="#f2e6d5" />
      {[25, 50, 75].map((y) => <path key={y} d={`M0 ${y}h120`} stroke="#d9bfa0" />)}
      {k === "opening" && <rect x="70" y="30" width="34" height="70" fill="#7a5a3f" />}
      {k === "recurring" && <path d="M36 12l6 16-4 14 6 16-3 14" stroke="#e0b28a" strokeWidth="7" fill="none" />}
      <path d={paths[k]} stroke="#4a3626" strokeWidth="2" fill="none" strokeLinecap="round" />
    </svg>
  );
}

export default function BwCracks() {
  return (
    <section id="crack-types" aria-label="Crack types and what to photograph" className="border-b border-ink-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-clay-700">Cracks</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">Understanding outdoor wall cracks</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-600">These are general patterns, not diagnoses — the same-looking crack can have different causes on different walls.</p>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-3 lg:grid-cols-3">
          {bwCracks.map((c) => (
            <div key={c.key} className="overflow-hidden rounded-2xl bg-clay-100/50 ring-1 ring-ink-900/10">
              <CrackSketch k={c.key} />
              <div className="p-4">
                <h3 className="font-semibold text-ink-950">{c.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-ink-600">{c.body}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-8 rounded-2xl bg-ink-950 p-6 text-sand-50 sm:p-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <BwIcon name="camera" className="h-8 w-8 text-clay-300" />
            <h2 className="mt-3 font-serif text-3xl tracking-tight">What should you photograph?</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-300">
              Put a coin, key or ruler next to a crack for scale. Only
              photograph from a safe position. Photos help us plan, but they
              can&rsquo;t replace an on-site look at anything that may be
              structural.
            </p>
          </div>
          <ol className="grid gap-2 sm:grid-cols-2 lg:col-span-7">
            {bwPhotos.map((p, i) => (
              <li key={p} className="flex items-center gap-3 rounded-xl bg-ink-900 p-3 text-sm text-sand-100">
                <span className="font-mono text-xs text-clay-300">{String(i + 1).padStart(2, "0")}</span>
                {p}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
