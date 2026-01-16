
export type UserRole = 'Student' | 'Instructor' | 'Admin';
export type UserStatus = 'Hoạt động' | 'Bị chặn';

export interface User {
  id: string;
  name: string;
  handle: string;
  email: string;
  avatar: string;
  role: UserRole;
  status: UserStatus;
  joinDate: string;
}

export interface EnrolledCourse {
  id: string;
  title: string;
  instructor: string;
  enrollDate: string;
  progress: number;
  score?: string;
  thumbnail: string;
}

export interface UserBadge {
  id: string;
  icon: string;
  title: string;
  color: string;
}

export interface UserDetail extends User {
  phone: string;
  lastLogin: string;
  bio: string;
  stats: {
    coursesCount: number;
    completionRate: number;
    certificatesCount: number;
  };
  enrolledCourses: EnrolledCourse[];
  badges: UserBadge[];
}

export interface UserFilters {
  search: string;
  role: string;
  status: string;
  date: string;
}
