import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    return NextResponse.json({
      success: true,
      value: 18750000,
      change: 15.7, // 전주 대비 증감률 (%)
    }, { status: 200 });

  } catch (error) {
    console.error("Sales Weekly API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 });
  }
}