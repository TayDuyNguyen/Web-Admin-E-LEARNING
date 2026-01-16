
import React, { useEffect, useState } from 'react';
import { fetchSecuritySettings } from './security-settings.api';
import { SecuritySettings } from '../../shared/types/security-settings';
import { SecuritySectionHeader, APIKeyItem, AccessLogTable } from './security-settings.ui';
import { Card } from '../../shared/ui/Card';
import { InputBox, SelectBox, Toggle, FormLabel } from './learning-settings.ui';

export const SecuritySettingsPage: React.FC = () => {
  const [data, setData] = useState<SecuritySettings | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const result = await fetchSecuritySettings();
        setData(result);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  if (loading || !data) return (
    <div className="h-full flex flex-col items-center justify-center gap-4">
      <div className="w-10 h-10 border-4 border-blue-600/20 border-t-blue-600 rounded-full animate-spin" />
      <p className="text-slate-500 font-black uppercase tracking-widest text-[10px] animate-pulse">Cấu hình bảo mật...</p>
    </div>
  );

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 pb-20 max-w-6xl mx-auto">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-slate-500 mb-6">
        <span className="cursor-pointer hover:text-slate-300">Cài đặt</span>
        <span className="text-slate-800">/</span>
        <span className="text-blue-500">Bảo mật</span>
      </nav>

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
        <h2 className="text-5xl font-black text-slate-100 leading-tight tracking-tighter">Cài đặt bảo mật</h2>
        <button className="px-10 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl text-xs font-black uppercase tracking-widest flex items-center gap-3 transition-all shadow-2xl shadow-blue-600/30 active:scale-95">
          <span>💾</span> Lưu thay đổi
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Main Column */}
        <div className="lg:col-span-8 space-y-8">
          {/* Login Security */}
          <Card className="bg-[#1e293b]/20 border-slate-800/50">
            <SecuritySectionHeader 
              icon="🔒" 
              title="Bảo mật đăng nhập" 
              sub="Cấu hình chính sách mật khẩu và xác thực" 
            />
            
            <div className="space-y-8">
              <div>
                <FormLabel>Độ dài mật khẩu tối thiểu</FormLabel>
                <InputBox value={data.login.minPasswordLength} />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-center justify-between p-6 bg-[#0f172a]/80 border border-slate-800 rounded-2xl">
                  <div className="max-w-[180px]">
                    <h4 className="text-sm font-black text-slate-200">Ký tự đặc biệt</h4>
                    <p className="text-[10px] text-slate-500 mt-1 italic">Yêu cầu ít nhất 1 ký tự (!@#)</p>
                  </div>
                  <Toggle checked={data.login.requireSpecialChar} />
                </div>
                <div className="flex items-center justify-between p-6 bg-[#0f172a]/80 border border-slate-800 rounded-2xl">
                  <div className="max-w-[180px]">
                    <h4 className="text-sm font-black text-slate-200">Xác thực 2 yếu tố (2FA)</h4>
                    <p className="text-[10px] text-slate-500 mt-1 italic">Bảo vệ tài khoản qua OTP</p>
                  </div>
                  <Toggle checked={data.login.enable2FA} />
                </div>
              </div>
            </div>
          </Card>

          {/* Content Security */}
          <Card className="bg-[#1e293b]/20 border-slate-800/50">
            <SecuritySectionHeader 
              icon="🛡️" 
              title="Bảo mật nội dung" 
              sub="Bảo vệ tài sản trí tuệ và quyền truy cập" 
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
              <div className="flex items-center justify-between p-6 bg-[#0f172a]/80 border border-slate-800 rounded-2xl">
                <div>
                  <h4 className="text-sm font-black text-slate-200">Chống sao chép nội dung</h4>
                  <p className="text-[10px] text-slate-500 mt-1 italic">Vô hiệu hóa chuột phải/copy</p>
                </div>
                <Toggle checked={data.content.preventCopy} />
              </div>
              <div>
                <FormLabel>Số thiết bị đăng nhập đồng thời</FormLabel>
                <InputBox value={data.content.concurrentLogins} />
              </div>
            </div>
          </Card>

          {/* Access Logs */}
          <Card 
            title="Nhật ký truy cập" 
            className="bg-[#1e293b]/20 border-slate-800/50"
            extra={<button className="text-blue-500 text-[10px] font-black uppercase tracking-widest hover:underline">Xem tất cả</button>}
          >
            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-tight mb-6">Hoạt động gần đây của hệ thống</p>
            <AccessLogTable logs={data.logs} />
          </Card>
        </div>

        {/* Sidebar Column */}
        <div className="lg:col-span-4 space-y-8">
          {/* Backup Config */}
          <Card className="bg-[#1e293b]/30 border-slate-800/50 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none text-6xl">⚙️</div>
            <SecuritySectionHeader icon="🏗️" title="Cấu hình sao lưu" sub="An toàn dữ liệu" />
            
            <div className="space-y-6">
              <div>
                <FormLabel>Lịch trình tự động</FormLabel>
                <SelectBox value={data.backup.schedule} options={['Hàng ngày (Daily)', 'Hàng tuần (Weekly)', 'Hàng tháng (Monthly)']} />
              </div>
              <div>
                <FormLabel>Nơi lưu trữ</FormLabel>
                <SelectBox value={data.backup.storage} options={['Local Server', 'AWS S3', 'Google Cloud Storage', 'OneDrive']} />
              </div>
            </div>
          </Card>

          {/* API Management */}
          <Card className="bg-[#1e293b]/30 border-slate-800/50">
            <SecuritySectionHeader icon="💠" title="Quản lý API" sub="Khóa truy cập hệ thống" />
            
            <div className="space-y-4">
              {data.apiKeys.map(key => <APIKeyItem key={key.id} item={key} />)}
              
              <button className="w-full py-4 border-2 border-dashed border-slate-800 rounded-xl text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-blue-500 hover:border-blue-500/50 transition-all flex items-center justify-center gap-2">
                <span>⊕</span> Tạo khóa mới
              </button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
