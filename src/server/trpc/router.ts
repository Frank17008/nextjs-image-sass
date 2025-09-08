import { createTRPCRouter, baseProcedure } from "./init";

export const appRouter = createTRPCRouter({
  hello: baseProcedure.query(async ({ ctx }) => {
    console.info(ctx);
    return { message: "hello world" };
  }),
});
// export type definition of API
export type AppRouter = typeof appRouter;
