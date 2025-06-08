import { NextResponse } from "next/server";

const protectedRoutes = ["/"];
const publicRoutes = ["/login", "/register"];

export default async function middleware(req) {
  // mengambil url url yang ada di web kita
  const path = req.nextUrl.pathname;

  const isProtected = protectedRoutes.includes(path);
  const isPublic = publicRoutes.includes(path);

  const session = req.cookies.get("session");

  console.log("middleware :", session);

  if (isProtected && !session) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  if (isPublic && session) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
}
