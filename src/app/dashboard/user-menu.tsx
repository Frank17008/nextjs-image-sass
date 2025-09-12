"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { signOut } from "next-auth/react";

interface userMenuProps {
  user: {
    name?: string;
    image?: string;
  };
}
export default function UserMenu({ user }: userMenuProps) {
  const routeToGithub = () => {
    window.open("https://github.com/Frank17008/nextjs-image-sass");
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex items-center gap-4">
          <Avatar className="h-8 w-8">
            <AvatarImage src={user?.image} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div>{user?.name}</div>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onClick={routeToGithub}>GitHub</DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => {
            signOut({ callbackUrl: "/" });
          }}
        >
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
