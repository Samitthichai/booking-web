"use client";

import { InfoBox } from "@/components/ui/InfoBox";
import { Typography } from "@/components/ui/Typography";
import { useMemo } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";

//Not has a API Yet so this is mock
export const TIME_SLOTS_MOCK: { time: string; booked?: boolean }[] = [
  { time: "09:00" },
  { time: "09:30", booked: true },
  { time: "10:00" },
  { time: "10:30", booked: true },
  { time: "11:00" },
  { time: "11:30" },
  { time: "13:00" },
  { time: "13:30", booked: true },
  { time: "14:00" },
  { time: "14:30" },
];

type DateSelectionProps = {
  date: Date | undefined;
  onSelectDate: (date: Date | undefined) => void;
  selectedTime: string;
  onSelectTime: (time: string) => void;
  conflict: boolean;
};

export default function DateSelection({
  date,
  onSelectDate,
  selectedTime,
  onSelectTime,
  conflict,
}: DateSelectionProps) {
  const today = useMemo(() => {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    return d;
  }, []);

  return (
    <>
      <section className="mt-6">
        <Typography variant="section-title">Pick a date</Typography>
        <div className="mt-3 w-fit rounded-card border border-line bg-surface p-2 shadow-card">
          <DayPicker
            mode="single"
            required
            selected={date}
            onSelect={onSelectDate}
            disabled={{ before: today }}
            className="[--rdp-accent-background-color:var(--color-brand-soft)] [--rdp-accent-color:var(--color-brand)]"
          />
        </div>
      </section>

      <section className="mt-6">
        <Typography variant="section-title">Pick a time</Typography>
        <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-5">
          {TIME_SLOTS_MOCK.map(({ time, booked }) => {
            const active = time === selectedTime && !booked;
            return (
              <button
                key={time}
                type="button"
                disabled={booked}
                onClick={() => onSelectTime(time)}
                aria-pressed={active}
                className={[
                  "rounded-md border py-2.5 text-[14px] font-semibold transition-colors",
                  booked
                    ? "cursor-not-allowed border-line-input bg-surface-disabled text-ink-subtle line-through"
                    : active
                      ? "border-brand bg-surface text-brand"
                      : "border-line-input bg-surface text-ink hover:border-brand-line",
                ].join(" ")}
              >
                {time}
              </button>
            );
          })}
        </div>
        <Typography variant="hint" tone="subtle" className="mt-2.5">
          Struck-through times are already booked.
        </Typography>

        {conflict && (
          <InfoBox
            className="mt-4"
            description="This time was just booked — please pick another."
          />
        )}
      </section>
    </>
  );
}
