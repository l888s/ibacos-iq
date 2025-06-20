
import { InspectionItem } from '@/types/inspection';

export const framingItems: Omit<InspectionItem, 'score'>[] = [
// Framing (6) - Foundation Attachment
  {
    id: 'framing-foundation-attachment-fastener-compliance',
    category: 'Framing',
    subcategory: 'Foundation Attachment',
    item: 'Fastener Compliance',
    weight: 6,
    scoreDescriptions: {
      0: 'Many foundation bolts were missing nuts and washers, or hold-down straps were not properly nailed off.',
      1: 'No score',
      2: 'No score',
      3: 'No score',
      4: 'All bolts had washers and nuts. All straps and hold downs were completley nailed off.'
    }
  },  
{
    id: 'framing-foundation-attachment-hold-downs-and-anchor-bolts',
    category: 'Framing',
    subcategory: 'Foundation Attachment',
    item: 'Hold Downs and Anchor Bolts',
    weight: 6,
    scoreDescriptions: {
      0: 'There were no hold downs or anchor bolts connecting the framing to the foundation.',
      1: 'No score',
      2: 'No score',
      3: 'No score',
      4: 'Hold downs and anchor bolts were properly installed, based on industry standards.'
    }
  },  
{
    id: 'framing-foundation-attachment-onsite-engineered-schedule',
    category: 'Framing',
    subcategory: 'Foundation Attachment',
    item: 'Onsite Engineered Schedule',
    weight: 6,
    scoreDescriptions: {
      0: 'There was no indication of an engineered framing schedule on site.',
      1: 'No score',
      2: 'No score',
      3: 'No score',
      4: 'An engineered structural framing schedules was included in the construction documents at the construction office for each home.'
    }
  },  
  // Framing (6) - Floor Assembly
  {
    id: 'framing-floor-assembly-beams',
    category: 'Framing',
    subcategory: 'Floor Assembly',
    item: 'Beams',
    weight: 6,
    scoreDescriptions: {
      0: 'Beams were cut or notched and/or were not adequate for the span.',
      1: 'No score.',
      2: 'Beams were properly installed and were free of notching. Spans were adequate; however, they were not integrated with the mechanical layout.',
      3: 'No score',
      4: 'Beams were properly engineered for spans and were free of cuts or notches. They were properly integrated with a mechanical plan.'
    }
  },
  {
    id: 'framing-floor-assembly-fastening-compliance',
    category: 'Framing',
    subcategory: 'Floor Assembly',
    item: 'Fastening Compliance',
    weight: 6,
    scoreDescriptions: {
      0: 'Fastening was not properly spaced at every 6" along the edges and every 8" in the field of the sheathing.',
      1: 'No score.',
      2: 'Fastening was properly spaced according to minimal manufacturers recommendation.',
      3: 'No score',
      4: 'Fastening was properly spaced at every 6" along the edges and every 8" in the field of sheathing using screws with no misses.'
    }
  },
  {
    id: 'framing-floor-assembly-parallel-chord-trusses',
    category: 'Framing',
    subcategory: 'Floor Assembly',
    item: 'Parallel Chord Trusses',
    weight: 6,
    scoreDescriptions: {
      0: 'Parallel chord trusses were improperly notched or cut. Spans were too long for the specific truss being used.',
      1: 'No score.',
      2: 'Parallel chord trusses were properly installed, and there was no notching. Spans were adequate; however, openings did not line up to provide an integrated mechanical layout.',
      3: 'No score',
      4: 'Parallel chord trusses were properly installed, and there was no notching. Spans were adequate, and all openings were arranged to accommodate an integrated mechanical layout.'
    }
  },
  {
    id: 'framing-floor-assembly-point-loads',
    category: 'Framing',
    subcategory: 'Floor Assembly',
    item: 'Point Loads',
    weight: 6,
    scoreDescriptions: {
      0: 'Point loads were not properly transferred to the foundation.',
      1: 'No score.',
      2: 'No score.',
      3: 'No score',
      4: 'All point loads were properly transfered to the foundation.'
    }
  },
  {
    id: 'framing-floor-assembly-sheathing-gapping',
    category: 'Framing',
    subcategory: 'Floor Assembly',
    item: 'Sheating Gapping',
    weight: 6,
    scoreDescriptions: {
      0: 'No score.',
      1: 'Floor sheathing was tongue and groove, but did not have 1/8in gap at the ends.',
      2: 'Floor sheathing was inconsistently gapped on all sides.',
      3: 'Floor sheathing was usually properly gapped on all sides',
      4: 'All floor sheathing was properly gapped on all sides.'
    }
  },
  {
    id: 'framing-floor-assembly-stairwell-framing',
    category: 'Framing',
    subcategory: 'Floor Assembly',
    item: 'Stairwell Framing',
    weight: 6,
    scoreDescriptions: {
      0: 'Stairwells did not have proper framing or connections around the stairway openings.',
      1: 'Framing around stairwells provided the necessary load transfer, but untreated steps were not isolated from concrete.',
      2: 'No score.',
      3: 'No score',
      4: 'Framing around stairwells provided the necessary load transfer, and untreated steps were isolated from concrete.'
    }
  },
  {
    id: 'framing-floor-assembly-subfloor-gluing',
    category: 'Framing',
    subcategory: 'Floor Assembly',
    item: 'Subfloor Gluing',
    weight: 6,
    scoreDescriptions: {
      0: 'Subfloor was not glued to the joists when using nails.',
      1: 'No score.',
      2: 'No score.',
      3: 'No score',
      4: 'Subfloor was fully glued to every joist or engineered alternative was used.'
    }
  },
  {
    id: 'framing-floor-assembly-subfloor-sheathing',
    category: 'Framing',
    subcategory: 'Floor Assembly',
    item: 'Subfloor Sheathing',
    weight: 6,
    scoreDescriptions: {
      0: 'A non-tongue-and-groove type of floor decking material was installed.',
      1: 'No score.',
      2: 'Conventional tongue-and-groove OSB decking was installed with proper alignment and installation.',
      3: 'Tongue-and-groove premium decking was installed with proper alignment and installation',
      4: 'Tongue-and-groove engineered decking treated for long term exposure was installed.'
    }
  },
 // Framing (6) - Frame Walls
  {
    id: 'framing-frame-walls-corners',
    category: 'Framing',
    subcategory: 'Frame Walls',
    item: 'Corners',
    weight: 6,
    scoreDescriptions: {
      0: 'Corners were improperly framed, creating a potential structural issue.',
      1: 'No score',
      2: 'Corners were properly framed to meet local codes, but an OVE strategy (energy corner) was not employed',
      3: 'Corners were properly framed to meet local codes, and an OVE strategy (energy corner) inconsistently employed',
      4: 'Corners were properly framed to meet local codes and used a three-stud OVE (energy corner) strategy or two-stud strategy combined with drywall clips.'
    }
  }, 
{
    id: 'framing-frame-walls-framing-quality-control',
    category: 'Framing',
    subcategory: 'Frame Walls',
    item: 'Framing Quality Control',
    weight: 6,
    scoreDescriptions: {
      0: 'There was no framing quality control.',
      1: 'No score',
      2: 'In most cases, the overall quality of the framing was good. Components were cut to fit, square, plumb, and level',
      3: 'No score',
      4: 'The overall quality of the framing was very good. Components were cut to fit, square, plumb, and level with excellent consistency.'
    }
  },
  {
    id: 'framing-frame-walls-load-transfer',
    category: 'Framing',
    subcategory: 'Frame Walls',
    item: 'Load Transfer',
    weight: 6,
    scoreDescriptions: {
      0: 'There was a lack of proper support for point loads.',
      1: 'No score',
      2: 'All point loads were transferred to the foundation using adequately-sized posts or a row of studs. However, the studs were not banded together with a strap.',
      3: 'No score',
      4: 'All point loads were transferred to the foundation using adequately-sized posts or a row of studs banded properly together.'
    }
  },
  {
    id: 'framing-frame-walls-material-studs',
    category: 'Framing',
    subcategory: 'Frame Walls',
    item: 'Material',
    weight: 6,
    scoreDescriptions: {
      0: 'Non-kiln-dried conventional wood studs were used for framing.',
      1: 'No score',
      2: 'Kiln-dried conventional wood studs were used for framing.',
      3: 'No score',
      4: 'PSL of finger-jointed engineered studs were used in all wall framing.'
    }
  },
  {
    id: 'framing-frame-walls-partition-blocking',
    category: 'Framing',
    subcategory: 'Frame Walls',
    item: 'Partition Blocking',
    weight: 6,
    scoreDescriptions: {
      0: 'Partition blocking was missing, with inadequate nailing surface for partitions to be nailed to the exterior wall.',
      1: 'No score',
      2: 'Partitions were properly attached to the exterior wall, but an OVE strategy (energy T) was not employed.',
      3: 'Partition blocking was inconsistently installed, or blocking was not installed on edge.',
      4: 'Partition blocking was installed using ladder blocking (on edge) as an OVE (energy T) strategy.'
    }
  },
  {
    id: 'framing-frame-walls-sheathing',
    category: 'Framing',
    subcategory: 'Frame Walls',
    item: 'Sheathing',
    weight: 6,
    scoreDescriptions: {
      0: 'Exterior walls did not have full coverage sheathing.',
      1: 'Exterior walls had full coverage sheathing, however, there were excessive examples of inadequate 1/8" gapping.',
      2: 'Exterior walls did not have full coverage; however, excellent blocking practices were in place around all penetrations, windows, and doors and at the foundation.',
      3: 'No score.',
      4: 'Exterior walls had sheathing installed continuously over the entire surface, and had adequate gapping on all sides (unless t-ply).'
    }
  },
  {
    id: 'framing-frame-walls-window-openings',
    category: 'Framing',
    subcategory: 'Frame Walls',
    item: 'Window Openings',
    weight: 6,
    scoreDescriptions: {
      0: 'Window openings were lacking the proper framing for proper load transfer around the windows.',
      1: 'No score.',
      2: 'Window openings were properly framed to provide a durable structure, but an OVE strategy was not employed to reduce lumber and to improve thermal performance.',
      3: 'Window openings were properly framed to provide a durable structure, and an OVE strategy was employed at the headers to reduce lumber and to improve thermal performance.',
      4: 'Window openings were properly framed to provide a durable structure, and an OVE strategy was employed at the headers, and at trimmers and cripples to reduce lumber and to improve thermal performance.'
    }
  },
  {
    id: 'framing-frame-walls-window-and-door-framing-connections',
    category: 'Framing',
    subcategory: 'Frame Walls',
    item: 'Window and Door Framing Connections',
    weight: 6,
    scoreDescriptions: {
      0: 'Compression points around windows and doors had excessive gaps that were not corrected with shims, or rough openings had inadequate clearance for windows or doors.',
      1: 'Compression points around windows and doors had excessive gaps and often required additional shims, or windows frequently used 3/4" OSB to shim down the header.',
      2: 'All compression points around windows and doors were observed to be properly framed and tight.',
      3: 'No score.',
      4: 'All compression points around windows and doors were observed to be properly framed and tight, and provided a minimum 1/4" clearance at sides and top of the windows (maximum 1/2") and no OSB was used to reduce the rough opening.'
    }
  },
   // Framing (6) - Engineered Roof Truss Framing
  {
    id: 'framing-engineered-roof-truss-framing-bracing',
    category: 'Framing',
    subcategory: 'Engineered Roof Truss Framing',
    item: 'Bracing',
    weight: 6,
    scoreDescriptions: {
      0: 'The truss assembly was missing the required bracing.',
      1: 'No score',
      2: 'Bracing was installed to connect trusses together, with minor inconsistencies.',
      3: 'No score',
      4: 'Bracing was installed in accordance with the truss manufacturers specifications, which allowed the trusses to act as a complete system, and gable end walls were correctly braced.'
    }
  }, 
  {
    id: 'framing-engineered-roof-truss-framing-exterior-wall-attachment',
    category: 'Framing',
    subcategory: 'Engineered Roof Truss Framing',
    item: 'Exterior Wall Attachment',
    weight: 6,
    scoreDescriptions: {
      0: 'The fastening of the roof truss to the exterior wall was inadequate.',
      1: 'No score',
      2: 'The roof-truss-to-wall connection was properly fastened to meet code.',
      3: 'No score',
      4: 'All exterior roof-to-wall connections had a hurricane clip.'
    }
  }, 
  {
    id: 'framing-engineered-roof-truss-framing-interior-wall-attachment',
    category: 'Framing',
    subcategory: 'Engineered Roof Truss Framing',
    item: 'Interior Wall Attachment',
    weight: 6,
    scoreDescriptions: {
      0: 'Interior walls were fastened to the bottom chord of the truss with a toe nail, risking cracking drywall or stressing the roof trusses.',
      1: 'No score',
      2: 'Interior walls were not fastened to non-load-bearing walls or were fastened using floating truss clips. However there was insufficient clearance between the bottom chord of the truss and the non-load bearing wall.',
      3: 'No score'
      4: 'Interior, non-load-bearing walls were attached to the trusses using properly installed floating clips or deflection screws to allow the trusses to move without damaging the walls.'
    }
  },
  {
    id: 'framing-engineered-roof-truss-framing-point-loads',
    category: 'Framing',
    subcategory: 'Engineered Roof Truss Framing',
    item: 'Point Loads',
    weight: 6,
    scoreDescriptions: {
      0: 'Truss point loads were not properly transferred at the walls, or the bottom chords of the trusses were in contact with non-load-bearing walls.',
      1: 'No score',
      2: 'Point loads were properly transferred at the walls, appropriately using additional studs or other engineering, with some inconsistencies, and the trusses had proper clearance over non-load-bearing walls.',
      3: 'No score'
      4: 'Point loads were properly transferred at the walls, appropriately using additional studs or other engineering, and the trusses had proper clearance over non-load-bearing walls.'
    }
  },
  {
    id: 'framing-engineered-roof-truss-framing-sheathing-installation',
    category: 'Framing',
    subcategory: 'Engineered Roof Truss Framing',
    item: 'Sheathing Installation',
    weight: 6,
    scoreDescriptions: {
      0: 'The fastening of the roof sheathing was inadequate according the fastening schedule, and/or the sheathing panels did not have adequate spacing.',
      1: 'No score',
      2: 'No score',
      3: 'No score'
      4: 'The fastening of the roof sheathing was compliant with the fastening schedule and the sheathing panels had adequate spacing.'
    }
  },
  {
    id: 'framing-engineered-roof-truss-framing-truss-installation-and-fit',
    category: 'Framing',
    subcategory: 'Engineered Roof Truss Framing',
    item: 'Truss Installation and Fit',
    weight: 6,
    scoreDescriptions: {
      0: 'Trusses were not properly aligned.',
      1: 'No score',
      2: 'Trusses were properly aligned with minor inconsistencies.',
      3: 'No score'
      4: 'All trusses were properly aligned.'
    }
  },
  {
    id: 'framing-engineered-roof-truss-framing-truss-installation-at-girder-trusses',
    category: 'Framing',
    subcategory: 'Engineered Roof Truss Framing',
    item: 'Truss Installation at Girder Trusses',
    weight: 6,
    scoreDescriptions: {
      0: 'Trusses were not properly aligned or fastened with appropriate brackets or hangers at girder truss connections.',
      1: 'No score',
      2: 'Trusses were properly aligned or fastened with appropriate brackets or hangers at girder truss connections, with some inconsistencies.',
      3: 'No score'
      4: 'All trusses were properly aligned or fastened with appropriate brackets or hangers at girder truss connections.'
    }
  },
  {
    id: 'framing-engineered-roof-truss-framing-truss-plate-integrity',
    category: 'Framing',
    subcategory: 'Engineered Roof Truss Framing',
    item: 'Truss Plate Integrity',
    weight: 6,
    scoreDescriptions: {
      0: 'Truss plates were compromised or damaged by improper handling or other issues.',
      1: 'No score',
      2: 'Truss plates were in good condition, with some inconsistencies.',
      3: 'No score'
      4: 'Truss plates were in good condition.'
    }
  },
];
