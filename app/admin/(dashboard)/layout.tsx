import type { ReactNode } from "react";
import { requireAdmin } from "../_lib/requireAdmin";
import { AdminSidebar } from "./_components/AdminSidebar";

export default async function AdminDashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  await requireAdmin();

  return (
    <div className="flex min-h-screen bg-surface-page">
      <AdminSidebar />
      <div className="flex-1 overflow-x-auto">{children}</div>
    </div>
  );
}
