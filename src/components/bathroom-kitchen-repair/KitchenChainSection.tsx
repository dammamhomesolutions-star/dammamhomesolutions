import { buildWhatsAppLink } from "@/lib/site-config";

const chain = [
  { title: "Sink", body: "Leak or fixture issue" },
  { title: "Drain", body: "Blocked or slow" },
  { title: "Cabinet", body: "Door or hinge" },
  { title: "Counter", body: "Damaged surface" },
  { title: "Wall", body: "Marks or damage" },
  { title: "Fixtures", body: "Tap or handle" },
];

export default function KitchenChainSection() {
  return (
    <section id="kitchen" className="py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label text-emerald-800">Kitchen</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            The kitchen has more working parts than it looks.
          </h2>
        </div>

        <div className="mt-12 overflow-x-auto pb-2">
          <div className="flex min-w-[640px] items-stretch gap-0">
            {chain.map((node, i) => (
              <div key={node.title} className="flex flex-1 items-center">
                <div className="w-full rounded-xl border border-ink-900/10 bg-zinc-100/70 p-4 text-center">
                  <p className="font-serif text-base text-ink-950">{node.title}</p>
                  <p className="mt-1 text-xs text-ink-600">{node.body}</p>
                </div>
                {i < chain.length - 1 && (
                  <span aria-hidden="true" className="mx-2 flex-none text-emerald-700">
                    →
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        <a
          href={buildWhatsAppLink("Hello Dammam Home Solutions, I'd like to request a kitchen repair. Here's what's happening: ")}
          target="_blank"
          rel="nofollow noopener noreferrer"
          className="focus-ring mt-10 inline-flex items-center rounded-full bg-rust-700 px-6 py-3 text-sm font-semibold text-sand-50 transition-transform hover:scale-[1.02]"
        >
          Send a Kitchen Repair Request
        </a>
      </div>
    </section>
  );
}
