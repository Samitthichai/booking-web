"use client";

import { useController, useFormContext } from "react-hook-form";

type ToggleFieldProps = {
  name: string;
  label: string;
  hint?: string;
  className?: string;
};

export function ToggleField({
  name,
  label,
  hint,
  className = "",
}: ToggleFieldProps) {
  const { control } = useFormContext();
  const { field } = useController({ name, control });
  const checked = Boolean(field.value);

  return (
    <div
      className={`flex items-center justify-between gap-4 rounded-md border border-line-input bg-surface-input px-4 py-3.5 ${className}`}
    >
      <div className="flex flex-col gap-0.5">
        <span className="text-[14px] font-semibold text-ink">{label}</span>
        {hint && <span className="text-xs text-ink-subtle">{hint}</span>}
      </div>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        aria-label={label}
        onClick={() => field.onChange(!checked)}
        onBlur={field.onBlur}
        className={[
          "relative inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full transition-colors duration-200",
          "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-strong",
          checked ? "bg-brand" : "bg-line-input",
        ].join(" ")}
      >
        <span
          className={[
            "inline-block size-5 rounded-full bg-white shadow-sm transition-transform duration-200",
            checked ? "translate-x-[22px]" : "translate-x-0.5",
          ].join(" ")}
        />
      </button>
    </div>
  );
}
