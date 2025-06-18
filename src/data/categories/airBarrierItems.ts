
import { InspectionItem } from '@/types/inspection';

export const airBarrierItems: Omit<InspectionItem, 'score'>[] = [
  // Air Barrier (6) - Windows/Doors
  {
    id: 'air-barrier-windows-doors',
    category: 'Air Barrier',
    subcategory: 'Windows/Doors',
    item: 'Doors',
    weight: 6,
    scoreDescriptions: {
      0: 'No air sealing was installed around doors.',
      1: 'Fiberglass, or similar material was used in a chinking application.',
      2: 'Low-expansion foam was installed around doors with minor inconsistencies.',
      3: 'No score',
      4: 'Caulk and backer rod or low-expansion foam was consistently installed around doors, with good quality control.'
    }
  },
  {
    id: 'air-barrier-windows-windows',
    category: 'Air Barrier',
    subcategory: 'Windows/Doors',
    item: 'Windows',
    weight: 6,
    scoreDescriptions: {
      0: 'No air sealing was installed around windows.',
      1: 'Fiberglass, or similar material was used in a chinking application.',
      2: 'Low-expansion foam was installed around windows with minor inconsistencies.',
      3: 'Low-expansion foam was installed around windows with excess foam that was left for the drywall trades to deal with.',
      4: 'Caulk and backer rod or low-expansion foam were consistently installed around windows, with good quality control.'
    }
  },
  // Air Barrier (6) - Garage Separation Wall
  {
    id: 'air-barrier-garage-separation-wall-air-sealing-at-sill-plate',
    category: 'Air Barrier',
    subcategory: 'Garage Separation Wall',
    item: 'Air Sealing at Sill Plate',
    weight: 6,
    scoreDescriptions: {
      0: 'No air sealing was installed under the sill plates of the garage separation walls.',
      1: 'Inconsistent applications of air sealing were installed under the sill plates of the garage separation walls.',
      2: 'The sill plates at the garage separation walls were sealed with spray foam or caulk, or the plate was set on sill seal.',
      3: 'The sill plates at the garage separation walls were consistently installed on top of foam sill seal in addition to a bead of foam, with good quality control.',
      4: 'The sill plates at the garage separation walls were consistently installed on top of foam sill seal in addition to a bead of caulk or construction glue, with good quality control.'
    }
  },
  {
    id: 'air-barrier-garage-separation-wall-drywall-sealed-at-sill-plate',
    category: 'Air Barrier',
    subcategory: 'Garage Separation Wall',
    item: 'Drywall Sealed at Sill Plate',
    weight: 6,
    scoreDescriptions: {
      0: 'No score',
      1: 'No score',
      2: 'The drywall was not sealed to the sill plates on the garage separation walls.',
      3: 'The drywall was inconsistently sealed to the sill plates on the garage separation walls.',
      4: 'The drywall was properly sealed to the sill plates on the garage separation walls.'
    }
  },
  {
    id: 'air-barrier-garage-separation-wall-mech-platforms-dstopped',
    category: 'Air Barrier',
    subcategory: 'Garage Separation Wall',
    item: 'Mechanical Platforms Draftstopped/Sealed',
    weight: 6,
    scoreDescriptions: {
      0: 'Mechanical platforms connected to the garage separation walls were built with open frames without sealed draftstopping between the platform and the house.',
      1: 'Mechanical platforms connected to the garage separation walls had draftstopping but were not sealed.',
      2: 'Mechanical platforms connected to the garage separation walls had draftstopping but were inconsistently sealed.',
      3: 'No score',
      4: 'Mechanical platforms connected to the garage separation walls had draftstopping that was well sealed.'
    }
  },
  // Air Barrier (6) - Garage Wall Man Door
  {
    id: 'air-barrier-garage-separation-wall-man-door-co-monitor',
    category: 'Air Barrier',
    subcategory: 'Garage Wall Man Door',
    item: 'CO Monitor',
    weight: 6,
    scoreDescriptions: {
      0: 'No score',
      1: 'No score',
      2: 'CO monitors were installed inside of the home.',
      3: 'CO monitors were installed in the ceiling within 3' of garage fire door.',
      4: 'CO monitors were installed near the floor by the garage man door.'
    }
  },
  {
    id: 'air-barrier-garage-separation-wall-man-door-door-sealed-under-threshold',
    category: 'Air Barrier',
    subcategory: 'Garage Wall Man Door',
    item: 'Door Sealed under Threshold',
    weight: 6,
    scoreDescriptions: {
      0: 'There was no sealant under the threshold of the garage man door connecting to the house.',
      1: 'No score',
      2: 'The application of sealant under the threshold of the garage man door connecting to the house was inconsistent.',
      3: 'No score',
      4: 'Sealant was always found under the threshold of the garage man door connecting to the house.'
    }
  },
  {
    id: 'air-barrier-garage-separation-wall-man-door-self-closing-hinges',
    category: 'Air Barrier',
    subcategory: 'Garage Wall Man Door',
    item: 'Self-Closing-Hinges',
    weight: 6,
    scoreDescriptions: {
      0: 'No score',
      1: 'Self-closing hinges were not used on garage man doors connecting to the house.',
      2: 'No score',
      3: 'No score',
      4: 'Self-closing hinges were consistently used for all garage man doors connecting to the house.'
    }
  },
  {
    id: 'air-barrier-garage-separation-wall-man-door-weatherstripped-door',
    category: 'Air Barrier',
    subcategory: 'Garage Wall Man Door',
    item: 'Weatherstripped Door',
    weight: 6,
    scoreDescriptions: {
      0: 'The garage man door connecting to the house was not weatherstripped.',
      1: 'No score',
      2: 'There were isolated instances of missing weatherstripping on the garage man door connecting to the house.',
      3: 'No score',
      4: 'The garage man door connecting to the house was consistently weatherstripped.'
    }
  },
  // Air Barrier (6) - Chase Lids
  {
    id: 'air-barrier-chase-lids-draftstopped-sealed',
    category: 'Air Barrier',
    subcategory: 'Chase Lids',
    item: 'Draftstopped and Sealed',
    weight: 6,
    scoreDescriptions: {
      0: 'Chase lids were not installed.',
      1: 'Chase lids were draftstopped but were not air sealed.',
      2: 'Chase lids were draftstopped but were inconsistently air sealed.',
      3: 'No score',
      4: 'Chase lids were consistently draftstopped and air sealed with good quality control.'
    }
  },
  // Air Barrier (6) - Penetrations
  {
    id: 'air-barrier-penetrations-exterior-wall-penetrations',
    category: 'Air Barrier',
    subcategory: 'Penetrations',
    item: 'Exterior Wall Penetrations',
    weight: 6,
    scoreDescriptions: {
      0: 'No air sealing was installed at exterior penetrations.',
      1: 'No score',
      2: 'Caulk or expanding foam was inconsistently installed around exterior penetrations.',
      3: 'No score',
      4: 'Caulk or expanding foam was consistently installed around exterior wall penetrations.'
    }
  },
  {
    id: 'air-barrier-penetrations-hvac-penetrations-through-chase-lids',
    category: 'Air Barrier',
    subcategory: 'Penetrations',
    item: 'HVAC Penetrations through Chase Lids',
    weight: 6,
    scoreDescriptions: {
      0: 'No air sealing was installed at HVAC chase penetrations.',
      1: 'Air sealing around HVAC chase penetrations was installed with poor quality control.',
      2: 'Caulk or expanding foam was inconsistently installed around HVAC chase penetrations.',
      3: 'Caulk or expanding foam was installed around HVAC chase penetrations, with minor inconsistencies.',
      4: 'Caulk or expanding foam was consistently installed around HVAC chase penetrations.'
    }
  },
  {
    id: 'air-barrier-penetrations-penetrations-through-drywall',
    category: 'Air Barrier',
    subcategory: 'Penetrations',
    item: 'Penetrations through Drywall',
    weight: 6,
    scoreDescriptions: {
      0: 'No penetrations through the drywall were sealed.',
      1: 'No score',
      2: 'Electrical boxes through the ceiling drywall were sealed.',
      3: 'No score',
      4: 'All penetrations through the drywall (walls and ceilings) were sealed.'
    }
  },
  {
    id: 'air-barrier-penetrations-plate-penetrations',
    category: 'Air Barrier',
    subcategory: 'Penetrations',
    item: 'Plate Penetrations',
    weight: 6,
    scoreDescriptions: {
      0: 'No air sealing was installed at plate penetrations.',
      1: 'Air sealing around plate penetrations was installed with poor quality control.',
      2: 'Caulk or expanding foam was inconsistently installed around plate penetrations.',
      3: 'No score',
      4: 'Caulk or expanding foam was consistently installed around plate penetrations.'
    }
  },
  // Air Barrier (6) - Sills and Top Plates
  {
    id: 'air-barrier-sills-top-plates-air-sealing-sill-plates',
    category: 'Air Barrier',
    subcategory: 'Sills and Top Plates',
    item: 'Air Sealing Sill Plates',
    weight: 6,
    scoreDescriptions: {
      0: 'No air sealing was installed under sill plates.',
      1: 'Rope caulk or glue as a sill sealer was used under exterior walls.',
      2: 'Closed cell foam sill sealer alone was used under exterior walls.',
      3: 'Closed cell foam sill sealer was used under exterior walls in addition to poly seal foam, with good quality control.',
      4: 'Closed cell foam sill sealer was used under exterior walls in addition to caulk, with good quality control.'
    }
  },
  {
    id: 'air-barrier-sills-top-plates-top-plate-drywall',
    category: 'Air Barrier',
    subcategory: 'Sills and Top Plates',
    item: 'Top Plate to Drywall',
    weight: 6,
    scoreDescriptions: {
      0: 'No score',
      1: 'No score',
      2: 'No gaskets were installed between the top plates and the drywall.',
      3: 'No score',
      4: 'Gaskets were installed between the top plates and the drywall.'
    }
  },
  // Air Barrier (6) - Recessed Lights
  {
    id: 'air-barrier-recessed-lights-airtight-can-lights',
    category: 'Air Barrier',
    subcategory: 'Recessed Lights',
    item: 'Airtight Can Lights',
    weight: 6,
    scoreDescriptions: {
      0: 'Recessed lights installed in insulated ceilings were not rated as airtight.',
      1: 'No score',
      2: 'Recessed lights in insulated ceilings were rated as airtight, but no gasketed trim assemblies were installed.',
      3: 'No score',
      4: 'Surface-mounted LED lighting was used in-lieu of can lighting.'
    }
  },
];
