import Link from "next/link";
import { AdminAuthShell } from "../_components/AdminAuthShell";
import { AdminRegisterForm } from "./_components/AdminRegisterForm";

export default function AdminRegisterPage() {
  return (
    <AdminAuthShell brandLayout="inline">
      <AdminRegisterForm />
      <p className="mt-5 text-center text-[13.5px] text-ink-muted">
        Already an admin?{" "}
        <Link
          href="/admin/login"
          className="font-semibold text-brand transition-colors hover:text-brand-strong"
        >
          Sign in
        </Link>
      </p>
    </AdminAuthShell>
  );
}
