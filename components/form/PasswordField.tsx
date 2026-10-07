"use client";

import { EyeIcon, EyeOffIcon } from "@/components/ui/icons";
import { useState } from "react";
import { TextField, type TextFieldProps } from "./TextField";

type PasswordFieldProps = Omit<
  TextFieldProps,
  "type" | "label" | "autoComplete" | "endSlot"
> & {
  label?: string;
};

export function PasswordField({
  label = "Password",
  ...props
}: PasswordFieldProps) {
  const [visible, setVisible] = useState(false);
  const id = props.id ?? props.name;

  return (
    <TextField
      label={label}
      type={visible ? "text" : "password"}
      autoCapitalize="none"
      spellCheck={false}
      endSlot={
        <button
          type="button"
          onClick={() => setVisible((v) => !v)}
          aria-label={visible ? "Hide password" : "Show password"}
          aria-controls={id}
          aria-pressed={visible}
          className="flex size-9 cursor-pointer items-center justify-center rounded-sm text-ink-muted transition-colors hover:text-ink focus-visible:outline-2 focus-visible:outline-brand-strong"
        >
          {visible ? (
            <EyeOffIcon width={18} height={18} />
          ) : (
            <EyeIcon width={18} height={18} />
          )}
        </button>
      }
      {...props}
    />
  );
}
