
import { StorageSettings } from '../../shared/types/storage-settings';

export const fetchStorageSettings = async (): Promise<StorageSettings> => {
  await new Promise(r => setTimeout(r, 600));
  return {
    overview: {
      used: 45,
      total: 100,
      unit: 'GB',
      distribution: [
        { name: 'Video', value: 55, color: '#3b82f6', percentage: 55 },
        { name: 'Hình ảnh', value: 30, color: '#06b6d4', percentage: 30 },
        { name: 'Tài liệu', value: 15, color: '#f59e0b', percentage: 15 },
      ]
    },
    cdn: {
      url: 'https://cdn.lms-static.com',
      isActive: true
    },
    limits: {
      maxVideoMB: 500,
      maxDocMB: 50
    },
    backups: [
      { id: '1', name: 'backup_db_20231124.sql', size: '1.2 GB', date: '24/11/2023 02:00', status: 'Thành công' },
      { id: '2', name: 'backup_media_20231123.zip', size: '15.5 GB', date: '23/11/2023 02:00', status: 'Thành công' },
      { id: '3', name: 'backup_db_20231122.sql', size: '1.1 GB', date: '22/11/2023 02:00', status: 'Thành công' },
    ]
  };
};
