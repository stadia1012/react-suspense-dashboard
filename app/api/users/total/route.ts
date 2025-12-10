import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    await new Promise(resolve => setTimeout(resolve, 800));
    
    return NextResponse.json({
      success: true,
      value: 15420,
    }, { status: 200 });

  } catch (error) {
    console.error("Users Total API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 });
  }
}

