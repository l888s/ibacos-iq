
import { useState, useCallback, useEffect } from 'react';
import { Inspection } from '@/types/inspection';
import { inspectionService } from '@/services/inspectionService';

export const useInspectionStorage = () => {
  const [savedInspections, setSavedInspections] = useState<Inspection[]>([]);
  const [loading, setLoading] = useState(true);

  // Load inspections from database on mount
  useEffect(() => {
    loadInspections();
  }, []);

  const loadInspections = async () => {
    setLoading(true);
    try {
      const inspections = await inspectionService.getAllInspections();
      setSavedInspections(inspections);
    } catch (error) {
      console.error('Error loading inspections:', error);
    } finally {
      setLoading(false);
    }
  };

  const saveInspectionToStorage = useCallback(async (inspection: Inspection) => {
    const success = await inspectionService.saveInspection(inspection);
    if (success) {
      // Reload inspections to get the latest data
      await loadInspections();
    }
    return success;
  }, []);

  const findExistingInspection = useCallback(async (neighborhood: string) => {
    return await inspectionService.findExistingInProgressInspection(neighborhood);
  }, []);

  const getInspectionById = useCallback((inspectionId: string) => {
    return savedInspections.find(i => i.id === inspectionId);
  }, [savedInspections]);

  const deleteInspectionFromStorage = useCallback(async (inspectionId: string) => {
    const success = await inspectionService.deleteInspection(inspectionId);
    if (success) {
      // Reload inspections to get the latest data
      await loadInspections();
    }
    return success;
  }, []);

  const getAllInspections = useCallback(() => {
    return savedInspections;
  }, [savedInspections]);

  return {
    savedInspections,
    setSavedInspections,
    saveInspectionToStorage,
    findExistingInspection,
    getInspectionById,
    deleteInspectionFromStorage,
    getAllInspections,
    loading
  };
};
