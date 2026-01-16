
import { CourseDetail, CourseListItem } from '../../shared/types/course';

const MOCK_COURSE_LIST: CourseListItem[] = [
  {
    id: '1',
    thumbnail: 'https://picsum.photos/seed/ux/100/100',
    title: 'Khóa học UX/UI Design cơ bản',
    category: 'Thiết kế',
    instructor: { name: 'Hoàng Nam', avatar: 'https://i.pravatar.cc/150?u=11' },
    price: 599000,
    status: 'Published',
    studentCount: 1234,
    rating: 4.8,
    revenue: 739000000
  },
  {
    id: '2',
    thumbnail: 'https://picsum.photos/seed/js/100/100',
    title: 'JavaScript nâng cao - 2024',
    category: 'Lập trình',
    instructor: { name: 'Lê Minh', avatar: 'https://i.pravatar.cc/150?u=12' },
    price: 799000,
    status: 'Published',
    studentCount: 856,
    rating: 4.9,
    revenue: 684000000
  },
  {
    id: '3',
    thumbnail: 'https://picsum.photos/seed/marketing/100/100',
    title: 'Digital Marketing căn bản',
    category: 'Marketing',
    instructor: { name: 'Phạm Lan', avatar: 'https://i.pravatar.cc/150?u=13' },
    price: 499000,
    status: 'Draft',
    studentCount: 0,
    rating: 0,
    revenue: 0
  },
  {
    id: '4',
    thumbnail: 'https://picsum.photos/seed/python/100/100',
    title: 'Python for Data Science',
    category: 'Data Science',
    instructor: { name: 'Trần Đức', avatar: 'https://i.pravatar.cc/150?u=14' },
    price: 1299000,
    status: 'Published',
    studentCount: 342,
    rating: 4.7,
    revenue: 444000000
  },
  {
    id: '5',
    thumbnail: 'https://picsum.photos/seed/react/100/100',
    title: 'ReactJS & Redux: Xây dựng ứng dụng thực tế',
    category: 'Lập trình',
    instructor: { name: 'Lê Minh', avatar: 'https://i.pravatar.cc/150?u=12' },
    price: 899000,
    status: 'Published',
    studentCount: 512,
    rating: 4.8,
    revenue: 460000000
  }
];

export const fetchCourses = async (): Promise<CourseListItem[]> => {
  await new Promise((r) => setTimeout(r, 600));
  return MOCK_COURSE_LIST;
};

export const fetchCourseDetail = async (id: string): Promise<CourseDetail> => {
  await new Promise((r) => setTimeout(r, 600));
  return {
    id,
    title: 'UX/UI Design cơ bản cho người mới bắt đầu',
    slug: 'ux-ui-design-co-ban',
    description: 'Khóa học cung cấp kiến thức nền tảng về tư duy thiết kế, quy trình UX và kỹ năng UI thực chiến.',
    content: `Trong khóa học này, bạn sẽ được học về:
- Quy trình Design Thinking
- Cách sử dụng Figma từ cơ bản đến nâng cao
- Xây dựng Portfolio cá nhân`,
    status: 'Published',
    createdAt: '20/10/2023',
    updatedAt: 'Vừa xong',
    thumbnail: 'https://picsum.photos/seed/course/800/450',
    originalPrice: 999000,
    salePrice: 599000,
    category: 'Thiết kế (Design)',
    instructorId: 'inst-1',
    instructorName: 'Sarah Vo',
    studentCount: 1234,
    rating: 4.8,
    sections: [
      {
        id: 's1',
        title: 'Chương 1: Giới thiệu về UX/UI Design',
        lessons: [
          { id: 'l1', title: '1.1. UX và UI khác nhau thế nào?', duration: '15:00', type: 'video' },
          { id: 'l2', title: '1.2. Quy trình thiết kế sản phẩm', duration: '20:00', type: 'video' },
          { id: 'l3', title: '1.3. Bài kiểm tra tư duy', duration: '10:00', type: 'quiz' },
        ]
      },
      {
        id: 's2',
        title: 'Chương 2: Công cụ thiết kế Figma',
        lessons: [
          { id: 'l4', title: '2.1. Làm quen với giao diện Figma', duration: '12:00', type: 'video' },
          { id: 'l5', title: '2.2. Sử dụng Component và Auto Layout', duration: '25:00', type: 'video' },
        ]
      }
    ]
  };
};
