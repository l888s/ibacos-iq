
import { InspectionItem } from '@/types/inspection';

export const drainagePlaneItems: Omit<InspectionItem, 'score'>[] = [
  // Drainage Plane and Flashing (14) - Patio Doors
  {
    id: 'drainage-plane-patio-door-end-dam',
    category: 'Drainage Plane and Flashing',
    subcategory: 'Patio Doors',
    item: 'Foam/WRB Structural Panels) End Dam (N/A if sill pans were not installed)',
    weight: 14,
    scoreDescriptions: {
      0: 'End dams were not provided for exterior doors.',
      1: 'When door threshold is over wood frame: End dam created using caulk that was not extended 3" up the jamb but was across the entire back of door threshold.',
      2: 'When door threshold is over wood frame: End dam created using caulk that extended at 3" up the jamb and across the entire back of door threshold.',
      3: 'The self-stick sill pans under exterior doors had end dams that extended at least 3" up the door jambs.',
      4: 'Pre-manufactured sill pan, recessed sill pan or end dam created using caulk that extended at 3" up the jamb and across the entire back of door threshold.'
    }
  }
];
