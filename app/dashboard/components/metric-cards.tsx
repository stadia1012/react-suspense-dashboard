import { getDailyRevenue, getTotalUsers } from "@/app/lib/api";
import { Card } from "./dashboard-ui";

// 오늘 가입자 수 카드
export async function TodaySignupsCard() {
  const count = await getTotalUsers();
  return <Card title="오늘 가입자수">{count.toLocaleString()}명</Card>;
}

// 전체 회원 수 카드
export async function TotalUsersCard() {
  const count = await getTotalUsers();
  return <Card title="전체 회원수">{count.toLocaleString()}명</Card>;
}

// 주간 매출액 카드
export async function WeeklyRevenueCard() {
  const revenue = await getDailyRevenue();
  return <Card title="주간 매출액">₩{revenue.toLocaleString()}</Card>;
}

// 일간 매출액 카드
export async function DailyRevenueCard() {
  const revenue = await getDailyRevenue();
  return <Card title="일간 매출액">₩{revenue.toLocaleString()}</Card>;
}