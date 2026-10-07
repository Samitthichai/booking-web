import { TextField, type TextFieldProps } from "./TextField";

type EmailFieldProps = Omit<TextFieldProps, "type" | "label"> & {
  label?: string;
};

export function EmailField({
  label = "Email",
  placeholder = "you@example.com",
  ...props
}: EmailFieldProps) {
  return (
    <TextField
      label={label}
      type="email"
      inputMode="email"
      autoComplete="email"
      autoCapitalize="none"
      spellCheck={false}
      placeholder={placeholder}
      {...props}
    />
  );
}
