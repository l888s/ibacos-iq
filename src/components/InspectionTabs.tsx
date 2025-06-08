
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Inspection } from '@/contexts/InspectionContext';
import InspectionCategoryForm from './InspectionCategoryForm';

interface InspectionTabsProps {
  inspection: Inspection;
}

const InspectionTabs = ({ inspection }: InspectionTabsProps) => {
  const categories = [...new Set(inspection.items.map(item => item.category))];

  return (
    <Tabs defaultValue={categories[0]} className="w-full">
      <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5 mb-6 h-auto">
        {categories.map((category) => {
          const categoryItems = inspection.items.filter(item => item.category === category);
          const completedItems = categoryItems.filter(item => item.score !== null).length;
          const categoryProgress = Math.round((completedItems / categoryItems.length) * 100);
          
          return (
            <TabsTrigger key={category} value={category} className="text-sm h-auto py-3">
              <div className="flex flex-col items-center">
                <span className="font-medium">{category}</span>
                <span className="text-xs text-gray-500">{categoryProgress}%</span>
              </div>
            </TabsTrigger>
          );
        })}
      </TabsList>
      
      {categories.map((category) => (
        <TabsContent key={category} value={category} className="mt-6">
          <InspectionCategoryForm category={category} />
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default InspectionTabs;
