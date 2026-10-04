import { drAnswers } from "@/lib/drain-unblocking";

export default function DrAnswers() {
  return (
    <section aria-labelledby="dr-answers" className="border-b border-ink-900/10 bg-sand-50 py-16 sm:py-20">
      <div className="container-edge">
        <p className="section-label !text-teal-700">Quick answers</p>
        <h2 id="dr-answers" className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">Drain and sewer questions, answered plainly</h2>
        <div className="mt-10 grid gap-x-10 gap-y-8 md:grid-cols-2">
          {drAnswers.map((x) => (
            <div key={x.q} className="border-l-4 border-teal-600 pl-5">
              <h3 className="font-serif text-lg tracking-tight text-ink-950">{x.q}</h3>
              <p className="mt-1.5 text-[15px] leading-relaxed text-ink-700">{x.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
