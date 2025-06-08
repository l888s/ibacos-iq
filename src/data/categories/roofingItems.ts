
import { InspectionItem } from '@/types/inspection';

export const roofingItems: Omit<InspectionItem, 'score'>[] = [
  // Roof Cladding and Drainage (8) - Valleys
  {
    id: 'roof-cladding-valley-shingles',
    category: 'Roof Cladding and Drainage',
    subcategory: 'Valleys',
    item: 'Shingles',
    weight: 8,
    scoreDescriptions: {
      0: 'Shingles were improperly layered in the valleys, or there was an open valley with exposed building paper.',
      1: 'No score',
      2: 'No score',
      3: 'Shingles were woven or closed cut at valleys, with the larger roof overlapping the smaller roof.',
      4: 'Open valleys were installed with exposed metal valley flashings.'
    }
  }
];
