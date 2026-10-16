"use client";

import { AdminErrorMessageMapper } from "@/app/admin/_lib/adminErrorMessageMapper";
import { ChevronLeftIcon } from "@/components/ui/icons";
import { InfoBox } from "@/components/ui/InfoBox";
import { Typography } from "@/components/ui/Typography";
import { useAdminServices, useUpdateService } from "@/lib/api/services";
import type { ServiceFormInput } from "@/lib/schemas/service";
import type { Service } from "@/lib/types/service";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { ServiceForm } from "../../_components/ServiceForm";
import { useServiceForm } from "../../_hooks/useServiceForm";

function EditServiceForm({ service }: { service: Service }) {
  const form = useServiceForm({
    service_name: service.service_name,
    description: service.description,
    duration_minutes: service.duration_minutes,
    price: service.price,
    is_active: service.is_active,
  });
  const update = useUpdateService(service.id);
  const router = useRouter();

  const onSubmit = (data: ServiceFormInput) => {
    update.mutate(data, {
      onSuccess: () => router.push("/admin/services"),
    });
  };

  return (
    <ServiceForm
      form={form}
      onSubmit={onSubmit}
      isPending={update.isPending}
      errorMsg={update.isError ? AdminErrorMessageMapper(update.error) : undefined}
      submitLabel="Save changes"
    />
  );
}

export default function EditServicePage() {
  const params = useParams();
  const id = Number(params.id);
  const { data, isPending, isError, error } = useAdminServices();

  const service = data?.find((s) => s.id === id);

  return (
    <main className="mx-auto w-full max-w-2xl px-8 py-8">
      <Link
        href="/admin/services"
        className="mb-2 inline-flex items-center gap-1 text-[13.5px] font-semibold text-ink-muted transition-colors hover:text-ink"
      >
        <ChevronLeftIcon width={16} height={16} />
        Services
      </Link>
      <Typography variant="page-title" className="mb-6">
        Edit service
      </Typography>

      <div className="rounded-card border border-line bg-surface p-7 shadow-card">
        {isPending && (
          <Typography variant="body-sm" tone="muted">
            Loading service…
          </Typography>
        )}
        {isError && <InfoBox description={AdminErrorMessageMapper(error)} />}
        {!isPending && !isError && !service && (
          <InfoBox tone="warning" description="This service no longer exists." />
        )}
        {service && <EditServiceForm service={service} />}
      </div>
    </main>
  );
}
