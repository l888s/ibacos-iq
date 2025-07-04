import { InspectionItem } from '@/types/inspection';

export const siteItems: Omit<InspectionItem, 'score'>[] = [
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
    id: 'site-erosion-paint-drywall-washout',
    category: 'Site',
    subcategory: 'Erosion Control',
    item: 'Paint and Drywall Washout Stations',
    weight: 6,
    scoreDescriptions: {
      0: 'Paint and drywall was frequently washed out on the surrounding grade.',
      1: 'Paint and drywall was occasionally washed out on the surrounding grade.',
      2: 'Paint and drywall washout stations were not provided throughout the site, but, paint and drywall was not washed out on the surrounding grade.',
      3: 'No score',
      4: 'Paint and drywall washout stations were provided throughout the site, and paint and drywall were not washed out within the community.'
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
    id: 'site-erosion-stucco-mortar-washout',
    category: 'Site',
    subcategory: 'Erosion Control',
    item: 'Stucco/Mortar Washout Stations',
    weight: 6,
    scoreDescriptions: {
      0: 'Stucco/mortar washout stations either were full or were not provided, and stucco/mortar were washed out on the surrounding grade.',
      1: 'Stucco/mortar washout stations were inconsistently provided throughout the site, and stucco/mortar were washed out on the surrounding grade.',
      2: 'Stucco/mortar washout stations were provided throughout the site, but occasionally, stucco/mortar was washed out on the surrounding grade.',
      3: 'No score',
      4: 'Stucco/mortar washout stations were clean throughout the site, and stucco/mortar were not washed out within the community.'
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
  
  // Site (6) - Housekeeping
  {
    id: 'site-housekeeping-exterior-job-site-conditions',
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
    id: 'site-housekeeping-interior-job-site-conditions',
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
      2: 'An adequate number of control joints were installed in the flatwor, with adequate depth in most cases.',
      3: 'No score',
      4: 'Adequate control joints were installed in the flatwork, with an appropriate cut depth that was 1/4 of the slab thickness, or were properly tooled.'
    }
  },
  {
    id: 'site-flatwork-flatwork-fall-from-house',
    category: 'Site',
    subcategory: 'Flatwork',
    item: 'Flatwork Fall from House',
    weight: 6,
    scoreDescriptions: {
      0: 'Flatwork was sloped toward the house.',
      1: 'No score',
      2: 'No score.',
      3: 'No score',
      4: 'Flatwork was sloped away from the house in all cases.'
    }
  },
 // Site (6) - Landscaping
  {
    id: 'site-landscaping-finish-landscaping',
    category: 'Site',
    subcategory: 'Landscaping',
    item: 'Finish Landscaping',
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
      2: 'No score.',
      3: 'No score',
      4: 'Irrigation sprinklers were adjusted to never spray against the house or drip type irrigation was installed.'
    }
  },  
// Site (6) - Material Storage
  {
    id: 'site-material-storage-lumber-packages',
    category: 'Site',
    subcategory: 'Material Storage',
    item: 'Lumber Packages',
    weight: 6,
    scoreDescriptions: {
      0: 'Lumber was stored on uneven ground and was uncovered.',
      1: 'Lumber was stored on even ground and was uncovered in wet climate',
      2: 'Lumber was stored on even ground and was uncovered in a dry climate. Or was covered in a wet climate.',
      3: 'Lumber was stored on sleepers and was uncovered in a dry climate, or was covered in most cases in a wet climate',
      4: 'Lumber was stored on sleepers and was covered in all cases.'
    }
  },
  {
    id: 'site-material-storage-wallboard',
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
    id: 'site-building-assemblies-concrete-floors',
    category: 'Site',
    subcategory: 'Building Assemblies',
    item: 'Concrete Floors',
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
    id: 'site-building-assemblies-walls',
    category: 'Site',
    subcategory: 'Building Assemblies',
    item: 'Walls',
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
    id: 'site-building-assemblies-wood-floors',
    category: 'Site',
    subcategory: 'Building Assemblies',
    item: 'Wood Floors',
    weight: 6,
    scoreDescriptions: {
      0: 'Wood floors had visible long-term water exposure.',
      1: 'No score',
      2: 'Wood floors were inconsistently found dry after dry-in was completed.',
      3: 'No score',
      4: 'Wood floors were always found dry after dry-in was completed.'
    }
  }, 
];
