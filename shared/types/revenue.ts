
export interface RevenueStat {
  label: string;
  value: string;
  trend: number;
  trendLabel: string;
  progress: number;
  color: string;
  icon?: string;
}

export interface RevenueTrendPoint {
  time: string;
  revenue: number;
}

export interface TopEarningCourse {
  id: string;
  title: string;
  salesCount: number;
  totalRevenue: string;
  trend: string;
}

export interface PaymentMethodData {
  name: string;
  value: number;
  color: string;
}

export interface RevenueAnalyticsData {
  stats: RevenueStat[];
  trends: RevenueTrendPoint[];
  topCourses: TopEarningCourse[];
  paymentMethods: PaymentMethodData[];
}
