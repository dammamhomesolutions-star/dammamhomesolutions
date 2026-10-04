import { rnQuestions } from "@/lib/renovation";
import { Eyebrow } from "./RnUi";

const options = [
  { title: "One room", lit: [0], when: ["One area is outdated", "The budget or scope is focused", "A specific room needs improvement"] },
  { title: "Multiple rooms", lit: [0, 1, 2], when: ["Several areas share the same issues", "Finishes need to match across rooms", "The work is easier to plan together"] },
  { title: "Whole home", lit: [0, 1, 2, 3, 4], when: ["The property needs broader modernisation", "Several finishes and services need coordinating", "You want one comprehensive renovation plan"] },
];

function Mini({ lit }: { lit: number[] }) {
  const cells = [
    [4, 4, 52, 40], [56, 4, 40, 40], [4, 44, 36, 32], [40, 44, 56, 32], [96, 4, 20, 72],
  ];
  return (
    <svg viewBox="0 0 120 80" className="h-auto w-full" aria-hidden="true">
      {cells.map(([x, y, w, h], i) => (
        <rect key={i} x={x} y={y} width={w} height={h} fill={lit.includes(i) ? "#cdab8f" : "none"} stroke="#14181f" strokeOpacity="0.4" />
      ))}
    </svg>
  );
}

// "One room or whole home?" plus the six planning questions.
export default function RnOneOrWhole() {
  return (
    <section aria-labelledby="rn-one" className="bg-sand-50 py-20 sm:py-28">
      <div className="container-edge">
        <Eyebrow n="13">One room or whole home?</Eyebrow>
        <h2 id="rn-one" className="mt-5 max-w-3xl font-serif text-4xl font-light tracking-tight text-ink-950 sm:text-5xl">Choose the scale that fits the problem.</h2>

        <div className="mt-12 grid gap-px bg-ink-950/10 md:grid-cols-3">
          {options.map((o) => (
            <article key={o.title} className="bg-sand-50 p-6 sm:p-8">
              <div className="max-w-[10rem]"><Mini lit={o.lit} /></div>
              <h3 className="mt-6 font-serif text-3xl text-ink-950">{o.title}</h3>
              <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-500">Useful when</p>
              <ul className="mt-2 space-y-2 text-sm text-ink-700">
                {o.when.map((w) => <li key={w} className="flex gap-3"><span aria-hidden="true" className="mt-2 h-px w-3 flex-none bg-walnut-600" />{w}</li>)}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-24 grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 className="font-serif text-4xl font-light tracking-tight text-ink-950 sm:text-5xl">Before renovating, don&rsquo;t skip these questions.</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-600">Six questions that save more trouble than any material choice.</p>
          </div>
          <ol className="grid gap-x-10 sm:grid-cols-2 lg:col-span-8">
            {rnQuestions.map((q, i) => (
              <li key={q.q} className="border-t border-ink-950/15 py-6">
                <span className="font-serif text-5xl font-light text-walnut-600/70">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 font-serif text-xl text-ink-950">{q.q}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">{q.a}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
