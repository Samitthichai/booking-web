import type { ReactNode } from "react";
import { AdminSidebar } from "./_components/AdminSidebar";

export default function AdminDashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-surface-page">
      <AdminSidebar />
      <div className="flex-1 overflow-x-auto">{children}</div>
    </div>
  );
}
