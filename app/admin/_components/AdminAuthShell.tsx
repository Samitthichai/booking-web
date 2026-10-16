import type { ReactNode } from "react";
import { AdminBrand } from "./AdminBrand";

type AdminAuthShellProps = {
  brandLayout?: "stacked" | "inline";
  children: ReactNode;
  footer?: ReactNode;
};

export function AdminAuthShell({
  brandLayout = "stacked",
  children,
  footer,
}: AdminAuthShellProps) {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-admin-bg px-6 py-12">
      <span
        aria-hidden="true"
        className="absolute -top-24 -right-24 size-96 rounded-full bg-admin-orb blur-2xl"
      />
      <span
        aria-hidden="true"
        className="absolute -bottom-24 -left-24 size-80 rounded-full bg-admin-orb blur-2xl"
      />

      <div className="relative flex w-full max-w-[440px] flex-col items-center">
        <div className="mb-7 animate-rise">
          <AdminBrand layout={brandLayout} />
        </div>

        <div className="w-full animate-rise rounded-card bg-surface p-7 shadow-panel [animation-delay:80ms]">
          {children}
        </div>

        {footer && (
          <div className="mt-5 text-center text-[13.5px] text-admin-muted">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
}
