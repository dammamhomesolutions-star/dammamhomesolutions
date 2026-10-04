import { rnAnswers } from "@/lib/renovation";
import { Eyebrow } from "./RnUi";

// Answer-first summaries: question as heading, direct answer beneath.
export default function RnAnswers() {
  return (
    <section id="answers" aria-labelledby="rn-answers" className="scroll-mt-20 border-t border-ink-950/10 bg-sand-100 py-20 sm:py-28">
      <div className="container-edge">
        <Eyebrow n="18">Quick answers</Eyebrow>
        <h2 id="rn-answers" className="mt-5 max-w-3xl font-serif text-4xl font-light tracking-tight text-ink-950 sm:text-5xl">Home renovation, answered directly</h2>
        <div className="mt-12 grid gap-px bg-ink-950/10 md:grid-cols-2">
          {rnAnswers.map((x) => (
            <article key={x.q} className="bg-sand-50 p-6 sm:p-8">
              <h3 className="font-serif text-xl leading-snug text-ink-950">{x.q}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-700">{x.a}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
