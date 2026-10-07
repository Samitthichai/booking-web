import { BrandMark } from "@/components/ui/BrandMark";
import { Typography } from "@/components/ui/Typography";
import type { ReactNode } from "react";

type AuthPanelProps = {
  title: ReactNode | string;
  lead: string;
  features?: { icon?: ReactNode; label: string }[];
};

export function AuthPanel({ title, lead, features = [] }: AuthPanelProps) {
  return (
    <aside className="relative hidden w-[520px] shrink-0 flex-col justify-between overflow-hidden bg-brand px-[52px] py-14 text-on-brand lg:flex">
      <span
        aria-hidden="true"
        className="absolute -top-20 -right-30 size-80 rounded-full bg-brand-orb"
      />
      <span
        aria-hidden="true"
        className="absolute bottom-10 -left-[70px] size-50 rounded-full bg-brand-orb"
      />

      <div className="relative animate-rise">
        <BrandMark size="lg" inverse />
      </div>

      <div className="relative">
        <Typography
          as="p"
          variant="hero"
          className="mb-[18px] animate-rise [animation-delay:80ms]"
        >
          {title}
        </Typography>
        <Typography
          variant="lead"
          tone="on-brand-muted"
          className="max-w-[380px] animate-rise [animation-delay:160ms]"
        >
          {lead}
        </Typography>
      </div>

      <ul className="relative flex flex-col gap-4">
        {features.map((feature, i) => (
          <li
            key={feature.label}
            className="flex animate-rise items-center gap-[13px] text-[14.5px] text-brand-soft"
            style={{ animationDelay: `${240 + i * 80}ms` }}
          >
            {feature.icon && (
              <span className="flex size-[34px] shrink-0 items-center justify-center rounded-sm bg-white/16">
                {feature.icon}
              </span>
            )}
            {feature.label}
          </li>
        ))}
      </ul>
    </aside>
  );
}
