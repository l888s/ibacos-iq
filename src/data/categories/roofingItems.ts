
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
  },
  {
    id: 'roof-cladding-valley-flashing',
    category: 'Roof Cladding and Drainage',
    subcategory: 'Valleys',
    item: 'Valley Flashing',
    weight: 8,
    scoreDescriptions: {
      0: 'No valley flashing was installed.',
      1: 'Valley flashing was installed with gaps.',
      2: 'Valley flashing was properly installed with minor issues.',
      3: 'No score',
      4: 'Valley flashing was properly installed throughout.'
    }
  },
  // Ridge and Hip
  {
    id: 'roof-cladding-ridge-cap',
    category: 'Roof Cladding and Drainage',
    subcategory: 'Ridge and Hip',
    item: 'Ridge Cap',
    weight: 8,
    scoreDescriptions: {
      0: 'Ridge cap was not installed or improperly installed.',
      1: 'Ridge cap was installed with minor gaps.',
      2: 'Ridge cap was properly installed with minor inconsistencies.',
      3: 'No score',
      4: 'Ridge cap was properly installed throughout.'
    }
  },
  {
    id: 'roof-cladding-hip-installation',
    category: 'Roof Cladding and Drainage',
    subcategory: 'Ridge and Hip',
    item: 'Hip Installation',
    weight: 8,
    scoreDescriptions: {
      0: 'Hip shingles were not installed or improperly installed.',
      1: 'Hip shingles were installed with minor gaps.',
      2: 'Hip shingles were properly installed with minor inconsistencies.',
      3: 'No score',
      4: 'Hip shingles were properly installed throughout.'
    }
  },
  // Gutters
  {
    id: 'roof-cladding-gutter-installation',
    category: 'Roof Cladding and Drainage',
    subcategory: 'Gutters',
    item: 'Gutter Installation',
    weight: 8,
    scoreDescriptions: {
      0: 'Gutters were not installed or improperly installed.',
      1: 'Gutters were installed with minor issues.',
      2: 'Gutters were properly installed with minor inconsistencies.',
      3: 'No score',
      4: 'Gutters were properly installed throughout.'
    }
  },
  {
    id: 'roof-cladding-gutter-slope',
    category: 'Roof Cladding and Drainage',
    subcategory: 'Gutters',
    item: 'Gutter Slope',
    weight: 8,
    scoreDescriptions: {
      0: 'Gutters had improper slope or no slope.',
      1: 'Gutters had minimal slope in some areas.',
      2: 'Gutters had proper slope with minor variations.',
      3: 'No score',
      4: 'Gutters had consistent proper slope throughout.'
    }
  }
];
