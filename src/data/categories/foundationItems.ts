
import { InspectionItem } from '@/types/inspection';

export const foundationItems: Omit<InspectionItem, 'score'>[] = [
  
  // Foundations (6) - Slab on Grade
  {
    id: 'foundation-slab-capillary-break',
    category: 'Foundations',
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
  },
  {
    id: 'foundation-under-slab-vapor-barrier',
    category: 'Foundations',
    subcategory: 'Slab on Grade',
    item: 'Under Slab Vapor Barrier',
    weight: 6,
    scoreDescriptions: {
      0: 'No vapor barrier was installed under the slab in a wet climate.',
      1: 'A poly vapor barrier was installed under the slab but with major deficiencies in installation quality.',
      2: 'A minimum 6-mil poly vapor barrier was installed and taped, or no vapor barrier was installed in a desert climate.',
      3: 'A minimum 10-mil poly vapor barrier was installed with minor inconsistencies in installation and taping.',
      4: 'Vapor barrier was properly installed with sealed seams and edges.'
    }
  },
  {
    id: 'foundation-slab-insulation',
    category: 'Foundations',
    subcategory: 'Slab on Grade',
    item: 'Slab Insulation',
    weight: 6,
    scoreDescriptions: {
      0: 'No slab insulation was installed.',
      1: 'Slab insulation was installed with major gaps.',
      2: 'Slab insulation was installed with minor gaps.',
      3: 'Slab insulation was properly installed with minor inconsistencies.',
      4: 'Slab insulation was properly installed per specifications.'
    }
  },

];
