"use client";

import { EmailField } from "@/components/form/EmailField";
import { Form } from "@/components/form/Form";
import { PasswordField } from "@/components/form/PasswordField";
import { Button } from "@/components/ui/Button";
import { InfoBox } from "@/components/ui/InfoBox";
import { Typography } from "@/components/ui/Typography";
import { useAdminLoginForm } from "../_hooks/useAdminLoginForm";

export function AdminLoginForm() {
  const { form, onSubmit, isPending, errorMsg } = useAdminLoginForm();

  return (
    <Form form={form} onSubmit={onSubmit} className="flex flex-col">
      <Typography variant="auth-title">Admin sign in</Typography>
      <Typography variant="body-sm" tone="muted" className="mt-1 mb-6">
        Manage services and bookings
      </Typography>

      <EmailField
        name="email"
        placeholder="admin@queueup.app"
        className="mb-[18px]"
      />
      <PasswordField
        name="password"
        placeholder="Enter your password"
        className="mb-6"
      />
      {errorMsg && <InfoBox description={errorMsg} className="mb-2" />}
      <Button type="submit" isLoading={isPending} block className="mt-2">
        {isPending ? "Signing in…" : "Sign in"}
      </Button>
    </Form>
  );
}
