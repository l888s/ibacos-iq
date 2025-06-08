
import { InspectionItem } from '@/types/inspection';

export const interiorItems: Omit<InspectionItem, 'score'>[] = [
  // Interior (6) - Drywall
  {
    id: 'interior-drywall-finishing',
    category: 'Interior',
    subcategory: 'Drywall',
    item: 'Drywall Finishing',
    weight: 6,
    scoreDescriptions: {
      0: 'Drywall finishing was poorly executed.',
      1: 'Drywall finishing was executed with minor deviations from industry standards.',
      2: 'Drywall finishing was executed per industry standards.',
      3: 'No score',
      4: 'Drywall finishing was executed better than industry standards.'
    }
  },
  {
    id: 'interior-drywall-installation',
    category: 'Interior',
    subcategory: 'Drywall',
    item: 'Drywall Installation',
    weight: 6,
    scoreDescriptions: {
      0: 'Drywall installation was poorly executed.',
      1: 'Drywall installation was executed with minor deviations from industry standards.',
      2: 'Drywall installation was executed per industry standards.',
      3: 'No score',
      4: 'Drywall installation was executed better than industry standards.'
    }
  },
  // Interior (6) - Flooring
  {
    id: 'interior-flooring-carpet',
    category: 'Interior',
    subcategory: 'Flooring',
    item: 'Carpet',
    weight: 6,
    scoreDescriptions: {
      0: 'Carpet installation was poorly executed.',
      1: 'Carpet installation was executed with minor deviations from manufacturer specifications.',
      2: 'Carpet installation was executed per manufacturer specifications.',
      3: 'No score',
      4: 'Carpet installation was executed better than manufacturer specifications.'
    }
  },
  {
    id: 'interior-flooring-hardwood',
    category: 'Interior',
    subcategory: 'Flooring',
    item: 'Hardwood',
    weight: 6,
    scoreDescriptions: {
      0: 'Hardwood installation was poorly executed.',
      1: 'Hardwood installation was executed with minor deviations from manufacturer specifications.',
      2: 'Hardwood installation was executed per manufacturer specifications.',
      3: 'No score',
      4: 'Hardwood installation was executed better than manufacturer specifications.'
    }
  },
  {
    id: 'interior-flooring-laminate',
    category: 'Interior',
    subcategory: 'Flooring',
    item: 'Laminate',
    weight: 6,
    scoreDescriptions: {
      0: 'Laminate installation was poorly executed.',
      1: 'Laminate installation was executed with minor deviations from manufacturer specifications.',
      2: 'Laminate installation was executed per manufacturer specifications.',
      3: 'No score',
      4: 'Laminate installation was executed better than manufacturer specifications.'
    }
  },
  {
    id: 'interior-flooring-tile',
    category: 'Interior',
    subcategory: 'Flooring',
    item: 'Tile',
    weight: 6,
    scoreDescriptions: {
      0: 'Tile installation was poorly executed.',
      1: 'Tile installation was executed with minor deviations from industry standards.',
      2: 'Tile installation was executed per industry standards.',
      3: 'No score',
      4: 'Tile installation was executed better than industry standards.'
    }
  },
  {
    id: 'interior-flooring-vinyl',
    category: 'Interior',
    subcategory: 'Flooring',
    item: 'Vinyl',
    weight: 6,
    scoreDescriptions: {
      0: 'Vinyl installation was poorly executed.',
      1: 'Vinyl installation was executed with minor deviations from manufacturer specifications.',
      2: 'Vinyl installation was executed per manufacturer specifications.',
      3: 'No score',
      4: 'Vinyl installation was executed better than manufacturer specifications.'
    }
  },
  // Interior (6) - Insulation
  {
    id: 'interior-insulation-attic',
    category: 'Interior',
    subcategory: 'Insulation',
    item: 'Attic',
    weight: 6,
    scoreDescriptions: {
      0: 'Attic insulation was poorly installed.',
      1: 'Attic insulation was installed with minor gaps.',
      2: 'Attic insulation was properly installed.',
      3: 'No score',
      4: 'Attic insulation was installed better than minimum requirements.'
    }
  },
  {
    id: 'interior-insulation-interior-walls',
    category: 'Interior',
    subcategory: 'Insulation',
    item: 'Interior Walls',
    weight: 6,
    scoreDescriptions: {
      0: 'Interior wall insulation was poorly installed.',
      1: 'Interior wall insulation was installed with minor gaps.',
      2: 'Interior wall insulation was properly installed.',
      3: 'No score',
      4: 'Interior wall insulation was installed better than minimum requirements.'
    }
  },
  // Interior (6) - Paint
  {
    id: 'interior-paint-primer',
    category: 'Interior',
    subcategory: 'Paint',
    item: 'Primer',
    weight: 6,
    scoreDescriptions: {
      0: 'Primer application was poorly executed.',
      1: 'Primer application was executed with minor deviations from manufacturer specifications.',
      2: 'Primer application was executed per manufacturer specifications.',
      3: 'No score',
      4: 'Primer application was executed better than manufacturer specifications.'
    }
  },
  {
    id: 'interior-paint-top-coat',
    category: 'Interior',
    subcategory: 'Paint',
    item: 'Top Coat',
    weight: 6,
    scoreDescriptions: {
      0: 'Top coat application was poorly executed.',
      1: 'Top coat application was executed with minor deviations from manufacturer specifications.',
      2: 'Top coat application was executed per manufacturer specifications.',
      3: 'No score',
      4: 'Top coat application was executed better than manufacturer specifications.'
    }
  },
  // Interior (6) - Trim
  {
    id: 'interior-trim-base',
    category: 'Interior',
    subcategory: 'Trim',
    item: 'Base',
    weight: 6,
    scoreDescriptions: {
      0: 'Base trim installation was poorly executed.',
      1: 'Base trim installation was executed with minor deviations from industry standards.',
      2: 'Base trim installation was executed per industry standards.',
      3: 'No score',
      4: 'Base trim installation was executed better than industry standards.'
    }
  },
  {
    id: 'interior-trim-casing',
    category: 'Interior',
    subcategory: 'Trim',
    item: 'Casing',
    weight: 6,
    scoreDescriptions: {
      0: 'Casing installation was poorly executed.',
      1: 'Casing installation was executed with minor deviations from industry standards.',
      2: 'Casing installation was executed per industry standards.',
      3: 'No score',
      4: 'Casing installation was executed better than industry standards.'
    }
  },
  {
    id: 'interior-trim-crown',
    category: 'Interior',
    subcategory: 'Trim',
    item: 'Crown',
    weight: 6,
    scoreDescriptions: {
      0: 'Crown trim installation was poorly executed.',
      1: 'Crown trim installation was executed with minor deviations from industry standards.',
      2: 'Crown trim installation was executed per industry standards.',
      3: 'No score',
      4: 'Crown trim installation was executed better than industry standards.'
    }
  }
];
