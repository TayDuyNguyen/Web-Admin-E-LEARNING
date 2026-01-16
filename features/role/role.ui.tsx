
import React from 'react';
import { Role, ModulePermission } from '../../shared/types/role';
import { Card } from '../../shared/ui/Card';

export const RoleCardList: React.FC<{ 
  roles: Role[], 
  selectedRoleId: string, 
  onSelect: (id: string) => void 
}> = ({ roles, selectedRoleId, onSelect }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {roles.map((role) => (
        <button
          key={role.id}
          onClick={() => onSelect(role.id)}
          className={`text-left transition-all relative ${
            selectedRoleId === role.id 
              ? 'scale-[1.02] z-10' 
              : 'hover:scale-[1.01] opacity-70 hover:opacity-100'
          }`}
        >
          <Card 
            className={`h-full border-2 ${
              selectedRoleId === role.id ? 'border-blue-600 bg-blue-600/5' : 'border-slate-800'
            }`}
          >
            <div className="flex justify-between items-start mb-6">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl ${
                selectedRoleId === role.id ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-400'
              }`}>
                {role.icon}
              </div>
              {selectedRoleId === role.id && (
                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-[10px] text-white">
                  ✓
                </div>
              )}
            </div>
            
            <h4 className="text-lg font-bold text-slate-100 mb-1">{role.name}</h4>
            <p className="text-xs text-slate-500 mb-6 leading-relaxed">{role.description}</p>
            
            <div className="flex items-center justify-between border-t border-slate-800/50 pt-4 mt-auto">
              <div className="flex -space-x-2">
                {role.avatars.map((url, i) => (
                  <img key={i} src={url} className="w-7 h-7 rounded-full border-2 border-slate-900 object-cover" alt="" />
                ))}
                {role.userCount > role.avatars.length && (
                  <div className="w-7 h-7 rounded-full border-2 border-slate-900 bg-slate-800 flex items-center justify-center text-[8px] font-bold text-slate-400">
                    +{role.userCount - role.avatars.length}
                  </div>
                )}
              </div>
              <button className="text-[10px] font-bold text-blue-500 hover:text-blue-400 uppercase tracking-wider">
                Sửa quyền
              </button>
            </div>
          </Card>
        </button>
      ))}
    </div>
  );
};

export const PermissionMatrix: React.FC<{ permissions: ModulePermission[], roleName: string }> = ({ permissions, roleName }) => {
  return (
    <Card 
      title={`Ma trận phân quyền: ${roleName}`} 
      extra={<button className="text-blue-500 text-xs font-bold bg-blue-600/10 px-3 py-1.5 rounded-lg hover:bg-blue-600/20 transition-all">Vai trò hệ thống</button>}
      className="mt-8"
    >
      <p className="text-slate-500 text-xs mb-8">Cấu hình chi tiết quyền hạn cho vai trò này</p>
      
      <div className="overflow-x-auto -mx-6">
        <table className="w-full text-left">
          <thead className="text-[10px] text-slate-500 font-bold uppercase tracking-widest border-b border-slate-800">
            <tr>
              <th className="py-4 px-6">Module / Chức năng</th>
              <th className="py-4 px-6 text-center">Xem</th>
              <th className="py-4 px-6 text-center">Tạo</th>
              <th className="py-4 px-6 text-center">Sửa</th>
              <th className="py-4 px-6 text-center">Xóa</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/50">
            {permissions.map((p, idx) => (
              <tr key={idx} className="hover:bg-slate-800/20 transition-colors group">
                <td className="py-5 px-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-slate-800/50 flex items-center justify-center text-lg text-slate-400 group-hover:text-blue-400 transition-colors">
                      {p.icon}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-200">{p.module}</p>
                      <p className="text-[10px] text-slate-500">{p.description}</p>
                    </div>
                  </div>
                </td>
                <td className="py-5 px-6 text-center">
                  <Checkbox checked={p.permissions.view} />
                </td>
                <td className="py-5 px-6 text-center">
                  <Checkbox checked={p.permissions.create} />
                </td>
                <td className="py-5 px-6 text-center">
                  <Checkbox checked={p.permissions.edit} />
                </td>
                <td className="py-5 px-6 text-center">
                  <Checkbox checked={p.permissions.delete} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
};

const Checkbox: React.FC<{ checked: boolean }> = ({ checked }) => (
  <div className="flex justify-center items-center">
    <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all cursor-pointer ${
      checked 
        ? 'bg-blue-600 border-blue-600' 
        : 'border-slate-700 hover:border-slate-500 bg-slate-900'
    }`}>
      {checked && <span className="text-white text-[10px]">✓</span>}
    </div>
  </div>
);
