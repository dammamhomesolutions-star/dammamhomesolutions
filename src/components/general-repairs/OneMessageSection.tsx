import { buildWhatsAppLink } from "@/lib/site-config";

const items = ["Location", "Room / area", "What is happening", "When you noticed it", "Photos or a short video", "Preferred visit time"];

export default function OneMessageSection() {
  return (
    <section className="py-20 sm:py-24">
      <div className="container-edge">
        <div className="overflow-hidden rounded-3xl border border-ink-900/10 bg-stone-100/60">
          <div className="grid gap-10 p-8 sm:p-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <p className="section-label text-indigo-700">Getting in touch</p>
              <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
                Not sure what to call the job? That&rsquo;s okay.
              </h2>
              <p className="mt-4 text-ink-700">
                Send us a short description and a few photos. Tell us
                where the problem is and what you&rsquo;ve noticed.
                We&rsquo;ll review the request and guide you toward the
                appropriate repair service.
              </p>

              <p className="mt-6 text-sm font-semibold text-ink-900">You can send:</p>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                {items.map((item) => (
                  <li key={item} className="flex gap-2.5 text-sm text-ink-700">
                    <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-indigo-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col items-start gap-4 rounded-2xl bg-sand-50 p-7 lg:items-center lg:text-center">
              <a
                href={buildWhatsAppLink("Hello Dammam Home Solutions, here's my repair request: ")}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="focus-ring inline-flex w-full items-center justify-center rounded-full bg-rust-700 px-7 py-3.5 text-sm font-semibold text-sand-50 transition-transform hover:scale-[1.02] lg:w-auto"
              >
                Send My Repair Request
              </a>
              <p className="text-xs text-ink-500 lg:max-w-xs">
                We&rsquo;ll review what you send and follow up on
                WhatsApp — no fixed price or arrival time promised in
                advance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
