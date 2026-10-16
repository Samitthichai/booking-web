"use client";

import { AdminErrorMessageMapper } from "@/app/admin/_lib/adminErrorMessageMapper";
import { ChevronLeftIcon } from "@/components/ui/icons";
import { Typography } from "@/components/ui/Typography";
import { useCreateService } from "@/lib/api/services";
import type { ServiceFormInput } from "@/lib/schemas/service";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ServiceForm } from "../_components/ServiceForm";
import { useServiceForm } from "../_hooks/useServiceForm";

export default function NewServicePage() {
  const form = useServiceForm();
  const create = useCreateService();
  const router = useRouter();

  const onSubmit = (data: ServiceFormInput) => {
    create.mutate(data, {
      onSuccess: () => router.push("/admin/services"),
    });
  };

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
        Add service
      </Typography>

      <div className="rounded-card border border-line bg-surface p-7 shadow-card">
        <ServiceForm
          form={form}
          onSubmit={onSubmit}
          isPending={create.isPending}
          errorMsg={create.isError ? AdminErrorMessageMapper(create.error) : undefined}
          submitLabel="Create service"
        />
      </div>
    </main>
  );
}
