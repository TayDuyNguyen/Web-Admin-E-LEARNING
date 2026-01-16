
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
          <Route path="/admin/lessons" element={<LessonPage />} />
          <Route path="/admin/exercises" element={<ExercisePage />} />
          <Route path="/admin/quizzes" element={<QuizPage />} />
          <Route path="/admin/questions" element={<QuestionPage />} />
          <Route path="/admin/discussions" element={<DiscussionModerationPage />} />
          <Route path="/admin/reviews" element={<ReviewManagementPage />} />
          <Route path="/admin/reports" element={<ReportManagementPage />} />
          <Route path="/admin/comments" element={<CommentManagementPage />} />
          <Route path="/admin/analytics/learning" element={<LearningAnalyticsPage />} />
          <Route path="/admin/analytics/users" element={<UserAnalyticsPage />} />
          <Route path="/admin/analytics/revenue" element={<RevenueAnalyticsPage />} />
          <Route path="/admin/analytics/engagement" element={<EngagementAnalyticsPage />} />
          <Route path="/admin/notifications" element={<NotificationCenterPage />} />
          <Route path="/admin/settings/general" element={<GeneralSettingsPage />} />
          <Route path="/admin/settings/learning" element={<LearningSettingsPage />} />
          <Route path="/admin/settings/storage" element={<StorageMediaSettingsPage />} />
          <Route path="/admin/settings/security" element={<SecuritySettingsPage />} />
          <Route path="/admin/settings/permissions" element={<PermissionsSettingsPage />} />
          <Route path="/admin/tools/import-export" element={<ImportExportPage />} />
          <Route path="/admin/tools/logs" element={<SystemLogsPage />} />
          <Route path="/admin/gamification/achievements" element={<AchievementManagementPage />} />
          <Route path="/admin/gamification/points" element={<RewardPointsPage />} />
          
          <Route path="/admin/settings" element={<Navigate to="/admin/settings/general" replace />} />
          <Route path="/admin/analytics" element={<Navigate to="/admin/analytics/learning" replace />} />
          <Route path="/admin/assignments" element={<Navigate to="/admin/exercises" replace />} />
          <Route path="/admin/content" element={<div className="p-8">Nội dung - Coming Soon</div>} />
          <Route path="/admin/community" element={<Navigate to="/admin/discussions" replace />} />
          <Route path="/admin/tools" element={<Navigate to="/admin/tools/import-export" replace />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};
