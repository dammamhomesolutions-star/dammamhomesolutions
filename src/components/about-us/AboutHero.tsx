import { buildWhatsAppLink } from "@/lib/site-config";

export default function AboutHero() {
  return (
    <section className="border-b border-ink-900/10 bg-sand-50 py-16 sm:py-20">
      <div className="container-edge max-w-2xl">
        <p className="section-label">About us</p>
        <h1 className="mt-4 font-serif text-4xl leading-[1.12] tracking-tight text-ink-950 sm:text-5xl">
          Property repair and maintenance, handled directly.
        </h1>
        <p className="mt-5 text-[15px] leading-relaxed text-ink-600 sm:text-base">
          Dammam Home Solutions helps homeowners, tenants, landlords and
          property managers in {" "}
          <span className="font-medium text-ink-800">Dammam, Saudi Arabia</span>{" "}
          get everyday property problems fixed — from a single leaking tap to
          ongoing maintenance across a rental portfolio.
        </p>
        <div className="mt-8">
          <a
            href={buildWhatsAppLink("Hello Dammam Home Solutions, I'd like to know more about your services. ")}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring inline-flex items-center rounded-full bg-ink-950 px-6 py-3 text-sm font-semibold text-sand-50 transition-transform hover:scale-[1.02]"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
