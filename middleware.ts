import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const isLoggedIn = request.cookies.get("icu_auth")?.value === "true";

  const protectedPaths = [
    "/medications",
    "/dashboard",
    "/admin",
    "/calculators",
    "/protocols",
  ];

  const isProtectedPath = protectedPaths.some((path) =>
    request.nextUrl.pathname.startsWith(path)
  );

  if (isProtectedPath && !isLoggedIn) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/medications/:path*",
    "/dashboard/:path*",
    "/admin/:path*",
    "/calculators/:path*",
    "/protocols/:path*",
  ],
};