
import { InspectionItem } from '@/types/inspection';

export const foundationItems: Omit<InspectionItem, 'score'>[] = [
  {
    id: 'foundation-anchor-bolts',
    category: 'Foundation',
    subcategory: 'Foundation',
    item: 'Anchor Bolts',
    weight: 7,
    scoreDescriptions: {
      0: 'Anchor bolts were not placed consistently per code requirements.',
      1: 'Anchor bolts were placed mostly per code requirements with minor deviations.',
      2: 'Anchor bolts were placed per code requirements.',
      3: 'No score',
      4: 'Anchor bolts were placed better than code requirements.'
    }
  },
  {
    id: 'foundation-basement-walls',
    category: 'Foundation',
    subcategory: 'Foundation',
    item: 'Basement Walls',
    weight: 7,
    scoreDescriptions: {
      0: 'There were observed structural cracks in basement walls.',
      1: 'There were observed minor cracks in basement walls.',
      2: 'Basement walls appeared structurally sound.',
      3: 'No score',
      4: 'Basement walls appeared to be constructed better than minimum standards.'
    }
  },
  {
    id: 'foundation-concrete-placement',
    category: 'Foundation',
    subcategory: 'Foundation',
    item: 'Concrete Placement',
    weight: 7,
    scoreDescriptions: {
      0: 'Cold joints and poor consolidation were frequently observed.',
      1: 'Cold joints and poor consolidation were occasionally observed.',
      2: 'Cold joints and poor consolidation were seldom observed.',
      3: 'No score',
      4: 'Cold joints and poor consolidation were not observed.'
    }
  },
  {
    id: 'foundation-foundation-walls',
    category: 'Foundation',
    subcategory: 'Foundation',
    item: 'Foundation Walls',
    weight: 7,
    scoreDescriptions: {
      0: 'There were observed structural cracks in foundation walls.',
      1: 'There were observed minor cracks in foundation walls.',
      2: 'Foundation walls appeared structurally sound.',
      3: 'No score',
      4: 'Foundation walls appeared to be constructed better than minimum standards.'
    }
  },
  {
    id: 'foundation-rebar-placement',
    category: 'Foundation',
    subcategory: 'Foundation',
    item: 'Rebar Placement',
    weight: 7,
    scoreDescriptions: {
      0: 'Rebar was not placed consistently per the structural plans.',
      1: 'Rebar was placed mostly per the structural plans with minor deviations.',
      2: 'Rebar was placed per the structural plans.',
      3: 'No score',
      4: 'Rebar was placed better than the structural plans.'
    }
  },
  {
    id: 'foundation-slab-placement',
    category: 'Foundation',
    subcategory: 'Foundation',
    item: 'Slab Placement',
    weight: 7,
    scoreDescriptions: {
      0: 'Slab thickness was consistently under minimum requirements.',
      1: 'Slab thickness was occasionally under minimum requirements.',
      2: 'Slab thickness consistently met minimum requirements.',
      3: 'No score',
      4: 'Slab thickness was consistently greater than minimum requirements.'
    }
  }
];
