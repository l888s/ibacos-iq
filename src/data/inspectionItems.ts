
import { InspectionItem } from '@/types/inspection';

// Complete inspection criteria with all categories and items from the JSON data
export const defaultInspectionItems: Omit<InspectionItem, 'score'>[] = [
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

  // Foundation (7)
  {
    id: 'foundation-anchor-bolts',
    category: 'Foundation',
    subcategory: 'Foundation',
    item: 'Anchor Bolts',
    weight: 7,
    scoreDescriptions: {
      0: 'Anchor bolts were not placed consistently per code requirements.',
      1: 'Anchor bolts were placed mostly per code requirements with minor deviations.',
      2: 'Anchor bolts were placed per code requirements.',
      3: 'No score',
      4: 'Anchor bolts were placed better than code requirements.'
    }
  },
  {
    id: 'foundation-basement-walls',
    category: 'Foundation',
    subcategory: 'Foundation',
    item: 'Basement Walls',
    weight: 7,
    scoreDescriptions: {
      0: 'There were observed structural cracks in basement walls.',
      1: 'There were observed minor cracks in basement walls.',
      2: 'Basement walls appeared structurally sound.',
      3: 'No score',
      4: 'Basement walls appeared to be constructed better than minimum standards.'
    }
  },
  {
    id: 'foundation-concrete-placement',
    category: 'Foundation',
    subcategory: 'Foundation',
    item: 'Concrete Placement',
    weight: 7,
    scoreDescriptions: {
      0: 'Cold joints and poor consolidation were frequently observed.',
      1: 'Cold joints and poor consolidation were occasionally observed.',
      2: 'Cold joints and poor consolidation were seldom observed.',
      3: 'No score',
      4: 'Cold joints and poor consolidation were not observed.'
    }
  },
  {
    id: 'foundation-foundation-walls',
    category: 'Foundation',
    subcategory: 'Foundation',
    item: 'Foundation Walls',
    weight: 7,
    scoreDescriptions: {
      0: 'There were observed structural cracks in foundation walls.',
      1: 'There were observed minor cracks in foundation walls.',
      2: 'Foundation walls appeared structurally sound.',
      3: 'No score',
      4: 'Foundation walls appeared to be constructed better than minimum standards.'
    }
  },
  {
    id: 'foundation-rebar-placement',
    category: 'Foundation',
    subcategory: 'Foundation',
    item: 'Rebar Placement',
    weight: 7,
    scoreDescriptions: {
      0: 'Rebar was not placed consistently per the structural plans.',
      1: 'Rebar was placed mostly per the structural plans with minor deviations.',
      2: 'Rebar was placed per the structural plans.',
      3: 'No score',
      4: 'Rebar was placed better than the structural plans.'
    }
  },
  {
    id: 'foundation-slab-placement',
    category: 'Foundation',
    subcategory: 'Foundation',
    item: 'Slab Placement',
    weight: 7,
    scoreDescriptions: {
      0: 'Slab thickness was consistently under minimum requirements.',
      1: 'Slab thickness was occasionally under minimum requirements.',
      2: 'Slab thickness consistently met minimum requirements.',
      3: 'No score',
      4: 'Slab thickness was consistently greater than minimum requirements.'
    }
  },

  // Framing (8)
  {
    id: 'framing-floor-framing',
    category: 'Framing',
    subcategory: 'Framing',
    item: 'Floor Framing',
    weight: 8,
    scoreDescriptions: {
      0: 'Floor framing was not constructed per the structural plans.',
      1: 'Floor framing was constructed mostly per the structural plans with minor deviations.',
      2: 'Floor framing was constructed per the structural plans.',
      3: 'No score',
      4: 'Floor framing was constructed better than the structural plans.'
    }
  },
  {
    id: 'framing-roof-framing',
    category: 'Framing',
    subcategory: 'Framing',
    item: 'Roof Framing',
    weight: 8,
    scoreDescriptions: {
      0: 'Roof framing was not constructed per the structural plans.',
      1: 'Roof framing was constructed mostly per the structural plans with minor deviations.',
      2: 'Roof framing was constructed per the structural plans.',
      3: 'No score',
      4: 'Roof framing was constructed better than the structural plans.'
    }
  },
  {
    id: 'framing-sheathing',
    category: 'Framing',
    subcategory: 'Framing',
    item: 'Sheathing',
    weight: 8,
    scoreDescriptions: {
      0: 'Sheathing was not installed per the structural plans.',
      1: 'Sheathing was installed mostly per the structural plans with minor deviations.',
      2: 'Sheathing was installed per the structural plans.',
      3: 'No score',
      4: 'Sheathing was installed better than the structural plans.'
    }
  },
  {
    id: 'framing-wall-framing',
    category: 'Framing',
    subcategory: 'Framing',
    item: 'Wall Framing',
    weight: 8,
    scoreDescriptions: {
      0: 'Wall framing was not constructed per the structural plans.',
      1: 'Wall framing was constructed mostly per the structural plans with minor deviations.',
      2: 'Wall framing was constructed per the structural plans.',
      3: 'No score',
      4: 'Wall framing was constructed better than the structural plans.'
    }
  },

  // Roofing (6) - Flashing
  {
    id: 'roofing-flashing-chimney',
    category: 'Roofing',
    subcategory: 'Flashing',
    item: 'Chimney Flashing',
    weight: 6,
    scoreDescriptions: {
      0: 'Chimney flashing was poorly installed.',
      1: 'Chimney flashing was installed with minor deviations from best practices.',
      2: 'Chimney flashing was installed per best practices.',
      3: 'No score',
      4: 'Chimney flashing was installed better than best practices.'
    }
  },
  {
    id: 'roofing-flashing-pipe-boot',
    category: 'Roofing',
    subcategory: 'Flashing',
    item: 'Pipe Boot Flashing',
    weight: 6,
    scoreDescriptions: {
      0: 'Pipe boot flashing was poorly installed.',
      1: 'Pipe boot flashing was installed with minor deviations from best practices.',
      2: 'Pipe boot flashing was installed per best practices.',
      3: 'No score',
      4: 'Pipe boot flashing was installed better than best practices.'
    }
  },
  {
    id: 'roofing-flashing-roof-wall',
    category: 'Roofing',
    subcategory: 'Flashing',
    item: 'Roof to Wall Flashing',
    weight: 6,
    scoreDescriptions: {
      0: 'Roof to wall flashing was poorly installed.',
      1: 'Roof to wall flashing was installed with minor deviations from best practices.',
      2: 'Roof to wall flashing was installed per best practices.',
      3: 'No score',
      4: 'Roof to wall flashing was installed better than best practices.'
    }
  },
  {
    id: 'roofing-flashing-skylight',
    category: 'Roofing',
    subcategory: 'Flashing',
    item: 'Skylight Flashing',
    weight: 6,
    scoreDescriptions: {
      0: 'Skylight flashing was poorly installed.',
      1: 'Skylight flashing was installed with minor deviations from best practices.',
      2: 'Skylight flashing was installed per best practices.',
      3: 'No score',
      4: 'Skylight flashing was installed better than best practices.'
    }
  },
  {
    id: 'roofing-flashing-valley',
    category: 'Roofing',
    subcategory: 'Flashing',
    item: 'Valley Flashing',
    weight: 6,
    scoreDescriptions: {
      0: 'Valley flashing was poorly installed.',
      1: 'Valley flashing was installed with minor deviations from best practices.',
      2: 'Valley flashing was installed per best practices.',
      3: 'No score',
      4: 'Valley flashing was installed better than best practices.'
    }
  },
  // Roofing (6) - Installation
  {
    id: 'roofing-installation-edge-metal',
    category: 'Roofing',
    subcategory: 'Installation',
    item: 'Edge Metal',
    weight: 6,
    scoreDescriptions: {
      0: 'Edge metal was poorly installed.',
      1: 'Edge metal was installed with minor deviations from best practices.',
      2: 'Edge metal was installed per best practices.',
      3: 'No score',
      4: 'Edge metal was installed better than best practices.'
    }
  },
  {
    id: 'roofing-installation-gutters',
    category: 'Roofing',
    subcategory: 'Installation',
    item: 'Gutters',
    weight: 6,
    scoreDescriptions: {
      0: 'Gutters were poorly installed.',
      1: 'Gutters were installed with minor deviations from best practices.',
      2: 'Gutters were installed per best practices.',
      3: 'No score',
      4: 'Gutters were installed better than best practices.'
    }
  },
  {
    id: 'roofing-installation-ice-water-shield',
    category: 'Roofing',
    subcategory: 'Installation',
    item: 'Ice & Water Shield',
    weight: 6,
    scoreDescriptions: {
      0: 'Ice & water shield was poorly installed.',
      1: 'Ice & water shield was installed with minor deviations from best practices.',
      2: 'Ice & water shield was installed per best practices.',
      3: 'No score',
      4: 'Ice & water shield was installed better than best practices.'
    }
  },
  {
    id: 'roofing-installation-ridge-vent',
    category: 'Roofing',
    subcategory: 'Installation',
    item: 'Ridge Vent',
    weight: 6,
    scoreDescriptions: {
      0: 'Ridge vent was poorly installed.',
      1: 'Ridge vent was installed with minor deviations from best practices.',
      2: 'Ridge vent was installed per best practices.',
      3: 'No score',
      4: 'Ridge vent was installed better than best practices.'
    }
  },
  {
    id: 'roofing-installation-shingles',
    category: 'Roofing',
    subcategory: 'Installation',
    item: 'Shingles',
    weight: 6,
    scoreDescriptions: {
      0: 'Shingles were poorly installed.',
      1: 'Shingles were installed with minor deviations from manufacturer specifications.',
      2: 'Shingles were installed per manufacturer specifications.',
      3: 'No score',
      4: 'Shingles were installed better than manufacturer specifications.'
    }
  },
  {
    id: 'roofing-installation-underlayment',
    category: 'Roofing',
    subcategory: 'Installation',
    item: 'Underlayment',
    weight: 6,
    scoreDescriptions: {
      0: 'Underlayment was poorly installed.',
      1: 'Underlayment was installed with minor deviations from best practices.',
      2: 'Underlayment was installed per best practices.',
      3: 'No score',
      4: 'Underlayment was installed better than best practices.'
    }
  },

  // Exterior (7) - Air Sealing
  {
    id: 'exterior-air-sealing-penetrations',
    category: 'Exterior',
    subcategory: 'Air Sealing',
    item: 'Penetrations',
    weight: 7,
    scoreDescriptions: {
      0: 'Penetrations were not properly sealed.',
      1: 'Penetrations were sealed with minor gaps.',
      2: 'Penetrations were properly sealed.',
      3: 'No score',
      4: 'Penetrations were sealed better than minimum requirements.'
    }
  },
  {
    id: 'exterior-air-sealing-rim-joist',
    category: 'Exterior',
    subcategory: 'Air Sealing',
    item: 'Rim Joist',
    weight: 7,
    scoreDescriptions: {
      0: 'Rim joist was not properly sealed.',
      1: 'Rim joist was sealed with minor gaps.',
      2: 'Rim joist was properly sealed.',
      3: 'No score',
      4: 'Rim joist was sealed better than minimum requirements.'
    }
  },
  {
    id: 'exterior-air-sealing-top-plates',
    category: 'Exterior',
    subcategory: 'Air Sealing',
    item: 'Top Plates',
    weight: 7,
    scoreDescriptions: {
      0: 'Top plates were not properly sealed.',
      1: 'Top plates were sealed with minor gaps.',
      2: 'Top plates were properly sealed.',
      3: 'No score',
      4: 'Top plates were sealed better than minimum requirements.'
    }
  },
  // Exterior (7) - Cladding
  {
    id: 'exterior-cladding-brick',
    category: 'Exterior',
    subcategory: 'Cladding',
    item: 'Brick',
    weight: 7,
    scoreDescriptions: {
      0: 'Brick was poorly installed.',
      1: 'Brick was installed with minor deviations from best practices.',
      2: 'Brick was installed per best practices.',
      3: 'No score',
      4: 'Brick was installed better than best practices.'
    }
  },
  {
    id: 'exterior-cladding-fiber-cement',
    category: 'Exterior',
    subcategory: 'Cladding',
    item: 'Fiber Cement',
    weight: 7,
    scoreDescriptions: {
      0: 'Fiber cement was poorly installed.',
      1: 'Fiber cement was installed with minor deviations from manufacturer specifications.',
      2: 'Fiber cement was installed per manufacturer specifications.',
      3: 'No score',
      4: 'Fiber cement was installed better than manufacturer specifications.'
    }
  },
  {
    id: 'exterior-cladding-stone',
    category: 'Exterior',
    subcategory: 'Cladding',
    item: 'Stone',
    weight: 7,
    scoreDescriptions: {
      0: 'Stone was poorly installed.',
      1: 'Stone was installed with minor deviations from best practices.',
      2: 'Stone was installed per best practices.',
      3: 'No score',
      4: 'Stone was installed better than best practices.'
    }
  },
  {
    id: 'exterior-cladding-stucco',
    category: 'Exterior',
    subcategory: 'Cladding',
    item: 'Stucco',
    weight: 7,
    scoreDescriptions: {
      0: 'Stucco was poorly installed.',
      1: 'Stucco was installed with minor deviations from best practices.',
      2: 'Stucco was installed per best practices.',
      3: 'No score',
      4: 'Stucco was installed better than best practices.'
    }
  },
  {
    id: 'exterior-cladding-vinyl',
    category: 'Exterior',
    subcategory: 'Cladding',
    item: 'Vinyl',
    weight: 7,
    scoreDescriptions: {
      0: 'Vinyl was poorly installed.',
      1: 'Vinyl was installed with minor deviations from manufacturer specifications.',
      2: 'Vinyl was installed per manufacturer specifications.',
      3: 'No score',
      4: 'Vinyl was installed better than manufacturer specifications.'
    }
  },
  {
    id: 'exterior-cladding-wood',
    category: 'Exterior',
    subcategory: 'Cladding',
    item: 'Wood',
    weight: 7,
    scoreDescriptions: {
      0: 'Wood was poorly installed.',
      1: 'Wood was installed with minor deviations from best practices.',
      2: 'Wood was installed per best practices.',
      3: 'No score',
      4: 'Wood was installed better than best practices.'
    }
  },
  // Exterior (7) - Flashing
  {
    id: 'exterior-flashing-deck-ledger',
    category: 'Exterior',
    subcategory: 'Flashing',
    item: 'Deck Ledger Flashing',
    weight: 7,
    scoreDescriptions: {
      0: 'Deck ledger flashing was poorly installed.',
      1: 'Deck ledger flashing was installed with minor deviations from best practices.',
      2: 'Deck ledger flashing was installed per best practices.',
      3: 'No score',
      4: 'Deck ledger flashing was installed better than best practices.'
    }
  },
  {
    id: 'exterior-flashing-door',
    category: 'Exterior',
    subcategory: 'Flashing',
    item: 'Door Flashing',
    weight: 7,
    scoreDescriptions: {
      0: 'Door flashing was poorly installed.',
      1: 'Door flashing was installed with minor deviations from best practices.',
      2: 'Door flashing was installed per best practices.',
      3: 'No score',
      4: 'Door flashing was installed better than best practices.'
    }
  },
  {
    id: 'exterior-flashing-window',
    category: 'Exterior',
    subcategory: 'Flashing',
    item: 'Window Flashing',
    weight: 7,
    scoreDescriptions: {
      0: 'Window flashing was poorly installed.',
      1: 'Window flashing was installed with minor deviations from best practices.',
      2: 'Window flashing was installed per best practices.',
      3: 'No score',
      4: 'Window flashing was installed better than best practices.'
    }
  },
  // Exterior (7) - Insulation
  {
    id: 'exterior-insulation-basement-walls',
    category: 'Exterior',
    subcategory: 'Insulation',
    item: 'Basement Walls',
    weight: 7,
    scoreDescriptions: {
      0: 'Basement wall insulation was poorly installed.',
      1: 'Basement wall insulation was installed with minor gaps.',
      2: 'Basement wall insulation was properly installed.',
      3: 'No score',
      4: 'Basement wall insulation was installed better than minimum requirements.'
    }
  },
  {
    id: 'exterior-insulation-band-joist',
    category: 'Exterior',
    subcategory: 'Insulation',
    item: 'Band Joist',
    weight: 7,
    scoreDescriptions: {
      0: 'Band joist insulation was poorly installed.',
      1: 'Band joist insulation was installed with minor gaps.',
      2: 'Band joist insulation was properly installed.',
      3: 'No score',
      4: 'Band joist insulation was installed better than minimum requirements.'
    }
  },
  {
    id: 'exterior-insulation-exterior-walls',
    category: 'Exterior',
    subcategory: 'Insulation',
    item: 'Exterior Walls',
    weight: 7,
    scoreDescriptions: {
      0: 'Exterior wall insulation was poorly installed.',
      1: 'Exterior wall insulation was installed with minor gaps.',
      2: 'Exterior wall insulation was properly installed.',
      3: 'No score',
      4: 'Exterior wall insulation was installed better than minimum requirements.'
    }
  },
  // Exterior (7) - Weather Barrier
  {
    id: 'exterior-weather-barrier-house-wrap',
    category: 'Exterior',
    subcategory: 'Weather Barrier',
    item: 'House Wrap',
    weight: 7,
    scoreDescriptions: {
      0: 'House wrap was poorly installed.',
      1: 'House wrap was installed with minor deviations from manufacturer specifications.',
      2: 'House wrap was installed per manufacturer specifications.',
      3: 'No score',
      4: 'House wrap was installed better than manufacturer specifications.'
    }
  },

  // HVAC (8)
  {
    id: 'hvac-duct-installation',
    category: 'HVAC',
    subcategory: 'HVAC',
    item: 'Duct Installation',
    weight: 8,
    scoreDescriptions: {
      0: 'Duct installation was poorly executed.',
      1: 'Duct installation was executed with minor deviations from best practices.',
      2: 'Duct installation was executed per best practices.',
      3: 'No score',
      4: 'Duct installation was executed better than best practices.'
    }
  },
  {
    id: 'hvac-duct-sealing',
    category: 'HVAC',
    subcategory: 'HVAC',
    item: 'Duct Sealing',
    weight: 8,
    scoreDescriptions: {
      0: 'Duct sealing was poorly executed.',
      1: 'Duct sealing was executed with minor gaps.',
      2: 'Duct sealing was properly executed.',
      3: 'No score',
      4: 'Duct sealing was executed better than minimum requirements.'
    }
  },
  {
    id: 'hvac-equipment-installation',
    category: 'HVAC',
    subcategory: 'HVAC',
    item: 'Equipment Installation',
    weight: 8,
    scoreDescriptions: {
      0: 'HVAC equipment installation was poorly executed.',
      1: 'HVAC equipment installation was executed with minor deviations from manufacturer specifications.',
      2: 'HVAC equipment installation was executed per manufacturer specifications.',
      3: 'No score',
      4: 'HVAC equipment installation was executed better than manufacturer specifications.'
    }
  },

  // Plumbing (7)
  {
    id: 'plumbing-fixture-installation',
    category: 'Plumbing',
    subcategory: 'Plumbing',
    item: 'Fixture Installation',
    weight: 7,
    scoreDescriptions: {
      0: 'Plumbing fixture installation was poorly executed.',
      1: 'Plumbing fixture installation was executed with minor deviations from code requirements.',
      2: 'Plumbing fixture installation was executed per code requirements.',
      3: 'No score',
      4: 'Plumbing fixture installation was executed better than code requirements.'
    }
  },
  {
    id: 'plumbing-pipe-installation',
    category: 'Plumbing',
    subcategory: 'Plumbing',
    item: 'Pipe Installation',
    weight: 7,
    scoreDescriptions: {
      0: 'Plumbing pipe installation was poorly executed.',
      1: 'Plumbing pipe installation was executed with minor deviations from code requirements.',
      2: 'Plumbing pipe installation was executed per code requirements.',
      3: 'No score',
      4: 'Plumbing pipe installation was executed better than code requirements.'
    }
  },

  // Electrical (8)
  {
    id: 'electrical-panel-installation',
    category: 'Electrical',
    subcategory: 'Electrical',
    item: 'Panel Installation',
    weight: 8,
    scoreDescriptions: {
      0: 'Electrical panel installation was poorly executed.',
      1: 'Electrical panel installation was executed with minor deviations from code requirements.',
      2: 'Electrical panel installation was executed per code requirements.',
      3: 'No score',
      4: 'Electrical panel installation was executed better than code requirements.'
    }
  },
  {
    id: 'electrical-rough-wiring',
    category: 'Electrical',
    subcategory: 'Electrical',
    item: 'Rough Wiring',
    weight: 8,
    scoreDescriptions: {
      0: 'Electrical rough wiring was poorly executed.',
      1: 'Electrical rough wiring was executed with minor deviations from code requirements.',
      2: 'Electrical rough wiring was executed per code requirements.',
      3: 'No score',
      4: 'Electrical rough wiring was executed better than code requirements.'
    }
  },

  // Interior (6) - Drywall
  {
    id: 'interior-drywall-finishing',
    category: 'Interior',
    subcategory: 'Drywall',
    item: 'Drywall Finishing',
    weight: 6,
    scoreDescriptions: {
      0: 'Drywall finishing was poorly executed.',
      1: 'Drywall finishing was executed with minor deviations from industry standards.',
      2: 'Drywall finishing was executed per industry standards.',
      3: 'No score',
      4: 'Drywall finishing was executed better than industry standards.'
    }
  },
  {
    id: 'interior-drywall-installation',
    category: 'Interior',
    subcategory: 'Drywall',
    item: 'Drywall Installation',
    weight: 6,
    scoreDescriptions: {
      0: 'Drywall installation was poorly executed.',
      1: 'Drywall installation was executed with minor deviations from industry standards.',
      2: 'Drywall installation was executed per industry standards.',
      3: 'No score',
      4: 'Drywall installation was executed better than industry standards.'
    }
  },
  // Interior (6) - Flooring
  {
    id: 'interior-flooring-carpet',
    category: 'Interior',
    subcategory: 'Flooring',
    item: 'Carpet',
    weight: 6,
    scoreDescriptions: {
      0: 'Carpet installation was poorly executed.',
      1: 'Carpet installation was executed with minor deviations from manufacturer specifications.',
      2: 'Carpet installation was executed per manufacturer specifications.',
      3: 'No score',
      4: 'Carpet installation was executed better than manufacturer specifications.'
    }
  },
  {
    id: 'interior-flooring-hardwood',
    category: 'Interior',
    subcategory: 'Flooring',
    item: 'Hardwood',
    weight: 6,
    scoreDescriptions: {
      0: 'Hardwood installation was poorly executed.',
      1: 'Hardwood installation was executed with minor deviations from manufacturer specifications.',
      2: 'Hardwood installation was executed per manufacturer specifications.',
      3: 'No score',
      4: 'Hardwood installation was executed better than manufacturer specifications.'
    }
  },
  {
    id: 'interior-flooring-laminate',
    category: 'Interior',
    subcategory: 'Flooring',
    item: 'Laminate',
    weight: 6,
    scoreDescriptions: {
      0: 'Laminate installation was poorly executed.',
      1: 'Laminate installation was executed with minor deviations from manufacturer specifications.',
      2: 'Laminate installation was executed per manufacturer specifications.',
      3: 'No score',
      4: 'Laminate installation was executed better than manufacturer specifications.'
    }
  },
  {
    id: 'interior-flooring-tile',
    category: 'Interior',
    subcategory: 'Flooring',
    item: 'Tile',
    weight: 6,
    scoreDescriptions: {
      0: 'Tile installation was poorly executed.',
      1: 'Tile installation was executed with minor deviations from industry standards.',
      2: 'Tile installation was executed per industry standards.',
      3: 'No score',
      4: 'Tile installation was executed better than industry standards.'
    }
  },
  {
    id: 'interior-flooring-vinyl',
    category: 'Interior',
    subcategory: 'Flooring',
    item: 'Vinyl',
    weight: 6,
    scoreDescriptions: {
      0: 'Vinyl installation was poorly executed.',
      1: 'Vinyl installation was executed with minor deviations from manufacturer specifications.',
      2: 'Vinyl installation was executed per manufacturer specifications.',
      3: 'No score',
      4: 'Vinyl installation was executed better than manufacturer specifications.'
    }
  },
  // Interior (6) - Insulation
  {
    id: 'interior-insulation-attic',
    category: 'Interior',
    subcategory: 'Insulation',
    item: 'Attic',
    weight: 6,
    scoreDescriptions: {
      0: 'Attic insulation was poorly installed.',
      1: 'Attic insulation was installed with minor gaps.',
      2: 'Attic insulation was properly installed.',
      3: 'No score',
      4: 'Attic insulation was installed better than minimum requirements.'
    }
  },
  {
    id: 'interior-insulation-interior-walls',
    category: 'Interior',
    subcategory: 'Insulation',
    item: 'Interior Walls',
    weight: 6,
    scoreDescriptions: {
      0: 'Interior wall insulation was poorly installed.',
      1: 'Interior wall insulation was installed with minor gaps.',
      2: 'Interior wall insulation was properly installed.',
      3: 'No score',
      4: 'Interior wall insulation was installed better than minimum requirements.'
    }
  },
  // Interior (6) - Paint
  {
    id: 'interior-paint-primer',
    category: 'Interior',
    subcategory: 'Paint',
    item: 'Primer',
    weight: 6,
    scoreDescriptions: {
      0: 'Primer application was poorly executed.',
      1: 'Primer application was executed with minor deviations from manufacturer specifications.',
      2: 'Primer application was executed per manufacturer specifications.',
      3: 'No score',
      4: 'Primer application was executed better than manufacturer specifications.'
    }
  },
  {
    id: 'interior-paint-top-coat',
    category: 'Interior',
    subcategory: 'Paint',
    item: 'Top Coat',
    weight: 6,
    scoreDescriptions: {
      0: 'Top coat application was poorly executed.',
      1: 'Top coat application was executed with minor deviations from manufacturer specifications.',
      2: 'Top coat application was executed per manufacturer specifications.',
      3: 'No score',
      4: 'Top coat application was executed better than manufacturer specifications.'
    }
  },
  // Interior (6) - Trim
  {
    id: 'interior-trim-base',
    category: 'Interior',
    subcategory: 'Trim',
    item: 'Base',
    weight: 6,
    scoreDescriptions: {
      0: 'Base trim installation was poorly executed.',
      1: 'Base trim installation was executed with minor deviations from industry standards.',
      2: 'Base trim installation was executed per industry standards.',
      3: 'No score',
      4: 'Base trim installation was executed better than industry standards.'
    }
  },
  {
    id: 'interior-trim-casing',
    category: 'Interior',
    subcategory: 'Trim',
    item: 'Casing',
    weight: 6,
    scoreDescriptions: {
      0: 'Casing installation was poorly executed.',
      1: 'Casing installation was executed with minor deviations from industry standards.',
      2: 'Casing installation was executed per industry standards.',
      3: 'No score',
      4: 'Casing installation was executed better than industry standards.'
    }
  },
  {
    id: 'interior-trim-crown',
    category: 'Interior',
    subcategory: 'Trim',
    item: 'Crown',
    weight: 6,
    scoreDescriptions: {
      0: 'Crown trim installation was poorly executed.',
      1: 'Crown trim installation was executed with minor deviations from industry standards.',
      2: 'Crown trim installation was executed per industry standards.',
      3: 'No score',
      4: 'Crown trim installation was executed better than industry standards.'
    }
  }
];
