"use client";

import { Form } from "@/components/form/Form";
import { TextField } from "@/components/form/TextField";
import { TextareaField } from "@/components/form/TextareaField";
import { ToggleField } from "@/components/form/ToggleField";
import { Button } from "@/components/ui/Button";
import { InfoBox } from "@/components/ui/InfoBox";
import type {
  ServiceFormInput,
  ServiceFormValues,
} from "@/lib/schemas/service";
import Link from "next/link";
import type { SubmitHandler, UseFormReturn } from "react-hook-form";

type ServiceFormProps = {
  form: UseFormReturn<ServiceFormValues, unknown, ServiceFormInput>;
  onSubmit: SubmitHandler<ServiceFormInput>;
  isPending: boolean;
  errorMsg?: string;
  submitLabel: string;
};

export function ServiceForm({
  form,
  onSubmit,
  isPending,
  errorMsg,
  submitLabel,
}: ServiceFormProps) {
  return (
    <Form form={form} onSubmit={onSubmit} className="flex flex-col gap-5">
      <TextField name="service_name" label="Service name" />

      <div className="grid grid-cols-2 gap-4">
        <TextField
          name="duration_minutes"
          type="number"
          min={1}
          step={1}
          label="Duration (minutes)"
        />
        <TextField
          name="price"
          type="number"
          min={0}
          step="0.01"
          label="Price (฿)"
        />
      </div>

      <TextareaField
        name="description"
        label="Description"
        rows={3}
        placeholder="Short description shown to customers"
      />

      <ToggleField
        name="is_active"
        label="Visible to customers"
        hint="Active services appear on the booking page."
      />

      {errorMsg && <InfoBox description={errorMsg} />}

      <div className="flex items-center gap-3">
        <Button type="submit" isLoading={isPending} className="flex-1">
          {isPending ? "Saving…" : submitLabel}
        </Button>
        <Link
          href="/admin/services"
          className="rounded-md border border-line-input px-6 py-3.5 text-[15px] font-semibold text-ink-muted transition-colors hover:bg-surface-page hover:text-ink"
        >
          Cancel
        </Link>
      </div>
    </Form>
  );
}
