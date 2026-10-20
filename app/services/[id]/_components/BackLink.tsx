import { ChevronLeftIcon } from "@/components/ui/icons";
import Link from "next/link";

export default function BackLink() {
  return (
    <Link
      href="/services"
      className="mb-6 inline-flex items-center gap-1 text-[13.5px] font-semibold text-ink-muted transition-colors hover:text-ink"
    >
      <ChevronLeftIcon width={16} height={16} />
      Back to services
    </Link>
  );
}
