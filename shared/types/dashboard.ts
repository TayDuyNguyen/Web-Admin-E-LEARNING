
export interface StatsCardData {
  title: string;
  value: string;
  change: number;
  icon: string;
  color: string;
}

export interface RegistrationData {
  name: string;
  registrations: number;
}

export interface CourseSummary {
  id: string;
  title: string;
  instructor: string;
  students: number;
  status: 'active' | 'inactive' | 'draft';
  category: string;
}

export interface Activity {
  id: string;
  user: string;
  action: string;
  timestamp: string;
  icon: 'user-plus' | 'dollar-sign' | 'book-open' | 'alert-circle';
}

export interface SystemHealth {
  label: string;
  status: 'online' | 'warning' | 'error';
  value: string;
}
