
import { LearningSettings } from '../../shared/types/learning-settings';

export const fetchLearningSettings = async (): Promise<LearningSettings> => {
  await new Promise(r => setTimeout(r, 500));
  return {
    videoQuality: 'HD (720p)',
    allowDownload: true,
    maxAttempts: 3,
    scoringMethod: 'Điểm cao nhất',
    defaultTimeLimit: 45,
    minPassScore: 80,
    require100Completion: true,
    enableReviews: true,
    requireReviewApproval: false,
  };
};

export const updateLearningSettings = async (data: LearningSettings): Promise<boolean> => {
  await new Promise(r => setTimeout(r, 800));
  console.log('Learning settings updated:', data);
  return true;
};
