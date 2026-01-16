
import { ReviewItem, ReviewStats } from '../../shared/types/review';

const MOCK_REVIEWS: ReviewItem[] = [
  {
    id: '1',
    author: { name: 'Nguyễn Văn A', avatar: 'https://i.pravatar.cc/150?u=a1' },
    courseName: 'ReactJS Nâng cao',
    rating: 5,
    content: 'Khóa học rất hay và chi tiết, giảng viên hỗ trợ nhiệt tình. Phần thực hành giúp mình hiểu sâu hơn về React Hooks.',
    date: '20/10/2023',
    status: 'Đã đăng'
  },
  {
    id: '2',
    author: { name: 'Trần Thị B', avatar: 'https://i.pravatar.cc/150?u=b2' },
    courseName: 'Thiết kế UX/UI Cơ bản',
    rating: 3,
    content: 'Nội dung hơi cơ bản, mình mong chờ nhiều case study thực tế hơn.',
    date: '19/10/2023',
    status: 'Chờ duyệt'
  },
  {
    id: '3',
    author: { name: 'Spam User', avatar: 'https://i.pravatar.cc/150?u=spam' },
    courseName: 'Lập trình Web Frontend',
    rating: 1,
    content: 'Link tải game miễn phí tại đây... click ngay nhận thưởng...',
    date: '18/10/2023',
    status: 'Bị báo cáo'
  },
  {
    id: '4',
    author: { name: 'Lê Văn Cường', avatar: 'https://i.pravatar.cc/150?u=c3' },
    courseName: 'Lập trình Web Frontend',
    rating: 5,
    content: 'Rất hài lòng, cảm ơn team đã tạo ra khóa học chất lượng như vậy.',
    date: '15/10/2023',
    status: 'Đã đăng'
  }
];

export const fetchReviewStats = async (): Promise<ReviewStats> => {
  return {
    averageRating: 4.8,
    totalReviews: 1248,
    pendingCount: 15
  };
};

export const fetchReviews = async (): Promise<ReviewItem[]> => {
  await new Promise(r => setTimeout(r, 600));
  return MOCK_REVIEWS;
};
