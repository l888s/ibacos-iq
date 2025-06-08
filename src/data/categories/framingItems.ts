
import { InspectionItem } from '@/types/inspection';

export const framingItems: Omit<InspectionItem, 'score'>[] = [
  // Framing (6) - Engineered Roof Truss Framing
  {
    id: 'framing-truss-bracing',
    category: 'Framing',
    subcategory: 'Engineered Roof Truss Framing',
    item: 'Bracing',
    weight: 6,
    scoreDescriptions: {
      0: 'The truss assembly was missing the required bracing.',
      1: 'No score',
      2: 'Bracing was installed to connect trusses together, with minor inconsistencies.',
      3: 'No score',
      4: 'Bracing was installed in accordance with the truss manufacturer\'s specifications, which allowed the trusses to act as a complete system, and gable end walls were correctly braced.'
    }
  }
];
