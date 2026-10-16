import { Typography } from "@/components/ui/Typography";
import { priceFormatter } from "@/lib/formatter";
import type { Service } from "@/lib/types/service";
import Link from "next/link";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="flex flex-col rounded-card border border-line bg-surface p-5 shadow-card">
      <span
        aria-hidden="true"
        className="mb-5 flex size-11 items-center justify-center rounded-tile bg-brand-soft"
      />

      <Typography variant="card-title">{service.service_name}</Typography>
      {service.description && (
        <Typography variant="body-sm" tone="muted" className="mt-1">
          {service.description}
        </Typography>
      )}

      <div className="mt-5 flex items-center justify-between gap-3">
        <span className="text-[14px] text-ink-muted">
          {service.duration_minutes} min ·{" "}
          <span className="font-semibold text-ink">
            {priceFormatter.format(service.price)}
          </span>
        </span>
        <Link
          href={`/booking?service=${service.id}`}
          className="rounded-md bg-brand px-5 py-2.5 text-[14px] font-semibold text-on-brand shadow-brand transition hover:-translate-y-0.5 hover:shadow-brand-hover"
        >
          Book
        </Link>
      </div>
    </article>
  );
}
