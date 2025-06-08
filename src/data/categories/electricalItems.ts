
import { InspectionItem } from '@/types/inspection';

export const electricalItems: Omit<InspectionItem, 'score'>[] = [
  {
    id: 'electrical-panel-installation',
    category: 'Electrical',
    subcategory: 'Electrical',
    item: 'Panel Installation',
    weight: 8,
    scoreDescriptions: {
      0: 'Electrical panel installation was poorly executed.',
      1: 'Electrical panel installation was executed with minor deviations from code requirements.',
      2: 'Electrical panel installation was executed per code requirements.',
      3: 'No score',
      4: 'Electrical panel installation was executed better than code requirements.'
    }
  },
  {
    id: 'electrical-rough-wiring',
    category: 'Electrical',
    subcategory: 'Electrical',
    item: 'Rough Wiring',
    weight: 8,
    scoreDescriptions: {
      0: 'Electrical rough wiring was poorly executed.',
      1: 'Electrical rough wiring was executed with minor deviations from code requirements.',
      2: 'Electrical rough wiring was executed per code requirements.',
      3: 'No score',
      4: 'Electrical rough wiring was executed better than code requirements.'
    }
  }
];
