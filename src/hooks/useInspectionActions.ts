
import { useCallback } from 'react';
import { Inspection, InspectionItem } from '@/types/inspection';
import { defaultInspectionItems } from '@/data/inspectionItems';
import { calculateAverageScore, calculateTotalScore } from '@/utils/inspectionCalculations';

interface UseInspectionActionsProps {
  currentInspection: Inspection | null;
  setCurrentInspection: (inspection: Inspection | null) => void;
  saveInspectionToStorage: (inspection: Inspection) => void;
  findExistingInspection: (neighborhood: string) => Inspection | undefined;
  getInspectionById: (inspectionId: string) => Inspection | undefined;
}

export const useInspectionActions = ({
  currentInspection,
  setCurrentInspection,
  saveInspectionToStorage,
  findExistingInspection,
  getInspectionById
}: UseInspectionActionsProps) => {
  
  const startNewInspection = useCallback((neighborhood: string) => {
    const existingInspection = findExistingInspection(neighborhood);
    
    if (existingInspection) {
      setCurrentInspection(existingInspection);
      return;
    }

    const newInspection: Inspection = {
      id: Date.now().toString(),
      neighborhood,
      date: new Date().toISOString(),
      status: 'in-progress',
      items: defaultInspectionItems.map(item => ({
        ...item,
        score: null
      })),
      totalScore: 0,
      maxScore: defaultInspectionItems.length * 4,
      averageScore: 0
    };
    setCurrentInspection(newInspection);
  }, [findExistingInspection, setCurrentInspection]);

  const updateItemScore = useCallback((itemId: string, score: number | string) => {
    if (!currentInspection) return;
    
    const updatedItems = currentInspection.items.map(item =>
      item.id === itemId ? { ...item, score } : item
    );
    
    const totalScore = calculateTotalScore(updatedItems);
    const averageScore = calculateAverageScore(updatedItems);
    
    setCurrentInspection({
      ...currentInspection,
      items: updatedItems,
      totalScore,
      averageScore
    });
  }, [currentInspection, setCurrentInspection]);

  const saveInspection = useCallback(() => {
    if (!currentInspection) return;
    saveInspectionToStorage(currentInspection);
  }, [currentInspection, saveInspectionToStorage]);

  const submitInspection = useCallback(() => {
    if (!currentInspection) return;
    
    const completedInspection = {
      ...currentInspection,
      status: 'completed' as const
    };
    
    saveInspectionToStorage(completedInspection);
    setCurrentInspection(null);
  }, [currentInspection, saveInspectionToStorage, setCurrentInspection]);

  const loadInspection = useCallback((inspectionId: string) => {
    const inspection = getInspectionById(inspectionId);
    if (inspection) {
      setCurrentInspection(inspection);
    }
  }, [getInspectionById, setCurrentInspection]);

  return {
    startNewInspection,
    updateItemScore,
    saveInspection,
    submitInspection,
    loadInspection
  };
};
