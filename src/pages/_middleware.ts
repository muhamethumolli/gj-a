import { NextRequest, NextResponse } from "next/server";
import { checkDeviceByUA } from "../utils/checkDevice";

export default async function middleware(req: NextRequest, res: NextResponse) {
  const { pathname } = req.nextUrl;
  // Get hostname (e.g. gjirafa.com, test.gjirafa.app, etc.)
  const hostname = req.headers.get("host");
  const device = checkDeviceByUA(req.headers.get("user-agent") || "");

  // validate token if have (need to fix) // TODO:not sure for this action here

  // If localhost, assign the host value manually
  // If prod, get the custom domain/subdomain value by removing the root URL
  // (in the case of "test.gjirafa.app", "gjirafa.app" is the root URL)
  const store =
    process.env.NODE_ENV == "production" && hostname !== "localhost:3000"
      ? hostname
      : process.env.NEXT_PUBLIC_ORIGINHOST;

  // Prevent security issues – users should not be able to canonically access
  // the main/[store]/[device] folder and its respective contents.
  if (pathname.startsWith(`/_main`)) return NextResponse.rewrite(`/404`);
  if (
    !pathname.includes(".") && // exclude all files in the public folder
    !pathname.startsWith("/api") // exclude all API routes
  ) {
    // rewrite to the current store under the main/[store]/[device] folder
    // the main logic component will happen in main/[store]/[device]/index.tsx
    return NextResponse.rewrite(`/_main/${store}/${device}${pathname}`);
  }
  if (pathname.includes("sitemap.xml") && !pathname.startsWith("/api"))
    return NextResponse.rewrite(`/_main/${store}/${device}${pathname}`);
}
