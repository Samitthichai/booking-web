import { AuthPanel } from "@/app/(auth)/_components/AuthPanel";
import RegisterSection from "./_components/registerSection";

export default function RegisterPage() {
  return (
    <div className="flex min-h-screen flex-1">
      <AuthPanel
        title={"Save your precious time join us today."}
        lead="Create an account and start booking appointments that never clash."
        features={[
          {
            label: "Trusted for clinics, salons & studios.",
          },
        ]}
      />

      <main className="flex flex-1 flex-col items-center justify-center px-7 py-10">
        <div className="mb-6 flex animate-rise flex-col items-center lg:hidden">
          <span
            aria-hidden="true"
            className="flex size-14 animate-float items-center justify-center rounded-[17px] bg-brand font-display text-[27px] font-bold text-on-brand shadow-brand"
          >
            Q
          </span>
          <span className="mt-3 font-display text-[23px] font-bold tracking-[-0.4px]">
            QueueUp
          </span>
          <span className="mt-0.5 text-[13.5px] text-ink-muted">
            Book your spot. Never clash.
          </span>
        </div>

        <RegisterSection />
      </main>
    </div>
  );
}
