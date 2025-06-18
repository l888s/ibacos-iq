
import { InspectionItem } from '@/types/inspection';

export const foundationItems: Omit<InspectionItem, 'score'>[] = [
  
  // Foundations (6) - Slab on Grade
  {
    id: 'foundation-slab-on-grade-capillary-break',
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
    id: 'foundation-slab-on-grade-conduit-installed-under-slab',
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
    id: 'foundation-slab-on-grade-penetration-sleeves',
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
    id: 'foundation-slab-on-grade-penetrations',
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
    id: 'foundation-slab-on-grade-post-tensioned-cable-end-protection',
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
    id: 'foundation-slab-on-grade-post-tensioned-slabs',
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
    id: 'foundation-slab-on-grade-slab-edge-waterproofing',
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
    id: 'foundation-slab-on-grade-slab-under-slab-vapor-barrier',
    category: 'Foundations',
    subcategory: 'Slab on Grade',
    item: 'Under Slab Vapor Barrier',
    weight: 6,
    scoreDescriptions: {
      0: 'No score',
      1: 'A poly vapor barrier was installed under the slab but with major deficiencies in installation quality.',
      2: 'A minimum 6-mil poly vapor barrier was installed and taped, or no vapor barrier was installed in a desert climate.',
      3: 'A minimum 10-mil poly vapor barrier was installed with minor inconsistencies in installation and taping.',
      4: 'A minimum 10-mil poly vapor barrier was installed under the slab, with all seams well sealed with tape.'
    }
  },

];
