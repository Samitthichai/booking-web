import { PlusIcon } from "@/components/ui/icons";
import { Typography } from "@/components/ui/Typography";
import Link from "next/link";
import { ServicesTable } from "./_components/ServicesTable";

export default function AdminServicesPage() {
  return (
    <main className="mx-auto w-full max-w-5xl px-8 py-8">
      <header className="mb-6 flex items-start justify-between gap-4">
        <div>
          <Typography variant="page-title">Services</Typography>
          <Typography variant="body-sm" tone="muted" className="mt-1">
            Create, edit and hide the services customers can book.
          </Typography>
        </div>
        <Link
          href="/admin/services/new"
          className="inline-flex shrink-0 items-center gap-2 rounded-md bg-brand px-4 py-2.5 text-[14px] font-semibold text-on-brand shadow-brand transition hover:-translate-y-0.5 hover:shadow-brand-hover"
        >
          <PlusIcon width={16} height={16} />
          Add service
        </Link>
      </header>

      <ServicesTable />
    </main>
  );
}
