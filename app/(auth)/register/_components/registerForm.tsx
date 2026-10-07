"use client";

import { EmailField } from "@/components/form/EmailField";
import { Form } from "@/components/form/Form";
import { PasswordField } from "@/components/form/PasswordField";
import { Button } from "@/components/ui/Button";
import { InfoBox } from "@/components/ui/InfoBox";
import { Typography } from "@/components/ui/Typography";
import Link from "next/link";
import { useRegisterForm } from "../_hooks/useRegisterForm";

export function RegisterForm() {
  const { form, onSubmit, errorMsg, isPending } = useRegisterForm();
  return (
    <Form form={form} onSubmit={onSubmit} className="flex flex-col">
      <EmailField name="email" className="mb-4" />
      <PasswordField
        name="password"
        placeholder="At least 8 characters"
        hint="Use 8 or more characters"
        className="mb-4"
      />
      <PasswordField
        name="confirmPassword"
        label="Confirm password"
        placeholder="Re-enter password"
        className="mb-6"
      />
      {errorMsg && <InfoBox description={errorMsg} />}
      <Button type="submit" isLoading={isPending} block className="mt-4">
        Register
      </Button>
      <Typography variant="ui" tone="muted" className="mt-[22px] text-center">
        Already have an account?{" "}
        <Link
          href="/login"
          className="font-semibold text-brand transition-colors hover:text-brand-strong"
        >
          Log in
        </Link>
      </Typography>
    </Form>
  );
}
