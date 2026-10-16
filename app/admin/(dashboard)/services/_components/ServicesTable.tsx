"use client";

import { AdminErrorMessageMapper } from "@/app/admin/_lib/adminErrorMessageMapper";
import { useAdminServices, useDeleteService } from "@/lib/api/services";
import { InfoBox } from "@/components/ui/InfoBox";
import { Typography } from "@/components/ui/Typography";
import Link from "next/link";

const priceFormatter = new Intl.NumberFormat("th-TH", {
  style: "currency",
  currency: "THB",
  maximumFractionDigits: 0,
});

export function ServicesTable() {
  const { data: services, isPending, isError, error } = useAdminServices();
  const deleteService = useDeleteService();

  const onDelete = (id: number, name: string) => {
    if (!window.confirm(`Delete "${name}"? This can't be undone.`)) return;
    deleteService.mutate(id);
  };

  if (isPending) {
    return (
      <Typography variant="body-sm" tone="muted">
        Loading services…
      </Typography>
    );
  }

  if (isError) {
    return <InfoBox description={AdminErrorMessageMapper(error)} />;
  }

  if (services.length === 0) {
    return (
      <Typography variant="body-sm" tone="muted">
        No services yet. Add one to get started.
      </Typography>
    );
  }

  return (
    <div className="overflow-hidden rounded-card border border-line bg-surface shadow-card">
      <table className="w-full border-collapse text-left">
        <thead>
          <tr className="border-b border-line text-[11px] font-bold tracking-[0.5px] text-ink-subtle uppercase">
            <th className="px-5 py-3.5 font-bold">Service</th>
            <th className="px-5 py-3.5 font-bold">Duration</th>
            <th className="px-5 py-3.5 font-bold">Price</th>
            <th className="px-5 py-3.5 font-bold">Status</th>
            <th className="px-5 py-3.5 text-right font-bold">Actions</th>
          </tr>
        </thead>
        <tbody>
          {services.map((service) => (
            <tr
              key={service.id}
              className="border-b border-line last:border-0"
            >
              <td className="px-5 py-4">
                <span
                  className={`text-[15px] font-semibold ${service.is_active ? "text-ink" : "text-ink-subtle"}`}
                >
                  {service.service_name}
                </span>
              </td>
              <td className="px-5 py-4 text-[14px] text-ink-muted">
                {service.duration_minutes} min
              </td>
              <td className="px-5 py-4 text-[14px] text-ink-muted">
                {priceFormatter.format(service.price)}
              </td>
              <td className="px-5 py-4">
                {service.is_active ? (
                  <span className="rounded-sm bg-success-soft px-2 py-1 text-[12px] font-semibold text-success-ink">
                    Active
                  </span>
                ) : (
                  <span className="rounded-sm bg-neutral-soft px-2 py-1 text-[12px] font-semibold text-ink-muted">
                    Hidden
                  </span>
                )}
              </td>
              <td className="px-5 py-4 text-right">
                <Link
                  href={`/admin/services/${service.id}/edit`}
                  className="text-[14px] font-semibold text-brand transition-colors hover:text-brand-strong"
                >
                  Edit
                </Link>
                <button
                  type="button"
                  onClick={() => onDelete(service.id, service.service_name)}
                  disabled={deleteService.isPending}
                  className="ml-4 cursor-pointer text-[14px] font-semibold text-ink-subtle transition-colors hover:text-danger-ink disabled:cursor-not-allowed disabled:opacity-50"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
