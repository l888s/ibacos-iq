
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

// Debug logging to verify all items are loaded
console.log('=== INSPECTION ITEMS DEBUG ===');
console.log('Total inspection items loaded:', defaultInspectionItems.length);

// Log items by category
const categoryBreakdown = defaultInspectionItems.reduce((acc, item) => {
  if (!acc[item.category]) acc[item.category] = [];
  acc[item.category].push(item.item);
  return acc;
}, {} as Record<string, string[]>);

Object.entries(categoryBreakdown).forEach(([category, items]) => {
  console.log(`${category}: ${items.length} items`);
  console.log(`  Subcategories: ${[...new Set(defaultInspectionItems.filter(item => item.category === category).map(item => item.subcategory))].join(', ')}`);
});

// Log subcategory breakdown
const subcategoryBreakdown = defaultInspectionItems.reduce((acc, item) => {
  const key = `${item.category} > ${item.subcategory}`;
  if (!acc[key]) acc[key] = 0;
  acc[key]++;
  return acc;
}, {} as Record<string, number>);

console.log('=== SUBCATEGORY BREAKDOWN ===');
Object.entries(subcategoryBreakdown).forEach(([subcategory, count]) => {
  console.log(`${subcategory}: ${count} items`);
});

console.log('=== END DEBUG ===');
