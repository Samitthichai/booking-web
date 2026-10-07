import { Typography } from "@/components/ui/Typography";
import { RegisterForm } from "./registerForm";

export default function RegisterSection() {
  return (
    <section className="w-full max-w-[400px] animate-rise rounded-[20px] border border-line bg-surface px-[22px] py-[26px] shadow-panel [animation-delay:160ms] sm:rounded-panel sm:px-9 sm:py-[38px]">
      <Typography
        as="h2"
        className="mb-1.5 font-display text-[22px] font-semibold tracking-[-0.4px] sm:text-[27px]"
      >
        Create account
      </Typography>
      <Typography
        as="p"
        className="mb-7 text-[13.5px] text-ink-muted sm:text-[14.5px]"
      >
        Log in to manage your bookings
      </Typography>
      <RegisterForm />
    </section>
  );
}
