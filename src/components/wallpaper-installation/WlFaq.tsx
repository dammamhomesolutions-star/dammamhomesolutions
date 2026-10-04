import { wlFaqs } from "@/lib/wallpaper-installation";
import WlCtas from "./WlCtas";

// Native <details> keeps answers in the server HTML and is keyboard accessible.
export default function WlFaq() {
  return (
    <section id="faq" aria-labelledby="wl-faq" className="border-b border-ink-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="section-label !text-teal-700">Questions</p>
          <h2 id="wl-faq" className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">Wallpaper installation: frequently asked questions</h2>
          <WlCtas className="mt-8" />
        </div>
        <div className="divide-y divide-ink-900/10 border-y border-ink-900/10 lg:col-span-8">
          {wlFaqs.map((faq, i) => (
            <details key={faq.q} className="group" open={i === 0}>
              <summary className="focus-ring flex cursor-pointer list-none items-start justify-between gap-4 py-4 text-left [&::-webkit-details-marker]:hidden">
                <h3 className="text-[15px] font-medium text-ink-900 group-open:text-teal-700">{faq.q}</h3>
                <span
                  aria-hidden="true"
                  className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full border border-ink-900/20 text-ink-500 transition-transform group-open:rotate-45 group-open:border-teal-600 group-open:text-teal-700"
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
