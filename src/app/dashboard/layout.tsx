"use client";

import { useSession, signOut } from "next-auth/react";
import { redirect } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { data: session } = useSession();

  if (session?.user) {
    redirect("/");
  }

  const routeToGithub = () => {
    window.open("https://github.com/Frank17008/nextjs-image-sass");
  };
  return (
    <div className="flex h-full w-full flex-col">
      <div className="flex  h-16 w-full items-center justify-end border-b px-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="flex items-center gap-4">
              <Avatar className="h-8 w-8">
                <AvatarImage src={session?.user?.image as string} />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div>{session?.user?.name}</div>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={routeToGithub}>GitHub</DropdownMenuItem>
            <DropdownMenuItem
              onClick={async () => {
                await signOut({ callbackUrl: "/" });
              }}
            >
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      {children}
    </div>
  );
}
export default DashboardLayout;
