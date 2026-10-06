import type { ComponentProps, ReactNode } from "react";

export type TextFieldProps = ComponentProps<"input"> & {
  name: string;
  id?: string;
  label: string;
  hint?: string;
  error?: string;
  endSlot?: ReactNode;
};

export function TextField({
  id: idProp,
  name,
  label,
  hint,
  error,
  endSlot,
  className = "",
  ...props
}: TextFieldProps) {
  const id = idProp ?? name;
  const hintId = `${id}-hint`;
  const errorId = `${id}-error`;
  const describedBy =
    [hint && !error && hintId, error && errorId].filter(Boolean).join(" ") ||
    undefined;

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <label htmlFor={id} className="text-[13px] font-semibold text-ink-label">
        {label}
      </label>
      <div className="relative">
        <input
          id={id}
          name={name}
          aria-invalid={error ? true : undefined}
          aria-describedby={describedBy}
          className={[
            "w-full rounded-md border bg-surface-input px-[15px] py-[13px] text-[15px] text-ink",
            "placeholder:text-ink-subtle outline-none transition-[border-color,box-shadow] duration-150",
            "focus:border-brand focus:shadow-focus",
            error ? "border-danger" : "border-line-input",
            endSlot ? "pr-12" : "",
          ].join(" ")}
          {...props}
        />
        {endSlot && (
          <div className="absolute inset-y-0 right-1.5 flex items-center">
            {endSlot}
          </div>
        )}
      </div>
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
