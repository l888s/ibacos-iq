
import { InspectionItem } from '@/types/inspection';

export const interiorItems: Omit<InspectionItem, 'score'>[] = [
  // Interior Finishes (4) - Windows and Doors
  {
    id: 'interior-finishes-smooth-operation',
    category: 'Interior Finishes',
    subcategory: 'Windows and Doors',
    item: 'Smooth Operation',
    weight: 4,
    scoreDescriptions: {
      0: 'Windows and doors did not open or close easily, indicating possible issues with installation.',
      1: 'No score',
      2: 'Finished windows and doors opened and closed smoothly, and all locks were able to be operated, with minor inconsistencies.',
      3: 'No score',
      4: 'All finished windows and doors opened and closed smoothly, and all locks were able to be operated.'
    }
  },
  {
    id: 'interior-finishes-window-casing',
    category: 'Interior Finishes',
    subcategory: 'Windows and Doors',
    item: 'Window Casing',
    weight: 4,
    scoreDescriptions: {
      0: 'Window casing was poorly installed with major gaps.',
      1: 'Window casing was installed with minor gaps.',
      2: 'Window casing was properly installed with minor inconsistencies.',
      3: 'No score',
      4: 'Window casing was properly installed throughout.'
    }
  },
  {
    id: 'interior-finishes-door-casing',
    category: 'Interior Finishes',
    subcategory: 'Windows and Doors',
    item: 'Door Casing',
    weight: 4,
    scoreDescriptions: {
      0: 'Door casing was poorly installed with major gaps.',
      1: 'Door casing was installed with minor gaps.',
      2: 'Door casing was properly installed with minor inconsistencies.',
      3: 'No score',
      4: 'Door casing was properly installed throughout.'
    }
  },
  // Flooring
  {
    id: 'interior-finishes-hardwood-flooring',
    category: 'Interior Finishes',
    subcategory: 'Flooring',
    item: 'Hardwood Flooring',
    weight: 4,
    scoreDescriptions: {
      0: 'Hardwood flooring was poorly installed with major gaps or misalignment.',
      1: 'Hardwood flooring was installed with minor gaps.',
      2: 'Hardwood flooring was properly installed with minor inconsistencies.',
      3: 'No score',
      4: 'Hardwood flooring was properly installed throughout.'
    }
  },
  {
    id: 'interior-finishes-tile-flooring',
    category: 'Interior Finishes',
    subcategory: 'Flooring',
    item: 'Tile Flooring',
    weight: 4,
    scoreDescriptions: {
      0: 'Tile flooring was poorly installed with major gaps or misalignment.',
      1: 'Tile flooring was installed with minor gaps.',
      2: 'Tile flooring was properly installed with minor inconsistencies.',
      3: 'No score',
      4: 'Tile flooring was properly installed throughout.'
    }
  },
  {
    id: 'interior-finishes-carpet-installation',
    category: 'Interior Finishes',
    subcategory: 'Flooring',
    item: 'Carpet Installation',
    weight: 4,
    scoreDescriptions: {
      0: 'Carpet was poorly installed with wrinkles or gaps.',
      1: 'Carpet was installed with minor issues.',
      2: 'Carpet was properly installed with minor inconsistencies.',
      3: 'No score',
      4: 'Carpet was properly installed throughout.'
    }
  },
  // Walls and Ceilings
  {
    id: 'interior-finishes-drywall-installation',
    category: 'Interior Finishes',
    subcategory: 'Walls and Ceilings',
    item: 'Drywall Installation',
    weight: 4,
    scoreDescriptions: {
      0: 'Drywall was poorly installed with major gaps or damage.',
      1: 'Drywall was installed with minor gaps.',
      2: 'Drywall was properly installed with minor inconsistencies.',
      3: 'No score',
      4: 'Drywall was properly installed throughout.'
    }
  },
  {
    id: 'interior-finishes-paint-finish',
    category: 'Interior Finishes',
    subcategory: 'Walls and Ceilings',
    item: 'Paint Finish',
    weight: 4,
    scoreDescriptions: {
      0: 'Paint finish was poor with visible defects.',
      1: 'Paint finish had minor defects.',
      2: 'Paint finish was acceptable with minor inconsistencies.',
      3: 'No score',
      4: 'Paint finish was excellent throughout.'
    }
  }
];
