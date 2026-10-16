import Link from "next/link";
import { AdminAuthShell } from "../_components/AdminAuthShell";
import { AdminLoginForm } from "./_components/AdminLoginForm";

export default function AdminLoginPage() {
  return (
    <AdminAuthShell
      footer={
        <>
          Not an admin?{" "}
          <Link
            href="/login"
            className="font-semibold text-on-brand transition-colors hover:text-brand-tint"
          >
            Customer login
          </Link>
        </>
      }
    >
      <AdminLoginForm />
      <p className="mt-5 text-center text-[13.5px] text-ink-muted">
        Need an admin account?{" "}
        <Link
          href="/admin/register"
          className="font-semibold text-brand transition-colors hover:text-brand-strong"
        >
          Register
        </Link>
      </p>
    </AdminAuthShell>
  );
}
