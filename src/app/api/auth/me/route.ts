import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const authHeader = req.headers.get("Authorization");

  if (authHeader === "Bearer mock_access_token_123" || authHeader === "Bearer mock_new_access_token_789") {
    return NextResponse.json({ id: 1, name: "Test User", email: "test@example.com" });
  }

  return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
}
