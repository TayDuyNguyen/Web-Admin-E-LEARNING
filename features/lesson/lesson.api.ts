
import { LessonItem } from '../../shared/types/lesson';

const MOCK_LESSONS: LessonItem[] = [
  {
    id: '1',
    lessonCode: 'LES-001',
    title: 'Giới thiệu về khóa học ...',
    courseName: 'Lập trình Web Frontend',
    chapterName: 'Chương 1: Mở đầu',
    type: 'Video',
    duration: '12:30',
    status: 'Công khai',
  },
  {
    id: '2',
    lessonCode: 'LES-002',
    title: 'Cấu trúc thẻ HTML cơ...',
    courseName: 'Lập trình Web Frontend',
    chapterName: 'Chương 1: Mở đầu',
    type: 'Văn bản',
    duration: '5 phút đọc',
    status: 'Công khai',
  },
  {
    id: '3',
    lessonCode: 'LES-003',
    title: 'Tài nguyên bài tập...',
    courseName: 'Lập trình Web Frontend',
    chapterName: 'Chương 1: Mở đầu',
    type: 'Tập tin',
    duration: '2.5 MB',
    status: 'Nháp',
  },
  {
    id: '4',
    lessonCode: 'LES-015',
    title: 'Quy trình UX Research',
    courseName: 'Thiết kế UX/UI Cơ bản',
    chapterName: 'Chương 2: Nghiên cứu',
    type: 'Video',
    duration: '22:15',
    status: 'Công khai',
  },
  {
    id: '5',
    lessonCode: 'LES-042',
    title: 'Giới thiệu React Hooks',
    courseName: 'ReactJS Nâng cao',
    chapterName: 'Chương 3: Hooks',
    type: 'Video',
    duration: '18:45',
    status: 'Chờ duyệt',
  }
];

export const fetchLessons = async (): Promise<LessonItem[]> => {
  await new Promise(r => setTimeout(r, 600));
  return MOCK_LESSONS;
};
