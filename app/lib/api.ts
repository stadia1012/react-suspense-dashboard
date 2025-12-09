const API_BASE_URL = process.env.API_BASE_URL || 'http://localhost:3000';

export async function getTodaySignups() {
  await new Promise((resolve) => setTimeout(resolve, 1500)); // 1.5초 지연
  return 120;
}

export async function getTotalUsers() {
  const res = await fetch(`${API_BASE_URL}/api/users`);

  if (!res.ok) {
    throw new Error(`Failed to fetch daily revenue: ${res.statusText}`);
  }

  const result: { value: number } = await res.json();
  return result.value;
}

export async function getWeeklyRevenue() {
  const res = await fetch(`${API_BASE_URL}/api/sales`);

  if (!res.ok) {
    throw new Error(`Failed to fetch daily revenue: ${res.statusText}`);
  }

  const result: { value: number } = await res.json();
  return result.value;
}

export async function getDailyRevenue(): Promise<number> {
  const res = await fetch(`${API_BASE_URL}/api/sales`);

  if (!res.ok) {
    throw new Error(`Failed to fetch daily revenue: ${res.statusText}`);
  }

  const result: { value: number } = await res.json();
  return result.value;
}