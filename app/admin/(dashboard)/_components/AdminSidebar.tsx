"use client";

import { BrandMark } from "@/components/ui/BrandMark";
import { CalendarIcon, GridIcon, LogOutIcon } from "@/components/ui/icons";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import type { ComponentType } from "react";

type NavItem = {
  label: string;
  href: string;
  Icon: ComponentType<{ width?: number; height?: number }>;
};

const navItems: NavItem[] = [
  { label: "Services", href: "/admin/services", Icon: GridIcon },
  { label: "Bookings", href: "/admin/bookings", Icon: CalendarIcon },
];

export function AdminSidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const signOut = () => {
    // No BE logout endpoint yet; return to the admin sign-in screen.
    router.replace("/admin/login");
  };

  return (
    <aside className="flex w-[232px] shrink-0 flex-col justify-between border-r border-line bg-surface px-4 py-5">
      <div>
        <div className="mb-7 flex items-center gap-2.5 px-2">
          <BrandMark size="md" />
          <span className="rounded-sm bg-brand-tint px-1.5 py-0.5 text-[10px] font-bold tracking-[0.5px] text-brand-strong uppercase">
            Admin
          </span>
        </div>

        <nav className="flex flex-col gap-1">
          {navItems.map(({ label, href, Icon }) => {
            const active = pathname === href || pathname.startsWith(`${href}/`);
            return (
              <Link
                key={href}
                href={href}
                aria-current={active ? "page" : undefined}
                className={[
                  "flex items-center gap-3 rounded-md px-3 py-2.5 text-[14px] font-medium transition-colors",
                  active
                    ? "bg-brand-soft text-brand-strong"
                    : "text-ink-muted hover:bg-surface-page hover:text-ink",
                ].join(" ")}
              >
                <Icon width={18} height={18} />
                {label}
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="border-t border-line pt-4">
        <div className="mb-3 flex items-center gap-2.5 px-2">
          <span className="flex size-8 items-center justify-center rounded-full bg-brand-tint text-[13px] font-bold text-brand-strong">
            A
          </span>
          <span className="text-[13.5px] font-semibold text-ink">Admin</span>
        </div>
        <button
          type="button"
          onClick={signOut}
          className="flex w-full items-center gap-3 rounded-md px-3 py-2.5 text-[14px] font-medium text-ink-muted transition-colors hover:bg-surface-page hover:text-ink"
        >
          <LogOutIcon width={18} height={18} />
          Sign out
        </button>
      </div>
    </aside>
  );
}
