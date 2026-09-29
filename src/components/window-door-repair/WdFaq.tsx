import { wdFaqs } from "@/lib/window-door-repair";

export default function WdFaq() {
  return (
    <section className="border-b border-glass-900/10 bg-glass-100/50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-glass-700">Questions</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            Frequently asked questions.
          </h2>
          <p className="mt-3 text-sm text-ink-500">Scroll through the cards below.</p>
        </div>

        <div
          className="mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          role="list"
          aria-label="Frequently asked questions"
        >
          {wdFaqs.map((faq, i) => (
            <div
              key={faq.q}
              role="listitem"
              className="flex-none snap-start rounded-lg border border-glass-900/10 bg-sand-50 p-6 shadow-sm sm:w-80 w-[80vw]"
            >
              <span className="font-mono text-xs text-glass-500">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-2 font-serif text-base leading-snug text-ink-950">{faq.q}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-700">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
