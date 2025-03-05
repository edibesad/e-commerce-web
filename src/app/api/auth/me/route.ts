import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function GET(req: NextRequest) {
  const token = req.cookies.get("token")?.value;

  console.log("token", token);

  if (!token) {
    return NextResponse.json({ error: "Yetkisiz" }, { status: 401 });
  }
  let user = jwt.decode(token);

  if (user == null) {
    return NextResponse.json({ error: "Yetkisiz" }, { status: 401 });
  }

  const userResponse = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/users/${user.sub}`
  );
  if (!userResponse.ok) {
    return NextResponse.json(
      { error: "Kullanıcı bulunamadı" },
      { status: 404 }
    );
  }

  user = await userResponse.json();
  return NextResponse.json(user);
}
