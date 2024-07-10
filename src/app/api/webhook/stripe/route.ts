import { NextRequest, NextResponse } from "next/server"

export const POST = (req: NextRequest) => {
  console.log(req);
  return NextResponse.json('Webhook called')
}