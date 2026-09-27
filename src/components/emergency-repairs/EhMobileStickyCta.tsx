export default function EhMobileStickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-ink-900/10 bg-sand-50/95 p-3 backdrop-blur [padding-bottom:calc(0.75rem+env(safe-area-inset-bottom))] lg:hidden">
      <a
        href="#what-happened"
        className="focus-ring flex w-full items-center justify-center rounded-full bg-ember-600 px-5 py-3.5 text-sm font-semibold text-ink-950"
      >
        Start Repair Request
      </a>
    </div>
  );
}
