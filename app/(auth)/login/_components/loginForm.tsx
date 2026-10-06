"use client";

import { EmailField } from "@/components/form/EmailField";
import { PasswordField } from "@/components/form/PasswordField";
import { Button } from "@/components/ui/Button";
import { Typography } from "@/components/ui/Typography";
import Link from "next/link";

export function LoginForm() {
  return (
    <form
      noValidate
      onSubmit={(e) => e.preventDefault()} //TODO: handle login
      className="flex flex-col"
    >
      <EmailField name="email" className="mb-[18px]" />
      <PasswordField
        name="password"
        placeholder="Enter your password"
        className="mb-6"
      />
      <Button type="submit" block>
        Log in
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
    </form>
  );
}
