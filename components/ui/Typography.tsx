import type { ComponentPropsWithoutRef, ElementType } from "react";

const variants = {
  hero: "font-display text-[46px] leading-[1.08] font-bold tracking-[-1px] text-balance",
  "page-title":
    "font-display text-[32px] font-bold tracking-[-0.6px] text-balance",
  "auth-title":
    "font-display text-[22px] font-semibold tracking-[-0.4px] sm:text-[27px]",
  "card-title": "font-display text-[17px] font-semibold",
  "section-title": "font-display text-base font-semibold",
  price: "font-display text-base font-bold",

  lead: "text-[17px] leading-[1.65]",
  body: "text-[15px]",
  "body-sm": "text-[13.5px] sm:text-[14.5px]",
  ui: "text-sm",
  caption: "text-[13.5px]",
  label: "text-[13px] font-semibold",
  overline: "text-[12.5px] font-bold tracking-[0.6px] uppercase",
  hint: "text-xs",
} as const;

const defaultTags: Record<Variant, ElementType> = {
  hero: "h1",
  "page-title": "h1",
  "auth-title": "h1",
  "card-title": "h3",
  "section-title": "h2",
  price: "p",
  lead: "p",
  body: "p",
  "body-sm": "p",
  ui: "p",
  caption: "p",
  label: "span",
  overline: "p",
  hint: "p",
};

const tones = {
  inherit: "",
  ink: "text-ink",
  label: "text-ink-label",
  muted: "text-ink-muted",
  subtle: "text-ink-subtle",
  brand: "text-brand",
  "on-brand": "text-on-brand",
  "on-brand-muted": "text-brand-tint",
  danger: "text-danger-ink",
} as const;

type Variant = keyof typeof variants;
type Tone = keyof typeof tones;

type TypographyProps<T extends ElementType> = {
  as?: T;
  variant?: Variant;
  tone?: Tone;
  className?: string;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "className">;

export function Typography<T extends ElementType = "p">({
  as,
  variant = "body",
  tone = "inherit",
  className = "",
  ...props
}: TypographyProps<T>) {
  const Tag = as ?? defaultTags[variant];
  return (
    <Tag
      className={`${variants[variant]} ${tones[tone]} ${className}`.trim()}
      {...props}
    />
  );
}
