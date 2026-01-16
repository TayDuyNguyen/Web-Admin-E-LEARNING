
import { ExerciseItem } from '../../shared/types/exercise';

const MOCK_EXERCISES: ExerciseItem[] = [
  {
    id: '1',
    question: 'Thủ đô của Việt Nam là gì?',
    lessonName: 'Bài 1: Địa lý cơ bản',
    type: 'Trắc nghiệm',
    difficulty: 'Dễ',
    points: 10,
    status: 'Công khai'
  },
  {
    id: '2',
    question: 'Giải thích quy trình quang hợp...',
    lessonName: 'Bài 3: Sinh học 10',
    type: 'Tự luận',
    difficulty: 'Khó',
    points: 20,
    status: 'Công khai'
  },
  {
    id: '3',
    question: 'Nước sôi ở 90 độ C trong điề...',
    lessonName: 'Bài 2: Vật lý đại cương',
    type: 'Đúng / Sai',
    difficulty: 'Dễ',
    points: 5,
    status: 'Nháp'
  },
  {
    id: '4',
    question: 'Điền vào chỗ trống: "Học, họ...',
    lessonName: 'Bài 1: Triết học Mác - Lênin',
    type: 'Điền từ',
    difficulty: 'Trung bình',
    points: 15,
    status: 'Công khai'
  }
];

export const fetchExercises = async (): Promise<ExerciseItem[]> => {
  await new Promise(r => setTimeout(r, 600));
  return MOCK_EXERCISES;
};
