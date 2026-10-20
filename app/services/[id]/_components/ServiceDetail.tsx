"use client";

import { Typography } from "@/components/ui/Typography";
import { useServicesSuspense } from "@/lib/api/services";
import { useDetailServices } from "../_hooks/useDetailServices";
import BackLink from "./BackLink";
import { BookingFooter } from "./BookingFooter";
import DateSelection from "./DateSelection";
import { DetailServicesCard } from "./DetailServiceCard";

export function ServiceDetail({ id }: { id: number }) {
  const { data: services } = useServicesSuspense();
  const service = services.find((s) => s.id === id);

  const {
    date,
    selectedTime,
    conflict,
    handleSelectDate,
    handleSelectTime,
    handleConfirm,
  } = useDetailServices();

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
        onSelectDate={handleSelectDate}
        selectedTime={selectedTime}
        onSelectTime={handleSelectTime}
        conflict={conflict}
      />

      <BookingFooter
        service={service}
        date={date}
        selectedTime={selectedTime}
        onConfirm={handleConfirm}
      />
    </div>
  );
}
