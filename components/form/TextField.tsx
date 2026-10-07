"use client";

import type { ComponentProps, ReactNode } from "react";
import { useFormContext } from "react-hook-form";
import { useField } from "./useField";

export type TextFieldProps = ComponentProps<"input"> & {
  name: string;
  id?: string;
  label: string;
  hint?: string;
  /** Error state: red border + aria-invalid. */
  error?: boolean;
  /** Message shown under the field. Implies `error`. */
  errorMsg?: string;
  endSlot?: ReactNode;
};

export function TextField(props: TextFieldProps) {
  const form = useFormContext();
  return form ? (
    <ConnectedTextField {...props} />
  ) : (
    <TextFieldView {...props} />
  );
}

function ConnectedTextField(props: TextFieldProps) {
  const { error, errorMsg, ...field } = useField(props.name);
  return (
    <TextFieldView
      {...props}
      {...field}
      error={props.error ?? error}
      errorMsg={props.errorMsg ?? errorMsg}
    />
  );
}

function TextFieldView({
  id: idProp,
  name,
  label,
  hint,
  error = false,
  errorMsg,
  endSlot,
  className = "",
  ...props
}: TextFieldProps) {
  const id = idProp ?? name;
  const isInvalid = error || Boolean(errorMsg);
  const hintId = `${id}-hint`;
  const errorId = `${id}-error`;
  const describedBy =
    [hint && !errorMsg && hintId, errorMsg && errorId].filter(Boolean).join(" ") ||
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
          aria-invalid={isInvalid || undefined}
          aria-describedby={describedBy}
          className={[
            "w-full rounded-md border bg-surface-input px-[15px] py-[13px] text-[15px] text-ink",
            "placeholder:text-ink-subtle outline-none transition-[border-color,box-shadow] duration-150",
            "focus:border-brand focus:shadow-focus",
            isInvalid ? "border-danger" : "border-line-input",
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
