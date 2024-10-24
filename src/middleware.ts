import { NextResponse, NextRequest } from "next/server";
import { getMeUser } from "./app/actions";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const user = await getMeUser();
  if (!user) {
    // TODO: add redirect path to redirect searchparam
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }
}

export const config = {
  matcher: ["/account", "/courses/:lessons"],
};
