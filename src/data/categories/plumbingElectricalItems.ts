
import { InspectionItem } from '@/types/inspection';

export const plumbingElectricalItems: Omit<InspectionItem, 'score'>[] = [
  // Plumbing and Electrical Systems (5) - Electrical Systems
  {
    id: 'plumbing-electrical-gfci-receptacles',
    category: 'Plumbing and Electrical Systems',
    subcategory: 'Electrical Systems',
    item: 'GFCI Receptacles',
    weight: 5,
    scoreDescriptions: {
      0: 'Exterior, garage, basement, bathroom, and kitchen receptacles within 6\' of the kitchen sink were not GFCI receptacles.',
      1: 'No score',
      2: 'Exterior, garage, basement, bathroom, and kitchen receptacles within 6\' of the kitchen sink were GFCI, while other ones farther away were standard receptacles.',
      3: 'No score',
      4: 'All exterior, garage, basement, bathroom, and kitchen receptacles within 6\' of the kitchen sink were GFCI protected receptacles.'
    }
  }
];
