
import { InspectionItem } from '@/types/inspection';

export const calculateAverageScore = (items: InspectionItem[]): number => {
  const scoredItems = items.filter(item => item.score !== null && item.score !== 'N/O');
  if (scoredItems.length === 0) return 0;
  
  const totalScore = scoredItems.reduce((sum, item) => sum + (typeof item.score === 'number' ? item.score : 0), 0);
  const averageScore = totalScore / scoredItems.length;
  
  // Convert from 0-4 scale to 0-3.52 scale
  return (averageScore / 4) * 3.52;
};

export const calculateTotalScore = (items: InspectionItem[]): number => {
  const scoredItems = items.filter(item => item.score !== null && item.score !== 'N/O');
  const totalScore = scoredItems.reduce((sum, item) => sum + (typeof item.score === 'number' ? item.score : 0), 0);
  
  // Convert from 0-4 scale to 0-3.52 scale, only count items that were actually scored
  return (totalScore / (scoredItems.length * 4)) * (scoredItems.length * 3.52);
};

export const calculateMaxScore = (items: InspectionItem[]): number => {
  const scorableItems = items.filter(item => item.score !== 'N/O');
  return scorableItems.length * 3.52;
};
