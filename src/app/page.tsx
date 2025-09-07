"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import SignIn, { SessionProvider } from "./sign-in";
import { trpcClient } from "@/utils/api";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    trpcClient.hello.query();
  }, []);
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="mb-5 text-2xl font-bold">Create App</h1>
      <form action="" className="w-full max-w-md flex flex-col gap-y-2.5">
        <Input name="username" placeholder="App Name"></Input>
        <Textarea
          name="description"
          placeholder="App Description"
          className="resize-none"
        ></Textarea>
        <Button type="submit" className="cursor-pointer">
          Submit
        </Button>
      </form>
      <SessionProvider>
        <SignIn />
      </SessionProvider>
    </div>
  );
}
