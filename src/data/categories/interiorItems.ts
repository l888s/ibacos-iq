
import { InspectionItem } from '@/types/inspection';

export const interiorItems: Omit<InspectionItem, 'score'>[] = [
  // Interior Finishes (4) - Windows and Doors
  {
    id: 'interior-finishes-smooth-operation',
    category: 'Interior Finishes',
    subcategory: 'Windows and Doors',
    item: 'Smooth Operation',
    weight: 4,
    scoreDescriptions: {
      0: 'Windows and doors did not open or close easily, indicating possible issues with installation.',
      1: 'No score',
      2: 'Finished windows and doors opened and closed smoothly, and all locks were able to be operated, with minor inconsistencies.',
      3: 'No score',
      4: 'All finished windows and doors opened and closed smoothly, and all locks were able to be operated.'
    }
  },
  // Interior Finishes (4) - Cabinetry
  {
    id: 'interior-finishes-cabs-finish',
    category: 'Interior Finishes',
    subcategory: 'Cabinetry',
    item: 'Finish Cabinetry',
    weight: 4,
    scoreDescriptions: {
      0: 'Cabinets operated improperly as a result of issues with hardware.',
      1: 'No score',
      2: 'Cabinet doors opened and closed properly, and hardware was properly installed, with some inconsistencies.',
      3: 'No score',
      4: 'All cabinet doors opened and closed properly, and hardware was properly installed.'
    }
  },
  // Interior Finishes (4) - Walls and Ceilings
  {
    id: 'interior-finishes-walls-ceiling',
    category: 'Interior Finishes',
    subcategory: 'Walls and Ceilings',
    item: 'Drywall Ceiling',
    weight: 4,
    scoreDescriptions: {
      0: 'Ceiling drywall was installed parallel to the trusses without the use of RC channels or strapping.',
      1: 'No score',
      2: 'Ceiling drywall was installed perpendicular to the trusses without control joints without RC channels in trusses.',
      3: 'No score',
      4: 'Ceiling drywall was installed perpendicular to the trusses with control joints or RC channels on the trusses.'
    }
  },
  {
    id: 'interior-finishes-walls-clearance',
    category: 'Interior Finishes',
    subcategory: 'Walls and Ceilings',
    item: 'Drywall Clearance at Slabs',
    weight: 4,
    scoreDescriptions: {
      0: 'Drywall edge was in contact with concrete slabs.',
      1: 'No score',
      2: 'Drywall edge (or corner aid) clearance was inconsistently maintained at slabs.',
      3: 'No score',
      4: 'Drywall edges (and corner aids) maintained 1/2-inch clearance at concrete slabs.'
    }
  },
  {
    id: 'interior-finishes-walls-fastening',
    category: 'Interior Finishes',
    subcategory: 'Walls and Ceilings',
    item: 'Drywall Fastening to Engineered Roof Trusses',
    weight: 4,
    scoreDescriptions: {
      0: 'Interior corners at ceiling and wall intersections were fastened too close to corners.',
      1: 'No score',
      2: 'Interior wall corners at ceiling and wall intersections were fastened at least 8" away from corners on walls and 7" away on ceilings (with minor inconsistencies). or Local code prohibits holding fasteners back from corners.',
      3: 'No score',
      4: 'Interior wall corners at ceiling and wall intersections were fastened at least 8" away from corners on walls and 7" away on ceilings.'
    }
  },
  {
    id: 'interior-finishes-walls-saddling',
    category: 'Interior Finishes',
    subcategory: 'Walls and Ceilings',
    item: 'Drywall Saddling',
    weight: 4,
    scoreDescriptions: {
      0: 'Drywall seams were not saddled at vertical and horizontal openings.',
      1: 'No score',
      2: 'Drywall seams were not consistently saddled at vertical and horizontal openings.',
      3: 'No score',
      4: 'Drywall seams were consistently saddled by 6 inches or greater at all vertical and horizontal openings.'
    }
  },
  {
    id: 'interior-finishes-walls-moisture',
    category: 'Interior Finishes',
    subcategory: 'Walls and Ceilings',
    item: 'Wallboard Moisture',
    weight: 4,
    scoreDescriptions: {
      0: 'Wallboard was visibly wet while it was being installed.',
      1: 'No score',
      2: 'Wallboard was inconsistently found wet while being installed.',
      3: 'No score',
      4: 'Wallboard was installed and kept dry throughout the finishing phase.'
    }
  },
];
