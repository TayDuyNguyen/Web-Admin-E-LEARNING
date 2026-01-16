
import React, { useEffect, useState } from 'react';
import { fetchPermissionData, updateRolePermissions } from './permission.api';
import { Role, ModulePermission, ActionKey } from '../../shared/types/permission';
import { RoleSelector, PermissionMatrix } from './permission.ui';

export const PermissionsSettingsPage: React.FC = () => {
  const [data, setData] = useState<{ roles: Role[], permissions: ModulePermission[] } | null>(null);
  const [selectedRoleId, setSelectedRoleId] = useState('admin');
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [hasChanges, setHasChanges] = useState(false);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      try {
        const result = await fetchPermissionData(selectedRoleId);
        setData(result);
        setHasChanges(false);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [selectedRoleId]);

  const handleToggle = (moduleId: string, action: ActionKey) => {
    if (!data) return;
    const newPermissions = data.permissions.map(p => {
      if (p.moduleId === moduleId) {
        return { ...p, actions: { ...p.actions, [action]: !p.actions[action] } };
      }
      return p;
    });
    setData({ ...data, permissions: newPermissions });
    setHasChanges(true);
  };

  const handleSave = async () => {
    if (!data) return;
    setSaving(true);
    try {
      await updateRolePermissions(selectedRoleId, data.permissions);
      setHasChanges(false);
    } finally {
      setSaving(false);
    }
  };

  if (loading && !data) return (
    <div className="h-full flex flex-col items-center justify-center gap-4">
      <div className="w-12 h-12 border-[6px] border-blue-600/10 border-t-blue-600 rounded-full animate-spin" />
      <p className="text-slate-500 font-black uppercase tracking-widest text-[10px] animate-pulse">Đang truy xuất phân quyền...</p>
    </div>
  );

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 pb-20 max-w-7xl mx-auto">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-slate-500 mb-6">
        <span className="cursor-pointer hover:text-slate-300 transition-colors">Cài đặt</span>
        <span className="text-slate-800">/</span>
        <span className="text-blue-500">Phân quyền tài khoản</span>
      </nav>

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
        <div>
          <h2 className="text-5xl font-black text-slate-100 leading-tight tracking-tighter">Phân quyền hệ thống</h2>
          <p className="text-slate-500 text-sm mt-2 font-medium">Xác định các quyền thao tác cho từng nhóm vai trò người dùng</p>
        </div>
        <div className="flex items-center gap-3">
          <button 
             onClick={() => setHasChanges(false)}
             className={`px-6 py-3.5 bg-slate-800 hover:bg-slate-700 text-slate-400 text-[10px] font-black uppercase tracking-widest border border-slate-700 rounded-2xl transition-all ${!hasChanges ? 'opacity-0 pointer-events-none' : ''}`}
          >
            Hủy thay đổi
          </button>
          <button 
            disabled={!hasChanges || saving}
            onClick={handleSave}
            className={`px-10 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest flex items-center gap-3 transition-all shadow-2xl ${
              hasChanges ? 'bg-blue-600 text-white shadow-blue-600/30 hover:bg-blue-500 active:scale-95' : 'bg-slate-800 text-slate-600 cursor-not-allowed border border-slate-700'
            }`}
          >
            {saving ? (
              <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
            ) : (
              <><span>🔒</span> Lưu cấu hình quyền</>
            )}
          </button>
        </div>
      </div>

      {data && (
        <>
          <RoleSelector 
            roles={data.roles} 
            selectedId={selectedRoleId} 
            onSelect={setSelectedRoleId} 
          />
          <PermissionMatrix 
            permissions={data.permissions} 
            onToggle={handleToggle} 
          />
        </>
      )}

      {/* Security Warning Footer */}
      <div className="mt-10 p-6 bg-rose-500/5 border border-rose-500/10 rounded-3xl flex gap-6 items-center">
         <div className="w-12 h-12 bg-rose-500/10 text-rose-500 rounded-2xl flex items-center justify-center text-2xl shrink-0">⚠️</div>
         <div>
            <h5 className="text-sm font-black text-rose-500 uppercase tracking-widest mb-1">Cảnh báo bảo mật</h5>
            <p className="text-xs text-slate-500 leading-relaxed font-medium">
               Các thay đổi về quyền hạn sẽ có hiệu lực ngay lập tức sau khi học viên đăng nhập lại. Hãy thận trọng khi cấp quyền <span className="text-rose-400 font-bold">Xóa</span> hoặc <span className="text-rose-400 font-bold">Sửa</span> cho các vai trò không phải Quản trị viên.
            </p>
         </div>
      </div>
    </div>
  );
};
