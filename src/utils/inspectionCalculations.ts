
import { InspectionItem } from '@/types/inspection';

export const calculateWeightedAverageScore = (items: InspectionItem[]): number => {
  // Group items by category and calculate weighted averages
  const categoryScores = new Map<string, { totalScore: number; totalWeight: number; itemCount: number }>();
  
  items.forEach(item => {
    if (item.score !== null && item.score !== 'N/O' && typeof item.score === 'number') {
      const category = item.category;
      const weight = item.weight;
      
      if (!categoryScores.has(category)) {
        categoryScores.set(category, { totalScore: 0, totalWeight: 0, itemCount: 0 });
      }
      
      const categoryData = categoryScores.get(category)!;
      categoryData.totalScore += item.score;
      categoryData.totalWeight = weight; // All items in a category have the same weight
      categoryData.itemCount += 1;
    }
  });
  
  let weightedSum = 0;
  let totalWeights = 0;
  
  categoryScores.forEach(({ totalScore, totalWeight, itemCount }) => {
    if (itemCount > 0) {
      const categoryAverage = totalScore / itemCount; // Average score for this category
      const convertedScore = (categoryAverage / 4) * 3.52; // Convert to 0-3.52 scale
      weightedSum += convertedScore * totalWeight;
      totalWeights += totalWeight;
    }
  });
  
  return totalWeights > 0 ? weightedSum / totalWeights : 0;
};

export const calculateAverageScore = (items: InspectionItem[]): number => {
  return calculateWeightedAverageScore(items);
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

export const getCategoryWeightedScores = (items: InspectionItem[]): Record<string, { score: number; weight: number; itemCount: number }> => {
  const categoryScores = new Map<string, { totalScore: number; weight: number; itemCount: number }>();
  
  items.forEach(item => {
    if (item.score !== null && item.score !== 'N/O' && typeof item.score === 'number') {
      const category = item.category;
      
      if (!categoryScores.has(category)) {
        categoryScores.set(category, { totalScore: 0, weight: item.weight, itemCount: 0 });
      }
      
      const categoryData = categoryScores.get(category)!;
      categoryData.totalScore += item.score;
      categoryData.itemCount += 1;
    }
  });
  
  const result: Record<string, { score: number; weight: number; itemCount: number }> = {};
  
  categoryScores.forEach((data, category) => {
    if (data.itemCount > 0) {
      const categoryAverage = data.totalScore / data.itemCount;
      const convertedScore = (categoryAverage / 4) * 3.52;
      result[category] = {
        score: convertedScore,
        weight: data.weight,
        itemCount: data.itemCount
      };
    }
  });
  
  return result;
};
