import { homeFaqs } from "@/lib/home";

// Native <details> accordion: keyboard accessible, content stays in the HTML.
export default function HpFaq() {
  return (
    <section id="faq" aria-labelledby="hp-faq" className="scroll-mt-20 py-20 sm:py-28">
      <div className="container-edge grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="section-label">Questions</p>
          <h2 id="hp-faq" className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-5xl">Common questions</h2>
        </div>
        <div className="divide-y divide-ink-900/10 border-y border-ink-900/10 lg:col-span-8">
          {homeFaqs.map((f, i) => (
            <details key={f.q} className="group py-1" open={i === 0}>
              <summary className="focus-ring flex cursor-pointer list-none items-center justify-between gap-4 rounded-sm py-4 text-left text-[17px] font-semibold text-ink-950 [&::-webkit-details-marker]:hidden">
                <h3>{f.q}</h3>
                <span aria-hidden="true" className="flex h-7 w-7 flex-none items-center justify-center rounded-full border border-ink-900/20 text-lg transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="pb-5 pr-10 text-[15px] leading-relaxed text-ink-700">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
