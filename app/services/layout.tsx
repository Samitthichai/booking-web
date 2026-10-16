import type { ReactNode } from "react";
import { CustomHeader } from "./_components/CustomHeader";

export default function CustomerLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-surface-page">
      <CustomHeader />
      <div className="flex-1">{children}</div>
    </div>
  );
}
