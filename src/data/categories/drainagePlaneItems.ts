
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
  },
  {
    id: 'drainage-plane-patio-door-flashing',
    category: 'Drainage Plane and Flashing',
    subcategory: 'Patio Doors',
    item: 'Flashing',
    weight: 14,
    scoreDescriptions: {
      0: 'No flashing was installed above exterior doors.',
      1: 'No score',
      2: 'Head flashing was installed above doors but did not extend 3" beyond the opening on both sides.',
      3: 'No score',
      4: 'Head flashing was installed above doors and extended 3" beyond the opening on both sides.'
    }
  },
  {
    id: 'drainage-plane-patio-door-housewrap',
    category: 'Drainage Plane and Flashing',
    subcategory: 'Patio Doors',
    item: 'Housewrap',
    weight: 14,
    scoreDescriptions: {
      0: 'The house wrap was not properly integrated with exterior doors.',
      1: 'No score',
      2: 'The house wrap was properly integrated with exterior doors with minor inconsistencies.',
      3: 'No score',
      4: 'The house wrap was properly integrated with exterior doors.'
    }
  },
  {
    id: 'drainage-plane-patio-door-sill-pan',
    category: 'Drainage Plane and Flashing',
    subcategory: 'Patio Doors',
    item: 'Sill Pan',
    weight: 14,
    scoreDescriptions: {
      0: 'No sill pans were installed under exterior doors.',
      1: 'No score',
      2: 'Sill pans were installed under exterior doors with minor inconsistencies.',
      3: 'No score',
      4: 'Sill pans were properly installed under all exterior doors.'
    }
  },
  // Windows
  {
    id: 'drainage-plane-window-flashing',
    category: 'Drainage Plane and Flashing',
    subcategory: 'Windows',
    item: 'Flashing',
    weight: 14,
    scoreDescriptions: {
      0: 'No flashing was installed above windows.',
      1: 'No score',
      2: 'Head flashing was installed above windows but did not extend 3" beyond the opening on both sides.',
      3: 'No score',
      4: 'Head flashing was installed above windows and extended 3" beyond the opening on both sides.'
    }
  },
  {
    id: 'drainage-plane-window-housewrap',
    category: 'Drainage Plane and Flashing',
    subcategory: 'Windows',
    item: 'Housewrap',
    weight: 14,
    scoreDescriptions: {
      0: 'The house wrap was not properly integrated with windows.',
      1: 'No score',
      2: 'The house wrap was properly integrated with windows with minor inconsistencies.',
      3: 'No score',
      4: 'The house wrap was properly integrated with windows.'
    }
  },
  {
    id: 'drainage-plane-window-sill-pan',
    category: 'Drainage Plane and Flashing',
    subcategory: 'Windows',
    item: 'Sill Pan',
    weight: 14,
    scoreDescriptions: {
      0: 'No sill pans were installed under windows.',
      1: 'No score',
      2: 'Sill pans were installed under windows with minor inconsistencies.',
      3: 'No score',
      4: 'Sill pans were properly installed under all windows.'
    }
  }
];
