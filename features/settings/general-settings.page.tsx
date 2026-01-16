
import React, { useEffect, useState } from 'react';
import { fetchGeneralSettings, updateGeneralSettings } from './general-settings.api';
import { GeneralSettings } from '../../shared/types/settings';
import { SiteSettingsForm, SEOSettingsForm, ContactSocialForm, SettingsSection } from './general-settings.ui';
// Import missing Card component from shared UI
import { Card } from '../../shared/ui/Card';

export const GeneralSettingsPage: React.FC = () => {
  const [data, setData] = useState<GeneralSettings | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const load = async () => {
      try {
        const result = await fetchGeneralSettings();
        setData(result);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  const handleSave = async () => {
    if (!data) return;
    setSaving(true);
    try {
      await updateGeneralSettings(data);
      // Show success notification here if needed
    } finally {
      setSaving(false);
    }
  };

  if (loading || !data) return (
    <div className="h-full flex flex-col items-center justify-center gap-4">
      <div className="w-12 h-12 border-[6px] border-slate-700 border-t-blue-600 rounded-full animate-spin" />
      <p className="text-slate-500 font-black uppercase tracking-widest text-[10px] animate-pulse">Đang tải cấu hình hệ thống...</p>
    </div>
  );

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 pb-20 max-w-6xl mx-auto">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-slate-500 mb-6">
        <span className="cursor-pointer hover:text-slate-300 transition-colors">Cài đặt</span>
        <span className="text-slate-800">/</span>
        <span className="text-blue-500">Cài đặt chung</span>
      </nav>

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
        <div>
          <h2 className="text-5xl font-black text-slate-100 leading-tight tracking-tighter">Cấu hình hệ thống</h2>
          <p className="text-slate-500 text-sm mt-2 font-medium">Quản lý các thông tin cơ bản, SEO và kênh truyền thông của LMS</p>
        </div>
        <div className="flex items-center gap-3">
          <button 
            onClick={handleSave}
            disabled={saving}
            className={`px-10 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl text-xs font-black uppercase tracking-widest flex items-center gap-3 transition-all shadow-2xl shadow-blue-600/30 ${saving ? 'opacity-50 cursor-not-allowed' : 'active:scale-95'}`}
          >
            {saving ? (
              <><div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" /> Đang lưu...</>
            ) : (
              <><span>💾</span> Lưu thay đổi</>
            )}
          </button>
        </div>
      </div>

      <div className="space-y-12">
        <SettingsSection title="Cấu hình cơ bản">
          <SiteSettingsForm data={data.site} />
        </SettingsSection>

        <SettingsSection title="SEO & Truyền thông">
          <SEOSettingsForm data={data.seo} />
          <ContactSocialForm contact={data.contact} social={data.social} />
        </SettingsSection>

        <SettingsSection title="Trang pháp lý">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card title="Điều khoản sử dụng" extra={<button className="text-blue-500 text-xs font-bold hover:underline">Chỉnh sửa</button>}>
               <p className="text-xs text-slate-500 italic">Quản lý nội dung trang điều khoản, quy định của học viện dành cho học viên và giảng viên.</p>
            </Card>
            <Card title="Chính sách bảo mật" extra={<button className="text-blue-500 text-xs font-bold hover:underline">Chỉnh sửa</button>}>
               <p className="text-xs text-slate-500 italic">Quản lý cách thức thu thập và xử lý dữ liệu cá nhân của người dùng trên hệ thống.</p>
            </Card>
          </div>
        </SettingsSection>
      </div>
    </div>
  );
};
