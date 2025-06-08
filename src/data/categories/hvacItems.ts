
import { InspectionItem } from '@/types/inspection';

export const hvacItems: Omit<InspectionItem, 'score'>[] = [
  // HVAC Systems (10) - Equipment Venting and Backdrafting Potential
  {
    id: 'hvac-airtightness-equipment-compatibility',
    category: 'HVAC Systems',
    subcategory: 'Equipment Venting and Backdrafting Potential',
    item: 'Airtightness & Equipment Compatibility (Worst Case Pressurization)',
    weight: 10,
    scoreDescriptions: {
      0: 'Equipment specifications did not align with airtightness practices.',
      1: 'No score',
      2: 'There was an inconsistent airtightness and equipment strategy.',
      3: 'No score',
      4: 'Good air sealing practices were observed with direct vent or electric equipment.'
    }
  }
];
