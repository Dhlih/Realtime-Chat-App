import { NextResponse } from "next/server";
import { getSession } from "./actions/user";

const protectedRoutes = ["/"];
const publicRoutes = ["/login", "/register"];

export default async function middleware(req) {
  // mengambil url url yang ada di web kita
  const path = req.nexturl.pathname;

  const isProtected = protectedRoutes.includes(path);
  const isPublic = publicRoutes.includes(path);

  const user = await fetch("/api/session");

  if (isProtected && !user) {
    return NextResponse.redirect(new URL("/login", req.next.url));
  }

  if (isPublic && user) {
    return NextResponse.redirect(new URL("/"), req.next.Url);
  }

  return NextResponse.next();
}
