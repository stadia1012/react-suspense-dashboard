import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    await new Promise(resolve => setTimeout(resolve, 1300));
    
    return NextResponse.json({
      success: true,
      value: 1100,
    }, { status: 200 });

  } catch (error) {
    console.error("Sales API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 });
  }
}