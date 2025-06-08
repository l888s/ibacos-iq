
import { InspectionItem } from '@/types/inspection';

export const thermalEnclosureItems: Omit<InspectionItem, 'score'>[] = [
  // Thermal Enclosure (7) - Windows/Doors (Specification)
  {
    id: 'thermal-enclosure-door-type',
    category: 'Thermal Enclosure',
    subcategory: 'Windows/Doors (Specification)',
    item: 'Door Type',
    weight: 7,
    scoreDescriptions: {
      0: 'Doors were constructed of uninsulated material.',
      1: 'No score',
      2: 'Doors were constructed of material that provides minimal insulation.',
      3: 'Doors were constructed of an insulated material with a U-value range between 0.2 and 0.25.',
      4: 'Doors were constructed of an insulated material with a U-value below 0.2.'
    }
  }
];
