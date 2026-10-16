import { NextResponse, type NextRequest } from "next/server";

const PUBLIC_ADMIN_PATHS = ["/admin/login", "/admin/register"];

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Admin sign-in / register must stay reachable without a session.
  if (PUBLIC_ADMIN_PATHS.includes(pathname)) {
    return NextResponse.next();
  }

  if (!request.cookies.has("token")) {
    const isAdmin = pathname.startsWith("/admin");
    const login = new URL(isAdmin ? "/admin/login" : "/login", request.url);
    return NextResponse.redirect(login);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/services/:path*",
    "/booking/:path*",
    "/my-bookings/:path*",
    "/admin/:path*",
  ],
};
