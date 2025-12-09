// app/dashboard/page.tsx
import { Suspense } from "react";
import { 
  DailyRevenueCard, 
  TodaySignupsCard, 
  TotalUsersCard, 
  WeeklyRevenueCard 
} from "@/app/dashboard/components/metric-cards";
import { CardSkeleton } from "@/app/dashboard/components/dashboard-ui";

export default function DashboardPage() {
  return (
    <main className="p-8 bg-gray-50">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">대시보드</h1>
      
      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* 각 카드별로 독립적인 Suspense 적용 */}
        <Suspense fallback={<CardSkeleton />}>
          <TodaySignupsCard />
        </Suspense>

        <Suspense fallback={<CardSkeleton />}>
          <TotalUsersCard />
        </Suspense>

        <Suspense fallback={<CardSkeleton />}>
          <WeeklyRevenueCard />
        </Suspense>

        <Suspense fallback={<CardSkeleton />}>
          <DailyRevenueCard />
        </Suspense>

      </div>
    </main>
  );
}