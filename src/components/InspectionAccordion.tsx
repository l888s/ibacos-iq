
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useInspection } from '@/contexts/InspectionContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Inspection } from '@/types/inspection';

const scoreLabels = {
  'N/O': 'Not Observed',
  0: 'Poor (0)',
  1: 'Below Average (1)', 
  2: 'Average (2)',
  3: 'Good (3)',
  4: 'Excellent (4)'
};

const scoreColors = {
  'N/O': 'bg-gray-500 hover:bg-gray-600',
  0: 'bg-red-500 hover:bg-red-600',
  1: 'bg-orange-500 hover:bg-orange-600',
  2: 'bg-yellow-500 hover:bg-yellow-600', 
  3: 'bg-blue-500 hover:bg-blue-600',
  4: 'bg-green-500 hover:bg-green-600'
};

interface InspectionAccordionProps {
  inspection: Inspection;
}

const InspectionAccordion = ({ inspection }: InspectionAccordionProps) => {
  const { updateItemScore } = useInspection();

  if (!inspection) {
    console.log('No inspection provided to InspectionAccordion');
    return null;
  }

  console.log('InspectionAccordion rendering with inspection:', inspection);
  console.log('Total items in inspection:', inspection.items.length);
  console.log('Items by category:', inspection.items.reduce((acc, item) => {
    acc[item.category] = (acc[item.category] || 0) + 1;
    return acc;
  }, {} as Record<string, number>));

  const categories = [...new Set(inspection.items.map(item => item.category))];
  console.log('Categories found:', categories);

  const getCategoryProgress = (category: string) => {
    const categoryItems = inspection.items.filter(item => item.category === category);
    const completedItems = categoryItems.filter(item => item.score !== null).length;
    return Math.round((completedItems / categoryItems.length) * 100);
  };

  return (
    <div className="space-y-4">
      <Accordion type="multiple" className="w-full space-y-4">
        {categories.map((category) => {
          const categoryItems = inspection.items.filter(item => item.category === category);
          const completedItems = categoryItems.filter(item => item.score !== null).length;
          const categoryProgress = getCategoryProgress(category);
          const categoryWeight = categoryItems[0]?.weight || 0;
          
          console.log(`Category ${category}: ${categoryItems.length} items, weight: ${categoryWeight}`);
          
          // Group by subcategory
          const subcategories = [...new Set(categoryItems.map(item => item.subcategory))];

          return (
            <AccordionItem key={category} value={category} className="border rounded-lg">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center justify-between w-full mr-4">
                  <div className="flex items-center space-x-4">
                    <h3 className="text-lg font-semibold">{category}</h3>
                    <Badge variant="secondary">Weight: {categoryWeight}</Badge>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-sm text-gray-600">
                      {completedItems}/{categoryItems.length} Complete
                    </div>
                    <div className="w-32">
                      <Progress value={categoryProgress} className="h-2" />
                    </div>
                    <div className="text-sm font-medium">
                      {categoryProgress}%
                    </div>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-6">
                  {subcategories.map((subcategory) => {
                    const subcategoryItems = categoryItems.filter(item => item.subcategory === subcategory);
                    
                    return (
                      <Card key={subcategory} className="border-l-4 border-blue-500">
                        <CardHeader>
                          <CardTitle className="text-xl text-blue-700">{subcategory}</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                          {subcategoryItems.map((inspectionItem) => (
                            <div key={inspectionItem.id} className="border rounded-lg p-6 bg-gray-50">
                              <div className="mb-4">
                                <h4 className="font-semibold text-lg text-gray-900 mb-2">{inspectionItem.item}</h4>
                              </div>
                              
                              <div className="space-y-4">
                                {/* Score Buttons */}
                                <div className="grid grid-cols-2 md:grid-cols-6 gap-3">
                                  {(['N/O', 0, 1, 2, 3, 4] as const).map((score) => (
                                    <Button
                                      key={score}
                                      variant={inspectionItem.score === score ? "default" : "outline"}
                                      size="sm"
                                      onClick={() => updateItemScore(inspectionItem.id, score)}
                                      className={`text-sm h-auto py-3 px-4 ${inspectionItem.score === score ? scoreColors[score] : ""}`}
                                      disabled={score !== 'N/O' && inspectionItem.scoreDescriptions[score] === 'No score'}
                                    >
                                      <div className="text-center">
                                        <div className="font-semibold">{scoreLabels[score]}</div>
                                      </div>
                                    </Button>
                                  ))}
                                </div>
                                
                                {/* Score Descriptions */}
                                <div className="space-y-2 text-sm">
                                  <div className="p-3 rounded border-l-4 border-gray-400 bg-gray-50">
                                    <span className="font-medium">N/O:</span> Not Observed - Use when item cannot be inspected
                                  </div>
                                  {([0, 1, 2, 3, 4] as const).map((score) => {
                                    const description = inspectionItem.scoreDescriptions[score];
                                    if (description === 'No score') return null;
                                    
                                    return (
                                      <div 
                                        key={score} 
                                        className={`p-3 rounded border-l-4 ${
                                          score === 0 ? 'border-red-400 bg-red-50' :
                                          score === 1 ? 'border-orange-400 bg-orange-50' :
                                          score === 2 ? 'border-yellow-400 bg-yellow-50' :
                                          score === 3 ? 'border-blue-400 bg-blue-50' :
                                          'border-green-400 bg-green-50'
                                        }`}
                                      >
                                        <span className="font-medium">{score}:</span> {description}
                                      </div>
                                    );
                                  })}
                                </div>
                                
                                {/* Current Score Display */}
                                {inspectionItem.score !== null && (
                                  <div className="mt-4">
                                    <Badge 
                                      variant="secondary"
                                      className={`${scoreColors[inspectionItem.score as keyof typeof scoreColors].replace('hover:', '')} text-white text-base px-4 py-2`}
                                    >
                                      Score: {inspectionItem.score} - {scoreLabels[inspectionItem.score as keyof typeof scoreLabels]}
                                    </Badge>
                                  </div>
                                )}
                              </div>
                            </div>
                          ))}
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
};

export default InspectionAccordion;
