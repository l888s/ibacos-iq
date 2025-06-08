
import { InspectionItem } from '@/types/inspection';

export const airBarrierItems: Omit<InspectionItem, 'score'>[] = [
  // Air Barrier (6) - Recessed Lights
  {
    id: 'air-barrier-airtight-can-lights',
    category: 'Air Barrier',
    subcategory: 'Recessed Lights',
    item: 'Airtight Can Lights',
    weight: 6,
    scoreDescriptions: {
      0: 'Recessed lights installed in insulated ceilings were not rated as airtight.',
      1: 'No score',
      2: 'Recessed lights in insulated ceilings were rated as airtight, but no gasketed trim assemblies were installed.',
      3: 'No score',
      4: 'Surface-mounted LED lighting was used in-lieu of can lighting.'
    }
  }
];
