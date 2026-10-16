import { ErrorBoundary } from "@/components/ui/ErrorBoundary";
import { Loading } from "@/components/ui/Loading";
import { Typography } from "@/components/ui/Typography";
import { Suspense } from "react";
import { ServiceGrid } from "./_components/ServiceGrid";

export default function ServicesPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-10 sm:px-10">
      <header className="mb-8">
        <Typography variant="page-title">Choose a service</Typography>
        <Typography variant="body-sm" tone="muted" className="mt-1.5">
          Pick what you need and we&apos;ll show open times.
        </Typography>
      </header>

      <ErrorBoundary>
        <Suspense fallback={<Loading label="Loading services…" />}>
          <ServiceGrid />
        </Suspense>
      </ErrorBoundary>
    </main>
  );
}
