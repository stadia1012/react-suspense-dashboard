'use client';

import TodayUsersWidget from "./component/widgets/todayUsersWidget";
import TotalUsersWidget from "./component/widgets/totalUsersWidget";
import WeeklyRevenueWidget from "./component/widgets/weeklyRevenueWidget";
import TodayRevenueWidget from "./component/widgets/todayRevenueWidget";

export default function Dashboard() {
  return (
    <div className="w-[520px] py-[10px] px-[20px]">
      <div className="mb-[7px]">
          <h1 className="text-[20px] font-bold">대시보드</h1>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <TodayUsersWidget />
        <TotalUsersWidget />
        <WeeklyRevenueWidget />
        <TodayRevenueWidget />
      </div>
    </div>
  );
}