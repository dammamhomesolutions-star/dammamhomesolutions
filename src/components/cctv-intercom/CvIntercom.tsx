import { cvGateFlow, cvIntercomTypes, cvLayers } from "@/lib/cctv-intercom";
import CvCtas from "./CvCtas";
import CvIcon from "./CvIcon";

const flowIcons = ["user", "intercom", "mobile", "eye", "lock"] as const;

export default function CvIntercom() {
  return (
    <section id="intercom" aria-labelledby="cv-intercom" className="border-b border-ink-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 text-moss-700">
              <CvIcon name="intercom" className="h-8 w-8" />
              <p className="section-label !text-moss-700">Intercoms</p>
            </div>
            <h2 id="cv-intercom" className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">Intercom installation in Dammam</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-600">
              An intercom lets you talk to visitors, identify them, and — when
              it&rsquo;s connected to a compatible lock or gate opener — let them
              in without walking to the door. It means you don&rsquo;t open a
              door or gate without knowing who&rsquo;s there.
            </p>
            <p className="mt-3 text-sm text-ink-500">Not every intercom includes door unlocking; that needs compatible release hardware.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3 lg:col-span-7">
            {cvIntercomTypes.map((t) => (
              <div key={t.key} className={`rounded-2xl p-5 ${t.key === "video" ? "bg-ink-950 text-sand-50" : "bg-moss-100/60"}`}>
                <CvIcon name={t.icon} className={`h-7 w-7 ${t.key === "video" ? "text-moss-200" : "text-moss-700"}`} />
                <h3 className={`mt-3 font-semibold ${t.key === "video" ? "" : "text-ink-950"}`}>{t.title}</h3>
                <ul className={`mt-3 space-y-1.5 text-sm ${t.key === "video" ? "text-ink-300" : "text-ink-700"}`}>
                  {t.provides.map((p) => <li key={p}>{p}</li>)}
                </ul>
              </div>
            ))}
            <p className="text-xs text-ink-500 sm:col-span-3">Capabilities depend on the selected system.</p>
          </div>
        </div>

        {/* Gate flow */}
        <div className="mt-16 rounded-2xl bg-moss-100/60 p-6 sm:p-8">
          <h2 className="font-serif text-3xl tracking-tight text-ink-950">Intercom for villa gates &amp; main entrances</h2>
          <ol className="mt-8 grid gap-3 sm:grid-cols-5">
            {cvGateFlow.map((s, i) => (
              <li key={s} className="relative flex items-center gap-3 rounded-xl bg-sand-50 p-4 ring-1 ring-ink-900/10 sm:flex-col sm:text-center">
                <span className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-moss-800 text-sand-50">
                  <CvIcon name={flowIcons[i]} className="h-5 w-5" />
                </span>
                <span className="text-sm font-medium text-ink-900">{s}</span>
                {i < cvGateFlow.length - 1 && (
                  <span aria-hidden="true" className="absolute -right-2.5 top-1/2 hidden -translate-y-1/2 text-moss-600 sm:block">›</span>
                )}
              </li>
            ))}
          </ol>
          <p className="mt-5 max-w-3xl text-sm leading-relaxed text-ink-700">
            A gate intercom adds convenience and lets you verify visitors, but
            it isn&rsquo;t a guarantee against unauthorised entry — the decision to
            open is still yours. We can connect it to a compatible electric lock
            or gate motor after checking the existing equipment.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-ink-900/10 p-6 sm:p-8">
            <CvIcon name="apartment" className="h-7 w-7 text-moss-700" />
            <h2 className="mt-3 font-serif text-2xl tracking-tight text-ink-950 sm:text-3xl">Apartment &amp; building intercoms</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-600">
              We install intercoms for individual apartments and multi-unit
              entry systems for shared building entrances, where a panel at the
              main door calls each unit. Multi-unit systems need different
              wiring and planning, and changes to shared entrances usually need
              the building owner&rsquo;s or management&rsquo;s approval.
            </p>
          </div>
          <div className="rounded-2xl bg-ink-950 p-6 text-sand-50 sm:p-8">
            <CvIcon name="shield" className="h-7 w-7 text-moss-200" />
            <h2 className="mt-3 font-serif text-2xl tracking-tight sm:text-3xl">One security setup, several layers</h2>
            <div className="mt-5 flex flex-wrap items-center gap-2">
              {cvLayers.map((l, i) => (
                <span key={l} className="flex items-center gap-2">
                  <span className="rounded-full bg-sand-100/10 px-3 py-1.5 text-sm">{l}</span>
                  {i < cvLayers.length - 1 && <span aria-hidden="true" className="text-moss-200">+</span>}
                </span>
              ))}
            </div>
            <p className="mt-4 text-sm leading-relaxed text-ink-300">
              Cameras and an intercom complement each other — one records, one
              lets you talk and decide. They don&rsquo;t automatically integrate;
              viewing both in one app or recording the intercom camera depends
              on compatible hardware and software.
            </p>
          </div>
        </div>
        <CvCtas className="mt-10" primaryLabel="Get an Intercom Quote" />
      </div>
    </section>
  );
}
