import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value;

  const requestHeaders = new Headers(req.headers);
  if (token) {
    requestHeaders.set("Authorization", `Bearer ${token}`);
  }

  return NextResponse.next({
    request: { headers: requestHeaders },
  });
}

// Middleware'in hangi sayfalarda çalışacağını belirle
export const config = {
  matcher: ["/dashboard/:path*", "/profile/:path*"],
};
