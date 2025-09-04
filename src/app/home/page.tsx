"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { SessionProvider } from "../sign-in";
export function DashboardPage() {
  const { data: session } = useSession();
  console.info(session);
  if (!session?.user) {
    return redirect("/sign-in");
  }
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
}
export default function Home() {
  return (
    <SessionProvider>
      <DashboardPage />
    </SessionProvider>
  );
}
