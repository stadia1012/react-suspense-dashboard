'use client';
import { ReloadableCard } from "./dashboard-ui";
import {
  fetchTodayUsers,
  fetchTotalUsers,
  fetchDailySales,
  fetchWeeklySales,
} from "../lib/api";

// 오늘 가입자 수 카드
export function TodaySignupsCard() {
  return (
    <ReloadableCard
      title="오늘 가입자수"
      fetcher={fetchTodayUsers}
      formatter={(value) => `${value.toLocaleString()}명`}
    />
  );
}

// 전체 회원 수 카드
export function TotalUsersCard() {
  return (
    <ReloadableCard
      title="전체 회원수"
      fetcher={fetchTotalUsers}
      formatter={(value) => `${value.toLocaleString()}명`}
    />
  );
}

// 일간 매출액 카드
export function DailyRevenueCard() {
  return (
    <ReloadableCard
      title="일간 매출액"
      fetcher={fetchDailySales}
      formatter={(value) => `₩${value.toLocaleString()}`}
    />
  );
}

// 주간 매출액 카드
export function WeeklyRevenueCard() {
  return (
    <ReloadableCard
      title="주간 매출액"
      fetcher={fetchWeeklySales}
      formatter={(value) => `₩${value.toLocaleString()}`}
    />
  );
}
