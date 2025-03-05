import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { token } = await req.json();

  if (!token) {
    return NextResponse.json({ error: "Token bulunamadı" }, { status: 400 });
  }

  const response = NextResponse.json({ message: "Token kaydedildi" });

  response.cookies.set("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24, // 1 gün
    path: "/",
  });

  return response;
}

export async function DELETE(req: Request) {
  const response = NextResponse.json({ message: "Token silindi" });

  response.cookies.set("token", "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 0,
  });

  return response;
}
