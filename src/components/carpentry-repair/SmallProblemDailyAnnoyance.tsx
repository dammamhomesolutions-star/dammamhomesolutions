import { buildWhatsAppLink } from "@/lib/site-config";

const examples = [
  "A door that needs a push to close",
  "A handle that feels loose",
  "A lock that takes several attempts",
  "A cabinet door sitting unevenly",
  "A drawer that sticks",
  "A hinge that squeaks",
];

export default function SmallProblemDailyAnnoyance() {
  return (
    <section className="py-20 sm:py-24">
      <div className="container-edge max-w-2xl">
        <p className="section-label text-amber-800">Worth fixing properly</p>
        <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
          The little things you notice every time you use the room.
        </h2>
        <p className="mt-4 text-ink-700">
          None of these are dramatic on their own. But a small hardware or
          alignment issue tends to get used — and noticed — every single
          day, which adds up.
        </p>

        <ul className="mt-8 space-y-2.5">
          {examples.map((e) => (
            <li key={e} className="flex gap-3 border-b border-ink-900/10 py-3 text-[15px] text-ink-800">
              <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-amber-700" />
              {e}
            </li>
          ))}
        </ul>

        <a
          href={buildWhatsAppLink("Hello Dammam Home Solutions, I have a small door or carpentry problem. Here's what's happening: ")}
          target="_blank"
          rel="noopener noreferrer"
          className="focus-ring mt-8 inline-flex items-center rounded-full bg-ink-950 px-6 py-3 text-sm font-semibold text-sand-50 transition-transform hover:scale-[1.02]"
        >
          Send Us the Problem
        </a>
      </div>
    </section>
  );
}
