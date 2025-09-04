import { NextResponse, NextRequest } from "next/server";
export async function GET(req: NextRequest) {
  console.info("url==>", req.url);
  return NextResponse.json({ message: "Hello, world!" });
}
