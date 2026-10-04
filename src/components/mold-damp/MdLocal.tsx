import Link from "next/link";
import { Spec } from "./MdUi";

const a = "focus-ring rounded-sm font-semibold text-ink-950 underline decoration-glass-600 underline-offset-4 hover:text-glass-700";

// Local context, written once, with contextual links.
export default function MdLocal() {
  return (
    <section aria-labelledby="md-local" className="border-t border-ink-900/10 bg-concrete-100 py-20 sm:py-24">
      <div className="container-edge grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Spec code="S-18">Local context</Spec>
          <h2 id="md-local" className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">Mold &amp; damp concerns in Dammam properties</h2>
        </div>
        <div className="space-y-5 text-[15px] leading-relaxed text-ink-700 lg:col-span-8">
          <p>
            Homes here spend much of the year with the air-conditioning running.
            The difference between cooled rooms and warm, often humid outside air
            can leave some surfaces cooler than the air around them — behind
            wardrobes, in closed rooms, around AC units and on outside walls —
            and that&rsquo;s where condensation can form.
          </p>
          <p>
            Bathrooms and kitchens add daily moisture, and villas and apartments
            alike can be affected by water entering through roofs, exterior walls,
            window edges or a neighbouring unit. None of this means a property
            will develop mold; it means it&rsquo;s worth knowing where to look when a
            patch, a smell or peeling paint appears.
          </p>
          <p>
            Depending on what&rsquo;s found, related work may include{" "}
            <Link href="/water-leak-repair/" className={a}>water leak detection and repair</Link>,{" "}
            <Link href="/plumbing-repair/" className={a}>plumbing</Link>,{" "}
            <Link href="/waterproofing/" className={a}>waterproofing</Link>,{" "}
            <Link href="/painting-wall-repair/" className={a}>painting and wall repair</Link>,{" "}
            <Link href="/ceiling-gypsum-board-repair/" className={a}>ceiling repair</Link> or, where the damage is wider,{" "}
            <Link href="/home-renovation-dammam/" className={a}>home renovation</Link>. For a clean after the work,
            see{" "}
            <Link href="/deep-cleaning-move-in-move-out-cleaning-dammam/" className={a}>deep cleaning</Link>.
          </p>
        </div>
      </div>
    </section>
  );
}
