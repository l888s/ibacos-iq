
import { InspectionItem } from '@/types/inspection';

export const calculateAverageScore = (items: InspectionItem[]): number => {
  const scoredItems = items.filter(item => item.score !== null);
  if (scoredItems.length === 0) return 0;
  
  const totalScore = scoredItems.reduce((sum, item) => sum + (item.score || 0), 0);
  return totalScore / scoredItems.length;
};

export const calculateTotalScore = (items: InspectionItem[]): number => {
  return items.reduce((sum, item) => sum + (item.score || 0), 0);
};

export const calculateMaxScore = (items: InspectionItem[]): number => {
  return items.length * 4;
};
