"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import SignIn from "./sign-in";

export default function LoginPage() {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="mb-5 text-2xl font-bold">User Login</h1>
      <form action="" className="w-full max-w-md flex flex-col gap-y-5">
        <Input name="username" placeholder="Enter your username"></Input>
        <Input
          name="password"
          type="password"
          placeholder="Enter your password"
        ></Input>
        <Button type="submit" className="cursor-pointer">
          Sign In
        </Button>
      </form>
      <SignIn />
    </div>
  );
}
