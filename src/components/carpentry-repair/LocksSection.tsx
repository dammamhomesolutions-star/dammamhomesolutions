import { buildWhatsAppLink } from "@/lib/site-config";

const topics = [
  "Lock not turning properly",
  "Difficulty locking or unlocking",
  "A damaged lock",
  "Loose hardware around a lock",
  "Supported lock replacement",
];

export default function LocksSection() {
  return (
    <section className="py-20 sm:py-24">
      <div className="container-edge grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
        <div className="max-w-lg">
          <p className="section-label text-amber-800">Locks</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            A lock should work when you need it to.
          </h2>
          <p className="mt-4 text-ink-700">
            This is about getting a lock working properly again — repair,
            adjustment or replacement of hardware you already own. It
            isn&rsquo;t entry assistance or anything to do with bypassing
            or defeating a lock.
          </p>
        </div>

        <div>
          <ul className="space-y-2.5">
            {topics.map((t) => (
              <li key={t} className="flex gap-3 rounded-lg border border-ink-900/10 bg-stone-100/60 px-4 py-3 text-sm text-ink-700">
                <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-amber-700" />
                {t}
              </li>
            ))}
          </ul>
          <a
            href={buildWhatsAppLink("Hello Dammam Home Solutions, I need help with a lock. Here's what's happening: ")}
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="focus-ring mt-6 inline-flex items-center rounded-full bg-rust-700 px-6 py-3 text-sm font-semibold text-sand-50 transition-transform hover:scale-[1.02]"
          >
            Request Lock Service
          </a>
        </div>
      </div>
    </section>
  );
}
