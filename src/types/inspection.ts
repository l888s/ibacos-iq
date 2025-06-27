
export interface InspectionItem {
  id: string;
  name?: string; // Make optional since we use 'item' instead
  category: string;
  subcategory: string;
  item: string;
  weight: number;
  score: number | string | null; // Allow string for 'N/O'
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
  inspectorName?: string;
  inspectorEmail?: string;
}

export interface InspectionContextType {
  currentInspection: Inspection | null;
  savedInspections: Inspection[];
  allCompletedInspections: Inspection[];
  setCurrentInspection: (inspection: Inspection | null) => void;
  startNewInspection: (neighborhood: string, forceNew?: boolean) => Promise<{ hasExisting: boolean; existingInspection?: Inspection; newInspection?: Inspection }>;
  continueExistingInspection: (neighborhood: string) => Promise<boolean>;
  updateItemScore: (itemId: string, score: number | string) => void;
  saveInspection: () => Promise<boolean>;
  submitInspection: () => Promise<void>;
  loadInspection: (inspectionId: string) => void;
  deleteInspection: () => Promise<void>;
  getAllInspections: () => Inspection[];
  getAllCompletedInspections: () => Inspection[];
  canDeleteCurrentInspection: () => boolean;
  hasInProgressInspection: (neighborhood: string) => boolean;
}
