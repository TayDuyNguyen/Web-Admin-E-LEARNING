
import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AdminLayout } from '../shared/layout/AdminLayout';
import { DashboardPage } from '../features/dashboard/dashboard.page';
import { SystemStatusPage } from '../features/system/system.page';
import { UserManagementPage } from '../features/user/user.page';
import { UserDetailPage } from '../features/user/user-detail.page';
import { CourseDetailPage } from '../features/course/course-detail.page';
import { CourseListPage } from '../features/course/course-list.page';
import { CategoryPage } from '../features/category/category.page';
import { CourseBuilderPage } from '../features/course-builder/course-builder.page';
import { RolesPermissionsPage } from '../features/role/role.page';

export const AppRouter: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route element={<AdminLayout />}>
          <Route path="/" element={<Navigate to="/admin/dashboard" replace />} />
          <Route path="/admin/dashboard" element={<DashboardPage />} />
          <Route path="/admin/status" element={<SystemStatusPage />} />
          <Route path="/admin/users" element={<UserManagementPage />} />
          <Route path="/admin/users/:id" element={<UserDetailPage />} />
          <Route path="/admin/roles" element={<RolesPermissionsPage />} />
          <Route path="/admin/courses" element={<CourseListPage />} />
          <Route path="/admin/courses/:id" element={<CourseDetailPage />} />
          <Route path="/admin/categories" element={<CategoryPage />} />
          <Route path="/admin/course-builder" element={<CourseBuilderPage />} />
          {/* Placeholder routes for other sections */}
          <Route path="/admin/content" element={<div className="p-8">Nội dung - Coming Soon</div>} />
        </Route>
      </Routes>
    </HashRouter>
  );
};
