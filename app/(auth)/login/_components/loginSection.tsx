import { Typography } from "@/components/ui/Typography";
import { LoginForm } from "./loginForm";

export default function LoginSection() {
  return (
    <section className="w-full max-w-[400px] animate-rise rounded-[20px] border border-line bg-surface px-[22px] py-[26px] shadow-panel [animation-delay:160ms] sm:rounded-panel sm:px-9 sm:py-[38px]">
      <Typography variant="auth-title" className="mb-1.5">
        Welcome back
      </Typography>
      <Typography variant="body-sm" tone="muted" className="mb-7">
        Log in to manage your bookings
      </Typography>
      <LoginForm />
    </section>
  );
}
