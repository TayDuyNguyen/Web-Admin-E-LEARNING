
import { User, UserDetail } from '../../shared/types/user';

const MOCK_USERS: User[] = [
  {
    id: '1',
    name: 'Nguyễn Minh Hoàng',
    handle: '@nmhoang',
    email: 'hoang.nguyen@example.com',
    avatar: 'https://i.pravatar.cc/150?u=1',
    role: 'Student',
    status: 'Hoạt động',
    joinDate: '24/10/2023',
  },
  {
    id: '2',
    name: 'Trần Thu Hà',
    handle: '@thuha_tran',
    email: 'thuha.tran@example.com',
    avatar: 'https://i.pravatar.cc/150?u=2',
    role: 'Instructor',
    status: 'Hoạt động',
    joinDate: '15/09/2023',
  },
  {
    id: '3',
    name: 'Phạm Văn Cường',
    handle: '@cuong_dev',
    email: 'cuong.pham@example.com',
    avatar: 'https://i.pravatar.cc/150?u=3',
    role: 'Admin',
    status: 'Hoạt động',
    joinDate: '01/01/2023',
  },
  {
    id: '4',
    name: 'Lê Thị Mai',
    handle: '@mai_le',
    email: 'mai.le@example.com',
    avatar: 'https://i.pravatar.cc/150?u=4',
    role: 'Student',
    status: 'Bị chặn',
    joinDate: '10/11/2023',
  },
  {
    id: '5',
    name: 'Hoàng Văn Đức',
    handle: '@duc_hoang',
    email: 'duc.hoang@example.com',
    avatar: 'https://i.pravatar.cc/150?u=5',
    role: 'Student',
    status: 'Hoạt động',
    joinDate: '05/12/2023',
  },
];

export const fetchUsers = async (): Promise<User[]> => {
  await new Promise((r) => setTimeout(r, 800));
  return MOCK_USERS;
};

export const fetchUserDetail = async (id: string): Promise<UserDetail> => {
  await new Promise((r) => setTimeout(r, 600));
  const baseUser = MOCK_USERS.find(u => u.id === id) || MOCK_USERS[0];
  
  return {
    ...baseUser,
    phone: '0987 654 321',
    lastLogin: '2 giờ trước',
    bio: 'Đam mê công nghệ và lập trình. Đang theo học các khóa học về Frontend và Data Science.',
    stats: {
      coursesCount: 12,
      completionRate: 85,
      certificatesCount: 4,
    },
    enrolledCourses: [
      {
        id: 'c1',
        title: 'Frontend Master Class',
        instructor: 'Sarah Vo',
        enrollDate: '12/01/2024',
        progress: 45,
        thumbnail: 'https://picsum.photos/seed/fe/40/40'
      },
      {
        id: 'c2',
        title: 'Python for Data Science',
        instructor: 'Tran Minh',
        enrollDate: '05/11/2023',
        progress: 100,
        score: '9.5/10',
        thumbnail: 'https://picsum.photos/seed/ds/40/40'
      },
      {
        id: 'c3',
        title: 'UI Design Fundamentals',
        instructor: 'Le Ha',
        enrollDate: '20/12/2023',
        progress: 15,
        thumbnail: 'https://picsum.photos/seed/ui/40/40'
      }
    ],
    badges: [
      { id: 'b1', icon: '🏆', title: 'Học viên ưu tú', color: 'amber' },
      { id: 'b2', icon: '🚀', title: 'Hoàn thành nhanh', color: 'blue' },
      { id: 'b3', icon: '🧠', title: 'Chuyên gia logic', color: 'purple' },
    ]
  };
};
