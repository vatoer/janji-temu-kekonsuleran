import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

function getCookieValue(
  cookieString: string,
  cookieName: string
): string | null {
  const cookies = cookieString.split(";");
  for (const cookie of cookies) {
    const [name, value] = cookie.split("=").map((c) => c.trim());
    if (name === cookieName) {
      return value;
    }
  }
  return null;
}

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  console.log("[Middleware] Request URL:", request.url);
  const cookieHeader = request.headers.get("Cookie");
  if (cookieHeader) {
    const appLocale = getCookieValue(cookieHeader, "app-locale");
    console.log(appLocale);
  } else {
    console.log("No cookies found");
  }

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
