import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const validWards = ['ccu', 'icu', 'er'];

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const isLoggedIn = request.cookies.get('icu_auth')?.value === 'true';
  const ward = request.cookies.get('icu_ward')?.value;
  const hasValidWard = ward ? validWards.includes(ward) : false;

  const protectedRoots = [
    '/dashboard',
    '/medications',
    '/admin',
    '/calculators',
    '/protocols',
    '/procedures',
    '/policies',
    '/forms',
  ];

  const isProtectedPath = protectedRoots.some(
    (root) => pathname === root || pathname.startsWith(`${root}/`)
  );

  if (isProtectedPath && (!isLoggedIn || !hasValidWard)) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/dashboard/:path*',
    '/medications/:path*',
    '/admin/:path*',
    '/calculators/:path*',
    '/protocols/:path*',
    '/procedures/:path*',
    '/policies/:path*',
    '/forms/:path*',
  ],
};