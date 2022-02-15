import { NextRequest, NextResponse } from 'next/server'

export function middleware(req: NextRequest) {
  const city = req.geo?.city?.toLowerCase();
  const country = req.geo?.country?.toLowerCase();
  const latitude = req.geo?.latitude?.toLowerCase();
  const longitude = req.geo?.longitude?.toLowerCase();
  const region = req.geo?.region?.toLowerCase();
  const ip = req.ip;

  req.nextUrl.pathname = `country/${city}/${country}/${latitude}/${longitude}/${region}/${ip}`
  return NextResponse.rewrite(req.nextUrl)
}
