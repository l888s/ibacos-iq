
import { InspectionItem } from '@/types/inspection';

export const calculateAverageScore = (items: InspectionItem[]): number => {
  const scoredItems = items.filter(item => item.score !== null);
  if (scoredItems.length === 0) return 0;
  
  const totalScore = scoredItems.reduce((sum, item) => sum + (item.score || 0), 0);
  const averageScore = totalScore / scoredItems.length;
  
  // Convert from 0-4 scale to 0-3.52 scale
  return (averageScore / 4) * 3.52;
};

export const calculateTotalScore = (items: InspectionItem[]): number => {
  const totalScore = items.reduce((sum, item) => sum + (item.score || 0), 0);
  // Convert from 0-4 scale to 0-3.52 scale
  return (totalScore / (items.length * 4)) * (items.length * 3.52);
};

export const calculateMaxScore = (items: InspectionItem[]): number => {
  return items.length * 3.52;
};
