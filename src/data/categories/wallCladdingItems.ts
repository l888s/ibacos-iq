import { InspectionItem } from '@/types/inspection';

export const wallCladdingItems: Omit<InspectionItem, 'score'>[] = [
 // Wall Cladding (10) - Siding
  {
    id: 'wall-cladding-siding-clearance-drip-cap',
    category: 'Wall Cladding',
    subcategory: 'Siding',
    item: 'Clearance at Horizontal Drip Cap',
    weight: 10,
    scoreDescriptions: {
      0: 'Siding did not have clearance over drip caps and/or was sealed.',
      1: 'No score',
      2: 'Siding usually had a 1/4" of clearance over drip caps with no sealant except at the ends.',
      3: 'No score',
      4: 'Siding always had at least a 1/4" of clearance over drip caps with no sealant except at the ends.'
    }
  },
  {
    id: 'wall-cladding-siding-clearance-vertical-trim',
    category: 'Wall Cladding',
    subcategory: 'Siding',
    item: 'Clearance at Vertical Trim',
    weight: 10,
    scoreDescriptions: {
      0: 'No gapping was provided where siding meets trim components.',
      1: 'No score',
      2: 'No score',
      3: 'No score',
      4: 'Siding had 1/8" gapping where siding meets trim components.'
    }
  },
  {
    id: 'wall-cladding-siding-field-cut-priming',
    category: 'Wall Cladding',
    subcategory: 'Siding',
    item: 'Field Cut Priming',
    weight: 10,
    scoreDescriptions: {
      0: 'Siding field cuts were not primed.',
      1: 'No score',
      2: 'No score',
      3: 'No score',
      4: 'All siding field cuts were primed.'
    }
  },
  {
    id: 'wall-cladding-siding-field-joints',
    category: 'Wall Cladding',
    subcategory: 'Siding',
    item: 'Siding Field Joints',
    weight: 10,
    scoreDescriptions: {
      0: 'Treatment of field joints did not comply with manufacturer specifications.',
      1: 'No score',
      2: 'Treatment of field joints relied on sealant or joint covers.',
      3: 'No score',
      4: 'Treatment of field joints utilized back tab flashing.'
    }
  },
  {
    id: 'wall-cladding-siding-drip-cap-slope',
    category: 'Wall Cladding',
    subcategory: 'Siding',
    item: 'Drip Cap Slope',
    weight: 10,
    scoreDescriptions: {
      0: 'Most drip caps had negative slope.',
      1: 'No score',
      2: 'Most drip caps were installed flat.',
      3: 'No score',
      4: 'All drip caps had positive slope away from walls.'
    }
  },
  {
    id: 'wall-cladding-siding-drip-caps',
    category: 'Wall Cladding',
    subcategory: 'Siding',
    item: 'Drip Caps',
    weight: 10,
    scoreDescriptions: {
      0: 'Drip caps were not installed over door and window openings or over belly bands.',
      1: 'Drip caps were inconsistently installed over door and window openings or over belly bands.',
      2: 'Drip caps were installed over door and window openings but not over belly bands or other horizontal trim components.',
      3: 'Drip caps were installed to extend beyond door and window openings, belly bands, and other horizontal trim components, with minor inconsistencies.',
      4: 'Drip caps were consistently installed to extend beyond door and window openings, belly bands, and other horizontal trim components.'
    }
  },
  {
    id: 'wall-cladding-siding-rainscreen',
    category: 'Wall Cladding',
    subcategory: 'Siding',
    item: 'Rainscreen',
    weight: 10,
    scoreDescriptions: {
      0: 'No score',
      1: 'No score',
      2: 'Siding was installed over the drainage plane, but a rainscreen strategy was not employed.',
      3: 'No score',
      4: 'Siding was installed with an air space between the drainage plane and the siding, creating a rainscreen.'
    }
  },
  {
    id: 'wall-cladding-siding-siding-reveal-at-flatwork',
    category: 'Wall Cladding',
    subcategory: 'Siding',
    item: 'Siding Reveal at Flatwork',
    weight: 10,
    scoreDescriptions: {
      0: 'The siding was at or below flatwork, with no reveal in many cases.',
      1: 'No score',
      2: 'The siding typically had less than 2" of reveal above the flatwork.',
      3: 'No score',
      4: 'The siding consistently had at least 2" of reveal above the flatwork.'
    }
  },
  {
    id: 'wall-cladding-siding-siding-reveal-at-grade',
    category: 'Wall Cladding',
    subcategory: 'Siding',
    item: 'Siding Reveal at Grade',
    weight: 10,
    scoreDescriptions: {
      0: 'Siding was below grade with no reveal.',
      1: 'Siding was typically at grade or less than 2" above grade.',
      2: 'Siding typically had 2" to 4" of reveal above grade.',
      3: 'Siding typically had 4" to 6" of reveal above grade.',
      4: 'Siding consistently had 6" or greater of reveal above grade.'
    }
  },
  {
    id: 'wall-cladding-siding-siding-reveal-at-roof',
    category: 'Wall Cladding',
    subcategory: 'Siding',
    item: 'Siding Reveal at Roof',
    weight: 10,
    scoreDescriptions: {
      0: 'Siding and trim had no reveal at the roof.',
      1: 'Siding and trim reveal at the roof did not comply with manufacturers minimum requirements.',
      2: 'Siding and trim reveal at the roof complied with manufacturers minimum requirements.',
      3: 'No score',
      4: 'Siding and trim had a continuous 2in reveal at the roof.'
    }
  },
  // Wall Cladding (10) - Brick/Stone Veneer
  {
    id: 'wall-cladding-brick-air-space',
    category: 'Wall Cladding',
    subcategory: 'Brick/Stone Veneer',
    item: 'Air Space',
    weight: 10,
    scoreDescriptions: {
      0: 'No air space was provided behind the brick veneer.',
      1: 'No score',
      2: 'The air space provided behind the brick veneer was less than 1" or greater than 2".',
      3: 'No score',
      4: 'A consistent 1" air space was provided behind all brick veneer.'
    }
  },
  {
    id: 'wall-cladding-brick-backer-rod',
    category: 'Wall Cladding',
    subcategory: 'Brick/Stone Veneer',
    item: 'Backer Rod and Sealant at Transitions',
    weight: 10,
    scoreDescriptions: {
      0: 'No backer rod or sealant was used at brick transitions.',
      1: 'No score',
      2: 'Sealant alone was installed at all transitions.',
      3: 'No score',
      4: 'Sealant installed over supporting backer rod was consistently used at all brick transitions.'
    }
  },
  {
    id: 'wall-cladding-brick-bond-break',
    category: 'Wall Cladding',
    subcategory: 'Brick/Stone Veneer',
    item: 'Bond Break',
    weight: 10,
    scoreDescriptions: {
      0: 'No bond break was installed behind the brick veneer.',
      1: 'No score',
      2: 'No bond break was installed and no mortar was in contact with the drainage plane.',
      3: 'An independent layer of building paper was installed over a drainage plane to provide a bond break behind the bottom 36" of the brick veneer.',
      4: 'An independent layer of building paper was installed over the drainage plane to provide a bond break behind 100% of the brick veneer.'
    }
  },
  {
    id: 'wall-cladding-brick-brick-tie',
    category: 'Wall Cladding',
    subcategory: 'Brick/Stone Veneer',
    item: 'Brick Tie Installation',
    weight: 10,
    scoreDescriptions: {
      0: 'Brick ties were not installed.',
      1: 'Many brick ties were missing or were not properly fastened directly into a stud.',
      2: 'Brick ties were attached where studs were located and were spaced according to code, with a few minor inconsistencies. Brick ties were correctly oriented and were embedded halfway into the brick.',
      3: 'No score',
      4: 'Brick ties were attached where studs were located and were spaced according to code. Brick ties were embedded halfway into the brick, and were adjustable, commercial grade type.'
    }
  },
  {
    id: 'wall-cladding-brick-clearance',
    category: 'Wall Cladding',
    subcategory: 'Brick/Stone Veneer',
    item: 'Clearance at Transitions',
    weight: 10,
    scoreDescriptions: {
      0: 'Brick was in contact with window and door frames.',
      1: 'No score',
      2: 'Brick was inconsistently gapped at window and door frames.',
      3: 'No score',
      4: 'Brick maintained 1/4" clearance at all window and door frames to allow for material expansion and contraction.'
    }
  },
  {
    id: 'wall-cladding-brick-mortar-fully-packed',
    category: 'Wall Cladding',
    subcategory: 'Brick/Stone Veneer',
    item: 'Mortar Fully Packed in Joints',
    weight: 10,
    scoreDescriptions: {
      0: 'Mortar joints were sandy and of very poor quality.',
      1: 'No score',
      2: 'There were instances of missing mortar at some brick joints.',
      3: 'No score',
      4: 'All mortar joints were fully packed and pointed.'
    }
  },
  {
    id: 'wall-cladding-brick-slope',
    category: 'Wall Cladding',
    subcategory: 'Brick/Stone Veneer',
    item: 'Slope of Brick Sills',
    weight: 10,
    scoreDescriptions: {
      0: 'Rowlock brick sills were sloped in the improper direction, or were flat.',
      1: 'Rowlock brick sills were minimal in slope.',
      2: 'Sills sloped away from the house to drain properly. The fall was a minimum of 1" per foot.',
      3: 'No score',
      4: 'All rowlock brick sills sloped away from the house to drain properly. The fall was a minimum of 15 degrees.'
    }
  },
  {
    id: 'wall-cladding-brick-steel-lintel',
    category: 'Wall Cladding',
    subcategory: 'Brick/Stone Veneer',
    item: 'Steel Lintel Primer',
    weight: 10,
    scoreDescriptions: {
      0: 'Steel lintels were not pre-primed.',
      1: 'No score',
      2: 'Steel lintels were pre-primed except at end cuts.',
      3: 'No score',
      4: 'Steel lintels were fully pre-primed.'
    }
  },
  {
    id: 'wall-cladding-brick-flashing-weeps',
    category: 'Wall Cladding',
    subcategory: 'Brick/Stone Veneer',
    item: 'Through Wall Flashing/Weeps Below Windows',
    weight: 10,
    scoreDescriptions: {
      0: 'Through-wall flashing and weeps were not provided at the rowlocks below windows in the brick veneer.',
      1: 'Through-wall flashing and weeps were inconsistently provided at the rowlocks below windows in the brick veneer.',
      2: 'Through-wall flashing and weeps were provided at the rowlocks below windows in the brick veneer. Tube or rope weeps were used.',
      3: 'Through-wall flashing and weeps were provided at the rowlocks below windows in the brick veneer. Open vertical joints were used as weeps.',
      4: 'Through-wall flashing and weeps were provided at the rowlocks below windows completely covering the lintel in the brick veneer. Core vents were used as weeps.'
    }
  },
  {
    id: 'wall-cladding-brick-flashing-specs',
    category: 'Wall Cladding',
    subcategory: 'Brick/Stone Veneer',
    item: 'Through-Wall Flashing Specification',
    weight: 10,
    scoreDescriptions: {
      0: 'Through-wall flashing material was not specified for a through-wall application.',
      1: 'No score',
      2: 'Through-wall flashing material was 10 mil polyethelyne plastic.',
      3: 'No score',
      4: 'Through-wall flashing material was specified for a through-wall application.'
    }
  },
  {
    id: 'wall-cladding-brick-flashing-weeps-ao',
    category: 'Wall Cladding',
    subcategory: 'Brick/Stone Veneer',
    item: 'Through-Wall Flashing/Weeps (Above Openings)',
    weight: 10,
    scoreDescriptions: {
      0: 'Through-wall flashing and weeps were not provided over the heads of openings in the brick veneer.',
      1: 'Through-wall flashing and weeps were inconsistently provided over the heads of openings in the brick veneer.',
      2: 'Through-wall flashing and weeps were provided over the heads of openings in the brick veneer. Tube or rope weeps were used.',
      3: 'Through-wall flashing and weeps were provided over the heads of openings in the brick veneer. Open vertical joints were used as weeps.',
      4: 'Through-wall flashing and weeps were provided over the heads of openings completely covering the lintel in the brick veneer. Core vents were used as weeps.'
    }
  },
  {
    id: 'wall-cladding-brick-flashing-weeps-bow',
    category: 'Wall Cladding',
    subcategory: 'Brick/Stone Veneer',
    item: 'Through-Wall Flashing/Weeps (Base of Wall)',
    weight: 10,
    scoreDescriptions: {
      0: 'Through-wall flashing and weeps were not provided at the sills for the brick veneer.',
      1: 'Through-wall flashing and weeps were inconsistently provided at the sills for the brick veneer.',
      2: 'Through-wall flashing and weeps were provided at the sills for the brick veneer. Tube or rope weeps were used.',
      3: 'Through-wall flashing and weeps were provided at the sills for the brick veneer. Open vertical joints were used as weeps.',
      4: 'Through-wall flashing and weeps were provided at the sills for the brick veneer. Core vents were used as weeps.'
    }
  },
];
