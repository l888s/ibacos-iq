
import { InspectionItem } from '@/types/inspection';

export const roofingItems: Omit<InspectionItem, 'score'>[] = [
  // Roof Cladding and Drainage (8) - Roof Cladding
  {
    id: 'roof-cladding-roof-cladding-shingle-install',
    category: 'Roof Cladding and Drainage',
    subcategory: 'Roof Cladding',
    item: 'Shingle Installation Quality',
    weight: 8,
    scoreDescriptions: {
      0: 'Shingles were not properly installed to the manufacturer's recommendations.',
      1: 'No score',
      2: 'Shingles were installed in accordance with the manufacturer's recommendations, with some quality control issues.',
      3: 'No score',
      4: 'Shingles were installed in accordance with the manufacturer's recommendations.'
    }
  },
  {
    id: 'roof-cladding-roof-cladding-shingle-material',
    category: 'Roof Cladding and Drainage',
    subcategory: 'Roof Cladding',
    item: 'Shingle Material Quality',
    weight: 8,
    scoreDescriptions: {
      0: 'No score',
      1: 'No score',
      2: 'Conventional 3-tab (20- to 30-year) shingles were installed on all homes.',
      3: 'At least 40% of the homes had architectural shingles. The rest of the homes had conventional 3-tab (20- to 30-year) shingles.',
      4: 'Architectural (30+ year) shingles were installed on all homes.'
    }
  },
  // Roof Cladding and Drainage (8) - Roof Underlayment
  {
    id: 'roof-cladding-roof-underlayment-drip-eaves',
    category: 'Roof Cladding and Drainage',
    subcategory: 'Roof Underlayment',
    item: 'Drip Edges at Eaves',
    weight: 8,
    scoreDescriptions: {
      0: 'No drip edges were installed at the eaves.',
      1: 'Drip edges were installed over the roofing underlayment at the eaves.',
      2: 'No score',
      3: 'No score',
      4: 'Drip edges were installed under the roofing underlayment at the eaves.'
    }
  },
  {
    id: 'roof-cladding-roof-underlayment-drip-rakes',
    category: 'Roof Cladding and Drainage',
    subcategory: 'Roof Underlayment',
    item: 'Drip Edges at Rakes',
    weight: 8,
    scoreDescriptions: {
      0: 'No drip edges were installed at the rakes.',
      1: 'Drip edges were installed under the roofing underlayment at the rakes.',
      2: 'No score',
      3: 'No score',
      4: 'Drip edges were installed over the roofing underlayment at the rakes.'
    }
  },
  // Roof Cladding and Drainage (8) - Penetrations
  {
    id: 'roof-cladding-penetrations-b-vent',
    category: 'Roof Cladding and Drainage',
    subcategory: 'Penetrations',
    item: 'B-Vent Integration',
    weight: 8,
    scoreDescriptions: {
      0: 'The B-vent flashings were incorrectly lapped.',
      1: 'No score',
      2: 'The B-vent flashings were properly integrated with the shingles or tiles.',
      3: 'No score',
      4: 'The B-vent flashings were properly integrated with both the underlayment and shingles or tiles.'
    }
  },
  {
    id: 'roof-cladding-penetrations-b-vent-int',
    category: 'Roof Cladding and Drainage',
    subcategory: 'Penetrations',
    item: 'Bath Vent Integration',
    weight: 8,
    scoreDescriptions: {
      0: 'The bath vent flashings were lapped incorrectly.',
      1: 'No score',
      2: 'The bath vent flashings were properly integrated with the shingles or tiles.',
      3: 'No score',
      4: 'The bath vent flashings were properly integrated with both the underlayment and shingles or tiles.'
    }
  },
  {
    id: 'roof-cladding-penetrations-off-ridge-vent',
    category: 'Roof Cladding and Drainage',
    subcategory: 'Penetrations',
    item: 'Off Ridge Vent Integration',
    weight: 8,
    scoreDescriptions: {
      0: 'Flashings were incorrectly lapped at off ridge vents.',
      1: 'No score',
      2: 'Off-ridge vent flashings were properly integrated with the shingles or tiles.',
      3: 'No score',
      4: 'Off-ridge vent flashings were properly integrated with both the underlayment and shingles or tiles.'
    }
  },
  {
    id: 'roof-cladding-penetrations-pens-combined',
    category: 'Roof Cladding and Drainage',
    subcategory: 'Penetrations',
    item: 'Penetrations Combined',
    weight: 8,
    scoreDescriptions: {
      0: 'No score',
      1: 'No score',
      2: 'Adjacent penetrations (such as multiple bath fan vents) were not combined to create fewer penetrations.',
      3: 'No score',
      4: 'Adjacent penetrations (such as multiple bath fan vents) were combined where possible to create fewer penetrations.'
    }
  },
  {
    id: 'roof-cladding-penetrations-pens-combined',
    category: 'Roof Cladding and Drainage',
    subcategory: 'Penetrations',
    item: 'Penetrations Combined',
    weight: 8,
    scoreDescriptions: {
      0: 'No score',
      1: 'No score',
      2: 'Adjacent penetrations (such as multiple bath fan vents) were not combined to create fewer penetrations.',
      3: 'No score',
      4: 'Adjacent penetrations (such as multiple bath fan vents) were combined where possible to create fewer penetrations.'
    }
  },
  {
    id: 'roof-cladding-penetrations-ridge-vent',
    category: 'Roof Cladding and Drainage',
    subcategory: 'Penetrations',
    item: 'Ridge Vent Integration',
    weight: 8,
    scoreDescriptions: {
      0: 'Ridge vents were not properly installed.',
      1: 'No score',
      2: 'No score',
      3: 'No score',
      4: 'Ridge vents were properly installed.'
    }
  },
  // Roof Cladding and Drainage (8) - Roof to Wall Flashing
  {
    id: 'roof-cladding-roof-to-wall-flashing-apron',
    category: 'Roof Cladding and Drainage',
    subcategory: 'Roof to Wall Flashing',
    item: 'Apron Flashing',
    weight: 8,
    scoreDescriptions: {
      0: 'Apron flashings were not installed.',
      1: 'Apron flashings were installed but had inconsistent size and integration.',
      2: 'Apron flashings were installed, had a minimum 4" leg length, and were correctly integrated with the roofing shingles.',
      3: 'No score',
      4: 'Apron flashings were installed, had a minimum 4" leg length and were sealed to the shingles or the flashing had a hem.'
    }
  },
  {
    id: 'roof-cladding-roof-to-wall-kickout-flash',
    category: 'Roof Cladding and Drainage',
    subcategory: 'Roof to Wall Flashing',
    item: 'Kickout Flashing',
    weight: 8,
    scoreDescriptions: {
      0: 'Kickout flashings were not installed.',
      1: 'Kickout flashings were installed but were not integrated with the step flashings, or they were of insufficient sizing.',
      2: 'Kickout flashings were installed and were integrated with the step flashings, and they were at least 4" x 4". However, they were installed with an inconsistent angle.',
      3: 'No score',
      4: 'Kickout flashings were installed and were integrated with the step flashings, and they were at least 4" x 4". They were consistently bent at about a 30° angle.'
    }
  },
  {
    id: 'roof-cladding-roof-to-wall-structural-laminated',
    category: 'Roof Cladding and Drainage',
    subcategory: 'Roof to Wall Flashing',
    item: 'Roof to Wall detailing for Structural Laminated Sheathing',
    weight: 8,
    scoreDescriptions: {
      0: 'The underlayment was not properly flashed to the T-Ply at the roof-to-wall intersections.',
      1: 'No score',
      2: 'Well installed 4" flashing tape was used to seal underlayment to T-Ply Panels.',
      3: 'Well installed 6" or two courses of correctly lapped 4" flashing tape was used to seal underlayment to T-Ply Panels.',
      4: 'T-Ply lapped over all metal flashing.'
    }
  },
  {
    id: 'roof-cladding-roof-to-wall-step-flashing',
    category: 'Roof Cladding and Drainage',
    subcategory: 'Roof to Wall Flashing',
    item: 'Step Flashing (Shingles)',
    weight: 8,
    scoreDescriptions: {
      0: 'Step flashings were not installed or were improperly installed, or L-flashings without rolled hems were used at roof rake-to-wall intersections.',
      1: 'L-flashings with rolled hems were used at roof rake-to-wall intersections.',
      2: 'L-flashings with rolled hems were used at roof rake-to-wall intersections. (Where local codes permit)',
      3: 'No score',
      4: 'Step flashings were at least 4" x 4" x 6" in dimension and were installed and properly integrated with the roofing shingles.'
    }
  },
  
  {
    id: 'roof-cladding-roof-to-wall-underlayment-wrap-rake',
    category: 'Roof Cladding and Drainage',
    subcategory: 'Roof to Wall Flashing',
    item: 'Underlayment Wraps up Rake Wall',
    weight: 8,
    scoreDescriptions: {
      0: 'The underlayment did not wrap up the adjacent rake walls.',
      1: 'The underlayment inconsistently wrapped up the adjacent rake walls.',
      2: 'The underlayment wrapped up the adjacent shed walls 2" above flashing.',
      3: 'No score',
      4: 'The underlayment wrapped up all adjacent rake walls by at least 12".'
    }
  },
  {
    id: 'roof-cladding-roof-to-wall-underlayment-wrap-shed',
    category: 'Roof Cladding and Drainage',
    subcategory: 'Roof to Wall Flashing',
    item: 'Underlayment Wraps up Shed Wall',
    weight: 8,
    scoreDescriptions: {
      0: 'The underlayment did not wrap up the adjacent shed walls.',
      1: 'The underlayment inconsistently wrapped up the adjacent shed walls.',
      2: 'The underlayment wrapped up the adjacent shed walls 2" above flashing.',
      3: 'No score',
      4: 'The underlayment wrapped up all adjacent shed walls by at least 12".'
    }
  },
  // Roof Cladding and Drainage (8) - Gutters Installed
  {
    id: 'roof-cladding-gutters-installed',
    category: 'Roof Cladding and Drainage',
    subcategory: 'Gutters',
    item: 'Gutters Installed',
    weight: 8,
    scoreDescriptions: {
      0: 'Gutters were not installed.',
      1: 'Gutters were installed, but the gutter ends were too close to the cladding.',
      2: 'Gutters were properly installed and had a minimum 1/2" air space between the end cap and cladding materials, with quality control issues or no gutters were installed in a climate with less than 10" annual rainfall.',
      3: 'No score',
      4: 'Gutters were properly installed and had a minimum 1" air space between the end cap and cladding materials.'
    }
  },
  {
    id: 'roof-cladding-gutters-proper-spacing',
    category: 'Roof Cladding and Drainage',
    subcategory: 'Gutters',
    item: 'Proper Spacing',
    weight: 8,
    scoreDescriptions: {
      0: 'Downspouts were inadequate to handle roof runoff events for the house in that region.',
      1: 'Downspouts were properly spaced at a maximum of 40', with some quality control issues.',
      2: 'Downspouts were properly spaced at a maximum of 40',
      3: 'No score',
      4: 'Downspouts were more than adequate to handle roof runoff events for the house in that region.'
    }
  },
  // Roof Cladding and Drainage (8) - Valleys
  {
    id: 'roof-cladding-roof-to-wall-flashing-apron',
    category: 'Roof Cladding and Drainage',
    subcategory: 'Valleys',
    item: 'Shingles',
    weight: 8,
    scoreDescriptions: {
      0: 'Shingles were improperly layered in the valleys, or there was an open valley with exposed building paper.',
      1: 'No score',
      2: 'No score',
      3: 'Shingles were woven or closed cut at valleys, with the larger roof overlapping the smaller roof.',
      4: 'Open valleys were installed with exposed metal valley flashings.'
    }
  },
];
