type LoadingProps = {
  label?: string;
  className?: string;
};

export function Loading({ label = "Loading…", className = "" }: LoadingProps) {
  return (
    <div
      role="status"
      aria-live="polite"
      className={`flex items-center justify-center gap-2.5 py-16 text-ink-muted ${className}`}
    >
      <Spinner />
      <span className="text-[14px]">{label}</span>
    </div>
  );
}

function Spinner() {
  return (
    <svg
      className="size-4 shrink-0 animate-spin text-brand"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle
        cx="12"
        cy="12"
        r="9"
        stroke="currentColor"
        strokeOpacity="0.25"
        strokeWidth="3"
      />
      <path
        d="M21 12a9 9 0 0 0-9-9"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}
