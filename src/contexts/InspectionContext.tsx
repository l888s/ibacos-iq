import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

export interface InspectionItem {
  id: string;
  name: string;
  description: string;
  score: number | null;
  category: string;
  subcategory: string;
  weight: number;
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
  items: InspectionItem[];
  status: 'draft' | 'completed';
  totalScore: number;
  maxScore: number;
}

interface InspectionContextType {
  currentInspection: Inspection | null;
  savedInspections: Inspection[];
  startNewInspection: (neighborhood: string) => void;
  updateInspectionItem: (itemId: string, score: number) => void;
  saveInspection: () => void;
  submitInspection: () => void;
  loadInspection: (id: string) => void;
}

const InspectionContext = createContext<InspectionContextType | undefined>(undefined);

export const useInspection = () => {
  const context = useContext(InspectionContext);
  if (context === undefined) {
    throw new Error('useInspection must be used within an InspectionProvider');
  }
  return context;
};

interface InspectionProviderProps {
  children: ReactNode;
}

const inspectionItems: Omit<InspectionItem, 'score'>[] = [
  // Site (6) - Erosion Control
  {
    id: '1',
    name: 'Concrete Washout Station',
    category: 'Site',
    subcategory: 'Erosion Control',
    weight: 6,
    description: 'Assessment of concrete washout station maintenance and provision',
    scoreDescriptions: {
      0: 'Concrete washout stations were maintained poorly or were not provided for each community.',
      1: 'Concrete washout stations were inconsistently maintained or did not have a liner at each community.',
      2: 'Concrete washout stations with liners were consistently maintained at each community.',
      3: 'No score',
      4: 'Concrete waste roll-off containers were properly maintained for each community, or all concrete was removed by the concrete trucks.'
    }
  },
  {
    id: '2',
    name: 'Paint and Drywall Washout Stations',
    category: 'Site',
    subcategory: 'Erosion Control',
    weight: 6,
    description: 'Assessment of paint and drywall washout station implementation',
    scoreDescriptions: {
      0: 'No score',
      1: 'No score',
      2: 'No score',
      3: 'No score',
      4: 'No score'
    }
  },
  {
    id: '3',
    name: 'Stabilized Construction Exit Ways',
    category: 'Site',
    subcategory: 'Erosion Control',
    weight: 6,
    description: 'Evaluation of stabilized construction exit ways installation and maintenance',
    scoreDescriptions: {
      0: 'Stabilized construction exit ways were not installed.',
      1: 'Stabilized construction exit ways were inconsistently installed.',
      2: 'Stabilized construction exit ways were installed to allow for one full tire rotation, and streets were usually clean.',
      3: 'No score',
      4: 'Stabilized construction exit ways were installed to allow for multiple tire rotations, and streets were kept clean.'
    }
  },
  {
    id: '4',
    name: 'Storm Drain Inlet Protection',
    category: 'Site',
    subcategory: 'Erosion Control',
    weight: 6,
    description: 'Assessment of storm drain inlet protection and maintenance',
    scoreDescriptions: {
      0: 'Storm drain inlets were not protected or maintained to prevent silt from entering the storm sewer system or natural waterways.',
      1: 'Storm drain inlets were protected but not consistently maintained to prevent silt from entering the storm sewer system or natural waterways.',
      2: 'Storm drain inlets were consistently maintained to prevent silt from entering the storm sewer system or natural waterways.',
      3: 'No score',
      4: 'Redundant measures of storm drain protection were in place and well maintained to prevent silt from entering the storm sewer system or natural waterways, or a silt collection pond was used.'
    }
  },
  {
    id: '5',
    name: 'Stucco/Mortar Washout Stations',
    category: 'Site',
    subcategory: 'Erosion Control',
    weight: 6,
    description: 'Assessment of stucco/mortar washout station implementation',
    scoreDescriptions: {
      0: 'No score',
      1: 'No score',
      2: 'No score',
      3: 'No score',
      4: 'No score'
    }
  },
  {
    id: '6',
    name: 'SWPPP Site Documentation',
    category: 'Site',
    subcategory: 'Erosion Control',
    weight: 6,
    description: 'Evaluation of Storm Water Pollution Prevention Plan documentation',
    scoreDescriptions: {
      0: 'No SWPPP documentation was provided on site.',
      1: 'No score',
      2: 'A documented SWPPP process was inconsistently provided on site.',
      3: 'No score',
      4: 'A well-documented SWPPP process was provided on site.'
    }
  },
  {
    id: '7',
    name: 'Trash and Bulk Waste Collection Areas',
    category: 'Site',
    subcategory: 'Erosion Control',
    weight: 6,
    description: 'Assessment of trash and bulk waste collection area implementation',
    scoreDescriptions: {
      0: 'Trash and bulk waste collection areas were not implemented.',
      1: 'No score',
      2: 'Trash and bulk waste collection areas (wood or fence containment) were set aside and were well placed in the site.',
      3: 'Commercial (dump or haul off) containers for trash and bulk waste collection areas were set aside and were well placed in the site.',
      4: 'Construction waste was separated for recycle, and there were plenty of receptacles to handle the disposal needs.'
    }
  },
  {
    id: '8',
    name: 'Steep Slope Erosion Control',
    category: 'Site',
    subcategory: 'Erosion Control',
    weight: 6,
    description: 'Evaluation of erosion control for steep slope conditions',
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
    id: '9',
    name: 'Foundation Exposure',
    category: 'Site',
    subcategory: 'Building Elevation',
    weight: 6,
    description: 'Assessment of foundation exposure at rough grade',
    scoreDescriptions: {
      0: 'There was usually less than 8" of foundation exposure at rough grade observed below the sill plate around the perimeter of the houses.',
      1: 'No score',
      2: 'At least 8" of foundation exposure at rough grade was observed below the sill plate with minor inconsistencies.',
      3: 'No score',
      4: 'At least 8" of foundation exposure at rough grade was consistently observed below the sill plate around the perimeter of the houses.'
    }
  },
  {
    id: '10',
    name: 'House Placement (in relation to the street)',
    category: 'Site',
    subcategory: 'Building Elevation',
    weight: 6,
    description: 'Evaluation of house placement relative to street elevation',
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
    id: '11',
    name: 'Final Grade',
    category: 'Site',
    subcategory: 'Grading',
    weight: 6,
    description: 'Assessment of final grade slope from house',
    scoreDescriptions: {
      0: 'The final grade was flat to the house, potentially allowing water to pool next to the foundation.',
      1: 'No score',
      2: 'There was adequate slope (5%) in the final grade observed from the house to a swale or to the street.',
      3: 'No score',
      4: 'There was more than adequate slope (greater than 5%) in the final grade from the house to a swale or to the street.'
    }
  },
  {
    id: '12',
    name: 'Rough Grade',
    category: 'Site',
    subcategory: 'Grading',
    weight: 6,
    description: 'Assessment of rough grade slope from house',
    scoreDescriptions: {
      0: 'The rough grade was flat around the house, potentially allowing water to pool next to the foundation.',
      1: 'No score',
      2: 'There was adequate slope (5%) in the rough grade observed from the house to a swale or to the street.',
      3: 'No score',
      4: 'There was more than adequate slope (greater than 5%) in the rough grade from the house to a swale or to the street.'
    }
  },
  {
    id: '13',
    name: 'Swales',
    category: 'Site',
    subcategory: 'Grading',
    weight: 6,
    description: 'Evaluation of swale design and slope between houses',
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
    id: '14',
    name: 'Downspout Discharge',
    category: 'Site',
    subcategory: 'Site Drainage',
    weight: 6,
    description: 'Assessment of downspout discharge methods',
    scoreDescriptions: {
      0: 'Downspouts were discharged directly next to the foundation.',
      1: 'Downspouts discharged to a splash block with poor drainage.',
      2: 'Downspouts discharged to a splash block with grade sloped away from the house.',
      3: 'Downspouts discharged through a minimum 36" extension into a proper swale to carry water away from the foundation.',
      4: 'Downspouts were connected directly to storm drains.'
    }
  },
  {
    id: '15',
    name: 'Flatwork Drains',
    category: 'Site',
    subcategory: 'Site Drainage',
    weight: 6,
    description: 'Evaluation of drainage for landscape enclosed by flatwork',
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
    id: '16',
    name: 'Control Joints',
    category: 'Site',
    subcategory: 'Flatwork',
    weight: 6,
    description: 'Assessment of control joints in flatwork',
    scoreDescriptions: {
      0: 'No control joints were observed in the flatwork.',
      1: 'No score',
      2: 'An adequate number of control joints were installed in the flatwork, with adequate depth in most cases.',
      3: 'No score',
      4: 'Adequate control joints were installed in the flatwork, with an appropriate cut depth that was 1/4 of the slab thickness, or were properly tooled.'
    }
  },
  {
    id: '17',
    name: 'Flatwork Fall from House',
    category: 'Site',
    subcategory: 'Flatwork',
    weight: 6,
    description: 'Evaluation of flatwork slope away from house',
    scoreDescriptions: {
      0: 'Flatwork was sloped toward the house.',
      1: 'No score',
      2: 'No score',
      3: 'No score',
      4: 'Flatwork was sloped away from the house in all cases.'
    }
  },
  // Adding Foundations (6) - Slab on Grade items
  {
    id: '18',
    name: 'Capillary Break (Under footer)',
    category: 'Foundations',
    subcategory: 'Slab on Grade',
    weight: 6,
    description: 'Assessment of vapor barrier placement under footer',
    scoreDescriptions: {
      0: 'The vapor barrier did not extend under the footer, and the soil was not well drained.',
      1: 'No score',
      2: 'The vapor barrier did not extend under the footer or stem wall, but the soil was well drained.',
      3: 'The vapor barrier did not extend under the footer or stem wall, and foundation drains were installed, OR the vapor barrier was extended under the footer or stem wall.',
      4: 'The vapor barrier was extended under the footer and grade beams or stem wall and wrapped up the outside edge of the forms. OR the vapor barrier was extended under the footer or stem wall and wrapped up the outside edge of the footer or stem wall.'
    }
  },
  {
    id: '19',
    name: 'Under Slab Vapor Barrier',
    category: 'Foundations',
    subcategory: 'Slab on Grade',
    weight: 6,
    description: 'Evaluation of vapor barrier installation under slab',
    scoreDescriptions: {
      0: 'No vapor barrier was installed under the slab in a wet climate.',
      1: 'A poly vapor barrier was installed under the slab but with major deficiencies in installation quality.',
      2: 'A minimum 6-mil poly vapor barrier was installed and taped, or no vapor barrier was installed in a desert climate.',
      3: 'A minimum 10-mil poly vapor barrier was installed with minor inconsistencies in installation and taping.',
      4: 'A minimum 10-mil poly vapor barrier was installed under the slab, with all seams well sealed with tape.'
    }
  },
  // Adding Framing (6) items
  {
    id: '20',
    name: 'Hold Downs and Anchor Bolts',
    category: 'Framing',
    subcategory: 'Foundation Attachment',
    weight: 6,
    description: 'Assessment of foundation attachment hardware',
    scoreDescriptions: {
      0: 'There were no hold downs or anchor bolts connecting the framing to the foundation.',
      1: 'No score',
      2: 'No score',
      3: 'No score',
      4: 'Hold downs and anchor bolts were properly installed, based on industry standards.'
    }
  },
  {
    id: '21',
    name: 'Subfloor Gluing',
    category: 'Framing',
    subcategory: 'Floor Assembly',
    weight: 6,
    description: 'Evaluation of subfloor gluing to joists',
    scoreDescriptions: {
      0: 'Subfloor was not glued to the joists when using nails.',
      1: 'No score',
      2: 'No score',
      3: 'No score',
      4: 'Subfloor was fully glued to every joist or engineered alternative was used (such as Tetragrip™ fasteners or gaskets).'
    }
  },
  // Adding Thermal Enclosure (7) items
  {
    id: '22',
    name: 'Frame Walls Batts',
    category: 'Thermal Enclosure',
    subcategory: 'Frame Walls',
    weight: 7,
    description: 'Assessment of fiberglass batt installation in walls',
    scoreDescriptions: {
      0: 'Fiberglass batts in the walls were missing or very poorly installed.',
      1: 'Insulation batts in stud cavities were installed to meet RESNET, Grade III installation.',
      2: 'Insulation batts in stud cavities were installed to meet RESNET, Grade II installation.',
      3: 'Insulation batts in stud cavities were installed to meet RESNET, Grade I installation.',
      4: 'No score'
    }
  },
  {
    id: '23',
    name: 'Attic Access over Conditioned Space',
    category: 'Thermal Enclosure',
    subcategory: 'Attic',
    weight: 7,
    description: 'Evaluation of attic access insulation and air sealing',
    scoreDescriptions: {
      0: 'Attic access was uninsulated.',
      1: 'Attic access was uninsulated but not air sealed, or air sealed but not insulated.',
      2: 'Attic access was insulated and air sealed.',
      3: 'No score',
      4: 'Attic access was insulated to 100% of the attic value.'
    }
  },
  // Adding Air Barrier (6) items
  {
    id: '24',
    name: 'Windows Air Sealing',
    category: 'Air Barrier',
    subcategory: 'Windows/Doors',
    weight: 6,
    description: 'Assessment of air sealing around windows',
    scoreDescriptions: {
      0: 'No air sealing was installed around windows.',
      1: 'Fiberglass, or similar material was used in a chinking application.',
      2: 'Low-expansion foam was installed around windows with minor inconsistencies.',
      3: 'Low-expansion foam was installed around windows with excess foam that was left for the drywall trades to deal with.',
      4: 'Caulk and backer rod or low-expansion foam were consistently installed around windows, with good quality control.'
    }
  },
  {
    id: '25',
    name: 'Air Sealing Sill Plates',
    category: 'Air Barrier',
    subcategory: 'Sills and Top Plates',
    weight: 6,
    description: 'Evaluation of air sealing under sill plates',
    scoreDescriptions: {
      0: 'No air sealing was installed under sill plates.',
      1: 'Rope caulk or glue as a sill sealer was used under exterior walls.',
      2: 'Closed cell foam sill sealer alone was used under exterior walls.',
      3: 'Closed cell foam sill sealer was used under exterior walls in addition to poly seal foam, with good quality control.',
      4: 'Closed cell foam sill sealer was used under exterior walls in addition to caulk, with good quality control.'
    }
  },
  // Adding Drainage Plane and Flashing (14) items
  {
    id: '26',
    name: 'Structural Laminated Sheathing Panels',
    category: 'Drainage Plane and Flashing',
    subcategory: 'Frame Walls',
    weight: 14,
    description: 'Assessment of structural laminated sheathing panel condition',
    scoreDescriptions: {
      0: 'Panels were often damaged without proper repairs or replacement.',
      1: 'No score',
      2: 'Damaged structural laminated sheathing panels were inconsistently repaired or replaced.',
      3: 'No score',
      4: 'Damaged structural laminated sheathing panels were repaired or replaced according to manufacturer specifications.'
    }
  },
  {
    id: '27',
    name: 'Window Sill Pan',
    category: 'Drainage Plane and Flashing',
    subcategory: 'Windows',
    weight: 14,
    description: 'Evaluation of sill pan installation under windows',
    scoreDescriptions: {
      0: 'No sill pans were installed under the windows.',
      1: 'Sill pans were inconsistently installed under the windows.',
      2: 'A site-fabricated flashing was used to form sill pans with corner protection under all windows.',
      3: 'A site-fabricated flashing was used to form sill pans with corner protection under all windows, and the panel mfg. tape was used.',
      4: 'Pre-manufactured sill pans were installed under all windows.'
    }
  }
];

export const InspectionProvider: React.FC<InspectionProviderProps> = ({ children }) => {
  const [currentInspection, setCurrentInspection] = useState<Inspection | null>(null);
  const [savedInspections, setSavedInspections] = useState<Inspection[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('ibacosiq_inspections');
    if (saved) {
      setSavedInspections(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('ibacosiq_inspections', JSON.stringify(savedInspections));
  }, [savedInspections]);

  const startNewInspection = (neighborhood: string) => {
    const newInspection: Inspection = {
      id: Date.now().toString(),
      neighborhood,
      date: new Date().toISOString(),
      items: inspectionItems.map(item => ({ ...item, score: null })),
      status: 'draft',
      totalScore: 0,
      maxScore: inspectionItems.length * 4,
    };
    setCurrentInspection(newInspection);
  };

  const updateInspectionItem = (itemId: string, score: number) => {
    if (!currentInspection) return;
    
    const updatedItems = currentInspection.items.map(item =>
      item.id === itemId ? { ...item, score } : item
    );
    
    const totalScore = updatedItems.reduce((sum, item) => sum + (item.score || 0), 0);
    
    setCurrentInspection({
      ...currentInspection,
      items: updatedItems,
      totalScore,
    });
  };

  const saveInspection = () => {
    if (!currentInspection) return;
    
    setSavedInspections(prev => {
      const existing = prev.findIndex(i => i.id === currentInspection.id);
      if (existing >= 0) {
        return prev.map(i => i.id === currentInspection.id ? currentInspection : i);
      }
      return [...prev, currentInspection];
    });
  };

  const submitInspection = () => {
    if (!currentInspection) return;
    
    const completedInspection = { ...currentInspection, status: 'completed' as const };
    setCurrentInspection(completedInspection);
    
    setSavedInspections(prev => {
      const existing = prev.findIndex(i => i.id === completedInspection.id);
      if (existing >= 0) {
        return prev.map(i => i.id === completedInspection.id ? completedInspection : i);
      }
      return [...prev, completedInspection];
    });
  };

  const loadInspection = (id: string) => {
    const inspection = savedInspections.find(i => i.id === id);
    if (inspection) {
      setCurrentInspection(inspection);
    }
  };

  return (
    <InspectionContext.Provider value={{
      currentInspection,
      savedInspections,
      startNewInspection,
      updateInspectionItem,
      saveInspection,
      submitInspection,
      loadInspection,
    }}>
      {children}
    </InspectionContext.Provider>
  );
};
