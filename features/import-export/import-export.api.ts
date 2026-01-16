
import { DataTask } from '../../shared/types/import-export';

export const fetchTaskHistory = async (): Promise<DataTask[]> => {
  await new Promise(r => setTimeout(r, 600));
  return [
    {
      id: '1',
      name: 'Nhập danh sách người dùng',
      fileName: 'users_import_v2.csv',
      type: 'Nhập dữ liệu',
      time: '25/10/2023 14:30',
      status: 'Hoàn thành',
      hasLogs: true
    },
    {
      id: '2',
      name: 'Xuất báo cáo khóa học',
      fileName: 'courses_report_q3.xlsx',
      type: 'Xuất dữ liệu',
      time: '24/10/2023 09:15',
      status: 'Hoàn thành',
      hasLogs: false
    },
    {
      id: '3',
      name: 'Nhập ngân hàng câu hỏi',
      fileName: 'questions_math_final.xlsx',
      type: 'Nhập dữ liệu',
      time: '22/10/2023 16:45',
      status: 'Thất bại',
      hasLogs: true
    }
  ];
};
