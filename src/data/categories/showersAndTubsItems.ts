
import { InspectionItem } from '@/types/inspection';

export const showersAndTubsItems: Omit<InspectionItem, 'score'>[] = [
  // Showers and Tubs (8) - Bathtubs with Shower Heads
  {
    id: 'showers-tubs-caulk-premanufactured',
    category: 'Showers and Tubs',
    subcategory: 'Bathtubs with Shower Heads',
    item: 'Caulk (premanufactured panels)',
    weight: 8,
    scoreDescriptions: {
      0: 'Caulk was not applied between the tub and surround panels where required by the manufacturer.',
      1: 'No score',
      2: 'No score',
      3: 'No score',
      4: 'Caulk was applied between the tub and surround panels where required by the manufacturer.'
    }
  },
  {
    id: 'showers-tubs-waterproofing',
    category: 'Showers and Tubs',
    subcategory: 'Bathtubs with Shower Heads',
    item: 'Waterproofing',
    weight: 8,
    scoreDescriptions: {
      0: 'No waterproofing membrane was installed behind tub surrounds.',
      1: 'No score',
      2: 'Waterproofing membrane was installed with minor gaps.',
      3: 'No score',
      4: 'Waterproofing membrane was properly installed behind all tub surrounds.'
    }
  },
  {
    id: 'showers-tubs-fastening',
    category: 'Showers and Tubs',
    subcategory: 'Bathtubs with Shower Heads',
    item: 'Fastening',
    weight: 8,
    scoreDescriptions: {
      0: 'Tub surround panels were improperly fastened.',
      1: 'Tub surround panels had minor fastening issues.',
      2: 'Tub surround panels were properly fastened with minor inconsistencies.',
      3: 'No score',
      4: 'Tub surround panels were properly fastened throughout.'
    }
  },
  // Tile Showers
  {
    id: 'showers-tubs-tile-waterproofing',
    category: 'Showers and Tubs',
    subcategory: 'Tile Showers',
    item: 'Waterproofing',
    weight: 8,
    scoreDescriptions: {
      0: 'No waterproofing membrane was installed in tile showers.',
      1: 'No score',
      2: 'Waterproofing membrane was installed with minor gaps.',
      3: 'No score',
      4: 'Waterproofing membrane was properly installed in all tile showers.'
    }
  },
  {
    id: 'showers-tubs-tile-installation',
    category: 'Showers and Tubs',
    subcategory: 'Tile Showers',
    item: 'Tile Installation',
    weight: 8,
    scoreDescriptions: {
      0: 'Tile was poorly installed with major gaps or misalignment.',
      1: 'Tile was installed with minor gaps or misalignment.',
      2: 'Tile was properly installed with minor inconsistencies.',
      3: 'No score',
      4: 'Tile was properly installed with consistent spacing and alignment.'
    }
  },
  {
    id: 'showers-tubs-tile-grout',
    category: 'Showers and Tubs',
    subcategory: 'Tile Showers',
    item: 'Grout',
    weight: 8,
    scoreDescriptions: {
      0: 'Grout was poorly applied or missing in areas.',
      1: 'Grout was applied with minor gaps.',
      2: 'Grout was properly applied with minor inconsistencies.',
      3: 'No score',
      4: 'Grout was properly applied throughout with consistent finish.'
    }
  }
];
