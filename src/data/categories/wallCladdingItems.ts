
import { InspectionItem } from '@/types/inspection';

export const wallCladdingItems: Omit<InspectionItem, 'score'>[] = [
  // Wall Cladding (10) - Brick/Stone Veneer
  {
    id: 'wall-cladding-brick-air-space',
    category: 'Wall Cladding',
    subcategory: 'Brick/Stone Veneer',
    item: 'Air Space',
    weight: 10,
    scoreDescriptions: {
      0: 'No air space was provided behind the brick veneer.',
      1: 'No score',
      2: 'The air space provided behind the brick veneer was less than 1" or greater than 2".',
      3: 'No score',
      4: 'A consistent 1" air space was provided behind all brick veneer.'
    }
  }
];
