"use client";

import { Button } from "@/components/ui/Button";
import { addMinutes, priceFormatter } from "@/lib/formatter";
import type { Service } from "@/lib/types/service";

type Props = {
  service: Service;
  date: Date | undefined;
  selectedTime: string;
  onConfirm: () => void;
};

export function BookingFooter({
  service,
  date,
  selectedTime,
  onConfirm,
}: Props) {
  const dateLabel = date
    ? date.toLocaleDateString("en-US", {
        weekday: "short",
        day: "numeric",
        month: "short",
      })
    : "—";
  const endTime = addMinutes(selectedTime, service.duration_minutes);

  return (
    <div className="fixed inset-x-0 bottom-0 border-t border-line bg-surface">
      <div className="mx-auto flex max-w-3xl items-center justify-between gap-4 px-6 py-4 sm:px-10">
        <div className="flex flex-col">
          <span className="text-[13px] text-ink-muted">
            {dateLabel} · {selectedTime}–{endTime}
          </span>
          <span className="font-display text-base font-bold text-ink">
            {priceFormatter.format(service.price)}
          </span>
        </div>
        <Button type="button" onClick={onConfirm}>
          Confirm booking
        </Button>
      </div>
    </div>
  );
}
