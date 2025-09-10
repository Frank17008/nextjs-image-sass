import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { auth } from "@/server/auth";
async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  return (
    <div className="flex h-full w-full flex-col">
      <div className="flex  h-16 w-full items-center justify-end border-b px-4">
        <div className="flex items-center gap-4">
          <Avatar className="h-8 w-8">
            <AvatarImage src={session?.user?.image as string} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div>{session?.user?.name}</div>
        </div>
      </div>
      {children}
    </div>
  );
}
export default DashboardLayout;
