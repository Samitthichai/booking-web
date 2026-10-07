import type { ComponentProps } from "react";

type ButtonProps = ComponentProps<"button"> & {
  size?: "md" | "sm";
  block?: boolean;

  isLoading?: boolean;
};

const sizes = {
  md: "rounded-md px-8 py-3.5 text-[15px]",
  sm: "rounded-sm px-4 py-[9px] text-[13px]",
};

const states = {
  idle: "bg-brand text-on-brand cursor-pointer hover:-translate-y-0.5",
  loading: "bg-brand text-on-brand cursor-progress",
  disabled: "bg-line-input text-ink-subtle cursor-not-allowed",
};

const shadows = {
  md: {
    idle: "shadow-brand hover:shadow-brand-hover",
    loading: "shadow-brand",
    disabled: "",
  },
  sm: { idle: "", loading: "", disabled: "" },
};

export function Button({
  size = "md",
  block = false,
  isLoading = false,
  disabled,
  className = "",
  children,
  ...props
}: ButtonProps) {
  const state = isLoading ? "loading" : disabled ? "disabled" : "idle";

  return (
    <button
      disabled={disabled || isLoading}
      aria-busy={isLoading || undefined}
      className={[
        "inline-flex items-center justify-center gap-2 font-semibold transition duration-200",
        "focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-brand-strong",
        states[state],
        shadows[size][state],
        sizes[size],
        block ? "w-full" : "",
        className,
      ].join(" ")}
      {...props}
    >
      {isLoading && <Spinner />}
      {children}
    </button>
  );
}

function Spinner() {
  return (
    <svg
      className="size-4 shrink-0 animate-spin"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle
        cx="12"
        cy="12"
        r="9"
        stroke="currentColor"
        strokeOpacity="0.3"
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
