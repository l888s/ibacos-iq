
import { InspectionItem } from '@/types/inspection';

export const drainagePlaneItems: Omit<InspectionItem, 'score'>[] = [
  // Drainage Plane and Flashing (14) - Frame Walls
  {
    id: 'drainage-plane-frame-walls-sealant-specification',
    category: 'Drainage Plane and Flashing',
    subcategory: 'Frame Walls',
    item: 'Sealant Specification',
    weight: 14,
    scoreDescriptions: {
      0: 'Sealant was below ASTM C920 Class 25 specification.',
      1: 'No score',
      2: 'No score',
      3: 'Sealant met ASTM C920 Class 25 specification.',
      4: 'Sealant was above ASTM C920 Class 25 specification.'
    }
  },
  {
    id: 'drainage-plane-frame-walls-structural-laminated-sheathing-corners',
    category: 'Drainage Plane and Flashing',
    subcategory: 'Frame Walls',
    item: 'Structural Laminated Sheathing Corners',
    weight: 14,
    scoreDescriptions: {
      0: 'No approved 4" flashing tape was applied on inside or outside corners.',
      1: 'A vertical strip of flashing was installed behind the inside and outside corners.',
      2: 'Structural laminated sheathing panels was inconsistently taped on inside and outside corners with approved 4" flashing tape.',
      3: 'No score',
      4: 'Approved 4" flashing tape was applied to the surface of all inside and outside corners.'
    }
  },
  {
    id: 'drainage-plane-frame-walls-structural-laminated-sheathing-fastening',
    category: 'Drainage Plane and Flashing',
    subcategory: 'Frame Walls',
    item: 'Structural Laminated Sheathing Fastening',
    weight: 14,
    scoreDescriptions: {
      0: 'Structural laminated sheathing was not fastened per manufacturer's specifications, or unapproved fasteners were used.',
      1: 'No score',
      2: 'Structural laminated sheathing was fastened per manufacturer's specifications, with correct fasteners, with minor inconsistencies.',
      3: 'No score',
      4: 'Structural laminated sheathing was fastened per manufacturer's specifications, with correct fasteners.'
    }
  },
  {
    id: 'drainage-plane-frame-walls-structural-laminated-sheathing-orientation',
    category: 'Drainage Plane and Flashing',
    subcategory: 'Frame Walls',
    item: 'Structural Laminated Sheathing Orientation',
    weight: 14,
    scoreDescriptions: {
      0: 'Structural laminated sheathing panels were not installed with printed side facing inside.',
      1: 'No score',
      2: 'Some structural laminated sheathing panels were installed with printed side facing out.',
      3: 'No score',
      4: 'Structural laminated sheathing panels were installed with printed side facing out.'
    }
  },
  {
    id: 'drainage-plane-frame-walls-structural-laminated-sheathing-panels',
    category: 'Drainage Plane and Flashing',
    subcategory: 'Frame Walls',
    item: 'Structural Laminated Sheathing Panels',
    weight: 14,
    scoreDescriptions: {
      0: 'Panels were often damaged without proper repairs or replacement.',
      1: 'No score',
      2: 'Damaged structural laminated sheathing panels were inconsistently repaired or replaced.',
      3: 'No score',
      4: 'Damaged structural laminated sheathing panels were repaired or replaced according to manufacturer specifications.'
    }
  },
  {
    id: 'drainage-plane-frame-walls-structural-laminated-sheathing-seams',
    category: 'Drainage Plane and Flashing',
    subcategory: 'Frame Walls',
    item: 'Structural Laminated Sheathing Seams (Vertical and horizontal overlap)',
    weight: 14,
    scoreDescriptions: {
      0: 'Structural laminated sheathing wasn't overlapped or taped at vertical or horizontal panel seams in compliance with manufacturer specifications.',
      1: 'No score',
      2: 'Vertical and horizontal seams were not always in compliance with manufacturer specifications.',
      3: 'No score',
      4: 'Vertical and horizontal seams were consistently in compliance with manufacturer specifications.'
    }
  },
  {
    id: 'drainage-plane-frame-walls-structural-laminated-sheathing-foundation',
    category: 'Drainage Plane and Flashing',
    subcategory: 'Frame Walls',
    item: 'Structural Laminated Sheathing at Foundation',
    weight: 14,
    scoreDescriptions: {
      0: 'Structural laminated sheathing panels did not overlap foundation by 3/4".',
      1: 'No score',
      2: 'Structural laminated sheathing panels overlapped foundation by 3/4" with minor inconsistencies.',
      3: 'No score',
      4: 'All Structural laminated sheathing panels overlapped foundation by 3/4", or additional flashing was installed behind the Structural laminated sheathing panels and over the foundation.'
    }
  },
  // Drainage Plane and Flashing (14) - Penetrations
  {
    id: 'drainage-plane-penetrations-sealant-spec',
    category: 'Drainage Plane and Flashing',
    subcategory: 'Penetrations',
    item: 'Sealant Specification',
    weight: 14,
    scoreDescriptions: {
      0: 'No flashing strategy was employed for penetrations through the drainage plane.',
      1: 'Only sealant was used as the flashing strategy for penetrations through the drainage plane.',
      2: 'Straight flashing tape was used as the flashing strategy.',
      3: 'Flexible flashing tape was used as the flashing strategy.',
      4: 'The flashing strategy for penetrations through the drainage plane was manufactured flashing panels properly taped to the drainage plane.'
    }
  },
  // Drainage Plane and Flashing (14) - Windows
  {
    id: 'drainage-plane-windows-dam',
    category: 'Drainage Plane and Flashing',
    subcategory: 'Windows',
    item: 'End Dam',
    weight: 14,
    scoreDescriptions: {
      0: 'The sill pans did not have end dams.',
      1: 'No score',
      2: 'End dams were provided at the base of the sill, but they did not extend up the window jambs by at least 3", or were made of low-expansion type foam.',
      3: 'No score',
      4: 'An end dam integral to the sill pan was provided at the base of the sill, or a bead of sealant was used and it was extended up the window jambs by at least 3".'
    }
  },
  {
    id: 'drainage-plane-windows-flashing-material',
    category: 'Drainage Plane and Flashing',
    subcategory: 'Windows',
    item: 'Flashing Material',
    weight: 14,
    scoreDescriptions: {
      0: 'No flashing or non-self-stick flashing materials were installed.',
      1: 'No score',
      2: 'No score',
      3: 'No score',
      4: 'Self-stick flashings were used around all window openings.'
    }
  },
  {
    id: 'drainage-plane-windows-head-flashing-integration',
    category: 'Drainage Plane and Flashing',
    subcategory: 'Windows',
    item: 'Head Flashing Integration',
    weight: 14,
    scoreDescriptions: {
      0: 'No head flashings were installed.',
      1: 'No score',
      2: 'Head flashings were properly installed and adhered to the sheathing.',
      3: 'No score',
      4: 'Head flashings were properly installed and adhered to the sheathing, and the flashing tape was the same brand as the manufacturer of the panels.'
    }
  },
  {
    id: 'drainage-plane-windows-jamb-flashing-integration',
    category: 'Drainage Plane and Flashing',
    subcategory: 'Windows',
    item: 'Jamb Flashing Integration',
    weight: 14,
    scoreDescriptions: {
      0: 'No jamb flashings were installed.',
      1: 'Jamb flashings were installed but were often lapped incorrectly and did not extend past the window frames.',
      2: 'Jamb flashings were installed but did not extend past the tops and bottoms of the window frames on every window.',
      3: 'Jamb flashings were properly installed and extended past the tops and bottoms of the window frames; however, they did not always fully cover the ends of the sill flashings.',
      4: 'Jamb flashings were properly installed and extended past the window frames in all instances.'
    }
  },
  {
    id: 'drainage-plane-windows-pressure-applied-during-app',
    category: 'Drainage Plane and Flashing',
    subcategory: 'Windows',
    item: 'Pressure Applied during Application',
    weight: 14,
    scoreDescriptions: {
      0: 'Self-stick flashings were not well bonded to the insulating sheathing or T-Ply due to a lack of pressure being applied at installation or because they were installed during cold temperatures.',
      1: 'No score',
      2: 'Occasionally, self-stick flashings were not well bonded to the insulating sheathing or T-ply due to a lack of pressure being applied at installation or because they were installed during cold temperatures.',
      3: 'No score',
      4: 'Self-stick flashings were bonded thoroughly to the insulating sheathing or T-Ply due to adequate pressure being applied at installation.'
    }
  },
  {
    id: 'drainage-plane-windows-self-stick-flashing-specification',
    category: 'Drainage Plane and Flashing',
    subcategory: 'Windows',
    item: 'Self Stick Flashing Specification',
    weight: 14,
    scoreDescriptions: {
      0: 'No score',
      1: 'Asphalt-based flashing tape was installed.',
      2: 'No score',
      3: 'Butyl-based flashing tape was installed.',
      4: 'Acrylic-based flashing tape was used. For Zip Wall, Zip System tape was used.'
    }
  },
  {
    id: 'drainage-plane-windows-sill-drainage',
    category: 'Drainage Plane and Flashing',
    subcategory: 'Windows',
    item: 'Sill Drainage',
    weight: 14,
    scoreDescriptions: {
      0: 'The sill flashings were not layered over the insulating sheathing or T-Ply, creating the potential for water intrusion.',
      1: 'No score',
      2: 'The sill flashings were properly layered over the insulating sheathing or T-Ply with minor quality control issues.',
      3: 'No score',
      4: 'The sill flashings were consistently layered over the insulating sheathing or T-Ply.'
    }
  },
  {
    id: 'drainage-plane-windows-sill-pan',
    category: 'Drainage Plane and Flashing',
    subcategory: 'Windows',
    item: 'Sill Pan',
    weight: 14,
    scoreDescriptions: {
      0: 'No sill pans were installed under the windows.',
      1: 'Sill pans were inconsistently installed under the windows.',
      2: 'A site-fabricated flashing was used to form sill pans with corner protection under all windows.',
      3: 'A site-fabricated flashing was used to form sill pans with corner protection under all windows, and the panel mfg. tape was used.',
      4: 'Pre-manufactured sill pans were installed under all windows.'
    }
  },
  // Drainage Plane and Flashing (14) - Entry Doors
  {
    id: 'drainage-plane-entry-doors-end-dam',
    category: 'Drainage Plane and Flashing',
    subcategory: 'Entry Doors',
    item: 'End Dam',
    weight: 14,
    scoreDescriptions: {
      0: 'End dams were not provided for exterior doors.',
      1: 'When door threshold is over wood frame: End dam created using caulk that was not extended 3” up the jamb but was across the entire back of door threshold.',
      2: 'When door threshold is over wood frame: End dam created using caulk that extended at 3” up the jamb and across the entire back of door threshold.',
      3: 'The self-stick sill pans under exterior doors had end dams that extended at least 3" up the door jambs.',
      4: 'Pre-manufactured sill pan, recessed sill pan or end dam created using caulk that extended at 3” up the jamb and across the entire back of door threshold.'
    }
  },
  {
    id: 'drainage-plane-entry-doors-flanges-entry-doors',
    category: 'Drainage Plane and Flashing',
    subcategory: 'Entry Doors',
    item: 'Flanges Created for Entry Doors',
    weight: 14,
    scoreDescriptions: {
      0: 'Exterior doors with hinges did not have flanges and/or flashing to seal to the WRB.',
      1: 'No score',
      2: 'No score',
      3: 'When exterior doors with hinges did not have flanges, self-stick flashing material was bonded to the back of the brickmold to create a flange for proper integration with the flashings.',
      4: 'Exterior doors with hinges had integrated flanges or utilized DuPont StraightFlashVF for creating flanges.'
    }
  },
  {
    id: 'drainage-plane-entry-doors-flashing-spec',
    category: 'Drainage Plane and Flashing',
    subcategory: 'Entry Doors',
    item: 'Flashing Specification',
    weight: 14,
    scoreDescriptions: {
      0: 'No score',
      1: 'Asphalt-based flashing tape was installed.',
      2: 'No score',
      3: 'Butyl-based flashing tape was installed.',
      4: 'Acrylic-based flashing tape was used. For ZipWall, Zip System tape was used.'
    }
  },
  
  {
    id: 'drainage-plane-entry-doors-head-flashing-integration',
    category: 'Drainage Plane and Flashing',
    subcategory: 'Entry Doors',
    item: 'Head Flashing Integration',
    weight: 14,
    scoreDescriptions: {
      0: 'Head flashings were not installed on exterior doors.',
      1: 'No score',
      2: 'Head flashings were installed on exterior doors. They extended past and over the jamb flashings and adhered to the sheathing.',
      3: 'No score',
      4: 'Head flashings were properly installed and adhered to the sheathing, and the flashing tape was the same brand as the manufacturer of the panels.'
    }
  },
  {
    id: 'drainage-plane-entry-doors-head-jamb-flashing',
    category: 'Drainage Plane and Flashing',
    subcategory: 'Entry Doors',
    item: 'Jamb Flashing for Entry Doors',
    weight: 14,
    scoreDescriptions: {
      0: 'Jamb flashings were not installed on exterior doors.',
      1: 'Jamb flashings were installed on exterior doors, but they were lapped incorrectly and did not extend past the door frames.',
      2: 'Jamb flashings were installed on exterior doors but did not extend 1" past the door frames.',
      3: 'Jamb flashings were installed on exterior doors and extended 1" past the door frames, with minor quality control issues in lapping with other flashings.',
      4: 'Jamb flashings were installed on exterior doors and extended 1" past the head nailing fins and under the head flashings and 1" beyond the sill nailing fins and overlapped the sill flashings.'
    }
  },
  {
    id: 'drainage-plane-entry-doors-pressure-applied',
    category: 'Drainage Plane and Flashing',
    subcategory: 'Entry Doors',
    item: 'Pressure Applied during Application',
    weight: 14,
    scoreDescriptions: {
      0: 'Self-stick flashings were not well bonded to the insulating sheathing or T-Ply due to a lack of pressure being applied at installation or because they were installed during cold temperatures.',
      1: 'No score',
      2: 'Occasionally, self-stick flashings were not well bonded to the insulating sheathing or T-Ply due to a lack of pressure being applied at installation or because they were installed during cold temperatures.',
      3: 'No score',
      4: 'Self-stick flashings were thoroughly bonded to the insulating sheathing or T-Ply due to adequate pressure being applied at installation.'
    }
  },
  {
    id: 'drainage-plane-entry-doors-roof-covered-doors',
    category: 'Drainage Plane and Flashing',
    subcategory: 'Entry Doors',
    item: 'Roof Covered Entry Doors',
    weight: 14,
    scoreDescriptions: {
      0: 'Entry doors were not protected with a roof.',
      1: 'No score',
      2: 'Most entry doors were protected under a roof that extended at least 4' in all directions.',
      3: 'No score',
      4: 'All entry doors were protected under a roof that extended at least 4' in all directions.'
    }
  },
  {
    id: 'drainage-plane-entry-doors-self-stick-flashing',
    category: 'Drainage Plane and Flashing',
    subcategory: 'Entry Doors',
    item: 'Self-Stick Flashing Usage',
    weight: 14,
    scoreDescriptions: {
      0: 'Flashing used for doors installed in foam/ZipWall or T-Ply was not a self-stick material.',
      1: 'No score',
      2: 'No score',
      3: 'No score',
      4: 'Flashing used for doors installed in foam/ZipWall or T-Ply was a self-stick material.'
    }
  },
  {
    id: 'drainage-plane-entry-doors-sill-pan',
    category: 'Drainage Plane and Flashing',
    subcategory: 'Entry Doors',
    item: 'Sill Pan',
    weight: 14,
    scoreDescriptions: {
      0: 'No sill pans used.',
      1: 'Sill pans were created with self-stick flashings under exterior door thresholds. However, there were significant issues with the quality of execution.',
      2: 'Site built sill pan was created using butyl tape.',
      3: 'Pre-manufactured sill pans were installed under exterior doors, with the exception of doors under a roof and the garage man door to the exterior.',
      4: 'Pre-manufactured sill pan or recessed pan in the slab.'
    }
  },
  {
    id: 'drainage-plane-entry-doors-depressed-sloped-slab',
    category: 'Drainage Plane and Flashing',
    subcategory: 'Entry Doors',
    item: 'Depressed and Sloped Slab',
    weight: 14,
    scoreDescriptions: {
      0: 'No depressed sills were used at garage doors in block or poured walls.',
      1: 'No score',
      2: 'Depressed sills were used at all garage doors in concrete block or poured walls, with some inconsistencies.',
      3: 'No score',
      4: 'Depressed sills (or sloped sills in cold climates) were used at all garage doors in concrete block or poured walls.'
    }
  },
  // Drainage Plane and Flashing (14) - Patio Doors
  {
    id: 'drainage-plane-patio-doors-end-dam',
    category: 'Drainage Plane and Flashing',
    subcategory: 'Patio Doors',
    item: 'End Dam',
    weight: 14,
    scoreDescriptions: {
      0: 'End dams were not provided for exterior doors.',
      1: 'When door threshold is over wood frame: End dam created using caulk that was not extended 3” up the jamb but was across the entire back of door threshold.',
      2: 'When door threshold is over wood frame: End dam created using caulk that extended at 3” up the jamb and across the entire back of door threshold.',
      3: 'The self-stick sill pans under exterior doors had end dams that extended at least 3" up the door jambs.',
      4: 'Pre-manufactured sill pan, recessed sill pan or end dam created using caulk that extended at 3” up the jamb and across the entire back of door threshold.'
    }
  },
  {
    id: 'drainage-plane-patio-doors-flashing-spec',
    category: 'Drainage Plane and Flashing',
    subcategory: 'Patio Doors',
    item: 'Flashing Specification',
    weight: 14,
    scoreDescriptions: {
      0: 'No score',
      1: 'Asphalt-based flashing tape was installed.',
      2: 'No score',
      3: 'Butyl-based flashing tape was installed.',
      4: 'Acrylic-based flashing tape was used. For Zip Walls, Zip System tape was used.'
    }
  },
  {
    id: 'drainage-plane-patio-doors-head-flashing-integration',
    category: 'Drainage Plane and Flashing',
    subcategory: 'Patio Doors',
    item: 'Head Flashing Integration',
    weight: 14,
    scoreDescriptions: {
      0: 'Head flashings were not installed on patio doors.',
      1: 'No score',
      2: 'Head flashings were installed on patio doors. They extended past and over the jamb flashings and adhered to the sheathing.',
      3: 'No score',
      4: 'Head flashings were properly installed and adhered to the sheathing, and the flashing tape was the same brand as the manufacturer of the panels.'
    }
  },
  {
    id: 'drainage-plane-patio-doors-jamb-flashing',
    category: 'Drainage Plane and Flashing',
    subcategory: 'Patio Doors',
    item: 'Jamb Flashing for Entry Doors',
    weight: 14,
    scoreDescriptions: {
      0: 'Jamb flashings were not installed on patio doors.',
      1: 'Jamb flashings were installed on patio doors, but they were lapped incorrectly and did not extend past the door frame.',
      2: 'Jamb flashings were installed on patio doors, but they did not extend past the door frame.',
      3: 'No score',
      4: 'Jamb flashings were properly installed on patio doors and extended past the door frame in all instances.'
    }
  },
  {
    id: 'drainage-plane-patio-doors-pressure-applied-app',
    category: 'Drainage Plane and Flashing',
    subcategory: 'Patio Doors',
    item: 'Pressure Applied during Application',
    weight: 14,
    scoreDescriptions: {
      0: 'Self-stick flashings were not well bonded to the insulating sheathing or T-Ply due to a lack of pressure being applied at installation or because they were installed during cold temperatures.',
      1: 'No score',
      2: 'Occasionally, self-stick flashings were not well bonded to the insulating sheathing or T-Ply due to a lack of pressure being applied at installation or because they were installed during cold temperatures.',
      3: 'No score',
      4: 'Self-stick flashings were thoroughly bonded to the insulating sheathing or T-Ply due to adequate pressure being applied at installation.'
    }
  },
  {
    id: 'drainage-plane-patio-doors-roof-covered-patio',
    category: 'Drainage Plane and Flashing',
    subcategory: 'Patio Doors',
    item: 'Roof Covered Patio Doors',
    weight: 14,
    scoreDescriptions: {
      0: 'Patio doors were not protected with a roof.',
      1: 'No score',
      2: 'Most patio doors were protected under a roof that extended at least 4' in all directions.',
      3: 'No score',
      4: 'All patio doors were protected under a roof that extended at least 4' in all directions.'
    }
  },
  {
    id: 'drainage-plane-patio-doors-self-stick-flashing',
    category: 'Drainage Plane and Flashing',
    subcategory: 'Patio Doors',
    item: 'Self-Stick Flashing Usage',
    weight: 14,
    scoreDescriptions: {
      0: 'Flashing used for doors installed in foam/ZipWall or T-Ply was not a self-stick material.',
      1: 'No score',
      2: 'No score',
      3: 'No score',
      4: 'Flashing used for doors installed in foam/ZipWall or T-Ply was a self-stick material.'
    }
  },
  {
    id: 'drainage-plane-patio-doors-sill-pan',
    category: 'Drainage Plane and Flashing',
    subcategory: 'Patio Doors',
    item: 'Sill Pan',
    weight: 14,
    scoreDescriptions: {
      0: 'No sill pans used.',
      1: 'Sill pans were created with self-stick flashings under exterior door thresholds. However, there were significant issues with the quality of execution.',
      2: 'Site built sill pan was created using butyl tape.',
      3: 'Pre-manufactured sill pans were installed under exterior doors, with the exception of doors under a roof and the garage man door to the exterior.',
      4: 'Pre-manufactured sill pan or recessed pan in the slab.'
    }
  },
  {
    id: 'drainage-plane-patio-doors-patio-door-threshold',
    category: 'Drainage Plane and Flashing',
    subcategory: 'Patio Doors',
    item: 'Patio door threshold support',
    weight: 14,
    scoreDescriptions: {
      0: 'No show',
      1: 'Patio doors thresholds were unsupported and flexed under pressure.',
      2: 'Patio doors on slab foundations were supported with a treated or composite material.',
      3: 'No score',
      4: 'Patio doors on slab foundations were supported with a slab extension.'
    }
  },
];
