import { NextResponse, NextRequest } from "next/server";

import * as zod from "zod";

const schema = zod.object({
  username: zod.string().min(1).max(10),
});
export async function GET(req: NextRequest) {
  const res = req.nextUrl.searchParams;
  const username = res.get("username");
  const result = schema.safeParse({ username });
  if (!result.success) {
    return NextResponse.json({ message: "username is required" });
  }
  return NextResponse.json(result.data);
}
