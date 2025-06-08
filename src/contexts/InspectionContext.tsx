
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { InspectionContextType, Inspection } from '@/types/inspection';
import { useInspectionStorage } from '@/hooks/useInspectionStorage';
import { useInspectionActions } from '@/hooks/useInspectionActions';

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
  
  const {
    savedInspections,
    saveInspectionToStorage,
    findExistingInspection,
    getInspectionById,
    deleteInspectionFromStorage
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

  const contextValue: InspectionContextType = {
    currentInspection,
    savedInspections,
    startNewInspection,
    continueExistingInspection,
    updateItemScore,
    saveInspection,
    submitInspection,
    loadInspection,
    deleteInspection
  };

  return (
    <InspectionContext.Provider value={contextValue}>
      {children}
    </InspectionContext.Provider>
  );
};

// Re-export types for convenience
export type { InspectionItem, Inspection } from '@/types/inspection';
