
import React from 'react';
import { Card } from '../../shared/ui/Card';
import { SiteInfo, ContactInfo, SocialLinks, SEOSettings } from '../../shared/types/settings';

export const SettingsSection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="space-y-6">
    <div className="flex items-center gap-4">
      <h3 className="text-sm font-black text-slate-400 uppercase tracking-widest">{title}</h3>
      <div className="h-px flex-1 bg-slate-800" />
    </div>
    {children}
  </div>
);

export const InputGroup: React.FC<{ label: string; placeholder?: string; defaultValue?: string; type?: string }> = ({ label, placeholder, defaultValue, type = 'text' }) => (
  <div className="space-y-2">
    <label className="text-[10px] text-slate-500 uppercase font-black tracking-widest ml-1">{label}</label>
    <input 
      type={type}
      defaultValue={defaultValue}
      placeholder={placeholder}
      className="w-full bg-[#0f172a] border border-slate-800 rounded-xl py-3 px-4 text-sm text-slate-300 focus:outline-none focus:border-blue-500 transition-all placeholder:text-slate-700"
    />
  </div>
);

export const SiteSettingsForm: React.FC<{ data: SiteInfo }> = ({ data }) => (
  <Card title="Thông tin website" className="bg-slate-900/30">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="space-y-6">
        <InputGroup label="Tên website" defaultValue={data.name} />
        <InputGroup label="Slogan / Tagline" defaultValue={data.tagline} />
        <div className="flex items-center justify-between p-4 bg-slate-800/20 border border-slate-800 rounded-xl">
          <div>
            <p className="text-sm font-bold text-slate-200">Chế độ bảo trì</p>
            <p className="text-[10px] text-slate-500">Tạm đóng website với người dùng</p>
          </div>
          <button className={`w-12 h-6 rounded-full relative transition-colors ${data.maintenanceMode ? 'bg-amber-600' : 'bg-slate-700'}`}>
            <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${data.maintenanceMode ? 'right-1' : 'left-1'}`} />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-[10px] text-slate-500 uppercase font-black tracking-widest ml-1">Logo</label>
          <div className="aspect-video bg-slate-800/30 border-2 border-dashed border-slate-800 rounded-xl flex items-center justify-center relative group cursor-pointer overflow-hidden">
             <img src={data.logo} className="h-8 opacity-50 group-hover:opacity-100 transition-opacity" alt="Logo" />
             <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                <span className="text-[10px] font-black text-blue-400 uppercase">Thay đổi</span>
             </div>
          </div>
        </div>
        <div className="space-y-2">
          <label className="text-[10px] text-slate-500 uppercase font-black tracking-widest ml-1">Favicon</label>
          <div className="w-20 h-20 bg-slate-800/30 border-2 border-dashed border-slate-800 rounded-xl flex items-center justify-center relative group cursor-pointer overflow-hidden">
             <img src={data.favicon} className="w-8 h-8 rounded opacity-50 group-hover:opacity-100 transition-opacity" alt="Favicon" />
             <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                <span className="text-[10px] font-black text-blue-400 uppercase">Thay đổi</span>
             </div>
          </div>
        </div>
      </div>
    </div>
  </Card>
);

export const SEOSettingsForm: React.FC<{ data: SEOSettings }> = ({ data }) => (
  <Card title="Cấu hình SEO & Metadata" className="bg-slate-900/30">
    <div className="space-y-6">
      <InputGroup label="Meta Title" defaultValue={data.metaTitle} />
      <div className="space-y-2">
        <label className="text-[10px] text-slate-500 uppercase font-black tracking-widest ml-1">Meta Description</label>
        <textarea 
          defaultValue={data.metaDescription}
          rows={3}
          className="w-full bg-[#0f172a] border border-slate-800 rounded-xl py-3 px-4 text-sm text-slate-300 focus:outline-none focus:border-blue-500 transition-all resize-none"
        />
      </div>
      <InputGroup label="Keywords (cách nhau bởi dấu phẩy)" defaultValue={data.keywords} />
    </div>
  </Card>
);

export const ContactSocialForm: React.FC<{ contact: ContactInfo; social: SocialLinks }> = ({ contact, social }) => (
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
    <Card title="Thông tin liên hệ" className="bg-slate-900/30">
      <div className="space-y-6">
        <InputGroup label="Email hỗ trợ" defaultValue={contact.email} type="email" />
        <InputGroup label="Hotline" defaultValue={contact.phone} />
        <InputGroup label="Địa chỉ văn phòng" defaultValue={contact.address} />
      </div>
    </Card>
    <Card title="Mạng xã hội" className="bg-slate-900/30">
      <div className="space-y-6">
        <InputGroup label="Facebook URL" defaultValue={social.facebook} />
        <InputGroup label="Youtube Channel" defaultValue={social.youtube} />
        <InputGroup label="LinkedIn Company" defaultValue={social.linkedin} />
        <InputGroup label="TikTok Profile" defaultValue={social.tiktok} />
      </div>
    </Card>
  </div>
);
