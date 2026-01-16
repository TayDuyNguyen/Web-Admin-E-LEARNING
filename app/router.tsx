
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
import { LessonPage } from '../features/lesson/lesson.page';
import { ExercisePage } from '../features/exercise/exercise.page';
import { QuizPage } from '../features/quiz/quiz.page';
import { QuestionPage } from '../features/question/question.page';
import { RolesPermissionsPage } from '../features/role/role.page';
import { DiscussionModerationPage } from '../features/discussion/discussion.page';
import { ReviewManagementPage } from '../features/review/review.page';
import { ReportManagementPage } from '../features/report/report.page';
import { CommentManagementPage } from '../features/comment/comment.page';
import { LearningAnalyticsPage } from '../features/analytics/learning-analytics.page';
import { UserAnalyticsPage } from '../features/analytics/user-analytics.page';
import { RevenueAnalyticsPage } from '../features/analytics/revenue-analytics.page';
import { EngagementAnalyticsPage } from '../features/analytics/engagement-analytics.page';
import { NotificationCenterPage } from '../features/notification/notification.page';
import { GeneralSettingsPage } from '../features/settings/general-settings.page';
import { LearningSettingsPage } from '../features/settings/learning-settings.page';
import { StorageMediaSettingsPage } from '../features/settings/storage-settings.page';
import { SecuritySettingsPage } from '../features/settings/security-settings.page';
import { PermissionsSettingsPage } from '../features/settings/permission.page';
import { ImportExportPage } from '../features/import-export/import-export.page';
import { SystemLogsPage } from '../features/logs/logs.page';
import { AchievementManagementPage } from '../features/gamification/achievement.page';
import { RewardPointsPage } from '../features/gamification/points.page';

export const AppRouter: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        {/* 1. Redirect gốc về phân vùng quản trị */}
        <Route path="/" element={<Navigate to="/admin" replace />} />

        {/* 2. Cấu hình phân vùng Quản trị */}
        <Route path="/admin" element={<AdminLayout />}>
          {/* Mặc định hiển thị Dashboard ngay khi vào /admin */}
          <Route index element={<DashboardPage />} />
          
          {/* Vẫn giữ path dashboard để hỗ trợ các liên kết cũ nếu cần */}
          <Route path="dashboard" element={<Navigate to="/admin" replace />} />
          
          <Route path="status" element={<SystemStatusPage />} />
          <Route path="users" element={<UserManagementPage />} />
          <Route path="users/:id" element={<UserDetailPage />} />
          <Route path="roles" element={<RolesPermissionsPage />} />
          <Route path="courses" element={<CourseListPage />} />
          <Route path="courses/:id" element={<CourseDetailPage />} />
          <Route path="categories" element={<CategoryPage />} />
          <Route path="course-builder" element={<CourseBuilderPage />} />
          <Route path="lessons" element={<LessonPage />} />
          <Route path="exercises" element={<ExercisePage />} />
          <Route path="quizzes" element={<QuizPage />} />
          <Route path="questions" element={<QuestionPage />} />
          <Route path="discussions" element={<DiscussionModerationPage />} />
          <Route path="reviews" element={<ReviewManagementPage />} />
          <Route path="reports" element={<ReportManagementPage />} />
          <Route path="comments" element={<CommentManagementPage />} />
          <Route path="analytics/learning" element={<LearningAnalyticsPage />} />
          <Route path="analytics/users" element={<UserAnalyticsPage />} />
          <Route path="analytics/revenue" element={<RevenueAnalyticsPage />} />
          <Route path="analytics/engagement" element={<EngagementAnalyticsPage />} />
          <Route path="notifications" element={<NotificationCenterPage />} />
          <Route path="settings/general" element={<GeneralSettingsPage />} />
          <Route path="settings/learning" element={<LearningSettingsPage />} />
          <Route path="settings/storage" element={<StorageMediaSettingsPage />} />
          <Route path="settings/security" element={<SecuritySettingsPage />} />
          <Route path="settings/permissions" element={<PermissionsSettingsPage />} />
          <Route path="tools/import-export" element={<ImportExportPage />} />
          <Route path="tools/logs" element={<SystemLogsPage />} />
          <Route path="gamification/achievements" element={<AchievementManagementPage />} />
          <Route path="gamification/points" element={<RewardPointsPage />} />
          
          {/* Phân vùng tắt */}
          <Route path="settings" element={<Navigate to="/admin/settings/general" replace />} />
          <Route path="analytics" element={<Navigate to="/admin/analytics/learning" replace />} />
          <Route path="tools" element={<Navigate to="/admin/tools/import-export" replace />} />
        </Route>

        {/* 3. Fallback */}
        <Route path="*" element={<Navigate to="/admin" replace />} />
      </Routes>
    </HashRouter>
  );
};
