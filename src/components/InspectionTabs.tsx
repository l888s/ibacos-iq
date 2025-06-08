
import { useEffect, useRef } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, CarouselApi } from '@/components/ui/carousel';
import { Inspection } from '@/contexts/InspectionContext';
import InspectionCategoryForm from './InspectionCategoryForm';

interface InspectionTabsProps {
  inspection: Inspection;
}

const InspectionTabs = ({ inspection }: InspectionTabsProps) => {
  const categories = [...new Set(inspection.items.map(item => item.category))];
  const carouselApiRef = useRef<CarouselApi>();

  useEffect(() => {
    // This effect will run when the component mounts to set up the carousel API
  }, []);

  const handleTabClick = (categoryIndex: number) => {
    if (carouselApiRef.current) {
      // Scroll to center the clicked tab
      carouselApiRef.current.scrollTo(categoryIndex);
    }
  };

  return (
    <Tabs defaultValue={categories[0]} className="w-full">
      <div className="relative mb-6">
        <Carousel 
          className="w-full max-w-full"
          setApi={(api) => {
            carouselApiRef.current = api;
          }}
          opts={{
            align: "center",
            loop: false,
          }}
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            <TabsList className="inline-flex h-auto bg-transparent p-0 space-x-2">
              {categories.map((category, index) => {
                const categoryItems = inspection.items.filter(item => item.category === category);
                const completedItems = categoryItems.filter(item => item.score !== null).length;
                const categoryProgress = Math.round((completedItems / categoryItems.length) * 100);
                
                return (
                  <CarouselItem key={category} className="pl-2 md:pl-4 basis-auto">
                    <TabsTrigger 
                      value={category} 
                      onClick={() => handleTabClick(index)}
                      className="text-sm h-auto py-3 px-4 whitespace-nowrap min-w-0 flex-shrink-0 bg-white border border-gray-200 data-[state=active]:bg-blue-500 data-[state=active]:text-white data-[state=active]:border-blue-500 transition-all duration-300 ease-in-out"
                    >
                      <div className="flex flex-col items-center">
                        <span className="font-medium">{category}</span>
                        <span className="text-xs opacity-75">{categoryProgress}%</span>
                      </div>
                    </TabsTrigger>
                  </CarouselItem>
                );
              })}
            </TabsList>
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-4" />
          <CarouselNext className="hidden md:flex -right-4" />
        </Carousel>
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
