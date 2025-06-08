
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
      <div className="mb-6 overflow-x-auto">
        <TabsList className="inline-flex h-auto bg-white border border-gray-200 rounded-lg p-1 min-w-full">
          {categories.map((category) => {
            const categoryItems = inspection.items.filter(item => item.category === category);
            const completedItems = categoryItems.filter(item => item.score !== null).length;
            const categoryProgress = Math.round((completedItems / categoryItems.length) * 100);
            
            return (
              <TabsTrigger 
                key={category}
                value={category} 
                className="text-sm h-auto py-3 px-4 whitespace-nowrap flex-shrink-0 bg-transparent border-none data-[state=active]:bg-blue-500 data-[state=active]:text-white data-[state=active]:shadow-sm transition-all duration-200 ease-in-out"
              >
                <div className="flex flex-col items-center">
                  <span className="font-medium">{category}</span>
                  <span className="text-xs opacity-75">{categoryProgress}%</span>
                </div>
              </TabsTrigger>
            );
          })}
        </TabsList>
      </div>
      
      {categories.map((category) => (
        <TabsContent key={category} value={category} className="mt-6">
          <InspectionCategoryForm category={category} />
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default InspectionTabs;
