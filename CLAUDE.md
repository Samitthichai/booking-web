@AGENTS.md

# CLAUDE.md — booking-web (Frontend, Next.js)

Frontend of the QueueUp booking/appointment system. Read before writing or reviewing code.
> Note: `@AGENTS.md` above holds the rules specific to this Next.js version — always obey it first.

## What this app does
UI for customers to log in → browse services → book a slot → view/cancel their own bookings.
Talks to the backend (booking-service) via REST API.

## Tech Stack
- Next.js 16 (App Router) + React 19 + TypeScript — `middleware.ts` is now `proxy.ts`
- react-hook-form + zod (forms + validation)
- Tailwind CSS v4 — theme tokens live in `app/globals.css` via `@theme` (no `tailwind.config.js`)
- fetch wrapper in `lib/api.ts`

## Structure
```
app/
  (auth)/          # login, register
  services/        # browse services + available slots
  booking/         # make a booking
  my-bookings/     # view/cancel own bookings
components/
lib/api.ts         # fetch wrapper (sends credentials)
```

## Screens by User Story
- **US-1:** register/login — email + password (password >= 8 chars)
- **US-2:** list services + available slots (already-booked times must be non-selectable)
- **US-3:** book — pick service + date/time; block past times and taken slots in the UI
- **US-4:** my-bookings — cancel allowed only for bookings not yet started

## Conventions (review criteria)
- **Validate every form with zod** — one schema used for both validation and types (`z.infer`)
  - client validation is for UX only; real security always lives on the server
- **Auth:** JWT lives in an httpOnly cookie set by the backend — NEVER read/store the token in `localStorage` or JS
  - every API call must send `credentials: 'include'` so the cookie is attached
- **Timezone:** times from the API are UTC — convert to Asia/Bangkok only for display; send to the server as ISO/UTC
- **Errors:** read `{ "error": "..." }` from the backend and show something the user understands; handle 401 → redirect to login, 409 → show "this time slot is already booked"
- Call the API only through `lib/api.ts` — don't scatter fetch/URLs across the codebase
- NEVER hardcode the base URL — use env (`NEXT_PUBLIC_API_URL`)
- Server Components by default; use `"use client"` only where interactivity is needed (forms, state)

## What reviewers should watch for
- tokens / sensitive data stored in localStorage or logged to the console
- forms without zod validation, or that don't handle server errors
- fetch calls missing `credentials: 'include'`
- times displayed/sent without timezone handling
- hardcoded URLs / secrets
