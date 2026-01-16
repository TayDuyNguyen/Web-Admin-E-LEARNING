
export interface StatsCardData {
  title: string;
  value: string;
  change: number;
  icon: string;
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
}

export interface Activity {
  id: string;
  user: string;
  action: string;
  timestamp: string;
  icon: 'user-plus' | 'dollar-sign' | 'book-open';
}
