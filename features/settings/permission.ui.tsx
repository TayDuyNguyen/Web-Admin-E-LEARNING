
import React from 'react';
import { Role, ModulePermission, ActionKey } from '../../shared/types/permission';
import { Card } from '../../shared/ui/Card';

export const RoleSelector: React.FC<{ 
  roles: Role[], 
  selectedId: string, 
  onSelect: (id: string) => void 
}> = ({ roles, selectedId, onSelect }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-10">
    {roles.map((role) => (
      <button
        key={role.id}
        onClick={() => onSelect(role.id)}
        className={`text-left transition-all relative group ${
          selectedId === role.id ? 'scale-[1.02] z-10' : 'opacity-60 hover:opacity-100'
        }`}
      >
        <Card className={`p-5 border-2 transition-all h-full ${
          selectedId === role.id ? 'border-blue-600 bg-blue-600/5 ring-4 ring-blue-600/5' : 'border-slate-800 bg-slate-900/40'
        }`}>
          <div className="flex justify-between items-start mb-4">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-xl ${
              selectedId === role.id ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' : 'bg-slate-800 text-slate-500'
            }`}>
              {role.icon}
            </div>
            {role.isSystem && (
              <span className="text-[8px] font-black uppercase tracking-widest bg-slate-800 text-slate-400 px-1.5 py-0.5 rounded border border-slate-700">System</span>
            )}
          </div>
          <h4 className="text-sm font-black text-slate-100 mb-1">{role.name}</h4>
          <p className="text-[10px] text-slate-500 font-bold uppercase tracking-tight">{role.userCount} người dùng</p>
        </Card>
      </button>
    ))}
  </div>
);

export const PermissionMatrix: React.FC<{ 
  permissions: ModulePermission[], 
  onToggle: (moduleId: string, action: ActionKey) => void 
}> = ({ permissions, onToggle }) => (
  <Card title="Cấu hình quyền hạn chi tiết" className="bg-slate-900/30 overflow-hidden" extra={
    <div className="flex items-center gap-6 text-[10px] font-black uppercase text-slate-500 tracking-widest">
      <div className="flex items-center gap-2"><div className="w-3 h-3 rounded bg-blue-600" /> Có quyền</div>
      <div className="flex items-center gap-2"><div className="w-3 h-3 rounded border border-slate-700" /> Không có</div>
    </div>
  }>
    <div className="overflow-x-auto -mx-6 -mb-6">
      <table className="w-full text-left border-collapse">
        <thead className="bg-slate-800/40 border-b border-slate-800">
          <tr>
            <th className="py-5 px-8 text-[10px] text-slate-500 font-black uppercase tracking-widest">Màn hình / Module</th>
            <th className="py-5 px-4 text-center text-[10px] text-slate-500 font-black uppercase tracking-widest">Xem</th>
            <th className="py-5 px-4 text-center text-[10px] text-slate-500 font-black uppercase tracking-widest">Thêm</th>
            <th className="py-5 px-4 text-center text-[10px] text-slate-500 font-black uppercase tracking-widest">Sửa</th>
            <th className="py-5 px-4 text-center text-[10px] text-slate-500 font-black uppercase tracking-widest">Xóa</th>
            <th className="py-5 px-8 text-center text-[10px] text-slate-500 font-black uppercase tracking-widest">Xuất file</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-800/50">
          {permissions.map((module) => (
            <tr key={module.moduleId} className="group hover:bg-slate-800/20 transition-colors">
              <td className="py-5 px-8">
                <div>
                  <p className="text-sm font-black text-slate-100 group-hover:text-blue-400 transition-colors">{module.moduleName}</p>
                  <p className="text-[9px] text-slate-600 font-bold uppercase tracking-tighter mt-0.5">{module.category}</p>
                </div>
              </td>
              {(['view', 'create', 'edit', 'delete', 'export'] as ActionKey[]).map((action) => (
                <td key={action} className={`py-5 ${action === 'export' ? 'px-8' : 'px-4'} text-center`}>
                  <button 
                    onClick={() => onToggle(module.moduleId, action)}
                    className={`w-6 h-6 rounded-lg border-2 transition-all duration-300 flex items-center justify-center mx-auto ${
                      module.actions[action] 
                        ? 'bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-600/30' 
                        : 'border-slate-800 bg-slate-900 hover:border-slate-600'
                    }`}
                  >
                    {module.actions[action] && <span className="text-[10px]">✓</span>}
                  </button>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </Card>
);
