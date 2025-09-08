"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import SignIn, { SessionProvider } from "./sign-in";
import { useTRPC } from "@/utils/trpc";
import { useQuery } from "@tanstack/react-query";

export default function Home() {
  const trpc = useTRPC();
  const query = useQuery(trpc.hello.queryOptions());
  console.log(query.data?.message);
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
