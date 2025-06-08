
export interface InspectionItem {
  id: string;
  category: string;
  subcategory: string;
  item: string;
  weight: number;
  score: number | string | null;
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

export interface InspectionContextType {
  currentInspection: Inspection | null;
  savedInspections: Inspection[];
  setCurrentInspection: (inspection: Inspection | null) => void;
  startNewInspection: (neighborhood: string, forceNew?: boolean) => any;
  continueExistingInspection: (neighborhood: string) => boolean;
  updateItemScore: (itemId: string, score: number | string) => void;
  saveInspection: () => void;
  submitInspection: () => void;
  loadInspection: (inspectionId: string) => void;
  deleteInspection: () => void;
}
