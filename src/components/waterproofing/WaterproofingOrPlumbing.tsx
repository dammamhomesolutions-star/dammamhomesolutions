import { buildWhatsAppLink } from "@/lib/site-config";

export default function WaterproofingOrPlumbing() {
  return (
    <section className="py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label text-cyan-800">Choosing the right starting point</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            Waterproofing and plumbing are not the same problem.
          </h2>
          <p className="mt-4 text-ink-700">
            They can overlap, but knowing which one you&rsquo;re likely
            dealing with helps us respond faster.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          <a
            href="/plumbing-repair/"
            className="focus-ring group rounded-2xl border border-ink-900/10 bg-sand-50 p-7 transition-colors hover:border-ink-900/25"
          >
            <p className="text-sm font-medium text-ink-500">Water is coming from a pipe or fixture</p>
            <p className="mt-3 font-serif text-xl text-ink-950">Plumbing investigation</p>
            <p className="mt-3 text-sm text-ink-600 group-hover:underline">See plumbing &amp; water leak repair →</p>
          </a>

          <a
            href="#request-service"
            className="focus-ring group rounded-2xl border border-cyan-800/25 bg-cyan-800/5 p-7 transition-colors hover:border-cyan-800/40"
          >
            <p className="text-sm font-medium text-ink-500">Moisture is entering through a surface or exposed area</p>
            <p className="mt-3 font-serif text-xl text-ink-950">Waterproofing assessment</p>
            <p className="mt-3 text-sm text-cyan-800 group-hover:underline">Request an assessment →</p>
          </a>

          <a
            href={buildWhatsAppLink(
              "Hello Dammam Home Solutions, I'm not sure if my problem is plumbing or waterproofing. Here's what I'm seeing: "
            )}
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="focus-ring group rounded-2xl border border-ink-900/10 bg-sand-50 p-7 transition-colors hover:border-ink-900/25"
          >
            <p className="text-sm font-medium text-ink-500">Not sure which one it is</p>
            <p className="mt-3 font-serif text-xl text-ink-950">Send us the details</p>
            <p className="mt-3 text-sm text-ink-600 group-hover:underline">WhatsApp what you&rsquo;re seeing →</p>
          </a>
        </div>
      </div>
    </section>
  );
}
