import { hmAnswers } from "@/lib/handyman";

export default function HmAnswers() {
  return (
    <section aria-labelledby="hm-answers" className="bg-sand-50 py-20 sm:py-24">
      <div className="container-edge">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-ember-700">Quick answers</p>
        <h2 id="hm-answers" className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-5xl">Handyman services, answered plainly</h2>
        <dl className="mt-10 grid gap-x-10 gap-y-8 md:grid-cols-2">
          {hmAnswers.map((x) => (
            <div key={x.q} className="border-t-2 border-ink-950 pt-4">
              <dt className="font-serif text-xl tracking-tight text-ink-950">{x.q}</dt>
              <dd className="mt-2 text-[15px] leading-relaxed text-ink-700">{x.a}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
