
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
  },
  {
    id: 'plumbing-electrical-afci-protection',
    category: 'Plumbing and Electrical Systems',
    subcategory: 'Electrical Systems',
    item: 'AFCI Protection',
    weight: 5,
    scoreDescriptions: {
      0: 'Required AFCI protection was not installed.',
      1: 'AFCI protection was partially installed.',
      2: 'AFCI protection was installed per code requirements.',
      3: 'No score',
      4: 'AFCI protection exceeded code requirements.'
    }
  },
  // Plumbing Systems
  {
    id: 'plumbing-electrical-water-supply',
    category: 'Plumbing and Electrical Systems',
    subcategory: 'Plumbing Systems',
    item: 'Water Supply Lines',
    weight: 5,
    scoreDescriptions: {
      0: 'Water supply lines were poorly installed.',
      1: 'Water supply lines were installed with minor issues.',
      2: 'Water supply lines were properly installed per code.',
      3: 'No score',
      4: 'Water supply lines were installed better than code requirements.'
    }
  },
  {
    id: 'plumbing-electrical-drainage',
    category: 'Plumbing and Electrical Systems',
    subcategory: 'Plumbing Systems',
    item: 'Drainage Systems',
    weight: 5,
    scoreDescriptions: {
      0: 'Drainage systems were poorly installed.',
      1: 'Drainage systems were installed with minor issues.',
      2: 'Drainage systems were properly installed per code.',
      3: 'No score',
      4: 'Drainage systems were installed better than code requirements.'
    }
  },
  {
    id: 'plumbing-electrical-venting',
    category: 'Plumbing and Electrical Systems',
    subcategory: 'Plumbing Systems',
    item: 'Plumbing Venting',
    weight: 5,
    scoreDescriptions: {
      0: 'Plumbing venting was inadequate or missing.',
      1: 'Plumbing venting was marginally adequate.',
      2: 'Plumbing venting was properly installed per code.',
      3: 'No score',
      4: 'Plumbing venting exceeded code requirements.'
    }
  }
];
