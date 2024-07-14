import { NextResponse } from 'next/server';

export function middleware(request) {
  const url = request.nextUrl.clone();
  
  // Here you can add custom logic to handle errors.
  // For example, you can redirect to custom error pages based on conditions.

  // Example: Handle 404 errors
  if (url.pathname === '/404') {
    return NextResponse.rewrite(new URL('/404', request.url));
  }

  // Example: Handle 500 errors
  if (url.pathname === '/500') {
    return NextResponse.rewrite(new URL('/500', request.url));
  }

  // If no custom handling is needed, just return the NextResponse
  return NextResponse.next();
}

export const config = {
  matcher: ['/404', '/500'],
};