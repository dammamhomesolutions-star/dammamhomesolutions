import CvIcon from "./CvIcon";

const cols = [
  { icon: "camera" as const, title: "CCTV", lead: "Watches and records.", items: ["Visual monitoring", "Recording", "Entrances and outdoor areas", "Driveways and parking", "Common areas", "Remote viewing"] },
  { icon: "intercom" as const, title: "Intercom", lead: "Talks to whoever is at the door.", items: ["Visitor communication", "Door or gate verification", "Two-way audio", "Video identification", "Controlled entry where supported"] },
  { icon: "shield" as const, title: "CCTV + Intercom", lead: "Both, for wider awareness.", items: ["Visual monitoring", "Visitor verification", "Entrance communication", "Recording", "Broader property awareness"], dark: true },
];

export default function CvCompare() {
  return (
    <section aria-labelledby="cv-compare" className="border-b border-ink-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-moss-700">Choosing a system</p>
          <h2 id="cv-compare" className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">CCTV or intercom — what&rsquo;s the difference?</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-600">
            They solve different problems. CCTV tells you what happened and
            what&rsquo;s happening; an intercom helps you decide who to let in.
          </p>
        </div>
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {cols.map((c) => (
            <div key={c.title} className={`rounded-2xl p-6 sm:p-7 ${c.dark ? "bg-ink-950 text-sand-50" : "border border-ink-900/10 bg-moss-100/50"}`}>
              <CvIcon name={c.icon} className={`h-8 w-8 ${c.dark ? "text-moss-200" : "text-moss-700"}`} />
              <h3 className={`mt-3 font-serif text-2xl ${c.dark ? "" : "text-ink-950"}`}>{c.title}</h3>
              <p className={`mt-1 text-sm ${c.dark ? "text-ink-300" : "text-ink-600"}`}>{c.lead}</p>
              <p className={`mt-5 text-xs font-semibold uppercase tracking-[0.12em] ${c.dark ? "text-moss-200" : "text-moss-700"}`}>Best for</p>
              <ul className="mt-2 space-y-1.5">
                {c.items.map((i) => (
                  <li key={i} className={`flex gap-2 text-sm ${c.dark ? "text-sand-100" : "text-ink-800"}`}>
                    <CvIcon name="check" className={`mt-0.5 h-4 w-4 flex-none ${c.dark ? "text-moss-200" : "text-moss-600"}`} />
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
