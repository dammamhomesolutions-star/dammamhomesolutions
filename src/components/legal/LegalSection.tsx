import type { ReactNode } from "react";

export default function LegalSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="border-t border-ink-900/10 py-8 first:border-t-0 first:pt-0">
      <h2 className="font-serif text-xl text-ink-950 sm:text-2xl">{title}</h2>
      <div className="prose-legal mt-4 space-y-4 text-[15px] leading-relaxed text-ink-700">
        {children}
      </div>
    </section>
  );
}
