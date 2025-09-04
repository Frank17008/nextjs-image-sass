"use client";

import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import {
  SessionProvider as NextSessionProvider,
  SessionProviderProps,
} from "next-auth/react";

export default function SignIn() {
  return (
    <Button
      className="mt-5 cursor-pointer"
      variant="secondary"
      onClick={() => signIn("github")}
    >
      GitHub
    </Button>
  );
}

export function SessionProvider(props: SessionProviderProps) {
  return <NextSessionProvider {...props} />;
}
