
import { InspectionItem } from '@/types/inspection';

export const showersAndTubsItems: Omit<InspectionItem, 'score'>[] = [
  // Showers and Tubs (8) - Bathtubs with Shower Heads
  {
    id: 'showers-tubs-caulk-premanufactured',
    category: 'Showers and Tubs',
    subcategory: 'Bathtubs with Shower Heads',
    item: 'Caulk (premanufactured panels)',
    weight: 8,
    scoreDescriptions: {
      0: 'Caulk was not applied between the tub and surround panels where required by the manufacturer.',
      1: 'No score',
      2: 'No score',
      3: 'No score',
      4: 'Caulk was applied between the tub and surround panels where required by the manufacturer.'
    }
  },
  {
    id: 'showers-tubs-caulk-bathtub-tub-surround',
    category: 'Showers and Tubs',
    subcategory: 'Bathtubs with Shower Heads',
    item: 'Premanufactured Tub Surrounds',
    weight: 8,
    scoreDescriptions: {
      0: 'Surround panels were not installed plumb or square.',
      1: 'No score',
      2: 'No score',
      3: 'No score',
      4: 'Surround panels were consistently installed plumb and square..'
    }
  },
// Showers and Tubs (8) - Preformed Shower Pan/Solid Surface
  {
    id: 'showers-tubs-caulk-premanufactured',
    category: 'Showers and Tubs',
    subcategory: 'Preformed Shower Pan',
    item: 'Caulk (premanufactured panels)',
    weight: 8,
    scoreDescriptions: {
      0: 'Caulk was not applied between the tub and surround panels where required by the manufacturer.',
      1: 'No score',
      2: 'No score',
      3: 'No score',
      4: 'Caulk was applied between the pan and surround panels where required by the manufacturer.'
    }
  },
  
];
