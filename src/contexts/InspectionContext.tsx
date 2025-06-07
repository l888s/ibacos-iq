import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface InspectionItem {
  id: string;
  category: string;
  subcategory: string;
  item: string;
  weight: number;
  score: number | null;
  scoreDescriptions: {
    0: string;
    1: string;
    2: string;
    3: string;
    4: string;
  };
}

export interface Inspection {
  id: string;
  neighborhood: string;
  date: string;
  status: 'in-progress' | 'completed';
  items: InspectionItem[];
  totalScore: number;
  maxScore: number;
  averageScore: number;
}

interface InspectionContextType {
  currentInspection: Inspection | null;
  savedInspections: Inspection[];
  startNewInspection: (neighborhood: string) => void;
  updateItemScore: (itemId: string, score: number) => void;
  saveInspection: () => void;
  submitInspection: () => void;
  loadInspection: (inspectionId: string) => void;
}

const InspectionContext = createContext<InspectionContextType | undefined>(undefined);

export const useInspection = () => {
  const context = useContext(InspectionContext);
  if (context === undefined) {
    throw new Error('useInspection must be used within an InspectionProvider');
  }
  return context;
};

// Complete inspection criteria - adding all missing categories
const defaultInspectionItems: Omit<InspectionItem, 'score'>[] = [
  // Site (6) - Erosion Control
  {
    id: 'site-erosion-concrete-washout',
    category: 'Site',
    subcategory: 'Erosion Control',
    item: 'Concrete Washout Station',
    weight: 6,
    scoreDescriptions: {
      0: 'Concrete washout stations were maintained poorly or were not provided for each community.',
      1: 'Concrete washout stations were inconsistently maintained or did not have a liner at each community.',
      2: 'Concrete washout stations with liners were consistently maintained at each community.',
      3: 'No score',
      4: 'Concrete waste roll-off containers were properly maintained for each community, or all concrete was removed by the concrete trucks.'
    }
  },
  {
    id: 'site-erosion-stabilized-exit',
    category: 'Site',
    subcategory: 'Erosion Control',
    item: 'Stabilized Construction Exit Ways',
    weight: 6,
    scoreDescriptions: {
      0: 'Stabilized construction exit ways were not installed.',
      1: 'Stabilized construction exit ways were inconsistently installed.',
      2: 'Stabilized construction exit ways were installed to allow for one full tire rotation, and streets were usually clean.',
      3: 'No score',
      4: 'Stabilized construction exit ways were installed to allow for multiple tire rotations, and streets were kept clean.'
    }
  },
  {
    id: 'site-erosion-storm-drain',
    category: 'Site',
    subcategory: 'Erosion Control',
    item: 'Storm Drain Inlet Protection',
    weight: 6,
    scoreDescriptions: {
      0: 'Storm drain inlets were not protected or maintained to prevent silt from entering the storm sewer system or natural waterways.',
      1: 'Storm drain inlets were protected but not consistently maintained to prevent silt from entering the storm sewer system or natural waterways.',
      2: 'Storm drain inlets were consistently maintained to prevent silt from entering the storm sewer system or natural waterways.',
      3: 'No score',
      4: 'Redundant measures of storm drain protection were in place and well maintained to prevent silt from entering the storm sewer system or natural waterways, or a silt collection pond was used.'
    }
  },
  {
    id: 'site-erosion-swppp',
    category: 'Site',
    subcategory: 'Erosion Control',
    item: 'SWPPP Site Documentation',
    weight: 6,
    scoreDescriptions: {
      0: 'No SWPPP documentation was provided on site.',
      1: 'No score',
      2: 'A documented SWPPP process was inconsistently provided on site.',
      3: 'No score',
      4: 'A well-documented SWPPP process was provided on site.'
    }
  },
  {
    id: 'site-erosion-trash-collection',
    category: 'Site',
    subcategory: 'Erosion Control',
    item: 'Trash and Bulk Waste Collection Areas',
    weight: 6,
    scoreDescriptions: {
      0: 'Trash and bulk waste collection areas were not implemented.',
      1: 'No score',
      2: 'Trash and bulk waste collection areas (wood or fence containment) were set aside and were well placed in the site.',
      3: 'Commercial (dump or haul off) containers for trash and bulk waste collection areas were set aside and were well placed in the site.',
      4: 'Construction waste was separated for recycle, and there were plenty of receptacles to handle the disposal needs.'
    }
  },
  {
    id: 'site-erosion-steep-slope',
    category: 'Site',
    subcategory: 'Erosion Control',
    item: 'Steep Slope Erosion Control',
    weight: 6,
    scoreDescriptions: {
      0: 'No erosion control was provided for steep slope conditions.',
      1: 'Erosion control for steep slope conditions was inconsistently provided.',
      2: 'Adequate erosion control for steep slope conditions was consistently provided.',
      3: 'No score',
      4: 'Redundant measures of erosion control for steep slope conditions was consistently provided.'
    }
  },
  // Site (6) - Building Elevation
  {
    id: 'site-elevation-foundation-exposure',
    category: 'Site',
    subcategory: 'Building Elevation',
    item: 'Foundation Exposure',
    weight: 6,
    scoreDescriptions: {
      0: 'There was usually less than 8" of foundation exposure at rough grade observed below the sill plate around the perimeter of the houses.',
      1: 'No score',
      2: 'At least 8" of foundation exposure at rough grade was observed below the sill plate with minor inconsistencies.',
      3: 'No score',
      4: 'At least 8" of foundation exposure at rough grade was consistently observed below the sill plate around the perimeter of the houses.'
    }
  },
  {
    id: 'site-elevation-house-placement',
    category: 'Site',
    subcategory: 'Building Elevation',
    item: 'House Placement (in relation to the street)',
    weight: 6,
    scoreDescriptions: {
      0: 'There were houses that were located below the street elevation, with no means of storm water protection.',
      1: 'No score',
      2: 'There were houses that were located below the street elevation, with storm water protection measures taken such as full-length drains at driveways and junior swales.',
      3: 'No score',
      4: 'All houses were placed above the street elevation, with positive drainage on all sides of the houses.'
    }
  },
  // Site (6) - Grading
  {
    id: 'site-grading-final-grade',
    category: 'Site',
    subcategory: 'Grading',
    item: 'Final Grade',
    weight: 6,
    scoreDescriptions: {
      0: 'The final grade was flat to the house, potentially allowing water to pool next to the foundation.',
      1: 'No score',
      2: 'There was adequate slope (5%) in the final grade observed from the house to a swale or to the street.',
      3: 'No score',
      4: 'There was more than adequate slope (greater than 5%) in the final grade from the house to a swale or to the street.'
    }
  },
  {
    id: 'site-grading-rough-grade',
    category: 'Site',
    subcategory: 'Grading',
    item: 'Rough Grade',
    weight: 6,
    scoreDescriptions: {
      0: 'The rough grade was flat around the house, potentially allowing water to pool next to the foundation.',
      1: 'No score',
      2: 'There was adequate slope (5%) in the rough grade observed from the house to a swale or to the street.',
      3: 'No score',
      4: 'There was more than adequate slope (greater than 5%) in the rough grade from the house to a swale or to the street.'
    }
  },
  {
    id: 'site-grading-swales',
    category: 'Site',
    subcategory: 'Grading',
    item: 'Swales',
    weight: 6,
    scoreDescriptions: {
      0: 'No swales were observed between houses.',
      1: 'There was questionable slope in swale design.',
      2: 'There was adequate slope in swale design.',
      3: 'No score',
      4: 'There were substantial swales and slope between all houses.'
    }
  },
  // Site (6) - Site Drainage
  {
    id: 'site-drainage-downspout',
    category: 'Site',
    subcategory: 'Site Drainage',
    item: 'Downspout Discharge',
    weight: 6,
    scoreDescriptions: {
      0: 'Downspouts were discharged directly next to the foundation.',
      1: 'Downspouts discharged to a splash block with poor drainage.',
      2: 'Downspouts discharged to a splash block with grade sloped away from the house.',
      3: 'Downspouts discharged through a minimum 36" extension into a proper swale to carry water away from the foundation.',
      4: 'Downspouts were connected directly to storm drains.'
    }
  },
  {
    id: 'site-drainage-flatwork-drains',
    category: 'Site',
    subcategory: 'Site Drainage',
    item: 'Flatwork Drains',
    weight: 6,
    scoreDescriptions: {
      0: 'Landscape enclosed by flatwork did not have drains for relief of water.',
      1: 'No score',
      2: 'In most cases, landscape enclosed by flatwork had a means for drainage.',
      3: 'No score',
      4: 'All landscape enclosed by flatwork had a means for drainage.'
    }
  },
  // Site (6) - Flatwork
  {
    id: 'site-flatwork-control-joints',
    category: 'Site',
    subcategory: 'Flatwork',
    item: 'Control Joints',
    weight: 6,
    scoreDescriptions: {
      0: 'No control joints were observed in the flatwork.',
      1: 'No score',
      2: 'An adequate number of control joints were installed in the flatwork, with adequate depth in most cases.',
      3: 'No score',
      4: 'Adequate control joints were installed in the flatwork, with an appropriate cut depth that was 1/4 of the slab thickness, or were properly tooled.'
    }
  },
  {
    id: 'site-flatwork-fall-from-house',
    category: 'Site',
    subcategory: 'Flatwork',
    item: 'Flatwork Fall from House',
    weight: 6,
    scoreDescriptions: {
      0: 'Flatwork was sloped toward the house.',
      1: 'No score',
      2: 'No score',
      3: 'No score',
      4: 'Flatwork was sloped away from the house in all cases.'
    }
  },
  // Site (6) - Landscaping
  {
    id: 'site-landscaping-finish-separation',
    category: 'Site',
    subcategory: 'Landscaping',
    item: 'Finish Landscaping (to house separation)',
    weight: 6,
    scoreDescriptions: {
      0: 'The landscaping often was higher than the framed walls or weep holes on brick veneer walls.',
      1: 'No score',
      2: 'A minimum 4" separation between the landscaping and the wood frame or brick veneer weep holes was consistently maintained on all houses.',
      3: 'No score',
      4: 'A minimum 6" separation between the landscaping and the wood frame or brick veneer weep holes was consistently maintained on all houses.'
    }
  },
  {
    id: 'site-landscaping-sprinklers',
    category: 'Site',
    subcategory: 'Landscaping',
    item: 'Sprinklers',
    weight: 6,
    scoreDescriptions: {
      0: 'Irrigation sprinklers were spraying against the house.',
      1: 'No score',
      2: 'No score',
      3: 'No score',
      4: 'Irrigation sprinklers were adjusted to never spray against the house or drip type irrigation was installed.'
    }
  },
  // Site (6) - Material Storage
  {
    id: 'site-storage-lumber-packages',
    category: 'Site',
    subcategory: 'Material Storage',
    item: 'Lumber Packages',
    weight: 6,
    scoreDescriptions: {
      0: 'Lumber was stored on uneven ground and was uncovered.',
      1: 'Lumber was stored on even ground and was uncovered in wet climate.',
      2: 'Lumber was stored on even ground and was uncovered in a dry climate. Or was covered in a wet climate.',
      3: 'Lumber was stored on sleepers and was uncovered in a dry climate, or was covered in most cases in a wet climate.',
      4: 'Lumber was stored on sleepers and was covered in all cases.'
    }
  },
  {
    id: 'site-storage-wallboard',
    category: 'Site',
    subcategory: 'Material Storage',
    item: 'Wallboard',
    weight: 6,
    scoreDescriptions: {
      0: 'Wallboard was usually stored outside and was exposed to the elements.',
      1: 'Wallboard was usually stored indoors on the floor but was uncovered, and the house was not dried in.',
      2: 'Wallboard was usually stored indoors, directly on concrete but kept dry.',
      3: 'Wallboard was usually stored indoors on sleepers (when on concrete) and kept dry.',
      4: 'Wallboard was always stored indoors on sleepers (when on concrete) and kept dry.'
    }
  },
  // Site (6) - Building Assemblies
  {
    id: 'site-assemblies-concrete-floors',
    category: 'Site',
    subcategory: 'Building Assemblies',
    item: 'Concrete Floors (closed in house)',
    weight: 6,
    scoreDescriptions: {
      0: 'Concrete floors had visible long-term water exposure.',
      1: 'No score',
      2: 'Concrete floors were inconsistently found dry after dry-in was completed.',
      3: 'No score',
      4: 'Concrete floors were always found dry after dry-in was completed.'
    }
  },
  {
    id: 'site-assemblies-walls',
    category: 'Site',
    subcategory: 'Building Assemblies',
    item: 'Walls (closed in house)',
    weight: 6,
    scoreDescriptions: {
      0: 'Wood frame walls had visible long-term water exposure.',
      1: 'No score',
      2: 'Wood frame walls were inconsistently found dry after dry-in was completed.',
      3: 'No score',
      4: 'Wood frame walls were always found dry after dry-in was completed.'
    }
  },
  {
    id: 'site-assemblies-wood-floors',
    category: 'Site',
    subcategory: 'Building Assemblies',
    item: 'Wood Floors (closed in house)',
    weight: 6,
    scoreDescriptions: {
      0: 'Wood floors had visible long-term water exposure.',
      1: 'No score',
      2: 'Wood floors were inconsistently found dry after dry-in was completed.',
      3: 'No score',
      4: 'Wood floors were always found dry after dry-in was completed.'
    }
  },
  // Site (6) - Housekeeping
  {
    id: 'site-housekeeping-exterior',
    category: 'Site',
    subcategory: 'Housekeeping',
    item: 'Exterior Job Site Conditions',
    weight: 6,
    scoreDescriptions: {
      0: 'Exterior was not clean, showing a lack of housekeeping practices.',
      1: 'No score',
      2: 'Exterior was inconsistently clean.',
      3: 'No score',
      4: 'Exterior was well cleaned, indicating good housekeeping to prevent tripping hazards.'
    }
  },
  {
    id: 'site-housekeeping-interior',
    category: 'Site',
    subcategory: 'Housekeeping',
    item: 'Interior Job Site Conditions',
    weight: 6,
    scoreDescriptions: {
      0: 'Interior was not clean, showing a lack of housekeeping practices.',
      1: 'No score',
      2: 'Interior was inconsistently clean.',
      3: 'No score',
      4: 'Interior was swept clean at the end of the day, and garbage was disposed in the proper location.'
    }
  },
  // Foundations (6) - Slab on Grade
  {
    id: 'foundations-slab-capillary-break',
    category: 'Foundations',
    subcategory: 'Slab on Grade',
    item: 'Capillary Break (Under footer)',
    weight: 6,
    scoreDescriptions: {
      0: 'The vapor barrier did not extend under the footer, and the soil was not well drained.',
      1: 'No score',
      2: 'The vapor barrier did not extend under the footer or stem wall, but the soil was well drained.',
      3: 'The vapor barrier did not extend under the footer or stem wall, and foundation drains were installed, OR the vapor barrier was extended under the footer or stem wall.',
      4: 'The vapor barrier was extended under the footer and grade beams or stem wall and wrapped up the outside edge of the forms. OR the vapor barrier was extended under the footer or stem wall and wrapped up the outside edge of the footer or stem wall.'
    }
  },
  {
    id: 'foundations-slab-conduit',
    category: 'Foundations',
    subcategory: 'Slab on Grade',
    item: 'Conduit Installed Under Slab',
    weight: 6,
    scoreDescriptions: {
      0: 'Conduit was not installed in a well compacted trench beneath the slab.',
      1: 'No score',
      2: 'Conduit was installed in a well compacted trench beneath the slab with inconsistencies.',
      3: 'No score',
      4: 'Conduit was installed in a well compacted trench beneath the slab.'
    }
  },
  {
    id: 'foundations-slab-penetration-sleeves',
    category: 'Foundations',
    subcategory: 'Slab on Grade',
    item: 'Penetration Sleeves',
    weight: 6,
    scoreDescriptions: {
      0: 'No sleeves were installed at penetrations.',
      1: 'No score',
      2: 'Code-compliant (25 mil) sleeves were installed around all penetrations through the slab.',
      3: 'No score',
      4: 'Penetration sleeves were properly installed, and rigid pipe had multiple wraps of sill seal (or equivalent).'
    }
  },
  {
    id: 'foundations-slab-penetrations',
    category: 'Foundations',
    subcategory: 'Slab on Grade',
    item: 'Penetrations',
    weight: 6,
    scoreDescriptions: {
      0: 'No strategy was used to seal penetrations.',
      1: 'Adequate sealing of penetrations to the vapor barrier with tape was inconsistent.',
      2: 'No score',
      3: 'Penetrations were consistently well sealed to the vapor barrier with tape.',
      4: 'All penetrations were sealed to the vapor barrier using an extra piece of poly and were taped.'
    }
  },
  {
    id: 'foundations-slab-post-tensioned-cable',
    category: 'Foundations',
    subcategory: 'Slab on Grade',
    item: 'Post Tensioned Cable End Protection',
    weight: 6,
    scoreDescriptions: {
      0: 'No protection was in place at cable ends or cables did not have proper embedment.',
      1: 'No score',
      2: 'Protection was inconsistently in place at cable ends and cables did not always have proper embedment.',
      3: 'No score',
      4: 'Protection was in place at cable ends or cables had proper embedment of 3/4" or more.'
    }
  },
  {
    id: 'foundations-slab-post-tensioned-slabs',
    category: 'Foundations',
    subcategory: 'Slab on Grade',
    item: 'Post-Tensioned Slabs',
    weight: 6,
    scoreDescriptions: {
      0: 'Base under slab was not level with intersections of tendons missing chairs. Tendons had sharp bends or sags, and rebar reinforcement was missing at the interior corners.',
      1: 'No score',
      2: 'No score',
      3: 'No score',
      4: 'Base under slab was level with all intersections of tendons raised on chairs. Tendons had no sharp bends or sags, and rebar reinforcement was installed at the interior corners.'
    }
  },
  {
    id: 'foundations-slab-edge-waterproofing',
    category: 'Foundations',
    subcategory: 'Slab on Grade',
    item: 'Slab Edge Waterproofing',
    weight: 6,
    scoreDescriptions: {
      0: 'No score',
      1: 'No score',
      2: 'No slab edge waterproofing or damp proofing was installed.',
      3: 'Poly protected the edge of the foundation to the top of the grade, or damp proofing was installed.',
      4: 'All slab edges were coated with a waterproof material.'
    }
  },
  {
    id: 'foundations-slab-vapor-barrier',
    category: 'Foundations',
    subcategory: 'Slab on Grade',
    item: 'Under Slab Vapor Barrier',
    weight: 6,
    scoreDescriptions: {
      0: 'No vapor barrier was installed under the slab in a wet climate.',
      1: 'A poly vapor barrier was installed under the slab but with major deficiencies in installation quality.',
      2: 'A minimum 6-mil poly vapor barrier was installed and taped, or no vapor barrier was installed in a desert climate.',
      3: 'A minimum 10-mil poly vapor barrier was installed with minor inconsistencies in installation and taping.',
      4: 'A minimum 10-mil poly vapor barrier was installed under the slab, with all seams well sealed with tape.'
    }
  },
  // Adding Framing category
  {
    id: 'framing-floor-lumber-grade',
    category: 'Framing',
    subcategory: 'Floor Framing',
    item: 'Lumber Grade Stamps',
    weight: 7,
    scoreDescriptions: {
      0: 'Lumber grade stamps were not visible on structural members.',
      1: 'Lumber grade stamps were inconsistently visible on structural members.',
      2: 'Lumber grade stamps were visible on most structural members.',
      3: 'No score',
      4: 'Lumber grade stamps were clearly visible on all structural members.'
    }
  },
  {
    id: 'framing-floor-joist-spacing',
    category: 'Framing',
    subcategory: 'Floor Framing',
    item: 'Floor Joist Spacing',
    weight: 7,
    scoreDescriptions: {
      0: 'Floor joist spacing exceeded code requirements.',
      1: 'Floor joist spacing occasionally exceeded code requirements.',
      2: 'Floor joist spacing met code requirements with minor inconsistencies.',
      3: 'No score',
      4: 'Floor joist spacing consistently met code requirements.'
    }
  },
  // Adding Thermal Enclosure category
  {
    id: 'thermal-insulation-installation',
    category: 'Thermal Enclosure',
    subcategory: 'Insulation',
    item: 'Insulation Installation Quality',
    weight: 8,
    scoreDescriptions: {
      0: 'Insulation was poorly installed with significant gaps and compressions.',
      1: 'Insulation installation had frequent gaps and compressions.',
      2: 'Insulation was adequately installed with minor gaps.',
      3: 'Insulation was well installed with minimal gaps.',
      4: 'Insulation was expertly installed with no visible gaps or compressions.'
    }
  },
  {
    id: 'thermal-windows-installation',
    category: 'Thermal Enclosure',
    subcategory: 'Windows',
    item: 'Window Installation',
    weight: 8,
    scoreDescriptions: {
      0: 'Windows were poorly installed with visible gaps around frames.',
      1: 'Window installation had inconsistent sealing.',
      2: 'Windows were adequately installed and sealed.',
      3: 'Windows were well installed with proper sealing.',
      4: 'Windows were expertly installed with comprehensive sealing.'
    }
  },
  // Adding Air Barrier category
  {
    id: 'air-barrier-continuity',
    category: 'Air Barrier',
    subcategory: 'Envelope Sealing',
    item: 'Air Barrier Continuity',
    weight: 9,
    scoreDescriptions: {
      0: 'Air barrier had significant discontinuities.',
      1: 'Air barrier had frequent discontinuities.',
      2: 'Air barrier had minor discontinuities.',
      3: 'Air barrier was mostly continuous.',
      4: 'Air barrier was completely continuous.'
    }
  },
  // Adding Drainage Plane category
  {
    id: 'drainage-plane-installation',
    category: 'Drainage Plane',
    subcategory: 'Weather Resistive Barrier',
    item: 'WRB Installation',
    weight: 8,
    scoreDescriptions: {
      0: 'Weather resistive barrier was poorly installed.',
      1: 'WRB installation had significant deficiencies.',
      2: 'WRB was adequately installed.',
      3: 'WRB was well installed.',
      4: 'WRB was expertly installed with proper overlaps.'
    }
  },
  // Adding Wall Cladding category
  {
    id: 'wall-cladding-attachment',
    category: 'Wall Cladding',
    subcategory: 'Siding',
    item: 'Siding Attachment',
    weight: 7,
    scoreDescriptions: {
      0: 'Siding attachment was inadequate.',
      1: 'Siding attachment had deficiencies.',
      2: 'Siding was adequately attached.',
      3: 'Siding was well attached.',
      4: 'Siding was expertly attached per manufacturer specifications.'
    }
  },
  // Adding Showers and Tubs category
  {
    id: 'showers-waterproofing',
    category: 'Showers and Tubs',
    subcategory: 'Waterproofing',
    item: 'Shower Waterproofing',
    weight: 10,
    scoreDescriptions: {
      0: 'Shower waterproofing was inadequate or missing.',
      1: 'Shower waterproofing had significant deficiencies.',
      2: 'Shower waterproofing was adequate.',
      3: 'Shower waterproofing was well executed.',
      4: 'Shower waterproofing was expertly installed.'
    }
  },
  // Adding Roof Cladding and Drainage category
  {
    id: 'roof-cladding-installation',
    category: 'Roof Cladding and Drainage',
    subcategory: 'Roofing',
    item: 'Roof Cladding Installation',
    weight: 8,
    scoreDescriptions: {
      0: 'Roof cladding was poorly installed.',
      1: 'Roof cladding installation had deficiencies.',
      2: 'Roof cladding was adequately installed.',
      3: 'Roof cladding was well installed.',
      4: 'Roof cladding was expertly installed.'
    }
  },
  // Adding HVAC Systems category
  {
    id: 'hvac-ductwork-sealing',
    category: 'HVAC Systems',
    subcategory: 'Ductwork',
    item: 'Ductwork Sealing',
    weight: 8,
    scoreDescriptions: {
      0: 'Ductwork sealing was inadequate.',
      1: 'Ductwork sealing had deficiencies.',
      2: 'Ductwork was adequately sealed.',
      3: 'Ductwork was well sealed.',
      4: 'Ductwork was expertly sealed.'
    }
  },
  // Adding Plumbing and Electrical Systems category
  {
    id: 'plumbing-installation',
    category: 'Plumbing and Electrical Systems',
    subcategory: 'Plumbing',
    item: 'Plumbing Installation',
    weight: 7,
    scoreDescriptions: {
      0: 'Plumbing installation was inadequate.',
      1: 'Plumbing installation had deficiencies.',
      2: 'Plumbing was adequately installed.',
      3: 'Plumbing was well installed.',
      4: 'Plumbing was expertly installed.'
    }
  },
  // Adding Interior Finishes category
  {
    id: 'interior-drywall-installation',
    category: 'Interior Finishes',
    subcategory: 'Drywall',
    item: 'Drywall Installation',
    weight: 6,
    scoreDescriptions: {
      0: 'Drywall installation was poor quality.',
      1: 'Drywall installation had deficiencies.',
      2: 'Drywall was adequately installed.',
      3: 'Drywall was well installed.',
      4: 'Drywall was expertly installed.'
    }
  }
];

interface InspectionProviderProps {
  children: ReactNode;
}

export const InspectionProvider: React.FC<InspectionProviderProps> = ({ children }) => {
  const [currentInspection, setCurrentInspection] = useState<Inspection | null>(null);
  const [savedInspections, setSavedInspections] = useState<Inspection[]>(() => {
    const saved = localStorage.getItem('ibacosiq_inspections');
    return saved ? JSON.parse(saved) : [];
  });

  const calculateAverageScore = (items: InspectionItem[]) => {
    const scoredItems = items.filter(item => item.score !== null);
    if (scoredItems.length === 0) return 0;
    
    const totalScore = scoredItems.reduce((sum, item) => sum + (item.score || 0), 0);
    return totalScore / scoredItems.length;
  };

  const startNewInspection = (neighborhood: string) => {
    const newInspection: Inspection = {
      id: Date.now().toString(),
      neighborhood,
      date: new Date().toISOString(),
      status: 'in-progress',
      items: defaultInspectionItems.map(item => ({
        ...item,
        score: null
      })),
      totalScore: 0,
      maxScore: defaultInspectionItems.length * 4,
      averageScore: 0
    };
    setCurrentInspection(newInspection);
  };

  const updateItemScore = (itemId: string, score: number) => {
    if (!currentInspection) return;
    
    const updatedItems = currentInspection.items.map(item =>
      item.id === itemId ? { ...item, score } : item
    );
    
    const totalScore = updatedItems.reduce((sum, item) => 
      sum + (item.score || 0), 0
    );
    
    const averageScore = calculateAverageScore(updatedItems);
    
    setCurrentInspection({
      ...currentInspection,
      items: updatedItems,
      totalScore,
      averageScore
    });
  };

  const saveInspection = () => {
    if (!currentInspection) return;
    
    const updatedInspections = savedInspections.filter(i => i.id !== currentInspection.id);
    updatedInspections.push(currentInspection);
    
    setSavedInspections(updatedInspections);
    localStorage.setItem('ibacosiq_inspections', JSON.stringify(updatedInspections));
  };

  const submitInspection = () => {
    if (!currentInspection) return;
    
    const completedInspection = {
      ...currentInspection,
      status: 'completed' as const
    };
    
    const updatedInspections = savedInspections.filter(i => i.id !== currentInspection.id);
    updatedInspections.push(completedInspection);
    
    setSavedInspections(updatedInspections);
    localStorage.setItem('ibacosiq_inspections', JSON.stringify(updatedInspections));
    setCurrentInspection(null);
  };

  const loadInspection = (inspectionId: string) => {
    const inspection = savedInspections.find(i => i.id === inspectionId);
    if (inspection) {
      setCurrentInspection(inspection);
    }
  };

  return (
    <InspectionContext.Provider value={{
      currentInspection,
      savedInspections,
      startNewInspection,
      updateItemScore,
      saveInspection,
      submitInspection,
      loadInspection
    }}>
      {children}
    </InspectionContext.Provider>
  );
};
