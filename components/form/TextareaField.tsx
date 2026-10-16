"use client";

import type { ComponentProps } from "react";
import { useFormContext } from "react-hook-form";
import { useField } from "./useField";

export type TextareaFieldProps = ComponentProps<"textarea"> & {
  name: string;
  id?: string;
  label: string;
  hint?: string;
  error?: boolean;
  errorMsg?: string;
};

export function TextareaField(props: TextareaFieldProps) {
  const form = useFormContext();
  return form ? (
    <ConnectedTextareaField {...props} />
  ) : (
    <TextareaFieldView {...props} />
  );
}

function ConnectedTextareaField(props: TextareaFieldProps) {
  const { error, errorMsg, ...field } = useField(props.name);
  return (
    <TextareaFieldView
      {...props}
      {...field}
      error={props.error ?? error}
      errorMsg={props.errorMsg ?? errorMsg}
    />
  );
}

function TextareaFieldView({
  id: idProp,
  name,
  label,
  hint,
  error = false,
  errorMsg,
  className = "",
  rows = 3,
  ...props
}: TextareaFieldProps) {
  const id = idProp ?? name;
  const isInvalid = error || Boolean(errorMsg);
  const hintId = `${id}-hint`;
  const errorId = `${id}-error`;
  const describedBy =
    [hint && !errorMsg && hintId, errorMsg && errorId]
      .filter(Boolean)
      .join(" ") || undefined;

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <label htmlFor={id} className="text-[13px] font-semibold text-ink-label">
        {label}
      </label>
      <textarea
        id={id}
        name={name}
        rows={rows}
        aria-invalid={isInvalid || undefined}
        aria-describedby={describedBy}
        className={[
          "w-full resize-y rounded-md border bg-surface-input px-[15px] py-[13px] text-[15px] text-ink",
          "placeholder:text-ink-subtle outline-none transition-[border-color,box-shadow] duration-150",
          "focus:border-brand focus:shadow-focus",
          isInvalid ? "border-danger" : "border-line-input",
        ].join(" ")}
        {...props}
      />
      {hint && !errorMsg && (
        <p id={hintId} className="text-xs text-ink-subtle">
          {hint}
        </p>
      )}
      {errorMsg && (
        <p id={errorId} className="text-xs text-danger-ink">
          {errorMsg}
        </p>
      )}
    </div>
  );
}
