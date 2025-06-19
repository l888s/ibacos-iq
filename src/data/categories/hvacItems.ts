
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
    id: 'hvac-systems-return-ductwork-return-ductwork',
    category: 'HVAC Systems',
    subcategory: 'Return Ductwork',
    item: 'Return Boxes',
    weight: 10,
    scoreDescriptions: {
      0: 'Filters did not fit within filter boxes allowing air to bypass the filter.',
      1: 'No score',
      2: 'No score',
      3: 'No score',
      4: 'Filters fit filter boxes properly.'
    }
  },
  {
    id: 'hvac-systems-return-ductwork-return-transitions',
    category: 'HVAC Systems',
    subcategory: 'Return Ductwork',
    item: 'Return Transitions',
    weight: 10,
    scoreDescriptions: {
      0: 'No score',
      1: 'Return ductwork systems had irregular transitions.',
      2: 'No score',
      3: 'No score',
      4: 'All return duct transitions were smooth.'
    }
  },
  {
    id: 'hvac-systems-return-ductwork-vapor-jacket',
    category: 'HVAC Systems',
    subcategory: 'Return Ductwork',
    item: 'Vapor Jacket Sealing',
    weight: 10,
    scoreDescriptions: {
      0: 'All vapor jackets were unsealed.',
      1: 'Vapor jacket were sealed only with UL181 metal duct tape.',
      2: 'Vapor jackets were sealed with a combination of UL181 metal duct tape and mastic.',
      3: 'All vapor jackets were sealed with mastic except for flex duct.',
      4: 'All vapor jackets were sealed only with mastic, including flex duct.'
    }
  },
  // HVAC Systems (10) - Ventilation
  {
    id: 'hvac-systems-ventilation-air-tightness',
    category: 'HVAC Systems',
    subcategory: 'Ventilation',
    item: 'Air Tightness Testing',
    weight: 10,
    scoreDescriptions: {
      0: 'No whole-house airtightness testing was performed, and no ventilation strategy was present.',
      1: 'Visual inspection for airtightness were made, and a ventilation strategy was present.',
      2: 'A sampling of homes was tested for airtightness.',
      3: 'A sampling of homes was tested for airtightness and had a ventilation strategy present to provide proper mechanical ventilation based on testing.',
      4: 'All homes were tested for airtightness and had a ventilation strategy present to provide proper mechanical ventilation based on testing.'
    }
  },
  {
    id: 'hvac-systems-ventilation-bath-vent-exit',
    category: 'HVAC Systems',
    subcategory: 'Ventilation',
    item: 'Bath Venting: Duct Exit',
    weight: 10,
    scoreDescriptions: {
      0: 'Bath ducts terminated in attics or at a ventilated soffit.',
      1: 'No score',
      2: 'Bath ducts terminated at a soffit and were not within 4' of a soffit vent.',
      3: 'Bath ducts were exhausted either through the roof or on the gable end, with some quality control issues.',
      4: 'Bath ducts were exhausted either through the roof or on the gable end.'
    }
  },
  {
    id: 'hvac-systems-ventilation-bath-vent-mat',
    category: 'HVAC Systems',
    subcategory: 'Ventilation',
    item: 'Bath Venting: Duct Material',
    weight: 10,
    scoreDescriptions: {
      0: 'Bath ductwork was constructed of vinyl.',
      1: 'No score',
      2: 'Bath ductwork was constructed of foil accordion-type material.',
      3: 'Bath ductwork was constructed of semi-rigid, aluminum accordion-type material and was insulated through unconditioned space (except in hot/dry climates).',
      4: 'Bath ductwork was constructed of rigid metal duct, sealed, and was insulated through unconditioned space.'
    }
  },
  {
    id: 'hvac-systems-ventilation-bath-vent-duct-route',
    category: 'HVAC Systems',
    subcategory: 'Ventilation',
    item: 'Bath Venting: Duct Routing',
    weight: 10,
    scoreDescriptions: {
      0: 'Bath ductwork was pinched and had many sharp bends.',
      1: 'No score',
      2: 'Bath ductwork was routed properly and directly without any sharp bends, with minor inconsistencies.',
      3: 'No score',
      4: 'Bath ductwork was routed properly and directly without any sharp bends.'
    }
  },
  {
    id: 'hvac-systems-ventilation-bath-vent-fan-type',
    category: 'HVAC Systems',
    subcategory: 'Ventilation',
    item: 'Bath Venting: Fan Type',
    weight: 10,
    scoreDescriptions: {
      0: 'Bath fans were not installed.',
      1: 'Bath fans were inconsistently installed.',
      2: 'Standard (high sone) bath fans were installed in all baths.',
      3: 'Low sone type bath fans were installed but did not have automatic controls.',
      4: 'Low sone type bath fans were installed and had automatic controls.'
    }
  },
  {
    id: 'hvac-systems-ventilation-dryer-duct-length',
    category: 'HVAC Systems',
    subcategory: 'Ventilation',
    item: 'Dryer Venting: Duct Length',
    weight: 10,
    scoreDescriptions: {
      0: 'The dryers were not usually located on exterior walls or other areas to permit short runs to ensure the equivalent duct lengths were 25' or less.',
      1: 'No score',
      2: 'The dryers were usually located on exterior walls or other areas to permit short runs to ensure the equivalent duct lengths were 25' or less, with minor inconsistencies.',
      3: 'No score',
      4: 'The dryers were always located on exterior walls or other areas to permit short runs to ensure the equivalent duct lengths were 25' or less.'
    }
  },
  {
    id: 'hvac-systems-ventilation-dryer-wall-box',
    category: 'HVAC Systems',
    subcategory: 'Ventilation',
    item: 'Dryer Venting: Wall Box',
    weight: 10,
    scoreDescriptions: {
      0: 'The dryer box was installed too high or in the wrong orientation.',
      1: 'No score',
      2: 'The dryer box was installed with the correct orientation and height, with some quality control issues.',
      3: 'No score',
      4: 'The dryer box was installed with the correct orientation and height.'
    }
  },
  {
    id: 'hvac-systems-ventilation-radon-venting',
    category: 'HVAC Systems',
    subcategory: 'Ventilation',
    item: 'Radon Venting',
    weight: 10,
    scoreDescriptions: {
      0: 'No radon or soil gas mitigation systems were installed and the Division is located in EPA Zone 1 for radon.',
      1: 'No radon or soil gas mitigation systems were installed and the Division is located in EPA Zone 2 for radon.',
      2: 'No radon or soil gas mitigation systems were installed and the Division is located in EPA Zone 3 for radon, or passive-type radon and soil gas systems were installed under the slab or basement floor or in the crawlspace.',
      3: 'No score',
      4: 'A passive venting system was installed and was pre-wired for fan, or a power venting system was installed.'
    }
  },
  {
    id: 'hvac-systems-ventilation-range-hood',
    category: 'HVAC Systems',
    subcategory: 'Ventilation',
    item: 'Range Hood Exhaust',
    weight: 10,
    scoreDescriptions: {
      0: 'Recirculating or no range hoods were used.',
      1: 'No score',
      2: 'Some homes had range hoods that were ducted to the exterior, but some homes had recirculating range hoods.',
      3: 'No score',
      4: 'All homes had range hoods that were ducted to the exterior.'
    }
  },
  {
    id: 'hvac-systems-ventilation-whole-house',
    category: 'HVAC Systems',
    subcategory: 'Ventilation',
    item: 'Whole-House Ventilation',
    weight: 10,
    scoreDescriptions: {
      0: 'Ventilation was exhaust only.',
      1: 'No whole-house ventilation strategy was employed.',
      2: 'Ventilation was supply only on a timer (Air Cycler).',
      3: 'Ventilation was supply only with an in-line ventilation dehumidifier.',
      4: 'Whole-house ventilation was achieved by a dedicated ventilation system where a properly-sized ERV/HRV and associated ductwork distributed air directly to the rooms.'
    }
  },
  // HVAC Systems (10) - Water Heating
  {
    id: 'hvac-systems-water-heating-electric-efficiency',
    category: 'HVAC Systems',
    subcategory: 'Water Heating',
    item: 'Electric Efficiency',
    weight: 10,
    scoreDescriptions: {
      0: 'No score',
      1: 'Visual inspection for airtightness were made, and a ventilation strategy was present.',
      2: 'Standard-efficiency electric water heaters were installed (0.92 to 0.95 EF).',
      3: 'High-efficiency electric water heater tanks were installed (greater than 0.95 EF).',
      4: 'High-efficiency electric tankless water heaters were installed (greater than 0.95 EF).'
    }
  },
  {
    id: 'hvac-systems-water-heating-location',
    category: 'HVAC Systems',
    subcategory: 'Water Heating',
    item: 'Location',
    weight: 10,
    scoreDescriptions: {
      0: 'Tank-type water heaters were located in unconditioned space in CZ 4 or higher.',
      1: 'Tank-type water heaters were located in unconditioned space (unless in climate zone 1 through 3).',
      2: 'Tank-type water heaters were located in conditioned space (for climate zones 4 or higher) or were in unconditioned space (for climate zone 1 through 3).',
      3: 'No score',
      4: 'All water heaters were located in conditioned space, or were tankless.'
    }
  },
  {
    id: 'hvac-systems-water-heating-location-durability',
    category: 'HVAC Systems',
    subcategory: 'Water Heating',
    item: 'Location (tank durability)',
    weight: 10,
    scoreDescriptions: {
      0: 'Water heaters were located in attics.',
      1: 'No score',
      2: 'Water heaters were in finished space with pan and drain.',
      3: 'No score',
      4: 'Water heaters were located in garages or basements.'
    }
  },
  // HVAC Systems (10) - Equipment Venting and Backdrafting Potential
  {
    id: 'hvac-systems-equipment-venting-and-backdrafting-potential',
    category: 'HVAC Systems',
    subcategory: 'Equipment Venting and Backdrafting Potential',
    item: 'Airtightness & Equipment Compatibility',
    weight: 10,
    scoreDescriptions: {
      0: 'Equipment specifications did not align with airtightness practices.',
      1: 'No score',
      2: 'There was an inconsistent airtightness and equipment strategy.',
      3: 'No score',
      4: 'Good air sealing practices were observed with direct vent or electric equipment.'
    }
  },
];
