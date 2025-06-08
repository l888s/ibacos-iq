
import { InspectionItem } from '@/types/inspection';

export const airBarrierItems: Omit<InspectionItem, 'score'>[] = [
  // Air Barrier (6) - Penetrations
  {
    id: 'air-barrier-electrical-penetrations',
    category: 'Air Barrier',
    subcategory: 'Penetrations',
    item: 'Electrical Penetrations',
    weight: 6,
    scoreDescriptions: {
      0: 'Electrical penetrations were not sealed.',
      1: 'Electrical penetrations were sealed with minor gaps.',
      2: 'Electrical penetrations were properly sealed.',
      3: 'No score',
      4: 'Electrical penetrations were sealed better than minimum requirements.'
    }
  },
  {
    id: 'air-barrier-plumbing-penetrations',
    category: 'Air Barrier',
    subcategory: 'Penetrations',
    item: 'Plumbing Penetrations',
    weight: 6,
    scoreDescriptions: {
      0: 'Plumbing penetrations were not sealed.',
      1: 'Plumbing penetrations were sealed with minor gaps.',
      2: 'Plumbing penetrations were properly sealed.',
      3: 'No score',
      4: 'Plumbing penetrations were sealed better than minimum requirements.'
    }
  },
  {
    id: 'air-barrier-hvac-penetrations',
    category: 'Air Barrier',
    subcategory: 'Penetrations',
    item: 'HVAC Penetrations',
    weight: 6,
    scoreDescriptions: {
      0: 'HVAC penetrations were not sealed.',
      1: 'HVAC penetrations were sealed with minor gaps.',
      2: 'HVAC penetrations were properly sealed.',
      3: 'No score',
      4: 'HVAC penetrations were sealed better than minimum requirements.'
    }
  },
  // Air Barrier (6) - Recessed Lights
  {
    id: 'air-barrier-airtight-can-lights',
    category: 'Air Barrier',
    subcategory: 'Recessed Lights',
    item: 'Airtight Can Lights',
    weight: 6,
    scoreDescriptions: {
      0: 'Recessed lights installed in insulated ceilings were not rated as airtight.',
      1: 'No score',
      2: 'Recessed lights in insulated ceilings were rated as airtight, but no gasketed trim assemblies were installed.',
      3: 'No score',
      4: 'Surface-mounted LED lighting was used in-lieu of can lighting.'
    }
  },
  {
    id: 'air-barrier-can-light-gaskets',
    category: 'Air Barrier',
    subcategory: 'Recessed Lights',
    item: 'Gasket Installation',
    weight: 6,
    scoreDescriptions: {
      0: 'Gaskets were not installed on recessed lights.',
      1: 'Gaskets were installed with minor gaps.',
      2: 'Gaskets were properly installed on most recessed lights.',
      3: 'No score',
      4: 'Gaskets were properly installed on all recessed lights.'
    }
  },
  // Air Barrier (6) - Top Plates
  {
    id: 'air-barrier-top-plate-sealing',
    category: 'Air Barrier',
    subcategory: 'Top Plates',
    item: 'Top Plate Sealing',
    weight: 6,
    scoreDescriptions: {
      0: 'Top plates were not sealed.',
      1: 'Top plates were sealed with minor gaps.',
      2: 'Top plates were properly sealed with minor inconsistencies.',
      3: 'No score',
      4: 'Top plates were completely sealed with appropriate materials.'
    }
  },
  // Air Barrier (6) - Rim Joists
  {
    id: 'air-barrier-rim-joist-sealing',
    category: 'Air Barrier',
    subcategory: 'Rim Joists',
    item: 'Rim Joist Sealing',
    weight: 6,
    scoreDescriptions: {
      0: 'Rim joists were not sealed.',
      1: 'Rim joists were sealed with minor gaps.',
      2: 'Rim joists were properly sealed with minor inconsistencies.',
      3: 'No score',
      4: 'Rim joists were completely sealed and insulated.'
    }
  }
];
