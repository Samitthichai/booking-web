"use client";

import { BrandMark } from "@/components/ui/BrandMark";
import { UserIcon } from "@/components/ui/icons";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Services", href: "/services" },
  { label: "My bookings", href: "/my-bookings" },
];

export function CustomHeader() {
  const pathname = usePathname();

  return (
    <header className="flex items-center justify-between border-b border-line bg-surface px-6 py-4 sm:px-10">
      <Link href="/services" aria-label="QueueUp home">
        <BrandMark size="md" />
      </Link>

      <nav className="flex items-center gap-6">
        {navItems.map(({ label, href }) => {
          const active = pathname === href || pathname.startsWith(`${href}/`);
          return (
            <Link
              key={href}
              href={href}
              aria-current={active ? "page" : undefined}
              className={[
                "text-[15px] font-semibold transition-colors",
                active ? "text-ink" : "text-ink-muted hover:text-ink",
              ].join(" ")}
            >
              {label}
            </Link>
          );
        })}

        <span
          aria-hidden="true"
          className="flex size-9 items-center justify-center rounded-full bg-brand-tint text-brand-strong"
        >
          <UserIcon width={18} height={18} />
        </span>
      </nav>
    </header>
  );
}
