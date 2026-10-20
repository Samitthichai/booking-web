import { ErrorBoundary } from "@/components/ui/ErrorBoundary";
import { Loading } from "@/components/ui/Loading";
import { Suspense } from "react";
import { ServiceDetail } from "./_components/ServiceDetail";

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <main className="mx-auto w-full max-w-3xl px-6 pt-10 pb-32 sm:px-10">
      <ErrorBoundary>
        <Suspense fallback={<Loading label="Loading service…" />}>
          <ServiceDetail id={Number(id)} />
        </Suspense>
      </ErrorBoundary>
    </main>
  );
}
