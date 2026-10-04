import { mdAnswers } from "@/lib/mold-damp";
import { Spec } from "./MdUi";

// Answer-first blocks: short question heading, direct answer.
export default function MdAnswers() {
  return (
    <section id="answers" aria-labelledby="md-answers" className="scroll-mt-20 bg-sand-50 py-20 sm:py-28">
      <div className="container-edge">
        <Spec code="S-19">Quick answers</Spec>
        <h2 id="md-answers" className="mt-4 max-w-3xl font-serif text-3xl tracking-tight text-ink-950 sm:text-5xl">Damp and mold, answered plainly</h2>
        <div className="mt-12 columns-1 gap-5 md:columns-2">
          {mdAnswers.map((x) => (
            <article key={x.q} className="mb-5 break-inside-avoid border-l-2 border-glass-600 pl-5">
              <h3 className="font-serif text-xl text-ink-950">{x.q}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-700">{x.a}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
