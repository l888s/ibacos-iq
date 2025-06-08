
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
  },
  {
    id: 'plumbing-water-heater',
    category: 'Plumbing',
    subcategory: 'Plumbing',
    item: 'Water Heater Installation',
    weight: 7,
    scoreDescriptions: {
      0: 'Water heater installation was poorly executed.',
      1: 'Water heater installation was executed with minor deviations from code requirements.',
      2: 'Water heater installation was executed per code requirements.',
      3: 'No score',
      4: 'Water heater installation was executed better than code requirements.'
    }
  },
  {
    id: 'plumbing-shut-off-valves',
    category: 'Plumbing',
    subcategory: 'Plumbing',
    item: 'Shut-off Valves',
    weight: 7,
    scoreDescriptions: {
      0: 'Shut-off valves were not installed where required.',
      1: 'Shut-off valves were installed with minor issues.',
      2: 'Shut-off valves were properly installed per code requirements.',
      3: 'No score',
      4: 'Shut-off valves were installed better than code requirements.'
    }
  },
  {
    id: 'plumbing-pressure-testing',
    category: 'Plumbing',
    subcategory: 'Plumbing',
    item: 'Pressure Testing',
    weight: 7,
    scoreDescriptions: {
      0: 'Plumbing system failed pressure testing.',
      1: 'Plumbing system passed pressure testing with minor leaks.',
      2: 'Plumbing system passed pressure testing per code requirements.',
      3: 'No score',
      4: 'Plumbing system exceeded pressure testing requirements.'
    }
  },
  {
    id: 'plumbing-venting-system',
    category: 'Plumbing',
    subcategory: 'Plumbing',
    item: 'Venting System',
    weight: 7,
    scoreDescriptions: {
      0: 'Plumbing venting system was inadequate or missing.',
      1: 'Plumbing venting system was marginally adequate.',
      2: 'Plumbing venting system met code requirements.',
      3: 'No score',
      4: 'Plumbing venting system exceeded code requirements.'
    }
  }
];
