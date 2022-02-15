import { NextRequest, NextResponse } from 'next/server'

export function middleware(req: NextRequest) {
  const country = req.geo?.country?.toLowerCase();
  console.log(country,"herelkahsdjaksjhdkjahskhdashkjhdj")

  req.nextUrl.pathname = `/${country}`
  return NextResponse.rewrite(req.nextUrl)
}
