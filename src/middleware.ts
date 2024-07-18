import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const { nextUrl } = request;
  if (nextUrl.pathname === "/") {
    return NextResponse.redirect(new URL("/home", request.url));
  }
  return NextResponse.next();
}

// Config for the middleware
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
