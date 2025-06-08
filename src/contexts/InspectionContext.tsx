
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
    getInspectionById
  } = useInspectionStorage();

  const {
    startNewInspection,
    updateItemScore,
    saveInspection,
    submitInspection,
    loadInspection
  } = useInspectionActions({
    currentInspection,
    setCurrentInspection,
    saveInspectionToStorage,
    findExistingInspection,
    getInspectionById
  });

  return (
    <InspectionContext.Provider value={{
      currentInspection,
      savedInspections,
      startNewInspection,
      updateItemScore,
      saveInspection,
      submitInspection,
      loadInspection
    }}>
      {children}
    </InspectionContext.Provider>
  );
};

// Re-export types for convenience
export type { InspectionItem, Inspection } from '@/types/inspection';
