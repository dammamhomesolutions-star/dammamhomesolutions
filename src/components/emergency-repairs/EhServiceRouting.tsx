import Link from "next/link";
import { serviceRoutingNodes } from "@/lib/emergency-repairs";

export default function EhServiceRouting() {
  return (
    <section className="border-b border-ink-900/10 bg-ink-950 py-20 text-sand-100 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ember-500">
            Service routing
          </p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-sand-50 sm:text-4xl">
            Where a problem tends to go.
          </h2>
          <p className="mt-4 text-ink-300">
            A rough guide, not a fixed rule — the right service depends on
            what&rsquo;s actually found.
          </p>
        </div>

        <div className="mt-12 divide-y divide-sand-100/10 border-y border-sand-100/10">
          {serviceRoutingNodes.map((node) => (
            <div
              key={node.id}
              className="flex flex-wrap items-center gap-4 py-4 sm:flex-nowrap sm:gap-6"
            >
              <span className="inline-flex w-full flex-none rounded-md border border-sand-100/15 bg-ink-900 px-4 py-2.5 text-sm font-medium text-sand-50 sm:w-48">
                {node.label}
              </span>
              <span aria-hidden="true" className="hidden text-ink-500 sm:inline">
                →
              </span>
              <div className="flex flex-wrap gap-x-5 gap-y-1.5">
                {node.routes.map((route) => (
                  <Link
                    key={route.href}
                    href={route.href}
                    className="focus-ring text-sm font-semibold text-ember-500 underline underline-offset-4 hover:text-ember-600"
                  >
                    {route.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
