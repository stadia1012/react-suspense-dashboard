'use client';

import { useState } from "react";
import { 
  DailyRevenueCard, 
  TodaySignupsCard, 
  TotalUsersCard, 
  WeeklyRevenueCard 
} from "@/app/dashboard/components/metric-cards";

export default function DashboardPage() {
  const [refreshKey, setRefreshKey] = useState(0);

  const handleRefreshAll = () => {
    setRefreshKey(prev => prev + 1);
  };

  return (
    <main className="p-8 bg-gray-50 min-h-screen">
      <div className="flex items-center gap-3 mb-8">
        <h1 className="text-3xl font-bold text-gray-800">대시보드</h1>
        <button
          type="button"
          onClick={handleRefreshAll}
          className="w-8 h-8 p-1.5 rounded-lg bg-white border border-gray-200 
            hover:bg-gray-50 hover:border-gray-300 shadow-sm
            transition-all duration-200 cursor-pointer
            flex items-center justify-center
          "
          title="전체 새로고침"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            className="w-full h-full text-gray-600"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M19.933 13.041a8 8 0 1 1 -9.925 -8.788c3.899 -1 7.935 1.007 9.425 4.747" />
            <path d="M20 4v5h-5" />
          </svg>
        </button>
      </div>
      
      {/* key 변경 시 모든 카드가 리마운트되어 데이터를 다시 fetch */}
      <div key={refreshKey} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <TodaySignupsCard />
        <TotalUsersCard />
        <DailyRevenueCard />
        <WeeklyRevenueCard />
      </div>
    </main>
  );
}
