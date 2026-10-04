import { cvWiredWireless } from "@/lib/cctv-intercom";
import CvIcon from "./CvIcon";

const storageVars = ["Number of cameras", "Resolution", "Motion vs continuous recording", "Frame rate", "Drive capacity"];

export default function CvTech() {
  return (
    <section id="technology" aria-label="CCTV technology explained" className="border-b border-ink-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge">
        <p className="section-label !text-moss-700">Technology, simply</p>

        {/* Wired vs wireless */}
        <div className="mt-4 grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 className="font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">Wired or wireless CCTV?</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-600">
              Neither is always better. The right choice depends on the
              building, Wi-Fi quality, power points, distances, access for
              cables and how many cameras you need.
            </p>
          </div>
          <div className="lg:col-span-8">
            <ul className="space-y-3 md:hidden">
              {cvWiredWireless.map((r) => (
                <li key={r.aspect} className="rounded-xl bg-moss-100/60 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-moss-700">{r.aspect}</p>
                  <p className="mt-2 text-sm text-ink-800"><span className="font-semibold">Wired:</span> {r.wired}</p>
                  <p className="mt-1 text-sm text-ink-800"><span className="font-semibold">Wireless:</span> {r.wireless}</p>
                </li>
              ))}
            </ul>
            <table className="hidden w-full overflow-hidden rounded-xl text-left text-sm ring-1 ring-ink-900/10 md:table">
              <thead className="bg-ink-950 text-sand-50">
                <tr>
                  <th scope="col" className="px-4 py-3 font-semibold"><span className="sr-only">Aspect</span></th>
                  <th scope="col" className="px-4 py-3 font-semibold">Wired CCTV</th>
                  <th scope="col" className="px-4 py-3 font-semibold">Wireless CCTV</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-ink-900/10 bg-sand-50">
                {cvWiredWireless.map((r) => (
                  <tr key={r.aspect}>
                    <th scope="row" className="px-4 py-3 font-medium text-ink-950">{r.aspect}</th>
                    <td className="px-4 py-3 text-ink-700">{r.wired}</td>
                    <td className="px-4 py-3 text-ink-700">{r.wireless}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* IP camera + DVR vs NVR */}
        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-ink-900/10 bg-moss-100/40 p-6 sm:p-8">
            <CvIcon name="network" className="h-7 w-7 text-moss-700" />
            <h2 className="mt-3 font-serif text-2xl tracking-tight text-ink-950 sm:text-3xl">What is an IP camera?</h2>
            <ul className="mt-4 space-y-2 text-[15px] leading-relaxed text-ink-700">
              <li>It connects to a network rather than a video cable.</li>
              <li>Video is sent to a network video recorder (NVR) or other network storage.</li>
              <li>Remote access may be possible, depending on how it&rsquo;s configured.</li>
              <li>With PoE (Power over Ethernet), one cable can carry both power and data to compatible cameras.</li>
            </ul>
            {/* PoE mini diagram */}
            <div className="mt-6 flex items-center gap-2 text-xs text-ink-700" aria-hidden="true">
              <span className="flex flex-col items-center gap-1"><CvIcon name="camera" className="h-6 w-6 text-moss-700" />Camera</span>
              <span className="h-0.5 flex-1 bg-moss-600" />
              <span className="rounded-full bg-moss-800 px-2 py-0.5 text-[10px] font-semibold text-sand-50">ONE CABLE · POWER + DATA</span>
              <span className="h-0.5 flex-1 bg-moss-600" />
              <span className="flex flex-col items-center gap-1"><CvIcon name="nvr" className="h-6 w-6 text-moss-700" />NVR</span>
            </div>
          </div>
          <div className="rounded-2xl bg-ink-950 p-6 text-sand-50 sm:p-8">
            <CvIcon name="nvr" className="h-7 w-7 text-moss-200" />
            <h2 className="mt-3 font-serif text-2xl tracking-tight sm:text-3xl">DVR or NVR?</h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl bg-ink-900 p-4">
                <h3 className="font-semibold">DVR</h3>
                <p className="mt-1 text-sm leading-relaxed text-ink-300">Digital video recorder — typically used with analog / HD coaxial camera systems.</p>
              </div>
              <div className="rounded-xl bg-ink-900 p-4">
                <h3 className="font-semibold">NVR</h3>
                <p className="mt-1 text-sm leading-relaxed text-ink-300">Network video recorder — typically used with IP / network cameras.</p>
              </div>
            </div>
            <p className="mt-4 text-sm text-ink-300">The right recorder follows the camera system. We install both.</p>
          </div>
        </div>

        {/* Storage, remote, night */}
        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          <div className="rounded-2xl border border-ink-900/10 p-6">
            <CvIcon name="recording" className="h-7 w-7 text-moss-700" />
            <h2 className="mt-3 font-serif text-2xl tracking-tight text-ink-950">Where does CCTV footage go?</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-600">
              Usually to a hard drive in a local recorder; sometimes to network
              storage, a memory card, or the cloud where the system supports it.
              How long it&rsquo;s kept depends on:
            </p>
            <ul className="mt-3 flex flex-wrap gap-1.5">
              {storageVars.map((s) => <li key={s} className="rounded-full bg-moss-100 px-2.5 py-1 text-xs text-ink-800">{s}</li>)}
            </ul>
            <p className="mt-3 text-xs text-ink-500">We size storage to the retention you want — there&rsquo;s no fixed period.</p>
          </div>
          <div className="rounded-2xl border border-ink-900/10 p-6">
            <CvIcon name="mobile" className="h-7 w-7 text-moss-700" />
            <h2 className="mt-3 font-serif text-2xl tracking-tight text-ink-950">Check your cameras from your phone</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-600">
              Compatible systems can show live view, recorded footage, alerts and
              camera status in an app. That needs compatible hardware, an
              internet connection, the right app and proper configuration.
            </p>
            <h3 className="mt-4 text-sm font-semibold text-ink-950">If the internet goes down</h3>
            <p className="mt-1 text-sm leading-relaxed text-ink-600">A local recorder keeps recording. Remote viewing and alerts return when the connection does.</p>
          </div>
          <div className="rounded-2xl border border-ink-900/10 p-6">
            <CvIcon name="night" className="h-7 w-7 text-moss-700" />
            <h2 className="mt-3 font-serif text-2xl tracking-tight text-ink-950">Can CCTV see at night?</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-600">
              Many cameras use infrared to see in the dark (usually in black and
              white) or perform well in low light. Results depend on the camera,
              ambient lighting, placement, and nearby reflective surfaces that
              can bounce infrared back. Not every camera gives a clear colour
              picture at night.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
