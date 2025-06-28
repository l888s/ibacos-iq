
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { InspectionContextType, Inspection } from '@/types/inspection';
import { useInspectionStorage } from '@/hooks/useInspectionStorage';
import { useInspectionActions } from '@/hooks/useInspectionActions';
import { useAuth } from '@/contexts/AuthContext';

const InspectionContext = createContext<InspectionContextType | undefined>(undefined);

export const useInspection = () => {
  const context = useContext(InspectionContext);
  if (context === undefined) {
    throw new Error('useInspection must be used within an InspectionProvider');
  }
  return context;
};

interface InspectionProviderProps {
  children: ReactNode;
}

export const InspectionProvider: React.FC<InspectionProviderProps> = ({ children }) => {
  const [currentInspection, setCurrentInspection] = useState<Inspection | null>(null);
  const { user } = useAuth();
  
  const {
    savedInspections,
    saveInspectionToStorage,
    findExistingInspection,
    getInspectionById,
    deleteInspectionFromStorage,
    getAllInspections,
    loading
  } = useInspectionStorage();

  const {
    startNewInspection,
    continueExistingInspection,
    updateItemScore,
    saveInspection,
    submitInspection,
    loadInspection,
    deleteInspection
  } = useInspectionActions({
    currentInspection,
    setCurrentInspection,
    saveInspectionToStorage,
    findExistingInspection,
    getInspectionById,
    deleteInspectionFromStorage
  });

  // Debug current inspection when it changes
  useEffect(() => {
    if (currentInspection) {
      console.log('=== CURRENT INSPECTION DEBUG ===');
      console.log('Current inspection ID:', currentInspection.id);
      console.log('Current inspection ID type:', typeof currentInspection.id);
      console.log('Is valid UUID?', /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(currentInspection.id));
      console.log('Current inspection:', currentInspection);
      console.log('=== END CURRENT INSPECTION DEBUG ===');
    }
  }, [currentInspection]);

  // Get all completed inspections (status === 'completed')
  const getAllCompletedInspections = () => {
    return savedInspections.filter(inspection => inspection.status === 'completed');
  };

  // Check if current inspection can be deleted
  const canDeleteCurrentInspection = () => {
    if (!currentInspection) return false;
    
    // Allow lewis.bedford@starlighthomes.com to delete any inspection
    if (user?.email === 'lewis.bedford@starlighthomes.com') {
      return true;
    }
    
    // For everyone else, only allow deletion of in-progress inspections
    return currentInspection.status === 'in-progress';
  };

  // Check if a neighborhood has an in-progress inspection
  const hasInProgressInspection = (neighborhood: string) => {
    return savedInspections.some(
      inspection => inspection.neighborhood === neighborhood && inspection.status === 'in-progress'
    );
  };

  // Clear current inspection when starting fresh (e.g., from dashboard)
  const clearCurrentInspection = () => {
    console.log('Clearing current inspection');
    setCurrentInspection(null);
  };

  const contextValue: InspectionContextType = {
    currentInspection,
    savedInspections,
    allCompletedInspections: getAllCompletedInspections(),
    setCurrentInspection,
    startNewInspection,
    continueExistingInspection,
    updateItemScore,
    saveInspection,
    submitInspection,
    loadInspection,
    deleteInspection,
    getAllInspections,
    getAllCompletedInspections,
    canDeleteCurrentInspection,
    hasInProgressInspection,
    clearCurrentInspection
  };

  return (
    <InspectionContext.Provider value={contextValue}>
      {children}
    </InspectionContext.Provider>
  );
};

// Re-export types for convenience
export type { InspectionItem, Inspection } from '@/types/inspection';
