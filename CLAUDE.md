@AGENTS.md

# CLAUDE.md — booking-web (Frontend, Next.js)

Frontend of the QueueUp booking/appointment system. Read before writing or reviewing code.
> Note: `@AGENTS.md` above holds the rules specific to this Next.js version — always obey it first.

## What this app does
UI for customers to log in → browse services → book a slot → view/cancel their own bookings.
A separate admin area lets staff sign in → manage services (create / edit / show-hide).
Talks to the backend (booking-service) via REST API.

## Tech Stack
- Next.js 16 (App Router) + React 19 + TypeScript — `middleware.ts` is now `proxy.ts`
- react-hook-form + zod (forms + validation)
- Tailwind CSS v4 — theme tokens live in `app/globals.css` via `@theme` (no `tailwind.config.js`)
- axios client + TanStack Query in `lib/api/`

## Structure
```
app/
  (auth)/          # login, register
  services/        # browse services + available slots
  booking/         # make a booking
  my-bookings/     # view/cancel own bookings
  admin/           # admin area: sign in, register, manage + create/edit services
components/
lib/
  api/client.ts    # axios instance (withCredentials) + ApiError
  api/<domain>.ts  # API functions + TanStack Query hooks
  schemas/         # zod schemas (request/form types via z.infer)
  types/           # response / entity types
```
The browser calls same-origin `/api/*`; `next.config.ts` rewrites it to `API_URL` (booking-service).

## Screens by User Story
- **US-1:** register/login — email + password (password >= 8 chars)
- **US-2:** list services + available slots (already-booked times must be non-selectable)
- **US-3:** book — pick service + date/time; block past times and taken slots in the UI
- **US-4:** my-bookings — cancel allowed only for bookings not yet started
- **US-5 Admin:** admin sign-in / register (invite-code gated) → manage services list → create/edit a service (name, duration, price, description, visible/hidden toggle)

## Navigation & auth flows
- **Register success → go to the Login page** (not straight into the app). Show a brief "Account created — please log in" hint on the login screen.
- **Login success → `/services`**. **Admin login success → `/admin/services`**.
- The customer area and the admin area are separate. Every `/admin/*` page requires `role = 'admin'` (guard in the admin layout / `proxy.ts`); a non-admin hitting `/admin/*` is redirected to the customer app.
- Admin register is gated by an **invite code** field (the backend verifies it). Prefer seeding the first admin in the DB; don't expose open admin self-registration.

## Error states (match the backend status codes)
- **Login 401** → show an inline error "Email or password is incorrect" and STAY on the login form. Do NOT redirect. (Redirect-on-401 applies only to an expired session on an already-authenticated page.) Tint the email + password fields; clear the error when a field changes.
- **Register 409** → inline error "This email is already registered" with a link to log in; tint the email field.
- **Booking 409** → "This time slot is already booked — please pick another."
- **Booking 400 (past time)** → "You can't book a time in the past."

## Conventions (review criteria)
- **Validate every form with zod** — one schema used for both validation and types (`z.infer`)
  - client validation is for UX only; real security always lives on the server
- **Auth:** JWT lives in an httpOnly cookie set by the backend — NEVER read/store the token in `localStorage` or JS
  - every API call goes through the `http` client in `lib/api/client.ts` (`withCredentials: true`) so the cookie is attached
- **Timezone:** times from the API are UTC — convert to Asia/Bangkok only for display; send to the server as ISO/UTC
- **Errors:** read `{ "error": "..." }` from the backend and show something the user understands (see Error states above for the per-screen behavior)
- Call the API only through `lib/api/` — don't scatter fetch/axios calls or URLs across the codebase
- NEVER hardcode the backend URL — it lives only in the server-side env `API_URL` (full URL, e.g. `http://localhost:8080`), used by the `/api` rewrite; no `NEXT_PUBLIC_` env for it
- Server Components by default; use `"use client"` only where interactivity is needed (forms, state)

## What reviewers should watch for
- tokens / sensitive data stored in localStorage or logged to the console
- forms without zod validation, or that don't handle server errors
- the login form redirecting on bad credentials instead of showing the inline 401 error
- `/admin/*` pages that don't guard `role = 'admin'`
- requests that bypass the `http` client in `lib/api/client.ts`
- times displayed/sent without timezone handling
- hardcoded URLs / secrets
