
import { InspectionItem } from '@/types/inspection';

export const hvacItems: Omit<InspectionItem, 'score'>[] = [
  // HVAC Systems (10) - Heating System
  {
    id: 'hvac-systems-heating-system-heat-pump',
    category: 'HVAC Systems',
    subcategory: 'Heating System',
    item: 'Heat Pump',
    weight: 10,
    scoreDescriptions: {
      0: 'Heat pump HSPF efficiency ratings were less than DOE Standards.',
      1: 'No score',
      2: 'Heat pump HSPF efficiency ratings met DOE Standards',
      3: 'No score',
      4: 'Heat pump HSPF efficiency ratings were above DOE Standards.'
    }
  },
  {
    id: 'hvac-systems-heating-system-location',
    category: 'HVAC Systems',
    subcategory: 'Heating System',
    item: 'Location of Air Handler',
    weight: 10,
    scoreDescriptions: {
      0: 'The air handlers were located in the garages, without airtight separation between the garages and the air handlers.',
      1: 'No score',
      2: 'The air handlers were located in unconditioned space.',
      3: 'No score',
      4: 'The air handlers were located in conditioned space.'
    }
  },
  // HVAC Systems (10) - Cooling System
  {
    id: 'hvac-systems-cooling-system-',
    category: 'HVAC Systems',
    subcategory: 'Cooling System',
    item: 'Efficiency',
    weight: 10,
    scoreDescriptions: {
      0: 'The unit efficiency of air conditioner condensers was below DOE Standards.',
      1: 'No score',
      2: 'The unit efficiency of air conditioner condensers met DOE Standards.',
      3: 'No score',
      4: 'The unit efficiency of air conditioner condensers was above DOE Standards.'
    }
  },
  // HVAC Systems (10) - Supply Ductwork
  {
    id: 'hvac-systems-supply-ductwork-attic-install',
    category: 'HVAC Systems',
    subcategory: 'Supply Ductwork',
    item: 'Attic Ductwork Installation',
    weight: 10,
    scoreDescriptions: {
      0: 'No score',
      1: 'Ducts were installed on joist bays or bottom chords of trusses and were to be buried in the attic insulation with quality control issues.',
      2: 'Ducts were installed on joist bays or bottom chords of trusses and were to be buried in the attic insulation.',
      3: 'Ducts were supported at least 14" above bottom chords to allow for full depth of insulation below.',
      4: 'Ducts were supported at least 18" above bottom chords to allow for full depth of insulation below.'
    }
  },
  {
    id: 'hvac-systems-supply-ductwork-balancing-dampers',
    category: 'HVAC Systems',
    subcategory: 'Supply Ductwork',
    item: 'Balancing Dampers',
    weight: 10,
    scoreDescriptions: {
      0: 'No balancing dampers were installed.',
      1: 'No score',
      2: 'Adjustable supply vents were installed.',
      3: 'Balancing dampers were installed at the supply boots.',
      4: 'Balancing dampers were installed at takeoffs.'
    }
  },
  {
    id: 'hvac-systems-supply-ductwork-boot-insulation',
    category: 'HVAC Systems',
    subcategory: 'Supply Ductwork',
    item: 'Boot Insulation',
    weight: 10,
    scoreDescriptions: {
      0: 'Supply boots in unconditioned space were not insulated in a humid or cold climate.',
      1: 'No score',
      2: 'Boots are insulated using the duct jacket, or boots are not insulated in a dry climate.',
      3: 'No score',
      4: 'Supply boots in unconditioned space were insulated.'
    }
  },
  {
    id: 'hvac-systems-supply-ductwork-boot-location',
    category: 'HVAC Systems',
    subcategory: 'Supply Ductwork',
    item: 'Boot Location Sealed',
    weight: 10,
    scoreDescriptions: {
      0: 'Boots were not sealed to the floor/wall/ceiling.',
      1: 'No score',
      2: 'No score',
      3: 'No score',
      4: 'Boots were sealed to the floor/wall/ceiling.'
    }
  },
  {
    id: 'hvac-systems-supply-ductwork-boot-transitions',
    category: 'HVAC Systems',
    subcategory: 'Supply Ductwork',
    item: 'Boot Transitions',
    weight: 10,
    scoreDescriptions: {
      0: 'Supply boots had hard transitions.',
      1: 'No score',
      2: 'Supply boots often had hard transitions.',
      3: 'No score',
      4: 'Supply boots always had smooth transitions.'
    }
  },
  {
    id: 'hvac-systems-supply-ductwork-branch-takeoff',
    category: 'HVAC Systems',
    subcategory: 'Supply Ductwork',
    item: 'Branch Takeoff Spacing',
    weight: 10,
    scoreDescriptions: {
      0: 'Branch takeoffs were installed with minimal space from each other and were opposed.',
      1: 'No score',
      2: 'Branch takeoffs were staggered and had at least 1 duct diameter between each takeoff.',
      3: 'No score',
      4: 'Branch takeoffs were staggered and had at least 12 inches between each takeoff.'
    }
  },
  {
    id: 'hvac-systems-supply-ductwork-ceiling-diffuser',
    category: 'HVAC Systems',
    subcategory: 'Supply Ductwork',
    item: 'Ceiling Diffuser Location',
    weight: 10,
    scoreDescriptions: {
      0: 'No score',
      1: 'No score',
      2: 'No score',
      3: 'Diffusers were located in close proximity to exterior walls.',
      4: 'Diffusers were located in the ceiling near interior walls or in interior high sidewall, away from exterior walls.'
    }
  },
  {
    id: 'hvac-systems-supply-ductwork-diffuser-type',
    category: 'HVAC Systems',
    subcategory: 'Supply Ductwork',
    item: 'Diffuser Type',
    weight: 10,
    scoreDescriptions: {
      0: 'No score',
      1: 'No score',
      2: 'Normal conventional diffusers were used.',
      3: 'Throwing type registers were used in high sidewall or ceiling applications, but was not part of a compact duct design.',
      4: 'Throwing type diffusers were located in high sidewall or ceiling application as part of a compact duct design.'
    }
  },
  {
    id: 'hvac-systems-supply-ductwork-distrib-transitions',
    category: 'HVAC Systems',
    subcategory: 'Supply Ductwork',
    item: 'Distribution Transitions',
    weight: 10,
    scoreDescriptions: {
      0: 'The supply duct systems often had hard transitions.',
      1: 'No score',
      2: 'The supply duct systems were installed with minimal hard transitions.',
      3: 'No score',
      4: 'The supply ducts ran through a well-designed system that had smooth transitions in all cases.'
    }
  },
  {
    id: 'hvac-systems-supply-ductwork-duct-layout',
    category: 'HVAC Systems',
    subcategory: 'Supply Ductwork',
    item: 'Duct Layout',
    weight: 10,
    scoreDescriptions: {
      0: 'No duct layout was used on site.',
      1: 'No score',
      2: 'A duct layout was laid out (by a foreman) for installers, but the layout was not available during the installation.',
      3: 'No score',
      4: 'A duct layout has been created using ACCA Manual "D" and was available on site. (hard copy or digital).'
    }
  },
  {
    id: 'hvac-systems-supply-ductwork-duct-contact',
    category: 'HVAC Systems',
    subcategory: 'Supply Ductwork',
    item: 'Ducts in Contact',
    weight: 10,
    scoreDescriptions: {
      0: 'There were many instances observed where flex ducts were in contact with each other or framing.',
      1: 'No score',
      2: 'There were minor instances observed where flex ducts were in contact with each other or framing.',
      3: 'No score',
      4: 'Flex ducts were not in contact with each other or framing.'
    }
  },
  {
    id: 'hvac-systems-supply-ductwork-duct-ext-wall',
    category: 'HVAC Systems',
    subcategory: 'Supply Ductwork',
    item: 'Ducts in Exterior Walls',
    weight: 10,
    scoreDescriptions: {
      0: 'Ducts were located in exterior walls without foam behind them.',
      1: 'No score',
      2: 'Ducts had had minimum R-10 rigid insulation installed behind.',
      3: 'No score',
      4: 'No ducts were located in exterior walls.'
    }
  },
  {
    id: 'hvac-systems-supply-ductwork-duct-ext-wall',
    category: 'HVAC Systems',
    subcategory: 'Supply Ductwork',
    item: 'Ductwork Sealed for Tightness',
    weight: 10,
    scoreDescriptions: {
      0: 'All ductwork was unsealed.',
      1: 'Ductwork was sealed only with tape that was not UL181 metal duct tape.',
      2: 'Ductwork was sealed with UL181 metal duct tape.',
      3: 'Ductwork was sealed with both UL181 metal duct tape and mastic.',
      4: 'All ductwork was sealed only with mastic, including flex duct.'
    }
  },
  {
    id: 'hvac-systems-supply-ductwork-flex-duct-inst',
    category: 'HVAC Systems',
    subcategory: 'Supply Ductwork',
    item: 'Flex Duct Installation',
    weight: 10,
    scoreDescriptions: {
      0: 'Supply ductwork was poorly stretched, improperly supported, and/or often crimped at bends.',
      1: 'No score',
      2: 'With only a few exceptions, flex duct was well stretched, was supported at 5 foot intervals using straps, and had no more than 1/2" per foot of sag between straps. (2 1/2" total for 5 ft.)',
      3: 'No score',
      4: 'All flex duct was well stretched, was supported at 5 foot intervals using straps, and had no more than 1/2" per foot of sag between straps. (2 1/2" total for 5 ft.)'
    }
  },
  {
    id: 'hvac-systems-supply-ductwork-insulation',
    category: 'HVAC Systems',
    subcategory: 'Supply Ductwork',
    item: 'Insulation',
    weight: 10,
    scoreDescriptions: {
      0: 'All supply systems located in unconditioned space were made of uninsulated sheet metal.',
      1: 'No score',
      2: 'All supply systems located in unconditioned space were insulated using 1" duct board for trunks and R-6 insulated flex ducts for branches.',
      3: 'All supply systems located in unconditioned space were insulated using 1" duct board for trunks and R-8 flex duct for branches.',
      4: 'No score'
    }
  },
  {
    id: 'hvac-systems-supply-ductwork-location',
    category: 'HVAC Systems',
    subcategory: 'Supply Ductwork',
    item: 'Location',
    weight: 10,
    scoreDescriptions: {
      0: 'No score',
      1: 'No score',
      2: 'Supply ducts were located in unconditioned space.',
      3: 'No score',
      4: 'All supply duct systems were located in conditioned space.'
    }
  },
  {
    id: 'hvac-systems-supply-splitter-box',
    category: 'HVAC Systems',
    subcategory: 'Supply Ductwork',
    item: 'Splitter Box Installation',
    weight: 10,
    scoreDescriptions: {
      0: 'Many splitter boxes were installed creating long branches or were not sealed.',
      1: 'No score',
      2: 'Splitter boxes were installed and limited to create a more direct route and were well sealed.',
      3: 'No score',
      4: 'Wye fittings were installed and limited to create a more direct route and were well sealed.'
    }
  },
  {
    id: 'hvac-systems-supply-trunk-term',
    category: 'HVAC Systems',
    subcategory: 'Supply Ductwork',
    item: 'Trunk Termination',
    weight: 10,
    scoreDescriptions: {
      0: 'Branch takeoffs were installed at trunk end.',
      1: 'No score',
      2: 'Branch takeoffs were installed within 12" from trunk end.',
      3: 'No score',
      4: 'Branch takeoffs were installed more than 12" from trunk end or alternative measures are taken to ensure proper room air balance.'
    }
  },
  {
    id: 'hvac-systems-supply-vapor-jacket',
    category: 'HVAC Systems',
    subcategory: 'Supply Ductwork',
    item: 'Vapor Jacket Sealing',
    weight: 10,
    scoreDescriptions: {
      0: 'All vapor jackets were unsealed.',
      1: 'Vapor jackets were sealed only with UL181 metal duct tape.',
      2: 'Vapor jackets were sealed with a combination of UL181 metal duct tape and mastic.',
      3: 'All vapor jackets were sealed with mastic except for flex duct.',
      4: 'All vapor jackets were sealed only with mastic, including flex duct.'
    }
  },
  // HVAC Systems (10) - Return Ductwork
  {
    id: 'hvac-systems-return-ductwork-central-return',
    category: 'HVAC Systems',
    subcategory: 'Return Ductwork',
    item: 'Central Returns',
    weight: 10,
    scoreDescriptions: {
      0: 'No score',
      1: 'Panned returns were common using floor joists or wall cavities.',
      2: 'A central return strategy with jump ducts or transfer grilles from enclosed rooms was used, but did not have one return on every floor. Or A central return closet with open return (common in Florida) was used.',
      3: 'No score',
      4: 'A central return strategy with jump ducts or transfer grilles from enclosed rooms and had one central return on every floor of all homes.'
    }
  },
  {
    id: 'hvac-systems-return-ductwork-duct-cleanliness',
    category: 'HVAC Systems',
    subcategory: 'Return Ductwork',
    item: 'Duct Cleanliness',
    weight: 10,
    scoreDescriptions: {
      0: 'No duct cleanliness strategies were implemented.',
      1: 'No score',
      2: 'Filters were in place during construction.',
      3: 'Boot covers were installed, and filters were in place during construction.',
      4: 'Boot covers were installed, and filters were in place during construction. Ducts were cleaned after construction.'
    }
  },
  {
    id: 'hvac-systems-return-ductwork-duct-cleanliness',
    category: 'HVAC Systems',
    subcategory: 'Return Ductwork',
    item: 'Ducts in Contact',
    weight: 10,
    scoreDescriptions: {
      0: 'There were many instances observed where flex ducts were in contact with each other or framing.',
      1: 'No score',
      2: 'There were minor instances observed where flex ducts were in contact with each other or framing.',
      3: 'No score',
      4: 'Flex ducts were not in contact with each other or framing.'
    }
  },
  {
    id: 'hvac-systems-return-ductwork-duct-tightness',
    category: 'HVAC Systems',
    subcategory: 'Return Ductwork',
    item: 'Ductwork Sealed for Tightness',
    weight: 10,
    scoreDescriptions: {
      0: 'All ductwork was unsealed.',
      1: 'Ductwork was sealed only with tape that was not UL181 metal duct tape.',
      2: 'Ductwork was sealed with UL181 metal duct tape.',
      3: 'Ductwork was sealed with both UL181 metal duct tape and mastic.',
      4: 'All ductwork was sealed only with mastic, including flex duct.'
    }
  },
  {
    id: 'hvac-systems-return-ductwork-filter-location',
    category: 'HVAC Systems',
    subcategory: 'Return Ductwork',
    item: 'Filter Location',
    weight: 10,
    scoreDescriptions: {
      0: 'Filters were in inaccessible locations.',
      1: 'No score',
      2: 'No score',
      3: 'No score',
      4: 'Filters were in accessible locations.'
    }
  },
  {
    id: 'hvac-systems-return-ductwork-filter-merv',
    category: 'HVAC Systems',
    subcategory: 'Return Ductwork',
    item: 'Filter MERV Rating',
    weight: 10,
    scoreDescriptions: {
      0: 'Installed filters had a MERV rating that was less than 4.',
      1: 'Installed filters had a MERV rating that was between 4 and 6.',
      2: 'Installed filters had a MERV rating that was between 7 and 9.',
      3: 'No score',
      4: 'Installed filters had a MERV rating that was 10 or greater.'
    }
  },
  {
    id: 'hvac-systems-return-ductwork-flex-duct-inst',
    category: 'HVAC Systems',
    subcategory: 'Return Ductwork',
    item: 'Flex Duct Installation',
    weight: 10,
    scoreDescriptions: {
      0: 'Supply ductwork was poorly stretched, improperly supported, and/or often crimped at bends.',
      1: 'No score',
      2: 'With only a few exceptions, flex duct was well stretched, was supported at 5 foot intervals using straps, and had no more than 1/2" per foot of sag between straps. (For 5 ft. no more than 2 1/2" sag.)',
      3: 'No score',
      4: 'All flex duct was well stretched, was supported at 5 foot intervals using straps, and had no more than 1/2" per foot of sag between straps. (For 5 ft. no more than 2 1/2" sag.)'
    }
  },
  {
    id: 'hvac-systems-return-ductwork-insulated',
    category: 'HVAC Systems',
    subcategory: 'Return Ductwork',
    item: 'Insulated (N/A if Conditioned)',
    weight: 10,
    scoreDescriptions: {
      0: 'Return ducts in unconditioned space were uninsulated sheet metal.',
      1: 'Return ducts in unconditioned space were insulated sheet metal.',
      2: 'Return ducts in unconditioned space were a mix of insulated sheet metal and flex duct or duct board.',
      3: 'Return ducts in unconditioned space were duct board or flex duct.',
      4: 'No score'
    }
  },
  {
    id: 'hvac-systems-return-ductwork-location',
    category: 'HVAC Systems',
    subcategory: 'Return Ductwork',
    item: 'Location (Conditioned/ Unconditioned)',
    weight: 10,
    scoreDescriptions: {
      0: 'No score',
      1: 'No score',
      2: 'Return ducts were located in unconditioned space.',
      3: 'No score',
      4: 'All return ducts were located in conditioned space.'
    }
  },
  {
    id: 'hvac-systems-return-ductwork-location',
    category: 'HVAC Systems',
    subcategory: 'Return Ductwork',
    item: 'Location (Conditioned/ Unconditioned)',
    weight: 10,
    scoreDescriptions: {
      0: 'No score',
      1: 'No score',
      2: 'Return ducts were located in unconditioned space.',
      3: 'No score',
      4: 'All return ducts were located in conditioned space.'
    }
  },
];
