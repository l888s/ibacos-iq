
import { InspectionItem } from '@/types/inspection';

export const framingItems: Omit<InspectionItem, 'score'>[] = [
  {
    id: 'framing-floor-framing',
    category: 'Framing',
    subcategory: 'Framing',
    item: 'Floor Framing',
    weight: 8,
    scoreDescriptions: {
      0: 'Floor framing was not constructed per the structural plans.',
      1: 'Floor framing was constructed mostly per the structural plans with minor deviations.',
      2: 'Floor framing was constructed per the structural plans.',
      3: 'No score',
      4: 'Floor framing was constructed better than the structural plans.'
    }
  },
  {
    id: 'framing-roof-framing',
    category: 'Framing',
    subcategory: 'Framing',
    item: 'Roof Framing',
    weight: 8,
    scoreDescriptions: {
      0: 'Roof framing was not constructed per the structural plans.',
      1: 'Roof framing was constructed mostly per the structural plans with minor deviations.',
      2: 'Roof framing was constructed per the structural plans.',
      3: 'No score',
      4: 'Roof framing was constructed better than the structural plans.'
    }
  },
  {
    id: 'framing-sheathing',
    category: 'Framing',
    subcategory: 'Framing',
    item: 'Sheathing',
    weight: 8,
    scoreDescriptions: {
      0: 'Sheathing was not installed per the structural plans.',
      1: 'Sheathing was installed mostly per the structural plans with minor deviations.',
      2: 'Sheathing was installed per the structural plans.',
      3: 'No score',
      4: 'Sheathing was installed better than the structural plans.'
    }
  },
  {
    id: 'framing-wall-framing',
    category: 'Framing',
    subcategory: 'Framing',
    item: 'Wall Framing',
    weight: 8,
    scoreDescriptions: {
      0: 'Wall framing was not constructed per the structural plans.',
      1: 'Wall framing was constructed mostly per the structural plans with minor deviations.',
      2: 'Wall framing was constructed per the structural plans.',
      3: 'No score',
      4: 'Wall framing was constructed better than the structural plans.'
    }
  }
];
