
import { InspectionItem } from '@/types/inspection';

export const plumbingItems: Omit<InspectionItem, 'score'>[] = [
  {
    id: 'plumbing-fixture-installation',
    category: 'Plumbing',
    subcategory: 'Plumbing',
    item: 'Fixture Installation',
    weight: 7,
    scoreDescriptions: {
      0: 'Plumbing fixture installation was poorly executed.',
      1: 'Plumbing fixture installation was executed with minor deviations from code requirements.',
      2: 'Plumbing fixture installation was executed per code requirements.',
      3: 'No score',
      4: 'Plumbing fixture installation was executed better than code requirements.'
    }
  },
  {
    id: 'plumbing-pipe-installation',
    category: 'Plumbing',
    subcategory: 'Plumbing',
    item: 'Pipe Installation',
    weight: 7,
    scoreDescriptions: {
      0: 'Plumbing pipe installation was poorly executed.',
      1: 'Plumbing pipe installation was executed with minor deviations from code requirements.',
      2: 'Plumbing pipe installation was executed per code requirements.',
      3: 'No score',
      4: 'Plumbing pipe installation was executed better than code requirements.'
    }
  }
];
