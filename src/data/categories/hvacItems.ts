
import { InspectionItem } from '@/types/inspection';

export const hvacItems: Omit<InspectionItem, 'score'>[] = [
  // HVAC Systems (10) - Equipment Venting and Backdrafting Potential
  {
    id: 'hvac-airtightness-equipment-compatibility',
    category: 'HVAC Systems',
    subcategory: 'Equipment Venting and Backdrafting Potential',
    item: 'Airtightness & Equipment Compatibility (Worst Case Pressurization)',
    weight: 10,
    scoreDescriptions: {
      0: 'Equipment specifications did not align with airtightness practices.',
      1: 'No score',
      2: 'There was an inconsistent airtightness and equipment strategy.',
      3: 'No score',
      4: 'Good air sealing practices were observed with direct vent or electric equipment.'
    }
  },
  {
    id: 'hvac-combustion-air',
    category: 'HVAC Systems',
    subcategory: 'Equipment Venting and Backdrafting Potential',
    item: 'Combustion Air',
    weight: 10,
    scoreDescriptions: {
      0: 'Inadequate combustion air was provided for equipment.',
      1: 'Combustion air was marginally adequate.',
      2: 'Adequate combustion air was provided with minor issues.',
      3: 'No score',
      4: 'Proper combustion air was provided for all equipment.'
    }
  },
  // Ductwork
  {
    id: 'hvac-duct-sealing',
    category: 'HVAC Systems',
    subcategory: 'Ductwork',
    item: 'Duct Sealing',
    weight: 10,
    scoreDescriptions: {
      0: 'Ductwork was not sealed or poorly sealed.',
      1: 'Ductwork was sealed with minor gaps.',
      2: 'Ductwork was properly sealed with minor inconsistencies.',
      3: 'No score',
      4: 'Ductwork was properly sealed throughout.'
    }
  },
  {
    id: 'hvac-duct-installation',
    category: 'HVAC Systems',
    subcategory: 'Ductwork',
    item: 'Duct Installation',
    weight: 10,
    scoreDescriptions: {
      0: 'Ductwork was poorly installed with major issues.',
      1: 'Ductwork was installed with minor issues.',
      2: 'Ductwork was properly installed with minor inconsistencies.',
      3: 'No score',
      4: 'Ductwork was properly installed throughout.'
    }
  },
  {
    id: 'hvac-duct-insulation',
    category: 'HVAC Systems',
    subcategory: 'Ductwork',
    item: 'Duct Insulation',
    weight: 10,
    scoreDescriptions: {
      0: 'Ductwork in unconditioned spaces was not insulated.',
      1: 'Ductwork insulation was inadequate or poorly installed.',
      2: 'Ductwork was properly insulated with minor gaps.',
      3: 'No score',
      4: 'Ductwork was properly insulated throughout.'
    }
  },
  // Equipment Installation
  {
    id: 'hvac-equipment-installation',
    category: 'HVAC Systems',
    subcategory: 'Equipment Installation',
    item: 'Equipment Installation',
    weight: 10,
    scoreDescriptions: {
      0: 'HVAC equipment was poorly installed.',
      1: 'HVAC equipment was installed with minor issues.',
      2: 'HVAC equipment was properly installed with minor inconsistencies.',
      3: 'No score',
      4: 'HVAC equipment was properly installed throughout.'
    }
  }
];
