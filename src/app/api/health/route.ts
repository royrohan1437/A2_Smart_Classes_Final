import { NextResponse } from "next/server";
import { getPrismaClient } from "@/lib/prisma";

export async function GET() {
  if (!process.env.DATABASE_URL) {
    return NextResponse.json(
      { status: "unavailable", database: "not_configured" },
      { status: 503 },
    );
  }

  try {
    await getPrismaClient().$queryRaw`SELECT 1`;
    return NextResponse.json({ status: "ok", database: "connected" });
  } catch {
    // Do not return connection strings, provider messages, or driver details.
    return NextResponse.json(
      { status: "unavailable", database: "connection_failed" },
      { status: 503 },
    );
  }
}
