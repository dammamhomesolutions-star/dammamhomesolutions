import { flFaqs } from "@/lib/flooring-repair";

const spans = ["sm:col-span-2", "", "", "sm:col-span-2", "", "", "sm:col-span-2", "", "", "sm:col-span-2"];

export default function FlFaq() {
  return (
    <section className="border-b border-concrete-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-clay-700">Questions</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            Frequently asked questions.
          </h2>
        </div>

        <div className="mt-10 grid gap-[2px] overflow-hidden rounded-md border border-concrete-900/15 bg-concrete-900/15 sm:grid-cols-3">
          {flFaqs.map((faq, i) => (
            <div key={faq.q} className={`bg-sand-50 p-6 ${spans[i] ?? ""}`}>
              <span className="font-mono text-xs text-clay-600">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-2 font-serif text-base leading-snug text-ink-950">{faq.q}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-700">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
