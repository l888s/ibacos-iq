
import { InspectionItem } from '@/types/inspection';
import { siteItems } from './categories/siteItems';
import { foundationItems } from './categories/foundationItems';
import { framingItems } from './categories/framingItems';
import { thermalEnclosureItems } from './categories/thermalEnclosureItems';
import { airBarrierItems } from './categories/airBarrierItems';
import { drainagePlaneItems } from './categories/drainagePlaneItems';
import { wallCladdingItems } from './categories/wallCladdingItems';
import { showersAndTubsItems } from './categories/showersAndTubsItems';
import { hvacItems } from './categories/hvacItems';
import { plumbingElectricalItems } from './categories/plumbingElectricalItems';
import { interiorItems } from './categories/interiorItems';
import { roofingItems } from './categories/roofingItems';
import { exteriorItems } from './categories/exteriorItems';
import { electricalItems } from './categories/electricalItems';
import { plumbingItems } from './categories/plumbingItems';

export const allInspectionItems: Omit<InspectionItem, 'score'>[] = [
  ...siteItems,
  ...foundationItems,
  ...framingItems,
  ...thermalEnclosureItems,
  ...airBarrierItems,
  ...drainagePlaneItems,
  ...wallCladdingItems,
  ...exteriorItems, // These are now part of Wall Cladding
  ...showersAndTubsItems,
  ...hvacItems,
  ...plumbingElectricalItems,
  ...electricalItems, // These are now part of Plumbing and Electrical Systems
  ...plumbingItems, // These are now part of Plumbing and Electrical Systems
  ...interiorItems,
  ...roofingItems,
];

// Get unique categories for the inspection tabs
export const getInspectionCategories = (): string[] => {
  const categories = new Set(allInspectionItems.map(item => item.category));
  return Array.from(categories).sort();
};

// Get items for a specific category
export const getItemsByCategory = (category: string): Omit<InspectionItem, 'score'>[] => {
  return allInspectionItems.filter(item => item.category === category);
};

// Get subcategories for a specific category
export const getSubcategoriesByCategory = (category: string): string[] => {
  const items = getItemsByCategory(category);
  const subcategories = new Set(items.map(item => item.subcategory));
  return Array.from(subcategories).sort();
};
