import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { refreshToken } = await req.json();

  // check invalid refresh token
  if (refreshToken === "mock_refresh_token_456") {
    const newToken = "mock_new_access_token_789";
    return NextResponse.json({ token: newToken, refreshToken });
  }

  return NextResponse.json({ message: "Invalid refresh token" }, { status: 401 });
}
