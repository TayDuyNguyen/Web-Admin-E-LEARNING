
import React from 'react';
import { Card } from '../../shared/ui/Card';
import { DataTask } from '../../shared/types/import-export';

export const ImportSection: React.FC = () => (
  <Card className="bg-[#1e293b]/20 border-slate-800/50 h-full">
    <div className="flex gap-4 mb-8">
      <div className="w-12 h-12 bg-blue-600/10 text-blue-500 rounded-xl flex items-center justify-center text-xl shrink-0">
        📥
      </div>
      <div>
        <h3 className="text-lg font-black text-slate-100">Nhập dữ liệu</h3>
        <p className="text-xs text-slate-500">Thêm dữ liệu hàng loạt vào hệ thống</p>
      </div>
    </div>

    <div className="space-y-6">
      <div>
        <label className="text-[10px] text-slate-500 uppercase font-black tracking-widest ml-1 mb-2 block">Loại dữ liệu</label>
        <div className="relative group">
          <span className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-500">👥</span>
          <select className="w-full bg-[#0f172a] border border-slate-800 group-hover:border-slate-700 rounded-xl py-4 pl-12 pr-5 text-sm text-slate-200 appearance-none focus:outline-none focus:border-blue-500/50 transition-all font-bold">
            <option>Người dùng</option>
            <option>Khóa học</option>
            <option>Câu hỏi</option>
          </select>
          <span className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none">▼</span>
        </div>
      </div>

      <div className="border-2 border-dashed border-slate-800 rounded-2xl p-10 text-center bg-[#0f172a]/30 group hover:border-blue-500/30 transition-all cursor-pointer">
        <div className="w-16 h-16 bg-slate-800/50 rounded-full flex items-center justify-center text-3xl mx-auto mb-4 group-hover:scale-110 transition-transform">
          ☁️
        </div>
        <h4 className="text-sm font-black text-slate-300">Kéo thả tệp CSV hoặc Excel vào đây</h4>
        <p className="text-[11px] text-slate-500 mt-1">hoặc nhấp để chọn tệp từ máy tính</p>
        <button className="mt-6 px-6 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 rounded-xl text-xs font-black uppercase tracking-widest transition-all">
          Chọn tệp
        </button>
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-slate-800/50">
        <button className="text-[11px] font-black text-blue-500 hover:text-blue-400 uppercase tracking-widest flex items-center gap-2">
          📥 Tải tệp mẫu
        </button>
        <button className="px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-black uppercase tracking-widest transition-all shadow-xl shadow-blue-600/20 active:scale-95">
          Bắt đầu nhập
        </button>
      </div>
    </div>
  </Card>
);

export const ExportSection: React.FC = () => (
  <Card className="bg-[#1e293b]/20 border-slate-800/50 h-full">
    <div className="flex gap-4 mb-8">
      <div className="w-12 h-12 bg-purple-600/10 text-purple-500 rounded-xl flex items-center justify-center text-xl shrink-0">
        📤
      </div>
      <div>
        <h3 className="text-lg font-black text-slate-100">Xuất dữ liệu</h3>
        <p className="text-xs text-slate-500">Trích xuất dữ liệu từ hệ thống</p>
      </div>
    </div>

    <div className="space-y-6">
      <div>
        <label className="text-[10px] text-slate-500 uppercase font-black tracking-widest ml-1 mb-4 block">Loại dữ liệu cần xuất</label>
        <div className="grid grid-cols-2 gap-4">
          {[
            { label: 'Người dùng', icon: '👤', selected: true },
            { label: 'Khóa học', icon: '🎓', selected: false },
            { label: 'Điểm số', icon: '📝', selected: false },
            { label: 'Báo cáo hoạt động', icon: '📊', selected: false },
          ].map((opt) => (
            <div key={opt.label} className={`flex items-center gap-3 p-4 border rounded-xl cursor-pointer transition-all ${opt.selected ? 'bg-blue-600/10 border-blue-500/50' : 'bg-[#0f172a] border-slate-800 hover:border-slate-700'}`}>
              <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${opt.selected ? 'border-blue-500 bg-blue-500' : 'border-slate-700'}`}>
                {opt.selected && <div className="w-1.5 h-1.5 bg-white rounded-full" />}
              </div>
              <span className="text-xs font-bold text-slate-300">{opt.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        <label className="text-[10px] text-slate-500 uppercase font-black tracking-widest ml-1 mb-2 block">Định dạng tệp</label>
        <div className="relative group">
          <span className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-500">📄</span>
          <select className="w-full bg-[#0f172a] border border-slate-800 group-hover:border-slate-700 rounded-xl py-4 pl-12 pr-5 text-sm text-slate-200 appearance-none focus:outline-none focus:border-blue-500/50 transition-all font-bold">
            <option>Excel (.xlsx)</option>
            <option>CSV (.csv)</option>
            <option>JSON (.json)</option>
          </select>
          <span className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none">▼</span>
        </div>
      </div>

      <div className="p-4 bg-amber-500/5 border border-amber-500/10 rounded-xl flex gap-3">
        <span className="text-amber-500 text-sm">⚠️</span>
        <p className="text-[10px] text-slate-500 leading-relaxed font-medium italic">
          Việc xuất dữ liệu lớn có thể mất vài phút. Bạn sẽ nhận được thông báo khi quá trình hoàn tất.
        </p>
      </div>

      <div className="flex justify-end pt-4 border-t border-slate-800/50 mt-auto">
        <button className="px-8 py-3.5 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 rounded-xl text-xs font-black uppercase tracking-widest transition-all flex items-center gap-3 active:scale-95">
          <span>📤</span> Bắt đầu xuất
        </button>
      </div>
    </div>
  </Card>
);

export const HistoryTable: React.FC<{ items: DataTask[] }> = ({ items }) => (
  <Card 
    title="Lịch sử thực hiện" 
    extra={<p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Các tác vụ nhập/xuất gần đây</p>}
    className="bg-[#1e293b]/20 border-slate-800/50"
  >
    <div className="overflow-x-auto -mx-6 -mb-6 mt-4">
      <table className="w-full text-left">
        <thead className="bg-slate-800/30 text-[10px] text-slate-500 font-black uppercase tracking-widest border-b border-slate-800">
          <tr>
            <th className="py-4 px-8">Tên tác vụ</th>
            <th className="py-4 px-4">Loại</th>
            <th className="py-4 px-4">Thời gian</th>
            <th className="py-4 px-4">Trạng thái</th>
            <th className="py-4 px-8 text-right">Nhật ký (Logs)</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-800/30">
          {items.map((item) => (
            <tr key={item.id} className="hover:bg-slate-800/20 transition-colors group">
              <td className="py-5 px-8">
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg ${item.type === 'Nhập dữ liệu' ? 'bg-blue-500/10 text-blue-500' : 'bg-purple-500/10 text-purple-500'}`}>
                    {item.type === 'Nhập dữ liệu' ? '📥' : '📤'}
                  </div>
                  <div>
                    <p className="text-sm font-black text-slate-200 group-hover:text-blue-400 transition-colors">{item.name}</p>
                    <p className="text-[10px] text-slate-500 font-mono mt-0.5">{item.fileName}</p>
                  </div>
                </div>
              </td>
              <td className="py-5 px-4">
                <span className={`px-2.5 py-1 rounded text-[10px] font-black uppercase tracking-tighter ${item.type === 'Nhập dữ liệu' ? 'bg-blue-600/10 text-blue-400' : 'bg-purple-600/10 text-purple-400'}`}>
                  {item.type}
                </span>
              </td>
              <td className="py-5 px-4 text-xs text-slate-500 font-bold uppercase">{item.time}</td>
              <td className="py-5 px-4">
                <div className="flex items-center gap-2">
                  <div className={`w-1.5 h-1.5 rounded-full ${item.status === 'Hoàn thành' ? 'bg-emerald-500' : item.status === 'Thất bại' ? 'bg-rose-500' : 'bg-amber-500 animate-pulse'}`} />
                  <span className={`text-[10px] font-black uppercase tracking-widest ${item.status === 'Hoàn thành' ? 'text-emerald-500' : item.status === 'Thất bại' ? 'text-rose-500' : 'text-amber-500'}`}>
                    {item.status}
                  </span>
                </div>
              </td>
              <td className="py-5 px-8 text-right">
                {item.hasLogs && (
                  <button className="p-2 text-slate-500 hover:text-blue-400 transition-colors">
                    📄
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </Card>
);
