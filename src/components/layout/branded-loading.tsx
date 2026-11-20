export function BrandedLoading({ label = "Loading A2Smart Classes" }: { label?: string }) {
  return (
    <div className="grid min-h-[50vh] place-items-center px-5" role="status" aria-live="polite">
      <div className="grid w-full max-w-xs justify-items-center gap-4">
        <span className="grid size-16 place-items-center rounded-full border border-gold-300/70 font-serif text-xl text-navy-950">
          A2
        </span>
        <p className="font-serif text-lg text-navy-950">{label}</p>
        <div className="brand-loading-line w-full" aria-hidden="true" />
      </div>
    </div>
  );
}
