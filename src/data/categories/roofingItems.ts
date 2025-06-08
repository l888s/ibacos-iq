
import { InspectionItem } from '@/types/inspection';

export const roofingItems: Omit<InspectionItem, 'score'>[] = [
  // Roofing (6) - Flashing
  {
    id: 'roofing-flashing-chimney',
    category: 'Roofing',
    subcategory: 'Flashing',
    item: 'Chimney Flashing',
    weight: 6,
    scoreDescriptions: {
      0: 'Chimney flashing was poorly installed.',
      1: 'Chimney flashing was installed with minor deviations from best practices.',
      2: 'Chimney flashing was installed per best practices.',
      3: 'No score',
      4: 'Chimney flashing was installed better than best practices.'
    }
  },
  {
    id: 'roofing-flashing-pipe-boot',
    category: 'Roofing',
    subcategory: 'Flashing',
    item: 'Pipe Boot Flashing',
    weight: 6,
    scoreDescriptions: {
      0: 'Pipe boot flashing was poorly installed.',
      1: 'Pipe boot flashing was installed with minor deviations from best practices.',
      2: 'Pipe boot flashing was installed per best practices.',
      3: 'No score',
      4: 'Pipe boot flashing was installed better than best practices.'
    }
  },
  {
    id: 'roofing-flashing-roof-wall',
    category: 'Roofing',
    subcategory: 'Flashing',
    item: 'Roof to Wall Flashing',
    weight: 6,
    scoreDescriptions: {
      0: 'Roof to wall flashing was poorly installed.',
      1: 'Roof to wall flashing was installed with minor deviations from best practices.',
      2: 'Roof to wall flashing was installed per best practices.',
      3: 'No score',
      4: 'Roof to wall flashing was installed better than best practices.'
    }
  },
  {
    id: 'roofing-flashing-skylight',
    category: 'Roofing',
    subcategory: 'Flashing',
    item: 'Skylight Flashing',
    weight: 6,
    scoreDescriptions: {
      0: 'Skylight flashing was poorly installed.',
      1: 'Skylight flashing was installed with minor deviations from best practices.',
      2: 'Skylight flashing was installed per best practices.',
      3: 'No score',
      4: 'Skylight flashing was installed better than best practices.'
    }
  },
  {
    id: 'roofing-flashing-valley',
    category: 'Roofing',
    subcategory: 'Flashing',
    item: 'Valley Flashing',
    weight: 6,
    scoreDescriptions: {
      0: 'Valley flashing was poorly installed.',
      1: 'Valley flashing was installed with minor deviations from best practices.',
      2: 'Valley flashing was installed per best practices.',
      3: 'No score',
      4: 'Valley flashing was installed better than best practices.'
    }
  },
  // Roofing (6) - Installation
  {
    id: 'roofing-installation-edge-metal',
    category: 'Roofing',
    subcategory: 'Installation',
    item: 'Edge Metal',
    weight: 6,
    scoreDescriptions: {
      0: 'Edge metal was poorly installed.',
      1: 'Edge metal was installed with minor deviations from best practices.',
      2: 'Edge metal was installed per best practices.',
      3: 'No score',
      4: 'Edge metal was installed better than best practices.'
    }
  },
  {
    id: 'roofing-installation-gutters',
    category: 'Roofing',
    subcategory: 'Installation',
    item: 'Gutters',
    weight: 6,
    scoreDescriptions: {
      0: 'Gutters were poorly installed.',
      1: 'Gutters were installed with minor deviations from best practices.',
      2: 'Gutters were installed per best practices.',
      3: 'No score',
      4: 'Gutters were installed better than best practices.'
    }
  },
  {
    id: 'roofing-installation-ice-water-shield',
    category: 'Roofing',
    subcategory: 'Installation',
    item: 'Ice & Water Shield',
    weight: 6,
    scoreDescriptions: {
      0: 'Ice & water shield was poorly installed.',
      1: 'Ice & water shield was installed with minor deviations from best practices.',
      2: 'Ice & water shield was installed per best practices.',
      3: 'No score',
      4: 'Ice & water shield was installed better than best practices.'
    }
  },
  {
    id: 'roofing-installation-ridge-vent',
    category: 'Roofing',
    subcategory: 'Installation',
    item: 'Ridge Vent',
    weight: 6,
    scoreDescriptions: {
      0: 'Ridge vent was poorly installed.',
      1: 'Ridge vent was installed with minor deviations from best practices.',
      2: 'Ridge vent was installed per best practices.',
      3: 'No score',
      4: 'Ridge vent was installed better than best practices.'
    }
  },
  {
    id: 'roofing-installation-shingles',
    category: 'Roofing',
    subcategory: 'Installation',
    item: 'Shingles',
    weight: 6,
    scoreDescriptions: {
      0: 'Shingles were poorly installed.',
      1: 'Shingles were installed with minor deviations from manufacturer specifications.',
      2: 'Shingles were installed per manufacturer specifications.',
      3: 'No score',
      4: 'Shingles were installed better than manufacturer specifications.'
    }
  },
  {
    id: 'roofing-installation-underlayment',
    category: 'Roofing',
    subcategory: 'Installation',
    item: 'Underlayment',
    weight: 6,
    scoreDescriptions: {
      0: 'Underlayment was poorly installed.',
      1: 'Underlayment was installed with minor deviations from best practices.',
      2: 'Underlayment was installed per best practices.',
      3: 'No score',
      4: 'Underlayment was installed better than best practices.'
    }
  }
];
