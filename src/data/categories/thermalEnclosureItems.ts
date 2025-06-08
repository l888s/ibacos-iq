
import { InspectionItem } from '@/types/inspection';

export const thermalEnclosureItems: Omit<InspectionItem, 'score'>[] = [
  // Thermal Enclosure (7) - Insulation Installation
  {
    id: 'thermal-enclosure-batt-insulation',
    category: 'Thermal Enclosure',
    subcategory: 'Insulation Installation',
    item: 'Batt Insulation',
    weight: 7,
    scoreDescriptions: {
      0: 'Batt insulation was poorly installed with major gaps.',
      1: 'Batt insulation was installed with minor gaps.',
      2: 'Batt insulation was properly installed with minor inconsistencies.',
      3: 'No score',
      4: 'Batt insulation was properly installed with no gaps or compression.'
    }
  },
  {
    id: 'thermal-enclosure-blown-insulation',
    category: 'Thermal Enclosure',
    subcategory: 'Insulation Installation',
    item: 'Blown Insulation',
    weight: 7,
    scoreDescriptions: {
      0: 'Blown insulation was installed below required R-value.',
      1: 'Blown insulation was installed with minor density variations.',
      2: 'Blown insulation was installed at required R-value with minor variations.',
      3: 'No score',
      4: 'Blown insulation was installed above required R-value with uniform density.'
    }
  },
  {
    id: 'thermal-enclosure-foam-insulation',
    category: 'Thermal Enclosure',
    subcategory: 'Insulation Installation',
    item: 'Spray Foam Insulation',
    weight: 7,
    scoreDescriptions: {
      0: 'Spray foam insulation was poorly installed with major gaps.',
      1: 'Spray foam insulation was installed with minor gaps.',
      2: 'Spray foam insulation was properly installed with minor inconsistencies.',
      3: 'No score',
      4: 'Spray foam insulation was properly installed with complete coverage.'
    }
  },
  // Thermal Enclosure (7) - Windows/Doors (Installation)
  {
    id: 'thermal-enclosure-window-installation',
    category: 'Thermal Enclosure',
    subcategory: 'Windows/Doors (Installation)',
    item: 'Window Installation',
    weight: 7,
    scoreDescriptions: {
      0: 'Windows were poorly installed with major air leaks.',
      1: 'Windows were installed with minor air leaks.',
      2: 'Windows were properly installed with minor gaps.',
      3: 'Windows were properly installed and sealed.',
      4: 'Windows were installed and sealed better than specifications.'
    }
  },
  {
    id: 'thermal-enclosure-door-installation',
    category: 'Thermal Enclosure',
    subcategory: 'Windows/Doors (Installation)',
    item: 'Door Installation',
    weight: 7,
    scoreDescriptions: {
      0: 'Doors were poorly installed with major air leaks.',
      1: 'Doors were installed with minor air leaks.',
      2: 'Doors were properly installed with minor gaps.',
      3: 'Doors were properly installed and sealed.',
      4: 'Doors were installed and sealed better than specifications.'
    }
  },
  // Thermal Enclosure (7) - Windows/Doors (Specification)
  {
    id: 'thermal-enclosure-window-type',
    category: 'Thermal Enclosure',
    subcategory: 'Windows/Doors (Specification)',
    item: 'Window Type',
    weight: 7,
    scoreDescriptions: {
      0: 'Windows were single-pane or had poor thermal performance.',
      1: 'Windows had minimal thermal performance improvements.',
      2: 'Windows met minimum energy code requirements.',
      3: 'Windows exceeded minimum energy code requirements.',
      4: 'Windows significantly exceeded energy code requirements.'
    }
  },
  {
    id: 'thermal-enclosure-door-type',
    category: 'Thermal Enclosure',
    subcategory: 'Windows/Doors (Specification)',
    item: 'Door Type',
    weight: 7,
    scoreDescriptions: {
      0: 'Doors were constructed of uninsulated material.',
      1: 'No score',
      2: 'Doors were constructed of material that provides minimal insulation.',
      3: 'Doors were constructed of an insulated material with a U-value range between 0.2 and 0.25.',
      4: 'Doors were constructed of an insulated material with a U-value below 0.2.'
    }
  },
  // Thermal Enclosure (7) - Attic/Ceiling Insulation
  {
    id: 'thermal-enclosure-attic-insulation',
    category: 'Thermal Enclosure',
    subcategory: 'Attic/Ceiling Insulation',
    item: 'Attic Insulation Depth',
    weight: 7,
    scoreDescriptions: {
      0: 'Attic insulation was below required R-value.',
      1: 'Attic insulation met minimum R-value with minor gaps.',
      2: 'Attic insulation met required R-value with minor inconsistencies.',
      3: 'Attic insulation exceeded required R-value.',
      4: 'Attic insulation significantly exceeded required R-value with uniform coverage.'
    }
  },
  {
    id: 'thermal-enclosure-ceiling-air-barrier',
    category: 'Thermal Enclosure',
    subcategory: 'Attic/Ceiling Insulation',
    item: 'Ceiling Air Barrier',
    weight: 7,
    scoreDescriptions: {
      0: 'No ceiling air barrier was installed.',
      1: 'Ceiling air barrier was installed with major gaps.',
      2: 'Ceiling air barrier was installed with minor gaps.',
      3: 'Ceiling air barrier was properly installed with minor inconsistencies.',
      4: 'Ceiling air barrier was properly installed and sealed.'
    }
  }
];
