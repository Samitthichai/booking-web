import type { ComponentProps } from "react";

type ButtonProps = ComponentProps<"button"> & {
  size?: "md" | "sm";
  block?: boolean;
};

const sizes = {
  md: "rounded-md px-8 py-3.5 text-[15px] shadow-brand hover:shadow-brand-hover",
  sm: "rounded-sm px-4 py-[9px] text-[13px]",
};

export function Button({ size = "md", block = false, className = "", ...props }: ButtonProps) {
  return (
    <button
      className={[
        "inline-flex items-center justify-center gap-2 bg-brand font-semibold text-on-brand",
        "cursor-pointer transition duration-200 hover:-translate-y-0.5",
        "focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-brand-strong",
        "disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 disabled:hover:shadow-brand",
        sizes[size],
        block ? "w-full" : "",
        className,
      ].join(" ")}
      {...props}
    />
  );
}
