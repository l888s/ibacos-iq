
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
      <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-6">
        {categories.map((category) => {
          const categoryItems = inspection.items.filter(item => item.category === category);
          const completedItems = categoryItems.filter(item => item.score !== null).length;
          const categoryProgress = Math.round((completedItems / categoryItems.length) * 100);
          
          return (
            <TabsTrigger key={category} value={category} className="text-sm">
              <div className="flex flex-col items-center">
                <span>{category}</span>
                <span className="text-xs text-gray-500">{categoryProgress}%</span>
              </div>
            </TabsTrigger>
          );
        })}
      </TabsList>
      
      {categories.map((category) => (
        <TabsContent key={category} value={category}>
          <InspectionCategoryForm category={category} />
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default InspectionTabs;
