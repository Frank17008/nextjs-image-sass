import { NextResponse, NextRequest } from "next/server";
import {
  userSelectSchema,
  authProviderSelectSchema,
} from "@/server/db/validate-schema";
import { db } from "@/server/db/db";
import { users, accounts } from "@/server/db/schema";
import { eq } from "drizzle-orm";

export async function GET(req: NextRequest) {
  const res = req.nextUrl.searchParams;
  const username = res.get("username");
  // 添加参数验证
  if (!username) {
    return NextResponse.json(
      { message: "username is required" },
      { status: 400 }
    );
  }
  const rows = await db
    .select()
    .from(users)
    .where(eq(users.name, username))
    .limit(1);
  const result = userSelectSchema.safeParse(rows[0]);
  if (!result.success) {
    return NextResponse.json({ message: "username is not found" });
  }
  // 查询provider
  const rows2 = await db
    .select()
    .from(accounts)
    .where(eq(accounts.userId, result.data.id))
    .limit(1);
  const result2 = authProviderSelectSchema.safeParse(rows2[0].provider);
  return NextResponse.json({ ...result.data, provider: result2.data });
}
