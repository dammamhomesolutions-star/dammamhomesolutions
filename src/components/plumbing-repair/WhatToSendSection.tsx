import { buildWhatsAppLink } from "@/lib/site-config";

const items = [
  "Photo of the visible leak",
  "Photo of the affected wall or ceiling",
  "Photo under the sink, if that's where it is",
  "Photo of the fixture involved",
  "Short video showing dripping or drainage",
  "Your location in Dammam",
];

export default function WhatToSendSection() {
  return (
    <section className="border-y border-ink-900/10 bg-sand-100/60 py-20 sm:py-24">
      <div className="container-edge grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
        <div className="max-w-lg">
          <p className="section-label text-teal-700">Before we visit</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            A photo can tell us a lot before the visit.
          </h2>
          <p className="mt-4 text-ink-700">
            Photos and a short video help explain the problem, but they
            don&rsquo;t replace an in-person look where one&rsquo;s needed —
            think of them as useful context, not a guaranteed remote
            diagnosis.
          </p>
          <a
            href={buildWhatsAppLink(
              "Hello Dammam Home Solutions, I'd like to send photos of a plumbing problem."
            )}
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="focus-ring mt-7 inline-flex items-center rounded-full bg-rust-700 px-6 py-3 text-sm font-semibold text-sand-50 transition-transform hover:scale-[1.02]"
          >
            Send Photos on WhatsApp
          </a>
        </div>

        <ul className="grid gap-x-6 gap-y-3 sm:grid-cols-2">
          {items.map((item, i) => (
            <li
              key={item}
              className="flex items-baseline gap-3 rounded-lg bg-sand-50 px-4 py-3.5 text-sm text-ink-800"
            >
              <span className="font-serif text-xs text-ink-400">
                {String(i + 1).padStart(2, "0")}
              </span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
