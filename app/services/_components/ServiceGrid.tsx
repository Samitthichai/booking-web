"use client";

import { InfoBox } from "@/components/ui/InfoBox";
import { Typography } from "@/components/ui/Typography";
import { useServices } from "@/lib/api/services";
import { ServiceCard } from "./ServiceCard";

export function ServiceGrid() {
  const { data: services, isPending, isError } = useServices();

  if (isPending) {
    return (
      <Typography variant="body-sm" tone="muted">
        Loading services…
      </Typography>
    );
  }

  if (isError) {
    return (
      <InfoBox description="Couldn't load services. Please try again." />
    );
  }

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
