import { hmFaqs } from "@/lib/handyman";

// Conversational FAQ: question bubble on one side, answer on the other. All
// visible, so the content matches the FAQ schema exactly.
export default function HmFaq() {
  return (
    <section id="faq" aria-labelledby="hm-faq" className="bg-ink-950 py-20 text-sand-50 sm:py-24">
      <div className="container-edge">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-ember-500">You ask, we answer</p>
        <h2 id="hm-faq" className="mt-4 font-serif text-3xl tracking-tight sm:text-5xl">Handyman services FAQs</h2>
        <ul className="mt-12 grid gap-8 lg:grid-cols-2">
          {hmFaqs.map((f) => (
            <li key={f.q} className="space-y-2">
              <div className="ml-auto w-fit max-w-[90%] rounded-[1.25rem] rounded-br-sm bg-sand-50 px-4 py-3 text-ink-950">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-500">You ask</p>
                <h3 className="mt-0.5 font-semibold">&ldquo;{f.q}&rdquo;</h3>
              </div>
              <div className="w-fit max-w-[90%] rounded-[1.25rem] rounded-bl-sm bg-ink-900 px-4 py-3 ring-1 ring-sand-100/10">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ember-500">We answer</p>
                <p className="mt-0.5 text-sm leading-relaxed text-ink-300">{f.a}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
