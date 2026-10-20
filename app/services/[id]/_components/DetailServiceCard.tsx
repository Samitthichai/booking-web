import { Typography } from "@/components/ui/Typography";
import { priceFormatter } from "@/lib/formatter";

export type ServicesCardProps = {
  serviceName: string;
  duration: number;
  price: number;
};

export function DetailServicesCard(props: ServicesCardProps) {
  const { serviceName, duration, price } = props;
  return (
    <article className="flex rounded-card border border-line bg-surface p-5 shadow-card gap-4">
      <span
        aria-hidden="true"
        className="mb-5 flex size-11 items-center justify-center rounded-tile bg-brand-soft"
      />

      <div className="flex flex-col gap-2">
        <Typography variant="card-title">{serviceName}</Typography>

        <div className="flex items-center justify-between gap-3">
          <span className="text-[14px] text-ink-muted">
            {duration} min ·{" "}
            <span className="font-semibold text-ink-muted">
              {priceFormatter.format(price)}
            </span>
          </span>
        </div>
      </div>
    </article>
  );
}
