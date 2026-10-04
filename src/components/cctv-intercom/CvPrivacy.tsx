import { cvAccess, cvPrivacy } from "@/lib/cctv-intercom";
import CvIcon from "./CvIcon";

export default function CvPrivacy() {
  return (
    <section id="privacy" aria-label="Privacy and footage access" className="border-b border-ink-900/10 bg-moss-100/50 py-20 sm:py-24">
      <div className="container-edge grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl bg-sand-50 p-6 ring-1 ring-ink-900/10 sm:p-8">
          <CvIcon name="eye" className="h-7 w-7 text-moss-700" />
          <h2 className="mt-3 font-serif text-3xl tracking-tight text-ink-950">CCTV should improve security without ignoring privacy</h2>
          <ul className="mt-5 space-y-2.5">
            {cvPrivacy.map((p) => (
              <li key={p} className="flex gap-2 text-sm leading-relaxed text-ink-800">
                <CvIcon name="check" className="mt-0.5 h-4 w-4 flex-none text-moss-600" />
                {p}
              </li>
            ))}
          </ul>
          <p className="mt-5 rounded-xl bg-moss-100 p-3 text-sm leading-relaxed text-ink-700">
            Camera placement and recording practices should comply with
            applicable privacy and security requirements. Commercial premises
            may have additional obligations — check what applies to your
            business.
          </p>
        </div>
        <div className="rounded-2xl bg-ink-950 p-6 text-sand-50 sm:p-8">
          <CvIcon name="lock" className="h-7 w-7 text-moss-200" />
          <h2 className="mt-3 font-serif text-3xl tracking-tight">Who can access your CCTV footage?</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink-300">
            A camera system is also a device on your network. At handover we
            set it up so only the right people can see it:
          </p>
          <ul className="mt-5 space-y-2.5">
            {cvAccess.map((p) => (
              <li key={p} className="flex gap-2 text-sm leading-relaxed text-sand-100">
                <CvIcon name="check" className="mt-0.5 h-4 w-4 flex-none text-moss-200" />
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
