import type { ComponentProps } from "react";

type TextFieldProps = ComponentProps<"input"> & {
  id: string;
  label: string;
  hint?: string;
  error?: string;
};

export function TextField({ id, label, hint, error, className = "", ...props }: TextFieldProps) {
  const hintId = `${id}-hint`;
  const errorId = `${id}-error`;
  const describedBy = [hint && hintId, error && errorId].filter(Boolean).join(" ") || undefined;

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <label htmlFor={id} className="text-[13px] font-semibold text-ink-label">
        {label}
      </label>
      <input
        id={id}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy}
        className={[
          "w-full rounded-md border bg-surface-input px-[15px] py-[13px] text-[15px] text-ink",
          "placeholder:text-ink-subtle outline-none transition-[border-color,box-shadow] duration-150",
          "focus:border-brand focus:shadow-focus",
          error ? "border-danger" : "border-line-input",
        ].join(" ")}
        {...props}
      />
      {hint && !error && (
        <p id={hintId} className="text-xs text-ink-subtle">
          {hint}
        </p>
      )}
      {error && (
        <p id={errorId} className="text-xs text-danger-ink">
          {error}
        </p>
      )}
    </div>
  );
}
