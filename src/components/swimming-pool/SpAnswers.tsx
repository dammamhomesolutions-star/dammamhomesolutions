import { spAnswers } from "@/lib/swimming-pool";

export default function SpAnswers() {
  return (
    <section aria-labelledby="sp-answers" className="bg-sand-50 py-20 sm:py-24">
      <div className="container-edge">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-teal-700">Quick answers</p>
        <h2 id="sp-answers" className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-5xl">Pool questions, answered plainly</h2>
        <div className="mt-10 columns-1 gap-4 md:columns-2">
          {spAnswers.map((x) => (
            <div key={x.q} className="mb-4 break-inside-avoid rounded-[1.75rem] bg-teal-100/60 p-6">
              <h3 className="font-serif text-xl tracking-tight text-ink-950">{x.q}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-700">{x.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
