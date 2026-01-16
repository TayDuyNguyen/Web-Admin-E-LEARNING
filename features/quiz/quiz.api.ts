
import { QuizItem } from '../../shared/types/quiz';

const MOCK_QUIZZES: QuizItem[] = [
  {
    id: '1',
    title: 'Bài kiểm tra cuối...',
    courseName: 'Lập trình...',
    questionCount: 45,
    passingScore: 60,
    timeLimit: 90,
    completionRate: 85,
    status: 'Đang hoạt động'
  },
  {
    id: '2',
    title: 'Quiz 1: Từ vựng chủ...',
    courseName: 'Tiếng Anh...',
    questionCount: 20,
    passingScore: 50,
    timeLimit: 30,
    completionRate: 45,
    status: 'Đang hoạt động'
  },
  {
    id: '3',
    title: 'Đánh giá năng lực...',
    courseName: 'Digital...',
    questionCount: 15,
    passingScore: 80,
    timeLimit: 45,
    completionRate: 0,
    status: 'Bản nháp'
  },
  {
    id: '4',
    title: 'Thi thử: Luyện...',
    courseName: 'IELTS...',
    questionCount: 10,
    passingScore: 50,
    timeLimit: 15,
    completionRate: 92,
    status: 'Đã đóng'
  }
];

export const fetchQuizzes = async (): Promise<QuizItem[]> => {
  await new Promise(r => setTimeout(r, 600));
  return MOCK_QUIZZES;
};
