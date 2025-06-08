
import { InspectionItem } from '@/types/inspection';

export const exteriorItems: Omit<InspectionItem, 'score'>[] = [
  {
    id: 'exterior-siding-installation',
    category: 'Exterior',
    subcategory: 'Exterior',
    item: 'Siding Installation',
    weight: 6,
    scoreDescriptions: {
      0: 'Exterior siding installation was poorly executed.',
      1: 'Exterior siding installation was executed with minor deviations from code requirements.',
      2: 'Exterior siding installation was executed per code requirements.',
      3: 'No score',
      4: 'Exterior siding installation was executed better than code requirements.'
    }
  },
  {
    id: 'exterior-trim-installation',
    category: 'Exterior',
    subcategory: 'Exterior',
    item: 'Trim Installation',
    weight: 6,
    scoreDescriptions: {
      0: 'Exterior trim installation was poorly executed.',
      1: 'Exterior trim installation was executed with minor deviations from code requirements.',
      2: 'Exterior trim installation was executed per code requirements.',
      3: 'No score',
      4: 'Exterior trim installation was executed better than code requirements.'
    }
  },
  {
    id: 'exterior-window-installation',
    category: 'Exterior',
    subcategory: 'Exterior',
    item: 'Window Installation',
    weight: 6,
    scoreDescriptions: {
      0: 'Exterior window installation was poorly executed.',
      1: 'Exterior window installation was executed with minor deviations from code requirements.',
      2: 'Exterior window installation was executed per code requirements.',
      3: 'No score',
      4: 'Exterior window installation was executed better than code requirements.'
    }
  },
  {
    id: 'exterior-door-installation',
    category: 'Exterior',
    subcategory: 'Exterior',
    item: 'Door Installation',
    weight: 6,
    scoreDescriptions: {
      0: 'Exterior door installation was poorly executed.',
      1: 'Exterior door installation was executed with minor deviations from code requirements.',
      2: 'Exterior door installation was executed per code requirements.',
      3: 'No score',
      4: 'Exterior door installation was executed better than code requirements.'
    }
  },
  {
    id: 'exterior-flashing-installation',
    category: 'Exterior',
    subcategory: 'Exterior',
    item: 'Flashing Installation',
    weight: 6,
    scoreDescriptions: {
      0: 'Exterior flashing installation was poorly executed.',
      1: 'Exterior flashing installation was executed with minor deviations from code requirements.',
      2: 'Exterior flashing installation was executed per code requirements.',
      3: 'No score',
      4: 'Exterior flashing installation was executed better than code requirements.'
    }
  },
  {
    id: 'exterior-caulking-sealants',
    category: 'Exterior',
    subcategory: 'Exterior',
    item: 'Caulking and Sealants',
    weight: 6,
    scoreDescriptions: {
      0: 'Exterior caulking and sealants were poorly applied.',
      1: 'Exterior caulking and sealants were applied with minor gaps.',
      2: 'Exterior caulking and sealants were properly applied per code requirements.',
      3: 'No score',
      4: 'Exterior caulking and sealants were applied better than code requirements.'
    }
  }
];
