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
  deleteInspectionFromStorage: (inspectionId: string) => void;
}

export const useInspectionActions = ({
  currentInspection,
  setCurrentInspection,
  saveInspectionToStorage,
  findExistingInspection,
  getInspectionById,
  deleteInspectionFromStorage
}: UseInspectionActionsProps) => {
  
  const startNewInspection = useCallback((neighborhood: string, forceNew: boolean = false) => {
    console.log('Starting inspection for neighborhood:', neighborhood, 'forceNew:', forceNew);
    console.log('Default inspection items available:', defaultInspectionItems.length);
    
    const existingInspection = findExistingInspection(neighborhood);
    
    // If there's an existing inspection and we're not forcing a new one, don't automatically load it
    if (existingInspection && !forceNew) {
      console.log('Found existing inspection, but not auto-loading:', existingInspection);
      // Don't automatically load - let the user choose
      return { hasExisting: true, existingInspection };
    }

    // If forcing new or no existing inspection, create a new one
    console.log('Creating new inspection with items from categories:', [...new Set(defaultInspectionItems.map(item => item.category))]);

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
    
    console.log('New inspection created with items:', newInspection.items.length);
    console.log('Categories in new inspection:', [...new Set(newInspection.items.map(item => item.category))]);
    
    setCurrentInspection(newInspection);
    return { hasExisting: false, newInspection };
  }, [findExistingInspection, setCurrentInspection]);

  const continueExistingInspection = useCallback((neighborhood: string) => {
    const existingInspection = findExistingInspection(neighborhood);
    if (existingInspection) {
      console.log('Loading existing inspection:', existingInspection);
      setCurrentInspection(existingInspection);
      return true;
    }
    return false;
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

  const deleteInspection = useCallback(() => {
    if (!currentInspection) return;
    
    deleteInspectionFromStorage(currentInspection.id);
    setCurrentInspection(null);
  }, [currentInspection, deleteInspectionFromStorage, setCurrentInspection]);

  return {
    startNewInspection,
    continueExistingInspection,
    updateItemScore,
    saveInspection,
    submitInspection,
    loadInspection,
    deleteInspection
  };
};
