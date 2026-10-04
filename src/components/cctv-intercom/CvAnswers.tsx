import { cvAnswers } from "@/lib/cctv-intercom";

export default function CvAnswers() {
  return (
    <section aria-labelledby="cv-answers" className="border-b border-ink-900/10 bg-sand-50 py-16 sm:py-20">
      <div className="container-edge">
        <p className="section-label !text-moss-700">Quick answers</p>
        <h2 id="cv-answers" className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">CCTV and intercom questions, answered plainly</h2>
        <div className="mt-10 grid gap-x-10 gap-y-8 md:grid-cols-2">
          {cvAnswers.map((x) => (
            <div key={x.q} className="border-l-4 border-moss-600 pl-5">
              <h3 className="font-serif text-lg tracking-tight text-ink-950">{x.q}</h3>
              <p className="mt-1.5 text-[15px] leading-relaxed text-ink-700">{x.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
