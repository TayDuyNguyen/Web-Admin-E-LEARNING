
import React from 'react';
import { Category, CategoryTreeItem } from '../../shared/types/category';
import { Card } from '../../shared/ui/Card';

export const CategoryTreeList: React.FC<{
  items: CategoryTreeItem[];
  selectedId: string | null;
  onSelect: (item: Category) => void;
}> = ({ items, selectedId, onSelect }) => {
  return (
    <div className="space-y-3">
      {items.map((item) => (
        <CategoryItem 
          key={item.id} 
          item={item} 
          selectedId={selectedId} 
          onSelect={onSelect} 
          level={0} 
        />
      ))}
    </div>
  );
};

const CategoryItem: React.FC<{
  item: CategoryTreeItem;
  selectedId: string | null;
  onSelect: (item: Category) => void;
  level: number;
}> = ({ item, selectedId, onSelect, level }) => {
  const isSelected = selectedId === item.id;
  
  return (
    <div className="space-y-2">
      <div 
        onClick={() => onSelect(item)}
        className={`flex items-center justify-between p-4 rounded-2xl cursor-pointer transition-all border group relative ${
          isSelected 
            ? 'bg-blue-600/10 border-blue-500 shadow-lg shadow-blue-500/10' 
            : 'bg-[#1e293b]/20 border-slate-800 hover:border-slate-700'
        }`}
        style={{ marginLeft: level > 0 ? `${level * 40}px` : '0' }}
      >
        {/* Connector Line for nested items */}
        {level > 0 && (
          <div className="absolute -left-6 top-1/2 -translate-y-1/2 w-6 h-[1px] bg-slate-700" />
        )}
        {level > 0 && (
          <div className="absolute -left-6 top-0 w-[1px] h-full bg-slate-700" />
        )}

        <div className="flex items-center gap-4">
          <span className="text-slate-600 cursor-move text-sm">⠿</span>
          <div 
            className="w-10 h-10 rounded-xl flex items-center justify-center text-lg shadow-inner"
            style={{ backgroundColor: `${item.color}20`, color: item.color }}
          >
            {item.icon}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h4 className={`text-sm font-bold transition-colors ${isSelected ? 'text-blue-400' : 'text-slate-200'}`}>
                {item.name}
              </h4>
              {item.status === 'Active' && level === 0 && (
                <span className="text-[9px] font-black bg-blue-500/10 text-blue-500 px-1.5 py-0.5 rounded uppercase tracking-wider">Active</span>
              )}
              {item.isNew && (
                <span className="text-[9px] font-black bg-emerald-500/10 text-emerald-500 px-1.5 py-0.5 rounded uppercase tracking-wider">Mới</span>
              )}
            </div>
            <p className="text-[10px] text-slate-500 font-medium">{item.courseCount} khóa học</p>
          </div>
        </div>

        <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button className={`p-2 rounded-lg transition-colors ${isSelected ? 'bg-blue-600 text-white' : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'}`}>✏️</button>
          <button className="p-2 text-slate-400 hover:text-rose-500 hover:bg-rose-500/10 rounded-lg transition-all">🗑️</button>
        </div>
      </div>

      {item.children && item.children.length > 0 && (
        <div className="relative">
          {item.children.map(child => (
            <CategoryItem 
              key={child.id} 
              item={child} 
              selectedId={selectedId} 
              onSelect={onSelect} 
              level={level + 1} 
            />
          ))}
        </div>
      )}
    </div>
  );
};

export const CategoryForm: React.FC<{ selected: Category | null }> = ({ selected }) => {
  if (!selected) return (
    <Card className="h-full flex flex-col items-center justify-center p-12 text-center border-dashed border-2 border-slate-800">
      <div className="text-5xl mb-6 opacity-20">📁</div>
      <h3 className="text-xl font-bold text-slate-400">Chọn danh mục để chỉnh sửa</h3>
      <p className="text-sm text-slate-600 mt-2 max-w-xs">Hoặc nhấn nút "Thêm danh mục mới" để tạo một nhóm khóa học mới trong hệ thống.</p>
    </Card>
  );

  return (
    <Card 
      title="Cấu hình danh mục" 
      className="sticky top-24 border-slate-800 bg-[#1e293b]/20"
      extra={<span className="text-[10px] font-bold text-blue-500 bg-blue-500/10 px-2 py-1 rounded">ID: {selected.id}</span>}
    >
      <div className="space-y-6">
        <div className="space-y-2">
          <label className="text-[11px] text-slate-500 uppercase font-bold tracking-wider">Tên danh mục <span className="text-rose-500">*</span></label>
          <input 
            type="text" 
            defaultValue={selected.name}
            className="w-full bg-[#0f172a] border border-slate-800 rounded-xl p-3.5 text-sm text-slate-200 focus:outline-none focus:border-blue-500/50 transition-all"
          />
        </div>

        <div className="space-y-2">
          <label className="text-[11px] text-slate-500 uppercase font-bold tracking-wider">Đường dẫn tĩnh (Slug)</label>
          <div className="flex">
            <div className="bg-slate-800/50 border border-r-0 border-slate-800 rounded-l-xl flex items-center px-4 text-slate-500 text-sm">/</div>
            <input 
              type="text" 
              defaultValue={selected.slug}
              className="flex-1 bg-[#0f172a] border border-slate-800 rounded-r-xl p-3.5 text-sm text-slate-200 focus:outline-none focus:border-blue-500/50 transition-all"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-[11px] text-slate-500 uppercase font-bold tracking-wider">Danh mục cha</label>
          <div className="relative">
            <select className="w-full bg-[#0f172a] border border-slate-800 rounded-xl p-3.5 text-sm text-slate-200 focus:outline-none focus:border-blue-500 appearance-none cursor-pointer">
              <option>--- Không có (Danh mục gốc) ---</option>
              <option>Lập trình (Development)</option>
              <option>Thiết kế (Design)</option>
            </select>
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none text-[10px]">▼</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-[11px] text-slate-500 uppercase font-bold tracking-wider">Biểu tượng</label>
            <div className="flex items-center gap-2">
              <div className="flex bg-[#0f172a] border border-slate-800 rounded-xl p-1 gap-1">
                {['⌨️', '🎨', '📢', '⋯'].map((icon, idx) => (
                  <button 
                    key={idx} 
                    className={`w-9 h-9 rounded-lg flex items-center justify-center text-sm transition-all ${
                      (idx === 1 && selected.name.includes('Thiết kế')) || (idx === 0 && selected.name.includes('Lập trình')) || (idx === 2 && selected.name.includes('Tiếp thị'))
                        ? 'bg-blue-600 text-white' 
                        : 'text-slate-500 hover:bg-slate-800'
                    }`}
                  >
                    {icon}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-[11px] text-slate-500 uppercase font-bold tracking-wider">Màu sắc</label>
            <div className="flex flex-wrap gap-2 pt-1">
              {['#3b82f6', '#ec4899', '#f59e0b', '#22c55e', '#a855f7', '#64748b'].map(c => (
                <button 
                  key={c} 
                  className={`w-6 h-6 rounded-full border-2 transition-transform hover:scale-110 ${selected.color === c ? 'border-white' : 'border-transparent'}`}
                  style={{ backgroundColor: c }}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-[11px] text-slate-500 uppercase font-bold tracking-wider">Mô tả ngắn</label>
          <textarea 
            rows={4}
            defaultValue={`Các khóa học chuyên sâu về ${selected.name.toLowerCase()}, cung cấp lộ trình từ cơ bản đến thực chiến chuyên sâu.`}
            className="w-full bg-[#0f172a] border border-slate-800 rounded-xl p-3.5 text-sm text-slate-300 focus:outline-none focus:border-blue-500 transition-all resize-none leading-relaxed"
          />
        </div>

        <div className="flex items-center gap-3 pt-4 border-t border-slate-800/50">
          <button className="flex-1 bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold py-3.5 rounded-xl transition-all shadow-lg shadow-blue-600/20 active:scale-95">
            Lưu thay đổi
          </button>
          <button className="px-6 py-3.5 bg-transparent border border-slate-800 hover:bg-slate-800 text-slate-400 text-sm font-bold rounded-xl transition-all active:scale-95">
            Hủy
          </button>
        </div>
      </div>
    </Card>
  );
};
