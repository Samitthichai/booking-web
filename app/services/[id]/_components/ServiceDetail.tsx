"use client";

import { Typography } from "@/components/ui/Typography";
import { useServicesSuspense } from "@/lib/api/services";
import { useState } from "react";
import BackLink from "./BackLink";
import { BookingFooter } from "./BookingFooter";
import DateSelection from "./DateSelection";
import { DetailServicesCard } from "./DetailServiceCard";

export function ServiceDetail({ id }: { id: number }) {
  const { data: services } = useServicesSuspense();
  const service = services.find((s) => s.id === id);

  const [date, setDate] = useState<Date | undefined>(() => new Date());
  const [selectedTime, setSelectedTime] = useState("10:00");
  const [conflict, setConflict] = useState(false);

  if (!service) {
    return (
      <div>
        <BackLink />
        <Typography variant="body-sm" tone="muted">
          Service not found.
        </Typography>
      </div>
    );
  }

  return (
    <div>
      <BackLink />

      <DetailServicesCard
        serviceName={service.service_name}
        duration={service.duration_minutes}
        price={service.price}
      />

      <DateSelection
        date={date}
        onSelectDate={(next) => {
          setDate(next);
          setConflict(false);
        }}
        selectedTime={selectedTime}
        onSelectTime={(time) => {
          setSelectedTime(time);
          setConflict(false);
        }}
        conflict={conflict}
      />

      <BookingFooter
        service={service}
        date={date}
        selectedTime={selectedTime}
        onConfirm={() => setConflict(true)}
      />
    </div>
  );
}
