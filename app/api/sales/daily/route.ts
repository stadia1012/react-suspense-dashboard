import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    return NextResponse.json({
      success: true,
      value: 2450000,
    }, { status: 200 });

  } catch (error) {
    console.error("Sales Daily API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 });
  }
}

