import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    await new Promise(resolve => setTimeout(resolve, 1200));
    
    return NextResponse.json({
      success: true,
      value: 128,
    }, { status: 200 });

  } catch (error) {
    console.error("Users Today API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 });
  }
}
