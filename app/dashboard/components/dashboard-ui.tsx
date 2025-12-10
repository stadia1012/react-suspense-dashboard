'use client';
import { getDailyRevenue, getTotalUsers } from "@/app/lib/api";
import { ReactNode } from "react";

/*
 * Suspense를 사용하여 데이터를 불러오는 대시보드 구현
 * async 사용 시 데이터 리로딩 등의 적용 불가
 * (서버 컴포넌트에서 클라이언트로 핸들러를 전달할 수 없음)
 */

// 공통 카드 레이아웃
export function Card({ title, children }:
  { title: string; children: ReactNode }) {
  return (
    <div className="
      border border-gray-200 rounded-xl p-6 shadow-sm bg-white relative
      hover:bg-gray-50 hover:shadow-md transition-all duration-200
    ">
      <button
        type="button"
        className="absolute top-[10px] right-[10px] w-[22px] h-[22px] p-[4px]
          hover:bg-slate-200/75 rounded-[6px] flex items-center justify-center cursor-pointer
          transition-all duration-200
        "
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M19.933 13.041a8 8 0 1 1 -9.925 -8.788c3.899 -1 7.935 1.007 9.425 4.747" /><path d="M20 4v5h-5" />
        </svg>
      </button>
      <h3 className="text-sm font-medium text-gray-500 mb-2">{title}</h3>
      <div className="text-2xl font-bold text-gray-900">{children}</div>
    </div>
  );
}

// 스켈레톤 UI (shimmer 효과 포함)
export function CardSkeleton() {
  return (
    <div className="border border-gray-200 rounded-xl p-6 shadow-sm bg-white">
      <div className="h-4 w-1/3 bg-gray-200 rounded animate-pulse mb-[10px]" />
      <div className="h-8 w-2/3 bg-gray-200 rounded animate-pulse" />
    </div>
  );
}