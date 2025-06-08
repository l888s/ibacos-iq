
import { InspectionItem } from '@/types/inspection';

export const wallCladdingItems: Omit<InspectionItem, 'score'>[] = [
  // Wall Cladding (10) - Brick/Stone Veneer
  {
    id: 'wall-cladding-brick-air-space',
    category: 'Wall Cladding',
    subcategory: 'Brick/Stone Veneer',
    item: 'Air Space',
    weight: 10,
    scoreDescriptions: {
      0: 'No air space was provided behind the brick veneer.',
      1: 'No score',
      2: 'The air space provided behind the brick veneer was less than 1" or greater than 2".',
      3: 'No score',
      4: 'A consistent 1" air space was provided behind all brick veneer.'
    }
  },
  {
    id: 'wall-cladding-brick-drainage',
    category: 'Wall Cladding',
    subcategory: 'Brick/Stone Veneer',
    item: 'Drainage',
    weight: 10,
    scoreDescriptions: {
      0: 'No weep holes or drainage were provided in the brick veneer.',
      1: 'No score',
      2: 'Weep holes were provided but not consistently spaced.',
      3: 'No score',
      4: 'Weep holes were properly installed and consistently spaced.'
    }
  },
  {
    id: 'wall-cladding-brick-flashing',
    category: 'Wall Cladding',
    subcategory: 'Brick/Stone Veneer',
    item: 'Flashing',
    weight: 10,
    scoreDescriptions: {
      0: 'No flashing was installed behind the brick veneer.',
      1: 'No score',
      2: 'Flashing was installed behind the brick veneer with minor gaps.',
      3: 'No score',
      4: 'Flashing was properly installed behind all brick veneer.'
    }
  },
  // Wood Siding
  {
    id: 'wall-cladding-wood-installation',
    category: 'Wall Cladding',
    subcategory: 'Wood Siding',
    item: 'Installation',
    weight: 10,
    scoreDescriptions: {
      0: 'Wood siding was poorly installed with major gaps.',
      1: 'Wood siding was installed with minor gaps.',
      2: 'Wood siding was properly installed with minor inconsistencies.',
      3: 'No score',
      4: 'Wood siding was properly installed with no gaps.'
    }
  },
  {
    id: 'wall-cladding-wood-fastening',
    category: 'Wall Cladding',
    subcategory: 'Wood Siding',
    item: 'Fastening',
    weight: 10,
    scoreDescriptions: {
      0: 'Wood siding was improperly fastened.',
      1: 'Wood siding fastening had minor issues.',
      2: 'Wood siding was properly fastened with minor inconsistencies.',
      3: 'No score',
      4: 'Wood siding was properly fastened throughout.'
    }
  },
  // Vinyl Siding
  {
    id: 'wall-cladding-vinyl-installation',
    category: 'Wall Cladding',
    subcategory: 'Vinyl Siding',
    item: 'Installation',
    weight: 10,
    scoreDescriptions: {
      0: 'Vinyl siding was poorly installed with major gaps.',
      1: 'Vinyl siding was installed with minor gaps.',
      2: 'Vinyl siding was properly installed with minor inconsistencies.',
      3: 'No score',
      4: 'Vinyl siding was properly installed with no gaps.'
    }
  },
  {
    id: 'wall-cladding-vinyl-expansion',
    category: 'Wall Cladding',
    subcategory: 'Vinyl Siding',
    item: 'Expansion Allowance',
    weight: 10,
    scoreDescriptions: {
      0: 'No expansion allowance was provided for vinyl siding.',
      1: 'Minimal expansion allowance was provided.',
      2: 'Adequate expansion allowance was provided with minor issues.',
      3: 'No score',
      4: 'Proper expansion allowance was provided throughout.'
    }
  }
];
