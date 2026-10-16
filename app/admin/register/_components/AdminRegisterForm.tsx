"use client";

import { EmailField } from "@/components/form/EmailField";
import { Form } from "@/components/form/Form";
import { PasswordField } from "@/components/form/PasswordField";
import { TextField } from "@/components/form/TextField";
import { Button } from "@/components/ui/Button";
import { InfoBox } from "@/components/ui/InfoBox";
import { Typography } from "@/components/ui/Typography";
import { useAdminRegisterForm } from "../_hooks/useAdminRegisterForm";

export function AdminRegisterForm() {
  const { form, onSubmit, isPending, errorMsg } = useAdminRegisterForm();

  return (
    <Form form={form} onSubmit={onSubmit} className="flex flex-col">
      <Typography variant="auth-title">Create admin account</Typography>
      <Typography variant="body-sm" tone="muted" className="mt-1 mb-6">
        Requires an invite code from an existing admin
      </Typography>

      <EmailField
        name="email"
        placeholder="admin@queueup.app"
        className="mb-[18px]"
      />
      <div className="mb-[18px] grid grid-cols-2 gap-3">
        <PasswordField
          name="password"
          label="Password"
          placeholder="Min 8 chars"
        />
        <PasswordField
          name="confirmPassword"
          label="Confirm"
          placeholder="Repeat"
        />
      </div>
      <TextField
        name="invite_code"
        label="Admin invite code"
        placeholder="e.g. QU-ADMIN-2026"
        hint="Prevents anyone from self-registering as an admin."
        autoComplete="off"
        className="mb-6"
      />
      {errorMsg && <InfoBox description={errorMsg} className="mb-2" />}
      <Button type="submit" isLoading={isPending} block>
        {isPending ? "Creating…" : "Create admin account"}
      </Button>
    </Form>
  );
}
