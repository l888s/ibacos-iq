
import { InspectionItem } from '@/types/inspection';

export const interiorItems: Omit<InspectionItem, 'score'>[] = [
  // Interior Finishes (4) - Windows and Doors
  {
    id: 'interior-finishes-smooth-operation',
    category: 'Interior Finishes',
    subcategory: 'Windows and Doors',
    item: 'Smooth Operation',
    weight: 4,
    scoreDescriptions: {
      0: 'Windows and doors did not open or close easily, indicating possible issues with installation.',
      1: 'No score',
      2: 'Finished windows and doors opened and closed smoothly, and all locks were able to be operated, with minor inconsistencies.',
      3: 'No score',
      4: 'All finished windows and doors opened and closed smoothly, and all locks were able to be operated.'
    }
  }
];
