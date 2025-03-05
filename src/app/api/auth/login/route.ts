import { login } from "@/repositories/authRepository";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  if (
    body?.username == null ||
    body.username === "" ||
    body.password == null ||
    body.password === ""
  ) {
    return NextResponse.json("Kullanıcı adı ve şifre zorunludur!", {
      status: 400,
    });
  }
  try {
    const token = await login(body.username, body.password);

    if (token === null) {
      return NextResponse.json("Kullanıcı adı veya şifre hatalı!", {
        status: 400,
      });
    }

    return NextResponse.json({
      status: 200,
      body: { token },
    });
  } catch (error) {
    return NextResponse.json("Bir hata oluştu!", { status: 500 });
  }
}
