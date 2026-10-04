import { shAnswers } from "@/lib/shade-pergola";
import { Tag } from "./ShUi";

// Answer-first blocks, set as a technical spec sheet.
export default function ShAnswers() {
  return (
    <section id="answers" aria-labelledby="sh-answers" className="scroll-mt-20 bg-sand-50 py-20 sm:py-28">
      <div className="container-edge">
        <Tag n="17">Quick answers</Tag>
        <h2 id="sh-answers" className="mt-5 max-w-3xl font-serif text-3xl tracking-tight text-ink-950 sm:text-5xl">Shade repair, answered directly</h2>
        <dl className="mt-12 border-t-2 border-steel-900">
          {shAnswers.map((x, i) => (
            <div key={x.q} className="grid gap-3 border-b border-steel-900/15 py-6 md:grid-cols-[3rem_minmax(0,20rem)_1fr] md:gap-8">
              <span aria-hidden="true" className="font-mono text-xs text-copper-700">A{String(i + 1).padStart(2, "0")}</span>
              <dt className="font-serif text-xl leading-snug text-ink-950">{x.q}</dt>
              <dd className="text-[15px] leading-relaxed text-ink-700">{x.a}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
