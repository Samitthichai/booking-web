import { cookies } from "next/headers";
import { redirect } from "next/navigation";

/**
 * Server-side guard for the admin area.
 *
 * The JWT lives in an httpOnly cookie, so the role can't be read in JS. We let
 * the backend be the source of truth: call an admin-only endpoint with the
 * cookie and branch on its status.
 *   401 -> no / expired session  -> admin login
 *   403 -> authenticated non-admin -> customer app
 * A network/other failure doesn't log the admin out; the page's own queries
 * will surface the error instead.
 */
export async function requireAdmin() {
  const token = (await cookies()).get("token");
  if (!token) redirect("/admin/login");

  let status: number;
  try {
    const res = await fetch(`${process.env.API_URL}/api/admin/services`, {
      headers: { cookie: `token=${token.value}` },
      cache: "no-store",
    });
    status = res.status;
  } catch {
    return;
  }

  if (status === 401) redirect("/admin/login");
  if (status === 403) redirect("/services");
}
