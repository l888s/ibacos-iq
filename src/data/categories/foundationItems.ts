
import { InspectionItem } from '@/types/inspection';

export const foundationItems: Omit<InspectionItem, 'score'>[] = [
  // Foundations (6) - Basement Waterproofing
  {
    id: 'foundation-basement-waterproofing-membrane',
    category: 'Foundations',
    subcategory: 'Basement Waterproofing',
    item: 'Waterproofing Membrane',
    weight: 6,
    scoreDescriptions: {
      0: 'No waterproofing membrane was applied to basement walls.',
      1: 'Waterproofing membrane was applied with major gaps or defects.',
      2: 'Waterproofing membrane was applied with minor gaps or defects.',
      3: 'Waterproofing membrane was properly applied with minor inconsistencies.',
      4: 'Waterproofing membrane was properly applied to all basement walls.'
    }
  },
  {
    id: 'foundation-basement-waterproofing-drainage',
    category: 'Foundations',
    subcategory: 'Basement Waterproofing',
    item: 'Foundation Drainage',
    weight: 6,
    scoreDescriptions: {
      0: 'No foundation drainage system was installed.',
      1: 'Foundation drainage system was installed with major defects.',
      2: 'Foundation drainage system was installed with minor defects.',
      3: 'Foundation drainage system was properly installed with minor inconsistencies.',
      4: 'Foundation drainage system was properly installed and connected to discharge.'
    }
  },
  // Foundations (6) - Concrete Work
  {
    id: 'foundation-concrete-placement',
    category: 'Foundations',
    subcategory: 'Concrete Work',
    item: 'Concrete Placement',
    weight: 6,
    scoreDescriptions: {
      0: 'Concrete placement was poorly executed.',
      1: 'Concrete placement was executed with major deviations from specifications.',
      2: 'Concrete placement was executed per specifications with minor issues.',
      3: 'Concrete placement was executed per specifications with minor inconsistencies.',
      4: 'Concrete placement was executed better than specifications.'
    }
  },
  {
    id: 'foundation-concrete-finishing',
    category: 'Foundations',
    subcategory: 'Concrete Work',
    item: 'Concrete Finishing',
    weight: 6,
    scoreDescriptions: {
      0: 'Concrete finishing was poorly executed.',
      1: 'Concrete finishing was executed with major surface defects.',
      2: 'Concrete finishing was executed per specifications with minor surface defects.',
      3: 'Concrete finishing was executed per specifications with minor inconsistencies.',
      4: 'Concrete finishing was executed better than specifications.'
    }
  },
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
    id: 'foundation-slab-vapor-barrier',
    category: 'Foundations',
    subcategory: 'Slab on Grade',
    item: 'Vapor Barrier',
    weight: 6,
    scoreDescriptions: {
      0: 'No vapor barrier was installed under the slab.',
      1: 'Vapor barrier was installed with major gaps or tears.',
      2: 'Vapor barrier was installed with minor gaps or tears.',
      3: 'Vapor barrier was properly installed with minor inconsistencies.',
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
  // Foundations (6) - Footings
  {
    id: 'foundation-footings-depth',
    category: 'Foundations',
    subcategory: 'Footings',
    item: 'Footing Depth',
    weight: 6,
    scoreDescriptions: {
      0: 'Footings were not installed at proper depth below frost line.',
      1: 'Footings were installed with minor depth variations.',
      2: 'Footings were installed at proper depth per code requirements.',
      3: 'No score',
      4: 'Footings were installed at proper depth with additional protection measures.'
    }
  },
  {
    id: 'foundation-footings-reinforcement',
    category: 'Foundations',
    subcategory: 'Footings',
    item: 'Reinforcement',
    weight: 6,
    scoreDescriptions: {
      0: 'Footing reinforcement was not installed per specifications.',
      1: 'Footing reinforcement was installed with major deviations.',
      2: 'Footing reinforcement was installed per specifications with minor issues.',
      3: 'No score',
      4: 'Footing reinforcement was installed better than specifications.'
    }
  }
];
