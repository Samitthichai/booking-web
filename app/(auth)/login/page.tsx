import { AuthPanel } from "@/app/(auth)/_components/AuthPanel";
import {
  CalendarIcon,
  ClockIcon,
  ShieldCheckIcon,
} from "@/components/ui/icons";
import { Typography } from "@/components/ui/Typography";
import type { Metadata } from "next";
import LoginSection from "./_components/loginSection";

export const metadata: Metadata = { title: "Log in" };

const features = [
  { icon: <ClockIcon />, label: "Real-time slot availability" },
  { icon: <ShieldCheckIcon />, label: "No double-booking, guaranteed" },
  { icon: <CalendarIcon />, label: "All your bookings in one place" },
];

export default function LoginPage() {
  return (
    <div className="flex min-h-screen flex-1">
      <AuthPanel
        title={"Book your spot.  Never clash."}
        lead="Reserve appointments in real time. The second a slot is taken, it's gone no double-booking, ever."
        features={features}
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
          <Typography
            as="span"
            variant="caption"
            tone="muted"
            className="mt-0.5"
          >
            Book your spot. Never clash.
          </Typography>
        </div>

        <LoginSection />
      </main>
    </div>
  );
}
