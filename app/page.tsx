import { BrandMark } from "@/components/ui/BrandMark";
import { Typography } from "@/components/ui/Typography";
import {
  CalendarIcon,
  ClockIcon,
  ShieldCheckIcon,
} from "@/components/ui/icons";
import Link from "next/link";

const features = [
  {
    Icon: CalendarIcon,
    title: "Book in seconds",
    body: "Pick a service and an open slot — no phone calls, no waiting.",
  },
  {
    Icon: ShieldCheckIcon,
    title: "No double-booking",
    body: "Every slot is locked the moment it's taken. One booking per time.",
  },
  {
    Icon: ClockIcon,
    title: "Manage your time",
    body: "See and cancel your own bookings before they start.",
  },
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="flex items-center justify-between px-6 py-5 sm:px-10">
        <BrandMark size="md" />
        <nav className="flex items-center gap-2">
          <Link
            href="/login"
            className="rounded-md px-4 py-2 text-sm font-semibold text-ink-muted transition-colors hover:text-ink"
          >
            Log in
          </Link>
          <Link
            href="/register"
            className="rounded-md bg-brand px-4 py-2 text-sm font-semibold text-on-brand shadow-brand transition hover:-translate-y-0.5 hover:shadow-brand-hover"
          >
            Create account
          </Link>
        </nav>
      </header>

      <main className="flex flex-1 flex-col items-center justify-center px-6 py-16 text-center">
        <span className="mb-6 inline-flex items-center gap-2 rounded-chip bg-brand-soft px-3.5 py-1.5 text-[13px] font-semibold text-brand-strong">
          QueueUp · Booking made simple
        </span>

        <Typography variant="hero" className="max-w-[640px]">
          Book your spot. Never clash.
        </Typography>
        <Typography
          variant="lead"
          tone="muted"
          className="mt-5 max-w-[520px]"
        >
          Reserve a service slot in advance — clinics, salons and studios, all
          without the back-and-forth.
        </Typography>

        <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row">
          <Link
            href="/services"
            className="rounded-md bg-brand px-8 py-3.5 text-[15px] font-semibold text-on-brand shadow-brand transition hover:-translate-y-0.5 hover:shadow-brand-hover"
          >
            Browse services
          </Link>
          <Link
            href="/login"
            className="rounded-md border border-line-input px-8 py-3.5 text-[15px] font-semibold text-ink-muted transition-colors hover:bg-surface hover:text-ink"
          >
            Log in
          </Link>
        </div>

        <ul className="mt-16 grid w-full max-w-4xl gap-4 text-left sm:grid-cols-3">
          {features.map(({ Icon, title, body }) => (
            <li
              key={title}
              className="rounded-card border border-line bg-surface p-6 shadow-card"
            >
              <span className="flex size-10 items-center justify-center rounded-tile bg-brand-soft text-brand-strong">
                <Icon width={20} height={20} />
              </span>
              <Typography variant="card-title" className="mt-4">
                {title}
              </Typography>
              <Typography variant="body-sm" tone="muted" className="mt-1.5">
                {body}
              </Typography>
            </li>
          ))}
        </ul>
      </main>

      <footer className="px-6 py-8 text-center text-[13px] text-ink-subtle">
        Are you staff?{" "}
        <Link
          href="/admin/login"
          className="font-semibold text-brand transition-colors hover:text-brand-strong"
        >
          Admin sign in
        </Link>
      </footer>
    </div>
  );
}
