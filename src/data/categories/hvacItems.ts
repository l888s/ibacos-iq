
import { InspectionItem } from '@/types/inspection';

export const hvacItems: Omit<InspectionItem, 'score'>[] = [
  {
    id: 'hvac-duct-installation',
    category: 'HVAC',
    subcategory: 'HVAC',
    item: 'Duct Installation',
    weight: 8,
    scoreDescriptions: {
      0: 'Duct installation was poorly executed.',
      1: 'Duct installation was executed with minor deviations from best practices.',
      2: 'Duct installation was executed per best practices.',
      3: 'No score',
      4: 'Duct installation was executed better than best practices.'
    }
  },
  {
    id: 'hvac-duct-sealing',
    category: 'HVAC',
    subcategory: 'HVAC',
    item: 'Duct Sealing',
    weight: 8,
    scoreDescriptions: {
      0: 'Duct sealing was poorly executed.',
      1: 'Duct sealing was executed with minor gaps.',
      2: 'Duct sealing was properly executed.',
      3: 'No score',
      4: 'Duct sealing was executed better than minimum requirements.'
    }
  },
  {
    id: 'hvac-equipment-installation',
    category: 'HVAC',
    subcategory: 'HVAC',
    item: 'Equipment Installation',
    weight: 8,
    scoreDescriptions: {
      0: 'HVAC equipment installation was poorly executed.',
      1: 'HVAC equipment installation was executed with minor deviations from manufacturer specifications.',
      2: 'HVAC equipment installation was executed per manufacturer specifications.',
      3: 'No score',
      4: 'HVAC equipment installation was executed better than manufacturer specifications.'
    }
  }
];
