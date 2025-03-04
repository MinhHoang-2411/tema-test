import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email, password } = await req.json();

  // fake check user
  if (email === "test@example.com" && password === "123456") {
    const token = "mock_access_token_123";
    const refreshToken = "mock_refresh_token_456";

    return NextResponse.json({
      token,
      refreshToken,
      user: { id: 1, name: "Test User", email },
    });
  }

  return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
}
