import { initTRPC } from "@trpc/server";
import { createTRPCContext } from "./context";

export const t = initTRPC.context<typeof createTRPCContext>().create();
export const appRouter = t.router({
  hello: t.procedure.query(({ ctx }) => {
    console.info("===>>????", ctx.session);
    return { message: "hello world" };
  }),
});
// export type definition of API
export type AppRouter = typeof appRouter;
