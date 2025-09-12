import { auth } from "@/server/auth";
import { redirect } from "next/navigation";
import UserMenu from "./user-menu";

async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  if (!session?.user) {
    redirect("/");
  }

  return (
    <div className="flex h-full w-full flex-col">
      <div className="flex  h-16 w-full items-center justify-end border-b px-4">
        <UserMenu user={session.user} />
      </div>
      {children}
    </div>
  );
}
export default DashboardLayout;
