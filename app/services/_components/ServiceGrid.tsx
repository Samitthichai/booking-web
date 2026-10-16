"use client";

import { Typography } from "@/components/ui/Typography";
import { useServicesSuspense } from "@/lib/api/services";
import { ServiceCard } from "./ServiceCard";

export function ServiceGrid() {
  const { data: services } = useServicesSuspense();

  if (services.length === 0) {
    return (
      <Typography variant="body-sm" tone="muted">
        No services available right now.
      </Typography>
    );
  }

  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((service) => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </div>
  );
}
