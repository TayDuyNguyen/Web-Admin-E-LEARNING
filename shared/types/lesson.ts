
export type LessonType = 'Video' | 'Văn bản' | 'Tập tin' | 'Quiz';
export type LessonStatus = 'Công khai' | 'Nháp' | 'Chờ duyệt';

export interface LessonItem {
  id: string;
  lessonCode: string;
  title: string;
  courseName: string;
  chapterName: string;
  type: LessonType;
  duration: string;
  status: LessonStatus;
}
