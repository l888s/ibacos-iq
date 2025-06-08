
import { useState, useCallback } from 'react';
import { Inspection } from '@/types/inspection';

export const useInspectionStorage = () => {
  const [savedInspections, setSavedInspections] = useState<Inspection[]>(() => {
    const saved = localStorage.getItem('ibacosiq_inspections');
    return saved ? JSON.parse(saved) : [];
  });

  const saveInspectionToStorage = useCallback((inspection: Inspection) => {
    const updatedInspections = savedInspections.filter(i => i.id !== inspection.id);
    updatedInspections.push(inspection);
    
    setSavedInspections(updatedInspections);
    localStorage.setItem('ibacosiq_inspections', JSON.stringify(updatedInspections));
  }, [savedInspections]);

  const findExistingInspection = useCallback((neighborhood: string) => {
    return savedInspections.find(
      inspection => inspection.neighborhood === neighborhood && inspection.status === 'in-progress'
    );
  }, [savedInspections]);

  const getInspectionById = useCallback((inspectionId: string) => {
    return savedInspections.find(i => i.id === inspectionId);
  }, [savedInspections]);

  return {
    savedInspections,
    setSavedInspections,
    saveInspectionToStorage,
    findExistingInspection,
    getInspectionById
  };
};
