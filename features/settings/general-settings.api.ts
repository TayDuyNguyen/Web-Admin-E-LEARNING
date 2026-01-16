
import { GeneralSettings } from '../../shared/types/settings';

export const fetchGeneralSettings = async (): Promise<GeneralSettings> => {
  await new Promise(r => setTimeout(r, 600));

  return {
    site: {
      name: 'Học viện Công nghệ LMS',
      tagline: 'Nền tảng học trực tuyến hàng đầu Việt Nam',
      logo: 'https://via.placeholder.com/150x50/1e293b/ffffff?text=LMS+LOGO',
      favicon: 'https://via.placeholder.com/32/3b82f6/ffffff?text=F',
      maintenanceMode: false,
    },
    contact: {
      email: 'contact@lms-academy.vn',
      phone: '1900 123 456',
      address: 'Tòa nhà Tech, Quận 1, TP. Hồ Chí Minh',
    },
    social: {
      facebook: 'https://facebook.com/lmsacademy',
      youtube: 'https://youtube.com/c/lmsacademy',
      linkedin: 'https://linkedin.com/company/lmsacademy',
      tiktok: 'https://tiktok.com/@lmsacademy',
    },
    seo: {
      metaTitle: 'LMS Academy - Khóa học lập trình & thiết kế thực chiến',
      metaDescription: 'Học lập trình, thiết kế UI/UX, Marketing từ các chuyên gia hàng đầu. Lộ trình bài bản, hỗ trợ việc làm sau khóa học.',
      keywords: 'lms, học lập trình, ui ux, reactjs, nodejs, marketing online',
      ogImage: 'https://via.placeholder.com/1200x630/1e293b/ffffff?text=LMS+Preview',
    }
  };
};

export const updateGeneralSettings = async (data: GeneralSettings): Promise<boolean> => {
  await new Promise(r => setTimeout(r, 1000));
  console.log('Settings updated:', data);
  return true;
};
