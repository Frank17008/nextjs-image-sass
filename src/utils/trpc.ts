import { createTRPCContext } from "@trpc/tanstack-react-query";
import { AppRouter } from "@/server/trpc/router";

export const { TRPCProvider, useTRPC, useTRPCClient } =
  createTRPCContext<AppRouter>();
