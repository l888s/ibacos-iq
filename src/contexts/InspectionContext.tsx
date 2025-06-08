
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { defaultInspectionItems } from '@/data/inspectionItems';

export interface InspectionItem {
  id: string;
  category: string;
  subcategory: string;
  item: string;
  weight: number;
  score: number | null;
  scoreDescriptions: {
    0: string;
    1: string;
    2: string;
    3: string;
    4: string;
  };
}

export interface Inspection {
  id: string;
  neighborhood: string;
  date: string;
  status: 'in-progress' | 'completed';
  items: InspectionItem[];
  totalScore: number;
  maxScore: number;
  averageScore: number;
}

interface InspectionContextType {
  currentInspection: Inspection | null;
  savedInspections: Inspection[];
  startNewInspection: (neighborhood: string) => void;
  updateItemScore: (itemId: string, score: number) => void;
  saveInspection: () => void;
  submitInspection: () => void;
  loadInspection: (inspectionId: string) => void;
}

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
  const [savedInspections, setSavedInspections] = useState<Inspection[]>(() => {
    const saved = localStorage.getItem('ibacosiq_inspections');
    return saved ? JSON.parse(saved) : [];
  });

  const calculateAverageScore = (items: InspectionItem[]) => {
    const scoredItems = items.filter(item => item.score !== null);
    if (scoredItems.length === 0) return 0;
    
    const totalScore = scoredItems.reduce((sum, item) => sum + (item.score || 0), 0);
    return totalScore / scoredItems.length;
  };

  const startNewInspection = (neighborhood: string) => {
    // Check if there's already an in-progress inspection for this neighborhood
    const existingInspection = savedInspections.find(
      inspection => inspection.neighborhood === neighborhood && inspection.status === 'in-progress'
    );
    
    if (existingInspection) {
      // Load the existing inspection instead of creating a new one
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
  };

  const updateItemScore = (itemId: string, score: number) => {
    if (!currentInspection) return;
    
    const updatedItems = currentInspection.items.map(item =>
      item.id === itemId ? { ...item, score } : item
    );
    
    const totalScore = updatedItems.reduce((sum, item) => 
      sum + (item.score || 0), 0
    );
    
    const averageScore = calculateAverageScore(updatedItems);
    
    setCurrentInspection({
      ...currentInspection,
      items: updatedItems,
      totalScore,
      averageScore
    });
  };

  const saveInspection = () => {
    if (!currentInspection) return;
    
    const updatedInspections = savedInspections.filter(i => i.id !== currentInspection.id);
    updatedInspections.push(currentInspection);
    
    setSavedInspections(updatedInspections);
    localStorage.setItem('ibacosiq_inspections', JSON.stringify(updatedInspections));
  };

  const submitInspection = () => {
    if (!currentInspection) return;
    
    const completedInspection = {
      ...currentInspection,
      status: 'completed' as const
    };
    
    const updatedInspections = savedInspections.filter(i => i.id !== currentInspection.id);
    updatedInspections.push(completedInspection);
    
    setSavedInspections(updatedInspections);
    localStorage.setItem('ibacosiq_inspections', JSON.stringify(updatedInspections));
    setCurrentInspection(null);
  };

  const loadInspection = (inspectionId: string) => {
    const inspection = savedInspections.find(i => i.id === inspectionId);
    if (inspection) {
      setCurrentInspection(inspection);
    }
  };

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
