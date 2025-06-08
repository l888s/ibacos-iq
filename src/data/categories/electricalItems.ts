
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
  },
  {
    id: 'electrical-outlet-installation',
    category: 'Electrical',
    subcategory: 'Electrical',
    item: 'Outlet Installation',
    weight: 8,
    scoreDescriptions: {
      0: 'Electrical outlets were poorly installed.',
      1: 'Electrical outlets were installed with minor deviations from code requirements.',
      2: 'Electrical outlets were installed per code requirements.',
      3: 'No score',
      4: 'Electrical outlets were installed better than code requirements.'
    }
  },
  {
    id: 'electrical-switch-installation',
    category: 'Electrical',
    subcategory: 'Electrical',
    item: 'Switch Installation',
    weight: 8,
    scoreDescriptions: {
      0: 'Electrical switches were poorly installed.',
      1: 'Electrical switches were installed with minor deviations from code requirements.',
      2: 'Electrical switches were installed per code requirements.',
      3: 'No score',
      4: 'Electrical switches were installed better than code requirements.'
    }
  },
  {
    id: 'electrical-lighting-installation',
    category: 'Electrical',
    subcategory: 'Electrical',
    item: 'Lighting Installation',
    weight: 8,
    scoreDescriptions: {
      0: 'Lighting fixtures were poorly installed.',
      1: 'Lighting fixtures were installed with minor deviations from code requirements.',
      2: 'Lighting fixtures were installed per code requirements.',
      3: 'No score',
      4: 'Lighting fixtures were installed better than code requirements.'
    }
  },
  {
    id: 'electrical-grounding',
    category: 'Electrical',
    subcategory: 'Electrical',
    item: 'Grounding',
    weight: 8,
    scoreDescriptions: {
      0: 'Electrical grounding was inadequate or missing.',
      1: 'Electrical grounding was marginally adequate.',
      2: 'Electrical grounding met code requirements.',
      3: 'No score',
      4: 'Electrical grounding exceeded code requirements.'
    }
  }
];
