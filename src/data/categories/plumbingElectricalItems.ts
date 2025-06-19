
import { InspectionItem } from '@/types/inspection';

export const plumbingElectricalItems: Omit<InspectionItem, 'score'>[] = [
  // Plumbing and Electrical Systems (5) - Supply Plumbing PEX
  {
    id: 'plumbing-electrical-pex-concrete-sleeves',
    category: 'Plumbing and Electrical Systems',
    subcategory: 'Supply Plumbing PEX',
    item: 'Concrete Sleeves',
    weight: 5,
    scoreDescriptions: {
      0: 'No sleeves were used where pipe penetrates through concrete.',
      1: 'No score',
      2: 'Concrete sleeves were inconsistently used where pipe penetrates through concrete.',
      3: 'No score',
      4: 'Concrete sleeves were used where pipe penetrates through concrete.'
    }
  },
  {
    id: 'plumbing-electrical-pex-fittings',
    category: 'Plumbing and Electrical Systems',
    subcategory: 'Supply Plumbing PEX',
    item: 'Fittings Below Slabs',
    weight: 5,
    scoreDescriptions: {
      0: 'Fittings were used below slabs and were in direct contact with concrete (above poly vapor barrier, but under slab).',
      1: 'Fittings were used below slabs and were under the poly vapor barrier.',
      2: 'Fittings (approved by the manufacturer) were used under the slab.',
      3: 'No score',
      4: 'Fittings were not used below slabs.'
    }
  },
  {
    id: 'plumbing-electrical-pex-installation',
    category: 'Plumbing and Electrical Systems',
    subcategory: 'Supply Plumbing PEX',
    item: 'Installation',
    weight: 5,
    scoreDescriptions: {
      0: 'PEX fittings were frequently not installed according to manufacturer\'s specifications.',
      1: 'No score',
      2: 'Not all PEX fittings were installed according to manufacturer\'s specifications.',
      3: 'No score',
      4: 'All PEX fittings were installed according to manufacturer\'s specifications.'
    }
  },
  {
    id: 'plumbing-electrical-pex-location',
    category: 'Plumbing and Electrical Systems',
    subcategory: 'Supply Plumbing PEX',
    item: 'Location',
    weight: 5,
    scoreDescriptions: {
      0: 'All piping was located in garages or attics.',
      1: 'Most piping was located in unconditioned space.',
      2: 'Most piping was located in conditioned space.',
      3: 'No score',
      4: 'All pipes were located in conditioned space.'
    }
  },
  {
    id: 'plumbing-electrical-pex-nail-plates',
    category: 'Plumbing and Electrical Systems',
    subcategory: 'Supply Plumbing PEX',
    item: 'Nail Plates',
    weight: 5,
    scoreDescriptions: {
      0: 'Nail plates were not installed where pipes go through studs.',
      1: 'No score',
      2: 'Nail plates were installed where pipes go through studs, with minor inconsistencies.',
      3: 'No score',
      4: 'Nail plates were installed where pipes go through studs, with zero inconsistencies.'
    }
  },
  {
    id: 'plumbing-electrical-pex-spec',
    category: 'Plumbing and Electrical Systems',
    subcategory: 'Supply Plumbing PEX',
    item: 'PEX Fittings Specification',
    weight: 5,
    scoreDescriptions: {
      0: 'PEX piping and fittings were not by the same manufacturer.',
      1: 'No score',
      2: 'No score',
      3: 'No score',
      4: 'PEX piping and fittings were by the same manufacturer.'
    }
  },
  {
    id: 'plumbing-electrical-pex-usage',
    category: 'Plumbing and Electrical Systems',
    subcategory: 'Supply Plumbing PEX',
    item: 'PEX Fittings Usage',
    weight: 5,
    scoreDescriptions: {
      0: 'Unnecessary fittings (elbows and unions) were often used.',
      1: 'No score',
      2: 'Minimal additional fittings were used (few unions and pipe was usually bent in lieu of using an elbows).',
      3: 'No score',
      4: 'No unnecessary fittings were used (no unions and pipes were bent in lieu of using elbows).'
    }
  },
  {
    id: 'plumbing-electrical-pipe-to-sheathing',
    category: 'Plumbing and Electrical Systems',
    subcategory: 'Supply Plumbing PEX',
    item: 'Pipe Adjacent to Sheathing',
    weight: 5,
    scoreDescriptions: {
      0: 'PEX was in contact with roof sheathing or exterior wall sheathing.',
      1: 'No score',
      2: 'No score',
      3: 'No score',
      4: 'PEX was not in contact with roof sheathing or exterior wall sheathing.'
    }
  },
  {
    id: 'plumbing-electrical-pipe-support',
    category: 'Plumbing and Electrical Systems',
    subcategory: 'Supply Plumbing PEX',
    item: 'Pipe Support',
    weight: 5,
    scoreDescriptions: {
      0: 'Pipes were not properly supported.',
      1: 'No score',
      2: 'No score',
      3: 'No score',
      4: 'All pipes were supported with appropriate hangers.'
    }
  },
  {
    id: 'plumbing-electrical-routing-strat',
    category: 'Plumbing and Electrical Systems',
    subcategory: 'Supply Plumbing PEX',
    item: 'Routing Strategy',
    weight: 5,
    scoreDescriptions: {
      0: 'No score',
      1: 'No score',
      2: 'Traditional trunk and branch or a homerun layout was used.',
      3: 'No score',
      4: 'A structured plumbing layout was used, maximizing the installation of multi-port tees.'
    }
  },
  {
    id: 'plumbing-electrical-supply-lines',
    category: 'Plumbing and Electrical Systems',
    subcategory: 'Supply Plumbing PEX',
    item: 'Separation of Supply Lines',
    weight: 5,
    scoreDescriptions: {
      0: 'No score',
      1: 'No score',
      2: 'Hot and cold supply lines were bundled together.',
      3: 'No score',
      4: 'There was adequate separation between hot and cold supply lines.'
    }
  },
  {
    id: 'plumbing-electrical-shut-off-valves',
    category: 'Plumbing and Electrical Systems',
    subcategory: 'Supply Plumbing PEX',
    item: 'Shut Off Valves',
    weight: 5,
    scoreDescriptions: {
      0: 'No shut off valves were provided for individual fixtures.',
      1: 'No score',
      2: 'Shut off valves were provided for some fixtures.',
      3: 'No score',
      4: 'Shut off valves were provided for all fixtures.'
    }
  },
  // Plumbing and Electrical Systems (5) - Electrical Systems
  {
    id: 'plumbing-electrical-gfci',
    category: 'Plumbing and Electrical Systems',
    subcategory: 'Electrical Systems',
    item: 'GFCI Receptacles',
    weight: 5,
    scoreDescriptions: {
      0: 'Exterior, garage, basement, bathroom, and kitchen receptacles within 6\' of the kitchen sink were not GFCI receptacles.',
      1: 'No score',
      2: 'Exterior, garage, basement, bathroom, and kitchen receptacles within 6\' of the kitchen sink were GFCI, while other ones farther away were standard receptacles.',
      3: 'No score',
      4: 'All exterior, garage, basement, bathroom, and kitchen receptacles within 6\' of the kitchen sink were GFCI protected receptacles.'
    }
  },
  {
    id: 'plumbing-electrical-grounding-type',
    category: 'Plumbing and Electrical Systems',
    subcategory: 'Electrical Systems',
    item: 'Grounding Type',
    weight: 5,
    scoreDescriptions: {
      0: 'Grounding practices did not follow code-approved methods.',
      1: 'No score',
      2: 'Inconsistent grounding practices were observed.',
      3: 'No score',
      4: 'An exterior grounding strategy was properly implemented and was compliant with applicable codes.'
    }
  },
  {
    id: 'plumbing-electrical-junction-boxes',
    category: 'Plumbing and Electrical Systems',
    subcategory: 'Electrical Systems',
    item: 'Junction Boxes',
    weight: 5,
    scoreDescriptions: {
      0: 'Many unnecessary junction boxes were installed and were not accessible.',
      1: 'No score',
      2: 'A minimal number of junction boxes were used for wire routing.',
      3: 'No score',
      4: 'No junction boxes were used for wire routing.'
    }
  },
  {
    id: 'plumbing-electrical-nail-plates',
    category: 'Plumbing and Electrical Systems',
    subcategory: 'Electrical Systems',
    item: 'Nail Plates',
    weight: 5,
    scoreDescriptions: {
      0: 'Nail plates were not used.',
      1: 'No score',
      2: 'Nail plates were sometimes used.',
      3: 'No score',
      4: 'Nail plates were used everywhere.'
    }
  },
  {
    id: 'plumbing-electrical-romex',
    category: 'Plumbing and Electrical Systems',
    subcategory: 'Electrical Systems',
    item: 'Romex Fastening',
    weight: 5,
    scoreDescriptions: {
      0: 'Improper fastening of Romex was evident.',
      1: 'No score',
      2: 'Romex was properly fastened, with minor inconsistencies.',
      3: 'No score',
      4: 'Romex was properly fastened.'
    }
  },
];
