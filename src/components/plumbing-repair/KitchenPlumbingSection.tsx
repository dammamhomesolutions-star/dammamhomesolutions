import { buildWhatsAppLink } from "@/lib/site-config";
import UnderSinkVisual from "./UnderSinkVisual";

export default function KitchenPlumbingSection() {
  return (
    <section id="kitchen-plumbing" className="bg-ink-950 py-20 text-sand-100 sm:py-24">
      <div className="container-edge grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
        <div className="max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-500">
            Kitchen plumbing
          </p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-sand-50 sm:text-4xl">
            Under the sink is where many plumbing problems stay hidden.
          </h2>
          <p className="mt-4 leading-relaxed text-ink-300">
            Sink leaks, tap problems, drain issues, pipe connections and
            water under cabinets often go unnoticed until they&rsquo;ve
            been happening for a while — the cabinet hides it well.
          </p>
          <p className="mt-4 text-sm text-ink-400">
            If cabinet damage or flooring has already been affected, our{" "}
            <a
              href="/general-home-repairs/"
              className="text-teal-400 underline underline-offset-4 hover:text-teal-300"
            >
              general home repairs
            </a>{" "}
            service covers that part of the job too.
          </p>

          <a
            href={buildWhatsAppLink(
              "Hello Dammam Home Solutions, I have a kitchen plumbing problem. Here's what's happening: "
            )}
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="focus-ring mt-7 inline-flex items-center rounded-full bg-teal-600 px-6 py-3 text-sm font-semibold text-ink-950 transition-transform hover:scale-[1.02]"
          >
            WhatsApp about a kitchen issue
          </a>
        </div>

        <div className="flex justify-center lg:justify-end">
          <UnderSinkVisual />
        </div>
      </div>
    </section>
  );
}
