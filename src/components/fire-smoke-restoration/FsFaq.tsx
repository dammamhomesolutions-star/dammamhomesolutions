import { fsFaqs } from "@/lib/fire-smoke-restoration";
import FsCtas from "./FsCtas";

// Native <details> keeps every answer in the server-rendered HTML and gives
// keyboard and screen-reader support without client JavaScript.
export default function FsFaq() {
  return (
    <section id="faq" aria-labelledby="fs-faq" className="border-b border-ink-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="section-label !text-ember-700">Questions</p>
          <h2 id="fs-faq" className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            Fire &amp; smoke damage: frequently asked questions
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-600">
            Not covered here? Describe your situation and we&rsquo;ll answer
            it directly.
          </p>
          <FsCtas className="mt-8" primaryLabel="Request an Assessment" secondaryLabel="Call Now" />
        </div>

        <div className="divide-y divide-ink-900/10 border-y border-ink-900/10">
          {fsFaqs.map((faq, i) => (
            <details key={faq.q} className="group" open={i === 0}>
              <summary className="focus-ring flex cursor-pointer list-none items-start justify-between gap-4 py-4 text-left [&::-webkit-details-marker]:hidden">
                <h3 className="text-[15px] font-medium text-ink-900 group-open:text-ember-700">{faq.q}</h3>
                <span
                  aria-hidden="true"
                  className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full border border-ink-900/20 text-ink-500 transition-transform group-open:rotate-45 group-open:border-ember-600 group-open:text-ember-700"
                >
                  +
                </span>
              </summary>
              <p className="pb-5 pr-8 text-sm leading-relaxed text-ink-600">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
