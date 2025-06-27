
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
    hasInProgressInspection
  };

  return (
    <InspectionContext.Provider value={contextValue}>
      {children}
    </InspectionContext.Provider>
  );
};

// Re-export types for convenience
export type { InspectionItem, Inspection } from '@/types/inspection';
