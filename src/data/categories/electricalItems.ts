
import { InspectionItem } from '@/types/inspection';

export const electricalItems: Omit<InspectionItem, 'score'>[] = [
  // Plumbing and Electrical Systems (4) - Electrical
  {
    id: 'plumbing-electrical-wiring-protection',
    category: 'Plumbing and Electrical Systems',
    subcategory: 'Electrical',
    item: 'Wiring Protection',
    weight: 4,
    scoreDescriptions: {
      0: 'Electrical wiring was not protected from damage during construction.',
      1: 'No score',
      2: 'Electrical wiring was protected from damage during construction with minor inconsistencies.',
      3: 'No score',
      4: 'All electrical wiring was properly protected from damage during construction.'
    }
  },
  {
    id: 'plumbing-electrical-outlet-installation',
    category: 'Plumbing and Electrical Systems',
    subcategory: 'Electrical',
    item: 'Outlet Installation',
    weight: 4,
    scoreDescriptions: {
      0: 'Electrical outlets were not installed according to code requirements.',
      1: 'No score',
      2: 'Electrical outlets were installed according to code requirements with minor inconsistencies.',
      3: 'No score',
      4: 'All electrical outlets were installed according to code requirements.'
    }
  },
  {
    id: 'plumbing-electrical-panel-installation',
    category: 'Plumbing and Electrical Systems',
    subcategory: 'Electrical',
    item: 'Panel Installation',
    weight: 4,
    scoreDescriptions: {
      0: 'Electrical panel was not installed according to manufacturer specifications.',
      1: 'No score',
      2: 'Electrical panel was installed according to manufacturer specifications with minor inconsistencies.',
      3: 'No score',
      4: 'Electrical panel was installed according to manufacturer specifications.'
    }
  }
];
