import { NextURL } from "next/dist/server/web/next-url";
import { NextMiddleware, NextResponse } from "next/server";

const middleware: NextMiddleware = (request, event) => {
  const { pathname } = request.nextUrl;
  if (pathname === '/') {
    const url = request.nextUrl.clone()
    url.pathname = '/dashboard'
    return NextResponse.redirect(url)
  }

  return null;
}

export default middleware;