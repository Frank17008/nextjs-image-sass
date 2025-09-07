import { initTRPC } from "@trpc/server";
// import { Context } from './context';

export const t = initTRPC.create();
export const appRouter = t.router({
  hello: t.procedure.query(() => {
    return { message: "hello world" };
  }),
});
// export type definition of API
export type AppRouter = typeof appRouter;
