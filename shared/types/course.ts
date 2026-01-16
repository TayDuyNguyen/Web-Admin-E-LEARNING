
export type CourseStatus = 'Published' | 'Draft' | 'Archived';

export interface Lesson {
  id: string;
  title: string;
  duration: string;
  type: 'video' | 'text' | 'quiz';
}

export interface Section {
  id: string;
  title: string;
  lessons: Lesson[];
}

export interface CourseListItem {
  id: string;
  thumbnail: string;
  title: string;
  category: string;
  instructor: {
    name: string;
    avatar: string;
  };
  price: number;
  status: CourseStatus;
  studentCount: number;
  rating: number;
  revenue: number;
}

export interface CourseDetail {
  id: string;
  title: string;
  slug: string;
  description: string;
  content: string;
  status: CourseStatus;
  createdAt: string;
  updatedAt: string;
  thumbnail: string;
  originalPrice: number;
  salePrice: number;
  category: string;
  instructorId: string;
  instructorName: string;
  studentCount: number;
  rating: number;
  sections: Section[];
}
