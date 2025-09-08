import { initTRPC } from "@trpc/server";
import { cache } from "react";
import { auth } from "@/server/auth";

export const createTRPCContext = cache(async () => {
  const session = await auth();
  return { session };
});

const t = initTRPC.context<typeof createTRPCContext>().create({
  /**
   * @see https://trpc.io/docs/server/data-transformers
   */
  // transformer: superjson,
});
// Base router and procedure helpers
export const createTRPCRouter = t.router;
export const createCallerFactory = t.createCallerFactory;
export const baseProcedure = t.procedure;
