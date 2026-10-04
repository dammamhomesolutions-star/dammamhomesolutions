import { mdStory } from "@/lib/mold-damp";
import { Spec } from "./MdUi";

// One drawn panel per stage of an illustrative restoration story.
function Panel({ i }: { i: number }) {
  const growth = i === 0;
  const opened = i === 1 || i === 2;
  const bare = i === 2;
  const done = i >= 3;
  return (
    <svg viewBox="0 0 200 120" className="h-full w-full" aria-hidden="true">
      <rect width="200" height="120" fill={done ? "#f4f0e8" : "#ebe4d6"} />
      <rect y="104" width="200" height="16" fill="#c4c0b4" />
      {(growth || opened) && <ellipse cx="60" cy="70" rx="46" ry="30" fill="#7fa0b0" opacity={opened ? 0.35 : 0.45} />}
      {growth && [[40, 80], [52, 88], [34, 92], [62, 94], [46, 98]].map(([x, y], k) => <circle key={k} cx={x} cy={y} r="2.5" fill="#2b2f33" opacity="0.7" />)}
      {growth && <path d="M120 60c10 6 16 4 24 12" stroke="#cdab8f" strokeWidth="6" />}
      {opened && <><circle cx="60" cy="70" r="14" fill="none" stroke="#1c2733" strokeWidth="2" /><path d="M70 80l12 12" stroke="#1c2733" strokeWidth="3" /></>}
      {i === 1 && <text x="110" y="40" fontSize="10" className="font-mono" fill="#3d5a6b">READING…</text>}
      {bare && <rect x="24" y="52" width="72" height="44" fill="#9a968a" />}
      {i === 3 && <rect x="24" y="52" width="72" height="44" fill="#ded2ba" />}
      {i === 4 && <path d="M150 30l8 8 16-16" stroke="#3d5a6b" strokeWidth="3" fill="none" />}
    </svg>
  );
}

export default function MdStory() {
  return (
    <section aria-labelledby="md-story" className="bg-sand-50 py-20 sm:py-28">
      <div className="container-edge grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-24">
            <Spec code="S-13">Restoration story</Spec>
            <h2 id="md-story" className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-5xl">From visible problem to final condition</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-600">An illustrated example of how a job typically progresses. These are drawings, not photos of a completed project.</p>
          </div>
        </div>
        <ol className="relative lg:col-span-8">
          <span aria-hidden="true" className="absolute bottom-8 left-[15px] top-8 w-px bg-glass-700/30 sm:left-[19px]" />
          {mdStory.map((s, i) => (
            <li key={s.stage} className="relative grid grid-cols-[2rem_6.5rem_1fr] items-start gap-3 pb-6 last:pb-0 sm:grid-cols-[2.5rem_10rem_1fr] sm:gap-6 sm:pb-8">
              <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-glass-900 font-mono text-[11px] text-sand-50 sm:h-10 sm:w-10">{i + 1}</span>
              <div className="aspect-[5/3] overflow-hidden rounded-lg border border-ink-900/10">
                <Panel i={i} />
              </div>
              <div>
                <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-glass-700">{s.stage}</h3>
                <p className="mt-1 text-sm leading-relaxed text-ink-800 sm:mt-1.5 sm:text-[15px]">{s.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
