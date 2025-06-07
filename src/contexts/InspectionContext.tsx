
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

export interface InspectionItem {
  id: string;
  name: string;
  description: string;
  score: number | null;
  category: string;
}

export interface Inspection {
  id: string;
  neighborhood: string;
  date: string;
  items: InspectionItem[];
  status: 'draft' | 'completed';
  totalScore: number;
  maxScore: number;
}

interface InspectionContextType {
  currentInspection: Inspection | null;
  savedInspections: Inspection[];
  startNewInspection: (neighborhood: string) => void;
  updateInspectionItem: (itemId: string, score: number) => void;
  saveInspection: () => void;
  submitInspection: () => void;
  loadInspection: (id: string) => void;
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

const inspectionItems: Omit<InspectionItem, 'score'>[] = [
  { id: '1', name: 'Site Preparation', description: '0: Poor site prep, 4: Excellent site prep with proper grading', category: 'Site' },
  { id: '2', name: 'Foundation Quality', description: '0: Major foundation issues, 4: Perfect foundation work', category: 'Foundation' },
  { id: '3', name: 'Concrete Work', description: '0: Poor concrete finish, 4: Professional concrete work', category: 'Foundation' },
  { id: '4', name: 'Framing Structure', description: '0: Poor framing, 4: Excellent structural framing', category: 'Framing' },
  { id: '5', name: 'Roof Installation', description: '0: Poor roofing, 4: Professional roof installation', category: 'Framing' },
  { id: '6', name: 'HVAC Installation', description: '0: Poor HVAC work, 4: Professional HVAC installation', category: 'HVAC' },
  { id: '7', name: 'Ductwork Quality', description: '0: Poor ductwork, 4: Excellent ductwork installation', category: 'HVAC' },
  { id: '8', name: 'Electrical Wiring', description: '0: Poor electrical work, 4: Professional electrical installation', category: 'Electrical' },
  { id: '9', name: 'Panel Installation', description: '0: Poor panel work, 4: Professional panel installation', category: 'Electrical' },
  { id: '10', name: 'Plumbing Installation', description: '0: Poor plumbing, 4: Professional plumbing work', category: 'Plumbing' },
  { id: '11', name: 'Fixture Quality', description: '0: Poor fixtures, 4: High-quality fixture installation', category: 'Plumbing' },
  { id: '12', name: 'Insulation Quality', description: '0: Poor insulation, 4: Excellent insulation installation', category: 'Insulation' },
  { id: '13', name: 'Drywall Finish', description: '0: Poor drywall work, 4: Professional drywall finish', category: 'Interior' },
  { id: '14', name: 'Paint Quality', description: '0: Poor paint job, 4: Professional paint finish', category: 'Interior' },
  { id: '15', name: 'Flooring Installation', description: '0: Poor flooring, 4: Professional flooring installation', category: 'Interior' },
];

export const InspectionProvider: React.FC<InspectionProviderProps> = ({ children }) => {
  const [currentInspection, setCurrentInspection] = useState<Inspection | null>(null);
  const [savedInspections, setSavedInspections] = useState<Inspection[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('ibacosiq_inspections');
    if (saved) {
      setSavedInspections(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('ibacosiq_inspections', JSON.stringify(savedInspections));
  }, [savedInspections]);

  const startNewInspection = (neighborhood: string) => {
    const newInspection: Inspection = {
      id: Date.now().toString(),
      neighborhood,
      date: new Date().toISOString(),
      items: inspectionItems.map(item => ({ ...item, score: null })),
      status: 'draft',
      totalScore: 0,
      maxScore: inspectionItems.length * 4,
    };
    setCurrentInspection(newInspection);
  };

  const updateInspectionItem = (itemId: string, score: number) => {
    if (!currentInspection) return;
    
    const updatedItems = currentInspection.items.map(item =>
      item.id === itemId ? { ...item, score } : item
    );
    
    const totalScore = updatedItems.reduce((sum, item) => sum + (item.score || 0), 0);
    
    setCurrentInspection({
      ...currentInspection,
      items: updatedItems,
      totalScore,
    });
  };

  const saveInspection = () => {
    if (!currentInspection) return;
    
    setSavedInspections(prev => {
      const existing = prev.findIndex(i => i.id === currentInspection.id);
      if (existing >= 0) {
        return prev.map(i => i.id === currentInspection.id ? currentInspection : i);
      }
      return [...prev, currentInspection];
    });
  };

  const submitInspection = () => {
    if (!currentInspection) return;
    
    const completedInspection = { ...currentInspection, status: 'completed' as const };
    setCurrentInspection(completedInspection);
    
    setSavedInspections(prev => {
      const existing = prev.findIndex(i => i.id === completedInspection.id);
      if (existing >= 0) {
        return prev.map(i => i.id === completedInspection.id ? completedInspection : i);
      }
      return [...prev, completedInspection];
    });
  };

  const loadInspection = (id: string) => {
    const inspection = savedInspections.find(i => i.id === id);
    if (inspection) {
      setCurrentInspection(inspection);
    }
  };

  return (
    <InspectionContext.Provider value={{
      currentInspection,
      savedInspections,
      startNewInspection,
      updateInspectionItem,
      saveInspection,
      submitInspection,
      loadInspection,
    }}>
      {children}
    </InspectionContext.Provider>
  );
};
