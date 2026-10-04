import { cvCabling, cvProcess } from "@/lib/cctv-intercom";
import CvIcon from "./CvIcon";
import CvCtas from "./CvCtas";

export default function CvProcess() {
  return (
    <section id="process" aria-labelledby="cv-process" className="border-b border-ink-900/10 bg-ink-950 py-20 text-sand-50 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-moss-200">How it works</p>
          <h2 id="cv-process" className="mt-4 font-serif text-3xl tracking-tight sm:text-4xl">Our CCTV &amp; intercom installation process</h2>
        </div>
        <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cvProcess.map((s, i) => (
            <li key={s.title} className="group relative rounded-2xl border border-sand-100/10 bg-ink-900 p-5 transition-colors hover:border-moss-200/50">
              <div className="flex items-center justify-between">
                <CvIcon name={s.icon} className="h-6 w-6 text-moss-200" />
                <span className="font-mono text-xs text-ink-400">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <h3 className="mt-4 text-[15px] font-semibold">{s.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-ink-300">{s.body}</p>
            </li>
          ))}
        </ol>

        <div className="mt-16 grid gap-8 rounded-2xl bg-ink-900 p-6 sm:p-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <CvIcon name="cable" className="h-7 w-7 text-moss-200" />
            <h2 className="mt-3 font-serif text-3xl tracking-tight">Good installation is more than mounting cameras</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-300">
              Many long-term CCTV problems trace back to cabling and
              connections, not the camera. We pay attention to:
            </p>
          </div>
          <ul className="grid gap-2 sm:grid-cols-2 lg:col-span-7">
            {cvCabling.map((c) => (
              <li key={c} className="flex gap-2 rounded-xl bg-ink-950 p-3 text-sm text-sand-100">
                <CvIcon name="check" className="mt-0.5 h-4 w-4 flex-none text-moss-200" />
                {c}
              </li>
            ))}
          </ul>
        </div>
        <CvCtas tone="dark" className="mt-10" />
      </div>
    </section>
  );
}
