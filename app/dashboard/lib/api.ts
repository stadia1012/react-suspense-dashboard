// API 경로 상수
export const API_ENDPOINTS = {
  users: {
    today: '/api/users/today',
    total: '/api/users/total',
  },
  sales: {
    daily: '/api/sales/daily',
    weekly: '/api/sales/weekly',
  },
} as const;

// API 응답 타입
interface ApiResponse {
  success: boolean;
  value: number;
  change?: number; // 증감률 (%) - optional
  error?: string;
}

// 메트릭 데이터 타입
export interface MetricData {
  value: number;
  change?: number; // optional
}

// 공통 fetch 유틸리티
async function fetchMetric(endpoint: string): Promise<MetricData> {
  const res = await fetch(endpoint, { cache: 'no-store' });

  if (!res.ok) {
    throw new Error(`API Error: ${res.status} ${res.statusText}`);
  }

  const data: ApiResponse = await res.json();
  return {
    value: data.value,
    change: data.change,
  };
}

// 각 메트릭 fetch 함수
export const fetchTodayUsers = () => fetchMetric(API_ENDPOINTS.users.today);
export const fetchTotalUsers = () => fetchMetric(API_ENDPOINTS.users.total);
export const fetchDailySales = () => fetchMetric(API_ENDPOINTS.sales.daily);
export const fetchWeeklySales = () => fetchMetric(API_ENDPOINTS.sales.weekly);
