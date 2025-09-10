"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import SignIn from "./sign-in";

export default function Home() {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="mb-5 text-2xl font-bold">用户登录</h1>
      <form action="" className="w-full max-w-md flex flex-col gap-y-5">
        <Input name="username" placeholder="请输入用户名"></Input>
        <Input name="password" type="password" placeholder="请输入密码"></Input>
        <Button type="submit" className="cursor-pointer">
          登录
        </Button>
      </form>
      <SignIn />
    </div>
  );
}
