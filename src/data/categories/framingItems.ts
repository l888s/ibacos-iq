
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
  
  // Framing (6) - Floor Framing
  {
    id: 'framing-floor-joist-spacing',
    category: 'Framing',
    subcategory: 'Floor Framing',
    item: 'Joist Spacing',
    weight: 6,
    scoreDescriptions: {
      0: 'Floor joist spacing was not per structural plans.',
      1: 'Floor joist spacing had minor deviations from structural plans.',
      2: 'Floor joist spacing was per structural plans with minor inconsistencies.',
      3: 'No score',
      4: 'Floor joist spacing was per structural plans and properly supported.'
    }
  },
  {
    id: 'framing-floor-joist-blocking',
    category: 'Framing',
    subcategory: 'Floor Framing',
    item: 'Joist Blocking',
    weight: 6,
    scoreDescriptions: {
      0: 'Required joist blocking was not installed.',
      1: 'Joist blocking was installed with major gaps.',
      2: 'Joist blocking was installed per specifications with minor gaps.',
      3: 'No score',
      4: 'Joist blocking was properly installed per specifications.'
    }
  },
  {
    id: 'framing-floor-subflooring',
    category: 'Framing',
    subcategory: 'Floor Framing',
    item: 'Subflooring Installation',
    weight: 6,
    scoreDescriptions: {
      0: 'Subflooring installation was poorly executed.',
      1: 'Subflooring installation had minor deviations from specifications.',
      2: 'Subflooring installation was per specifications with minor issues.',
      3: 'No score',
      4: 'Subflooring installation was executed better than specifications.'
    }
  },
  // Framing (6) - Wall Framing
  {
    id: 'framing-wall-stud-spacing',
    category: 'Framing',
    subcategory: 'Wall Framing',
    item: 'Stud Spacing',
    weight: 6,
    scoreDescriptions: {
      0: 'Wall stud spacing was not per structural plans.',
      1: 'Wall stud spacing had minor deviations from structural plans.',
      2: 'Wall stud spacing was per structural plans with minor inconsistencies.',
      3: 'No score',
      4: 'Wall stud spacing was per structural plans and properly aligned.'
    }
  },
  {
    id: 'framing-wall-headers',
    category: 'Framing',
    subcategory: 'Wall Framing',
    item: 'Headers',
    weight: 6,
    scoreDescriptions: {
      0: 'Headers were not sized or installed per structural plans.',
      1: 'Headers were installed with minor deviations from structural plans.',
      2: 'Headers were sized and installed per structural plans with minor issues.',
      3: 'No score',
      4: 'Headers were sized and installed better than structural plans.'
    }
  },
  {
    id: 'framing-wall-corners',
    category: 'Framing',
    subcategory: 'Wall Framing',
    item: 'Corner Construction',
    weight: 6,
    scoreDescriptions: {
      0: 'Corner construction was not per standard practices.',
      1: 'Corner construction had minor deviations from standard practices.',
      2: 'Corner construction was per standard practices with minor issues.',
      3: 'No score',
      4: 'Corner construction was executed better than standard practices.'
    }
  },
  // Framing (6) - Engineered Roof Truss Framing
  {
    id: 'framing-truss-bracing',
    category: 'Framing',
    subcategory: 'Engineered Roof Truss Framing',
    item: 'Bracing',
    weight: 6,
    scoreDescriptions: {
      0: 'The truss assembly was missing the required bracing.',
      1: 'No score',
      2: 'Bracing was installed to connect trusses together, with minor inconsistencies.',
      3: 'No score',
      4: 'Bracing was installed in accordance with the truss manufacturer\'s specifications, which allowed the trusses to act as a complete system, and gable end walls were correctly braced.'
    }
  },
  {
    id: 'framing-truss-spacing',
    category: 'Framing',
    subcategory: 'Engineered Roof Truss Framing',
    item: 'Truss Spacing',
    weight: 6,
    scoreDescriptions: {
      0: 'Truss spacing was not per manufacturer specifications.',
      1: 'Truss spacing had minor deviations from manufacturer specifications.',
      2: 'Truss spacing was per manufacturer specifications with minor inconsistencies.',
      3: 'No score',
      4: 'Truss spacing was per manufacturer specifications and properly aligned.'
    }
  },
  {
    id: 'framing-truss-connections',
    category: 'Framing',
    subcategory: 'Engineered Roof Truss Framing',
    item: 'Connections',
    weight: 6,
    scoreDescriptions: {
      0: 'Truss connections were not per manufacturer specifications.',
      1: 'Truss connections had minor deviations from manufacturer specifications.',
      2: 'Truss connections were per manufacturer specifications with minor issues.',
      3: 'No score',
      4: 'Truss connections were executed better than manufacturer specifications.'
    }
  },
  // Framing (6) - Conventional Roof Framing
  {
    id: 'framing-roof-rafter-spacing',
    category: 'Framing',
    subcategory: 'Conventional Roof Framing',
    item: 'Rafter Spacing',
    weight: 6,
    scoreDescriptions: {
      0: 'Rafter spacing was not per structural plans.',
      1: 'Rafter spacing had minor deviations from structural plans.',
      2: 'Rafter spacing was per structural plans with minor inconsistencies.',
      3: 'No score',
      4: 'Rafter spacing was per structural plans and properly supported.'
    }
  },
  {
    id: 'framing-roof-ridge-beam',
    category: 'Framing',
    subcategory: 'Conventional Roof Framing',
    item: 'Ridge Beam',
    weight: 6,
    scoreDescriptions: {
      0: 'Ridge beam was not sized or installed per structural plans.',
      1: 'Ridge beam was installed with minor deviations from structural plans.',
      2: 'Ridge beam was sized and installed per structural plans with minor issues.',
      3: 'No score',
      4: 'Ridge beam was sized and installed better than structural plans.'
    }
  }
];
