import { dkAnswers } from "@/lib/ac-duct-cleaning";

export default function DkAnswers() {
  return (
    <section aria-labelledby="dk-answers" className="border-b border-ink-900/10 bg-sand-50 py-16 sm:py-20">
      <div className="container-edge">
        <p className="section-label !text-copper-700">Quick answers</p>
        <h2 id="dk-answers" className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">AC duct cleaning, answered plainly</h2>
        <div className="mt-10 grid gap-x-10 gap-y-8 md:grid-cols-2">
          {dkAnswers.map((x) => (
            <div key={x.q} className="border-l-4 border-copper-500 pl-5">
              <h3 className="font-serif text-lg tracking-tight text-ink-950">{x.q}</h3>
              <p className="mt-1.5 text-[15px] leading-relaxed text-ink-700">{x.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
