
import { useMemo } from 'react';
import { Inspection } from '@/types/inspection';
import { useInspectionStorage } from '@/hooks/useInspectionStorage';

export const useDashboardData = () => {
  const { savedInspections, loading } = useInspectionStorage();

  const { neighborhoodData, recentInspections, totalInspections, avgScore } = useMemo(() => {
    // Generate neighborhood data from actual completed inspections
    const neighborhoodData = savedInspections
      .filter(i => i.status === 'completed')
      .reduce((acc, inspection) => {
        const existing = acc.find(item => item.neighborhood === inspection.neighborhood);
        if (existing) {
          existing.avgScore = (existing.avgScore + inspection.averageScore) / 2;
          existing.count++;
        } else {
          acc.push({
            neighborhood: inspection.neighborhood,
            avgScore: inspection.averageScore,
            count: 1
          });
        }
        return acc;
      }, [] as { neighborhood: string; avgScore: number; count: number }[])
      .slice(0, 10); // Show top 10 neighborhoods

    const recentInspections = savedInspections
      .filter(i => i.status === 'completed')
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, 3);

    const totalInspections = savedInspections.filter(i => i.status === 'completed').length;
    const avgScore = savedInspections.length > 0 
      ? Number((savedInspections
          .filter(i => i.status === 'completed')
          .reduce((sum, i) => sum + i.averageScore, 0) / totalInspections).toFixed(2))
      : 0;

    return {
      neighborhoodData,
      recentInspections,
      totalInspections,
      avgScore
    };
  }, [savedInspections]);

  return {
    inspections: savedInspections,
    neighborhoods: [], // This can be removed or populated from a neighborhoods service if needed
    loading,
    neighborhoodData,
    recentInspections,
    totalInspections,
    avgScore
  };
};
