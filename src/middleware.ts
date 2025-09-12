export { auth as middleware } from "./server/auth";
// import { auth as middleware } from "./server/auth";
// import type { NextRequest } from "next/server";

// export default middleware((req: NextRequest) => {
//   if (!req.auth && req.nextUrl.pathname !== "/login") {
//     const newUrl = new URL("/login", req.nextUrl.origin);
//     return Response.redirect(newUrl);
//   }
// });

export const config = {
  // matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
  matcher: "/dashboard",
};
