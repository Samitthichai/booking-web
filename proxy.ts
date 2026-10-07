import { NextResponse, type NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const hasToken = request.cookies.has("token");
  if (!hasToken) {
    const login = new URL("/login", request.url);
    return NextResponse.redirect(login);
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/services/:path*", "/booking/:path*", "/my-bookings/:path*", "/"],
};
