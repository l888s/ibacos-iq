
import { InspectionItem } from '@/types/inspection';

export const plumbingItems: Omit<InspectionItem, 'score'>[] = [
  // Plumbing and Electrical Systems (4) - Plumbing
  {
    id: 'plumbing-electrical-pipe-support',
    category: 'Plumbing and Electrical Systems',
    subcategory: 'Plumbing',
    item: 'Pipe Support and Hangers',
    weight: 4,
    scoreDescriptions: {
      0: 'Plumbing pipes were not properly supported according to code requirements.',
      1: 'No score',
      2: 'Plumbing pipes were supported according to code requirements with minor inconsistencies.',
      3: 'No score',
      4: 'All plumbing pipes were properly supported according to code requirements.'
    }
  },
  {
    id: 'plumbing-electrical-water-pressure',
    category: 'Plumbing and Electrical Systems',
    subcategory: 'Plumbing',
    item: 'Water Pressure Testing',
    weight: 4,
    scoreDescriptions: {
      0: 'Water pressure testing was not performed or failed.',
      1: 'No score',
      2: 'Water pressure testing was performed with minor issues identified.',
      3: 'No score',
      4: 'Water pressure testing was performed and passed all requirements.'
    }
  },
  {
    id: 'plumbing-electrical-fixture-installation',
    category: 'Plumbing and Electrical Systems',
    subcategory: 'Plumbing',
    item: 'Fixture Installation',
    weight: 4,
    scoreDescriptions: {
      0: 'Plumbing fixtures were not installed according to manufacturer specifications.',
      1: 'No score',
      2: 'Plumbing fixtures were installed according to manufacturer specifications with minor inconsistencies.',
      3: 'No score',
      4: 'All plumbing fixtures were installed according to manufacturer specifications.'
    }
  }
];
