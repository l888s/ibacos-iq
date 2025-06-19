
import { InspectionItem } from '@/types/inspection';

export const exteriorItems: Omit<InspectionItem, 'score'>[] = [
  // Wall Cladding (4) - Siding
  {
    id: 'wall-cladding-siding-attachment',
    category: 'Wall Cladding',
    subcategory: 'Siding',
    item: 'Siding Attachment',
    weight: 4,
    scoreDescriptions: {
      0: 'Siding was not attached according to manufacturer specifications.',
      1: 'No score',
      2: 'Siding was attached according to manufacturer specifications with minor inconsistencies.',
      3: 'No score',
      4: 'Siding was attached according to manufacturer specifications.'
    }
  },
  {
    id: 'wall-cladding-siding-gaps',
    category: 'Wall Cladding',
    subcategory: 'Siding',
    item: 'Siding Gaps at Penetrations',
    weight: 4,
    scoreDescriptions: {
      0: 'Gaps around siding at penetrations were not sealed.',
      1: 'No score',
      2: 'Gaps around siding at penetrations were sealed with minor inconsistencies.',
      3: 'No score',
      4: 'All gaps around siding at penetrations were properly sealed.'
    }
  },
  // Wall Cladding (4) - Windows and Doors
  {
    id: 'wall-cladding-windows-doors-flashing',
    category: 'Wall Cladding',
    subcategory: 'Windows and Doors',
    item: 'Window and Door Flashing',
    weight: 4,
    scoreDescriptions: {
      0: 'Window and door flashing was not installed according to manufacturer specifications.',
      1: 'No score',
      2: 'Window and door flashing was installed according to manufacturer specifications with minor inconsistencies.',
      3: 'No score',
      4: 'Window and door flashing was installed according to manufacturer specifications.'
    }
  },
  {
    id: 'wall-cladding-windows-doors-integration',
    category: 'Wall Cladding',
    subcategory: 'Windows and Doors',
    item: 'Window and Door Integration with Wall Cladding',
    weight: 4,
    scoreDescriptions: {
      0: 'Windows and doors were not properly integrated with wall cladding.',
      1: 'No score',
      2: 'Windows and doors were integrated with wall cladding with minor inconsistencies.',
      3: 'No score',
      4: 'Windows and doors were properly integrated with wall cladding.'
    }
  }
];
