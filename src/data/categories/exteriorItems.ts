
import { InspectionItem } from '@/types/inspection';

export const exteriorItems: Omit<InspectionItem, 'score'>[] = [
  // Exterior (7) - Air Sealing
  {
    id: 'exterior-air-sealing-penetrations',
    category: 'Exterior',
    subcategory: 'Air Sealing',
    item: 'Penetrations',
    weight: 7,
    scoreDescriptions: {
      0: 'Penetrations were not properly sealed.',
      1: 'Penetrations were sealed with minor gaps.',
      2: 'Penetrations were properly sealed.',
      3: 'No score',
      4: 'Penetrations were sealed better than minimum requirements.'
    }
  },
  {
    id: 'exterior-air-sealing-rim-joist',
    category: 'Exterior',
    subcategory: 'Air Sealing',
    item: 'Rim Joist',
    weight: 7,
    scoreDescriptions: {
      0: 'Rim joist was not properly sealed.',
      1: 'Rim joist was sealed with minor gaps.',
      2: 'Rim joist was properly sealed.',
      3: 'No score',
      4: 'Rim joist was sealed better than minimum requirements.'
    }
  },
  {
    id: 'exterior-air-sealing-top-plates',
    category: 'Exterior',
    subcategory: 'Air Sealing',
    item: 'Top Plates',
    weight: 7,
    scoreDescriptions: {
      0: 'Top plates were not properly sealed.',
      1: 'Top plates were sealed with minor gaps.',
      2: 'Top plates were properly sealed.',
      3: 'No score',
      4: 'Top plates were sealed better than minimum requirements.'
    }
  },
  // Exterior (7) - Cladding
  {
    id: 'exterior-cladding-brick',
    category: 'Exterior',
    subcategory: 'Cladding',
    item: 'Brick',
    weight: 7,
    scoreDescriptions: {
      0: 'Brick was poorly installed.',
      1: 'Brick was installed with minor deviations from best practices.',
      2: 'Brick was installed per best practices.',
      3: 'No score',
      4: 'Brick was installed better than best practices.'
    }
  },
  {
    id: 'exterior-cladding-fiber-cement',
    category: 'Exterior',
    subcategory: 'Cladding',
    item: 'Fiber Cement',
    weight: 7,
    scoreDescriptions: {
      0: 'Fiber cement was poorly installed.',
      1: 'Fiber cement was installed with minor deviations from manufacturer specifications.',
      2: 'Fiber cement was installed per manufacturer specifications.',
      3: 'No score',
      4: 'Fiber cement was installed better than manufacturer specifications.'
    }
  },
  {
    id: 'exterior-cladding-stone',
    category: 'Exterior',
    subcategory: 'Cladding',
    item: 'Stone',
    weight: 7,
    scoreDescriptions: {
      0: 'Stone was poorly installed.',
      1: 'Stone was installed with minor deviations from best practices.',
      2: 'Stone was installed per best practices.',
      3: 'No score',
      4: 'Stone was installed better than best practices.'
    }
  },
  {
    id: 'exterior-cladding-stucco',
    category: 'Exterior',
    subcategory: 'Cladding',
    item: 'Stucco',
    weight: 7,
    scoreDescriptions: {
      0: 'Stucco was poorly installed.',
      1: 'Stucco was installed with minor deviations from best practices.',
      2: 'Stucco was installed per best practices.',
      3: 'No score',
      4: 'Stucco was installed better than best practices.'
    }
  },
  {
    id: 'exterior-cladding-vinyl',
    category: 'Exterior',
    subcategory: 'Cladding',
    item: 'Vinyl',
    weight: 7,
    scoreDescriptions: {
      0: 'Vinyl was poorly installed.',
      1: 'Vinyl was installed with minor deviations from manufacturer specifications.',
      2: 'Vinyl was installed per manufacturer specifications.',
      3: 'No score',
      4: 'Vinyl was installed better than manufacturer specifications.'
    }
  },
  {
    id: 'exterior-cladding-wood',
    category: 'Exterior',
    subcategory: 'Cladding',
    item: 'Wood',
    weight: 7,
    scoreDescriptions: {
      0: 'Wood was poorly installed.',
      1: 'Wood was installed with minor deviations from best practices.',
      2: 'Wood was installed per best practices.',
      3: 'No score',
      4: 'Wood was installed better than best practices.'
    }
  },
  // Exterior (7) - Flashing
  {
    id: 'exterior-flashing-deck-ledger',
    category: 'Exterior',
    subcategory: 'Flashing',
    item: 'Deck Ledger Flashing',
    weight: 7,
    scoreDescriptions: {
      0: 'Deck ledger flashing was poorly installed.',
      1: 'Deck ledger flashing was installed with minor deviations from best practices.',
      2: 'Deck ledger flashing was installed per best practices.',
      3: 'No score',
      4: 'Deck ledger flashing was installed better than best practices.'
    }
  },
  {
    id: 'exterior-flashing-door',
    category: 'Exterior',
    subcategory: 'Flashing',
    item: 'Door Flashing',
    weight: 7,
    scoreDescriptions: {
      0: 'Door flashing was poorly installed.',
      1: 'Door flashing was installed with minor deviations from best practices.',
      2: 'Door flashing was installed per best practices.',
      3: 'No score',
      4: 'Door flashing was installed better than best practices.'
    }
  },
  {
    id: 'exterior-flashing-window',
    category: 'Exterior',
    subcategory: 'Flashing',
    item: 'Window Flashing',
    weight: 7,
    scoreDescriptions: {
      0: 'Window flashing was poorly installed.',
      1: 'Window flashing was installed with minor deviations from best practices.',
      2: 'Window flashing was installed per best practices.',
      3: 'No score',
      4: 'Window flashing was installed better than best practices.'
    }
  },
  // Exterior (7) - Insulation
  {
    id: 'exterior-insulation-basement-walls',
    category: 'Exterior',
    subcategory: 'Insulation',
    item: 'Basement Walls',
    weight: 7,
    scoreDescriptions: {
      0: 'Basement wall insulation was poorly installed.',
      1: 'Basement wall insulation was installed with minor gaps.',
      2: 'Basement wall insulation was properly installed.',
      3: 'No score',
      4: 'Basement wall insulation was installed better than minimum requirements.'
    }
  },
  {
    id: 'exterior-insulation-band-joist',
    category: 'Exterior',
    subcategory: 'Insulation',
    item: 'Band Joist',
    weight: 7,
    scoreDescriptions: {
      0: 'Band joist insulation was poorly installed.',
      1: 'Band joist insulation was installed with minor gaps.',
      2: 'Band joist insulation was properly installed.',
      3: 'No score',
      4: 'Band joist insulation was installed better than minimum requirements.'
    }
  },
  {
    id: 'exterior-insulation-exterior-walls',
    category: 'Exterior',
    subcategory: 'Insulation',
    item: 'Exterior Walls',
    weight: 7,
    scoreDescriptions: {
      0: 'Exterior wall insulation was poorly installed.',
      1: 'Exterior wall insulation was installed with minor gaps.',
      2: 'Exterior wall insulation was properly installed.',
      3: 'No score',
      4: 'Exterior wall insulation was installed better than minimum requirements.'
    }
  },
  // Exterior (7) - Weather Barrier
  {
    id: 'exterior-weather-barrier-house-wrap',
    category: 'Exterior',
    subcategory: 'Weather Barrier',
    item: 'House Wrap',
    weight: 7,
    scoreDescriptions: {
      0: 'House wrap was poorly installed.',
      1: 'House wrap was installed with minor deviations from manufacturer specifications.',
      2: 'House wrap was installed per manufacturer specifications.',
      3: 'No score',
      4: 'House wrap was installed better than manufacturer specifications.'
    }
  }
];
