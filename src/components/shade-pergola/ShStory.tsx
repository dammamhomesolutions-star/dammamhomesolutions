import { shStory } from "@/lib/shade-pergola";
import { Tag } from "./ShUi";

function Panel({ i }: { i: number }) {
  const damaged = i === 0;
  const done = i >= 2;
  return (
    <svg viewBox="0 0 240 150" className="h-full w-full" aria-hidden="true">
      <rect width="240" height="150" fill={i === 3 ? "#f2e6d5" : "#eceef0"} />
      <path d="M0 136H240" stroke="#9a968a" strokeWidth="2" />
      <path d="M40 44V136M200 34V136" stroke={damaged ? "#8f4f2f" : "#666f78"} strokeWidth="6" />
      {damaged ? (
        <>
          <path d="M30 42C80 76 150 72 210 32L210 40C150 82 80 86 30 50Z" fill="#c4c0b4" />
          <path d="M110 62l10 14-6 8" stroke="#eceef0" strokeWidth="5" />
          <ellipse cx="110" cy="68" rx="22" ry="4" fill="#5b7d8f" opacity="0.6" />
          {[60, 170].map((x) => <circle key={x} cx={x === 60 ? 40 : 200} cy={x === 60 ? 90 : 80} r="5" fill="#b3652f" />)}
        </>
      ) : (
        <path d="M30 42L210 32L210 40L30 50Z" fill={done ? "#e0b28a" : "#c4c0b4"} />
      )}
      {i === 1 && <><circle cx="200" cy="80" r="14" fill="none" stroke="#14181f" strokeWidth="2" /><path d="M210 90l10 10" stroke="#14181f" strokeWidth="3" /><text x="60" y="110" fontSize="10" className="font-mono" fill="#4d545c">MAPPING…</text></>}
      {i === 2 && <path d="M150 90l20-20M164 66l10 10" stroke="#b3652f" strokeWidth="3" />}
      {i === 3 && <path d="M100 96l12 12 24-24" stroke="#5f7050" strokeWidth="4" fill="none" />}
      <rect x="80" y="112" width="80" height="24" rx="6" fill="#4d545c" />
    </svg>
  );
}

// Horizontal transformation story (illustrated, not a real project).
export default function ShStory() {
  return (
    <section aria-labelledby="sh-story" className="bg-sand-50 py-20 sm:py-28">
      <div className="container-edge">
        <Tag n="13">Before &amp; after</Tag>
        <h2 id="sh-story" className="mt-5 max-w-3xl font-serif text-3xl tracking-tight text-ink-950 sm:text-5xl">From damaged to restored</h2>
        <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-ink-600">An illustrated example of how a typical refurbishment unfolds. Drawings, not photos of a completed project — real project photos will be added.</p>
        <ol className="mt-10 grid grid-cols-2 gap-x-3 gap-y-8 lg:grid-cols-4">
          {shStory.map((s, i) => (
            <li key={s.stage} className="relative">
              <div className="aspect-[8/5] overflow-hidden border border-steel-900/10"><Panel i={i} /></div>
              {i < shStory.length - 1 && <span aria-hidden="true" className="absolute -right-3 top-[28%] z-10 hidden h-6 w-6 items-center justify-center bg-copper-600 text-xs text-sand-50 lg:flex">→</span>}
              <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.18em] text-copper-700">{String(i + 1).padStart(2, "0")} · {s.stage}</p>
              <p className="mt-1 text-sm leading-relaxed text-ink-700">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
