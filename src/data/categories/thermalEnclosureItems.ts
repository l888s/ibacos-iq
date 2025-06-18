
import { InspectionItem } from '@/types/inspection';

export const thermalEnclosureItems: Omit<InspectionItem, 'score'>[] = [
  // Thermal Enclosure (7) - Foundation Floors
  {
    id: 'thermal-enclosure-foundation-floors-insulation-specification-level',
    category: 'Thermal Enclosure',
    subcategory: 'Foundation Floors',
    item: 'Insulation Specification Level',
    weight: 7,
    scoreDescriptions: {
      0: 'The insulation R-value specified for the the foundation floor was inadequate for the region.',
      1: 'No score',
      2: 'The insulation R-value specified for the foundation floor consistently met local energy codes.',
      3: 'No score',
      4: 'The insulation R-value specified for the foundation floor consistently exceeded local energy code.'
    }
  },
  // Thermal Enclosure (7) - Framed Floors
  {
    id: 'thermal-enclosure-framed-floors-batts',
    category: 'Thermal Enclosure',
    subcategory: 'Framed Floors',
    item: 'Batts (Band Joist)',
    weight: 7,
    scoreDescriptions: {
      0: 'No score',
      1: 'Fiberglass batt insulation at band joists was installed with poor quality control.',
      2: 'Fiberglass batt insulation at band joists was consistently installed with proper compression and fit.',
      3: 'Fiberglass batt insulation at band joists was consistently installed with proper compression and fit, and rigid foam was installed on the exterior surface, or was a "flash and batt" installation.',
      4: 'Fiberglass batt insulation at band joists was consistently installed with proper compression and fit over a flashed layer of spray foam, and rigid foam was installed on the exterior surface.'
    }
  },
  {
    id: 'thermal-enclosure-framed-floors-insulation-specification-level',
    category: 'Thermal Enclosure',
    subcategory: 'Framed Floors',
    item: 'Insulation Specification Level (Band Joist)',
    weight: 7,
    scoreDescriptions: {
      0: 'The insulation R-value specified for the Band Joist was inadequate for the region.',
      1: 'No score',
      2: 'The insulation R-value specified for the Band Joist consistently met local energy code.',
      3: 'No score',
      4: 'The insulation R-value specified for the band joist consistently exceeded local energy code.'
    }
  },
  {
    id: 'thermal-enclosure-framed-floors-batts-floor-over-garage',
    category: 'Thermal Enclosure',
    subcategory: 'Framed Floors',
    item: 'Batts (Floor over Garage)',
    weight: 7,
    scoreDescriptions: {
      0: 'Fiberglass batt insulation in the floor above the garage was improperly installed.',
      1: 'Fiberglass batt insulation in the floor system above the garage was not in contact with the floor decking or was installed with poor quality control.',
      2: 'Fiberglass batt insulation in the floor system above the garage was consistently installed with proper compression and fit.',
      3: 'Fiberglass batt insulation in the floor system above the garage was consistently installed with proper compression and fit, and the garage ceiling was air sealed, and the rim joists were properly insulated.',
      4: 'No score'
    }
  },
  {
    id: 'thermal-enclosure-framed-floors-insulation-spec-level-floor-over-garage',
    category: 'Thermal Enclosure',
    subcategory: 'Framed Floors',
    item: 'Insulation Specification Level (Floor over Garage)',
    weight: 7,
    scoreDescriptions: {
      0: 'The insulation R-value specified for the floor over the garage was inadequate for the region.',
      1: 'No score',
      2: 'The insulation R-value specified for the floor over the garage consistently met local energy code.',
      3: 'No score',
      4: 'The insulation R-value specified for the floor over the garage consistently exceeded local energy code.'
    }
  },
  // Thermal Enclosure (7) - Frame Walls
  {
    id: 'thermal-enclosure-frame-walls-batts',
    category: 'Thermal Enclosure',
    subcategory: 'Frame Walls',
    item: 'Batts',
    weight: 7,
    scoreDescriptions: {
      0: 'Fiberglass batts in the walls were missing or very poorly installed.',
      1: 'Insulation batts in stud cavities were installed to meet RESNET, Grade III installation.',
      2: 'Insulation batts in stud cavities were installed to meet RESNET, Grade II installation.',
      3: 'Insulation batts in stud cavities were installed to meet RESNET, Grade I installation.',
      4: 'No score'
    }
  },
  {
    id: 'thermal-enclosure-frame-walls-insulation-spec-level',
    category: 'Thermal Enclosure',
    subcategory: 'Frame Walls',
    item: 'Insulation Specification Level',
    weight: 7,
    scoreDescriptions: {
      0: 'The insulation R-value specified for the frame walls was inadequate for the region.',
      1: 'No score',
      2: 'The insulation R-value specified for the frame walls consistently met local energy code.',
      3: 'No score',
      4: 'The insulation R-value specified for the frame walls consistently exceeded local energy code.'
    }
  },
  {
    id: 'thermal-enclosure-frame-walls-sheathing-insulation-walls',
    category: 'Thermal Enclosure',
    subcategory: 'Frame Walls',
    item: 'Sheathing Insulation Walls',
    weight: 7,
    scoreDescriptions: {
      0: 'No sheathing was installed.',
      1: 'No score',
      2: 'OSB or other structural sheathing was installed over the entire surface of the house.',
      3: 'No score',
      4: 'Insulated sheathing was installed over all the exterior walls.'
    }
  },
  // Thermal Enclosure (7) - Shower and Tub Assemblies
  {
    id: 'thermal-enclosure-shower-and-tub-assemblies-batts',
    category: 'Thermal Enclosure',
    subcategory: 'Shower and Tub Assemblies',
    item: 'Batts',
    weight: 7,
    scoreDescriptions: {
      0: 'Batts in the stud cavities behind showers and tubs were improperly or incompletely installed.',
      1: 'Batts in the stud cavities behind showers and tubs were installed with poor quality control. No draftstopping was installed.',
      2: 'Batts in the stud cavities behind showers and tubs were properly installed, with minor inconsistencies. Draftstopping was installed but was not sealed.',
      3: 'Batts in the stud cavities behind showers and tubs were properly installed consistently. Rigid draftstopping was installed and was sealed.',
      4: 'No score'
    }
  },
  {
    id: 'thermal-enclosure-shower-and-tub-assemblies-insulation-spec-level',
    category: 'Thermal Enclosure',
    subcategory: 'Shower and Tub Assemblies',
    item: 'Insulation Specification Level',
    weight: 7,
    scoreDescriptions: {
      0: 'The insulation R-value specified for the showers and tubs was inadequate for the region and was not installed behind showers and tubs.',
      1: 'No score',
      2: 'The insulation R-value specified for the showers and tubs consistently met local energy code.',
      3: 'No score',
      4: 'The insulation R-value specified for the showers and tubs consistently exceeded local energy code.'
    }
  },
    // Thermal Enclosure (7) - Attic
  {
    id: 'thermal-enclosure-attic-blown-in',
    category: 'Thermal Enclosure',
    subcategory: 'Attic',
    item: 'Blown-In',
    weight: 7,
    scoreDescriptions: {
      0: 'Blown-in insulation in vented attics was improperly or incompletely installed.',
      1: 'Blown-in insulation in vented attics was installed with poor quality control.',
      2: 'Blown-in insulation was properly installed in vented attics. However, depth gauges were missing.',
      3: 'No score',
      4: 'Blown-in insulation was properly installed in vented attics, and depth gauges were adequately spaced and facing towards the attic access.'
    }
  },
  {
    id: 'thermal-enclosure-attic-ridge-off-ridge-venting',
    category: 'Thermal Enclosure',
    subcategory: 'Attic',
    item: 'Ridge/Off-Ridge Venting',
    weight: 7,
    scoreDescriptions: {
      0: 'No ridge or off-ridge vents were installed in attics requiring ventilation.',
      1: 'There was inconsistent installation of ridge or off-ridge vents in attics requiring ventilation.',
      2: 'No score',
      3: 'No score',
      4: 'All attics requiring ventilation had adequate ridge or off-ridge vents installed consistently.'
    }
  },
  {
    id: 'thermal-enclosure-attic-soffit-venting-and-baffles',
    category: 'Thermal Enclosure',
    subcategory: 'Attic',
    item: 'Soffit Venting and Baffles',
    weight: 7,
    scoreDescriptions: {
      0: 'No soffit vents or low roof vents (bottom third of the roof) were installed.',
      1: 'Soffit vents or low roof vents (bottom third of the roof) were installed. However, truss baffles were inconsistently installed when soffit vents were used.',
      2: 'No score',
      3: 'Soffit vents or low roof vents located in the bottom third of the roof met ventilation requirements, and all soffit vents had baffles extending over the exterior wall that were clear.',
      4: 'Soffit vents or low roof vents (not made of cardboard) are located in the bottom third of the roof met ventilation requirements, and all soffit vents had baffles extending over the exterior wall that were clear. Low vents had baffles to prevent wind washing.'
    }
  },
  {
    id: 'thermal-enclosure-attic-attic-access-over-conditioned-space',
    category: 'Thermal Enclosure',
    subcategory: 'Attic',
    item: 'Attic Access over Conditioned Space',
    weight: 7,
    scoreDescriptions: {
      0: 'Attic access was uninsulated.',
      1: 'Attic access was uninsulated but not air sealed, or air sealed but not insulated.',
      2: 'Attic access was insulated and air sealed.',
      3: 'No score',
      4: 'Attic access was insulated to 100% of the attic value.'
    }
  },
  {
    id: 'thermal-enclosure-attic-bath-vent',
    category: 'Thermal Enclosure',
    subcategory: 'Attic',
    item: 'Bath Vent',
    weight: 7,
    scoreDescriptions: {
      0: 'Bath vent ducts that penetrated the roof were not sealed to prevent backdrafting. or Soffit vents terminated through vented soffit and were prone to backdrafting.',
      1: 'No score',
      2: 'Bath vent ducts that penetrated the roof were inconsistently air sealed to prevent backdrafting. or Soffit vents occasionally terminated through vented soffits and were prone to backdrafting.',
      3: 'No score',
      4: 'Bath vent ducts that penetrated the roof were air sealed to prevent backdrafting. or Soffit vents always passed through unvented soffits (2' to each side) to prevent backdrafting.'
    }
  },
  {
    id: 'thermal-enclosure-attic-dryer-vent',
    category: 'Thermal Enclosure',
    subcategory: 'Attic',
    item: 'Dryer Vent',
    weight: 7,
    scoreDescriptions: {
      0: 'Dryer vent ducts that penetrated the roof were not air sealed to the roof sheathing.',
      1: 'No score',
      2: 'Dryer vent ducts that penetrated the roof were inconsistently air sealed to the roof sheathing.',
      3: 'No score',
      4: 'Dryer vent ducts that penetrated the roof were consistently air sealed to the roof sheathing.'
    }
  },
  {
    id: 'thermal-enclosure-attic-insulation-end-dams',
    category: 'Thermal Enclosure',
    subcategory: 'Attic',
    item: 'Insulation End Dams',
    weight: 7,
    scoreDescriptions: {
      0: 'Insulation end dams were not installed.',
      1: 'No score',
      2: 'Insulation end dams were installed using fiberglass batts, or cardboard baffles.',
      3: 'No score',
      4: 'Insulation end dams were installed using rigid sheathing.'
    }
  },
  {
    id: 'thermal-enclosure-attic-insulation-spec-level',
    category: 'Thermal Enclosure',
    subcategory: 'Attic',
    item: 'Insulation Specification Level',
    weight: 7,
    scoreDescriptions: {
      0: 'The insulation R-value specified for the attic was inadequate for the region.',
      1: 'No score',
      2: 'The insulation R-value specified for the attic consistently met local energy code.',
      3: 'No score',
      4: 'The insulation R-value specified for the attic consistently exceeded local energy code.'
    }
  },
  {
    id: 'thermal-enclosure-attic-roof-sheathing',
    category: 'Thermal Enclosure',
    subcategory: 'Attic',
    item: 'Roof Sheathing',
    weight: 7,
    scoreDescriptions: {
      0: 'No score',
      1: 'No score',
      2: 'Sheathing was conventional OSB or plywood.',
      3: 'No score',
      4: 'Roof sheathing was radiant barrier.'
    }
  },
  // Thermal Enclosure (7) - Windows/Doors
  {
    id: 'thermal-enclosure-windows-doors-door-type',
    category: 'Thermal Enclosure',
    subcategory: 'Windows/Doors',
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
  {
    id: 'thermal-enclosure-windows-doors-glazing-in-entry-door',
    category: 'Thermal Enclosure',
    subcategory: 'Windows/Doors',
    item: 'Glazing in Entry Door',
    weight: 7,
    scoreDescriptions: {
      0: 'Single-pane glazing was installed in entry doors.',
      1: 'No score',
      2: 'No score',
      3: 'No score',
      4: 'Double-pane glazing was installed in entry doors.'
    }
  },
  {
    id: 'thermal-enclosure-windows-doors-low-e-glass-in-doors',
    category: 'Thermal Enclosure',
    subcategory: 'Windows/Doors',
    item: 'Low-E Glass in Doors',
    weight: 7,
    scoreDescriptions: {
      0: 'Clear glass was installed in the doors.',
      1: 'Low-E glass was installed in the doors, but the SHGC was insufficient for the region.',
      2: 'Low-E glass was installed in the doors, and the SHGC was sufficient for the region.',
      3: 'No score',
      4: 'Low-E glass was installed in the doors, was energy star rated for the region.'
    }
  },
  {
    id: 'thermal-enclosure-windows-doors-low-e-glass-in-sliding-glass-doors',
    category: 'Thermal Enclosure',
    subcategory: 'Windows/Doors',
    item: 'Low-E Glass in Sliding Glass Doors',
    weight: 7,
    scoreDescriptions: {
      0: 'Clear glass (non-low-E coated) was installed in the sliding glass doors.',
      1: 'Low-E sliding glass doors were installed, but the SHGC was insufficient for the region.',
      2: 'Low-E sliding glass doors were installed, and the SHGC was sufficient for the region.',
      3: 'No score',
      4: 'Low-E sliding glass doors were installed and were Energy Star rated for the region.'
    }
  },
  {
    id: 'thermal-enclosure-windows-doors-low-e-glass-in-window',
    category: 'Thermal Enclosure',
    subcategory: 'Windows/Doors',
    item: 'Low-E Glass in Window',
    weight: 7,
    scoreDescriptions: {
      0: 'Clear glass (non-low-E coated) was installed in the windows.',
      1: 'Low-E windows were installed, but the SHGC was insufficient for the region.',
      2: 'Low-E windows were installed, and the SHGC was sufficient for the region.',
      3: 'No score',
      4: 'Low-E windows were installed and were Energy Star rated for the region.'
    }
  },
  {
    id: 'thermal-enclosure-windows-doors-sliding-glass-door-frame-type',
    category: 'Thermal Enclosure',
    subcategory: 'Windows/Doors',
    item: 'Sliding Glass Door Frame Type',
    weight: 7,
    scoreDescriptions: {
      0: 'Sliding glass doors frames were constructed of aluminum without thermal breaks.',
      1: 'No score',
      2: 'Sliding glass doors frames were constructed of aluminum with thermal breaks.',
      3: 'No score',
      4: 'Sliding glass doors frames were consistently constructed of vinyl.'
    }
  },
  {
    id: 'thermal-enclosure-windows-doors-sliding-glass-door-glazing',
    category: 'Thermal Enclosure',
    subcategory: 'Windows/Doors',
    item: 'Sliding Glass Door Glazing',
    weight: 7,
    scoreDescriptions: {
      0: 'Single-pane sliding glass doors were installed.',
      1: 'No score',
      2: 'Double-pane sliding glass doors were installed.',
      3: 'No score',
      4: 'Multiple-pane (3+) sliding glass doors were installed.'
    }
  },
  {
    id: 'thermal-enclosure-windows-doors-window-frame-type',
    category: 'Thermal Enclosure',
    subcategory: 'Windows/Doors',
    item: 'Window Frame Type',
    weight: 7,
    scoreDescriptions: {
      0: 'Window frames were constructed of aluminum without thermal breaks.',
      1: 'No score',
      2: 'Window frames were constructed of aluminum with thermal breaks.',
      3: 'No score',
      4: 'Window frames were consistently constructed of vinyl.'
    }
  },
  {
    id: 'thermal-enclosure-windows-doors-window-glazing',
    category: 'Thermal Enclosure',
    subcategory: 'Windows/Doors',
    item: 'Window Glazing',
    weight: 7,
    scoreDescriptions: {
      0: 'Single-pane windows were installed.',
      1: 'No score',
      2: 'Double-pane windows were installed.',
      3: 'No score',
      4: 'Multiple-pane (3+) windows were installed.'
    }
  },
];
