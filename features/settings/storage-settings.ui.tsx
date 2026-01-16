
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { StorageOverview, CDNSettings, FileSizeLimits, BackupItem } from '../../shared/types/storage-settings';
import { Card } from '../../shared/ui/Card';

export const StorageUsageCard: React.FC<{ data: StorageOverview }> = ({ data }) => {
  const percentage = (data.used / data.total) * 100;
  
  return (
    <Card className="bg-[#1e293b]/20 border-slate-800/50">
      <div className="flex gap-4 mb-8">
        <div className="w-12 h-12 bg-blue-600/10 text-blue-500 rounded-xl flex items-center justify-center text-xl shrink-0">
          💳
        </div>
        <div>
          <h3 className="text-lg font-black text-slate-100">Tổng quan lưu trữ</h3>
          <p className="text-xs text-slate-500">Thống kê dung lượng và phân bổ tệp</p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 w-full">
          <div className="flex justify-between items-baseline mb-4">
            <h4 className="text-sm font-black text-slate-200 uppercase tracking-widest">Đã sử dụng</h4>
            <p className="text-3xl font-black text-slate-100 italic">
              {data.used}<span className="text-lg text-slate-600">/{data.total} {data.unit}</span>
            </p>
          </div>
          
          <div className="w-full bg-slate-800/50 h-4 rounded-full overflow-hidden mb-6">
            <div className="h-full bg-blue-600 rounded-full transition-all duration-1000" style={{ width: `${percentage}%` }} />
          </div>

          <p className="text-xs text-slate-500 leading-relaxed max-w-sm italic">
            Dung lượng lưu trữ của hệ thống đang ở mức an toàn. Hãy cân nhắc nâng cấp nếu vượt quá 80%.
          </p>
        </div>

        <div className="relative w-48 h-48 shrink-0">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data.distribution}
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
                stroke="none"
              >
                {data.distribution.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <span className="text-[10px] font-black text-slate-500 uppercase tracking-tighter">Phân bổ</span>
          </div>
        </div>

        <div className="space-y-4 shrink-0">
          {data.distribution.map((item) => (
            <div key={item.name} className="flex items-center gap-3">
              <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }} />
              <p className="text-xs font-bold text-slate-400 w-24">{item.name} ({item.percentage}%)</p>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};

export const CDNSettingsCard: React.FC<{ data: CDNSettings }> = ({ data }) => (
  <Card className="bg-[#1e293b]/20 border-slate-800/50">
    <div className="flex gap-4 mb-8">
      <div className="w-12 h-12 bg-emerald-600/10 text-emerald-500 rounded-xl flex items-center justify-center text-xl shrink-0">
        🚀
      </div>
      <div>
        <h3 className="text-lg font-black text-slate-100">Cài đặt CDN</h3>
        <p className="text-xs text-slate-500">Tăng tốc độ tải trang với mạng phân phối nội dung</p>
      </div>
    </div>

    <div className="space-y-6">
      <div className="space-y-2">
        <label className="text-[10px] text-slate-500 uppercase font-black tracking-widest ml-1">URL CDN</label>
        <div className="flex gap-4">
          <div className="relative flex-1 group">
            <span className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-500">🔗</span>
            <input 
              type="text" 
              defaultValue={data.url}
              className="w-full bg-[#0f172a] border border-slate-800 group-hover:border-slate-700 rounded-xl py-4 pl-12 pr-5 text-sm text-blue-400 font-bold focus:outline-none focus:border-blue-500/50 transition-all"
            />
          </div>
          <div className="flex items-center gap-4 px-6 bg-slate-800/30 border border-slate-800 rounded-xl">
             <span className="text-[11px] font-black text-slate-400 uppercase tracking-widest">Kích hoạt</span>
             <button className={`w-12 h-6 rounded-full relative transition-all duration-300 ${data.isActive ? 'bg-blue-600 shadow-[0_0_10px_rgba(37,99,235,0.4)]' : 'bg-slate-700'}`}>
                <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all duration-300 ${data.isActive ? 'right-1' : 'left-1'}`} />
             </button>
          </div>
        </div>
      </div>
    </div>
  </Card>
);

export const FileLimitCard: React.FC<{ data: FileSizeLimits }> = ({ data }) => (
  <Card className="bg-[#1e293b]/20 border-slate-800/50">
    <div className="flex gap-4 mb-8">
      <div className="w-12 h-12 bg-rose-600/10 text-rose-500 rounded-xl flex items-center justify-center text-xl shrink-0">
        📤
      </div>
      <div>
        <h3 className="text-lg font-black text-slate-100">Giới hạn kích thước tệp</h3>
        <p className="text-xs text-slate-500">Cấu hình kích thước tối đa cho phép tải lên</p>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="space-y-2">
        <label className="text-[10px] text-slate-500 uppercase font-black tracking-widest ml-1">Video tối đa (MB)</label>
        <div className="relative group">
          <span className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-500">🎬</span>
          <input 
            type="number" 
            defaultValue={data.maxVideoMB}
            className="w-full bg-[#0f172a] border border-slate-800 group-hover:border-slate-700 rounded-xl py-4 pl-12 pr-5 text-sm text-slate-200 font-black focus:outline-none focus:border-blue-500/50 transition-all"
          />
        </div>
      </div>
      <div className="space-y-2">
        <label className="text-[10px] text-slate-500 uppercase font-black tracking-widest ml-1">Tài liệu tối đa (MB)</label>
        <div className="relative group">
          <span className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-500">📄</span>
          <input 
            type="number" 
            defaultValue={data.maxDocMB}
            className="w-full bg-[#0f172a] border border-slate-800 group-hover:border-slate-700 rounded-xl py-4 pl-12 pr-5 text-sm text-slate-200 font-black focus:outline-none focus:border-blue-500/50 transition-all"
          />
        </div>
      </div>
    </div>
  </Card>
);

export const BackupTableCard: React.FC<{ items: BackupItem[] }> = ({ items }) => (
  <Card className="bg-[#1e293b]/20 border-slate-800/50" title="Quản lý sao lưu" extra={
    <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Danh sách các bản sao lưu hệ thống gần đây</p>
  }>
    <div className="overflow-x-auto -mx-6 -mb-6 mt-4">
      <table className="w-full text-left">
        <thead className="bg-slate-800/30 text-[10px] text-slate-500 font-black uppercase tracking-widest border-b border-slate-800">
          <tr>
            <th className="py-4 px-8">Tên bản sao lưu</th>
            <th className="py-4 px-4">Dung lượng</th>
            <th className="py-4 px-4 text-center">Thời gian</th>
            <th className="py-4 px-8 text-right">Hành động</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-800/30">
          {items.map((item) => (
            <tr key={item.id} className="hover:bg-slate-800/20 transition-colors group">
              <td className="py-4 px-8">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-500 flex items-center justify-center text-xs">💾</div>
                  <span className="text-sm font-bold text-slate-200 group-hover:text-blue-400 transition-colors">{item.name}</span>
                </div>
              </td>
              <td className="py-4 px-4 text-xs text-slate-400 font-medium">{item.size}</td>
              <td className="py-4 px-4 text-center text-xs text-slate-500 uppercase font-bold">{item.date}</td>
              <td className="py-4 px-8 text-right">
                <div className="flex items-center justify-end gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="text-slate-500 hover:text-blue-400">📥</button>
                  <button className="text-slate-500 hover:text-rose-500">🗑️</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </Card>
);

export const QuickActionsSidebar: React.FC = () => {
  const actions = [
    { label: 'Dọn dẹp tệp không dùng', sub: 'Xóa file rác tạm thời', icon: '🧹' },
    { label: 'Tối ưu hóa hình ảnh', sub: 'Nén ảnh để giảm dung lượng', icon: '✨' },
    { label: 'Chạy sao lưu ngay', sub: 'Tạo bản sao lưu thủ công', icon: '💾' },
  ];

  return (
    <Card className="bg-[#1e293b]/30 border-slate-800/50">
      <div className="flex gap-4 mb-8">
        <div className="w-10 h-10 bg-amber-500/10 text-amber-500 rounded-lg flex items-center justify-center text-lg shrink-0">
          ⚡
        </div>
        <div>
          <h3 className="text-md font-black text-slate-100">Chức năng nhanh</h3>
          <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest mt-0.5">Thao tác bảo trì hệ thống</p>
        </div>
      </div>

      <div className="space-y-4">
        {actions.map((a, i) => (
          <button key={i} className="w-full flex items-center gap-4 p-4 rounded-2xl bg-[#0f172a]/50 border border-slate-800 hover:bg-slate-800/80 hover:border-slate-700 transition-all text-left group">
            <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
              {a.icon}
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-black text-slate-200 group-hover:text-blue-400 transition-colors">{a.label}</p>
              <p className="text-[10px] text-slate-500 truncate">{a.sub}</p>
            </div>
          </button>
        ))}
      </div>

      <div className="mt-8 p-6 bg-blue-600/5 border border-blue-500/10 rounded-2xl flex gap-4">
        <span className="text-blue-500 text-lg">ℹ️</span>
        <p className="text-[10px] text-slate-500 leading-relaxed italic">
          Hệ thống tự động sao lưu dữ liệu vào <span className="text-blue-400 font-bold">02:00 AM</span> mỗi ngày. Các bản sao lưu cũ hơn 30 ngày sẽ tự động bị xóa.
        </p>
      </div>
    </Card>
  );
};
