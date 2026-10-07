"use client";

import { EmailField } from "@/components/form/EmailField";
import { Form } from "@/components/form/Form";
import { PasswordField } from "@/components/form/PasswordField";
import { Button } from "@/components/ui/Button";
import { InfoBox } from "@/components/ui/InfoBox";
import { Typography } from "@/components/ui/Typography";
import Link from "next/link";
import { useLoginForm } from "../_hooks/useLoginForm";

export function LoginForm() {
  const { form, onSubmit, isPending, errorMsg } = useLoginForm();

  return (
    <Form form={form} onSubmit={onSubmit} className="flex flex-col ">
      <EmailField name="email" className="mb-[18px]" />
      <PasswordField
        name="password"
        placeholder="Enter your password"
        className="mb-6"
      />
      {errorMsg && <InfoBox description={errorMsg} />}
      <Button type="submit" isLoading={isPending} block className="mt-4">
        {isPending ? "Logging in…" : "Log in"}
      </Button>
      <Typography variant="ui" tone="muted" className="mt-[22px] text-center">
        Don&apos;t have an account?{" "}
        <Link
          href="/register"
          className="font-semibold text-brand transition-colors hover:text-brand-strong"
        >
          Create one
        </Link>
      </Typography>
    </Form>
  );
}
