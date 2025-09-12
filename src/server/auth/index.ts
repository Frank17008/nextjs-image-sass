import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import {
  users,
  accounts,
  sessions,
  verificationTokens,
} from "@/server/db/schema";
import { db } from "@/server/db/db";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: DrizzleAdapter(db, {
    usersTable: users,
    accountsTable: accounts,
    sessionsTable: sessions,
    verificationTokensTable: verificationTokens,
  }),
  // basePath: '/api/auth',
  // callbacks: {
  //   authorized: async ({ auth, request }) => {
  //     console.info("authorized", auth);
  //     if (request.cookies.get("authjs.session-token")) {
  //       return true;
  //     }
  //     return false;
  //   },
  // },
  providers: [GitHub],
  trustHost: true,
});
