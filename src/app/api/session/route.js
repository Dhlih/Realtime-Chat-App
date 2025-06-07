import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(req) {
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get("session");

  console.log(sessionCookie);

  if (sessionCookie) {
    const session = JSON.parse(sessionCookie.value);
    return NextResponse.json(session);
  }

  return NextResponse.json(null);
}
