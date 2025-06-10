
export interface InspectionItem {
  id: string;
  name: string;
  category: string;
  weight: number;
  score: number | string | null;
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
  inspectorName?: string;
  inspectorEmail?: string;
}

export interface InspectionContextType {
  currentInspection: Inspection | null;
  savedInspections: Inspection[];
  setCurrentInspection: (inspection: Inspection | null) => void;
  startNewInspection: (neighborhood: string, forceNew?: boolean) => { hasExisting: boolean; existingInspection?: Inspection; newInspection?: Inspection };
  continueExistingInspection: (neighborhood: string) => boolean;
  updateItemScore: (itemId: string, score: number | string) => void;
  saveInspection: () => void;
  submitInspection: () => Promise<void>;
  loadInspection: (inspectionId: string) => void;
  deleteInspection: () => void;
  getAllInspections: () => Inspection[];
}
