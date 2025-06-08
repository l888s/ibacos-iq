
import { InspectionItem } from '@/types/inspection';
import { siteItems } from './categories/siteItems';
import { foundationItems } from './categories/foundationItems';
import { framingItems } from './categories/framingItems';
import { roofingItems } from './categories/roofingItems';
import { exteriorItems } from './categories/exteriorItems';
import { hvacItems } from './categories/hvacItems';
import { plumbingItems } from './categories/plumbingItems';
import { electricalItems } from './categories/electricalItems';
import { interiorItems } from './categories/interiorItems';

// Complete inspection criteria with all categories and items
export const defaultInspectionItems: Omit<InspectionItem, 'score'>[] = [
  ...siteItems,
  ...foundationItems,
  ...framingItems,
  ...roofingItems,
  ...exteriorItems,
  ...hvacItems,
  ...plumbingItems,
  ...electricalItems,
  ...interiorItems
];

console.log('Total inspection items loaded:', defaultInspectionItems.length);
console.log('Categories loaded:', [...new Set(defaultInspectionItems.map(item => item.category))]);
