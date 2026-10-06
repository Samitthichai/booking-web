"use client";

import { EmailField } from "@/components/form/EmailField";
import { PasswordField } from "@/components/form/PasswordField";
import { Button } from "@/components/ui/Button";
import { Typography } from "@/components/ui/Typography";
import Link from "next/link";

export function RegisterForm() {
  return (
    <form
      noValidate
      onSubmit={(e) => e.preventDefault()} //TODO: handle login
      className="flex flex-col"
    >
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
      <Button type="submit" block>
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
    </form>
  );
}
