
import { InspectionItem } from '@/types/inspection';

export const foundationItems: Omit<InspectionItem, 'score'>[] = [
  // Foundations (6) - Slab on Grade
  {
    id: 'foundation-slab-capillary-break',
    category: 'Foundation',
    subcategory: 'Slab on Grade',
    item: 'Capillary Break (Under footer)',
    weight: 6,
    scoreDescriptions: {
      0: 'The vapor barrier did not extend under the footer, and the soil was not well drained.',
      1: 'No score',
      2: 'The vapor barrier did not extend under the footer or stem wall, but the soil was well drained.',
      3: 'The vapor barrier did not extend under the footer or stem wall, and foundation drains were installed, OR the vapor barrier was extended under the footer or stem wall.',
      4: 'The vapor barrier was extended under the footer and grade beams or stem wall and wrapped up the outside edge of the forms. OR the vapor barrier was extended under the footer or stem wall and wrapped up the outside edge of the footer or stem wall.'
    }
  }
];
