
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
      1: 'Floor sheathing was tongue and groove, but did not have 1/8" gap at the ends.',
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
  
];
